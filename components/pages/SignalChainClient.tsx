'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

const chain = [
  { step: '01', label: 'Watchlist', id: 'wl_001', title: 'Product X sync failures spiking' },
  { step: '02', label: 'Recommendation', id: 'rec_002', title: 'Escalate to sync module owner' },
  { step: '03', label: 'Workflow', id: 'wf_001', title: 'P0 engineering ticket + CSM notify' },
];

const workflowSteps = [
  { step: '1', action: 'Create Issue Tracker ENG-4412 (P0)', target: 'Issue Tracker · sync-mobile', duration: '340ms' },
  { step: '2', action: 'Assign Consultant 1', target: 'Issue Tracker', duration: '110ms' },
  { step: '3', action: 'Chat #acme-critical: FD-2104 escalated', target: 'Chat', duration: '290ms' },
  { step: '4', action: 'Notify CSM Persona 1 (email + Chat DM)', target: 'CRM · CRM', duration: '410ms' },
  { step: '5', action: 'Insert banner into Account A portal', target: 'Incident Management Tool portal', duration: '190ms' },
  { step: '6', action: 'Queue KB post-mortem draft', target: 'Nia KB queue', duration: '80ms' },
];

const signalWeights = [
  { label: 'Ticket cluster density (Account A, sync)', value: '0.42' },
  { label: 'Requester seniority (maintenance eng)', value: '0.18' },
  { label: 'Compliance evidence at risk', value: '0.28' },
  { label: 'Account health drop (Account A, 42→35)', value: '0.12' },
];

export default function SignalChainClient() {
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
                Feature 02 · Signal → Action Chain
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">Watch.</span>
                <span className="block">Recommend.</span>
                <span className="block text-gradient-aurora">Execute.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Every AI action starts with a signal. Watchlists spot risk. Recommendations
                propose action. Workflows execute across teams. Every step lineage-linked back
                to the ticket that started it.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Chain visual */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">FD-2104 Walkthrough</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">One ticket. Three surfaces.</span>
                  <span className="block text-gradient-aurora">Full lineage.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid lg:grid-cols-3 gap-6 mb-14 md:mb-20">
            {chain.map((n, i) => (
              <RevealItem key={n.id} className="relative">
                <div className="border border-border rounded-xl2 bg-bg-elevated p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-eyebrow text-fg-faint tabular-nums">{n.step}</span>
                    <span className="text-eyebrow text-fg-mid">{n.label}</span>
                  </div>
                  <p className="font-mono text-body-sm text-fg-muted mb-4">{n.id}</p>
                  <p className="text-h3 text-fg-strong">{n.title}</p>
                </div>
                {i < 2 && (
                  <div aria-hidden="true" className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-bg border border-border-strong">
                    <svg className="w-3.5 h-3.5 text-fg-strong" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                )}
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Details */}
          <div className="space-y-14 md:space-y-20">
            {/* Watchlist */}
            <Reveal>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border-strong pt-10 md:pt-14">
                <div className="lg:col-span-4">
                  <Eyebrow tone="muted" className="mb-4">01 · Watchlist wl_001</Eyebrow>
                  <h3 className="text-h3 text-fg-strong mb-4">Product X sync failures spiking</h3>
                  <p className="text-body-md text-fg-mid leading-relaxed">
                    Watchlists sit on a live stream of tickets, telemetry, and product events.
                    When a pattern crosses threshold, they fire.
                  </p>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="border border-border rounded-xl2 p-6 md:p-8">
                    <Eyebrow tone="muted" className="mb-3">Trigger</Eyebrow>
                    <p className="text-body-lg text-fg-strong">
                      3+ sync-related tickets from Account A in the last 24h with priority ≥ P1
                    </p>
                  </div>
                  <div className="border border-border rounded-xl2 p-6 md:p-8">
                    <Eyebrow tone="muted" className="mb-4">Signal weight</Eyebrow>
                    <div className="space-y-3">
                      {signalWeights.map((w) => (
                        <div key={w.label} className="flex justify-between items-center text-body-sm">
                          <span className="text-fg-mid">{w.label}</span>
                          <span className="text-fg-strong font-mono tabular-nums">{w.value}</span>
                        </div>
                      ))}
                      <div className="border-t border-border pt-3 flex justify-between items-center text-body-md">
                        <span className="text-fg-strong">Total confidence</span>
                        <span className="text-fg-strong font-mono font-bold tabular-nums">1.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-2 border-fg-strong pl-6">
                    <Eyebrow tone="muted" className="mb-2">Fires at</Eyebrow>
                    <p className="text-body-md text-fg-strong">05:47 AM IST — 2 minutes after FD-2104 lands in Incident Management Tool</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Recommendation */}
            <Reveal>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border-strong pt-10 md:pt-14">
                <div className="lg:col-span-4">
                  <Eyebrow tone="muted" className="mb-4">02 · Recommendation rec_002</Eyebrow>
                  <h3 className="text-h3 text-fg-strong mb-4">Escalate to sync module owner</h3>
                  <p className="text-body-md text-fg-mid leading-relaxed">
                    Watchlist fires → recommendation drafts the action. Human-in-the-loop
                    approves, or auto-approve if confidence &gt; 0.85 and impact is contained.
                  </p>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="border border-border rounded-xl2 p-6 md:p-8">
                    <Eyebrow tone="muted" className="mb-3">Proposed action</Eyebrow>
                    <p className="text-body-lg text-fg-strong leading-relaxed">
                      Create P0 engineering ticket ENG-4412 assigned to the sync module owner
                      (Consultant 1). Notify Account A CSM (Persona 1). Insert incident banner into
                      Account A customer portal. Warm the KB team for a future post-mortem article.
                    </p>
                  </div>
                  <div className="border border-border rounded-xl2 p-6 md:p-8">
                    <Eyebrow tone="muted" className="mb-4">Lineage</Eyebrow>
                    <div className="font-mono text-body-sm text-fg-mid space-y-2">
                      <p>source_watchlist_id: <span className="text-fg-strong">wl_001</span></p>
                      <p>source_ticket_id: <span className="text-fg-strong">FD-2104</span></p>
                      <p>agent_confidence: <span className="text-fg-strong">0.91</span></p>
                      <p>approval: <span className="text-fg-strong">auto (Support Head policy: auto-approve P0 sync)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Workflow */}
            <Reveal>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border-strong pt-10 md:pt-14">
                <div className="lg:col-span-4">
                  <Eyebrow tone="muted" className="mb-4">03 · Workflow wf_001</Eyebrow>
                  <h3 className="text-h3 text-fg-strong mb-4">P0 engineering + CSM notify</h3>
                  <p className="text-body-md text-fg-mid leading-relaxed">
                    Recommendation converts into a workflow. Steps execute across Incident Management Tool,
                    Issue Tracker, Chat, CRM. Each step logged to the trace with duration and outcome.
                  </p>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="border border-border rounded-xl2 overflow-hidden">
                    <div className="px-6 py-4 border-b border-border bg-surface">
                      <Eyebrow tone="muted">Step sequence</Eyebrow>
                    </div>
                    {workflowSteps.map((r, i) => (
                      <div key={r.step} className={`px-6 py-4 grid grid-cols-12 gap-4 items-center text-body-sm ${i > 0 ? 'border-t border-border' : ''}`}>
                        <span className="col-span-1 text-fg-faint font-mono">{r.step}</span>
                        <span className="col-span-6 text-fg-strong">{r.action}</span>
                        <span className="col-span-3 text-fg-mid">{r.target}</span>
                        <span className="col-span-1 text-fg-mid font-mono tabular-nums">{r.duration}</span>
                        <span className="col-span-1 text-success text-right">
                          <svg className="inline w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-l-2 border-fg-strong pl-6">
                    <Eyebrow tone="muted" className="mb-2">Total execution</Eyebrow>
                    <p className="text-body-md text-fg-strong">1.42 seconds. Zero human handoff. Full trace open in the audit surface.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
                Every step needs to be explainable. <span className="text-fg-mid">Open the trace.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/decision-intelligence/trace-audit" variant="solid" size="lg" arrow>
                  Open the trace
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
