'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { EnterpriseSearchMockup } from '../mockups/EnterpriseSearchMockup';
import { UniversalConnectorsMockup } from '../mockups/UniversalConnectorsMockup';
import { IntelligentDataProcessingMockup } from '../mockups/IntelligentDataProcessingMockup';
import mockData from '@/data/marketing/search-data-ai.json';

const mockupRegistry: Record<string, React.ComponentType> = {
  EnterpriseSearchMockup,
  UniversalConnectorsMockup,
  IntelligentDataProcessingMockup,
};

export default function SearchDataAIClient() {
  return (
    <main className="bg-bg min-h-screen text-fg-strong">
      {/* Hero Section */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-fg-muted uppercase tracking-[0.2em] text-sm">GenX Platform / Search + Data</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight mb-8">
              SEARCH + DATA<br />
              AI
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mb-6 md:mb-12">
              Retrieve accurate, real-time insights with agentic RAG, hybrid vector search,
              and 100+ enterprise connectors. Transform scattered data into unified knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/platform">
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">CORE CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.coreCapabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={(i + 1) * 0.1}>
                <div className="p-6 border border-border rounded-lg hover:border-border-strong transition-colors min-h-[200px]">
                  <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cap.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-fg-muted">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      {mockData.detailSections.map((section) => {
        const Mockup = mockupRegistry[section.mockup];
        const visualLeft = section.visualPosition === 'left';
        const sectionBg = section.sectionBg ? ` ${section.sectionBg}` : '';
        const content = (
          <AnimatedSection delay={visualLeft ? 0.2 : 0}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{section.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-fg-mid">
                  {section.description}
                </p>
              </div>

              <div className="space-y-6">
                {section.features.map((feature, fi) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${section.accentBg} flex items-center justify-center`}>
                      <span className={`${section.accentText} font-bold`}>{fi + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-fg-muted">
                        {feature.description}
                      </p>
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
        const visual = <div>{Mockup && <Mockup />}</div>;
        return (
          <section key={section.id} className={`py-14 md:py-20 border-t border-border${sectionBg}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {visualLeft ? (
                  <>
                    {visual}
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    {visual}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Built with AI CoE Governance */}
      <section className="py-14 md:py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection>
            <div className="mb-6 md:mb-12">
              <svg className="w-16 h-16 mx-auto mb-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mx-auto mb-8 md:mb-16">
              Every search query and data access integrates with our Center of Excellence framework.
              Quality, compliance, and audit trails are built-in—not bolted on.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {mockData.governancePillars.map((pillar) => (
                <div key={pillar.title} className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-fg-muted">{pillar.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-14 md:py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">EXPLORE MORE PLATFORM FEATURES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.platformFeatures.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={(i + 1) * 0.1}>
                <Link href={feat.href}>
                  <div className="p-6 border border-border rounded-lg hover:border-border-strong transition-all h-full">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feat.iconPaths.map((d, di) => (
                          <path key={di} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                        ))}
                      </svg>
                    </div>
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
      <section className="py-14 md:py-20 border-t border-border">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              READY TO UNIFY YOUR KNOWLEDGE?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-mid mb-6 md:mb-12">
              See how Search + Data AI can transform scattered data into actionable intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">                  Schedule Demo
                </Button>
              </Link>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
