'use client';

import { useRouter } from 'next/navigation';

export function Industries() {
  const router = useRouter();
  
  const stages = [
    {
      number: "01",
      name: "PLANNING",
      metric: "70% faster delivery",
      description: "AI-powered document generation, BOQ automation, and project planning.",
    },
    {
      number: "02", 
      name: "PROCUREMENT",
      metric: "60% cost reduction",
      description: "Intelligent vendor management, price optimization, and contract analysis.",
    },
    {
      number: "03",
      name: "EXECUTION",
      metric: "90% accuracy increase",
      description: "Real-time monitoring, quality assurance, and performance analytics.",
    },
  ];

  return (
    <section className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            <span className="text-gray">SOLUTIONS FOR</span><br/>
            <span>EVERY STAGE</span>
          </h2>
        </div>

        <div className="space-y-0">
          {stages.map((stage, i) => (
            <div 
              key={i} 
              className="group border-t border-gray-dark hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
              onClick={() => router.push(`/solutions#${stage.name.toLowerCase()}`)}
            >
              <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-gray group-hover:text-black/30">{stage.number}</span>
                  <h3 className="text-2xl font-medium">{stage.name}</h3>
                </div>
                <p className="text-4xl font-bold">{stage.metric}</p>
                <p className="text-gray group-hover:text-black/60">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}