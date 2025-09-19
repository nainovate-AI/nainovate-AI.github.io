export function Stats() {
  return (
    <section className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-16">
          {[
            { number: "500+", label: "AI AGENTS" },
            { number: "50M+", label: "QUERIES/DAY" },
            { number: "99.9%", label: "UPTIME" },
            { number: "15ms", label: "RESPONSE" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-6xl font-bold mb-4">{stat.number}</div>
              <div className="text-sm text-gray tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}