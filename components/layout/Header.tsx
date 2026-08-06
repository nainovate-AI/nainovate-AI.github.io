'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useDemoGate } from '@/components/ui/DemoGate';

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
  const { requestDemo, gateModal } = useDemoGate();

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
    <header className="fixed top-0 w-full z-50 nav-glass border-b border-border">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 md:py-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Nainovate GenX">
            <Image
              src="/images/Nainovate_Dark_Mode.svg"
              alt="Nainovate GenX"
              width={150}
              height={40}
              className="h-8 w-auto logo-dark"
              priority
              unoptimized
            />
            <Image
              src="/images/Nainovate_Genx_Light_Mode.svg"
              alt="Nainovate GenX"
              width={150}
              height={40}
              className="h-8 w-auto logo-light"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isDropdown ? (
                  <>
                    <button
                      className="text-[12.5px] font-medium text-fg-mid hover:text-fg-strong transition-colors duration-300 py-2 uppercase tracking-[0.14em] flex items-center gap-1"
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

                        <div className="bg-bg-elevated backdrop-blur-md shadow-lg border border-border rounded-xl2 p-6 md:p-8 w-[min(900px,calc(100vw-2rem))]">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                            {/* COLUMN 1: PRODUCTS */}
                            <div>
                              <p className="text-xs text-fg-muted uppercase tracking-wider mb-4">PRODUCTS</p>
                              <Link
                                href="/platform"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-surface-2 transition-colors group mb-2"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <PlatformIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-fg-strong group-hover:text-fg-strong transition-colors font-medium">
                                    GenX Platform
                                  </span>
                                  <span className="block text-xs text-fg-subtle mt-1">
                                    Complete AI automation system
                                  </span>
                                </div>
                              </Link>

                              <div className="border-t border-border my-3"></div>

                              <Link
                                href="/platform/core"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <CoreIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-fg-strong">CORE - AI Engine</span>
                                  <span className="block text-xs text-fg-subtle mt-1">Create intelligent agents</span>
                                </div>
                              </Link>

                              <Link
                                href="/platform/nia"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <NiaIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-fg-strong">NIA - Interface</span>
                                  <span className="block text-xs text-fg-subtle mt-1">Deploy conversational AI</span>
                                </div>
                              </Link>

                              <Link
                                href="/platform/flow"
                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <FlowIcon />
                                </span>
                                <div className="flex-1">
                                  <span className="block text-sm text-fg-strong">FLOW - Automation</span>
                                  <span className="block text-xs text-fg-subtle mt-1">Orchestrate workflows</span>
                                </div>
                              </Link>
                            </div>

                            {/* COLUMN 2: FEATURES */}
                            <div>
                              <p className="text-xs text-fg-muted uppercase tracking-wider mb-4">FEATURES</p>

                              <Link
                                href="/platform/ai-engineering-tools"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <EngineeringIcon />
                                </span>
                                <span className="block text-sm text-fg-strong">AI Engineering Tools</span>
                              </Link>

                              <Link
                                href="/platform/search-data-ai"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <SearchIcon />
                                </span>
                                <span className="block text-sm text-fg-strong">Search + Data AI</span>
                              </Link>

                              <Link
                                href="/platform/security-governance"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <SecurityIcon />
                                </span>
                                <span className="block text-sm text-fg-strong">Security + Governance</span>
                              </Link>

                              <Link
                                href="/platform/development-tools"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <CodeIcon />
                                </span>
                                <span className="block text-sm text-fg-strong">No-Code + Pro-Code</span>
                              </Link>

                              <Link
                                href="/platform/integrations"
                                className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-surface-2 transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  <IntegrationsIcon />
                                </span>
                                <span className="block text-sm text-fg-strong">Integrations</span>
                              </Link>
                            </div>

                            {/* COLUMN 3: AI CENTER OF EXCELLENCE */}
                            <div className="bg-gradient-to-br from-surface-2 to-surface-hover rounded-lg p-6 border-2 border-border-strong">
                              <div className="text-fg-muted mb-3">
                                <CoEIcon />
                              </div>
                              <h4 className="text-sm font-bold mb-2">AI Center of Excellence</h4>
                              <p className="text-xs text-fg-muted leading-relaxed mb-4">
                                Built on McKinsey&apos;s 6 proven AI scaling lessons. Governance, orchestration, and trust in every workflow.
                              </p>

                              {/* Mini Hub-Spoke Visual */}
                              <div className="mb-4 py-4 border-y border-border">
                                <div className="flex items-center justify-center gap-2 text-xs text-fg-subtle">
                                  <span>GenX</span>
                                  <span>→</span>
                                  <span>CoE</span>
                                  <span>→</span>
                                  <span>6 Spokes</span>
                                </div>
                              </div>

                              <Link
                                href="/ai-center-of-excellence"
                                className="block text-xs font-medium text-fg-strong hover:text-fg-strong transition-colors"
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
                        <div className="bg-bg-elevated backdrop-blur-md shadow-lg border border-border rounded-xl2 p-6 md:p-8 w-[min(720px,calc(100vw-2rem))]">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Link
                              href="/decision-intelligence"
                              className="flex flex-col gap-2 p-4 rounded-lg hover:bg-surface-2 transition-colors group border border-border col-span-2"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-fg-muted uppercase tracking-widest">Overview</span>
                              <span className="text-lg text-fg-strong font-bold">Decision Intelligence.</span>
                              <span className="text-xs text-fg-subtle">Explainable AI decision layer on top of the Incident Management Tool, CRM, and knowledge bases.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/ai-agent"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-surface-2 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-fg-muted uppercase tracking-widest">01</span>
                              <span className="text-sm text-fg-strong font-medium">AI Agent — Ask</span>
                              <span className="text-xs text-fg-subtle">Customer-facing chat in the Incident Management Tool. Four scenarios.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/signal-chain"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-surface-2 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-fg-muted uppercase tracking-widest">02</span>
                              <span className="text-sm text-fg-strong font-medium">Signal → Action Chain</span>
                              <span className="text-xs text-fg-subtle">Watchlists → Recommendations → Workflows.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/trace-audit"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-surface-2 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-fg-muted uppercase tracking-widest">03</span>
                              <span className="text-sm text-fg-strong font-medium">Trace &amp; Audit</span>
                              <span className="text-xs text-fg-subtle">Every decision explainable. Legal-audit ready.</span>
                            </Link>
                            <Link
                              href="/decision-intelligence/coordination"
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-surface-2 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-xs text-fg-muted uppercase tracking-widest">04</span>
                              <span className="text-sm text-fg-strong font-medium">Coordination Center</span>
                              <span className="text-xs text-fg-subtle">Cross-team initiatives. One shared surface.</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : item.isSolutionsMega ? (
                      /* SOLUTIONS MEGA DROPDOWN - SIMPLE 3 COLUMN LAYOUT */
                      <div
                        className={`absolute right-0 top-full pt-2 ${activeDropdown === item.name ? 'block' : 'hidden'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="absolute -top-2 left-0 right-0 h-2" />

                        <div className="bg-bg-elevated backdrop-blur-md shadow-lg border border-border rounded-xl2 shadow-lg overflow-hidden w-[min(1120px,calc(100vw-2rem))]">

                          {/* TRY DEMO BANNER */}
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown(null);
                              requestDemo('/demo');
                            }}
                            className="flex items-center justify-center gap-3 px-6 py-4 border-b border-border hover:bg-surface-2 transition-all group w-full"
                          >
                            <span className="text-lg">🖐️</span>
                            <span className="text-sm text-fg-muted group-hover:text-fg-strong transition-colors">
                              Try it Live — Experience our AI solutions hands-on
                            </span>
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          </button>

                          <div className="flex flex-wrap lg:flex-nowrap">
                            {/* AI FOR OPERATIONS Column */}
                            <div className="min-w-0 md:min-w-[240px] lg:min-w-[260px] flex-1 md:flex-none md:basis-[240px] lg:basis-auto relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-surface-2"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/operations"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-fg-strong">AI for Operations</span>
                                    <span className="block text-xs text-fg-subtle mt-1">Automate internal workflows</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-fg-subtle mb-1">HR Screening & Selection</p>
                                  <p className="text-xs text-fg-subtle mb-1">BOQ Generation</p>
                                  <p className="text-xs text-fg-subtle mb-1">Document Processing</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">HR</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Construction</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Enterprise Ops</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI FOR ENGAGEMENT Column */}
                            <div className="min-w-0 md:min-w-[240px] lg:min-w-[260px] flex-1 md:flex-none md:basis-[240px] lg:basis-auto relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-surface-2"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/engagement"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-fg-strong">AI for Engagement</span>
                                    <span className="block text-xs text-fg-subtle mt-1">Scale customer interactions</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-fg-subtle mb-1">Customer Service Bots</p>
                                  <p className="text-xs text-fg-subtle mb-1">Citizen Portals</p>
                                  <p className="text-xs text-fg-subtle mb-1">Multi-Channel Support</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Retail & Hospitality</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Government Services</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Client Support</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* AI FOR INTELLIGENCE Column */}
                            <div className="min-w-0 md:min-w-[240px] lg:min-w-[260px] flex-1 md:flex-none md:basis-[240px] lg:basis-auto relative">
                              <div className="absolute right-0 top-6 bottom-6 w-[2px] bg-surface-2 hidden"></div>
                              <div className="py-2">
                                <Link
                                  href="/solutions/intelligence"
                                  className="flex items-start gap-3 px-6 py-3 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                  </span>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-fg-strong">AI for Intelligence</span>
                                    <span className="block text-xs text-fg-subtle mt-1">Transform data into insights</span>
                                  </div>
                                </Link>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Products</p>
                                  <p className="text-xs text-fg-subtle mb-1">Analytics Dashboards</p>
                                  <p className="text-xs text-fg-subtle mb-1">Process Monitoring</p>
                                  <p className="text-xs text-fg-subtle mb-1">Compliance Tracking</p>
                                </div>

                                <div className="px-6 py-2">
                                  <p className="text-[10px] font-semibold text-fg-subtle uppercase tracking-wider mb-2">Accelerators</p>
                                  <div className="flex flex-wrap gap-1">
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Manufacturing</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Government Compliance</span>
                                    <span className="text-[10px] px-2 py-1 bg-surface-2 rounded text-fg-subtle">Quality Control</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* BY TEAM Column */}
                            <div className="min-w-0 md:min-w-[220px] lg:min-w-[240px] flex-1 md:flex-none">
                              <div className="py-2">
                                <div className="px-6 py-3">
                                  <p className="text-xs font-medium text-fg-strong uppercase tracking-widest mb-1">By Team</p>
                                  <p className="text-[10px] text-fg-subtle">Decision Intelligence in your workflow</p>
                                </div>
                                <Link
                                  href="/solutions/customer-support"
                                  className="block px-6 py-2 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-fg-strong">Customer Support</span>
                                  <span className="block text-[10px] text-fg-subtle">L1 deflection · L2 co-pilot · Support Head dashboards</span>
                                </Link>
                                <Link
                                  href="/solutions/customer-success"
                                  className="block px-6 py-2 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-fg-strong">Customer Success</span>
                                  <span className="block text-[10px] text-fg-subtle">Health-anchored watchlists · churn prevention</span>
                                </Link>
                                <Link
                                  href="/solutions/sales"
                                  className="block px-6 py-2 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-fg-strong">Sales</span>
                                  <span className="block text-[10px] text-fg-subtle">Pipeline aware of deployment reality</span>
                                </Link>
                                <Link
                                  href="/solutions/delivery"
                                  className="block px-6 py-2 hover:bg-surface-2 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="block text-sm text-fg-strong">Delivery</span>
                                  <span className="block text-[10px] text-fg-subtle">Milestone risk surfaced early</span>
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

                        <div className="bg-bg-elevated backdrop-blur-md shadow-lg border border-border rounded-xl2 py-2 min-w-[250px]">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-start gap-3 px-6 py-3 hover:bg-surface-2 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon && (
                                <span className="text-fg-muted group-hover:text-fg-strong transition-colors mt-1">
                                  {dropdownItem.icon}
                                </span>
                              )}
                              <div className="flex-1">
                                <span className="block text-sm text-fg-strong group-hover:text-fg-strong transition-colors">
                                  {dropdownItem.name}
                                </span>
                                {dropdownItem.description && (
                                  <span className="block text-xs text-fg-subtle mt-1">
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
                    className="text-[12.5px] font-medium text-fg-mid hover:text-fg-strong transition-colors duration-300 py-2 uppercase tracking-[0.14em]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 text-[12.5px] font-semibold px-5 py-2.5 rounded-full bg-fg-strong text-fg-invert border border-fg-strong hover:bg-transparent hover:text-fg-strong transition-all duration-300 tracking-[0.14em] uppercase">
                <span>Get Started</span>
                <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
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
          <div className="md:hidden pb-8 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <ul className="divide-y divide-border">
              {navigation.map((item) => (
                <li key={item.name} className="py-4">
                  {item.isDropdown ? (
                    <div>
                      <p className="text-[11px] font-semibold text-fg-muted uppercase tracking-[0.18em] mb-3">
                        {item.name}
                      </p>
                      {item.isDIMega ? (
                        <ul className="space-y-0.5">
                          <li><Link href="/decision-intelligence" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Overview</Link></li>
                          <li><Link href="/decision-intelligence/ai-agent" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>AI Agent — Ask</Link></li>
                          <li><Link href="/decision-intelligence/signal-chain" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Signal → Action Chain</Link></li>
                          <li><Link href="/decision-intelligence/trace-audit" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Trace & Audit</Link></li>
                          <li><Link href="/decision-intelligence/coordination" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Coordination Center</Link></li>
                        </ul>
                      ) : item.isPlatformMega ? (
                        <div className="space-y-5">
                          <div>
                            <p className="text-[10px] font-semibold text-fg-faint uppercase tracking-[0.2em] mb-2">Products</p>
                            <ul className="space-y-0.5">
                              <li><Link href="/platform" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>GenX Platform</Link></li>
                              <li><Link href="/platform/core" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>CORE — AI Engine</Link></li>
                              <li><Link href="/platform/nia" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>NIA — Interface</Link></li>
                              <li><Link href="/platform/flow" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>FLOW — Automation</Link></li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-fg-faint uppercase tracking-[0.2em] mb-2">Features</p>
                            <ul className="space-y-0.5">
                              <li><Link href="/platform/ai-engineering-tools" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>AI Engineering Tools</Link></li>
                              <li><Link href="/platform/search-data-ai" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Search + Data AI</Link></li>
                              <li><Link href="/platform/security-governance" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Security + Governance</Link></li>
                              <li><Link href="/platform/development-tools" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>No-Code + Pro-Code</Link></li>
                              <li><Link href="/platform/integrations" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Integrations</Link></li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-fg-faint uppercase tracking-[0.2em] mb-2">Center of Excellence</p>
                            <ul className="space-y-0.5">
                              <li><Link href="/ai-center-of-excellence" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>AI CoE</Link></li>
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <ul className="space-y-0.5">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <Link
                                href={dropdownItem.href}
                                className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                          {item.solutionCards?.map((card) => (
                            <li key={card.title}>
                              <Link
                                href={card.href}
                                className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {card.title}
                              </Link>
                            </li>
                          ))}
                          {item.isSolutionsMega && (
                            <li className="pt-3">
                              <p className="text-[10px] font-semibold text-fg-faint uppercase tracking-[0.2em] mb-2">By Team</p>
                              <ul className="space-y-0.5">
                                <li><Link href="/solutions/customer-support" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Customer Support</Link></li>
                                <li><Link href="/solutions/customer-success" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Customer Success</Link></li>
                                <li><Link href="/solutions/sales" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Sales</Link></li>
                                <li><Link href="/solutions/delivery" className="block py-2.5 text-[15px] text-fg hover:text-brand transition-colors" onClick={() => setIsMenuOpen(false)}>Delivery</Link></li>
                              </ul>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-[13px] font-semibold text-fg-strong hover:text-brand transition-colors uppercase tracking-[0.18em]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="text-sm font-semibold tracking-[0.12em] uppercase px-6 py-3 border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all mt-6 w-full">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </nav>
      {gateModal}
    </header>
  );
}