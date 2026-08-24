'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-fg-mid mb-4">
              Error
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Something went wrong.
            </h1>
            <p className="text-fg-mid mb-8 leading-relaxed">
              An unexpected error occurred. Try again — if it keeps happening,
              refresh the page.
            </p>
            <button
              type="button"
              onClick={reset}
              className="px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-full"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
