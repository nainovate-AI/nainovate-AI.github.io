'use client';

import Link from 'next/link';
import { VisualBuilderMockup } from '../mockups/VisualBuilderMockup';
import { SDKsMockup } from '../mockups/SDKsMockup';
import { TestingDebuggingMockup } from '../mockups/TestingDebuggingMockup';
import { DeploymentMockup } from '../mockups/DeploymentMockup';
import mockData from '@/data/marketing/development-tools.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type Capability = { title: string; description: string };
type Governance = { title: string; description: string };
type PlatformFeature = { title: string; description: string; href: string };
type Path = { title: string; steps: string[]; time: string };
type DetailFeature = { title: string; description: string };
type Detail = { heading: string; description: string; accentColor?: string; features: DetailFeature[] };

const detailedSectionMockups = [
  <VisualBuilderMockup key="0" />,
  <SDKsMockup key="1" />,
  <TestingDebuggingMockup key="2" />,
  <DeploymentMockup key="3" />,
];

const svgFor = (paths: string[], className = 'w-9 h-9') => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
);

const coreCapabilityIcons = [
  ['M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'],
  ['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'],
  ['M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'],
  ['M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'],
];

const governanceIcons = [
  ['M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'],
  ['M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'],
  ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'],
];

const developmentPathIcons = [
  ['M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'],
  ['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'],
  ['M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'],
];

const platformFeatureIcons = [
  ['M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'],
  ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'],
  ['M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z'],
];

export default function DevelopmentToolsClient() {
  const coreCapabilities = mockData.coreCapabilities as Capability[];
  const detailedSections = mockData.detailedSections as Detail[];
  const governanceItems = mockData.governanceItems as Governance[];
  const developmentPaths = mockData.developmentPaths as Path[];
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
                GenX Platform · Development Tools
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">No-Code +</span>
                <span className="block text-gradient-aurora">Pro-Code Tools.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Build AI agents your way. Visual drag-and-drop for business users. Comprehensive
                SDKs for developers. One unified platform with integrated testing and deployment.
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
                  <span className="block text-fg-strong">Core development</span>
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
                <div className="text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6">
                  {svgFor(coreCapabilityIcons[i] || coreCapabilityIcons[0], 'w-10 h-10')}
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{cap.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{cap.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Detailed sections */}
      {detailedSections.map((sec, i) => {
        const reversed = i % 2 === 1;
        const mockup = detailedSectionMockups[i];
        const content = (
          <div className="space-y-8">
            <div>
              <Eyebrow tone="muted" withDot className="mb-5">Section 0{i + 1}</Eyebrow>
              <h2 className="text-h2 text-gradient-aurora mb-6">{sec.heading}</h2>
              <p className="text-body-lg text-fg-mid leading-relaxed">{sec.description}</p>
            </div>
            <div className="space-y-6">
              {sec.features.map((feat, fi) => (
                <div key={feat.title} className="flex gap-5">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full border border-fg-strong text-fg-strong flex items-center justify-center text-body-sm font-medium tabular-nums">
                    {fi + 1}
                  </span>
                  <div>
                    <h3 className="text-h4 text-fg-strong mb-2">{feat.title}</h3>
                    <p className="text-body-md text-fg-mid leading-relaxed">{feat.description}</p>
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
          <Section key={sec.heading} spacing="lg">
            <Container size="wide">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {reversed ? (
                  <>
                    <Reveal className="lg:col-span-6">{mockup}</Reveal>
                    <Reveal delay={0.1} className="lg:col-span-6">{content}</Reveal>
                  </>
                ) : (
                  <>
                    <Reveal className="lg:col-span-6">{content}</Reveal>
                    <Reveal delay={0.1} className="lg:col-span-6">{mockup}</Reveal>
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
                Whether you build with no-code or pro-code, AI CoE governance is automatically
                enforced. Quality, security, and compliance from development to production.
              </p>
            </Reveal>
          </div>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden max-w-5xl mx-auto">
            {governanceItems.map((item, i) => (
              <RevealItem key={item.title} className="group bg-bg p-8 md:p-10 text-center transition-colors duration-500 hover:bg-bg-elevated">
                <div className="text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6 flex justify-center">
                  {svgFor(governanceIcons[i] || governanceIcons[0], 'w-9 h-9')}
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{item.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Development Paths */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Path</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Choose your</span>
                  <span className="block text-gradient-aurora">development path.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {developmentPaths.map((path, i) => (
              <RevealItem key={path.title} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6">
                  {svgFor(developmentPathIcons[i] || developmentPathIcons[0], 'w-10 h-10')}
                </div>
                <h3 className="text-h3 text-fg-strong mb-5">{path.title}</h3>
                <div className="space-y-3 text-body-sm text-fg-mid mb-8">
                  {path.steps.map((step) => (
                    <p key={step}>{step}</p>
                  ))}
                </div>
                <p className="text-h4 text-fg-strong tabular-nums">{path.time}</p>
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
            {platformFeatures.map((feat, i) => (
              <RevealItem key={feat.title}>
                <Link href={feat.href} className="group block h-full bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated">
                  <div className="text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-6">
                    {svgFor(platformFeatureIcons[i] || platformFeatureIcons[0], 'w-9 h-9')}
                  </div>
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
                <span className="block text-fg-strong">Start</span>
                <span className="block text-gradient-aurora">building today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                Choose your path: No-code simplicity or pro-code power. Or both.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Try No-Code Builder
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
