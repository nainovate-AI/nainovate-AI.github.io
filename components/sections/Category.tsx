'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NeuralNetwork } from '@/components/ui/NeuralNetwork';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { TiltCard } from '@/components/ui/motion/TiltCard';
import { Magnetic } from '@/components/ui/motion/Magnetic';
import { CTALink } from '@/components/ui/CTA';

type AccentKey = 'violet' | 'cyan' | 'pink' | 'emerald' | 'indigo' | 'orange';

type Capability = {
  num: string;
  name: string;
  desc: string;
  feature: string;
  accent: AccentKey;
  Glyph: () => React.ReactElement;
};

const accentGradient: Record<AccentKey, string> = {
  violet: 'from-[#a78bfa] via-[#8b5cf6] to-[#6366f1]',
  cyan: 'from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]',
  pink: 'from-[#fbcfe8] via-[#ec4899] to-[#f43f5e]',
  emerald: 'from-[#6ee7b7] via-[#10b981] to-[#059669]',
  indigo: 'from-[#a5b4fc] via-[#6366f1] to-[#4f46e5]',
  orange: 'from-[#fed7aa] via-[#fb923c] to-[#f97316]',
};

const accentHex: Record<AccentKey, string> = {
  violet: '139, 92, 246',
  cyan: '34, 211, 238',
  pink: '236, 72, 153',
  emerald: '16, 185, 129',
  indigo: '99, 102, 241',
  orange: '251, 146, 60',
};

const Icons = {
  Observe: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16s5-9 14-9 14 9 14 9-5 9-14 9S2 16 2 16z" /><circle cx="16" cy="16" r="4" /></svg>
  ),
  Understand: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="10" /><path d="M12 14a4 4 0 018 0M12 20h8" /></svg>
  ),
  Recommend: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3v3M4.5 8l2 2M27.5 8l-2 2M11 27v-5a6 6 0 1110 0v5M11 27h10M13 30h6" /></svg>
  ),
  Coordinate: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="8" r="3" /><circle cx="6" cy="24" r="3" /><circle cx="26" cy="24" r="3" /><path d="M16 11l-8 12M16 11l8 12M9 24h14" /></svg>
  ),
  Execute: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16h20M20 10l6 6-6 6" /><path d="M4 6v20" /></svg>
  ),
  Monitor: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16h5l3-8 6 16 3-8h9" /></svg>
  ),
  Learn: () => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h18a4 4 0 014 4v18a4 4 0 00-4-4H4z" /><path d="M4 6v18" /></svg>
  ),
};

const capabilities: Capability[] = [
  { num: '01', name: 'Observe', desc: 'Sense signals across systems and functions in real-time.', Glyph: Icons.Observe, feature: 'Signal → Action Chain', accent: 'violet' },
  { num: '02', name: 'Understand', desc: 'Reason across context, history, and business objectives.', Glyph: Icons.Understand, feature: 'AI Agent — Ask', accent: 'cyan' },
  { num: '03', name: 'Recommend', desc: 'Suggest optimal actions grounded in data and policy.', Glyph: Icons.Recommend, feature: 'Signal → Action Chain', accent: 'pink' },
  { num: '04', name: 'Coordinate', desc: 'Align teams, workflows, and systems cross-function.', Glyph: Icons.Coordinate, feature: 'Coordination Center', accent: 'emerald' },
  { num: '05', name: 'Execute', desc: 'Multi-agent action across CRM, ERP, ITSM, and beyond.', Glyph: Icons.Execute, feature: 'Workflow', accent: 'indigo' },
  { num: '06', name: 'Monitor', desc: 'Track outcomes, drift, and health continuously.', Glyph: Icons.Monitor, feature: 'Trace & Audit', accent: 'orange' },
  { num: '07', name: 'Learn', desc: 'Improve from every decision with governed feedback loops.', Glyph: Icons.Learn, feature: 'Learning Loop', accent: 'violet' },
];

export function Category() {
  return (
    <Section spacing="xl" className="scroll-mt-24 relative">
      <Container size="wide">
        {/* Header + visual */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 md:mb-28">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">Decision Intelligence</Eyebrow>
            </Reveal>
            <SplitLines className="text-display leading-[0.98] mb-10">
              <motion.span
                className="block overflow-hidden line-crop-safe text-fg-strong"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Six features.</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe text-fg-strong"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Seven capabilities.</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">One intelligence layer.</span>
              </motion.span>
            </SplitLines>
            <Reveal delay={0.3}>
              <p className="text-body-lg text-fg-mid leading-relaxed mb-8 max-w-xl">
                Our features are what we ship. The capabilities they produce are what
                transform your organization. One Decision Intelligence core orchestrates them all.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Magnetic strength={0.3}>
                <CTALink href="/decision-intelligence" variant="outline" size="md" arrow>
                  Explore Decision Intelligence
                </CTALink>
              </Magnetic>
            </Reveal>
          </div>

          {/* 3D NeuralNetwork visual */}
          <motion.div
            className="lg:col-span-5 perspective-lg"
            initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard intensity={10}>
              <div className="relative aspect-square rounded-2xl2 border border-border bg-black/50 backdrop-blur-xl overflow-hidden shadow-lg">
                {/* Aurora gradient border ring */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl2 border-aurora opacity-70" />
                {/* Corner LIVE badge */}
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-eyebrow text-white/90 bg-black/40 backdrop-blur border border-white/10">
                  <span className="relative inline-flex w-1.5 h-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-cyan)] opacity-70 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[color:var(--accent-cyan)]" />
                  </span>
                  <span>Neural mesh · Live</span>
                </div>
                {/* Corner meta */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-eyebrow text-white/60">
                  <span>26 nodes · 78 edges</span>
                  <span className="font-mono">rotate · hover</span>
                </div>
                <NeuralNetwork />
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Capabilities — colored 3D cards with layered depth */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {capabilities.map((c, i) => {
            const rgb = accentHex[c.accent];
            const gradient = accentGradient[c.accent];
            return (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 40, rotateX: -6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="perspective-lg"
              >
                <TiltCard intensity={7} className="h-full">
                  <div
                    className="group relative h-full min-h-[260px] rounded-2xl2 border border-border bg-bg-elevated/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    style={{
                      boxShadow: '0 0 0 1px transparent',
                    }}
                  >
                    {/* Colored corner glow — reveals on hover */}
                    <div
                      aria-hidden="true"
                      className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle, rgba(${rgb},0.5), transparent 70%)`,
                        filter: 'blur(50px)',
                      }}
                    />
                    {/* Aurora border sweep on hover */}
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

                    <div className="relative p-6 md:p-8 flex flex-col h-full">
                      {/* Colored numeral */}
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className={`text-h3 font-semibold tabular-nums bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}
                        >
                          {c.num}
                        </span>
                        <span aria-hidden="true" className="h-px flex-1 bg-border" />
                      </div>

                      {/* Icon with continuous breathing pulse + colored glow ring on hover */}
                      <div className="relative w-14 h-14 mb-6">
                        {/* Colored halo behind icon on hover */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle, rgba(${rgb},0.35), transparent 65%)`,
                            filter: 'blur(12px)',
                          }}
                        />
                        {/* Bordered icon frame */}
                        <motion.div
                          className="relative w-14 h-14 rounded-full border flex items-center justify-center backdrop-blur"
                          style={{
                            borderColor: `rgba(${rgb},0.3)`,
                            background: `linear-gradient(135deg, rgba(${rgb},0.08), rgba(${rgb},0.02))`,
                          }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                          whileHover={{ scale: 1.15, rotate: 6 }}
                        >
                          <div
                            className="w-6 h-6"
                            style={{ color: `rgb(${rgb})` }}
                          >
                            <c.Glyph />
                          </div>
                        </motion.div>
                      </div>

                      <h3 className="text-h4 text-fg-strong mb-2">{c.name}</h3>
                      <p className="text-body-sm text-fg-mid leading-relaxed mb-6 flex-1">{c.desc}</p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-eyebrow text-fg-subtle">
                          Delivered by · <span className="text-fg-mid">{c.feature}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
