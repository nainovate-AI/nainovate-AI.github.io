'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { TiltCard } from '@/components/ui/motion/TiltCard';

type AccentKey = 'violet' | 'cyan' | 'pink' | 'emerald' | 'indigo';

type Step = {
  num: string;
  title: string;
  desc: string;
  accent: AccentKey;
  Glyph: () => React.ReactElement;
};

const accentGradient: Record<AccentKey, string> = {
  violet: 'from-[#a78bfa] via-[#8b5cf6] to-[#6366f1]',
  cyan: 'from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]',
  pink: 'from-[#fbcfe8] via-[#ec4899] to-[#f43f5e]',
  emerald: 'from-[#6ee7b7] via-[#10b981] to-[#059669]',
  indigo: 'from-[#a5b4fc] via-[#6366f1] to-[#4f46e5]',
};

const accentHex: Record<AccentKey, string> = {
  violet: '139, 92, 246',
  cyan: '34, 211, 238',
  pink: '236, 72, 153',
  emerald: '16, 185, 129',
  indigo: '99, 102, 241',
};

const IconObserve = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 16s5-9 14-9 14 9 14 9-5 9-14 9S2 16 2 16z" />
    <circle cx="16" cy="16" r="4" />
    <circle cx="16" cy="16" r="1.2" fill="currentColor" />
  </svg>
);
const IconUnderstand = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 4h12a6 6 0 016 6v6a6 6 0 01-6 6h-2l-4 6-4-6H8a6 6 0 01-6-6v-6a6 6 0 016-6z" />
    <path d="M10 12h8M10 16h6" />
  </svg>
);
const IconRecommend = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 3v3M4.5 8l2 2M27.5 8l-2 2M2 20h3M27 20h3M11 27v-5a6 6 0 1110 0v5M11 27h10M13 30h6" />
  </svg>
);
const IconCoordinate = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="16" cy="8" r="3" />
    <circle cx="6" cy="24" r="3" />
    <circle cx="26" cy="24" r="3" />
    <path d="M16 11v6l-8 6M16 17l8 6M13 8H4M28 8h-9" />
  </svg>
);
const IconExecute = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 16h20M20 10l6 6-6 6" />
    <path d="M4 6v20" />
  </svg>
);

const steps: Step[] = [
  { num: '01', title: 'Observe',    desc: 'Sense signals across systems and functions in real-time.',       Glyph: IconObserve,    accent: 'violet' },
  { num: '02', title: 'Understand', desc: 'Reason across context, history, and business objectives.',       Glyph: IconUnderstand, accent: 'cyan' },
  { num: '03', title: 'Recommend',  desc: 'Suggest optimal actions grounded in data and policy.',           Glyph: IconRecommend,  accent: 'pink' },
  { num: '04', title: 'Coordinate', desc: 'Align teams, workflows, and systems cross-function.',            Glyph: IconCoordinate, accent: 'emerald' },
  { num: '05', title: 'Execute',    desc: 'Multi-agent action across CRM, ERP, ITSM, and beyond.',          Glyph: IconExecute,    accent: 'indigo' },
];

export function Features() {
  return (
    <Section spacing="xl">
      <Container size="wide">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">How it works</Eyebrow>
            </Reveal>
            <SplitLines className="text-h2 leading-[1.1]">
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-fg-strong">One enterprise.</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-fg-strong">One decision</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">intelligence platform.</span>
              </motion.span>
            </SplitLines>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <Reveal delay={0.2}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Connecting leadership, business functions and operations through trusted
                organizational intelligence.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline with animated SVG line — colored gradient */}
        <div className="relative">
          <div aria-hidden="true" className="hidden lg:block absolute left-0 right-0 top-[62px] h-px">
            <svg width="100%" height="1" preserveAspectRatio="none" viewBox="0 0 100 1" className="w-full h-px overflow-visible">
              <defs>
                <linearGradient id="features-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="25%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="75%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <motion.line
                x1="0" y1="0.5" x2="100" y2="0.5"
                stroke="url(#features-line)"
                strokeWidth="0.2"
                strokeDasharray="0.6 0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16 lg:gap-x-6">
            {steps.map((s, i) => {
              const rgb = accentHex[s.accent];
              const gradient = accentGradient[s.accent];
              return (
                <motion.div
                  key={s.num}
                  className="group relative perspective-lg"
                  initial={{ opacity: 0, y: 40, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Node marker on timeline */}
                  <div className="relative mb-10 flex items-center gap-4">
                    <span className={`text-eyebrow tabular-nums bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
                      {s.num}
                    </span>
                    <motion.div
                      aria-hidden="true"
                      className="relative w-5 h-5 shrink-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <span className="absolute inset-0 rounded-full border bg-bg" style={{ borderColor: `rgba(${rgb},0.6)` }} />
                      <span className="relative w-2 h-2 rounded-full" style={{ background: `rgb(${rgb})`, boxShadow: `0 0 12px rgba(${rgb},0.7)` }} />
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `rgba(${rgb},0.8)` }}
                        initial={{ scale: 1, opacity: 0.6 }}
                        whileInView={{ scale: 2.4, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.7 + i * 0.12, ease: 'easeOut', repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.div>
                  </div>

                  <TiltCard intensity={6} className="h-full">
                    <div
                      className="relative rounded-2xl2 border border-border bg-bg-elevated/60 backdrop-blur-md p-6 md:p-8 h-full min-h-[260px] flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
                    >
                      {/* Colored corner glow */}
                      <div
                        aria-hidden="true"
                        className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle, rgba(${rgb},0.5), transparent 70%)`,
                          filter: 'blur(50px)',
                        }}
                      />
                      {/* Aurora border ring reveal */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-2xl2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          padding: 1,
                          background: `linear-gradient(135deg, rgba(${rgb},0.6), transparent 60%)`,
                          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        } as React.CSSProperties}
                      />

                      {/* Icon with colored frame + breathing pulse */}
                      <div className="relative w-14 h-14 mb-6">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle, rgba(${rgb},0.35), transparent 65%)`,
                            filter: 'blur(12px)',
                          }}
                        />
                        <motion.div
                          className="relative w-14 h-14 rounded-full border flex items-center justify-center backdrop-blur"
                          style={{
                            borderColor: `rgba(${rgb},0.35)`,
                            background: `linear-gradient(135deg, rgba(${rgb},0.10), rgba(${rgb},0.02))`,
                          }}
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                          whileHover={{ scale: 1.15, rotate: 6 }}
                        >
                          <motion.div
                            className="w-7 h-7"
                            style={{ color: `rgb(${rgb})` }}
                            initial={{ rotate: -8, scale: 0.85 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <s.Glyph />
                          </motion.div>
                        </motion.div>
                      </div>

                      <h3 className="text-h4 text-fg-strong mb-3">{s.title}</h3>
                      <p className="text-body-sm text-fg-mid leading-relaxed">{s.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
