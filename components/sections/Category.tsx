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
    <section className="py-16 md:py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 md:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4 md:mb-8">
              PLATFORM
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] md:leading-[0.9] tracking-[-0.03em] md:tracking-[-0.04em] mb-4 md:mb-8">
              <span className="block">ONE ENTERPRISE.</span>
              <span className="block text-gray">SEVEN CAPABILITIES.</span>
              <span className="block">INFINITE IMPACT.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray leading-relaxed">
              One Decision Intelligence core orchestrating capabilities that drive
              trusted decisions and transform organizations.
            </p>
          </div>
          <div className="relative h-[280px] sm:h-[360px] lg:h-[500px]">
            <NeuralNetwork />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {capabilities.map((c) => {
            const { Icon } = c;
            return (
              <div
                key={c.num}
                className="border border-white/10 rounded-lg p-5 md:p-6 hover:border-white/30 transition-colors bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-gray">{c.num}</span>
                  <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-base md:text-lg font-semibold mb-2">{c.name}</p>
                <p className="text-xs md:text-sm text-gray leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
