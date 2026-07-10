'use client';

import Link from 'next/link';

export default function DemoChooserClient() {
  return (
    <main className="pt-20 relative z-10 bg-black min-h-screen">
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            TRY DEMO
          </p>
          <h1 className="text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">PICK YOUR</span>
            <span className="block text-gray">LENS.</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mb-16">
            Same platform. Two demos. Operations NIA runs your internal workflows.
            Decision NIA sits on Freshdesk + CRM as an explainable decision layer.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Operations NIA */}
            <Link
              href="/platform/nia"
              className="group border border-white/10 rounded-lg p-12 hover:border-white/40 transition-colors block"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-6">01 • OPERATIONS</p>
              <h2 className="text-4xl font-bold mb-6 group-hover:text-white">Operations NIA</h2>
              <p className="text-gray mb-8 leading-relaxed">
                HR screening, BOQ generation, document processing, enterprise search.
                Original NIA demo — chat with agents, see them work.
              </p>
              <div className="space-y-2 mb-8 text-sm text-gray">
                <p>· HR candidate matching</p>
                <p>· BOQ item intelligence</p>
                <p>· Multi-agent chat</p>
              </div>
              <span className="text-sm text-white group-hover:underline">Open Operations demo →</span>
            </Link>

            {/* Decision NIA */}
            <Link
              href="/demo/decision-nia"
              className="group border border-white/40 rounded-lg p-12 hover:border-white transition-colors block bg-white/5"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-6">02 • DECISION</p>
              <h2 className="text-4xl font-bold mb-6 group-hover:text-white">Decision NIA</h2>
              <p className="text-gray mb-8 leading-relaxed">
                AI decision layer for enterprise support. Ask, Watchlists, Trace,
                Coordination. Live 4-team walkthrough anchored on Acme FD-2104.
              </p>
              <div className="space-y-2 mb-8 text-sm text-gray">
                <p>· Customer Support</p>
                <p>· Customer Success</p>
                <p>· Sales</p>
                <p>· Delivery</p>
              </div>
              <span className="text-sm text-white group-hover:underline">Open Decision NIA demo →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
