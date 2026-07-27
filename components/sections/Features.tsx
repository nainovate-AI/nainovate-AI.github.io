import { Eye, Brain, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export function Features() {
  const steps = [
    {
      num: '01',
      title: 'Observe',
      desc: 'Sense signals across systems and functions in real-time.',
      Icon: Eye,
    },
    {
      num: '02',
      title: 'Understand',
      desc: 'Reason across context, history, and business objectives.',
      Icon: Brain,
    },
    {
      num: '03',
      title: 'Recommend',
      desc: 'Suggest optimal actions grounded in data and policy.',
      Icon: Lightbulb,
    },
    {
      num: '04',
      title: 'Coordinate',
      desc: 'Align teams, workflows, and systems cross-function.',
      Icon: Users,
    },
    {
      num: '05',
      title: 'Execute',
      desc: 'Multi-agent action across CRM, ERP, ITSM, and beyond.',
      Icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-8 md:py-12 border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-4 md:mb-6">
            <span className="block">ONE ENTERPRISE.</span>
            <span className="block">ONE DECISION</span>
            <span className="block">INTELLIGENCE PLATFORM.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed">
            Connecting leadership, business functions and operations through trusted
            organizational intelligence.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((s) => {
            const { Icon } = s;
            return (
              <div
                key={s.num}
                className="group border border-border rounded-lg p-6 md:p-8 hover:border-border-strong transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-fg-muted">{s.num}</span>
                  <div className="w-9 h-9 rounded-md bg-surface-2 border border-border flex items-center justify-center text-fg-mid group-hover:text-fg-strong transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-base md:text-lg font-semibold mb-2">{s.title}</p>
                <p className="text-xs md:text-sm text-fg-muted leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
