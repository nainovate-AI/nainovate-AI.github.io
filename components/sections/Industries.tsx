'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { Magnetic } from '@/components/ui/motion/Magnetic';

type UseCase = {
  number: string;
  name: string;
  metric: string;
  description: string;
  link: string;
  accent: string; // rgb triplet
};

const useCases: UseCase[] = [
  {
    number: '01',
    name: 'CUSTOMER SUCCESS',
    metric: 'Churn prevention',
    description: 'Detect engagement drop, trigger retention playbooks, alert CS + Product teams. Pilot deflection 75%, retention lift 40%.',
    link: '/solutions/customer-success',
    accent: '139, 92, 246',
  },
  {
    number: '02',
    name: 'CUSTOMER SUPPORT',
    metric: 'Revenue protection',
    description: 'Delivery-delay signal flows to Sales, CS, Finance simultaneously. Churn reduction 85%, revenue protected $2M+.',
    link: '/solutions/customer-support',
    accent: '34, 211, 238',
  },
  {
    number: '03',
    name: 'SALES',
    metric: 'Capacity check',
    description: 'Deal-closure signal auto-checks Delivery + Finance capacity before closing. On-time delivery 95%, margin lift 15%.',
    link: '/solutions/sales',
    accent: '236, 72, 153',
  },
  {
    number: '04',
    name: 'DELIVERY',
    metric: 'Multi-team response',
    description: 'Usage decline notifies Product + Sales + CS in one hop. Response speed 60% faster, coordination cost cut 3x.',
    link: '/solutions/delivery',
    accent: '16, 185, 129',
  },
];

export function Industries() {
  const router = useRouter();

  return (
    <Section spacing="xl">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">Use cases</Eyebrow>
            </Reveal>
            <SplitLines className="text-display leading-[0.98]">
              <motion.span
                className="block overflow-hidden line-crop-safe text-fg-strong"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block">Cross-functional</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">workflows.</span>
              </motion.span>
            </SplitLines>
          </div>
        </div>

        {/* Editorial row list — accent glow + magnetic arrow */}
        <div className="border-t border-border-strong">
          {useCases.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                role="link"
                tabIndex={0}
                onClick={() => router.push(u.link)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    router.push(u.link);
                  }
                }}
                className="group relative block border-b border-border cursor-pointer overflow-hidden focus-visible:outline-none transition-colors duration-500"
              >
                {/* Colored gradient wash — reveals gently on hover (no aggressive sweep) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, rgba(${u.accent},0.10) 0%, rgba(${u.accent},0.04) 60%, transparent 100%)`,
                  }}
                />
                {/* Accent left-edge indicator */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 group-focus-visible:scale-y-100 transition-transform duration-500 ease-out-quart"
                  style={{ background: `linear-gradient(180deg, rgb(${u.accent}), rgba(${u.accent},0.3))` }}
                />

                <div className="relative py-8 md:py-12 grid md:grid-cols-12 gap-4 md:gap-6 md:items-center pl-4 md:pl-6">
                  <div className="md:col-span-3 flex items-center gap-4">
                    <span
                      className="text-h3 font-normal tabular-nums transition-colors duration-500 text-fg-faint group-hover:text-fg-strong"
                    >
                      {u.number}
                    </span>
                    <h3 className="text-eyebrow text-fg-mid group-hover:text-fg-strong transition-colors duration-500">
                      {u.name}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <p
                      className="text-h2 text-fg-strong transition-all duration-500 group-hover:translate-x-2"
                      style={{ textShadow: undefined }}
                    >
                      {u.metric}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-body-md text-fg-mid group-hover:text-fg-strong leading-relaxed transition-colors duration-500">
                      {u.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <Magnetic strength={0.3}>
                      <span
                        className="inline-flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-500"
                        style={{
                          borderColor: `rgba(${u.accent},0.4)`,
                          background: `linear-gradient(135deg, rgba(${u.accent},0.08), transparent)`,
                          color: `rgb(${u.accent})`,
                        }}
                      >
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </Magnetic>
                  </div>
                </div>

                {/* Bottom hairline reveal */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-700 ease-out-quart"
                  style={{ background: `linear-gradient(90deg, rgb(${u.accent}), transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
