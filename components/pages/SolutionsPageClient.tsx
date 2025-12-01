'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { useState } from 'react';


// Icons for the three solutions
const OperationsIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-32 h-32" : "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EngagementIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-32 h-32" : "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IntelligenceIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-32 h-32" : "w-12 h-12"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// Icons for delivery formats
const ChatIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-16 h-16" : "w-8 h-8"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const DashboardIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-16 h-16" : "w-8 h-8"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const WorkflowIcon = ({ large = false }: { large?: boolean }) => (
  <svg className={large ? "w-16 h-16" : "w-8 h-8"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

export default function SolutionsPageClient() {
  const [activeTab, setActiveTab] = useState<'operations' | 'engagement' | 'intelligence'>('operations');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Solutions for Enterprise Operations",
    "description": "Comprehensive AI solutions for operations, engagement, and intelligence across all industries",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "AI for Operations",
            "description": "Automate internal workflows and accelerate decision-making"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "AI for Engagement",
            "description": "Scale customer interactions and deliver exceptional experiences"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "AI for Intelligence",
            "description": "Transform data into insights and optimize operations"
          }
        }
      ]
    }
  };

  const solutionTabs = {
    operations: {
      title: 'AI for Operations',
      subtitle: 'Automate internal workflows. Accelerate decision-making. Empower your workforce.',
      icon: <OperationsIcon large />,
      features: [
        'HR Screening & Selection',
        'BOQ Generation',
        'Document Processing',
        'Enterprise Search',
        'LMS Integration',
        'Internal Automation'
      ],
      accelerators: ['HR', 'Construction', 'Enterprise Ops'],
      link: '/solutions/operations'
    },
    engagement: {
      title: 'AI for Engagement',
      subtitle: 'Deliver exceptional experiences. Scale customer interactions. Build lasting relationships.',
      icon: <EngagementIcon large />,
      features: [
        'Customer Service Bots',
        'Citizen Portals',
        'Multi-Channel Support',
        'Service Quality',
        'Proactive Outreach',
        'Client Portals'
      ],
      accelerators: ['Retail & Hospitality', 'Government Services', 'Client Support'],
      link: '/solutions/engagement'
    },
    intelligence: {
      title: 'AI for Intelligence',
      subtitle: 'Transform data into insights. Ensure compliance. Optimize operations.',
      icon: <IntelligenceIcon large />,
      features: [
        'Analytics Dashboards',
        'Process Monitoring',
        'Compliance Tracking',
        'Quality Assurance',
        'Predictive Analytics',
        'Performance Reporting'
      ],
      accelerators: ['Manufacturing', 'Government Compliance', 'Quality Control'],
      link: '/solutions/intelligence'
    }
  };

  const currentSolution = solutionTabs[activeTab];

  return (
    <main className="pt-20 relative z-10">
      <JsonLd data={solutionsSchema} />

      {/* Hero - CENTERED */}
      <section className="min-h-[70vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
              AI SOLUTIONS
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.02em] mb-8">
              <span className="block">ENTERPRISE AI</span>
              <span className="block">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed">
              Deploy intelligent AI agents across operations, customer engagement, and business intelligence.
              Built for enterprise scale. Delivered in days.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Solution Cards */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-16">
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeTab === 'operations'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              OPERATIONS
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeTab === 'engagement'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              ENGAGEMENT
            </button>
            <button
              onClick={() => setActiveTab('intelligence')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeTab === 'intelligence'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              INTELLIGENCE
            </button>
          </div>

          {/* Split View Content */}
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Left: Animated Visual */}
            <div className="lg:col-span-2">
              <div className="relative h-96 border border-white/10 rounded-lg flex items-center justify-center bg-black overflow-hidden">
                {/* Gradient Blobs - Different per tab */}
                {activeTab === 'operations' && (
                  <>
                    <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-blob-1"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-blob-2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/25 rounded-full blur-2xl animate-blob-3"></div>
                  </>
                )}
                {activeTab === 'engagement' && (
                  <>
                    <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-blob-1"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-blob-2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400/25 rounded-full blur-2xl animate-blob-3"></div>
                  </>
                )}
                {activeTab === 'intelligence' && (
                  <>
                    <div className="absolute top-10 left-10 w-40 h-40 bg-green-500/30 rounded-full blur-3xl animate-blob-1"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl animate-blob-2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/25 rounded-full blur-2xl animate-blob-3"></div>
                  </>
                )}

                {/* Icon Overlay */}
                <div className="relative z-10 text-white/40">
                  {currentSolution.icon}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3">
              <h2 className="text-5xl font-bold mb-6">{currentSolution.title}</h2>
              <p className="text-xl text-gray mb-10 leading-relaxed">
                {currentSolution.subtitle}
              </p>

              <div className="mb-10">
                <p className="text-xs font-semibold text-gray-400 mb-6 tracking-wider">FEATURES</p>
                <div className="grid grid-cols-2 gap-4">
                  {currentSolution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 pb-10 border-b border-white/10">
                <p className="text-xs font-semibold text-gray-400 mb-4 tracking-wider">PRE-BUILT ACCELERATORS</p>
                <div className="flex flex-wrap gap-3">
                  {currentSolution.accelerators.map((acc, idx) => (
                    <span key={idx} className="text-sm px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      {acc}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={currentSolution.link}>
                <Button className="px-8 py-4 bg-white text-black hover:bg-white/90">
                  LEARN MORE →
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Delivery Formats - EXPANDING CARDS */}
      <section className="py-32 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              CHOOSE YOUR DELIVERY FORMAT
            </h2>
            <p className="text-xl text-gray">
              Every solution can be delivered through conversational AI, intelligence dashboards,
              or workflow automation—or all three combined.
            </p>
          </div>

          <div className="flex gap-4 min-h-[360px]">
            {/* Conversational AI */}
            <div
              className={`relative border border-white/10 rounded-lg bg-black overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                ${hoveredCard === 'chat' || hoveredCard === null
                  ? hoveredCard === 'chat'
                    ? 'flex-[1.6]'
                    : 'flex-1'
                  : 'flex-[0.5] opacity-50'
                }`}
              onMouseEnter={() => setHoveredCard('chat')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Expanded Content */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-center transition-opacity duration-300
                ${hoveredCard === 'chat' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="max-w-lg mx-auto">
                  <div className="text-gray-400 mb-6">
                    <ChatIcon large />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Conversational AI</h3>
                  <p className="text-gray leading-relaxed mb-6">
                    Interactive Q&A agents for HR screening, customer service, internal support,
                    and knowledge retrieval.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">HR Bots</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Customer Service</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Internal Support</span>
                  </div>
                </div>
              </div>

              {/* Collapsed Content */}
              <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-opacity duration-300
                ${hoveredCard === 'chat' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                <div className="text-gray-400 mb-4">
                  <ChatIcon />
                </div>
                <h3 className="text-lg font-bold text-center">Conversational AI</h3>
              </div>
            </div>

            {/* Intelligence Dashboards */}
            <div
              className={`relative border rounded-lg bg-black overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                ${hoveredCard === 'dashboard' || hoveredCard === null
                  ? hoveredCard === 'dashboard'
                    ? 'flex-[1.8] border-blue-500/30'
                    : 'flex-1 border-white/10'
                  : 'flex-[0.5] opacity-50 border-white/10'
                }`}
              onMouseEnter={() => setHoveredCard('dashboard')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* OUR SPECIALTY Badge */}
              <div className={`absolute top-4 right-4 z-10 transition-opacity duration-300
                ${hoveredCard === 'dashboard' ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  OUR SPECIALTY
                </span>
              </div>

              {/* Expanded Content */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-center transition-opacity duration-300
                ${hoveredCard === 'dashboard' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="max-w-xl mx-auto">
                  <div className="text-gray-400 mb-6">
                    <DashboardIcon large />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Intelligence Dashboards</h3>
                  <p className="text-gray leading-relaxed mb-6">
                    Chat meets analytics. Ask questions in natural language, see visual insights instantly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Building Permits</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Compliance</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Executive Insights</span>
                  </div>
                </div>
              </div>

              {/* Collapsed Content */}
              <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-opacity duration-300
                ${hoveredCard === 'dashboard' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                <div className="text-gray-400 mb-4">
                  <DashboardIcon />
                </div>
                <h3 className="text-lg font-bold text-center">Intelligence Dashboards</h3>
              </div>
            </div>

            {/* Workflow Automation */}
            <div
              className={`relative border border-white/10 rounded-lg bg-black overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                ${hoveredCard === 'workflow' || hoveredCard === null
                  ? hoveredCard === 'workflow'
                    ? 'flex-[1.6]'
                    : 'flex-1'
                  : 'flex-[0.5] opacity-50'
                }`}
              onMouseEnter={() => setHoveredCard('workflow')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Expanded Content */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-center transition-opacity duration-300
                ${hoveredCard === 'workflow' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="max-w-lg mx-auto">
                  <div className="text-gray-400 mb-6">
                    <WorkflowIcon large />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Workflow Automation</h3>
                  <p className="text-gray leading-relaxed mb-6">
                    Build end-to-end processes with AI guidance. Visual workflow builder with agent support.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Procurement</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Approvals</span>
                    <span className="text-xs px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Onboarding</span>
                  </div>
                </div>
              </div>

              {/* Collapsed Content */}
              <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-opacity duration-300
                ${hoveredCard === 'workflow' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                <div className="text-gray-400 mb-4">
                  <WorkflowIcon />
                </div>
                <h3 className="text-lg font-bold text-center">Workflow Automation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Yourself Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-4">
              INTERACTIVE DEMO
            </p>
            <h2 className="text-5xl font-bold mb-6">
              TRY IT YOURSELF
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed">
              Experience our AI solutions hands-on. See how we deliver through
              conversational AI, analytics dashboards, and workflow automation.
            </p>
          </div>

          {/* Three Delivery Format Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Conversational AI</h3>
              <p className="text-sm text-gray">
                Ask questions, get instant answers with context-aware responses
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-gray">
                Request data visualizations and build dashboards through chat
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-colors">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-bold mb-2">Workflow Automation</h3>
              <p className="text-sm text-gray">
                Automate complex processes with AI-guided workflows
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/demo">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg inline-flex items-center gap-3">
                <span>🖐️</span>
                Launch Interactive Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            READY TO DEPLOY AI SOLUTIONS?
          </h2>
          <p className="text-xl text-gray mb-12 leading-relaxed">
            See how our AI solutions can transform your operations, engagement, and intelligence capabilities.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white hover:text-black px-8 py-4">
                Schedule a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}