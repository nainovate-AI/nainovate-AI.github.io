'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { HeroSlide } from './heroData';
import { Magnetic } from '@/components/ui/motion/Magnetic';

type Props = {
  slides: HeroSlide[];
  active: number;
  onWatchDemo: () => void;
};

export function HeroContent({ slides, active, onWatchDemo }: Props) {
  const slide = slides[active];

  return (
    <div className="relative flex flex-col gap-6 md:gap-8">
      {/* Animated eyebrow tag with live pulse */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`eyebrow-${slide.id}`}
          initial={{ opacity: 0, y: -8 }}
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

      {/* Kinetic headline — gradient on 2nd line */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="leading-[1.02] tracking-[-0.03em] font-semibold break-words hyphens-none text-fg-strong"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 4.25rem)', wordBreak: 'normal', overflowWrap: 'break-word' }}
          >
            <span className="block overflow-hidden line-crop-safe">
              <motion.span
                className="block text-fg-strong"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {slide.titleLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden line-crop-safe">
              <motion.span
                className="block text-gradient-aurora"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {slide.titleLines[1]}
              </motion.span>
            </span>
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Highlight line + description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`copy-${slide.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <p className="text-h4 text-fg-strong font-medium leading-tight max-w-[36ch]">
            {slide.highlight}
          </p>
          <p className="text-body-lg text-fg-mid leading-relaxed max-w-[46ch]">
            {slide.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* CTAs — gradient-solid primary + glass secondary + magnetic */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Magnetic strength={0.35}>
          <button
            type="button"
            onClick={onWatchDemo}
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-body-sm font-semibold tracking-[0.14em] uppercase rounded-full text-white overflow-hidden isolate"
            style={{ background: 'var(--grad-aurora)', backgroundSize: '200% 200%' }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)' }}
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
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-body-sm font-semibold tracking-[0.14em] uppercase rounded-full text-fg-strong border border-border-strong hover:border-fg-strong bg-bg-elevated/40 backdrop-blur transition-colors duration-300"
          >
            <span>Schedule Demo</span>
            <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Magnetic>
      </div>

      {/* Live proof strip — inline stats */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`proof-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 max-w-md"
        >
          {[
            { n: '12', l: 'Partners' },
            { n: '3', l: 'Pilots' },
            { n: '85%', l: 'Accuracy' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-h3 text-fg-strong tabular-nums leading-none">{s.n}</div>
              <div className="text-eyebrow text-fg-muted mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
