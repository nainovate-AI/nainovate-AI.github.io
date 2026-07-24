'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import mockData from '@/data/sales.json';

export default function SalesSolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SOLUTION • SALES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">PIPELINE.</span>
            <span className="block text-gray">HONEST.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-6 md:mb-12">
            Sales sees the same signals CS and Support see. Renewal risk, deployment
            health, support escalations — before pitching expansion into a broken account.
          </p>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
              Book a demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            PIPELINE VIEW — Q3 2026
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-3xl">
            Every deal, in context.
          </h2>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 p-4 border-b border-white/10 bg-white/5 text-xs text-gray uppercase tracking-widest">
              <span className="col-span-3">Account · Deal</span>
              <span className="col-span-2">Stage</span>
              <span className="col-span-1">ARR</span>
              <span className="col-span-2">Health</span>
              <span className="col-span-2">Active signals</span>
              <span className="col-span-2">Nia recommendation</span>
            </div>
            {mockData.pipeline.map((r) => (
              <div key={r.account} className="grid grid-cols-12 p-4 border-b border-white/10 text-sm items-center">
                <div className="col-span-3">
                  <p className="text-white">{r.account}</p>
                  <p className="text-xs text-gray">{r.deal}</p>
                </div>
                <span className="col-span-2 text-gray">{r.stage}</span>
                <span className="col-span-1 text-white font-mono">{r.arr}</span>
                <div className="col-span-2">
                  {typeof r.health === 'number' ? (
                    <div className="flex items-center gap-2">
                      <div className="h-1 bg-white/10 rounded overflow-hidden flex-1">
                        <div
                          className={r.health < 40 ? 'h-full bg-white' : 'h-full bg-white/60'}
                          style={{ width: `${r.health}%` }}
                        />
                      </div>
                      <span className="text-white font-mono text-xs">{r.health}</span>
                    </div>
                  ) : (
                    <span className="text-gray">—</span>
                  )}
                </div>
                <span className="col-span-2 text-gray text-xs">{r.signals}</span>
                <span className="col-span-2 text-white text-xs">{r.rec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rep view */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            REP BRIEFING
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-3xl">
            Every meeting starts with the full picture.
          </h2>
          <div className="border border-white/10 rounded-lg p-5 md:p-8">
            <p className="text-xs text-gray uppercase tracking-wider mb-4">10:00 — Account A expansion call</p>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Ana (rep), End User (buyer), Persona 1 (CSM)</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray uppercase tracking-wider mb-3">Before the call — Nia briefing</p>
                <ul className="space-y-2 text-sm text-gray">
                  <li>· Health 35 (dropped from 42 in 6h)</li>
                  <li>· FD-2104 P0 open, hotfix v3.8.3 in QA</li>
                  <li>· INIT-2104 coordination active</li>
                  <li>· NPS dropped 8 → 6 last week</li>
                  <li>· Renewal 143d out</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-gray uppercase tracking-wider mb-3">Nia recommendation</p>
                <p className="text-white leading-relaxed">
                  Delay expansion pitch by 30 days. Open with acknowledgment of FD-2104
                  and hotfix ETA. Ask for feedback on coordination speed — it&rsquo;s a
                  strength worth surfacing. Do not close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Stop pitching expansion into broken deployments.
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
