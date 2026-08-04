'use client';

import mockData from '@/data/marketing/sales.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type Row = {
  account: string;
  deal: string;
  stage: string;
  arr: string;
  health: number | string;
  signals: string;
  rec: string;
};

export default function SalesSolutionClient() {
  const pipeline = mockData.pipeline as Row[];

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
              <Eyebrow tone="muted" withDot className="mb-8">Solution · Sales</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Pipeline.</span>
                <span className="block text-gradient-aurora">Honest.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Sales sees the same signals CS and Support see. Renewal risk, deployment
                health, support escalations — before pitching expansion into a broken account.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>Book a demo</CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Pipeline */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Pipeline view · Q3 2026</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Every deal,</span>
                  <span className="block text-gradient-aurora">in context.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden">
              <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-surface text-eyebrow text-fg-mid">
                <span className="col-span-3">Account · Deal</span>
                <span className="col-span-2">Stage</span>
                <span className="col-span-1">ARR</span>
                <span className="col-span-2">Health</span>
                <span className="col-span-2">Active signals</span>
                <span className="col-span-2">Nia recommendation</span>
              </div>
              {pipeline.map((r, i) => (
                <div key={`${r.account}-${i}`} className="grid grid-cols-12 px-6 py-5 border-b border-border text-body-sm items-center hover:bg-surface transition-colors last:border-b-0">
                  <div className="col-span-3">
                    <p className="text-fg-strong">{r.account}</p>
                    <p className="text-body-sm text-fg-mid">{r.deal}</p>
                  </div>
                  <span className="col-span-2 text-fg-mid">{r.stage}</span>
                  <span className="col-span-1 text-fg-strong font-mono tabular-nums">{r.arr}</span>
                  <div className="col-span-2 pr-4">
                    {typeof r.health === 'number' ? (
                      <div className="flex items-center gap-3">
                        <div className="h-1 bg-surface-2 rounded-full overflow-hidden flex-1">
                          <div
                            className={r.health < 40 ? 'h-full bg-fg-strong' : 'h-full bg-fg-mid'}
                            style={{ width: `${r.health}%` }}
                          />
                        </div>
                        <span className="text-fg-strong font-mono text-body-sm tabular-nums shrink-0">{r.health}</span>
                      </div>
                    ) : (
                      <span className="text-fg-faint">—</span>
                    )}
                  </div>
                  <span className="col-span-2 text-fg-mid pr-2">{r.signals}</span>
                  <span className="col-span-2 text-fg-strong">{r.rec}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Rep briefing */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Rep briefing</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Every meeting starts</span>
                  <span className="block text-gradient-aurora">with the full picture.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="border border-border rounded-xl2 p-6 md:p-10">
              <Eyebrow tone="muted" className="mb-4">10:00 — Account A expansion call</Eyebrow>
              <h3 className="text-h3 text-fg-strong mb-8">Ana (rep), End User (buyer), Persona 1 (CSM)</h3>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <Eyebrow tone="muted" className="mb-4">Before the call — Nia briefing</Eyebrow>
                  <ul className="space-y-3 text-body-md text-fg-mid">
                    <li className="flex items-start gap-3"><span className="text-fg-faint mt-2">·</span><span>Health 35 (dropped from 42 in 6h)</span></li>
                    <li className="flex items-start gap-3"><span className="text-fg-faint mt-2">·</span><span>FD-2104 P0 open, hotfix v3.8.3 in QA</span></li>
                    <li className="flex items-start gap-3"><span className="text-fg-faint mt-2">·</span><span>INIT-2104 coordination active</span></li>
                    <li className="flex items-start gap-3"><span className="text-fg-faint mt-2">·</span><span>NPS dropped 8 → 6 last week</span></li>
                    <li className="flex items-start gap-3"><span className="text-fg-faint mt-2">·</span><span>Renewal 143d out</span></li>
                  </ul>
                </div>
                <div>
                  <Eyebrow tone="muted" className="mb-4">Nia recommendation</Eyebrow>
                  <p className="text-body-lg text-fg-strong leading-relaxed">
                    Delay expansion pitch by 30 days. Open with acknowledgment of FD-2104
                    and hotfix ETA. Ask for feedback on coordination speed — it&rsquo;s a
                    strength worth surfacing. Do not close.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
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
              <h2 className="text-h2 text-gradient-aurora mb-10">
                Stop pitching expansion <span className="text-fg-mid">into broken deployments.</span>
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
