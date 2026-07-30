'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import mockData from '@/data/marketing/customer-success.json';

export default function CustomerSuccessSolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-bg">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            SOLUTION • CUSTOMER SUCCESS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block">HEALTH.</span>
            <span className="block">WATCHED.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-6 md:mb-12">
            CSMs see health drops the moment they happen — not at the next QBR. Every
            ticket, every workflow, every renewal signal converges on the account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap">
            <Link href="/contact">
              <Button className="px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Account view */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            ACCOUNT VIEW — ACCOUNT A
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-3xl">
            One account. Every lens. One CSM view.
          </h2>

          <div className="border border-border rounded-lg overflow-hidden mb-6 md:mb-12">
            <div className="p-5 md:p-8 border-b border-border bg-surface-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Account</p>
                  <p className="text-fg-strong text-lg">Account A</p>
                </div>
                <div>
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Health score</p>
                  <p className="text-fg-strong text-lg">
                    35 <span className="text-fg-muted text-sm">/ 100 · dropped from 42</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">ARR</p>
                  <p className="text-fg-strong text-lg">$1.2M</p>
                </div>
                <div>
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Renewal</p>
                  <p className="text-fg-strong text-lg">2026-11-30 · 143d</p>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-8 grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-fg-muted uppercase tracking-wider mb-4">Active signals</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-fg-strong">· FD-2104 P0 escalation — Product X sync</li>
                  <li className="text-fg-strong">· wl_001 fired 05:47 today</li>
                  <li className="text-fg-strong">· INIT-2104 coordination open</li>
                  <li className="text-fg-muted">· 3 sync tickets last 24h</li>
                  <li className="text-fg-muted">· NPS dropped 8 → 6 last week</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-fg-muted uppercase tracking-wider mb-4">Next actions</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-fg-strong">✓ 09:00 — Check-in with End User scheduled</li>
                  <li className="text-fg-strong">✓ 10:00 — Sync with Consultant 1 on hotfix ETA</li>
                  <li className="text-fg-strong">✓ 14:00 — Draft executive summary for Account A CIO</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trend */}
          <div className="border border-border rounded-lg p-5 md:p-8">
            <p className="text-xs text-fg-muted uppercase tracking-wider mb-6">Health trend — last 30 days</p>
            <div className="flex gap-1 items-end h-40">
              {mockData.healthTrend.map((v, i) => (
                <div
                  key={i}
                  className="bg-fg-strong/60 flex-1 min-w-0"
                  style={{ height: `${v}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-fg-muted mt-2 font-mono">
              <span>D-30</span>
              <span>D-15</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Watchlists for CSM */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            CSM WATCHLISTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-3xl">
            The signals that matter to renewal.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.watchlists.map((w) => (
              <div key={w.name} className="border border-border rounded-lg p-5 md:p-6">
                <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Watchlist</p>
                <h3 className="text-lg font-bold mb-4" dangerouslySetInnerHTML={{ __html: w.name }} />
                <div className="flex justify-between text-sm">
                  <span className="text-fg-muted">Accounts firing</span>
                  <span className="text-fg-strong font-mono">{w.hits}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-fg-muted">Top account</span>
                  <span className="text-fg-strong">{w.top}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Never learn about a churn from the QBR again.
          </h2>
          <Link href="/contact">
            <Button className="px-6 py-3 sm:px-10 sm:py-4 w-full sm:w-auto">
              Book a demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
