'use client';

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/motion/Marquee';
import { CountUp } from '@/components/ui/motion/CountUp';

const industries = ['Enterprise SaaS', 'Public Sector', 'Healthcare', 'Manufacturing', 'BFSI'];
const numbers = [
  { n: 12, l: 'Design Partners' },
  { n: 3, l: 'Active Pilots' },
  { n: 1, l: 'LOI Signed' },
];

export function ProofStrip() {
  return (
    <section className="relative border-y border-border bg-bg-elevated/50 backdrop-blur-md overflow-hidden">
      {/* Marquee industries — top */}
      <div className="border-b border-border py-6">
        <Marquee speed={40} pauseOnHover>
          {industries.map((name, i) => (
            <span key={`${name}-a-${i}`} className="inline-flex items-center gap-16 text-h3 font-semibold text-fg-strong">
              <span>{name}</span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-fg-faint" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Counters */}
      <Container size="full">
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {numbers.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 0.06}
              className={`text-center md:text-left ${i > 0 ? 'md:pl-12 md:border-l md:border-border' : ''} ${i > 0 ? 'md:pr-8' : 'md:pr-8'}`}
            >
              <div className="text-h1 text-fg-strong leading-none mb-3">
                <CountUp value={s.n} />
              </div>
              <p className="text-eyebrow text-fg-muted">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Marquee industries — bottom, reversed */}
      <div className="border-t border-border py-6">
        <Marquee speed={40} reverse pauseOnHover>
          {industries.slice().reverse().map((name, i) => (
            <span key={`${name}-b-${i}`} className="inline-flex items-center gap-16 text-h3 font-semibold text-fg-mid">
              <span>{name}</span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-fg-faint" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
