'use client';

import mockData from '@/data/marketing/customer-support.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type TimelineRow = { t: string; who: string; what: string };
type Persona = { who: string; surface: string; what: string };
type Metric = { label: string; value: string; sub?: string };

export default function CustomerSupportSolutionClient() {
  const timeline = mockData.timeline as TimelineRow[];
  const personas = mockData.personas as Persona[];
  const metrics = mockData.metrics as Metric[];

  return (
    <main className="pt-20 bg-bg">
      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">Solution · Customer Support</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">Support.</span>
                <span className="block text-gradient-aurora">Resolved.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                L1 deflection without a human. L2 with full context. Support Heads with root
                cause, not reopen counts. Nia sits inside Incident Management Tool — customers self-serve,
                agents deflect, leaders decide.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>Book a demo</CTALink>
                <CTALink href="/demo" variant="outline" size="lg" arrow>See it live</CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">One morning at Acme</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">FD-2104 lands at 5:45 AM.</span>
                  <span className="block text-gradient-aurora">By 5:47, everything moves.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="border-t border-border-strong">
            {timeline.map((row, i) => (
              <RevealItem key={`${row.t}-${i}`}>
                <div className="border-b border-border py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-6 items-start hover:bg-surface transition-colors">
                  <span className="col-span-3 md:col-span-2 text-body-sm text-fg-faint font-mono tabular-nums">{row.t}</span>
                  <span className="col-span-9 md:col-span-3 text-body-md text-fg-strong">{row.who}</span>
                  <span className="col-span-12 md:col-span-7 text-body-md text-fg-mid leading-relaxed">{row.what}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Personas */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Right surface for each role</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Nia meets each persona</span>
                  <span className="block text-gradient-aurora">where they work.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {personas.map((p) => (
              <RevealItem key={p.who} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <h3 className="text-h3 text-fg-strong mb-6">{p.who}</h3>
                <Eyebrow tone="muted" className="mb-2">Primary surface</Eyebrow>
                <p className="text-body-md text-fg-strong mb-5">{p.surface}</p>
                <Eyebrow tone="muted" className="mb-2">What they see</Eyebrow>
                <p className="text-body-md text-fg-mid leading-relaxed">{p.what}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Metrics */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Six weeks at Acme</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Numbers.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 border-y border-border-strong">
            {metrics.map((r, i) => (
              <RevealItem
                key={r.label}
                className={`py-10 md:py-14 px-2 md:px-6 ${i > 0 ? 'lg:border-l lg:border-border' : ''} ${i % 2 === 1 ? 'border-l border-border lg:border-l' : ''} ${i >= 2 ? 'border-t border-border lg:border-t-0' : ''}`}
              >
                <div className="text-display text-fg-strong tabular-nums leading-none mb-6">{r.value}</div>
                <div className="text-eyebrow text-fg-strong mb-2">{r.label}</div>
                {r.sub && <div className="text-body-sm text-fg-muted">{r.sub}</div>}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <h2 className="text-display text-fg-strong mb-10">
                Ready to deflect L1 <span className="text-fg-mid">without hiring?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Book a 30-min demo
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
