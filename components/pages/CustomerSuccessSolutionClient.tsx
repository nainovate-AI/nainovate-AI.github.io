'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CustomerSuccessSolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SOLUTION • CUSTOMER SUCCESS
          </p>
          <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">HEALTH.</span>
            <span className="block text-gray">WATCHED.</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mb-12">
            CSMs see health drops the moment they happen — not at the next QBR. Every
            ticket, every workflow, every renewal signal converges on the account.
          </p>
          <div className="flex gap-8 flex-wrap">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Account view */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            ACCOUNT VIEW — ACCOUNT A
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-3xl">
            One account. Every lens. One CSM view.
          </h2>

          <div className="border border-white/10 rounded-lg overflow-hidden mb-12">
            <div className="p-8 border-b border-white/10 bg-white/5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Account</p>
                  <p className="text-white text-lg">Account A</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Health score</p>
                  <p className="text-white text-lg">
                    35 <span className="text-gray text-sm">/ 100 · dropped from 42</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">ARR</p>
                  <p className="text-white text-lg">$1.2M</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Renewal</p>
                  <p className="text-white text-lg">2026-11-30 · 143d</p>
                </div>
              </div>
            </div>
            <div className="p-8 grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray uppercase tracking-wider mb-4">Active signals</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-white">· FD-2104 P0 escalation — Product X sync</li>
                  <li className="text-white">· wl_001 fired 05:47 today</li>
                  <li className="text-white">· INIT-2104 coordination open</li>
                  <li className="text-gray">· 3 sync tickets last 24h</li>
                  <li className="text-gray">· NPS dropped 8 → 6 last week</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-gray uppercase tracking-wider mb-4">Next actions</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-white">✓ 09:00 — Check-in with End User scheduled</li>
                  <li className="text-white">✓ 10:00 — Sync with Consultant 1 on hotfix ETA</li>
                  <li className="text-white">✓ 14:00 — Draft executive summary for Account A CIO</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trend */}
          <div className="border border-white/10 rounded-lg p-8">
            <p className="text-xs text-gray uppercase tracking-wider mb-6">Health trend — last 30 days</p>
            <div className="grid grid-cols-30 gap-1 items-end h-40">
              {[68, 66, 65, 65, 64, 62, 60, 58, 58, 57, 55, 55, 54, 52, 50, 49, 47, 46, 45, 44, 44, 43, 42, 42, 42, 42, 42, 40, 38, 35].map((v, i) => (
                <div
                  key={i}
                  className="bg-white/60"
                  style={{ height: `${v}%`, width: '100%' }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray mt-2 font-mono">
              <span>D-30</span>
              <span>D-15</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Watchlists for CSM */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            CSM WATCHLISTS
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-3xl">
            The signals that matter to renewal.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Renewal 90d out + health &lt; 40', hits: 4, top: 'Account A' },
              { name: 'NPS drop &gt; 2 in a week', hits: 7, top: 'Account I' },
              { name: '3+ P1/P0 tickets in 30d', hits: 3, top: 'Account H' },
              { name: 'Executive escalation open', hits: 2, top: 'Account A' },
              { name: 'License usage &lt; 40%', hits: 5, top: 'Account B' },
              { name: 'Champion left (Social Signal signal)', hits: 1, top: 'Account I' },
            ].map((w) => (
              <div key={w.name} className="border border-white/10 rounded-lg p-6">
                <p className="text-xs text-gray uppercase tracking-wider mb-2">Watchlist</p>
                <h3 className="text-lg font-bold mb-4" dangerouslySetInnerHTML={{ __html: w.name }} />
                <div className="flex justify-between text-sm">
                  <span className="text-gray">Accounts firing</span>
                  <span className="text-white font-mono">{w.hits}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray">Top account</span>
                  <span className="text-white">{w.top}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Never learn about a churn from the QBR again.
          </h2>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-10 py-4">
              Book a demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
