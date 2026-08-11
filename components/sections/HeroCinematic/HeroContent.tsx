'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HeroSlide } from './heroData';
import { Magnetic } from '@/components/ui/motion/Magnetic';
import { trackEvent } from '@/lib/analytics';

type Props = {
  slides: HeroSlide[];
  active: number;
  onWatchDemo: () => void;
};

export function HeroContent({ slides, active, onWatchDemo }: Props) {
  const slide = slides[active];
  // Ensure first render shows text immediately. Slide-up only plays on
  // subsequent slide changes — prevents SSR/hydration blank-hero bug.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const titleInitial = mounted ? { y: '110%' } : { y: '0%' };
  const eyebrowInitial = mounted ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 };

  return (
    <div className="relative flex flex-col gap-6 md:gap-8">
      {/* Animated eyebrow tag with live pulse */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={`eyebrow-${slide.id}`}
          initial={eyebrowInitial}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 self-start text-eyebrow text-fg-mid px-3 py-1.5 rounded-full border border-border bg-bg-elevated/60 backdrop-blur"
        >
          <span className="relative inline-flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-cyan)] opacity-60 animate-ping" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[color:var(--accent-cyan)]" />
          </span>
          {slide.eyebrow}
        </motion.p>
      </AnimatePresence>

      {/* Kinetic headline — gradient on 2nd line.
          min-h reserves space for longest slide (3 wrapped lines) so
          CTAs don't shift when title length changes across slides. */}
      <div className="relative min-h-[6.5rem] sm:min-h-[8rem] lg:min-h-[10rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="leading-[1.02] tracking-[-0.03em] font-semibold break-words hyphens-none"
            style={{ fontSize: 'clamp(1.5rem, 3.4vw, 3rem)', wordBreak: 'normal', overflowWrap: 'break-word' }}
          >
            <span className="block overflow-hidden line-crop-safe">
              <motion.span
                className="block text-fg-strong"
                initial={titleInitial}
                animate={{ y: '0%' }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform' }}
              >
                {slide.titleLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden line-crop-safe">
              <motion.span
                className="block"
                initial={titleInitial}
                animate={{ y: '0%' }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  willChange: 'transform',
                  // Clean blue.
                  color: '#3b82f6',
                  display: 'inline-block',
                  paddingBottom: '0.18em',
                  marginBottom: '-0.12em',
                  lineHeight: '1.1',
                }}
              >
                {slide.titleLines[1]}
              </motion.span>
            </span>
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* CTAs — gradient-solid primary + glass secondary + magnetic */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Magnetic strength={0.35}>
          <button
            type="button"
            onClick={() => { trackEvent('hero_watch_demo', { slide: slide.id }); onWatchDemo(); }}
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-body-sm font-semibold tracking-[0.14em] uppercase rounded-full text-white overflow-hidden isolate"
            style={{ backgroundImage: 'linear-gradient(135deg, #3730a3 0%, #6d28d9 35%, #8b5cf6 70%, #c4b5fd 100%)', backgroundSize: '200% 200%' }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 35%, #6d28d9 70%, #3730a3 100%)' }}
            />
            <span className="relative">Watch Demo</span>
            <svg aria-hidden="true" className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </Magnetic>

        <Magnetic strength={0.25}>
          <a
            href="https://calendly.com/naveen-nainovate/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('hero_schedule_demo', { slide: slide.id })}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-body-sm font-semibold tracking-[0.14em] uppercase rounded-full text-fg-strong border border-border-strong hover:border-fg-strong bg-bg-elevated/40 backdrop-blur transition-colors duration-300"
          >
            <span>Schedule Demo</span>
            <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Magnetic>
      </div>

    </div>
  );
}
