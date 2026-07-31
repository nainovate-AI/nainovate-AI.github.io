'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

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

export default function AIAgentClient() {
  return (
    <main className="pt-20 relative z-10 bg-bg">
      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            FEATURE 01 • AI AGENT — ASK
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
            L1 SUPPORT NO HUMAN.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-6 md:mb-12">
            Customer-facing chat embedded in the Incident Management Tool Help Center. Four canonical
            scenarios — doc-based, known issue, new bug, feature request — resolved,
            deflected, or escalated with full context in seconds.
          </p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            FOUR SCENARIOS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-3xl">
            Every customer question falls into one of four shapes.
          </h2>

          <div className="space-y-10 md:space-y-16">
            {scenarios.map((s) => (
              <div key={s.id} className="grid lg:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-8 md:pt-16">
                <div className="lg:col-span-4">
                  <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">
                    {s.id} • {s.ticket}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-sm text-fg-muted mb-2">{s.customer}</p>
                  <p className="text-sm text-fg-mid mt-8">Signals</p>
                  <ul className="mt-3 space-y-2">
                    {s.signals.map((sig) => (
                      <li key={sig} className="text-sm text-fg-muted">
                        · {sig}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  {/* Customer bubble */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-xs font-medium shrink-0">
                      C
                    </div>
                    <div className="border border-border rounded-lg p-4 md:p-6 flex-1">
                      <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Customer</p>
                      <p className="text-fg-strong">{s.question}</p>
                    </div>
                  </div>

                  {/* Agent bubble */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-fg-strong text-black flex items-center justify-center text-xs font-medium shrink-0">
                      AI
                    </div>
                    <div className="border border-border-active rounded-lg p-4 md:p-6 flex-1 bg-surface-2">
                      <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Nia AI Agent</p>
                      <p className="text-fg-strong leading-relaxed">{s.agent_reply}</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-fg-strong pl-6 mt-6">
                    <p className="text-sm text-fg-muted uppercase tracking-wider mb-2">Outcome</p>
                    <p className="text-fg-strong">{s.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            UNDER THE HOOD
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-3xl">
            Every reply lineage-linked. Every decision explainable.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-5 md:p-8">
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">STEP 1</p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Intent + retrieval</h3>
              <p className="text-fg-muted text-sm">
                Classify question intent. Retrieve KB, past tickets, incident registry,
                product roadmap. Confidence-scored candidates ranked.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5 md:p-8">
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">STEP 2</p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Respond or escalate</h3>
              <p className="text-fg-muted text-sm">
                If confidence &gt; 0.75 and citation exists → answer with source. Below
                threshold → auto-create engineering ticket, escalate with full context.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5 md:p-8">
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">STEP 3</p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Trace + coordinate</h3>
              <p className="text-fg-muted text-sm">
                Every action logged in Trace &amp; Audit. If pattern emerges, watchlist
                fires and Coordination Center opens a cross-team initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Follow FD-2104 into the Signal Chain.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center flex-wrap">
            <Link href="/decision-intelligence/signal-chain" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                See what happens next →
              </Button>
            </Link>
            <Link href="/decision-intelligence" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                Back to overview
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
