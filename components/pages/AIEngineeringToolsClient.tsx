'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { PromptWorkshopMockup } from '@/components/mockups/PromptWorkshopMockup';
import { ModelOrchestratorMockup } from '@/components/mockups/ModelOrchestratorMockup';
import { QualityAssuranceLabMockup } from '@/components/mockups/QualityAssuranceLabMockup';
import mockData from '@/data/marketing/ai-engineering-tools.json';

const mockupMap: Record<string, React.ComponentType> = {
  PromptWorkshopMockup,
  ModelOrchestratorMockup,
  QualityAssuranceLabMockup,
};

export default function AIEngineeringToolsClient() {
  return (
    <main className="bg-bg min-h-screen text-fg-strong">
      {/* Hero Section */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-fg-muted uppercase tracking-[0.2em] text-sm">GenX Platform / AI Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight mb-8">
              AI ENGINEERING<br />
              TOOLS
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mb-6 md:mb-12">
              Build production-ready AI agents with advanced RAG pipelines, fine-tuning capabilities,
              and comprehensive evaluation tools. All built with AI CoE governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                  Schedule Demo
                </Button>
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
              <AnimatedSection key={cap.title} delay={0.1 * (i + 1)}>
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

      {/* Detail Sections: Prompt Workshop, Model Orchestrator, Quality Assurance Lab */}
      {mockData.detailSections.map((section) => {
        const Mockup = mockupMap[section.mockup];
        const content = (
          <AnimatedSection delay={section.mockupPosition === 'left' ? 0.2 : 0}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{section.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-fg-mid">
                  {section.description}
                </p>
              </div>

              <div className="space-y-6">
                {section.features.map((feature, fIdx) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${section.accentBg} flex items-center justify-center`}>
                      <span className={`${section.accentText} font-bold`}>{fIdx + 1}</span>
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

        const visual = (
          <div>
            <Mockup />
          </div>
        );

        return (
          <section key={section.id} className={section.sectionClass}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {section.mockupPosition === 'left' ? (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-fg-mid max-w-3xl mx-auto mb-8 md:mb-16">
              Every AI engineering tool integrates with our Center of Excellence framework. This means
              quality, ethical compliance, validation, and ethical guardrails are built-in—not bolted on.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {mockData.governancePillars.map((pillar) => (
                <div key={pillar.title}>
                  <div className="mb-4">
                    <svg className="w-8 h-8 mx-auto text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <AnimatedSection key={feat.href} delay={0.1 * (i + 1)}>
                <Link href={feat.href}>
                  <div className="p-6 border border-border rounded-lg hover:border-border-strong transition-all h-full">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feat.iconPath} />
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
              READY TO BUILD WITH GenX?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-mid mb-6 md:mb-12">
              See how our AI engineering tools can accelerate your agent development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/platform/core" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-medium">
                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
