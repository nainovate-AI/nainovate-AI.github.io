import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { inter } from './fonts';

/*
  Global 404. This app has two root layouts — app/(main) and app/(demo) — so a
  plain app/not-found.tsx has no root layout to render inside (build error).
  global-not-found.tsx owns its own <html>/<body> instead, and is enabled by
  experimental.globalNotFound in next.config.ts.
*/
export const metadata: Metadata = {
  title: 'Page not found | Nainovate',
  description: 'The page you are looking for does not exist or has moved.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme','dark');`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-bg text-fg antialiased`} suppressHydrationWarning>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <p className="text-eyebrow text-fg-muted mb-4">404</p>
            <h1 className="text-h2 text-fg-strong mb-4">Page not found.</h1>
            <p className="text-body-md text-fg-mid mb-8 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 text-eyebrow border-2 border-border-strong text-fg-strong hover:bg-fg-strong hover:text-fg-invert transition-colors rounded-full"
            >
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
