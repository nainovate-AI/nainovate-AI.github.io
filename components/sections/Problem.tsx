'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { ParallaxLayer } from '@/components/ui/motion/ParallaxLayer';
import { TiltCard } from '@/components/ui/motion/TiltCard';

type Pillar = {
  index: string;
  title: string;
  desc: string;
  Glyph: () => React.ReactElement;
};

const IconBuilding = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="7" y="8" width="7" height="20" />
    <rect x="18" y="4" width="7" height="24" />
    <path d="M9 12h3M9 16h3M9 20h3M20 8h3M20 12h3M20 16h3M20 20h3" />
  </svg>
);
const IconFragment = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 6h9v9H6zM17 6h9v9h-9zM6 17h9v9H6zM17 17h9v9h-9z" strokeDasharray="2 3" />
  </svg>
);
const IconNetwork = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="16" cy="6" r="2.4" />
    <circle cx="6" cy="24" r="2.4" />
    <circle cx="26" cy="24" r="2.4" />
    <path d="M15 8.4L7.5 21.8M17 8.4L24.5 21.8" strokeDasharray="1 3" />
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="6.5" />
    <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const pillars: Pillar[] = [
  { index: '01', title: 'Independent Institutions', desc: 'Decisions remain isolated.', Glyph: IconBuilding },
  { index: '02', title: 'Fragmented Knowledge', desc: 'No shared intelligence.', Glyph: IconFragment },
  { index: '03', title: 'Disconnected Capabilities', desc: 'AI investments lack orchestration.', Glyph: IconNetwork },
  { index: '04', title: 'Limited Outcomes', desc: 'Transformation never scales.', Glyph: IconTarget },
];

export function Problem() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Floating parallax glyph backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <ParallaxLayer offset={80} className="absolute top-20 right-[10%] w-64 h-64 opacity-[0.04] text-fg-strong">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx="50" cy="50" r={5 + i * 5} />
            ))}
          </svg>
        </ParallaxLayer>
        <ParallaxLayer offset={120} reverse className="absolute bottom-40 left-[8%] w-80 h-80 opacity-[0.04] text-fg-strong">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M ${i * 8} 0 L ${i * 8} 100 M 0 ${i * 8} L 100 ${i * 8}`} />
            ))}
          </svg>
        </ParallaxLayer>
      </div>

      <Container size="wide" className="relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">The AI Reality</Eyebrow>
            </Reveal>
            <SplitLines className="text-display text-fg-strong leading-[0.98]">
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Why most AI</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">initiatives struggle.</span>
              </motion.span>
            </SplitLines>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Organizations invest in AI. Knowledge exists. Technology exists.{' '}
                <span className="text-fg-strong font-medium">Intelligence doesn&apos;t flow.</span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pillars — layered tilt cards */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <Eyebrow tone="muted" className="mb-8 md:mb-12">The Gap · Built in Silos</Eyebrow>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <TiltCard intensity={7} className="h-full">
                  <div className="group relative h-full rounded-xl2 border border-border bg-bg-elevated overflow-hidden">
                    {/* Corner glow */}
                    <div aria-hidden="true" className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-fg-strong/[0.04] blur-3xl group-hover:bg-fg-strong/[0.08] transition-colors duration-700" />

                    <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[280px]">
                      <div className="flex items-center gap-3 mb-8">
                        <motion.span
                          className="text-h3 text-fg-strong font-light tabular-nums"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {p.index}
                        </motion.span>
                        <span aria-hidden="true" className="h-px flex-1 bg-border" />
                      </div>
                      <motion.div
                        className="w-12 h-12 text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6"
                        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p.Glyph />
                      </motion.div>
                      <h3 className="text-h4 text-fg-strong mb-3">{p.title}</h3>
                      <p className="text-body-md text-fg-mid leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing statement — dramatic mono type */}
        <ParallaxLayer offset={40} reverse>
          <div className="border-t border-border-strong pt-14 md:pt-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow tone="muted" className="mb-6">The Challenge</Eyebrow>
              </Reveal>
              <SplitLines className="text-h1 text-fg-strong">
                <motion.span
                  className="block overflow-hidden line-crop-safe"
                  variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  <span className="block">The challenge is <span className="text-fg-faint">not AI.</span></span>
                </motion.span>
                <motion.span
                  className="block overflow-hidden line-crop-safe"
                  variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  <span className="block">
                    The challenge is <span className="text-gradient-aurora">fragmentation.</span>
                  </span>
                </motion.span>
              </SplitLines>
            </div>
            <div className="lg:pl-12 lg:border-l lg:border-border">
              <Reveal>
                <Eyebrow tone="muted" className="mb-6">What Comes Next</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-h3 text-fg-mid leading-tight">
                  The future belongs to organizations that{' '}
                  <span className="text-fg-strong">connect intelligence</span>, not just deploy AI.
                </p>
              </Reveal>
            </div>
          </div>
        </ParallaxLayer>
      </Container>
    </Section>
  );
}
