'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

const scenarios = [
  {
    id: '01',
    title: 'Doc-based question',
    ticket: 'FD-2098',
    customer: 'Account B — Buyer',
    question: 'How do I export Product X compliance evidence as PDF?',
    agent_reply:
      'You can export from the Round Detail screen → tap the share icon → select "PDF with evidence". Full walk-through with screenshots is at docs.vendor.docs/exports/pdf. Would that answer your question?',
    outcome: 'Resolved in 42 seconds. Zero handoff. KB article view logged.',
    signals: ['KB match confidence 0.94', 'Similar tickets resolved 12', 'Deflection: yes'],
  },
  {
    id: '02',
    title: 'Known issue',
    ticket: 'FD-2101',
    customer: 'Account H — End User',
    question: 'App crashes when I open the Compliance tab on Android 14',
    agent_reply:
      'We are aware of this — tracked as INC-887. Fix ships in v3.8.2 (rolling out this week). As a workaround, force-stop and reopen the app; crash rate drops to <2% after that. You will be notified when v3.8.2 lands in your tenant.',
    outcome: 'Deflected. Ticket auto-linked to INC-887. Customer notified on release.',
    signals: ['Incident match INC-887', 'Fix version v3.8.2', 'Deflection: yes'],
  },
  {
    id: '03',
    title: 'New issue → auto-create',
    ticket: 'FD-2104',
    customer: 'Account A — End User',
    question:
      'Product X sync hangs at 87% every morning. 12 MB of evidence stuck on device. Reboot did not help.',
    agent_reply:
      'This looks new — no match in known issues or docs. Creating engineering ticket ENG-4412 for the sync module owner and setting priority P0. End User, I have logged the device details, network state, and the 12 MB payload for engineering. Support will get back within 4 hours.',
    outcome: 'Escalated to L2 with full context. Watchlist wl_001 fires. Coordination initiative opens.',
    signals: ['Novelty score 0.87', 'Priority P0', 'Auto-created ENG-4412', 'Deflection: no'],
  },
  {
    id: '04',
    title: 'Feature request',
    ticket: 'FD-2109',
    customer: 'Account I — Buyer',
    question: 'Can we get bulk-approve for round evidence? Manual approval takes hours.',
    agent_reply:
      'That is a feature request, not a bug — noted. I have logged it as FR-338 under "Round Evidence UX". Product reviews FRs weekly; you can track status at status.vendor.docs/fr/338. Would you like to add supporting context (screenshots, workflow) now?',
    outcome: 'Routed to product board. Customer given a tracking link. No support cycle burned.',
    signals: ['Intent: feature request', 'Product board: FR-338', 'Deflection: yes'],
  },
];

const steps = [
  { num: '01', title: 'Intent + retrieval', body: 'Classify question intent. Retrieve KB, past tickets, incident registry, product roadmap. Confidence-scored candidates ranked.' },
  { num: '02', title: 'Respond or escalate', body: 'If confidence > 0.75 and citation exists → answer with source. Below threshold → auto-create engineering ticket, escalate with full context.' },
  { num: '03', title: 'Trace + coordinate', body: 'Every action logged in Trace & Audit. If pattern emerges, watchlist fires and Coordination Center opens a cross-team initiative.' },
];

export default function AIAgentClient() {
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
                Feature 01 · AI Agent — Ask
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">L1 support.</span>
                <span className="block text-gradient-aurora">No human.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Customer-facing chat embedded in the Incident Management Tool Help Center. Four canonical
                scenarios — doc-based, known issue, new bug, feature request — resolved,
                deflected, or escalated with full context in seconds.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Scenarios */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Four scenarios</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Every question</span>
                  <span className="block text-gradient-aurora">falls into four shapes.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="space-y-14 md:space-y-20">
            {scenarios.map((s) => (
              <RevealItem key={s.id}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border-strong pt-10 md:pt-14">
                  {/* Meta column */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-eyebrow text-fg-faint tabular-nums">{s.id}</span>
                      <span aria-hidden="true" className="h-px flex-1 bg-border" />
                      <span className="text-eyebrow text-fg-mid">{s.ticket}</span>
                    </div>
                    <h3 className="text-h3 text-fg-strong mb-3">{s.title}</h3>
                    <p className="text-body-sm text-fg-muted mb-10">{s.customer}</p>
                    <p className="text-eyebrow text-fg-strong mb-4">Signals</p>
                    <ul className="space-y-2.5">
                      {s.signals.map((sig) => (
                        <li key={sig} className="flex items-start gap-3 text-body-sm text-fg-mid">
                          <span aria-hidden="true" className="text-fg-faint mt-2">·</span>
                          <span>{sig}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dialog + outcome */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center text-body-sm font-medium text-fg-mid shrink-0">
                        C
                      </div>
                      <div className="border border-border rounded-xl2 p-6 flex-1">
                        <p className="text-eyebrow text-fg-mid mb-3">Customer</p>
                        <p className="text-body-md text-fg-strong">{s.question}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-fg-strong text-fg-invert flex items-center justify-center text-body-sm font-medium shrink-0">
                        AI
                      </div>
                      <div className="border border-border-active rounded-xl2 p-6 flex-1 bg-surface-2">
                        <p className="text-eyebrow text-fg-mid mb-3">Nia AI Agent</p>
                        <p className="text-body-md text-fg-strong leading-relaxed">{s.agent_reply}</p>
                      </div>
                    </div>

                    <div className="border-l-2 border-fg-strong pl-6 mt-4">
                      <p className="text-eyebrow text-fg-strong mb-3">Outcome</p>
                      <p className="text-body-md text-fg-strong leading-relaxed">{s.outcome}</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Under the hood */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Under the hood</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Every reply</span>
                  <span className="block">lineage-linked.</span>
                  <span className="block text-gradient-aurora">Every decision explainable.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {steps.map((step) => (
              <RevealItem key={step.num} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{step.num}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{step.title}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed">{step.body}</p>
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
                Follow FD-2104 into <span className="text-fg-mid">the Signal Chain.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/decision-intelligence/signal-chain" variant="solid" size="lg" arrow>
                  See what happens next
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
