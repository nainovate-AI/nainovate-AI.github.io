import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Footer() {
  return (
    <footer className="border-t border-border-strong">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        {/* Top Section - Multi-Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 mb-10 md:mb-16">
          
          {/* COLUMN 1: SOLUTIONS */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-sm">SOLUTIONS</h4>
            <div className="space-y-3">
              <Link href="/solutions/operations" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI for Operations</Link>
              <Link href="/solutions/engagement" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI for Engagement</Link>
              <Link href="/solutions/intelligence" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI for Intelligence</Link>
              <Link href="/ai-center-of-excellence" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI CoE Services</Link>
            </div>
          </div>

          {/* COLUMN 2: PLATFORM */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-sm">PLATFORM</h4>
            <div className="space-y-3">
              <Link href="/platform" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">GenX Platform</Link>
              <Link href="/platform/core" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">CORE - AI Engine</Link>
              <Link href="/platform/nia" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">NIA - Interface</Link>
              <Link href="/platform/flow" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">FLOW - Automation</Link>
            </div>
          </div>

          {/* COLUMN 3: FEATURES */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-sm">FEATURES</h4>
            <div className="space-y-3">
              <Link href="/platform/ai-engineering-tools" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI Engineering Tools</Link>
              <Link href="/platform/search-data-ai" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Search + Data AI</Link>
              <Link href="/platform/security-governance" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Security + Governance</Link>
              <Link href="/platform/development-tools" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Development Tools</Link>
              <Link href="/platform/integrations" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Integrations</Link>
            </div>
          </div>

          {/* COLUMN 4: COMPANY */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-sm">COMPANY</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">About Nainovate</Link>
              <Link href="/about#leadership" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Leadership</Link>
              <Link href="/about#partners" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Partners</Link>
              <Link href="/contact" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Contact Us</Link>
            </div>
          </div>

          {/* COLUMN 5: RESOURCES */}
          <div>
            <h4 className="font-medium mb-4 md:mb-6 text-sm">RESOURCES</h4>
            <div className="space-y-3">
              <Link href="/reports" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Reports & Research</Link>
              <Link href="/ai-implementation-index" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">Implementation Index</Link>
              <Link href="/ai-readiness-report-2025" className="block text-fg-muted hover:text-fg-strong transition-colors text-sm">AI Readiness Report</Link>
              <Link href="/demo" className="inline-flex items-center gap-2 text-fg-muted hover:text-fg-strong transition-colors text-sm">
                Try Demo
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </Link>
            </div>
          </div>

          {/* COLUMN 6: CTA BOX */}
          <div className="self-start border border-border-strong rounded-lg p-6 bg-surface-2">
            <div className="mb-4">
              <svg className="w-8 h-8 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2 text-sm">Let&apos;s work together</h4>
            <p className="text-xs text-fg-muted mb-4">
              Get answers and a customized quote for your projects
            </p>
            <Link href="/contact">
              <button className="w-full text-xs font-medium px-4 py-2 border border-fg-strong hover:bg-fg-strong hover:text-fg-invert transition-all">
                CONTACT SALES →
              </button>
            </Link>
          </div>

        </div>

        {/* Middle Section - Logo + tagline */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-border-strong">
          <div className="flex items-center gap-4">
            <img
              src="/images/Nainovate_Dark_Mode.svg"
              alt="Nainovate Logo"
              className="h-8 logo-dark"
            />
            <img
              src="/images/Nainovate_Genx_Light_Mode.svg"
              alt="Nainovate Logo"
              className="h-8 logo-light"
            />
            <p className="text-sm text-fg-muted">
              Enterprise AI agents that deliver results. Built with GenX.
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright + Theme + QR on shared axis */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-fg-muted">
            © 2025 Nainovate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <img
              src="/images/QR Code.png"
              alt="Nainovate QR Code"
              className="w-16 h-16 bg-fg-strong p-1 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}