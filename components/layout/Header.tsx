'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Icon components (keeping existing ones)
const PlatformIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const CoreIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const NiaIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const FlowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const OperationsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EngagementIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IntelligenceIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

// NEW FEATURE ICONS
const EngineeringIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IntegrationsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const CoEIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

// Type definitions
interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface SolutionCard {
  title: string;
  href: string;
  icon: React.ReactNode;
  subtitle: string;
  features: string[];
  accelerators: string[];
}

interface NavItem {
  name: string;
  href: string;
  isDropdown: boolean;
  isSolutionsMega?: boolean;
  isPlatformMega?: boolean;
  isDIMega?: boolean;
  dropdownItems?: DropdownItem[];
  solutionCards?: SolutionCard[];
}

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation: NavItem[] = [
    {
      name: 'Home',
      href: '/',
      isDropdown: false,
    },
    {
      name: 'Platform',
      href: '/platform',
      isDropdown: true,
      isPlatformMega: true,
    },
    {
      name: 'Decision Intelligence',
      href: '/decision-intelligence',
      isDropdown: true,
      isDIMega: true,
    },
    {
      name: 'Solutions',
      href: '/solutions',
      isDropdown: true,
      isSolutionsMega: true,
      solutionCards: [
        {
          title: 'AI for Operations',
          href: '/solutions/operations',
          icon: <OperationsIcon />,
          subtitle: 'Automate internal workflows. Accelerate decision-making. Empower your workforce.',
          features: [
            'HR Screening & Selection',
            'BOQ Generation',
            'Document Processing',
            'Enterprise Search'
          ],
          accelerators: ['HR', 'Construction', 'Enterprise Ops']
        },
        {
          title: 'AI for Engagement',
          href: '/solutions/engagement',
          icon: <EngagementIcon />,
          subtitle: 'Deliver exceptional experiences. Scale customer interactions. Build lasting relationships.',
          features: [
            'Customer Service Bots',
            'Citizen Portals',
            'Multi-Channel Support',
            'Service Quality'
          ],
          accelerators: ['Retail & Hospitality', 'Government Services', 'Client Support']
        },
        {
          title: 'AI for Intelligence',
          href: '/solutions/intelligence',
          icon: <IntelligenceIcon />,
          subtitle: 'Transform data into insights. Ensure compliance. Optimize operations.',
          features: [
            'Analytics Dashboards',
            'Process Monitoring',
            'Compliance Tracking',
            'Quality Assurance'
          ],
          accelerators: ['Manufacturing', 'Government Compliance', 'Quality Control']
        }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      isDropdown: true,
      dropdownItems: [
        {
          name: 'About',
          href: '/about',
          icon: <InfoIcon />,
          description: 'Our mission'
        },
        {
          name: 'Reports & Research',
          href: '/reports',
          icon: <TrendingIcon />,
          description: '2025 Research Reports'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: <ContactIcon />,
          description: 'Get in touch'
        }
      ]
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b border-white/5">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Nainovate_GenX_Dark_Mode.svg"
              alt="Nainovate"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isDropdown ? (
                  <>
                    <button
                      className="text-sm hover:text-gray transition-colors py-2 uppercase tracking-wider flex items-center gap-1"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => {
                        if (item.name === 'Platform') window.location.href = item.href;
                        if (item.name === 'Solutions') window.location.href = item.href;
                        if (item.name === 'Decision Intelligence') window.location.href = item.href;
                      }}
                    >
                      {item.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* PLATFORM MEGA DROPDOWN - NEW 3-COLUMN LAYOUT */}
                    {item.isPlatformMega ? (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 ${activeDropdown === item.name ? 'block' : 'hidden'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-0 right-0 h-2" />

                        <div className="bg-black/95 backdrop-blur-md border-2 border-white/10 rounded-lg p-8 w-[900px]">
                          <div className="grid grid-cols-3 gap-8">

                            {/* COLUMN 1: PRODUCTS */}
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">PRODUCTS</p>
                              <Link
                                href="/platform"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group mb-2"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <PlatformIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-white group-hover:text-white transition-colors font-medium">
                                    GenX Platform
                                  </span>
                                  <span className="block text-xs text-gray-500 mt-1">
                                    Complete AI automation system
                                  </span>
                                </div>
                              </Link>

                              <div className="border-t border-white/10 my-3"></div>

                              <Link
                                href="/platform/core"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <CoreIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-white">CORE - AI Engine</span>
                                  <span className="block text-xs text-gray-500 mt-1">Create intelligent agents</span>
                                </div>
                              </Link>

                              <Link
                                href="/platform/nia"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <NiaIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-white">NIA - Interface</span>
                                  <span className="block text-xs text-gray-500 mt-1">Deploy conversational AI</span>
                                </div>
                              </Link>

                              <Link
                                href="/platform/flow"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <FlowIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-white">FLOW - Automation</span>
                                  <span className="block text-xs text-gray-500 mt-1">Orchestrate workflows</span>
                                </div>
                              </Link>
                            </div>

                            {/* COLUMN 2: FEATURES */}
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">FEATURES</p>

                              <Link
                                href="/platform/ai-engineering-tools"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <EngineeringIcon />
                                </span>
                                <span className="block text-sm text-white">AI Engineering Tools</span>
                              </Link>

                              <Link
                                href="/platform/search-data-ai"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <SearchIcon />
                                </span>
                                <span className="block text-sm text-white">Search + Data AI</span>
                              </Link>

                              <Link
                                href="/platform/security-governance"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <SecurityIcon />
                                </span>
                                <span className="block text-sm text-white">Security + Governance</span>
                              </Link>

                              <Link
                                href="/platform/development-tools"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <CodeIcon />
                                </span>
                                <span className="block text-sm text-white">No-Code + Pro-Code</span>
                              </Link>

                              <Link
                                href="/platform/integrations"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  <IntegrationsIcon />
                                </span>
                                <span className="block text-sm text-white">Integrations</span>
                              </Link>
                            </div>

                            {/* COLUMN 3: AI CENTER OF EXCELLENCE */}
                            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 border-2 border-white/20">
                              <div className="text-gray-400 mb-3">
                                <CoEIcon />
                              </div>
                              <h4 className="text-sm font-bold mb-2">AI Center of Excellence</h4>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                Built on McKinsey&apos;s 6 proven AI scaling lessons. Governance, orchestration, and trust in every workflow.
                              </p>

                              {/* Mini Hub-Spoke Visual */}
                              <div className="mb-4 py-4 border-y border-white/10">
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                  <span>GenX</span>
                                  <span>→</span>
                                  <span>CoE</span>
                                  <span>→</span>
                                  <span>6 Spokes</span>
                                </div>
                              </div>

                              <Link
                                href="/ai-center-of-excellence"
                                className="block text-xs font-medium text-white hover:text-gray-300 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Learn More About AI CoE →
                              </Link>
                            </div>

                          </div>
                        </div>
                      </div>
                    ) : item.isDIMega ? (
                      /* DECISION INTELLIGENCE MEGA DROPDOWN */
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 ${activeDropdown === item.name ? 'block' : 'hidden'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-0 right-0 h-2" />
                        <div className="bg-black/95 backdrop-blur-md border-2 border-white/10 rounded-lg p-8 w-[720px]">
                          <div className="grid grid-cols-2 gap-6">
                            <Link
                              href="/decision-intelligence"
                              className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/5 transition-colors group border border-white/10 col-span-2"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-gray-400 uppercase tracking-widest">Overview</span>
                              <span className="text-lg text-white font-bold">Decision Intelligence.</span>
                              <span className="text-xs text-gray-500">Explainable AI decision layer on top of Freshdesk, CRM, and knowledge bases.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/ai-agent"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-gray-400 uppercase tracking-widest">01</span>
                              <span className="text-sm text-white font-medium">AI Agent — Ask</span>
                              <span className="text-xs text-gray-500">Customer-facing chat in Freshdesk. Four scenarios.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/signal-chain"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-gray-400 uppercase tracking-widest">02</span>
                              <span className="text-sm text-white font-medium">Signal → Action Chain</span>
                              <span className="text-xs text-gray-500">Watchlists → Recommendations → Workflows.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/trace-audit"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-gray-400 uppercase tracking-widest">03</span>
                              <span className="text-sm text-white font-medium">Trace &amp; Audit</span>
                              <span className="text-xs text-gray-500">Every decision explainable. Legal-audit ready.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/coordination"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-gray-400 uppercase tracking-widest">04</span>
                              <span className="text-sm text-white font-medium">Coordination Center</span>
                              <span className="text-xs text-gray-500">Cross-team initiatives. One shared surface.</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : item.isSolutionsMega ? (
                      /* SOLUTIONS MEGA DROPDOWN - SIMPLE 3 COLUMN LAYOUT */
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 ${activeDropdown === item.name ? 'block' : 'hidden'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-0 right-0 h-2" />

                        <div className="bg-black/95 backdrop-blur-md border-2 border-white/10 rounded-lg shadow-2xl overflow-hidden">

                          {/* TRY DEMO BANNER */}
                          <Link
                            href="/demo"
                            className="flex items-center justify-center gap-3 px-6 py-4 border-b border-white/10 hover:bg-white/5 transition-all group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-lg">🖐️</span>
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                              Try it Live — Experience our AI solutions hands-on
                            </span>
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          </Link>

                          <div className="flex">
                            {/* AI FOR OPERATIONS Column */}
                            <div className="min-w-[280px] relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-white/10"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/operations"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-white">AI for Operations</span>
                                    <span className="block text-xs text-gray-500 mt-1">Automate internal workflows</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-gray-500 mb-1">HR Screening & Selection</p>
                                  <p className="text-xs text-gray-500 mb-1">BOQ Generation</p>
                                  <p className="text-xs text-gray-500 mb-1">Document Processing</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">HR</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Construction</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Enterprise Ops</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI FOR ENGAGEMENT Column */}
                            <div className="min-w-[280px] relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-white/10"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/engagement"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-white">AI for Engagement</span>
                                    <span className="block text-xs text-gray-500 mt-1">Scale customer interactions</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-gray-500 mb-1">Customer Service Bots</p>
                                  <p className="text-xs text-gray-500 mb-1">Citizen Portals</p>
                                  <p className="text-xs text-gray-500 mb-1">Multi-Channel Support</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Retail & Hospitality</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Government Services</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Client Support</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI FOR INTELLIGENCE Column */}
                            <div className="min-w-[280px] relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-white/10 hidden"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/intelligence"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-white">AI for Intelligence</span>
                                    <span className="block text-xs text-gray-500 mt-1">Transform data into insights</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-gray-500 mb-1">Analytics Dashboards</p>
                                  <p className="text-xs text-gray-500 mb-1">Process Monitoring</p>
                                  <p className="text-xs text-gray-500 mb-1">Compliance Tracking</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Manufacturing</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Government Compliance</span>
                                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-500">Quality Control</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* BY TEAM Column */}
                            <div className="min-w-[240px]">
                              <div className="py-2">
                                <div className="px-6 py-3">
                                  <p className="text-xs font-medium text-white uppercase tracking-widest mb-1">By Team</p>
                                  <p className="text-[10px] text-gray-500">Decision Intelligence in your workflow</p>
                                </div>
                                <Link
                                  href="/solutions/customer-support"
                                  className="block px-6 py-2 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-white">Customer Support</span>
                                  <span className="block text-[10px] text-gray-500">L1 deflection · L2 co-pilot · Support Head dashboards</span>
                                </Link>
                                <Link
                                  href="/solutions/customer-success"
                                  className="block px-6 py-2 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-white">Customer Success</span>
                                  <span className="block text-[10px] text-gray-500">Health-anchored watchlists · churn prevention</span>
                                </Link>
                                <Link
                                  href="/solutions/sales"
                                  className="block px-6 py-2 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-white">Sales</span>
                                  <span className="block text-[10px] text-gray-500">Pipeline aware of deployment reality</span>
                                </Link>
                                <Link
                                  href="/solutions/delivery"
                                  className="block px-6 py-2 hover:bg-white/5 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-white">Delivery</span>
                                  <span className="block text-[10px] text-gray-500">Milestone risk surfaced early</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* REGULAR DROPDOWN - RESOURCES */
                      <div
                        className={`absolute left-0 top-full pt-2 ${activeDropdown === item.name ? 'block' : 'hidden'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-0 right-0 h-2" />

                        <div className="bg-black/95 backdrop-blur-md border-2 border-white/10 rounded-lg py-2 min-w-[250px]">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-start gap-3 px-6 py-3 hover:bg-white/5 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon && (
                                <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                  {dropdownItem.icon}
                                </span>
                              )}
                              <div className="flex-1">
                                <span className="block text-sm text-white group-hover:text-white transition-colors">
                                  {dropdownItem.name}
                                </span>
                                {dropdownItem.description && (
                                  <span className="block text-xs text-gray-500 mt-1">
                                    {dropdownItem.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray transition-colors py-2 uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/contact">
              <button className="text-sm font-medium px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-all">
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.isDropdown ? (
                  <div>
                    <p className="text-sm font-medium text-gray uppercase tracking-wider py-2">
                      {item.name}
                    </p>
                    {item.isDIMega ? (
                      <div className="pl-4">
                        <Link href="/decision-intelligence" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Overview</Link>
                        <Link href="/decision-intelligence/ai-agent" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>AI Agent — Ask</Link>
                        <Link href="/decision-intelligence/signal-chain" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Signal → Action Chain</Link>
                        <Link href="/decision-intelligence/trace-audit" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Trace & Audit</Link>
                        <Link href="/decision-intelligence/coordination" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Coordination Center</Link>
                      </div>
                    ) : item.isPlatformMega ? (
                      <div className="pl-4">
                        <p className="text-xs text-gray-400 uppercase pt-3">Products</p>
                        <Link href="/platform" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>GenX Platform</Link>
                        <Link href="/platform/core" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>CORE - AI Engine</Link>
                        <Link href="/platform/nia" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>NIA - Interface</Link>
                        <Link href="/platform/flow" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>FLOW - Automation</Link>
                        <p className="text-xs text-gray-400 uppercase pt-3">Features</p>
                        <Link href="/platform/ai-engineering-tools" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>AI Engineering Tools</Link>
                        <Link href="/platform/search-data-ai" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Search + Data AI</Link>
                        <Link href="/platform/security-governance" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Security + Governance</Link>
                        <Link href="/platform/development-tools" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>No-Code + Pro-Code</Link>
                        <Link href="/platform/integrations" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Integrations</Link>
                        <p className="text-xs text-gray-400 uppercase pt-3">Center of Excellence</p>
                        <Link href="/ai-center-of-excellence" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>AI CoE</Link>
                      </div>
                    ) : (
                      <div className="pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2 text-sm hover:text-gray transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                        {item.solutionCards?.map((card) => (
                          <Link
                            key={card.title}
                            href={card.href}
                            className="block py-2 text-sm hover:text-gray transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {card.title}
                          </Link>
                        ))}
                        {item.isSolutionsMega && (
                          <>
                            <p className="text-xs text-gray-400 uppercase pt-3">By Team</p>
                            <Link href="/solutions/customer-support" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Customer Support</Link>
                            <Link href="/solutions/customer-success" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Customer Success</Link>
                            <Link href="/solutions/sales" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Sales</Link>
                            <Link href="/solutions/delivery" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>Delivery</Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm hover:text-gray transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="text-sm font-medium px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-all mt-4 w-full">
                GET STARTED
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}