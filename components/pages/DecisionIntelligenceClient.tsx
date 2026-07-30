'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';

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

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
              NIA • DECISION INTELLIGENCE
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
              <span className="block">DECISION</span>
              <span className="block">INTELLIGENCE.</span>
              <span className="block">EXPLAINED.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-6 md:mb-12">
              Turn every ticket, signal, and AI decision into explainable outcomes.
              Nia sits on top of your Incident Management Tool, CRM, and knowledge base — customers
              self-serve, agents deflect, leaders decide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4">
                  Book a demo
                </Button>
              </Link>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4">
                  Watch it in action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story — the 5:45 AM problem */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            THE 5:45 AM PROBLEM
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-4xl leading-tight">
            One ticket. Four teams. Zero handoffs.
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 text-fg-muted text-lg leading-relaxed">
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
            </div>
            <div className="space-y-6 text-fg-muted text-lg leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            FOUR PILLARS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">Same nia. Different lens.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ask */}
            <Link
              href="/decision-intelligence/ai-agent"
              className="group border border-border rounded-lg p-6 md:p-10 hover:border-border-active transition-colors block"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">01</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">AI Agent — Ask</h3>
              <p className="text-fg-muted mb-6">
                Customer-facing chat inside Incident Management Tool. Handles L1 without a human.
                4 canonical scenarios: doc-based, known issue, new bug, feature
                request.
              </p>
              <span className="text-sm text-fg-strong group-hover:underline">Read the flow →</span>
            </Link>

            {/* Signal Chain */}
            <Link
              href="/decision-intelligence/signal-chain"
              className="group border border-border rounded-lg p-6 md:p-10 hover:border-border-active transition-colors block"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">02</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">Signal → Action Chain</h3>
              <p className="text-fg-muted mb-6">
                Watchlists spot risk. Recommendations propose action. Workflows
                execute across teams. Every step lineage-linked.
              </p>
              <span className="text-sm text-fg-strong group-hover:underline">See FD-2104 walkthrough →</span>
            </Link>

            {/* Trace */}
            <Link
              href="/decision-intelligence/trace-audit"
              className="group border border-border rounded-lg p-6 md:p-10 hover:border-border-active transition-colors block"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">03</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">Trace &amp; Audit</h3>
              <p className="text-fg-muted mb-6">
                Every AI decision logged with agent confidence, weighted signals,
                and evidence rows. Legal-audit ready. Zero black box.
              </p>
              <span className="text-sm text-fg-strong group-hover:underline">Open a trace →</span>
            </Link>

            {/* Coordination */}
            <Link
              href="/decision-intelligence/coordination"
              className="group border border-border rounded-lg p-6 md:p-10 hover:border-border-active transition-colors block"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4">04</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-fg-strong">Coordination Center</h3>
              <p className="text-fg-muted mb-6">
                Cross-team initiatives. Support → CSM → Sales → Delivery. One
                shared surface where the four lenses converge on the same customer.
              </p>
              <span className="text-sm text-fg-strong group-hover:underline">See initiatives →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Persona matrix */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            PERSONA × WORKSPACE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 max-w-4xl">
            Right surface for the right person.
          </h2>

          <div className="border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-2">
                <tr>
                  <th className="p-6 text-sm uppercase tracking-widest text-fg-muted">Persona</th>
                  <th className="p-6 text-sm uppercase tracking-widest text-fg-muted">Primary workspace</th>
                  <th className="p-6 text-sm uppercase tracking-widest text-fg-muted">Nia presentation</th>
                </tr>
              </thead>
              <tbody className="text-fg-muted">
                <tr className="border-t border-border">
                  <td className="p-6 text-fg-strong">Customer</td>
                  <td className="p-6">Incident Management Tool Help Center</td>
                  <td className="p-6">Embedded AI Agent only — never leaves the portal</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-6 text-fg-strong">L1 / L2 Agent</td>
                  <td className="p-6">Incident Management Tool Agent UI</td>
                  <td className="p-6">Ticket-sidebar Co-Pilot, summaries, draft replies</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-6 text-fg-strong">Support Lead / Head</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Dashboards, watchlists, coordination, trace</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-6 text-fg-strong">CSM / Sales / Delivery</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Cross-space account view, decision surface</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-6 text-fg-strong">Knowledge Manager / AI Admin</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Governance, prompts, agent tuning, audit logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
            SIX WEEKS AT ACME
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">What changed.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'AI deflection rate', value: '41%' },
              { label: 'MTTR', value: '4.1h', sub: 'from 8.4h' },
              { label: 'Root causes surfaced', value: '3', sub: 'from reopen patterns' },
              { label: 'L1 headcount', value: '4', sub: 'from 12 investigators' },
            ].map((r) => (
              <div key={r.label} className="border border-border rounded-lg p-5 md:p-8">
                <p className="text-sm text-fg-muted uppercase tracking-wider mb-4">{r.label}</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{r.value}</p>
                {r.sub && <p className="text-sm text-fg-muted">{r.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to see nia decide on your data?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center flex-wrap">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10">
                Book a 30-min demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
