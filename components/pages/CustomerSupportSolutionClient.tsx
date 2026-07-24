'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import mockData from '@/data/customer-support.json';

export default function CustomerSupportSolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SOLUTION • CUSTOMER SUPPORT
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">SUPPORT.</span>
            <span className="block text-gray">RESOLVED.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-6 md:mb-12">
            L1 deflection without a human. L2 with full context. Support Heads with root
            cause, not reopen counts. Nia sits inside Incident Management Tool — customers self-serve,
            agents deflect, leaders decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                Book a demo
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                See it live
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            ONE MORNING AT ACME
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-4xl leading-tight">
            FD-2104 lands at 5:45 AM. By 5:47, everything moves.
          </h2>

          <div className="space-y-8">
            {mockData.timeline.map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 border-t border-white/10 pt-4 items-start">
                <span className="col-span-2 text-gray font-mono text-sm">{row.t}</span>
                <span className="col-span-3 text-white text-sm">{row.who}</span>
                <span className="col-span-7 text-gray text-sm leading-relaxed">{row.what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            RIGHT SURFACE FOR EACH ROLE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 max-w-3xl">Nia meets each persona where they work.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.personas.map((p) => (
              <div key={p.who} className="border border-white/10 rounded-lg p-5 md:p-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{p.who}</h3>
                <p className="text-xs text-gray uppercase tracking-wider mb-2">Primary surface</p>
                <p className="text-white mb-4">{p.surface}</p>
                <p className="text-xs text-gray uppercase tracking-wider mb-2">What they see</p>
                <p className="text-gray text-sm leading-relaxed">{p.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SIX WEEKS AT ACME
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16">Numbers.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.metrics.map((r) => (
              <div key={r.label} className="border border-white/10 rounded-lg p-5 md:p-8">
                <p className="text-sm text-gray uppercase tracking-wider mb-4">{r.label}</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{r.value}</p>
                {r.sub && <p className="text-sm text-gray">{r.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to deflect L1 without hiring?
          </h2>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-10 sm:py-4 w-full sm:w-auto">
              Book a 30-min demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
