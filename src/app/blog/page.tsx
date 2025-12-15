"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    fullArticle: string;
    userId: number;
    category: string;
    image?: string;
    authorName?: string; // Optional: Replace userId
    publishDate?: string; // Optional: Replace mock date
}

interface ServerResponse {
    status: boolean;
    message: string;
    data: BlogPost[];
    categories: string[]
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const postsPerPage = 10;
    const [XToken] = useState('');

    let categories = useMemo(() => ['All', 'Education', 'Technology', 'Tips', 'Sports'], []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://api.axiolot.com.ng/blog', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Track-Id': `${window.TRACK_ID || ''}`,
                        'X-XSRF-TOKEN': XToken ?? ""
                    },
                    body: JSON.stringify({}),
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const result = await response.json() as ServerResponse;

                if (result.status) {
                    setPosts((prev) => [...prev, ...result.data]);
                    categories = useMemo(() => result.categories, [])
                    setHasMore(result.data.length === postsPerPage);
                } else {
                    setError(result.message);
                }
            } catch (err) {
                setError('No articles available');
                // setHasMore(false);
            } finally {
                // setLoading(false);
            }
        };
        setTimeout(() =>
            fetchPosts(), 5000);
    }, [XToken, categories, page]);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter((post) => post.category === selectedCategory));
        }
    }, [posts, selectedCategory]);

    const memoizedCategories = useMemo(() => categories, [categories]);

    const loadMore = () => {
        if (hasMore && !loading) {
            setPage((prev) => prev + 1);
        }
    };
    const SkeletonCard = () => (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 animate-shimmer"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-4 animate-shimmer"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-full mb-2 animate-shimmer"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-5/6 mb-4 animate-shimmer"></div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-shimmer"></div>
                <div>
                    <div className="h-4 bg-gray-200 rounded-lg w-32 mb-2 animate-shimmer"></div>
                    <div className="h-3 bg-gray-200 rounded-lg w-24 animate-shimmer"></div>
                </div>
            </div>
            <div className="h-10 bg-gray-200 rounded-full w-28 mt-4 animate-shimmer"></div>
        </div>
    );
    const ErrorUI = () => (
        <main className="flex justify-center items-center flex-col w-full h-[80vh] gap-y-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold uppercase">Blog</h1>
                <p className="text-lg text-gray-500">No article yet</p>
                <button onClick={() => window.location.reload()} className="bg-rasin-black mt-3.5 text-white rounded-full text-sm px-4 py-1.5" >Retry</button>
            </div>
        </main>
    );
    const BlogPostCard = ({ post }: { post: BlogPost }) => (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            {post.image && (
                <div className="relative h-48">
                    <Image
                        src={post.image ?? "https://static.axiolot.com.ng/image/article-placeholder"}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        loading="lazy"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="flex gap-2 mb-3">
                    <span className="inline-block bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                </div>
                <h2 className="text-xl font-semibold text-[#2f2e41] mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3 mb-4">{post.description}</p>
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src={`https://static.axiolot.com.ng/image?name=${encodeURIComponent(post.authorName!)}&size=48&background=000&color=fff&bold=true&rounded=true`}
                        alt="Author"
                        width={48}
                        height={48}
                        className="rounded-full"
                        loading="lazy"
                    />
                    <div>
                        <p className="text-sm font-medium text-[#2f2e41]">Author {post.authorName}</p>
                        <p className="text-xs text-gray-500">
                            {new Date().toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-block bg-[#6c63ff] text-white font-medium py-2 px-4 rounded-full hover:bg-[#7b73ff] transition-colors duration-300"
                >
                    Read More
                </button>
            </div>
        </motion.div>
    );
    const BlogModal = ({ post, onClose }: { post: BlogPost; onClose: () => void }) => (
        <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
        >
            <motion.div
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label="Close modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 id="modal-title" className="text-2xl font-bold text-[#2f2e41] mb-4">
                    {post.title}
                </h2>
                <div className="flex gap-2 mb-4">
                    <span className="inline-block bg-[#6c63ff]/10 text-[#6c63ff] text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src={`https://static.axiolot.com.ng/image?name=${encodeURIComponent(post.authorName!)}&size=48&background=000&color=fff&bold=true&rounded=true`}
                        alt="Author"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium text-[#2f2e41]">Author {post.authorName}</p>
                        <p className="text-xs text-gray-500">
                            {new Date().toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
                {post.image && (
                    <div className="relative h-64 mb-6">
                        <Image
                            src={post.image ?? 'https://static.axiolot.com.ng/image/article-placeholder'}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                )}
                <div className="prose prose-sm max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.fullArticle }} />
            </motion.div>
        </motion.div>
    );

    if (error && posts.length === 0) {
        return <ErrorUI />;
    }

    <Head>
        <title>Blog | Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools</title>
    </Head>

    return (
        <main className="w-full bg-[#f5f5f5] min-h-screen">
            <section className="bg-[#2f2e41] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Explore Our Blog
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Discover insights, tips, and updates on education technology.
                    </motion.p>
                    <motion.a
                        href="#blog-posts"
                        className="inline-block bg-[#6c63ff] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#7b73ff] transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Read Articles
                    </motion.a>
                </div>
            </section>

            <section id="blog-posts" className="max-w-7xl mx-auto px-4 py-12 overflow-hidden">
                <div className="flex flex-wrap gap-4 mb-8 justify-center">
                    {memoizedCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedCategory === category
                                ? 'bg-[#6c63ff] text-white'
                                : 'bg-white text-[#2f2e41] hover:bg-[#6c63ff] hover:text-white'
                                }`}
                            aria-label={`Filter by ${category}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <InfiniteScroll className="overflow-hidden pb-10 px-5"
                    dataLength={filteredPosts.length}
                    next={loadMore}
                    hasMore={hasMore}
                    loader={
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <SkeletonCard key={index} />
                                ))}
                        </div>
                    }
                    endMessage={
                        <p className="text-center text-gray-500 mt-8">
                            No more articles to load.
                        </p>
                    }
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </AnimatePresence>
                    </div>
                </InfiniteScroll>
            </section>
            <AnimatePresence>
                {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
            </AnimatePresence>
        </main>
    );
};

export default Blog;