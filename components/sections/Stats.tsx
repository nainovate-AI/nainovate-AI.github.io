export function Stats() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">PROVEN IMPACT</h2>
          <p className="text-xl text-gray">Real results across operations, engagement, and intelligence</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-16">
          {[
            { number: "70%", label: "FASTER OPERATIONS", sub: "Document processing & BOQ generation" },
            { number: "24/7", label: "ENGAGEMENT", sub: "Customer service automation" },
            { number: "90%", label: "DATA ACCURACY", sub: "Compliance & quality tracking" },
            { number: "90 DAY", label: "DEPLOYMENT", sub: "Pilot to production" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-bold mb-4">{stat.number}</div>
              <div className="text-sm text-white font-medium tracking-widest mb-2">{stat.label}</div>
              <div className="text-xs text-gray">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}