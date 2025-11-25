export function Features() {
  const features = [
    {
      title: "AI ENGINEERING TOOLS",
      desc: "Build production-ready agents with prompt workshop and quality assurance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    },
    {
      title: "BUILT-IN GOVERNANCE",
      desc: "AI CoE framework with security, compliance, and ethics from day one",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "INSTANT DEPLOYMENT",
      desc: "From development to production in days with no-code and pro-code options",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "ENTERPRISE SCALE",
      desc: "Handle millions of queries per day with auto-scaling infrastructure",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-32 border-t border-white/10">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            <span className="text-gray">BUILT FOR</span><br />
            <span>ENTERPRISE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16">
          {features.map((feat, i) => (
            <div key={i} className="group border-t border-white/10 pt-8">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/20 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-medium mb-3">
                {feat.title}
              </h3>
              <p className="text-gray leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}