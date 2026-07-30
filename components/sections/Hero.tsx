'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DemoGateModal } from '@/components/ui/DemoGateModal';
import { useDemoAccess } from '@/hooks/useDemoAccess';

export function Hero() {
  const router = useRouter();
  const { hasAccess, ready } = useDemoAccess();
  const [modalOpen, setModalOpen] = useState(false);

  const handleWatchDemo = () => {
    if (!ready) return;
    if (hasAccess) {
      router.push('/demo');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="text-center space-y-8 md:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            <span className="block">DECISION</span>
            <span className="block">INTELLIGENCE.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-fg-mid max-w-2xl mx-auto leading-[1.6]">
            Detect signals across business functions. Propagate insights
            cross-functionally. Orchestrate intelligent responses in real-time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleWatchDemo}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all"
            >
              WATCH DEMO
            </button>

            <a href="https://calendly.com/naveen-nainovate/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all">
                SCHEDULE DEMO
              </button>
            </a>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-border pt-8 md:pt-10">
          {[
            { n: '99.9%', l: 'Accuracy' },
            { n: '50ms', l: 'Response Time' },
            { n: '500+', l: 'Integrations' },
            { n: '24/7', l: 'Availability' },
          ].map((s, i) => (
            <div
              key={i}
              className={`px-4 md:px-8 ${i > 0 ? 'md:border-l border-border' : ''}`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">{s.n}</div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-fg-mid mt-1.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <DemoGateModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false);
          router.push('/demo');
        }}
      />
    </section>
  );
}
