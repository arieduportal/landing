/**
 * Centralized API client and CSRF token manager for Axiolot Hub.
 *
 * Automatically fetches and caches the CSRF X-Token from `/api/x-token` before
 * any API request is dispatched to the backend, preventing race conditions and
 * eliminating duplicate useEffect calls across components.
 */

let cachedToken: string | null = null;
let tokenInFlight: Promise<string> | null = null;

/**
 * Fetches the X-Token from `/api/x-token` or returns the cached token.
 * Multiple concurrent callers will await the same in-flight promise.
 */
export async function getXToken(forceRefresh = false): Promise<string> {
  if (typeof window === "undefined") {
    return "";
  }

  if (!forceRefresh && cachedToken) {
    return cachedToken;
  }

  if (!forceRefresh && tokenInFlight) {
    return tokenInFlight;
  }

  tokenInFlight = (async () => {
    try {
      const response = await fetch("/api/x-token", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to obtain x-token: ${response.statusText}`);
      }

      const data = await response.json();
      cachedToken = (data && data.token) ? String(data.token) : "";
      return cachedToken;
    } catch (err) {
      cachedToken = null;
      throw err;
    } finally {
      tokenInFlight = null;
    }
  })();

  return tokenInFlight;
}

/**
 * Clears the currently cached token so the next request fetches a fresh one.
 */
export function clearTokenCache(): void {
  cachedToken = null;
  tokenInFlight = null;
}

export interface ApiFetchOptions extends RequestInit {
  skipToken?: boolean;
}

/**
 * Centralized fetch wrapper that:
 * 1. Waits for the X-Token before sending the request.
 * 2. Automatically attaches "X-XSRF-TOKEN" and "Track-Id".
 * 3. Prepends `NEXT_PUBLIC_API` if a relative endpoint is provided.
 * 4. Defaults to `credentials: "include"` and `Content-Type: "application/json"`.
 * 5. Automatically retries once if the token has expired (401 or 419).
 */
export async function apiFetch(
  endpoint: string,
  options: ApiFetchOptions = {},
): Promise<Response> {
  const { skipToken = false, headers: customHeaders, ...restOptions } = options;

  let token = "";
  if (!skipToken) {
    try {
      token = await getXToken();
    } catch (err) {
      console.error("[apiFetch] Error getting X-Token:", err);
    }
  }

  const trackId =
    typeof window !== "undefined"
      ? (window as Window & { TRACK_ID?: string }).TRACK_ID || ""
      : "";

  const headers = new Headers(customHeaders);

  if (token && !headers.has("X-XSRF-TOKEN")) {
    headers.set("X-XSRF-TOKEN", token);
  }

  if (trackId && !headers.has("Track-Id")) {
    headers.set("Track-Id", trackId);
  }

  if (
    !headers.has("Content-Type") &&
    !(restOptions.body instanceof FormData) &&
    restOptions.body !== undefined
  ) {
    headers.set("Content-Type", "application/json");
  }

  const baseUrl = process.env.NEXT_PUBLIC_API || "";
  const isAbsolute =
    endpoint.startsWith("http://") || endpoint.startsWith("https://");
  const url = isAbsolute
    ? endpoint
    : `${baseUrl.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;

  let response = await fetch(url, {
    ...restOptions,
    headers,
    credentials: restOptions.credentials ?? "include",
  });

  // If token expired/invalid (401 or 419), retry once with refreshed token
  if (!skipToken && (response.status === 401 || response.status === 419)) {
    clearTokenCache();
    try {
      const freshToken = await getXToken(true);
      if (freshToken) {
        headers.set("X-XSRF-TOKEN", freshToken);
        response = await fetch(url, {
          ...restOptions,
          headers,
          credentials: restOptions.credentials ?? "include",
        });
      }
    } catch {
      // Ignore retry failure, return original response
    }
  }

  return response;
}

// Pre-fetch token in browser so it is ready before components interact
if (typeof window !== "undefined") {
  void getXToken().catch(() => {});
}
