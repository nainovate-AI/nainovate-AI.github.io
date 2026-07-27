export function Stats() {
  return (
    <section className="py-8 md:py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            TRACTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-4 md:mb-6">
            EARLY VALIDATION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed">
            Validated across enterprise pilots. First LOI signed. Cross-functional
            decision intelligence in production.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-14">
          {[
            { number: '12', label: 'DESIGN PARTNERS', sub: 'Enterprise engagements' },
            { number: '3', label: 'ACTIVE PILOTS', sub: 'Cross-functional deployments' },
            { number: '1', label: 'LOI SIGNED', sub: 'Vista Equity portfolio company' },
            { number: '85%', label: 'SIGNAL DETECTION', sub: 'Accuracy in pilot data' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">{stat.number}</div>
              <div className="text-xs md:text-sm text-fg-strong font-medium tracking-widest mb-1 md:mb-2">
                {stat.label}
              </div>
              <div className="text-[10px] md:text-xs text-fg-muted">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { n: '$1M', l: 'ARR target — Q4 2026' },
            { n: '18mo', l: 'Runway on $2.5M seed' },
            { n: '90%', l: 'Pilot-to-paid conversion' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold">{s.n}</div>
              <div className="text-[10px] md:text-xs tracking-widest uppercase text-fg-muted mt-1 md:mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
