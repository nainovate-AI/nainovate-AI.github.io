import { Building2, Users, Network, Target } from 'lucide-react';

export function Problem() {
  const pillars = [
    {
      title: 'Independent Institutions',
      desc: 'Decisions remain isolated.',
      Icon: Building2,
      // Deep blue — institutional silo, dark authoritative tone.
      color: '#3b82f6',
      border: 'rgba(59, 130, 246, 0.55)',
      bg: 'rgba(59, 130, 246, 0.12)',
    },
    {
      title: 'Fragmented Knowledge',
      desc: 'No shared intelligence.',
      Icon: Users,
      // Deep amber — gap/warning, dark saturated.
      color: '#f59e0b',
      border: 'rgba(245, 158, 11, 0.55)',
      bg: 'rgba(245, 158, 11, 0.12)',
    },
    {
      title: 'Disconnected Capabilities',
      desc: 'AI investments lack orchestration.',
      Icon: Network,
      // Deep purple — brand tech, disconnected capabilities.
      color: '#8b5cf6',
      border: 'rgba(139, 92, 246, 0.55)',
      bg: 'rgba(139, 92, 246, 0.12)',
    },
    {
      title: 'Limited Outcomes',
      desc: 'Transformation never scales.',
      Icon: Target,
      // Deep pink — flags stalled outcome, attention-grabbing without
      // the red-alert aggression. Distinct from blue/amber/purple.
      color: '#ec4899',
      border: 'rgba(236, 72, 153, 0.55)',
      bg: 'rgba(236, 72, 153, 0.12)',
    },
  ];

  return (
    <section className="py-8 md:py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            THE AI REALITY
          </p>
          <h2 className="heading-primary mb-4 md:mb-6">
            <span className="block">WHY MOST AI</span>
            <span className="block">INITIATIVES STRUGGLE.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed">
            Organizations invest in AI. Knowledge exists. Technology exists.
            <span className="text-fg-strong font-medium"> Intelligence doesn&apos;t flow.</span>
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest uppercase text-fg-muted mb-4 md:mb-6">
            The Gap: Built in Silos
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((p) => {
              const { Icon } = p;
              return (
                <div
                  key={p.title}
                  className="rounded-lg p-6 md:p-8 border transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: p.border,
                    background: p.bg,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center mb-4"
                    style={{
                      background: p.color,
                      color: '#fff',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-base md:text-lg font-semibold mb-2 text-fg-strong">{p.title}</p>
                  <p className="text-sm text-fg-mid leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-border-strong rounded-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-fg-muted mb-3">
                The Challenge
              </p>
              <p className="text-xl md:text-3xl font-bold leading-tight">
                The challenge is <span className="text-fg-muted">not AI.</span>
                <br />
                The challenge is <span className="text-fg-strong">fragmentation.</span>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-fg-muted mb-3">
                What Comes Next
              </p>
              <p className="text-base md:text-lg text-fg-muted leading-relaxed">
                The future belongs to organizations that{' '}
                <span className="text-fg-strong font-medium">connect intelligence</span>,
                not just deploy AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
