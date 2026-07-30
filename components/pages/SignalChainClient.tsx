'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SignalChainClient() {
  return (
    <main className="pt-20 relative z-10 bg-bg">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            PILLAR 02 • SIGNAL → ACTION CHAIN
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block">WATCH.</span>
            <span className="block">RECOMMEND.</span>
            <span className="block">EXECUTE.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-6 md:mb-12">
            Every AI action starts with a signal. Watchlists spot risk. Recommendations
            propose action. Workflows execute across teams. Every step lineage-linked back
            to the ticket that started it.
          </p>
        </div>
      </section>

      {/* FD-2104 walkthrough */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            FD-2104 WALKTHROUGH
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-3xl">
            One ticket. Three surfaces. Full lineage.
          </h2>

          {/* Chain visual */}
          <div className="grid lg:grid-cols-3 gap-4 mb-12 md:mb-24">
            {[
              { step: '01', label: 'Watchlist', id: 'wl_001', title: 'Product X sync failures spiking' },
              { step: '02', label: 'Recommendation', id: 'rec_002', title: 'Escalate to sync module owner' },
              { step: '03', label: 'Workflow', id: 'wf_001', title: 'P0 engineering ticket + CSM notify' },
            ].map((n, i) => (
              <div key={n.id} className="relative">
                <div className="border border-border rounded-lg p-5 md:p-8 h-full">
                  <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">{n.step} • {n.label}</p>
                  <p className="font-mono text-sm text-fg-muted mb-2">{n.id}</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold">{n.title}</p>
                </div>
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10 text-2xl text-fg-strong">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-10 md:space-y-16">
            {/* Watchlist detail */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-8 md:pt-16">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">01 • WATCHLIST wl_001</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Product X sync failures spiking</h3>
                <p className="text-fg-muted text-sm">
                  Watchlists sit on a live stream of tickets, telemetry, and product events.
                  When a pattern crosses threshold, they fire.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Trigger</p>
                  <p className="text-fg-strong">
                    3+ sync-related tickets from Account A in the last 24h with priority ≥ P1
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Signal weight</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Ticket cluster density (Account A, sync)</span>
                      <span className="text-fg-strong font-mono">0.42</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Requester seniority (maintenance eng)</span>
                      <span className="text-fg-strong font-mono">0.18</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Compliance evidence at risk</span>
                      <span className="text-fg-strong font-mono">0.28</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Account health drop (Account A, 42→35)</span>
                      <span className="text-fg-strong font-mono">0.12</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between text-sm mt-3">
                      <span className="text-fg-strong">Total confidence</span>
                      <span className="text-fg-strong font-mono font-bold">1.00</span>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-fg-strong pl-6">
                  <p className="text-sm text-fg-muted uppercase tracking-wider mb-2">Fires at</p>
                  <p className="text-fg-strong">05:47 AM IST — 2 minutes after FD-2104 lands in Incident Management Tool</p>
                </div>
              </div>
            </div>

            {/* Recommendation detail */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-8 md:pt-16">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">02 • RECOMMENDATION rec_002</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Escalate to sync module owner</h3>
                <p className="text-fg-muted text-sm">
                  Watchlist fires → recommendation drafts the action. Human-in-the-loop
                  approves, or auto-approve if confidence &gt; 0.85 and impact is contained.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Proposed action</p>
                  <p className="text-fg-strong leading-relaxed">
                    Create P0 engineering ticket ENG-4412 assigned to the sync module owner
                    (Consultant 1). Notify Account A CSM (Persona 1). Insert incident banner into
                    Account A customer portal. Warm the KB team for a future post-mortem article.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Lineage</p>
                  <div className="font-mono text-sm text-fg-muted space-y-1">
                    <p>source_watchlist_id: <span className="text-fg-strong">wl_001</span></p>
                    <p>source_ticket_id: <span className="text-fg-strong">FD-2104</span></p>
                    <p>agent_confidence: <span className="text-fg-strong">0.91</span></p>
                    <p>approval: <span className="text-fg-strong">auto (Support Head policy: auto-approve P0 sync)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow detail */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-8 md:pt-16">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">03 • WORKFLOW wf_001</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">P0 engineering + CSM notify</h3>
                <p className="text-fg-muted text-sm">
                  Recommendation converts into a workflow. Steps execute across Incident Management Tool,
                  Issue Tracker, Chat, CRM. Each step logged to the trace with duration and outcome.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-border bg-surface-2">
                    <p className="text-xs text-fg-muted uppercase tracking-wider">Step sequence</p>
                  </div>
                  {[
                    { step: '1', action: 'Create Issue Tracker ENG-4412 (P0)', target: 'Issue Tracker · sync-mobile', duration: '340ms', status: 'ok' },
                    { step: '2', action: 'Assign Consultant 1', target: 'Issue Tracker', duration: '110ms', status: 'ok' },
                    { step: '3', action: 'Chat #acme-critical: FD-2104 escalated', target: 'Chat', duration: '290ms', status: 'ok' },
                    { step: '4', action: 'Notify CSM Persona 1 (email + Chat DM)', target: 'CRM · CRM', duration: '410ms', status: 'ok' },
                    { step: '5', action: 'Insert banner into Account A portal', target: 'Incident Management Tool portal', duration: '190ms', status: 'ok' },
                    { step: '6', action: 'Queue KB post-mortem draft', target: 'Nia KB queue', duration: '80ms', status: 'ok' },
                  ].map((r) => (
                    <div key={r.step} className="p-4 border-b border-border grid grid-cols-12 gap-4 text-sm">
                      <span className="col-span-1 text-fg-muted font-mono">{r.step}</span>
                      <span className="col-span-6 text-fg-strong">{r.action}</span>
                      <span className="col-span-3 text-fg-muted">{r.target}</span>
                      <span className="col-span-1 text-fg-muted font-mono">{r.duration}</span>
                      <span className="col-span-1 text-fg-strong">✓</span>
                    </div>
                  ))}
                </div>
                <div className="border-l-2 border-fg-strong pl-6">
                  <p className="text-sm text-fg-muted uppercase tracking-wider mb-2">Total execution</p>
                  <p className="text-fg-strong">1.42 seconds. Zero human handoff. Full trace open in the audit surface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Every step needs to be explainable. Open the trace.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center flex-wrap">
            <Link href="/decision-intelligence/trace-audit" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                Open the trace →
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
