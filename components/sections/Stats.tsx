'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { CountUp } from '@/components/ui/motion/CountUp';

type Headline = { number: number; label: string; sub: string; suffix?: string; accent?: 'violet' | 'cyan' | 'pink' | 'emerald' };
type Secondary = { number: number; prefix?: string; suffix?: string; l: string };

const headline: Headline[] = [
  { number: 12, label: 'Design Partners', sub: 'Enterprise engagements', accent: 'violet' },
  { number: 3, label: 'Active Pilots', sub: 'Cross-functional deployments', accent: 'cyan' },
  { number: 1, label: 'LOI Signed', sub: 'Vista Equity portfolio company', accent: 'pink' },
  { number: 85, suffix: '%', label: 'Signal Detection', sub: 'Accuracy in pilot data', accent: 'emerald' },
];

const secondary: Secondary[] = [
  { number: 1, prefix: '$', suffix: 'M', l: 'ARR target — Q4 2026' },
  { number: 18, suffix: 'mo', l: 'Runway on $2.5M seed' },
  { number: 90, suffix: '%', l: 'Pilot-to-paid conversion' },
];

const accentGradient = {
  violet: 'from-[#a78bfa] via-[#8b5cf6] to-[#6366f1]',
  cyan: 'from-[#67e8f9] via-[#22d3ee] to-[#06b6d4]',
  pink: 'from-[#fbcfe8] via-[#ec4899] to-[#f43f5e]',
  emerald: 'from-[#6ee7b7] via-[#10b981] to-[#059669]',
} as const;

export function Stats() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      <Container size="wide" className="relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">Traction</Eyebrow>
            </Reveal>
            <SplitLines className="text-display leading-[0.98]">
              <motion.span
                className="block overflow-hidden line-crop-safe text-fg-strong"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Early</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">validation.</span>
              </motion.span>
            </SplitLines>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={0.15}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Validated across enterprise pilots. First LOI signed. Cross-functional
                decision intelligence in production.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Headline stats — CountUp numerals with per-card gradient accent */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-border-strong">
          {headline.map((s, i) => {
            const gradient = accentGradient[s.accent ?? 'violet'];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative py-12 md:py-16 px-4 md:px-6 group overflow-hidden ${i > 0 ? 'lg:border-l lg:border-border' : ''} ${i % 2 === 1 ? 'border-l border-border lg:border-l' : ''} ${i >= 2 ? 'border-t border-border lg:border-t-0' : ''}`}
              >
                {/* Corner colored glow — reveals on hover */}
                <div
                  aria-hidden="true"
                  className={`absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl bg-gradient-to-br ${gradient}`}
                  style={{ filter: 'blur(60px)' }}
                />
                <div className="relative">
                  <div className={`text-display leading-none mb-6 md:mb-8 bg-gradient-to-br ${gradient} bg-clip-text text-transparent tabular-nums`}>
                    <CountUp value={s.number} suffix={s.suffix} duration={1.8} />
                  </div>
                  <div className="text-eyebrow text-fg-strong mb-2">{s.label}</div>
                  <div className="text-body-sm text-fg-muted">{s.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary metrics */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {secondary.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`md:pl-8 ${i > 0 ? 'md:border-l md:border-border' : ''}`}
            >
              <div className="text-h1 text-fg-strong mb-3">
                <CountUp value={s.number} prefix={s.prefix} suffix={s.suffix} duration={1.6} />
              </div>
              <div className="text-eyebrow text-fg-muted">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
