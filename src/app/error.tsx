'use client'; // Client Component for interactivity

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Extract status code if available, default to 'unknown'
  const status = error.digest || 'unknown';

  // Error information mapping
  const errorInfo = {
    404: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      emoji: '🔍',
      cta: 'Back to Home',
    },
    500: {
      title: 'Server Error',
      description: 'Our servers are having trouble processing your request.',
      emoji: '⚠️',
      cta: 'Try Again',
    },
    default: {
      title: 'Oops!',
      description: error.message || 'Something went wrong',
      emoji: '😕',
      cta: 'Go Home',
    },
  }[status === '404' ? 404 : status === '500' ? 500 : 'default'];

  // Update page title
  useEffect(() => {
    document.title = `${status || 'Error'} - ${errorInfo.title} | Axiolot Hub`;
  }, [status, errorInfo.title]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-royal-lilac/10 to-rasin-black/10">
      <motion.main
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-6xl mb-6" aria-hidden="true">
          {errorInfo.emoji}
        </div>

        <h1 className="text-3xl font-bold text-royal-lilac mb-4">
          {status || 'Error'}: {errorInfo.title}
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {errorInfo.description}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-semibold transition-all bg-royal-lilac text-white hover:bg-rasin-black hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-royal-lilac"
          >
            {errorInfo.cta}
          </Link>

          {status === '404' ? (
            <Link
              href="https://axiolot.com.ng/contact"
              target="_blank"
              className="px-6 py-3 rounded-full font-semibold transition-all bg-white text-gray-600 border border-royal-lilac/20 hover:bg-royal-lilac/10 focus:outline-none focus:ring-2 focus:ring-royal-lilac"
            >
              Report Broken Link
            </Link>
          ) : (
            <button
              onClick={reset}
              className="px-6 py-3 rounded-full font-semibold transition-all bg-white text-gray-600 border border-royal-lilac/20 hover:bg-royal-lilac/10 focus:outline-none focus:ring-2 focus:ring-royal-lilac"
            >
              Refresh Page
            </button>
          )}
        </div>
      </motion.main>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>
          Need help?{' '}
          <Link
            href="https://axiolot.com.ng/contact"
            target="_blank"
            className="text-royal-lilac hover:underline"
          >
            Contact support
          </Link>
        </p>
      </footer>
    </div>
  );
}