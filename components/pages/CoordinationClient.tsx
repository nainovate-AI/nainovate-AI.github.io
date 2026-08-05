'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

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

const before = [
  '4 tools, 4 dashboards, 4 conversations per account',
  'Support closes ticket → CSM finds out a week later',
  'Sales pitches expansion into a broken deployment',
  'Delivery slip discovered at QBR, not before',
];

const after = [
  'One shared surface for every team on every account',
  'CSM sees FD-2104 the moment wl_001 fires',
  'Sales sees renewal risk before pitching expansion',
  'Delivery slip surfaces at trigger, not at review',
];

export default function CoordinationClient() {
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
                Feature 04 · Coordination Center
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Four lenses.</span>
                <span className="block text-gradient-aurora">One customer.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Support, CSM, Sales, Delivery — four teams, one shared surface. Every
                initiative anchored to the ticket, watchlist, or account it came from. No
                more Chat archaeology to piece together what happened.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Live initiatives */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Live initiatives</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Every initiative starts with a signal.</span>
                  <span className="block text-gradient-aurora">Ends with an outcome.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="space-y-6">
            {initiatives.map((it) => (
              <RevealItem key={it.id}>
                <div className="border border-border rounded-xl2 overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-border bg-surface">
                    <div className="flex items-start justify-between flex-wrap gap-6">
                      <div>
                        <p className="text-eyebrow text-fg-faint mb-2 font-mono">{it.id}</p>
                        <h3 className="text-h3 text-fg-strong mb-2">{it.title}</h3>
                        <p className="text-body-sm text-fg-mid">Trigger: {it.trigger}</p>
                      </div>
                      <div className="flex items-center gap-8">
                        <div>
                          <Eyebrow tone="muted" className="mb-2">Status</Eyebrow>
                          <p className="text-body-md text-fg-strong">{it.status}</p>
                        </div>
                        <div className="w-40">
                          <Eyebrow tone="muted" className="mb-2">Progress</Eyebrow>
                          <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                            <div className="h-full bg-fg-strong" style={{ width: `${it.progress}%` }} />
                          </div>
                          <p className="text-body-sm text-fg-muted mt-2 font-mono tabular-nums">{it.progress}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-12 gap-8 p-6 md:p-8">
                    <div className="lg:col-span-3">
                      <Eyebrow tone="muted" className="mb-4">Teams</Eyebrow>
                      <div className="flex flex-wrap gap-2">
                        {it.teams.map((t) => (
                          <span key={t} className="text-body-sm border border-border rounded-full px-3 py-1.5 text-fg-mid">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-9">
                      <Eyebrow tone="muted" className="mb-4">Milestones</Eyebrow>
                      <div className="space-y-3">
                        {it.milestones.map((m) => (
                          <div key={m.d} className="flex gap-6 text-body-sm">
                            <span className="text-fg-faint font-mono tabular-nums shrink-0 w-44">{m.d}</span>
                            <span className="text-fg-strong">{m.e}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Before / After */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Why coordination matters</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">The ticket is a symptom.</span>
                  <span className="block text-gradient-aurora">The initiative is the cure.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            <Reveal>
              <div className="bg-bg p-8 md:p-10 h-full">
                <Eyebrow tone="muted" className="mb-5">Before Nia</Eyebrow>
                <h3 className="text-h3 text-fg-strong mb-6">Fragmented signals.</h3>
                <ul className="space-y-3">
                  {before.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-body-md text-fg-mid">
                      <span aria-hidden="true" className="text-fg-faint mt-2">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="bg-bg-elevated p-8 md:p-10 h-full">
                <Eyebrow tone="accent" className="mb-5">With Coordination Center</Eyebrow>
                <h3 className="text-h3 text-fg-strong mb-6">One surface.</h3>
                <ul className="space-y-3">
                  {after.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-body-md text-fg-strong">
                      <span aria-hidden="true" className="text-fg-strong mt-1 shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
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
              <h2 className="text-h2 text-gradient-aurora mb-10">
                See how the six features <span className="text-fg-mid">land in your teams.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Book a demo
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
