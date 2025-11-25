'use client';

import { useRouter } from 'next/navigation';

export function Industries() {
  const router = useRouter();
  
  const solutions = [
    {
      number: "01",
      name: "OPERATIONS",
      metric: "Automate workflows",
      description: "AI agents for HR screening, document processing, BOQ generation, and enterprise search.",
      link: "/solutions/operations"
    },
    {
      number: "02", 
      name: "ENGAGEMENT",
      metric: "Scale interactions",
      description: "Customer service bots, citizen portals, multi-channel support, and quality assurance.",
      link: "/solutions/engagement"
    },
    {
      number: "03",
      name: "INTELLIGENCE",
      metric: "Transform data",
      description: "Analytics dashboards, compliance tracking, quality control, and process monitoring.",
      link: "/solutions/intelligence"
    },
  ];

  return (
    <section className="min-h-screen py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            <span className="text-gray">AI SOLUTIONS</span><br/>
            <span>FOR EVERY NEED</span>
          </h2>
        </div>

        <div className="space-y-0">
          {solutions.map((solution, i) => (
            <div 
              key={i} 
              className="group border-t border-white/10 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
              onClick={() => router.push(solution.link)}
            >
              <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-gray group-hover:text-black/30">{solution.number}</span>
                  <h3 className="text-2xl font-medium">{solution.name}</h3>
                </div>
                <p className="text-4xl font-bold">{solution.metric}</p>
                <p className="text-gray group-hover:text-black/60">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}