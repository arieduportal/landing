"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  LuArrowRight,
  LuBookOpen,
  LuFileText,
  LuLoader2,
  LuRefreshCw,
  LuSearch,
  LuX,
} from "react-icons/lu";
import { PageContainer } from "./pagePrimitives";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  fullArticle: string;
  userId: number;
  category: string;
  image?: string;
  authorName?: string;
  publishDate?: string;
}
interface ServerResponse {
  status: boolean;
  message: string;
  data: BlogPost[];
  categories: string[];
}

function PublicationDate({ value }: { value?: string }) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return (
    <time dateTime={date.toISOString()}>
      {new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(date)}
    </time>
  );
}

// Helper to normalize and sanitize dynamic CMS image URLs
function normalizeImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  let cleanUrl = url.trim();
  // Ensure HTTPS if static CDN URL was returned with HTTP
  if (cleanUrl.startsWith("http://static.axiolot.com.ng")) {
    cleanUrl = cleanUrl.replace("http://", "https://");
  }
  // Remove accidental duplicate slashes in the path (e.g., https://domain.com//image.png)
  cleanUrl = cleanUrl.replace(/([^:]\/)\/+/g, "$1");
  return cleanUrl;
}

function Author({ post, light = false }: { post: BlogPost; light?: boolean }) {
  const name = post.authorName || "Author not listed";
  const initials = post.authorName
    ? post.authorName
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "—";
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl text-[10px] font-bold " +
          (light
            ? "bg-white/10 text-white"
            : "bg-hub-tint text-hub-accent-strong")
        }
      >
        {initials}
      </span>
      <div
        className={
          "text-[11px] leading-5 " +
          (light ? "text-slate-200" : "text-hub-muted")
        }
      >
        <span
          className={
            "block font-medium " + (light ? "text-white" : "text-rasin-black")
          }
        >
          {name}
        </span>
        <PublicationDate value={post.publishDate} />
      </div>
    </div>
  );
}

function ArticleReader({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      if (dialog?.open) dialog.close();
    };
  }, []);
  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="article-title"
      className="m-auto max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-hub-border bg-white p-0 text-rasin-black shadow-hub backdrop:bg-rasin-black/60"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hub-border bg-white px-5 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-hub-muted">
          THE AXIOLOT JOURNAL
        </span>
        <button
          type="button"
          onClick={close}
          aria-label="Close article"
          className="flex h-10 w-10 items-center justify-center rounded-2xl text-hub-text hover:bg-hub-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-2"
        >
          <LuX className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="p-6 sm:p-10">
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-hub-accent-strong">
          {post.category}
        </p>
        <h2
          id="article-title"
          className="mt-4 text-2xl font-bold leading-tight tracking-[-0.7px] sm:text-3xl"
        >
          {post.title}
        </h2>
        <div className="mt-5">
          <Author post={post} />
        </div>
        {post.image && (
          <div className="relative mt-7 aspect-video overflow-hidden rounded-2xl bg-hub-surface">
            <Image
              src={normalizeImageUrl(post.image) || post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
              quality={80}
              onError={(_e) => {
                console.warn(`Failed to load image: ${post.image}`);
              }}
            />
          </div>
        )}
        <div
          className="mx-auto mt-8 max-w-prose break-words text-[15px] leading-8 text-hub-text [&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-rasin-black [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-rasin-black [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-rasin-black [&_p]:my-5 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-2 [&_a]:text-hub-accent-strong [&_a]:underline [&_a]:underline-offset-4 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-royal-lilac [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-royal-lilac [&_blockquote]:pl-5 [&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-hub-surface [&_pre]:p-4 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_td]:border [&_td]:border-hub-border [&_td]:p-3 [&_th]:border [&_th]:border-hub-border [&_th]:p-3"
          dangerouslySetInnerHTML={{ __html: post.fullArticle }}
        />
      </div>
    </dialog>
  );
}

function Skeletons() {
  return (
    <div role="status" aria-label="Loading articles">
      <span className="sr-only">Loading the journal…</span>
      <div
        aria-hidden="true"
        className="animate-pulse motion-reduce:animate-none"
      >
        <div className="h-[300px] rounded-2xl border border-hub-border bg-hub-surface" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="rounded-2xl border border-hub-border p-5"
            >
              <div className="aspect-video rounded-2xl bg-hub-surface" />
              <div className="mt-5 h-3 w-1/3 rounded-2xl bg-hub-surface" />
              <div className="mt-4 h-5 w-4/5 rounded-2xl bg-hub-surface" />
              <div className="mt-3 h-3 w-full rounded-2xl bg-hub-surface" />
              <div className="mt-2 h-3 w-3/4 rounded-2xl bg-hub-surface" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const postsRef = useRef<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(false);
  const requestRef = useRef<AbortController | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [categories, setCategories] = useState([
    "All",
    "Education",
    "Technology",
    "Tips",
    "Sports",
  ]);
  const [query, setQuery] = useState("");
  const postsPerPage = 10;

  const fetchPosts = useCallback(async () => {
    if (loadingRef.current && !requestRef.current?.signal.aborted) return;
    const controller = new AbortController();
    requestRef.current = controller;
    loadingRef.current = true;
    setLoading(true);
    setError(null);
    try {
      const trackId = (window as Window & { TRACK_ID?: string }).TRACK_ID || "";
      const response = await fetch(process.env.NEXT_PUBLIC_API + "/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Track-Id": trackId },
        body: JSON.stringify({}),
        credentials: "include",
        signal: controller.signal,
      });
      if (!response.ok)
        throw new Error("We couldn't load the journal. Please try again.");
      const result = (await response.json()) as ServerResponse;
      if (controller.signal.aborted) return;
      if (result.status && Array.isArray(result.data)) {
        const existing = new Set(postsRef.current.map((post) => post.id));
        const newPosts = result.data.filter((post) => {
          if (existing.has(post.id)) return false;
          existing.add(post.id);
          return true;
        });
        postsRef.current = [...postsRef.current, ...newPosts];
        setPosts(postsRef.current);
        if (Array.isArray(result.categories) && result.categories.length)
          setCategories(Array.from(new Set(["All", ...result.categories])));
        setHasMore(result.data.length === postsPerPage && newPosts.length > 0);
      } else {
        setError(
          result.message || "We couldn't load the journal. Please try again.",
        );
        setHasMore(false);
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        setError(
          err instanceof Error
            ? err.message
            : "We couldn't load the journal. Please try again.",
        );
        setHasMore(false);
      }
    } finally {
      if (requestRef.current === controller && !controller.signal.aborted) {
        loadingRef.current = false;
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
    return () => {
      requestRef.current?.abort();
      loadingRef.current = false;
    };
  }, [fetchPosts, page]);

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        (post) =>
          (selectedCategory === "All" || post.category === selectedCategory) &&
          (post.title + " " + post.description + " " + (post.authorName || ""))
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [posts, selectedCategory, query],
  );
  const featured =
    selectedCategory === "All" && !query.trim() ? filteredPosts[0] : undefined;
  const remainingPosts = featured ? filteredPosts.slice(1) : filteredPosts;
  const loadMore = () => {
    if (hasMore && !loadingRef.current) setPage((previous) => previous + 1);
  };

  return (
    <section
      id="blog-posts"
      className="scroll-mt-24 py-10 md:py-14"
      aria-label="Journal articles"
    >
      <PageContainer>
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-hub-border pb-6 lg:flex-row lg:items-center">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={
                  "min-h-[40px] rounded-2xl border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-2 motion-reduce:transition-none " +
                  (selectedCategory === category
                    ? "border-rasin-black bg-rasin-black text-white"
                    : "border-hub-border bg-white text-hub-text hover:border-royal-lilac hover:text-hub-accent-strong")
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-[265px] lg:shrink-0">
            <label htmlFor="article-search" className="sr-only">
              Search articles
            </label>
            <LuSearch
              className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-hub-muted"
              aria-hidden="true"
            />
            <input
              id="article-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the journal"
              className="h-11 w-full rounded-2xl border border-hub-border bg-white pl-11 pr-4 text-xs text-rasin-black placeholder:text-hub-muted focus:border-royal-lilac focus:outline-none focus:ring-2 focus:ring-royal-lilac/20"
            />
          </div>
        </div>

        {loading && posts.length === 0 ? (
          <Skeletons />
        ) : error && posts.length === 0 ? (
          <div
            className="rounded-2xl border border-hub-border bg-hub-surface px-6 py-14 text-center"
            role="status"
          >
            <LuRefreshCw
              className="mx-auto h-8 w-8 text-hub-accent-strong"
              aria-hidden="true"
            />
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.5px]">
              Let&apos;s try that again.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-hub-text">
              {error}
            </p>
            <button
              type="button"
              onClick={() => void fetchPosts()}
              className="mt-6 inline-flex min-h-[44px] items-center gap-3 rounded-2xl bg-hub-accent-strong px-5 py-3 text-xs font-bold text-white hover:bg-hub-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            >
              Retry loading articles{" "}
              <LuRefreshCw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-hub-border bg-hub-surface px-6 py-14 text-center">
            <LuBookOpen
              className="mx-auto h-8 w-8 text-hub-accent-strong"
              aria-hidden="true"
            />
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.5px]">
              Stories are on their way.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-hub-text">
              There aren&apos;t any published articles to show yet. In the
              meantime, take a closer look at the Axiolot ecosystem.
            </p>
            <Link
              href="/ecosystem"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4"
            >
              Explore the ecosystem{" "}
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <>
            {featured && (
              <article className="mb-10 grid overflow-hidden rounded-2xl border border-hub-border bg-rasin-black text-white md:grid-cols-2">
                <div className="flex flex-col items-start p-7 sm:p-9 lg:p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-hub-tint">
                    IN FOCUS · {featured.category}
                  </p>
                  <h2 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.8px] lg:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-200">
                    {featured.description}
                  </p>
                  <div className="mb-6 mt-6">
                    <Author post={featured} light />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(featured)}
                    className="mt-auto inline-flex min-h-[44px] items-center gap-4 rounded-2xl bg-white px-5 py-3 text-xs font-bold text-rasin-black hover:bg-hub-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
                  >
                    Read article{" "}
                    <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative min-h-[240px] bg-white/5 md:min-h-[340px]">
                  {featured.image ? (
                    <Image
                      src={normalizeImageUrl(featured.image) ||featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      quality={80}
                      onError={(_e) => {
                        console.warn(`Failed to load image: ${featured.image}`);
                      }}
                    />
                  ) : (
                    <div className="flex h-full min-h-[240px] flex-col items-center justify-center border-t border-white/[0.15] p-8 text-center md:min-h-[340px] md:border-l md:border-t-0">
                      <LuBookOpen
                        className="h-16 w-16 text-hub-tint"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                      <span className="mt-6 text-[10px] uppercase tracking-[2px] text-slate-200">
                        THE AXIOLOT JOURNAL
                      </span>
                      <p className="mt-3 text-lg font-medium">
                        Shared ideas.
                        <br />
                        Stronger school communities.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            )}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold tracking-[-0.3px]">
                {selectedCategory === "All"
                  ? "From the journal"
                  : selectedCategory}
              </h2>
              <p
                role="status"
                aria-live="polite"
                className="text-xs text-hub-muted"
              >
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
                {query.trim() ? " matching your search" : " to explore"}
              </p>
            </div>
            {filteredPosts.length === 0 && (
              <div className="rounded-2xl border border-hub-border bg-hub-surface p-8 text-center">
                <LuSearch
                  className="mx-auto h-7 w-7 text-hub-muted"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold">
                  No matching articles.
                </h3>
                <p className="mt-2 text-sm leading-7 text-hub-text">
                  Try another topic or clear your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 rounded-2xl px-3 py-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            )}
            <InfiniteScroll
              dataLength={posts.length}
              next={loadMore}
              hasMore={hasMore && !error}
              loader={
                <p
                  className="mt-8 flex items-center justify-center gap-2 text-xs text-hub-muted"
                  role="status"
                >
                  <LuLoader2
                    className="h-4 w-4 animate-spin motion-reduce:animate-none"
                    aria-hidden="true"
                  />
                  Loading more articles…
                </p>
              }
              className="overflow-visible"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-hub-border bg-white transition-colors hover:border-royal-lilac/40 motion-reduce:transition-none"
                  >
                    <div className="relative aspect-[16/9] bg-hub-surface">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          quality={80}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <LuFileText
                            className="h-10 w-10 text-hub-accent-strong"
                            strokeWidth={1.25}
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col items-start p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[1.3px] text-hub-accent-strong">
                        {post.category}
                      </p>
                      <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-snug tracking-[-0.5px]">
                        {post.title}
                      </h3>
                      <p className="mb-5 mt-3 line-clamp-3 text-sm leading-7 text-hub-text">
                        {post.description}
                      </p>
                      <div className="mt-auto">
                        <Author post={post} />
                      </div>
                      <button
                        type="button"
                        aria-label={"Read " + post.title}
                        onClick={() => setSelectedPost(post)}
                        className="mt-5 inline-flex min-h-[40px] items-center gap-2 rounded-2xl py-2 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-[3px]"
                      >
                        Read article{" "}
                        <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </InfiniteScroll>
            <div className="mt-10 border-t border-hub-border pt-7 text-center">
              {error ? (
                <div role="status">
                  <p className="text-sm text-hub-text">{error}</p>
                  <button
                    type="button"
                    onClick={() => void fetchPosts()}
                    className="mt-4 rounded-2xl border border-hub-border px-5 py-3 text-xs font-bold text-hub-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac"
                  >
                    Try again
                  </button>
                </div>
              ) : hasMore ? (
                <button
                  type="button"
                  disabled={loading}
                  onClick={loadMore}
                  className="inline-flex min-h-[44px] items-center gap-3 rounded-2xl border border-hub-border bg-white px-6 py-3 text-xs font-bold text-rasin-black hover:border-royal-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-lilac focus-visible:outline-offset-4 disabled:cursor-wait disabled:opacity-60"
                >
                  {loading ? "Loading articles…" : "Load more articles"}
                  {loading ? (
                    <LuLoader2
                      className="h-4 w-4 animate-spin motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  ) : (
                    <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              ) : (
                <p className="text-xs text-hub-muted">
                  You&apos;re all caught up with the published articles.
                </p>
              )}
            </div>
          </>
        )}
      </PageContainer>
      {selectedPost && (
        <ArticleReader
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
}
