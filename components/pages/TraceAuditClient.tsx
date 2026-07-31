'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

const signals = [
  { label: 'Ticket cluster density (Account A, sync)', weight: 0.42, evidence: '3 tickets in 24h' },
  { label: 'Compliance evidence at risk', weight: 0.28, evidence: '12MB stuck on device' },
  { label: 'Requester seniority (maintenance eng)', weight: 0.18, evidence: 'active user, 47 rounds/day' },
  { label: 'Account health drop', weight: 0.12, evidence: 'score 42 → 35 in 6h' },
];

const evidence = [
  { id: 'evd_01', src: 'Incident Management Tool', ref: 'FD-2104', detail: 'ticket body, requester, priority' },
  { id: 'evd_02', src: 'Incident Management Tool', ref: 'FD-2101, FD-2098', detail: 'related tickets last 24h' },
  { id: 'evd_03', src: 'Telemetry', ref: 'sync-svc.metrics', detail: 'error rate 8.4% (threshold 2%)' },
  { id: 'evd_04', src: 'CRM', ref: 'Account A', detail: 'health score 35, ARR $1.2M' },
  { id: 'evd_05', src: 'Issue Tracker', ref: 'sync-mobile', detail: 'owner Consultant 1, on-call yes' },
  { id: 'evd_06', src: 'KB', ref: 'no article match', detail: 'novelty score 0.87' },
];

const timeline = [
  { t: '00:00.000', event: 'FD-2104 lands', src: 'Incident Management Tool' },
  { t: '00:00.180', event: 'AI Agent classifies novelty 0.87 · escalation path', src: 'Nia · Ask' },
  { t: '00:00.410', event: 'Watchlist wl_001 fires (cluster + compliance signal)', src: 'Nia · Watchlists' },
  { t: '00:00.690', event: 'Recommendation rec_002 drafted, confidence 0.91', src: 'Nia · Recs' },
  { t: '00:00.720', event: 'Auto-approve (Support Head policy)', src: 'Governance' },
  { t: '00:01.060', event: 'Workflow wf_001 dispatched (6 steps)', src: 'Nia · Workflows' },
  { t: '00:01.420', event: 'All steps ok — trace closed', src: 'Coordination' },
];

const whyItMatters = [
  { h: 'Legal & compliance', p: 'Every AI action defensible. GDPR, SOC2, HIPAA-ready audit trails.' },
  { h: 'Governance boards', p: 'Prompt versions, model versions, decision policies — all versioned and diffable.' },
  { h: 'Customer trust', p: 'When customers ask why the AI did that — you have the receipts, with citations.' },
];

export default function TraceAuditClient() {
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
                Feature 03 · Trace & Audit
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">Zero</span>
                <span className="block">black</span>
                <span className="block text-gradient-aurora">box.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Every AI decision — every reply, every escalation, every watchlist trigger —
                logged with agent confidence, weighted signals, and evidence rows. Legal-audit
                ready. Regulator-ready. Compliance-team-happy.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Trace record */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Trace trace_acme_p0_2104</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Open a trace.</span>
                  <span className="block text-gradient-aurora">See the whole decision.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Trace header card */}
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden mb-10 md:mb-14">
              <div className="p-6 md:p-8 border-b border-border bg-surface">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Trace ID</Eyebrow>
                    <p className="text-body-md text-fg-strong font-mono">trace_acme_p0_2104</p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Source ticket</Eyebrow>
                    <p className="text-body-md text-fg-strong font-mono">FD-2104</p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Started</Eyebrow>
                    <p className="text-body-md text-fg-strong">05:45 AM · 2026-07-09</p>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-2">Duration</Eyebrow>
                    <p className="text-body-md text-fg-strong tabular-nums">1.42s</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <Eyebrow tone="muted" className="mb-4">Decision summary</Eyebrow>
                <p className="text-body-lg text-fg-strong leading-relaxed">
                  Auto-escalate FD-2104 to P0. Create ENG-4412 assigned to Consultant 1.
                  Notify CSM Persona 1. Insert Account A portal banner. Queue KB post-mortem
                  draft. Agent confidence: <span className="font-mono">0.91</span>.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Weighted signals + Evidence */}
          <RevealGroup className="grid lg:grid-cols-2 gap-6 mb-10 md:mb-14">
            <RevealItem className="border border-border rounded-xl2 p-6 md:p-8">
              <Eyebrow tone="muted" className="mb-6">Weighted signals</Eyebrow>
              <div className="space-y-5">
                {signals.map((s) => (
                  <div key={s.label} className="border-t border-border pt-4">
                    <div className="flex justify-between items-start mb-1 gap-4">
                      <p className="text-body-md text-fg-strong">{s.label}</p>
                      <p className="text-body-md text-fg-strong font-mono tabular-nums shrink-0">{s.weight.toFixed(2)}</p>
                    </div>
                    <p className="text-body-sm text-fg-muted mb-3">{s.evidence}</p>
                    <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-fg-strong" style={{ width: `${s.weight * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </RevealItem>

            <RevealItem className="border border-border rounded-xl2 p-6 md:p-8">
              <Eyebrow tone="muted" className="mb-6">Evidence rows</Eyebrow>
              <div className="space-y-4">
                {evidence.map((e) => (
                  <div key={e.id} className="border-t border-border pt-4 grid grid-cols-12 gap-2 text-body-sm">
                    <span className="col-span-3 lg:col-span-2 text-fg-faint font-mono">{e.id}</span>
                    <span className="col-span-3 lg:col-span-2 text-fg-mid">{e.src}</span>
                    <span className="col-span-6 lg:col-span-3 text-fg-strong font-mono">{e.ref}</span>
                    <span className="col-span-12 lg:col-span-5 text-fg-mid">{e.detail}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Timeline */}
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-surface">
                <Eyebrow tone="muted">Decision timeline</Eyebrow>
              </div>
              {timeline.map((row, i) => (
                <div key={row.t} className={`px-6 py-4 grid grid-cols-12 gap-4 items-center text-body-sm ${i > 0 ? 'border-t border-border' : ''} hover:bg-surface transition-colors`}>
                  <span className="col-span-3 lg:col-span-2 text-fg-faint font-mono tabular-nums">{row.t}</span>
                  <span className="col-span-9 lg:col-span-7 text-fg-strong">{row.event}</span>
                  <span className="col-span-12 lg:col-span-3 text-fg-mid lg:text-right">{row.src}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Why it matters */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Why it matters</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Explainability is not a feature.</span>
                  <span className="block text-gradient-aurora">It is the contract.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {whyItMatters.map((c) => (
              <RevealItem key={c.h} className="bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <h3 className="text-h4 text-fg-strong mb-4">{c.h}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed">{c.p}</p>
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
                One ticket triggered four teams. <span className="text-fg-mid">See how they land.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/decision-intelligence/coordination" variant="solid" size="lg" arrow>
                  Coordination Center
                </CTALink>
                <CTALink href="/decision-intelligence" variant="outline" size="lg" arrow>
                  Back to overview
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
