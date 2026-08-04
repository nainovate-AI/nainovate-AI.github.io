'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';
import { SplitLines } from '@/components/ui/motion/SplitText';
import { MouseSpotlight } from '@/components/ui/motion/MouseSpotlight';
import { Magnetic } from '@/components/ui/motion/Magnetic';

const proofPoints = [
  'Enterprise Ready',
  'SOC 2 Compliant',
  '12 Design Partners',
  '3 Active Pilots',
];

export function CTA() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      <MouseSpotlight size={600} intensity={0.06} className="w-full">
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">The Vision</Eyebrow>
            </Reveal>

            <SplitLines className="text-h2 leading-[1.1] mb-10" stagger={0.14}>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-fg-strong">When one function</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-fg-strong">detects a signal,</span>
              </motion.span>
              <motion.span
                className="block overflow-hidden line-crop-safe"
                variants={{ hidden: { opacity: 0, y: '110%' }, visible: { opacity: 1, y: '0%', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <span className="block text-gradient-aurora">the organization responds.</span>
              </motion.span>
            </SplitLines>

            <Reveal delay={0.4}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-12 md:mb-16 leading-relaxed">
                Partner with us to define the Decision Intelligence category and lead
                the next generation of enterprise operations.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-5 mb-14 md:mb-20">
                <Magnetic strength={0.4}>
                  <CTALink href="/contact" variant="solid" size="lg" arrow>
                    GET STARTED
                  </CTALink>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <CTALink
                    href="https://calendly.com/naveen-nainovate/30min"
                    variant="outline"
                    size="lg"
                    arrow
                  >
                    SCHEDULE DEMO
                  </CTALink>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="border-t border-border pt-8 md:pt-10 flex flex-wrap gap-x-10 gap-y-4">
                {proofPoints.map((p, i) => (
                  <motion.span
                    key={p}
                    className="inline-flex items-center gap-3 text-eyebrow text-fg-mid"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.06 }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-fg-strong/70"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                    />
                    {p}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </MouseSpotlight>
    </Section>
  );
}
