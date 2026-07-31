'use client';

import mockData from '@/data/marketing/customer-success.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type Watchlist = { name: string; hits: string | number; top: string };

export default function CustomerSuccessSolutionClient() {
  const healthTrend = mockData.healthTrend as number[];
  const watchlists = mockData.watchlists as Watchlist[];

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
              <Eyebrow tone="muted" withDot className="mb-8">
                Solution · Customer Success
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">Health.</span>
                <span className="block text-gradient-aurora">Watched.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                CSMs see health drops the moment they happen — not at the next QBR. Every
                ticket, every workflow, every renewal signal converges on the account.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Book a demo
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Account view */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Account view · Account A</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">One account.</span>
                  <span className="block text-gradient-aurora">Every lens. One view.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden mb-10 md:mb-14">
              <div className="p-6 md:p-8 border-b border-border bg-surface">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Account</Eyebrow>
                    <p className="text-h4 text-fg-strong">Account A</p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Health score</Eyebrow>
                    <p className="text-h4 text-fg-strong tabular-nums">
                      35 <span className="text-body-sm text-fg-muted">/ 100 · from 42</span>
                    </p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">ARR</Eyebrow>
                    <p className="text-h4 text-fg-strong tabular-nums">$1.2M</p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Renewal</Eyebrow>
                    <p className="text-h4 text-fg-strong">2026-11-30 · 143d</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <Eyebrow tone="muted" className="mb-4">Active signals</Eyebrow>
                  <ul className="space-y-3 text-body-md">
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-fg-faint mt-2">·</span><span>FD-2104 P0 escalation — Product X sync</span></li>
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-fg-faint mt-2">·</span><span>wl_001 fired 05:47 today</span></li>
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-fg-faint mt-2">·</span><span>INIT-2104 coordination open</span></li>
                    <li className="flex items-start gap-3 text-fg-mid"><span className="text-fg-faint mt-2">·</span><span>3 sync tickets last 24h</span></li>
                    <li className="flex items-start gap-3 text-fg-mid"><span className="text-fg-faint mt-2">·</span><span>NPS dropped 8 → 6 last week</span></li>
                  </ul>
                </div>
                <div>
                  <Eyebrow tone="muted" className="mb-4">Next actions</Eyebrow>
                  <ul className="space-y-3 text-body-md">
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-success mt-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg></span><span>09:00 — Check-in with End User scheduled</span></li>
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-success mt-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg></span><span>10:00 — Sync with Consultant 1 on hotfix ETA</span></li>
                    <li className="flex items-start gap-3 text-fg-strong"><span className="text-success mt-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg></span><span>14:00 — Draft executive summary for Account A CIO</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trend */}
          <Reveal>
            <div className="border border-border rounded-xl2 p-6 md:p-8">
              <Eyebrow tone="muted" className="mb-6">Health trend — last 30 days</Eyebrow>
              <div className="flex gap-1 items-end h-40">
                {healthTrend.map((v, i) => (
                  <div key={i} className="bg-fg-strong/70 flex-1 min-w-0 rounded-t-sm2" style={{ height: `${v}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-eyebrow text-fg-muted mt-3 font-mono">
                <span>D-30</span>
                <span>D-15</span>
                <span>Today</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Watchlists */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">CSM watchlists</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">The signals</span>
                  <span className="block text-gradient-aurora">that matter to renewal.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {watchlists.map((w) => (
              <RevealItem key={w.name} className="group bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                <Eyebrow tone="muted" className="mb-4">Watchlist</Eyebrow>
                <h3 className="text-h4 text-fg-strong mb-6" dangerouslySetInnerHTML={{ __html: w.name }} />
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-fg-mid">Accounts firing</span>
                    <span className="text-fg-strong font-mono tabular-nums">{w.hits}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-fg-mid">Top account</span>
                    <span className="text-fg-strong">{w.top}</span>
                  </div>
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
                Never learn about a churn <span className="text-fg-mid">from the QBR again.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Book a demo
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
