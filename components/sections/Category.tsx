import { NeuralNetwork } from '@/components/ui/NeuralNetwork';
import { Eye, Brain, Lightbulb, Users, Zap, Activity, BookOpen } from 'lucide-react';

export function Category() {
  const capabilities = [
    { num: '01', name: 'Observe', desc: 'Sense signals across systems and functions in real-time.', Icon: Eye },
    { num: '02', name: 'Understand', desc: 'Reason across context, history, and business objectives.', Icon: Brain },
    { num: '03', name: 'Recommend', desc: 'Suggest optimal actions grounded in data and policy.', Icon: Lightbulb },
    { num: '04', name: 'Coordinate', desc: 'Align teams, workflows, and systems cross-function.', Icon: Users },
    { num: '05', name: 'Execute', desc: 'Multi-agent action across CRM, ERP, ITSM, and beyond.', Icon: Zap },
    { num: '06', name: 'Monitor', desc: 'Track outcomes, drift, and health continuously.', Icon: Activity },
    { num: '07', name: 'Learn', desc: 'Improve from every decision with governed feedback loops.', Icon: BookOpen },
  ];

  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-12 border-t border-border scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-6 md:mb-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
              PLATFORM
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-4 md:mb-6">
              <span className="block">ONE ENTERPRISE.</span>
              <span className="block">SEVEN CAPABILITIES.</span>
              <span className="block">INFINITE IMPACT.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed">
              One Decision Intelligence core orchestrating capabilities that drive
              trusted decisions and transform organizations.
            </p>
          </div>
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px]">
            <NeuralNetwork />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {capabilities.map((c, idx) => {
            const { Icon } = c;
            const span = idx < 4 ? 'lg:col-span-3' : 'lg:col-span-4';
            return (
              <div
                key={c.num}
                className={`${span} border border-border rounded-lg p-6 md:p-8 min-h-[160px] hover:border-border-strong transition-colors`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-fg-muted">{c.num}</span>
                  <div className="w-8 h-8 rounded-md bg-surface-2 border border-border flex items-center justify-center text-fg-mid">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-lg font-semibold mb-2">{c.name}</p>
                <p className="text-xs md:text-sm text-fg-mid leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
