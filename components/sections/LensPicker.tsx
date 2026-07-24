import Link from 'next/link';

export function LensPicker() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4">
            PICK YOUR LENS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[0.95] tracking-[-0.03em] mb-4">
            <span className="block">TWO WORLDS.</span>
            <span className="block text-gray">ONE PLATFORM.</span>
          </h2>
          <p className="text-base md:text-lg text-gray">
            Same decision intelligence. Different context. Pick where you work — see how GenX propagates signals across your teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Public Sector Lens */}
          <Link
            href="/demo/public-sector?from=home"
            className="group block border border-white/15 hover:border-white/40 rounded-lg p-6 md:p-10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
          >
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase border border-white/20 rounded-full text-gray">
                Public Sector
              </span>
              <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/15 flex items-center justify-center mb-4 md:mb-6 group-hover:border-white/40 transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Government &amp; Public Services</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed mb-6">
                Building permits, citizen requests, inter-department approvals. See how a single permit application flows across Planning, Fire, Water, and Revenue in one signal chain.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 md:pt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="text-lg md:text-xl font-bold">4</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Departments</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">12</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Workflows</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">3-pack</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Capabilities</div>
              </div>
            </div>
          </Link>

          {/* Enterprise Lens */}
          <Link
            href="/demo/decision-nia?from=home"
            className="group block border border-white/15 hover:border-white/40 rounded-lg p-6 md:p-10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
          >
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase border border-white/20 rounded-full text-gray">
                Enterprise
              </span>
              <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/15 flex items-center justify-center mb-4 md:mb-6 group-hover:border-white/40 transition-colors">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Enterprise Business Functions</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed mb-6">
                Customer Success, Support, Sales, Delivery. Cross-functional decision intelligence — a health drop in Success surfaces in Sales, Support, and Finance in one hop.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 md:pt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="text-lg md:text-xl font-bold">4</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Spaces</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">Live</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Chat + Trace</div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">4-pack</div>
                <div className="text-[10px] tracking-widest uppercase text-gray mt-1">Capabilities</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
