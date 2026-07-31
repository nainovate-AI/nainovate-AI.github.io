'use client';

import mockData from '@/data/marketing/delivery.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type RescueRow = { d: string; e: string };
type Project = { p: string; m: string; s: string; h: string; c: string };

export default function DeliverySolutionClient() {
  const rescueTimeline = mockData.rescueTimeline as RescueRow[];
  const portfolio = mockData.portfolio as Project[];

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
              <Eyebrow tone="muted" withDot className="mb-8">Solution · Delivery</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">Delivery.</span>
                <span className="block text-gradient-aurora">Rescued.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Milestone risk surfaced when it forms — not at the steering committee. Every
                slip anchored to a signal. Every rescue coordinated across CSM, Sales, and
                Support.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>Book a demo</CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Account A Phase 2 rescue */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Account A Phase 2 · Rescue plan</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Milestone slip spotted</span>
                  <span className="block text-gradient-aurora">21 days before steering.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden mb-10 md:mb-14">
            <RevealItem className="bg-bg p-8 md:p-12 space-y-6 text-body-lg text-fg-mid leading-relaxed">
              <Eyebrow tone="muted" className="mb-2">Before Nia</Eyebrow>
              <p>
                <span className="text-fg-strong">Account A Phase 2</span> was scoped 8 weeks, kicked
                off 2026-05-15. Milestone M3 (UAT sign-off) was due 2026-07-01. On
                2026-06-10 — 21 days before — Nia flagged three concurrent signals: two
                open P1 tickets from UAT users, resource utilization at 138% for two
                consultants, and CSM sentiment score dropping.
              </p>
              <p>
                Traditional flow: this shows up at the 2026-07-08 steering committee, one
                week late. Blame, escalation, weekend hero work.
              </p>
            </RevealItem>
            <RevealItem className="bg-bg p-8 md:p-12 space-y-6 text-body-lg text-fg-mid leading-relaxed">
              <Eyebrow tone="muted" className="mb-2">With Nia</Eyebrow>
              <p>
                <span className="text-fg-strong">With Nia:</span> watchlist wl_delivery_slip
                fires. Recommendation drafts a rescue plan — 1 consultant reassigned from
                a green project, 2 P1s escalated to engineering with hotfix path, CSM
                warms Account A PMO on realistic re-baseline.
              </p>
              <p className="text-fg-strong">
                Result: M3 slips 8 days instead of 3 weeks. Steering committee sees the
                plan before the slip lands.
              </p>
            </RevealItem>
          </RevealGroup>

          {/* Rescue timeline */}
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-surface">
                <Eyebrow tone="muted">Rescue timeline</Eyebrow>
              </div>
              {rescueTimeline.map((row, i) => (
                <div key={row.d} className={`px-6 py-4 grid grid-cols-12 gap-4 items-center text-body-sm ${i > 0 ? 'border-t border-border' : ''} hover:bg-surface transition-colors`}>
                  <span className="col-span-3 md:col-span-2 text-fg-faint font-mono tabular-nums">{row.d}</span>
                  <span className="col-span-9 md:col-span-10 text-fg-strong">{row.e}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Portfolio */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Portfolio view</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Every project. Every milestone.</span>
                  <span className="block text-gradient-aurora">One dashboard.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {portfolio.map((x) => (
              <RevealItem key={x.p} className="group bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                <Eyebrow tone="muted" className="mb-2">Project</Eyebrow>
                <h3 className="text-h4 text-fg-strong mb-5">{x.p}</h3>
                <p className="text-body-md text-fg-strong mb-2">{x.m}</p>
                <p className="text-body-sm text-fg-mid font-mono mb-6">{x.s}</p>
                <div className="pt-4 border-t border-border">
                  <Eyebrow tone="muted" className="mb-2">Health</Eyebrow>
                  <p className={`text-body-md ${x.h === 'At risk' ? 'text-fg-strong font-semibold' : 'text-fg-mid'}`}>{x.h}</p>
                  <p className="text-body-sm text-fg-muted mt-1">{x.c}</p>
                </div>
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
                Never learn about a slip <span className="text-fg-mid">at steering again.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>Book a demo</CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
