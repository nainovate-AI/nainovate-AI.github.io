'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CustomerSupportSolutionClient() {
  return (
    <main className="pt-20 relative z-10 bg-black">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SOLUTION • CUSTOMER SUPPORT
          </p>
          <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="block">SUPPORT.</span>
            <span className="block text-gray">RESOLVED.</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mb-12">
            L1 deflection without a human. L2 with full context. Support Heads with root
            cause, not reopen counts. Nia sits inside Freshdesk — customers self-serve,
            agents deflect, leaders decide.
          </p>
          <div className="flex gap-8 flex-wrap">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                Book a demo
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                See it live
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            ONE MORNING AT ACME
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-4xl leading-tight">
            FD-2104 lands at 5:45 AM. By 5:47, everything moves.
          </h2>

          <div className="space-y-8">
            {[
              {
                t: '05:45',
                who: 'Sarah · Customer',
                what: 'Files ticket FD-2104 from Acme Corp portal. mRounds sync hangs. 12MB of evidence stuck.',
              },
              {
                t: '05:45',
                who: 'Nia · AI Agent (in Freshdesk portal)',
                what: 'Classifies novelty 0.87. No KB match. No known incident. Escalation path chosen. Replies to Sarah with expected timeline.',
              },
              {
                t: '05:47',
                who: 'Nia · Watchlists',
                what: 'wl_001 fires — 3 sync tickets from Acme in 24h, compliance evidence at risk. Confidence 1.0.',
              },
              {
                t: '05:47',
                who: 'Nia · Recommendation rec_002',
                what: 'Drafts P0 escalation + CSM notify + portal banner. Auto-approved per Support Head policy.',
              },
              {
                t: '05:47',
                who: 'Nia · Workflow wf_001',
                what: '6 steps dispatched: ENG-4412 created, Priya assigned, Slack posted, Marcus (CSM) notified, banner up, KB queued. 1.42 seconds.',
              },
              {
                t: '05:48',
                who: 'Priya · L2 Engineer',
                what: 'Opens ENG-4412 with full context: ticket, telemetry, related tickets, evidence rows. Starts investigation.',
              },
              {
                t: '05:49',
                who: 'Marcus · CSM',
                what: 'Notified. Sees Acme health drop 42→35. Adds to today\'s check-ins. Opens INIT-2104 coordination.',
              },
              {
                t: '11:30',
                who: 'Priya',
                what: 'Root cause: sync retry backoff bug. Hotfix v3.8.3 in QA.',
              },
              {
                t: '2026-07-10',
                who: 'Support Head dashboard',
                what: 'Reopen pattern spotted across 3 Acme tickets → same root cause. wl_001 marked resolved. Trace closed.',
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 border-t border-white/10 pt-4 items-start">
                <span className="col-span-2 text-gray font-mono text-sm">{row.t}</span>
                <span className="col-span-3 text-white text-sm">{row.who}</span>
                <span className="col-span-7 text-gray text-sm leading-relaxed">{row.what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            RIGHT SURFACE FOR EACH ROLE
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-3xl">Nia meets each persona where they work.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                who: 'Customer (in Freshdesk portal)',
                surface: 'Embedded AI Agent only. Never leaves the portal.',
                what: 'Deflects doc-based + known-issue questions. Escalates new bugs. Routes feature requests.',
              },
              {
                who: 'L1 / L2 Agent (Freshdesk agent UI)',
                surface: 'Ticket-sidebar Co-Pilot.',
                what: 'Ticket summary. Similar-ticket pills. KB references. Draft reply. One-click escalate.',
              },
              {
                who: 'Support Lead / Head (Nia native)',
                surface: 'Dashboards, watchlists, trace, coordination.',
                what: 'Reopen patterns. Root cause. Team load. Deflection rate. MTTR. Decision policy tuning.',
              },
              {
                who: 'Knowledge Manager (Nia native)',
                surface: 'KB queue, governance.',
                what: 'Post-mortem draft queue from workflows. KB gaps auto-surfaced from novelty scores.',
              },
            ].map((p) => (
              <div key={p.who} className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-3">{p.who}</h3>
                <p className="text-xs text-gray uppercase tracking-wider mb-2">Primary surface</p>
                <p className="text-white mb-4">{p.surface}</p>
                <p className="text-xs text-gray uppercase tracking-wider mb-2">What they see</p>
                <p className="text-gray text-sm leading-relaxed">{p.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SIX WEEKS AT ACME
          </p>
          <h2 className="text-5xl font-bold mb-16">Numbers.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'L1 deflection rate', value: '41%' },
              { label: 'MTTR', value: '4.1h', sub: 'from 8.4h' },
              { label: 'Reopen rate', value: '6%', sub: 'from 18%' },
              { label: 'Root causes surfaced', value: '3', sub: 'per week' },
            ].map((r) => (
              <div key={r.label} className="border border-white/10 rounded-lg p-8">
                <p className="text-sm text-gray uppercase tracking-wider mb-4">{r.label}</p>
                <p className="text-5xl font-bold mb-2">{r.value}</p>
                {r.sub && <p className="text-sm text-gray">{r.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to deflect L1 without hiring?
          </h2>
          <Link href="/contact">
            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-10 py-4">
              Book a 30-min demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
