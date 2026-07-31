'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { TiltCard } from '@/components/ui/motion/TiltCard';
import { Magnetic } from '@/components/ui/motion/Magnetic';
import { MouseSpotlight } from '@/components/ui/motion/MouseSpotlight';

type Lens = {
  index: string;
  kicker: string;
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
  metrics: { value: string; label: string }[];
  Icon: (props: { className?: string }) => React.ReactElement;
};

const IconGov = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 42h36M6 21h36M9 13l15-6 15 6M8 21v21m32-21v21M17 27v9m7-9v9m7-9v9" />
  </svg>
);
const IconEnterprise = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="14" r="5" />
    <circle cx="10" cy="34" r="4.5" />
    <circle cx="38" cy="34" r="4.5" />
    <path d="M24 19v7M14 32l6-4M34 32l-6-4M14 34h20" />
    <path d="M5 44a5 5 0 0110 0M19 44a5 5 0 0110 0M33 44a5 5 0 0110 0" />
  </svg>
);

const lenses: Lens[] = [
  {
    index: '01',
    kicker: 'Public Sector',
    title: 'Government & Public Services',
    description:
      'Building permits, citizen requests, inter-department approvals. Watch a single permit move automatically through Planning, Fire, Water, and Revenue — with full audit trail.',
    href: '/demo/public-sector?from=home',
    ariaLabel: 'Launch Public Sector demo — Government and Public Services',
    metrics: [
      { value: '1', label: 'Department' },
      { value: 'Live', label: 'Ask' },
      { value: '3-pack', label: 'Capabilities' },
    ],
    Icon: IconGov,
  },
  {
    index: '02',
    kicker: 'Enterprise',
    title: 'Enterprise Business Functions',
    description:
      'Customer Success, Support, Sales, Delivery. When a customer health score drops, Sales, Support, and Finance see it instantly — and know what to do next.',
    href: '/demo/decision-nia?from=home',
    ariaLabel: 'Launch Enterprise demo — Customer Success, Support, Sales, Delivery',
    metrics: [
      { value: '4', label: 'Spaces' },
      { value: 'Live', label: 'Chat + Trace' },
      { value: '4-pack', label: 'Capabilities' },
    ],
    Icon: IconEnterprise,
  },
];

export function LensPicker() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Ambient grid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }} />
      </div>

      <Container size="full" className="relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-5">Pick your lens</Eyebrow>
            </Reveal>
            <SplitLines className="text-h1 text-fg-strong">
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Two worlds.</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">One platform.</span>
              </motion.span>
            </SplitLines>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Same platform. Different world. Pick where you work and see how GenX moves
                information across your teams — in real time.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {lenses.map((lens, idx) => (
            <Reveal key={lens.index} delay={idx * 0.1}>
              <TiltCard className="h-full" intensity={5}>
                <Link
                  href={lens.href}
                  aria-label={lens.ariaLabel}
                  className="group relative block h-full rounded-xl2 border border-border overflow-hidden bg-bg-elevated"
                >
                  <MouseSpotlight size={480} intensity={0.05} className="h-full">
                    <div className="relative p-8 md:p-12 lg:p-14 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-10 md:mb-14">
                        <div className="flex items-center gap-4">
                          <span className="text-eyebrow text-fg-faint tabular-nums">{lens.index}</span>
                          <span className="text-eyebrow text-fg-mid">{lens.kicker}</span>
                        </div>
                        <Magnetic strength={0.4} radius={100}>
                          <motion.span
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-strong text-fg-mid group-hover:text-fg-invert group-hover:bg-fg-strong group-hover:border-fg-strong transition-colors duration-500"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 20 }}
                            aria-hidden="true"
                          >
                            <motion.svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <motion.path
                                d="M5 12h14M13 6l6 6-6 6"
                                initial={{ pathLength: 0.85 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.4 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                              />
                            </motion.svg>
                          </motion.span>
                        </Magnetic>
                      </div>

                      <motion.div
                        className="mb-10 md:mb-14"
                        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <lens.Icon className="w-16 h-16 md:w-20 md:h-20 text-fg-mid group-hover:text-fg-strong transition-colors duration-500" />
                      </motion.div>

                      <h3 className="text-h2 text-fg-strong mb-5">
                        {lens.title}
                      </h3>
                      <p className="text-body-lg text-fg-mid leading-relaxed max-w-lg">
                        {lens.description}
                      </p>

                      <div className="mt-12 md:mt-16 pt-8 border-t border-border grid grid-cols-3 gap-4">
                        {lens.metrics.map((m, mi) => (
                          <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 + mi * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="text-h4 text-fg-strong tabular-nums">{m.value}</div>
                            <div className="text-eyebrow text-fg-muted mt-2">{m.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Sweep highlight on hover */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-fg-strong transition-transform duration-700 ease-out-quart group-hover:scale-x-100"
                      />
                    </div>
                  </MouseSpotlight>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
