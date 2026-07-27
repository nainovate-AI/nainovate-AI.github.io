'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeroSlideshow } from '@/components/ui/HeroSlideshow';
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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 md:space-y-10 min-w-0">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
                <span className="block">DECISION</span>
                <span className="block">INTELLIGENCE.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-fg-mid max-w-lg leading-[1.6]">
              Detect signals across business functions. Propagate insights
              cross-functionally. Orchestrate intelligent responses in real-time.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
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

          <div className="relative w-full min-w-0 aspect-video max-w-[900px] mx-auto lg:mx-0 lg:ml-auto">
            <HeroSlideshow />
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border pt-8 md:pt-10">
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

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-fg-strong to-transparent"></div>
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
