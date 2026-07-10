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
      'Explainable AI decision layer on top of Freshdesk, CRM, and knowledge bases. Ask, Watchlists, Trace, Coordination.',
    brand: { '@type': 'Brand', name: 'Nainovate' },
  };

  return (
    <main className="pt-20 relative z-10 bg-black">
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              NIA • DECISION INTELLIGENCE
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">DECISION</span>
              <span className="block text-gray">INTELLIGENCE.</span>
              <span className="block">EXPLAINED.</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-12">
              Turn every ticket, signal, and AI decision into explainable outcomes.
              Nia sits on top of your Freshdesk, CRM, and knowledge base — customers
              self-serve, agents deflect, leaders decide.
            </p>
            <div className="flex gap-8 flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                  Book a demo
                </Button>
              </Link>
              <Link href="/demo">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                  Watch it in action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story — the 5:45 AM problem */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            THE 5:45 AM PROBLEM
          </p>
          <h2 className="text-5xl font-bold mb-12 max-w-4xl leading-tight">
            One ticket. Four teams. Zero handoffs.
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray text-lg leading-relaxed">
              <p>
                Sarah Johnson, maintenance engineer at Acme Corp, opens mRounds on
                her Android to sync 47 rounds from her morning shift. Sync hangs.
                12&nbsp;MB of compliance evidence is stuck on her device. She files
                ticket <span className="text-white">FD-2104</span>.
              </p>
              <p>
                Somewhere across the org, four different people care: her CSM
                watching health scores, the L1 support agent on-call, the engineer
                who owns the sync module, and a Support Head who needs to know if
                this is a one-off or a pattern.
              </p>
              <p className="text-white">
                Traditional support: 4 tools, 4 dashboards, 4 conversations, 4
                handoffs. Hours lost. Blame games.
              </p>
            </div>
            <div className="space-y-6 text-gray text-lg leading-relaxed">
              <p>
                <span className="text-white">Nia turns FD-2104 into a decision loop.</span>
              </p>
              <p>
                The AI Agent handles Sarah in the Freshdesk portal. Watchlists fire.
                A Recommendation converts into a Workflow. The Coordination Center
                links back to Acme&rsquo;s account. The CSM sees the health score
                drop from 42 → 35 before Sarah&rsquo;s next shift.
              </p>
              <p>
                Every AI action is logged in <span className="text-white">Trace &amp; Audit</span>{' '}
                with confidence scores, weighted signals, and evidence rows. No
                black box. Legal-audit ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            FOUR PILLARS
          </p>
          <h2 className="text-5xl font-bold mb-20">Same nia. Different lens.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ask */}
            <Link
              href="/decision-intelligence/ai-agent"
              className="group border border-white/10 rounded-lg p-10 hover:border-white/40 transition-colors block"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-4">01</p>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-white">AI Agent — Ask</h3>
              <p className="text-gray mb-6">
                Customer-facing chat inside Freshdesk. Handles L1 without a human.
                4 canonical scenarios: doc-based, known issue, new bug, feature
                request.
              </p>
              <span className="text-sm text-white group-hover:underline">Read the flow →</span>
            </Link>

            {/* Signal Chain */}
            <Link
              href="/decision-intelligence/signal-chain"
              className="group border border-white/10 rounded-lg p-10 hover:border-white/40 transition-colors block"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-4">02</p>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-white">Signal → Action Chain</h3>
              <p className="text-gray mb-6">
                Watchlists spot risk. Recommendations propose action. Workflows
                execute across teams. Every step lineage-linked.
              </p>
              <span className="text-sm text-white group-hover:underline">See FD-2104 walkthrough →</span>
            </Link>

            {/* Trace */}
            <Link
              href="/decision-intelligence/trace-audit"
              className="group border border-white/10 rounded-lg p-10 hover:border-white/40 transition-colors block"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-4">03</p>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-white">Trace &amp; Audit</h3>
              <p className="text-gray mb-6">
                Every AI decision logged with agent confidence, weighted signals,
                and evidence rows. Legal-audit ready. Zero black box.
              </p>
              <span className="text-sm text-white group-hover:underline">Open a trace →</span>
            </Link>

            {/* Coordination */}
            <Link
              href="/decision-intelligence/coordination"
              className="group border border-white/10 rounded-lg p-10 hover:border-white/40 transition-colors block"
            >
              <p className="text-xs tracking-widest text-gray uppercase mb-4">04</p>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-white">Coordination Center</h3>
              <p className="text-gray mb-6">
                Cross-team initiatives. Support → CSM → Sales → Delivery. One
                shared surface where the four lenses converge on the same customer.
              </p>
              <span className="text-sm text-white group-hover:underline">See initiatives →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Persona matrix */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            PERSONA × WORKSPACE
          </p>
          <h2 className="text-5xl font-bold mb-16 max-w-4xl">
            Right surface for the right person.
          </h2>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-6 text-sm uppercase tracking-widest text-gray">Persona</th>
                  <th className="p-6 text-sm uppercase tracking-widest text-gray">Primary workspace</th>
                  <th className="p-6 text-sm uppercase tracking-widest text-gray">Nia presentation</th>
                </tr>
              </thead>
              <tbody className="text-gray">
                <tr className="border-t border-white/10">
                  <td className="p-6 text-white">Customer</td>
                  <td className="p-6">Freshdesk Help Center</td>
                  <td className="p-6">Embedded AI Agent only — never leaves the portal</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-6 text-white">L1 / L2 Agent</td>
                  <td className="p-6">Freshdesk Agent UI</td>
                  <td className="p-6">Ticket-sidebar Co-Pilot, summaries, draft replies</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-6 text-white">Support Lead / Head</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Dashboards, watchlists, coordination, trace</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-6 text-white">CSM / Sales / Delivery</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Cross-space account view, decision surface</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-6 text-white">Knowledge Manager / AI Admin</td>
                  <td className="p-6">Nia (native)</td>
                  <td className="p-6">Governance, prompts, agent tuning, audit logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
            SIX WEEKS AT ACME
          </p>
          <h2 className="text-5xl font-bold mb-16">What changed.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'AI deflection rate', value: '41%' },
              { label: 'MTTR', value: '4.1h', sub: 'from 8.4h' },
              { label: 'Root causes surfaced', value: '3', sub: 'from reopen patterns' },
              { label: 'L1 headcount', value: '4', sub: 'from 12 investigators' },
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
          <h2 className="text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to see nia decide on your data?
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-10 py-4">
                Book a 30-min demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
