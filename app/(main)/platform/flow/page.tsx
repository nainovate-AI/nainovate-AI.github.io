import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FLOW - AI Workflow Automation Engine | Nainovate GenX',
  description: 'Design complex AI workflows connecting multiple agents. Sequential, parallel, conditional patterns. Part of the GenX integrated platform.',
  keywords: 'FLOW automation, GenX FLOW, AI workflow orchestration, workflow builder, process automation, enterprise orchestration',
  openGraph: {
    title: 'FLOW - The Automation Engine | Nainovate GenX',
    description: 'Orchestrate complex workflows with multiple AI agents.',
    images: ['/og-flow.png'],
  },
};

export default function FlowPage() {
  const flowSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GenX FLOW",
    "alternateName": "FLOW Automation Engine",
    "applicationCategory": "Workflow Automation Platform",
    "description": "AI workflow automation engine for orchestrating complex multi-agent processes",
    "url": "https://www.nainovate.ai/platform/flow",
    "featureList": [
      "Sequential Workflows",
      "Parallel Processing",
      "Conditional Logic",
      "Multi-agent Orchestration",
      "Real-time Monitoring",
      "Enterprise Integrations",
      "Pre-built Templates"
    ],
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="pt-20 relative z-10">
      <JsonLd data={flowSchema} />
      
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
              GENX FLOW • ORCHESTRATE WITH FLOW
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">AI</span>
              <span className="block">WORKFLOWS</span>
            </h1>
            <p className="text-xl text-fg-muted max-w-3xl mb-12">
              Design complex AI workflows that connect multiple agents. Integrate your
              systems, and automate entire business processes.
            </p>
            <div className="flex gap-8">
              <Link href="/contact">
                <Button className="px-8 py-4">
                  Create Workflow
                </Button>
              </Link>
              <a href="#templates">
                <Button className="px-8 py-4">
                  Browse Templates
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">WORKFLOW PATTERNS</h2>

          <div className="space-y-16">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">SEQUENTIAL</h3>
                  <p className="text-fg-muted mb-6">
                    Chain multiple AI agents in sequence. Output from one becomes
                    input for the next. Perfect for multi-step processes.
                  </p>
                  <ul className="text-sm text-fg-muted space-y-2">
                    <li>→ Document processing pipelines</li>
                    <li>→ Multi-stage analysis</li>
                    <li>→ Approval workflows</li>
                  </ul>
                </div>
                <div className="h-[200px] bg-gradient-to-br from-surface-2 to-surface-hover rounded-lg flex items-center justify-center p-8">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500 font-bold sequential-fade-1">1</div>
                    <div className="flex-1 h-0.5 bg-cyan-500/20"></div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500 font-bold sequential-fade-2">2</div>
                    <div className="flex-1 h-0.5 bg-cyan-500/20"></div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500 font-bold sequential-fade-3">3</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="h-[200px] bg-gradient-to-br from-surface-2 to-surface-hover rounded-lg flex items-center justify-center p-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500 font-bold">IN</div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg parallel-pulse-1"></div>
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg parallel-pulse-2"></div>
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg parallel-pulse-3"></div>
                    </div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500 font-bold">OUT</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold mb-4">PARALLEL</h3>
                  <p className="text-fg-muted mb-6">
                    Run multiple agents simultaneously. Aggregate results for
                    comprehensive analysis and faster processing.
                  </p>
                  <ul className="text-sm text-fg-muted space-y-2">
                    <li>→ Multi-source data gathering</li>
                    <li>→ Comparative analysis</li>
                    <li>→ Load distribution</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">CONDITIONAL</h3>
                  <p className="text-fg-muted mb-6">
                    Dynamic workflows that adapt based on conditions. Different
                    paths for different scenarios.
                  </p>
                  <ul className="text-sm text-fg-muted space-y-2">
                    <li>→ Decision trees</li>
                    <li>→ Error handling</li>
                    <li>→ Personalized flows</li>
                  </ul>
                </div>
                <div className="h-[200px] bg-gradient-to-br from-surface-2 to-surface-hover rounded-lg flex items-center justify-center p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-500 font-bold">?</div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-0.5 bg-cyan-500/20"></div>
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg conditional-path-1"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-0.5 bg-cyan-500/20"></div>
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg conditional-path-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20 text-center">POWERFUL FEATURES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">⟲</span>
              </div>
              <h3 className="text-xl font-bold mb-2">LOOPS & ITERATION</h3>
              <p className="text-fg-muted">Process lists and datasets with intelligent loops</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">◷</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SCHEDULING</h3>
              <p className="text-fg-muted">Run workflows on schedule or trigger by events</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">🗲</span>
              </div>
              <h3 className="text-xl font-bold mb-2">INTEGRATIONS</h3>
              <p className="text-fg-muted">Connect to any API or database</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">◉</span>
              </div>
              <h3 className="text-xl font-bold mb-2">MONITORING</h3>
              <p className="text-fg-muted">Real-time insights and debugging</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">◈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SECURITY</h3>
              <p className="text-fg-muted">Enterprise-grade access control</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                <span className="text-3xl text-fg-muted">▲</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SCALABILITY</h3>
              <p className="text-fg-muted">Handle millions of executions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">START WITH TEMPLATES</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">BOQ Generation</h3>
              <p className="text-sm text-fg-muted mb-4">Automatically generate Bills of Quantities from architectural drawings and specifications</p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">RFP Generation</h3>
              <p className="text-sm text-fg-muted mb-4">Create comprehensive Request for Proposals with all technical specifications</p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">Purchase Order</h3>
              <p className="text-sm text-fg-muted mb-4">Generate purchase orders with item validation from descriptions and pricing</p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">Vendor Evaluation</h3>
              <p className="text-sm text-fg-muted mb-4">Compare and score vendors based on multiple criteria and past performance</p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">Contract Analysis</h3>
              <p className="text-sm text-fg-muted mb-4">Extract key terms, identify risks, and summarize complex legal documents</p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
              <h3 className="text-xl font-bold mb-2">Cost Estimation</h3>
              <p className="text-sm text-fg-muted mb-4">Generate detailed cost breakdowns for projects with market rates</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="px-8 py-4">
                Request Custom Template
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-6xl font-bold mb-8">
            ORCHESTRATE YOUR AI
          </h2>
          <p className="text-xl text-fg-muted mb-12 max-w-2xl mx-auto">
            Build workflows that transform how your business operates.
          </p>
          <Link href="/contact">
            <Button className="px-12 py-6 text-lg">
              Start Building Workflows →
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}