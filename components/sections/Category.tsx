import Link from 'next/link';
import { NeuralNetwork } from '@/components/ui/NeuralNetwork';
import { Eye, Brain, Lightbulb, Users, Zap, Activity, BookOpen } from 'lucide-react';

export function Category() {
  const capabilities = [
    { num: '01', name: 'Observe', desc: 'Sense signals across systems and functions in real-time.', Icon: Eye, feature: 'Signal → Action Chain' },
    { num: '02', name: 'Understand', desc: 'Reason across context, history, and business objectives.', Icon: Brain, feature: 'AI Agent — Ask' },
    { num: '03', name: 'Recommend', desc: 'Suggest optimal actions grounded in data and policy.', Icon: Lightbulb, feature: 'Signal → Action Chain' },
    { num: '04', name: 'Coordinate', desc: 'Align teams, workflows, and systems cross-function.', Icon: Users, feature: 'Coordination Center' },
    { num: '05', name: 'Execute', desc: 'Multi-agent action across CRM, ERP, ITSM, and beyond.', Icon: Zap, feature: 'Workflow' },
    { num: '06', name: 'Monitor', desc: 'Track outcomes, drift, and health continuously.', Icon: Activity, feature: 'Trace & Audit' },
    { num: '07', name: 'Learn', desc: 'Improve from every decision with governed feedback loops.', Icon: BookOpen, feature: 'Learning Loop' },
  ];

  return (
    <section className="py-8 md:py-12 border-t border-border scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-6 md:mb-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
              DECISION INTELLIGENCE
            </p>
            <h2 className="heading-primary mb-4 md:mb-6">
              <span className="block">SIX FEATURES.</span>
              <span className="block">SEVEN CAPABILITIES.</span>
              <span className="block">ONE INTELLIGENCE LAYER.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted leading-relaxed mb-6">
              Our features are what we ship. The capabilities they produce are what
              transform your organization. One Decision Intelligence core orchestrates them all.
            </p>
            <Link
              href="/decision-intelligence"
              className="inline-block text-[14px] font-semibold px-6 py-2.5 border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all tracking-wide uppercase"
            >
              Explore Decision Intelligence
            </Link>
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
                className={`${span} border border-border rounded-lg p-6 md:p-8 min-h-[180px] hover:border-border-strong transition-colors`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest text-fg-muted">{c.num}</span>
                  <div className="w-8 h-8 rounded-md bg-surface-2 border border-border flex items-center justify-center text-fg-mid">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-lg font-semibold mb-2">{c.name}</p>
                <p className="text-xs md:text-sm text-fg-mid leading-relaxed mb-3">{c.desc}</p>
                <p className="text-[10px] uppercase tracking-widest text-fg-subtle">Delivered by · <span className="text-fg-muted">{c.feature}</span></p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
