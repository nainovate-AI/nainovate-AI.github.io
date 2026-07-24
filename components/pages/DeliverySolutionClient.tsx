'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import mockData from '@/data/delivery.json';

export default function DeliverySolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SOLUTION • DELIVERY
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">DELIVERY.</span>
            <span className="block text-gray">RESCUED.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-6 md:mb-12">
            Milestone risk surfaced when it forms — not at the steering committee. Every
            slip anchored to a signal. Every rescue coordinated across CSM, Sales, and
            Support.
          </p>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
              Book a demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Account A Phase 2 rescue */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            ACCOUNT A PHASE 2 — RESCUE PLAN
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-3xl">
            Milestone slip spotted 21 days before steering.
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
            <div className="space-y-6 text-gray text-lg leading-relaxed">
              <p>
                <span className="text-white">Account A Phase 2</span> was scoped 8 weeks, kicked
                off 2026-05-15. Milestone M3 (UAT sign-off) was due 2026-07-01. On
                2026-06-10 — 21 days before — Nia flagged three concurrent signals: two
                open P1 tickets from UAT users, resource utilization at 138% for two
                consultants, and CSM sentiment score dropping.
              </p>
              <p>
                Traditional flow: this shows up at the 2026-07-08 steering committee, one
                week late. Blame, escalation, weekend hero work.
              </p>
            </div>
            <div className="space-y-6 text-gray text-lg leading-relaxed">
              <p>
                <span className="text-white">With Nia:</span> watchlist wl_delivery_slip
                fires. Recommendation drafts a rescue plan — 1 consultant reassigned from
                a green project, 2 P1s escalated to engineering with hotfix path, CSM
                warms Account A PMO on realistic re-baseline.
              </p>
              <p>
                Result: M3 slips 8 days instead of 3 weeks. Steering committee sees the
                plan before the slip lands.
              </p>
            </div>
          </div>

          {/* Rescue steps */}
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-white/10 bg-white/5">
              <p className="text-xs text-gray uppercase tracking-wider">Rescue timeline</p>
            </div>
            {mockData.rescueTimeline.map((row) => (
              <div key={row.d} className="p-4 border-b border-white/10 grid grid-cols-12 gap-4 text-sm">
                <span className="col-span-2 text-gray font-mono">{row.d}</span>
                <span className="col-span-10 text-white">{row.e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            PORTFOLIO VIEW
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-3xl">
            Every project. Every milestone. One dashboard.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.portfolio.map((x) => (
              <div key={x.p} className="border border-white/10 rounded-lg p-5 md:p-6">
                <p className="text-xs text-gray uppercase tracking-wider mb-1">Project</p>
                <h3 className="text-lg font-bold mb-4">{x.p}</h3>
                <p className="text-sm text-white mb-1">{x.m}</p>
                <p className="text-xs text-gray font-mono mb-4">{x.s}</p>
                <p className="text-xs text-gray uppercase tracking-wider mb-1">Health</p>
                <p className={x.h === 'At risk' ? 'text-white' : 'text-gray'}>{x.h}</p>
                <p className="text-xs text-gray mt-1">{x.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Never learn about a slip at steering again.
          </h2>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-10 sm:py-4 w-full sm:w-auto">
              Book a demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
