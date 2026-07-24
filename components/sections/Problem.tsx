import { Building2, Users, Network, Target } from 'lucide-react';

export function Problem() {
  const pillars = [
    {
      title: 'Independent Institutions',
      desc: 'Decisions remain isolated.',
      Icon: Building2,
    },
    {
      title: 'Fragmented Knowledge',
      desc: 'No shared intelligence.',
      Icon: Users,
    },
    {
      title: 'Disconnected Capabilities',
      desc: 'AI investments lack orchestration.',
      Icon: Network,
    },
    {
      title: 'Limited Outcomes',
      desc: 'Transformation never scales.',
      Icon: Target,
    },
  ];

  return (
    <section className="py-16 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-20 max-w-4xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4 md:mb-8">
            THE AI REALITY
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] md:leading-[0.9] tracking-[-0.03em] md:tracking-[-0.04em] mb-4 md:mb-8">
            <span className="block">WHY MOST AI</span>
            <span className="block text-gray">INITIATIVES STRUGGLE.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray leading-relaxed">
            Organizations invest in AI. Knowledge exists. Technology exists.
            <span className="text-white font-medium"> Intelligence doesn’t flow.</span>
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray mb-4 md:mb-6">
            The Gap: Built in Silos
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {pillars.map((p) => {
              const { Icon } = p;
              return (
                <div
                  key={p.title}
                  className="border border-white/10 rounded-lg p-5 md:p-6 hover:border-white/30 transition-colors bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-base md:text-lg font-semibold mb-2">{p.title}</p>
                  <p className="text-sm text-gray leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6 md:p-10 bg-white/[0.02]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray mb-3">
                The Challenge
              </p>
              <p className="text-xl md:text-3xl font-bold leading-tight">
                The challenge is <span className="text-gray">not AI.</span>
                <br />
                The challenge is <span className="text-white">fragmentation.</span>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray mb-3">
                What Comes Next
              </p>
              <p className="text-base md:text-lg text-gray leading-relaxed">
                The future belongs to organizations that{' '}
                <span className="text-white font-medium">connect intelligence</span>,
                not just deploy AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
