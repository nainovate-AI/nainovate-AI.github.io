'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function TraceAuditClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            PILLAR 03 • TRACE &amp; AUDIT
          </p>
          <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">ZERO</span>
            <span className="block text-gray">BLACK</span>
            <span className="block">BOX.</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mb-12">
            Every AI decision — every reply, every escalation, every watchlist trigger —
            logged with agent confidence, weighted signals, and evidence rows. Legal-audit
            ready. Regulator-ready. Compliance-team-happy.
          </p>
        </div>
      </section>

      {/* Trace record */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            TRACE trace_acme_p0_2104
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-3xl">
            Open a trace. See the whole decision.
          </h2>

          {/* Trace header card */}
          <div className="border border-white/10 rounded-lg overflow-hidden mb-12">
            <div className="p-8 border-b border-white/10 bg-white/5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Trace ID</p>
                  <p className="text-white font-mono">trace_acme_p0_2104</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Source ticket</p>
                  <p className="text-white font-mono">FD-2104</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Started</p>
                  <p className="text-white">05:45 AM · 2026-07-09</p>
                </div>
                <div>
                  <p className="text-xs text-gray uppercase tracking-wider mb-2">Duration</p>
                  <p className="text-white">1.42s</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs text-gray uppercase tracking-wider mb-4">Decision summary</p>
              <p className="text-white text-lg leading-relaxed">
                Auto-escalate FD-2104 to P0. Create ENG-4412 assigned to Priya Ramanan.
                Notify CSM Marcus Chen. Insert Acme portal banner. Queue KB post-mortem
                draft. Agent confidence: <span className="font-mono">0.91</span>.
              </p>
            </div>
          </div>

          {/* Weighted signals */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-white/10 rounded-lg p-8">
              <p className="text-xs text-gray uppercase tracking-wider mb-6">Weighted signals</p>
              <div className="space-y-4">
                {[
                  { label: 'Ticket cluster density (Acme, sync)', weight: 0.42, evidence: '3 tickets in 24h' },
                  { label: 'Compliance evidence at risk', weight: 0.28, evidence: '12MB stuck on device' },
                  { label: 'Requester seniority (maintenance eng)', weight: 0.18, evidence: 'active user, 47 rounds/day' },
                  { label: 'Account health drop', weight: 0.12, evidence: 'score 42 → 35 in 6h' },
                ].map((s) => (
                  <div key={s.label} className="border-t border-white/10 pt-4">
                    <div className="flex justify-between mb-1">
                      <p className="text-white text-sm">{s.label}</p>
                      <p className="text-white font-mono text-sm">{s.weight.toFixed(2)}</p>
                    </div>
                    <p className="text-xs text-gray">{s.evidence}</p>
                    <div className="mt-2 h-1 bg-white/10 rounded overflow-hidden">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${s.weight * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-8">
              <p className="text-xs text-gray uppercase tracking-wider mb-6">Evidence rows</p>
              <div className="space-y-3 text-sm">
                {[
                  { id: 'evd_01', src: 'Freshdesk', ref: 'FD-2104', detail: 'ticket body, requester, priority' },
                  { id: 'evd_02', src: 'Freshdesk', ref: 'FD-2101, FD-2098', detail: 'related tickets last 24h' },
                  { id: 'evd_03', src: 'Telemetry', ref: 'sync-svc.metrics', detail: 'error rate 8.4% (threshold 2%)' },
                  { id: 'evd_04', src: 'Salesforce', ref: 'Acme Corp', detail: 'health score 35, ARR $1.2M' },
                  { id: 'evd_05', src: 'Jira', ref: 'sync-mobile', detail: 'owner Priya Ramanan, on-call yes' },
                  { id: 'evd_06', src: 'KB', ref: 'no article match', detail: 'novelty score 0.87' },
                ].map((e) => (
                  <div key={e.id} className="border-t border-white/10 pt-3 grid grid-cols-12 gap-2">
                    <span className="col-span-2 text-gray font-mono">{e.id}</span>
                    <span className="col-span-2 text-gray">{e.src}</span>
                    <span className="col-span-3 text-white font-mono">{e.ref}</span>
                    <span className="col-span-5 text-gray">{e.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-white/10 bg-white/5">
              <p className="text-xs text-gray uppercase tracking-wider">Decision timeline</p>
            </div>
            {[
              { t: '00:00.000', event: 'FD-2104 lands', src: 'Freshdesk' },
              { t: '00:00.180', event: 'AI Agent classifies novelty 0.87 · escalation path', src: 'Nia · Ask' },
              { t: '00:00.410', event: 'Watchlist wl_001 fires (cluster + compliance signal)', src: 'Nia · Watchlists' },
              { t: '00:00.690', event: 'Recommendation rec_002 drafted, confidence 0.91', src: 'Nia · Recs' },
              { t: '00:00.720', event: 'Auto-approve (Support Head policy)', src: 'Governance' },
              { t: '00:01.060', event: 'Workflow wf_001 dispatched (6 steps)', src: 'Nia · Workflows' },
              { t: '00:01.420', event: 'All steps ✓ — trace closed', src: 'Coordination' },
            ].map((row) => (
              <div key={row.t} className="p-4 border-b border-white/10 grid grid-cols-12 gap-4 text-sm">
                <span className="col-span-2 text-gray font-mono">{row.t}</span>
                <span className="col-span-7 text-white">{row.event}</span>
                <span className="col-span-3 text-gray">{row.src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            WHY IT MATTERS
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-3xl">
            Explainability is not a feature. It is the contract.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { h: 'Legal &amp; compliance', p: 'Every AI action defensible. GDPR, SOC2, HIPAA-ready audit trails.' },
              { h: 'Governance boards', p: 'Prompt versions, model versions, decision policies — all versioned and diffable.' },
              { h: 'Customer trust', p: 'When customers ask why the AI did that — you have the receipts, with citations.' },
            ].map((c) => (
              <div key={c.h} className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: c.h }} />
                <p className="text-gray text-sm leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            One ticket triggered four teams. See how they land.
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <Link href="/decision-intelligence/coordination">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-10 py-4">
                Coordination Center →
              </Button>
            </Link>
            <Link href="/decision-intelligence">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-10 py-4">
                Back to overview
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
