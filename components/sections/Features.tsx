export function Features() {
  const features = [
    { title: "VISUAL BUILDER", desc: "No-code interface" },
    { title: "INSTANT SCALE", desc: "0 to millions" },
    { title: "REAL-TIME AI", desc: "Designed for immediate insights" },
    { title: "ENTERPRISE SECURITY", desc: "SOC2, HIPAA" },
  ];

  return (
    <section className="min-h-screen flex items-center py-32">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            <span className="text-gray">BUILT FOR</span><br/>
            <span>ENTERPRISE</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16">
          {features.map((feat, i) => (
            <div key={i} className="group border-t border-gray-dark pt-8">
              <h3 className="text-2xl font-medium mb-2 group-hover:translate-x-2 transition-transform">
                {feat.title}
              </h3>
              <p className="text-gray">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}