import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { inter } from '../fonts';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { DemoGuard } from '@/components/ui/DemoGuard';

export const metadata: Metadata = {
  title: 'Building Permits Portal - Interactive Demo | Nainovate',
  description: 'Experience the GenX platform with conversational AI, analytics dashboard, and workflow automation.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            // Theme switching disabled — force dark theme for demo routes.
            // Restore by uncommenting the original detection line below and
            // deleting the forced setAttribute line.
            // __html: `(function(){try{var t=localStorage.getItem('nainovate-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
            __html: `document.documentElement.setAttribute('data-theme','dark');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-bg text-fg`} suppressHydrationWarning>
        <CustomCursor />
        <DemoGuard>{children}</DemoGuard>
      </body>
    </html>
  );
}