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
  title: "Nainovate | Enterprise AI Platform",
  description: "Build production-ready AI agents with GenX.",
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