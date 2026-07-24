import { Eye, Brain, Lightbulb, Users, CheckCircle2, ChevronRight } from 'lucide-react';

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
    <section className="flex items-center py-16 md:py-32 border-t border-white/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-16 max-w-4xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4 md:mb-8">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] md:leading-[0.9] tracking-[-0.03em] md:tracking-[-0.04em] mb-4 md:mb-8">
            <span className="block">ONE ENTERPRISE.</span>
            <span className="block text-gray">ONE DECISION</span>
            <span className="block">INTELLIGENCE PLATFORM.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray leading-relaxed max-w-3xl">
            Connecting leadership, business functions and operations through trusted
            organizational intelligence.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s) => {
            const { Icon } = s;
            return (
              <div
                key={s.num}
                className="group border border-white/10 rounded-lg p-5 md:p-6 hover:border-white/30 transition-colors bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-gray">{s.num}</span>
                  <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-base md:text-lg font-semibold mb-2">{s.title}</p>
                <p className="text-xs md:text-sm text-gray leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Flow ribbon */}
        <div className="mt-8 md:mt-10 hidden lg:flex items-center justify-between gap-2 px-4 py-4 border border-white/10 rounded-lg bg-white/[0.02]">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white/70 shrink-0">
                {i + 1}
              </div>
              <span className="text-sm text-white/80 font-medium">{s.title}</span>
              {i < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-white/30 ml-auto shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
