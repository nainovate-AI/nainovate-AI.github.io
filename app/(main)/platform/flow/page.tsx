import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

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

const flowSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GenX FLOW',
  alternateName: 'FLOW Automation Engine',
  applicationCategory: 'Workflow Automation Platform',
  description: 'AI workflow automation engine for orchestrating complex multi-agent processes',
  url: 'https://www.nainovate.ai/platform/flow',
  featureList: [
    'Sequential Workflows', 'Parallel Processing', 'Conditional Logic',
    'Multi-agent Orchestration', 'Real-time Monitoring', 'Enterprise Integrations', 'Pre-built Templates',
  ],
  offers: { '@type': 'Offer', price: 'Contact for pricing', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
};

const patterns = [
  {
    name: 'Sequential',
    body: 'Chain multiple AI agents in sequence. Output from one becomes input for the next. Perfect for multi-step processes.',
    bullets: ['Document processing pipelines', 'Multi-stage analysis', 'Approval workflows'],
    Visual: () => (
      <div className="flex items-center gap-4 w-full">
        <div className="w-12 h-12 rounded-lg border border-fg-strong flex items-center justify-center text-fg-strong font-semibold sequential-fade-1">1</div>
        <div className="flex-1 h-px bg-border-strong" />
        <div className="w-12 h-12 rounded-lg border border-fg-strong flex items-center justify-center text-fg-strong font-semibold sequential-fade-2">2</div>
        <div className="flex-1 h-px bg-border-strong" />
        <div className="w-12 h-12 rounded-lg border border-fg-strong flex items-center justify-center text-fg-strong font-semibold sequential-fade-3">3</div>
      </div>
    ),
  },
  {
    name: 'Parallel',
    body: 'Run multiple agents simultaneously. Aggregate results for comprehensive analysis and faster processing.',
    bullets: ['Multi-source data gathering', 'Comparative analysis', 'Load distribution'],
    Visual: () => (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-lg border border-fg-strong flex items-center justify-center text-fg-strong text-body-sm">IN</div>
        <div className="w-px h-3 bg-border-strong" />
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg border border-fg-strong parallel-pulse-1" />
          <div className="w-10 h-10 rounded-lg border border-fg-strong parallel-pulse-2" />
          <div className="w-10 h-10 rounded-lg border border-fg-strong parallel-pulse-3" />
        </div>
        <div className="w-px h-3 bg-border-strong" />
        <div className="w-12 h-12 rounded-lg border border-fg-strong flex items-center justify-center text-fg-strong text-body-sm">OUT</div>
      </div>
    ),
  },
  {
    name: 'Conditional',
    body: 'Dynamic workflows that adapt based on conditions. Different paths for different scenarios.',
    bullets: ['Decision trees', 'Error handling', 'Personalized flows'],
    Visual: () => (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-fg-strong flex items-center justify-center text-fg-strong font-semibold">?</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-border-strong" />
            <div className="w-10 h-10 rounded-lg border border-fg-strong conditional-path-1" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-border-strong" />
            <div className="w-10 h-10 rounded-lg border border-fg-strong conditional-path-2" />
          </div>
        </div>
      </div>
    ),
  },
];

const features = [
  { title: 'Loops & Iteration', body: 'Process lists and datasets with intelligent loops' },
  { title: 'Scheduling', body: 'Run workflows on schedule or trigger by events' },
  { title: 'Integrations', body: 'Connect to any API or database' },
  { title: 'Monitoring', body: 'Real-time insights and debugging' },
  { title: 'Security', body: 'Enterprise-grade access control' },
  { title: 'Scalability', body: 'Handle millions of executions' },
];

const templates = [
  { title: 'BOQ Generation', body: 'Automatically generate Bills of Quantities from architectural drawings and specifications' },
  { title: 'RFP Generation', body: 'Create comprehensive Request for Proposals with all technical specifications' },
  { title: 'Purchase Order', body: 'Generate purchase orders with item validation from descriptions and pricing' },
  { title: 'Vendor Evaluation', body: 'Compare and score vendors based on multiple criteria and past performance' },
  { title: 'Contract Analysis', body: 'Extract key terms, identify risks, and summarize complex legal documents' },
  { title: 'Cost Estimation', body: 'Generate detailed cost breakdowns for projects with market rates' },
];

export default function FlowPage() {
  return (
    <main className="pt-20 bg-bg">
      <JsonLd data={flowSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">
                GenX FLOW · Orchestrate with FLOW
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">AI</span>
                <span className="block text-gradient-aurora">Workflows.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Design complex AI workflows that connect multiple agents. Integrate your
                systems, and automate entire business processes.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Create Workflow
                </CTALink>
                <CTALink href="#templates" variant="outline" size="lg" arrow>
                  Browse Templates
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Workflow Patterns */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Patterns</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Workflow</span>
                  <span className="block text-gradient-aurora">patterns.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="space-y-16 md:space-y-24">
            {patterns.map((p, i) => (
              <RevealItem key={p.name}>
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="lg:col-span-6 [direction:ltr]">
                    <Eyebrow tone="muted" className="mb-4">Pattern 0{i + 1}</Eyebrow>
                    <h3 className="text-h2 text-fg-strong mb-5">{p.name}</h3>
                    <p className="text-body-lg text-fg-mid mb-6 leading-relaxed">{p.body}</p>
                    <ul className="space-y-2.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-body-md text-fg-mid">
                          <span aria-hidden="true" className="text-fg-faint">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-6 [direction:ltr]">
                    <div className="h-[260px] border border-border rounded-xl2 bg-bg-elevated flex items-center justify-center p-10 grain">
                      <p.Visual />
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Features */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Features</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Powerful</span>
                  <span className="block text-gradient-aurora">features.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {features.map((f, i) => (
              <RevealItem key={f.title} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{f.title}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Templates */}
      <Section id="templates" spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Templates</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Start with</span>
                  <span className="block text-gradient-aurora">templates.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden mb-14">
            {templates.map((t) => (
              <RevealItem key={t.title} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <h3 className="text-h4 text-fg-strong mb-3">{t.title}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed">{t.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <div className="flex justify-center">
              <CTALink href="/contact" variant="outline" size="md" arrow>
                Request Custom Template
              </CTALink>
            </div>
          </Reveal>
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
              <h2 className="text-display text-fg-strong mb-8">
                <span className="block">Orchestrate</span>
                <span className="block text-gradient-aurora">your AI.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                Build workflows that transform how your business operates.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Start Building Workflows
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
