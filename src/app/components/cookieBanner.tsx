"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function CookieBanner() {
  const [cookieAccepted, setCookieAccepted] = useState(true);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!localStorage.getItem("cka"))
        timeout = setTimeout(() => setCookieAccepted(false), 3000);
    } catch {
      timeout = setTimeout(() => setCookieAccepted(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, []);
  const handleAcceptCookie = () => {
    try {
      localStorage.setItem("cka", "yes");
    } catch {
      /* Dismiss for this visit when storage is unavailable. */
    }
    setCookieAccepted(true);
  };
  if (cookieAccepted) return null;
  return (
    <aside
      className="axi-cookie-banner text-rasin-black font-satoshi antialiased [&_svg]:shrink-0 fixed left-6 bottom-6 z-[150] w-[min(410px,_calc(100%_-_48px))] bg-white border border-hub-border rounded-2xl shadow-hub p-5 [&_h2]:text-[13px] [&_h2]:font-bold [&_h2]:mb-2 [&_p]:text-[12px] [&_p]:leading-[1.7] [&_p]:text-hub-text [&_p_a]:text-hub-accent-strong [&_p_a]:underline [&>div]:mt-3.5 [&>div]:flex [&>div]:justify-end [&_.axi-button]:min-h-[36px] [&_.axi-button]:[padding:8px_14px] [&_.axi-button]:text-[11px] max-[699px]:left-4 max-[699px]:bottom-4 max-[699px]:w-[min(410px,_calc(100%_-_32px))] max-[699px]:p-[17px]"
      aria-label="Cookie information"
    >
      <h2>A little about cookies</h2>
      <p>
        We use cookies to improve your web experience. Read our{" "}
        <Link
          href="/privacy"
          className="focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4 no-underline"
        >
          privacy policy
        </Link>{" "}
        for details.
      </p>
      <div>
        <button
          type="button"
          className="axi-button inline-flex items-center justify-center gap-[18px] min-h-[48px] [padding:12px_20px] border border-transparent rounded-2xl text-[14px] font-bold leading-[1.5] cursor-pointer [transition:background-color_160ms,_border-color_160ms,_box-shadow_160ms] [&_svg]:w-[17px] [&_svg]:h-[17px] axi-button-primary bg-hub-accent-strong text-white shadow-[0_3px_7px_rgb(108_99_255_/_12%)] hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
          onClick={handleAcceptCookie}
        >
          Accept cookies
        </button>
      </div>
    </aside>
  );
}
