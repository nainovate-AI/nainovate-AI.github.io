'use client';

import Link from 'next/link';
import { EnterpriseSearchMockup } from '../mockups/EnterpriseSearchMockup';
import { UniversalConnectorsMockup } from '../mockups/UniversalConnectorsMockup';
import { IntelligentDataProcessingMockup } from '../mockups/IntelligentDataProcessingMockup';
import mockData from '@/data/marketing/search-data-ai.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';
import { GatedDemoLink } from '@/components/ui/DemoGate';

const mockupRegistry: Record<string, React.ComponentType> = {
  EnterpriseSearchMockup,
  UniversalConnectorsMockup,
  IntelligentDataProcessingMockup,
};

type Capability = { title: string; description: string; iconPath: string };
type Pillar = { title: string; description: string; iconPath: string };
type PlatformFeature = { title: string; description: string; href: string; iconPaths: string[] };
type DetailFeature = { title: string; description: string };
type Detail = {
  id: string;
  title: string;
  description: string;
  mockup: string;
  visualPosition: 'left' | 'right';
  features: DetailFeature[];
  accentBg?: string;
  accentText?: string;
  sectionBg?: string;
};

export default function SearchDataAIClient() {
  const coreCapabilities = mockData.coreCapabilities as Capability[];
  const detailSections = mockData.detailSections as Detail[];
  const governancePillars = mockData.governancePillars as Pillar[];
  const platformFeatures = mockData.platformFeatures as PlatformFeature[];

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
                GenX Platform · Search + Data
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Search +</span>
                <span className="block text-gradient-aurora">Data AI.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Retrieve accurate, real-time insights with agentic RAG, hybrid vector search,
                and 100+ enterprise connectors. Transform scattered data into unified knowledge.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Schedule Demo
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core Capabilities */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Capabilities</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Core</span>
                  <span className="block text-gradient-aurora">capabilities.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {coreCapabilities.map((cap, i) => (
              <RevealItem key={cap.title} className="group bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <svg className="w-10 h-10 text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={cap.iconPath} />
                </svg>
                <h3 className="text-h4 text-fg-strong mb-3">{cap.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{cap.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Detail sections */}
      {detailSections.map((section, sIdx) => {
        const Mockup = mockupRegistry[section.mockup];
        const visualLeft = section.visualPosition === 'left';
        const content = (
          <div className="space-y-8">
            <div>
              <Eyebrow tone="muted" withDot className="mb-5">Section 0{sIdx + 1}</Eyebrow>
              <h2 className="text-h2 text-gradient-aurora mb-6">{section.title}</h2>
              <p className="text-body-lg text-fg-mid leading-relaxed">{section.description}</p>
            </div>
            <div className="space-y-6">
              {section.features.map((feature, fi) => (
                <div key={feature.title} className="flex gap-5">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full border border-fg-strong text-fg-strong flex items-center justify-center text-body-sm font-medium tabular-nums">
                    {fi + 1}
                  </span>
                  <div>
                    <h3 className="text-h4 text-fg-strong mb-2">{feature.title}</h3>
                    <p className="text-body-md text-fg-mid leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <CTALink href="/contact" variant="outline" size="md" arrow>
              Learn More
            </CTALink>
          </div>
        );
        return (
          <Section key={section.id} spacing="lg">
            <Container size="wide">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {visualLeft ? (
                  <>
                    <Reveal className="lg:col-span-6">{Mockup && <Mockup />}</Reveal>
                    <Reveal delay={0.1} className="lg:col-span-6">{content}</Reveal>
                  </>
                ) : (
                  <>
                    <Reveal className="lg:col-span-6">{content}</Reveal>
                    <Reveal delay={0.1} className="lg:col-span-6">{Mockup && <Mockup />}</Reveal>
                  </>
                )}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* AI CoE Governance */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6 justify-center">AI CoE Governance</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2 mb-8">
                <span className="block text-fg-strong">Built with</span>
                <span className="block text-gradient-aurora">CoE governance.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Every search query and data access integrates with our Center of Excellence framework.
                Quality, compliance, and audit trails are built-in—not bolted on.
              </p>
            </Reveal>
          </div>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden max-w-5xl mx-auto">
            {governancePillars.map((pillar) => (
              <RevealItem key={pillar.title} className="group bg-bg p-8 md:p-10 text-center transition-colors duration-500 hover:bg-bg-elevated">
                <svg className="w-9 h-9 mx-auto text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={pillar.iconPath} />
                </svg>
                <h3 className="text-h4 text-fg-strong mb-3">{pillar.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{pillar.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Platform Features */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Explore more</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">More platform</span>
                  <span className="block text-gradient-aurora">features.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {platformFeatures.map((feat) => (
              <RevealItem key={feat.title}>
                <Link href={feat.href} className="group block h-full bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                  <svg className="w-9 h-9 text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {feat.iconPaths.map((d, di) => (
                      <path key={di} d={d} />
                    ))}
                  </svg>
                  <h3 className="text-h4 text-fg-strong mb-3">{feat.title}</h3>
                  <p className="text-body-sm text-fg-mid leading-relaxed">{feat.description}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
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
                <span className="block text-fg-strong">Ready to unify</span>
                <span className="block text-gradient-aurora">your knowledge?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                See how Search + Data AI can transform scattered data into actionable intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Schedule Demo
                </CTALink>
                <GatedDemoLink href="/demo" variant="outline" size="lg" arrow>
                  Try Interactive Demo
                </GatedDemoLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
