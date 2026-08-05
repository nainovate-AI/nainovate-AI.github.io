'use client';

import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';
import { GatedDemoLink } from '@/components/ui/DemoGate';

type FeatureCard = {
  index: string;
  capability: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const features: FeatureCard[] = [
  {
    index: '01',
    capability: 'Understand',
    title: 'AI Agent — Ask',
    description:
      'Customer-facing chat inside Incident Management Tool. Handles L1 without a human. 4 canonical scenarios: doc-based, known issue, new bug, feature request.',
    href: '/decision-intelligence/ai-agent',
    cta: 'Read the flow',
  },
  {
    index: '02',
    capability: 'Observe + Recommend',
    title: 'Signal → Action Chain',
    description:
      'Watchlists spot risk. Recommendations propose action. Workflows execute across teams. Every step lineage-linked.',
    href: '/decision-intelligence/signal-chain',
    cta: 'See FD-2104 walkthrough',
  },
  {
    index: '03',
    capability: 'Monitor',
    title: 'Trace & Audit',
    description:
      'Every AI decision logged with agent confidence, weighted signals, and evidence rows. Legal-audit ready. Zero black box.',
    href: '/decision-intelligence/trace-audit',
    cta: 'Open a trace',
  },
  {
    index: '04',
    capability: 'Coordinate',
    title: 'Coordination Center',
    description:
      'Cross-team initiatives. Support → CSM → Sales → Delivery. One shared surface where the four lenses converge on the same customer.',
    href: '/decision-intelligence/coordination',
    cta: 'See initiatives',
  },
  {
    index: '05',
    capability: 'Execute',
    title: 'Workflow',
    description:
      'Turn recommendations into orchestrated action. Multi-agent execution across CRM, ERP, ITSM, and beyond — with policy guardrails on every step.',
  },
  {
    index: '06',
    capability: 'Learn',
    title: 'Learning Loop',
    description:
      'Every decision feeds the next. Governed feedback loops improve agent accuracy, prompt quality, and recommendation ranking over time.',
  },
];

const crosswalk: [string, string][] = [
  ['AI Agent — Ask', 'Understand'],
  ['Signal → Action Chain', 'Observe + Recommend'],
  ['Trace & Audit', 'Monitor'],
  ['Coordination Center', 'Coordinate'],
  ['Workflow', 'Execute'],
  ['Learning Loop', 'Learn'],
];

const personas: [string, string, string][] = [
  ['Customer', 'Incident Management Tool Help Center', 'Embedded AI Agent only — never leaves the portal'],
  ['L1 / L2 Agent', 'Incident Management Tool Agent UI', 'Ticket-sidebar Co-Pilot, summaries, draft replies'],
  ['Support Lead / Head', 'Nia (native)', 'Dashboards, watchlists, coordination, trace'],
  ['CSM / Sales / Delivery', 'Nia (native)', 'Cross-space account view, decision surface'],
  ['Knowledge Manager / AI Admin', 'Nia (native)', 'Governance, prompts, agent tuning, audit logs'],
];

const results = [
  { label: 'AI deflection rate', value: '41%' },
  { label: 'MTTR', value: '4.1h', sub: 'from 8.4h' },
  { label: 'Root causes surfaced', value: '3', sub: 'from reopen patterns' },
  { label: 'L1 headcount', value: '4', sub: 'from 12 investigators' },
];

export default function DecisionIntelligenceClient() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nia Decision Intelligence',
    description:
      'Explainable AI decision layer on top of Incident Management Tool, CRM, and knowledge bases. Ask, Watchlists, Trace, Coordination.',
    brand: { '@type': 'Brand', name: 'Nainovate' },
  };

  return (
    <main className="pt-20 relative z-10 bg-bg">
      <JsonLd data={schema} />

      {/* Hero — display-scale editorial */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">
                Nia · Decision Intelligence
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Decision intelligence.</span>
                <span className="block text-gradient-aurora">Explained.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                Turn every ticket, signal, and AI decision into explainable outcomes.
                Nia sits on top of your Incident Management Tool, CRM, and knowledge base — customers
                self-serve, agents deflect, leaders decide.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Book a demo
                </CTALink>
                <GatedDemoLink href="/demo" variant="outline" size="lg" arrow>
                  Watch it in action
                </GatedDemoLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Story — the 5:45 AM problem */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">
                  The 5:45 AM Problem
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">One ticket.</span>
                  <span className="block text-fg-strong">Four teams.</span>
                  <span className="block text-gradient-aurora">Zero handoffs.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid lg:grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            <RevealItem className="bg-bg p-8 md:p-12 space-y-6 text-body-lg text-fg-mid leading-relaxed">
              <Eyebrow tone="muted" className="mb-2">Before</Eyebrow>
              <p>
                End User, maintenance engineer at Account A, opens Product X on
                her Android to sync 47 rounds from her morning shift. Sync hangs.
                12&nbsp;MB of compliance evidence is stuck on her device. She files
                ticket <span className="text-fg-strong">FD-2104</span>.
              </p>
              <p>
                Somewhere across the org, four different people care: her CSM
                watching health scores, the L1 support agent on-call, the engineer
                who owns the sync module, and a Support Head who needs to know if
                this is a one-off or a pattern.
              </p>
              <p className="text-fg-strong">
                Traditional support: 4 tools, 4 dashboards, 4 conversations, 4
                handoffs. Hours lost. Blame games.
              </p>
            </RevealItem>
            <RevealItem className="bg-bg p-8 md:p-12 space-y-6 text-body-lg text-fg-mid leading-relaxed">
              <Eyebrow tone="muted" className="mb-2">With Nia</Eyebrow>
              <p>
                <span className="text-fg-strong">Nia turns FD-2104 into a decision loop.</span>
              </p>
              <p>
                The AI Agent handles End User in the Incident Management Tool portal. Watchlists fire.
                A Recommendation converts into a Workflow. The Coordination Center
                links back to Account A&rsquo;s account. The CSM sees the health score
                drop from 42 → 35 before End User&rsquo;s next shift.
              </p>
              <p>
                Every AI action is logged in <span className="text-fg-strong">Trace &amp; Audit</span>{' '}
                with confidence scores, weighted signals, and evidence rows. No
                black box. Legal-audit ready.
              </p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </Section>

      {/* Features */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">
                  Features
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Six features.</span>
                  <span className="block text-gradient-aurora">Seven capabilities.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {features.map((f) => {
              const isLive = Boolean(f.href);
              const Body = (
                <div className="group relative flex flex-col h-full bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-eyebrow text-fg-faint tabular-nums">{f.index}</span>
                    <span className="text-eyebrow text-fg-mid border border-border px-3 py-1.5 rounded-full">
                      {f.capability}
                    </span>
                  </div>
                  <h3 className="text-h3 text-fg-strong mb-4">{f.title}</h3>
                  <p className="text-body-md text-fg-mid leading-relaxed mb-8 flex-1">{f.description}</p>
                  {isLive ? (
                    <span className="inline-flex items-center gap-2 text-body-sm text-fg-strong">
                      <span>{f.cta}</span>
                      <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  ) : (
                    <span className="text-eyebrow text-fg-subtle">Coming soon</span>
                  )}
                </div>
              );
              return (
                <RevealItem key={f.index}>
                  {isLive ? <Link href={f.href!} className="block h-full">{Body}</Link> : Body}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      {/* Feature × Capability Crosswalk */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">
                  Feature × Capability
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Features are what we ship.</span>
                  <span className="block text-gradient-aurora">Capabilities are what they deliver.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-x-auto">
              <div className="min-w-[520px]">
                <div className="grid grid-cols-2 border-b border-border bg-surface">
                  <div className="p-5 md:p-6 text-eyebrow text-fg-mid">Feature</div>
                  <div className="p-5 md:p-6 text-eyebrow text-fg-mid border-l border-border">Capability it delivers</div>
                </div>
                {crosswalk.map(([feat, cap], i) => (
                  <div
                    key={feat}
                    className={`grid grid-cols-2 ${i > 0 ? 'border-t border-border' : ''} hover:bg-surface transition-colors`}
                  >
                    <div className="p-5 md:p-6 text-body-md text-fg-strong">{feat}</div>
                    <div className="p-5 md:p-6 text-body-md text-fg-mid border-l border-border">{cap}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Persona × Workspace */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">
                  Persona × Workspace
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2 text-gradient-aurora">
                  Right surface for <span className="text-fg-mid">the right person.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-x-auto">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-12 border-b border-border bg-surface">
                  <div className="col-span-4 p-5 md:p-6 text-eyebrow text-fg-mid">Persona</div>
                  <div className="col-span-3 p-5 md:p-6 text-eyebrow text-fg-mid border-l border-border">Primary workspace</div>
                  <div className="col-span-5 p-5 md:p-6 text-eyebrow text-fg-mid border-l border-border">Nia presentation</div>
                </div>
                {personas.map(([persona, workspace, presentation], i) => (
                  <div
                    key={persona}
                    className={`grid grid-cols-12 ${i > 0 ? 'border-t border-border' : ''} hover:bg-surface transition-colors`}
                  >
                    <div className="col-span-4 p-5 md:p-6 text-body-md text-fg-strong">{persona}</div>
                    <div className="col-span-3 p-5 md:p-6 text-body-md text-fg-mid border-l border-border">{workspace}</div>
                    <div className="col-span-5 p-5 md:p-6 text-body-md text-fg-mid border-l border-border">{presentation}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Results — Six weeks at Acme */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">
                  Six weeks at Acme
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2 text-gradient-aurora">What changed.</h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 border-y border-border-strong">
            {results.map((r, i) => (
              <RevealItem
                key={r.label}
                className={`py-10 md:py-14 px-2 md:px-6 ${i > 0 ? 'lg:border-l lg:border-border' : ''} ${i % 2 === 1 ? 'border-l border-border lg:border-l' : ''} ${i >= 2 ? 'border-t border-border lg:border-t-0' : ''}`}
              >
                <div className="text-h1 text-fg-strong tabular-nums leading-none mb-6">
                  {r.value}
                </div>
                <div className="text-eyebrow text-fg-strong mb-2">{r.label}</div>
                {r.sub && <div className="text-body-sm text-fg-muted">{r.sub}</div>}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <h2 className="text-h2 text-gradient-aurora mb-10">
                Ready to see nia decide <span className="text-fg-mid">on your data?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Book a 30-min demo
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
