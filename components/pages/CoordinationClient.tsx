'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const initiatives = [
  {
    id: 'INIT-2104',
    title: 'Account A Product X sync stabilization',
    trigger: 'FD-2104 P0 escalation + wl_001 fires',
    teams: ['Support', 'Engineering', 'CSM', 'Product'],
    status: 'Active',
    progress: 60,
    milestones: [
      { d: '2026-07-09 05:47', e: 'Watchlist wl_001 fires' },
      { d: '2026-07-09 05:48', e: 'ENG-4412 opened, Consultant 1 assigned' },
      { d: '2026-07-09 07:12', e: 'Root cause identified — sync retry backoff bug' },
      { d: '2026-07-09 11:30', e: 'Hotfix v3.8.3 in QA' },
      { d: '2026-07-10 09:00', e: 'CSM check-in with End User scheduled' },
    ],
  },
  {
    id: 'INIT-2088',
    title: 'Account B compliance report format ask',
    trigger: 'FR-338 upvotes crossed threshold',
    teams: ['Support', 'Product', 'CSM'],
    status: 'Planning',
    progress: 25,
    milestones: [
      { d: '2026-07-05', e: 'Feature request escalated from FD-2098' },
      { d: '2026-07-07', e: 'Product board reviewed, sized 3-sprint' },
      { d: '2026-07-08', e: 'CSM syncs with Account B on interim workaround' },
    ],
  },
  {
    id: 'INIT-2062',
    title: 'Account H onboarding at risk',
    trigger: 'Health score drop + 4 open P1s + delivery slip',
    teams: ['Delivery', 'CSM', 'Sales'],
    status: 'Active',
    progress: 40,
    milestones: [
      { d: '2026-07-01', e: 'Delivery flags Phase 2 milestone slip' },
      { d: '2026-07-03', e: 'CSM opens executive escalation with Account H CTO' },
      { d: '2026-07-06', e: 'Sales agrees to defer expansion talk to Q4' },
    ],
  },
  {
    id: 'INIT-2041',
    title: 'Account I renewal — decision Sept',
    trigger: 'Renewal 90d out + moderate health',
    teams: ['CSM', 'Sales'],
    status: 'Watching',
    progress: 15,
    milestones: [
      { d: '2026-06-28', e: 'CSM logs renewal-risk assessment' },
      { d: '2026-07-02', e: 'Sales opens QBR with Buyer' },
    ],
  },
  {
    id: 'INIT-2019',
    title: 'Product X v3.8 release readiness',
    trigger: 'Release train 2026-07-15',
    teams: ['Engineering', 'Support', 'Product', 'CSM'],
    status: 'Active',
    progress: 75,
    milestones: [
      { d: '2026-06-20', e: 'Release scope frozen' },
      { d: '2026-07-01', e: 'Release notes drafted' },
      { d: '2026-07-08', e: 'CSMs brief top 10 accounts' },
    ],
  },
];

export default function CoordinationClient() {
  return (
    <main className="pt-20 relative z-10 bg-bg">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            FEATURE 04 • COORDINATION CENTER
          </p>
          <h1 className="heading-primary mb-8">
            <span className="block">FOUR</span>
            <span className="block">LENSES.</span>
            <span className="block">ONE CUSTOMER.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-6 md:mb-12">
            Support, CSM, Sales, Delivery — four teams, one shared surface. Every
            initiative anchored to the ticket, watchlist, or account it came from. No
            more Chat archaeology to piece together what happened.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            LIVE INITIATIVES
          </p>
          <h2 className="heading-primary mb-6 md:mb-10 max-w-3xl">
            Every initiative starts with a signal. Ends with an outcome.
          </h2>

          <div className="space-y-8">
            {initiatives.map((it) => (
              <div key={it.id} className="border border-border rounded-lg overflow-hidden">
                <div className="p-5 md:p-8 border-b border-border bg-surface-2">
                  <div className="flex items-start justify-between flex-wrap gap-6">
                    <div>
                      <p className="text-xs text-fg-muted uppercase tracking-widest mb-2 font-mono">{it.id}</p>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{it.title}</h3>
                      <p className="text-fg-muted text-sm">Trigger: {it.trigger}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-xs text-fg-muted uppercase tracking-wider mb-1">Status</p>
                        <p className="text-fg-strong text-sm">{it.status}</p>
                      </div>
                      <div className="w-40">
                        <p className="text-xs text-fg-muted uppercase tracking-wider mb-2">Progress</p>
                        <div className="h-2 bg-surface-2 rounded overflow-hidden">
                          <div className="h-full bg-fg-strong" style={{ width: `${it.progress}%` }} />
                        </div>
                        <p className="text-xs text-fg-muted mt-1 font-mono">{it.progress}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-12 gap-8 p-5 md:p-8">
                  <div className="lg:col-span-3">
                    <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Teams</p>
                    <div className="flex flex-wrap gap-2">
                      {it.teams.map((t) => (
                        <span key={t} className="text-xs border border-border-strong px-3 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">Milestones</p>
                    <div className="space-y-2">
                      {it.milestones.map((m) => (
                        <div key={m.d} className="flex gap-6 text-sm">
                          <span className="text-fg-muted font-mono shrink-0 w-40">{m.d}</span>
                          <span className="text-fg-strong">{m.e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            WHY COORDINATION MATTERS
          </p>
          <h2 className="heading-primary mb-6 md:mb-10 max-w-3xl">
            The ticket is a symptom. The initiative is the cure.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Before Nia</h3>
              <ul className="space-y-3 text-fg-muted">
                <li>· 4 tools, 4 dashboards, 4 conversations per account</li>
                <li>· Support closes ticket → CSM finds out a week later</li>
                <li>· Sales pitches expansion into a broken deployment</li>
                <li>· Delivery slip discovered at QBR, not before</li>
              </ul>
            </div>
            <div className="border border-border-active rounded-lg p-5 md:p-8 bg-surface-2">
              <h3 className="text-xl md:text-2xl font-bold mb-4">With Coordination Center</h3>
              <ul className="space-y-3 text-fg-strong">
                <li>✓ One shared surface for every team on every account</li>
                <li>✓ CSM sees FD-2104 the moment wl_001 fires</li>
                <li>✓ Sales sees renewal risk before pitching expansion</li>
                <li>✓ Delivery slip surfaces at trigger, not at review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="heading-primary mb-8 max-w-4xl mx-auto">
            See how the six features land in your teams.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center flex-wrap">
            <Link href="/decision-intelligence" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                Back to overview
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
