'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

export default function DemoChooserClient() {
  return (
    <main className="relative z-10 bg-bg min-h-screen">
      <Link
        href="/"
        aria-label="Close and return home"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-surface-2 hover:bg-surface-hover text-fg-strong flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5" />
      </Link>

      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            TRY DEMO
          </p>
          <h1 className="heading-primary mb-4 md:mb-6">
            <span className="block">PICK YOUR</span>
            <span className="block">LENS.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-8 md:mb-12 leading-relaxed">
            Same platform. Two lenses. Government &amp; Public Services runs building
            permits and inter-department approvals. Enterprise Business Functions
            sits on Incident Management + CRM as an explainable decision layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/demo/public-sector"
              className="group border border-border-strong rounded-lg p-6 md:p-8 hover:border-fg-strong transition-colors block bg-surface-2"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">01 • PUBLIC SECTOR</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">Government &amp; Public Services</h2>
              <p className="text-sm md:text-base text-fg-muted mb-6 leading-relaxed">
                Building permits portal walkthrough with AI-driven approvals,
                analytics dashboard, and workflow orchestration.
              </p>
              <div className="space-y-2 mb-6 text-xs md:text-sm text-fg-muted">
                <p>· Permits intake automation</p>
                <p>· Analytics dashboard</p>
                <p>· Workflow orchestration</p>
              </div>
              <span className="text-sm text-fg-strong group-hover:underline">Open Public Sector demo →</span>
            </Link>

            <Link
              href="/demo/decision-nia"
              className="group border border-border-strong rounded-lg p-6 md:p-8 hover:border-fg-strong transition-colors block bg-surface-2"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">02 • ENTERPRISE</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">Enterprise Business Functions</h2>
              <p className="text-sm md:text-base text-fg-muted mb-6 leading-relaxed">
                AI decision layer for enterprise support. Ask, Watchlists, Trace,
                Coordination. Live 4-team walkthrough anchored on Account A FD-2104.
              </p>
              <div className="space-y-2 mb-6 text-xs md:text-sm text-fg-muted">
                <p>· Customer Support</p>
                <p>· Customer Success</p>
                <p>· Sales</p>
                <p>· Delivery</p>
              </div>
              <span className="text-sm text-fg-strong group-hover:underline">Open Enterprise demo →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
