'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CTALink } from '@/components/ui/CTA';
import { GatedDemoLink, useDemoGate } from '@/components/ui/DemoGate';
// import { ThemeToggle } from '@/components/ui/ThemeToggle';
// ThemeToggle temporarily hidden — dark theme only for now.
// Re-enable by uncommenting the import + <ThemeToggle /> below.

type LinkGroup = {
  heading: string;
  accent: string; // rgb triplet
  items: { label: string; href: string; external?: boolean; badge?: 'live' }[];
};

const groups: LinkGroup[] = [
  {
    heading: 'Solutions',
    accent: '139, 92, 246',
    items: [
      { label: 'AI for Operations', href: '/solutions/operations' },
      { label: 'AI for Engagement', href: '/solutions/engagement' },
      { label: 'AI for Intelligence', href: '/solutions/intelligence' },
      { label: 'AI CoE Services', href: '/ai-center-of-excellence' },
    ],
  },
  {
    heading: 'Decision Intelligence',
    accent: '34, 211, 238',
    items: [
      { label: 'Overview', href: '/decision-intelligence' },
      { label: 'AI Agent — Ask', href: '/decision-intelligence/ai-agent' },
      { label: 'Signal → Action Chain', href: '/decision-intelligence/signal-chain' },
      { label: 'Trace & Audit', href: '/decision-intelligence/trace-audit' },
      { label: 'Coordination Center', href: '/decision-intelligence/coordination' },
    ],
  },
  {
    heading: 'Platform',
    accent: '236, 72, 153',
    items: [
      { label: 'GenX Platform', href: '/platform' },
      { label: 'CORE — AI Engine', href: '/platform/core' },
      { label: 'NIA — Interface', href: '/platform/nia' },
      { label: 'FLOW — Automation', href: '/platform/flow' },
    ],
  },
  {
    heading: 'Features',
    accent: '16, 185, 129',
    items: [
      { label: 'AI Engineering Tools', href: '/platform/ai-engineering-tools' },
      { label: 'Search + Data AI', href: '/platform/search-data-ai' },
      { label: 'Security + Governance', href: '/platform/security-governance' },
      { label: 'Development Tools', href: '/platform/development-tools' },
      { label: 'Integrations', href: '/platform/integrations' },
    ],
  },
  {
    heading: 'Company',
    accent: '99, 102, 241',
    items: [
      { label: 'About Nainovate', href: '/about' },
      { label: 'Teams', href: '/teams' },
      { label: 'Leadership', href: '/teams#leadership' },
      { label: 'Partners', href: '/about#partners' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    accent: '251, 146, 60',
    items: [
      { label: 'Reports & Research', href: '/reports' },
      { label: 'Implementation Index', href: '/ai-implementation-index' },
      { label: 'AI Readiness Report', href: '/ai-readiness-report-2025' },
      { label: 'Try Demo', href: '/demo', badge: 'live' },
    ],
  },
];

export function Footer() {
  const { requestDemo, gateModal } = useDemoGate();
  return (
    <footer className="relative border-t border-border-strong overflow-hidden">
      {/* Aurora ambient backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 10% 20%, rgba(139,92,246,0.10), transparent 55%), radial-gradient(ellipse at 90% 60%, rgba(34,211,238,0.08), transparent 55%), radial-gradient(ellipse at 40% 90%, rgba(236,72,153,0.08), transparent 55%)',
          }}
        />
      </div>

      <Container size="wide" className="relative">
        {/* Editorial closing statement — display type with gradient */}
        <div className="pt-16 md:pt-24 pb-14 md:pb-20 grid lg:grid-cols-12 gap-8 lg:gap-16 items-end border-b border-border">
          <div className="lg:col-span-8">
            <Eyebrow tone="muted" withDot className="mb-6">
              Let&apos;s work together
            </Eyebrow>
            <p className="text-h2 leading-[1.1] tracking-[-0.02em]">
              <span className="block text-fg-strong">Build enterprise AI</span>
              <span className="block text-gradient-aurora">that actually ships.</span>
            </p>
          </div>
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border flex flex-col gap-6">
            <p className="text-body-lg text-fg-mid leading-relaxed">
              Get answers and a customized quote for your projects.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <CTALink href="/contact" variant="solid" size="md" arrow>
                Contact Sales
              </CTALink>
              <GatedDemoLink href="/demo" variant="outline" size="md" arrow>
                Try Demo
              </GatedDemoLink>
            </div>
          </div>
        </div>

        {/* Link groups — accented per column */}
        <nav aria-label="Footer" className="py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {groups.map((group) => (
              <div key={group.heading}>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `rgb(${group.accent})`,
                      boxShadow: `0 0 8px rgba(${group.accent},0.7)`,
                    }}
                  />
                  <h3 className="text-eyebrow text-fg-strong">{group.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => {
                    const isDemo = item.href.startsWith('/demo');
                    const linkClass =
                      'group inline-flex items-center gap-2 text-body-sm text-fg-muted transition-colors duration-300';
                    const onEnter = (e: React.MouseEvent | React.FocusEvent) => {
                      (e.currentTarget as HTMLElement).style.color = `rgb(${group.accent})`;
                    };
                    const onLeave = (e: React.MouseEvent | React.FocusEvent) => {
                      (e.currentTarget as HTMLElement).style.color = '';
                    };
                    const inner = (
                      <>
                        <span>{item.label}</span>
                        {item.badge === 'live' && (
                          <span className="relative inline-flex w-1.5 h-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping" style={{ background: '#10b981' }} />
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
                          </span>
                        )}
                        <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                          →
                        </span>
                      </>
                    );

                    return (
                      <li key={item.href}>
                        {isDemo ? (
                          <button
                            type="button"
                            onClick={() => requestDemo(item.href)}
                            className={linkClass}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                          >
                            {inner}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={linkClass}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                          >
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Meta row */}
        <div className="border-t border-border py-8 md:py-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/images/Nainovate_Dark_Mode.svg"
                alt="Nainovate"
                className="h-7 logo-dark"
              />
              <img
                src="/images/Nainovate_Genx_Light_Mode.svg"
                alt="Nainovate"
                className="h-7 logo-light"
              />
            </div>
            <p className="text-body-sm text-fg-muted">
              Enterprise AI agents that deliver results. <span className="text-gradient-indigo-cyan font-semibold">Built with GenX.</span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            {/* <ThemeToggle /> */}
            <p className="text-body-sm text-fg-muted">
              © 2025 Nainovate. All rights reserved.
            </p>
            <motion.img
              src="/images/QR Code.png"
              alt="Nainovate QR Code"
              className="w-14 h-14 bg-fg-strong p-1 rounded-md"
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            />
          </div>
        </div>
      </Container>
      {gateModal}
    </footer>
  );
}
