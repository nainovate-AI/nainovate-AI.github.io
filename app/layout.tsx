import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Script from "next/script";
import { PageTracker } from "@/components/tracking/PageTracker";
import { Suspense } from "react";
import { inter } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nainovate.ai'),
  title: {
    default: 'Nainovate | Enterprise AI Platform - Build AI Agents Without Code',
    template: '%s | Nainovate AI Platform'
  },
  description: 'Build production-ready AI agents in days with Nainovate\'s GenX platform. No-code enterprise AI automation for healthcare, construction, real estate. Deploy intelligent agents instantly.',
  keywords: 'AI agents, enterprise AI platform, no-code AI, GenX, AI automation, BOQ automation, NIA chatbot, AI workflow orchestration',
  authors: [{ name: 'Nainovate Technologies' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: '1fBZJ2dFhVpdyOUx9sismAz9zZwW1G_Wa9hfZykfyDY',
    other: {
    'msvalidate.01': '78A3E50CB2FA531A8672EB9671277FE1'
  }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="`${inter.className} bg-black text-white antialiased"
        suppressHydrationWarning={true}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z1HV8SD1NH"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z1HV8SD1NH');
          `}
        </Script>

        <Suspense fallback={<></>}>
          <PageTracker />
        </Suspense>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}