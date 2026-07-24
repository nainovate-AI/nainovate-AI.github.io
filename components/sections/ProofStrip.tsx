export function ProofStrip() {
  const industries = ['Enterprise SaaS', 'Public Sector', 'Healthcare', 'Manufacturing', 'BFSI'];
  const numbers = [
    { n: '12', l: 'Design Partners' },
    { n: '3', l: 'Active Pilots' },
    { n: '1', l: 'LOI Signed' },
  ];

  return (
    <section className="py-8 md:py-10 border-t border-white/10 bg-white/[0.015]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <p className="text-[10px] sm:text-xs font-medium tracking-widest text-gray uppercase mb-4 md:mb-6 text-center">
          Trusted by teams in
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10 mb-6 md:mb-8">
          {industries.map((i, idx) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm text-white/70"
            >
              {idx > 0 && <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden />}
              {i}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16 pt-4 md:pt-6 border-t border-white/5">
          {numbers.map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-bold text-white">{s.n}</span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-gray">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
