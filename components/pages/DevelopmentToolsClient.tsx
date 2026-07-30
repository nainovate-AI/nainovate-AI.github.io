'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { VisualBuilderMockup } from '../mockups/VisualBuilderMockup';
import { SDKsMockup } from '../mockups/SDKsMockup';
import { TestingDebuggingMockup } from '../mockups/TestingDebuggingMockup';
import { DeploymentMockup } from '../mockups/DeploymentMockup';
import mockData from '@/data/marketing/development-tools.json';

const coreCapabilityIcons = [
  <svg key="0" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg key="1" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="2" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>,
  <svg key="3" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>,
];

const detailedSectionMockups = [
  <VisualBuilderMockup key="0" />,
  <SDKsMockup key="1" />,
  <TestingDebuggingMockup key="2" />,
  <DeploymentMockup key="3" />,
];

const accentClassMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  green: { bg: 'bg-green-500/20', text: 'text-green-400' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/20', text: 'text-orange-400' },
};

const governanceIcons = [
  <svg key="0" className="w-8 h-8 mx-auto text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  <svg key="1" className="w-8 h-8 mx-auto text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  <svg key="2" className="w-8 h-8 mx-auto text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

const developmentPathIcons = [
  <svg key="0" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg key="1" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="2" className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>,
];

const platformFeatureIcons = [
  <svg key="0" className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>,
  <svg key="1" className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="2" className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="3" className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
  </svg>,
];

export default function DevelopmentToolsClient() {
  return (
    <main className="bg-bg min-h-screen text-fg-strong">
      {/* Hero Section */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-fg-muted uppercase tracking-[0.2em] text-sm">GenX Platform / Development Tools</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
              NO-CODE +<br />
              PRO-CODE<br />
              TOOLS
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mb-6 md:mb-12">
              Build AI agents your way. Visual drag-and-drop for business users. Comprehensive
              SDKs for developers. One unified platform with integrated testing and deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                  Start Building
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">CORE DEVELOPMENT CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.coreCapabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={0.1 * (i + 1)}>
                <div className="p-6 border border-border rounded-lg hover:border-border-strong transition-colors min-h-[200px]">
                  <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-4">
                    {coreCapabilityIcons[i]}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-fg-muted">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections (alternating layout) */}
      {mockData.detailedSections.map((sec, i) => {
        const reversed = i % 2 === 1;
        const accent = accentClassMap[sec.accentColor] ?? accentClassMap.blue;
        const mockup = detailedSectionMockups[i];
        const content = (
          <AnimatedSection delay={reversed ? 0.2 : 0}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{sec.heading}</h2>
                <p className="text-base sm:text-lg md:text-xl text-fg-mid">{sec.description}</p>
              </div>

              <div className="space-y-6">
                {sec.features.map((feat, fi) => (
                  <div key={feat.title} className="flex gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${accent.bg} flex items-center justify-center`}>
                      <span className={`${accent.text} font-bold`}>{fi + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                      <p className="text-fg-muted">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link href="/contact">
                  <Button className="px-6 py-3">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        );

        return (
          <section key={sec.heading} className="py-8 md:py-12 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {reversed ? (
                  <>
                    <div>{mockup}</div>
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    <div>{mockup}</div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Built with AI CoE Governance */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="mb-6 md:mb-12">
              <svg className="w-16 h-16 mx-auto mb-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mx-auto mb-6 md:mb-8">
              Whether you build with no-code or pro-code, AI CoE governance is automatically
              enforced. Quality, security, and compliance from development to production.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {mockData.governanceItems.map((item, i) => (
                <div key={item.title}>
                  <div className="mb-4">{governanceIcons[i]}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-fg-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Paths Comparison */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">CHOOSE YOUR DEVELOPMENT PATH</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.developmentPaths.map((path, i) => (
              <AnimatedSection key={path.title} delay={0.1 * (i + 1)}>
                <div className="p-5 md:p-8 border border-border rounded-lg hover:border-border-strong transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-4">
                    {developmentPathIcons[i]}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{path.title}</h3>
                  <div className="space-y-3 text-sm text-fg-muted mb-6">
                    {path.steps.map((step) => (
                      <p key={step}>{step}</p>
                    ))}
                  </div>
                  <p className="text-lg font-bold text-fg-strong">{path.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">EXPLORE MORE PLATFORM FEATURES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.platformFeatures.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={0.1 * (i + 1)}>
                <Link href={feat.href}>
                  <div className="p-6 border border-border rounded-lg hover:border-border-strong transition-all h-full">
                    <div className="mb-4">{platformFeatureIcons[i]}</div>
                    <h3 className="font-bold mb-2">{feat.title}</h3>
                    <p className="text-sm text-fg-muted">{feat.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              START BUILDING TODAY
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-mid mb-6 md:mb-12">
              Choose your path: No-code simplicity or pro-code power. Or both.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                  Try No-Code Builder
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
