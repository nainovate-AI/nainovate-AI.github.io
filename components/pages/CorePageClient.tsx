'use client';

import JsonLd from '@/components/seo/JsonLd';
import mockData from '@/data/marketing/core.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type Module = { title: string; description: string; bullets: string[] };
type Capability = { title: string; description: string };
type AgentType = { title: string; description: string };
type BuildStep = { number: string; title: string; description: string };

const coreSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GenX CORE',
  alternateName: 'CORE AI Engine',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'AI Development Platform',
  operatingSystem: 'Web-based',
  description: 'AI engine for creating specialized agents. Part of the GenX integrated platform.',
  url: 'https://www.nainovate.ai/platform/core',
  featureList: [
    'CONTEXTA - RAG Pipeline Integration',
    'FINETUNE - RLHF Fine-tuning',
    'MODELA - Model Evaluation',
    'INFERENCE - Production Pipelines',
    'Domain-Specific Agent Creation',
    'Advanced Model Optimization',
  ],
  softwareRequirements: 'Modern web browser with JavaScript enabled',
  offers: {
    '@type': 'Offer',
    price: 'Contact for pricing',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
    seller: { '@type': 'Organization', name: 'Nainovate Technologies' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '500', bestRating: '5', worstRating: '1' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Build an AI Agent with CORE',
  description: 'Step-by-step guide to create your first AI agent',
  step: [
    { '@type': 'HowToStep', name: 'Define', text: 'Set agent purpose, capabilities, and knowledge domain' },
    { '@type': 'HowToStep', name: 'Train', text: 'Upload data, fine-tune responses, and validate performance' },
    { '@type': 'HowToStep', name: 'Deploy', text: 'Launch your agent instantly to NIA interface' },
  ],
};

export default function CorePageClient() {
  const modules = mockData.modules as Module[];
  const capabilities = mockData.capabilities as Capability[];
  const agentTypes = mockData.agentTypes as AgentType[];
  const buildProcess = mockData.buildProcess as BuildStep[];

  return (
    <main className="pt-20 bg-bg">
      <JsonLd data={coreSchema} />
      <JsonLd data={howToSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">
                GenX CORE · AI Engine
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Create AI</span>
                <span className="block text-gradient-aurora">Agents.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Build production-ready AI agents with our advanced engine.
                Domain-specific. Purpose-built. Deploy in days.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Start Building
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CORE Modules */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Modules</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">CORE</span>
                  <span className="block text-gradient-aurora">modules.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid md:grid-cols-2 gap-8 md:gap-14 md:gap-y-14">
            {modules.map((mod) => (
              <RevealItem key={mod.title} className="border-l border-border-strong pl-8">
                <h3 className="text-h3 text-fg-strong mb-4">{mod.title}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed mb-6">
                  {mod.description}
                </p>
                <ul className="space-y-2.5">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-body-sm text-fg-mid">
                      <span aria-hidden="true" className="text-fg-faint">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Build Agents for Any Use Case */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Any use case</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Build agents for</span>
                  <span className="block text-gradient-aurora">any use case.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <Reveal delay={0.1}>
                <p className="text-body-lg text-fg-mid leading-relaxed">
                  Create specialized AI agents tailored to your exact business needs.
                  CORE empowers you to build intelligent agents that understand your
                  domain, speak your language, and solve your specific challenges.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Capabilities + Agent types */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-24">
            <RevealGroup className="space-y-8 md:space-y-10">
              {capabilities.map((cap) => (
                <RevealItem key={cap.title} className="border-l border-border-strong pl-8">
                  <h3 className="text-h3 text-fg-strong mb-4">{cap.title}</h3>
                  <p className="text-body-md text-fg-mid leading-relaxed">
                    {cap.description}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealGroup className="grid grid-cols-2 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
              {agentTypes.map((agent) => (
                <RevealItem key={agent.title} className="group bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                  <h4 className="text-h4 text-fg-strong mb-3">{agent.title}</h4>
                  <p className="text-body-sm text-fg-mid leading-relaxed">{agent.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Build Process */}
          <Reveal>
            <div className="border border-border rounded-xl2 overflow-hidden">
              <div className="grid md:grid-cols-3">
                {buildProcess.map((step, i) => (
                  <div key={step.number} className={`p-8 md:p-12 ${i > 0 ? 'md:border-l md:border-border border-t md:border-t-0 border-border' : ''}`}>
                    <div className="text-h1 text-fg-strong tabular-nums leading-none mb-8">{step.number}</div>
                    <h3 className="text-h4 text-fg-strong mb-4">{step.title}</h3>
                    <p className="text-body-md text-fg-mid leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
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
              <h2 className="text-h2 mb-8">
                <span className="block text-fg-strong">Start</span>
                <span className="block text-gradient-aurora">building today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                Transform your business with AI agents designed for your specific needs.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Schedule a Demo
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
