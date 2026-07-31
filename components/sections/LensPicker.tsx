import Link from 'next/link';

export function LensPicker() {
  return (
    <section className="py-8 md:py-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            PICK YOUR LENS
          </p>
          <h2 className="heading-primary mb-4 md:mb-6">
            <span className="block">TWO WORLDS.</span>
            <span className="block">ONE PLATFORM.</span>
          </h2>
          <p className="text-base md:text-lg text-fg-muted leading-relaxed">
            Same platform. Different world. Pick where you work and see how GenX moves information across your teams — in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Public Sector Lens */}
          <Link
            href="/demo/public-sector?from=home"
            className="group block border border-border hover:border-border-active rounded-lg p-6 md:p-10 bg-surface hover:bg-surface-2 transition-all"
          >
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase border border-border-strong rounded-full text-fg-muted">
                Public Sector
              </span>
              <svg className="w-5 h-5 text-fg-faint group-hover:text-fg-strong group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-border flex items-center justify-center mb-4 md:mb-6 group-hover:border-border-active transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Government &amp; Public Services</h3>
              <p className="text-sm md:text-base text-fg-muted leading-relaxed mb-6">
                Building permits, citizen requests, inter-department approvals. Watch a single permit move automatically through Planning, Fire, Water, and Revenue — with full audit trail.
              </p>
            </div>
            <div className="border-t border-border pt-4 md:pt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="text-lg md:text-xl font-bold">1</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Department</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">Live</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Ask</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">3-pack</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Capabilities</div>
              </div>
            </div>
          </Link>

          {/* Enterprise Lens */}
          <Link
            href="/demo/decision-nia?from=home"
            className="group block border border-border hover:border-border-active rounded-lg p-6 md:p-10 bg-surface hover:bg-surface-2 transition-all"
          >
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase border border-border-strong rounded-full text-fg-muted">
                Enterprise
              </span>
              <svg className="w-5 h-5 text-fg-faint group-hover:text-fg-strong group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-border flex items-center justify-center mb-4 md:mb-6 group-hover:border-border-active transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Enterprise Business Functions</h3>
              <p className="text-sm md:text-base text-fg-muted leading-relaxed mb-6">
                Customer Success, Support, Sales, Delivery. When a customer health score drops, Sales, Support, and Finance see it instantly — and know what to do next.
              </p>
            </div>
            <div className="border-t border-border pt-4 md:pt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="text-lg md:text-xl font-bold">4</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Spaces</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">Live</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Chat + Trace</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">4-pack</div>
                <div className="text-[10px] tracking-widest uppercase text-fg-muted mt-1">Capabilities</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
