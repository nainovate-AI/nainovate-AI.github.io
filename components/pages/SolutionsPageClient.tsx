'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JsonLd from '@/components/seo/JsonLd';
import mockData from '@/data/marketing/solutions.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';
import { GatedDemoLink } from '@/components/ui/DemoGate';

type TabKey = 'operations' | 'engagement' | 'intelligence';

const OperationsIcon = ({ className = 'w-24 h-24' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const EngagementIcon = ({ className = 'w-24 h-24' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const IntelligenceIcon = ({ className = 'w-24 h-24' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const ChatIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const DashboardIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const WorkflowIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

type Delivery = {
  id: 'chat' | 'dashboard' | 'workflow';
  title: string;
  description: string;
  tags: string[];
  Icon: (p: { className?: string }) => React.ReactElement;
  specialty?: boolean;
};

const deliveryFormats: Delivery[] = [
  {
    id: 'chat',
    title: 'Conversational AI',
    description: 'Interactive Q&A agents for HR screening, customer service, internal support, and knowledge retrieval.',
    tags: ['HR Bots', 'Customer Service', 'Internal Support'],
    Icon: ChatIcon,
  },
  {
    id: 'dashboard',
    title: 'Intelligence Dashboards',
    description: 'Chat meets analytics. Ask questions in natural language, see visual insights instantly.',
    tags: ['Building Permits', 'Compliance', 'Executive Insights'],
    Icon: DashboardIcon,
    specialty: true,
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description: 'Build end-to-end processes with AI guidance. Visual workflow builder with agent support.',
    tags: ['Procurement', 'Approvals', 'Onboarding'],
    Icon: WorkflowIcon,
  },
];

const tryItYourself = [
  { title: 'Conversational AI', desc: 'Ask questions, get instant answers with context-aware responses', Icon: ChatIcon },
  { title: 'Analytics Dashboard', desc: 'Request data visualizations and build dashboards through chat', Icon: DashboardIcon },
  { title: 'Workflow Automation', desc: 'Automate complex processes with AI-guided workflows', Icon: WorkflowIcon },
];

export default function SolutionsPageClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('operations');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Solutions for Enterprise Operations',
    description: 'Comprehensive AI solutions for operations, engagement, and intelligence across all industries',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'AI for Operations', description: 'Automate internal workflows and accelerate decision-making' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'AI for Engagement', description: 'Scale customer interactions and deliver exceptional experiences' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'AI for Intelligence', description: 'Transform data into insights and optimize operations' } },
      ],
    },
  };

  const solutionTabs = {
    operations: {
      title: 'AI for Operations',
      subtitle: 'Automate internal workflows. Accelerate decision-making. Empower your workforce.',
      Icon: OperationsIcon,
      features: mockData.operationsFeatures as string[],
      accelerators: mockData.operationsAccelerators as string[],
      link: '/solutions/operations',
    },
    engagement: {
      title: 'AI for Engagement',
      subtitle: 'Deliver exceptional experiences. Scale customer interactions. Build lasting relationships.',
      Icon: EngagementIcon,
      features: mockData.engagementFeatures as string[],
      accelerators: mockData.engagementAccelerators as string[],
      link: '/solutions/engagement',
    },
    intelligence: {
      title: 'AI for Intelligence',
      subtitle: 'Transform data into insights. Ensure compliance. Optimize operations.',
      Icon: IntelligenceIcon,
      features: mockData.intelligenceFeatures as string[],
      accelerators: mockData.intelligenceAccelerators as string[],
      link: '/solutions/intelligence',
    },
  } as const;

  const currentSolution = solutionTabs[activeTab];
  const CurrentIcon = currentSolution.Icon;

  return (
    <main className="pt-20 relative z-10">
      <JsonLd data={solutionsSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">
                AI Solutions
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Enterprise AI</span>
                <span className="block text-gradient-aurora">Solutions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Deploy intelligent AI agents across operations, customer engagement, and business intelligence.
                Built for enterprise scale. Delivered in days.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Tabbed Solutions */}
      <Section spacing="lg">
        <Container size="wide">
          {/* Tabs — editorial underline */}
          <div className="flex justify-center gap-1 md:gap-2 mb-10 md:mb-16 border-b border-border">
            {(['operations', 'engagement', 'intelligence'] as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 md:px-10 py-4 text-eyebrow transition-colors duration-300 ${
                  activeTab === key ? 'text-fg-strong' : 'text-fg-muted hover:text-fg-strong'
                }`}
              >
                {key.toUpperCase()}
                {activeTab === key && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute left-0 right-0 -bottom-px h-px bg-fg-strong"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Split content */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Visual — monochrome canvas with grain + glyph */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-xl2 border border-border bg-bg-elevated overflow-hidden grain">
                <div aria-hidden="true" className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_60%)]" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center text-fg-mid"
                  >
                    <CurrentIcon className="w-32 h-32 md:w-40 md:h-40" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="text-h2 text-gradient-aurora mb-6">{currentSolution.title}</h2>
                  <p className="text-body-lg text-fg-mid mb-10 leading-relaxed max-w-2xl">
                    {currentSolution.subtitle}
                  </p>

                  <div className="mb-10">
                    <Eyebrow tone="muted" className="mb-5">Features</Eyebrow>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {currentSolution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 min-w-0">
                          <span aria-hidden="true" className="text-fg-faint mt-1 shrink-0">→</span>
                          <span className="text-body-md text-fg-mid break-words min-w-0">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-10 pb-10 border-b border-border">
                    <Eyebrow tone="muted" className="mb-5">Pre-built accelerators</Eyebrow>
                    <div className="flex flex-wrap gap-2">
                      {currentSolution.accelerators.map((acc) => (
                        <span key={acc} className="text-body-sm px-4 py-2 rounded-full border border-border text-fg-mid">
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <CTALink href={currentSolution.link} variant="outline" size="md" arrow>
                    Learn more
                  </CTALink>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>

      {/* Delivery Formats — expanding cards, monochrome */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Delivery formats</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2 mb-6">
                  <span className="block text-fg-strong">Choose your</span>
                  <span className="block text-gradient-aurora">delivery format.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <Reveal delay={0.1}>
                <p className="text-body-lg text-fg-mid leading-relaxed">
                  Every solution can be delivered through conversational AI, intelligence dashboards,
                  or workflow automation — or all three combined.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="flex flex-col md:flex-row gap-3 min-h-[380px]">
              {deliveryFormats.map((fmt) => {
                const isHovered = hoveredCard === fmt.id;
                const isDimmed = hoveredCard && hoveredCard !== fmt.id;
                const flex = isHovered ? 'md:flex-[1.7]' : isDimmed ? 'md:flex-[0.55] md:opacity-50' : 'md:flex-1';
                return (
                  <div
                    key={fmt.id}
                    onMouseEnter={() => setHoveredCard(fmt.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative border border-border rounded-xl2 bg-bg overflow-hidden transition-all duration-500 ease-out-quart cursor-pointer ${flex}`}
                  >
                    {fmt.specialty && (
                      <span
                        className={`absolute top-4 right-4 z-10 text-eyebrow px-3 py-1 rounded-full border border-fg-strong text-fg-strong bg-bg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      >
                        Our Specialty
                      </span>
                    )}

                    {/* Expanded */}
                    <div className={`absolute inset-0 p-8 md:p-10 flex flex-col justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="max-w-lg">
                        <fmt.Icon className="w-14 h-14 text-fg-strong mb-6" />
                        <h3 className="text-h3 text-fg-strong mb-4">{fmt.title}</h3>
                        <p className="text-body-md text-fg-mid leading-relaxed mb-6">{fmt.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {fmt.tags.map((t) => (
                            <span key={t} className="text-body-sm px-3 py-1.5 rounded-full border border-border text-fg-mid">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Collapsed */}
                    <div className={`absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <fmt.Icon className="w-9 h-9 text-fg-mid mb-4" />
                      <h3 className="text-h4 text-fg-strong text-center">{fmt.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Try it yourself */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="max-w-3xl mb-14 md:mb-20">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-5">Interactive demo</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2 mb-6">
                <span className="block text-fg-strong">Try it</span>
                <span className="block text-gradient-aurora">yourself.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid leading-relaxed">
                Experience our AI solutions hands-on. See how we deliver through
                conversational AI, analytics dashboards, and workflow automation.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden mb-14">
            {tryItYourself.map((item) => (
              <RevealItem key={item.title} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <item.Icon className="w-10 h-10 text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-5" />
                <h3 className="text-h4 text-fg-strong mb-3">{item.title}</h3>
                <p className="text-body-md text-fg-mid leading-relaxed">{item.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="flex justify-center">
              <GatedDemoLink href="/demo" variant="solid" size="lg" arrow>
                Launch Interactive Demo
              </GatedDemoLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <h2 className="text-h2 mb-8">
                <span className="block text-fg-strong">Ready to deploy</span>
                <span className="block text-gradient-aurora">AI solutions?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                See how our AI solutions can transform your operations, engagement, and intelligence capabilities.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Schedule a Demo
                </CTALink>
                <CTALink href="/platform" variant="outline" size="lg" arrow>
                  Explore Platform
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
