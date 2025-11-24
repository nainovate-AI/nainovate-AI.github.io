import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-dark">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Top Section - Multi-Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          
          {/* COLUMN 1: SOLUTIONS */}
          <div>
            <h4 className="font-medium mb-6 text-sm">SOLUTIONS</h4>
            <div className="space-y-3">
              <Link href="/solutions/operations" className="block text-gray hover:text-white transition-colors text-sm">AI for Operations</Link>
              <Link href="/solutions/engagement" className="block text-gray hover:text-white transition-colors text-sm">AI for Engagement</Link>
              <Link href="/solutions/intelligence" className="block text-gray hover:text-white transition-colors text-sm">AI for Intelligence</Link>
              <Link href="/ai-center-of-excellence" className="block text-gray hover:text-white transition-colors text-sm">AI CoE Services</Link>
            </div>
          </div>

          {/* COLUMN 2: PLATFORM */}
          <div>
            <h4 className="font-medium mb-6 text-sm">PLATFORM</h4>
            <div className="space-y-3">
              <Link href="/products" className="block text-gray hover:text-white transition-colors text-sm">GenX Platform</Link>
              <Link href="/products/core" className="block text-gray hover:text-white transition-colors text-sm">CORE - AI Engine</Link>
              <Link href="/products/nia" className="block text-gray hover:text-white transition-colors text-sm">NIA - Interface</Link>
              <Link href="/products/flow" className="block text-gray hover:text-white transition-colors text-sm">FLOW - Automation</Link>
            </div>
          </div>

          {/* COLUMN 3: FEATURES */}
          <div>
            <h4 className="font-medium mb-6 text-sm">FEATURES</h4>
            <div className="space-y-3">
              <Link href="/platform/ai-engineering-tools" className="block text-gray hover:text-white transition-colors text-sm">AI Engineering Tools</Link>
              <Link href="/platform/search-data-ai" className="block text-gray hover:text-white transition-colors text-sm">Search + Data AI</Link>
              <Link href="/platform/security-governance" className="block text-gray hover:text-white transition-colors text-sm">Security + Governance</Link>
              <Link href="/platform/development-tools" className="block text-gray hover:text-white transition-colors text-sm">Development Tools</Link>
              <Link href="/platform/integrations" className="block text-gray hover:text-white transition-colors text-sm">Integrations</Link>
            </div>
          </div>

          {/* COLUMN 4: COMPANY */}
          <div>
            <h4 className="font-medium mb-6 text-sm">COMPANY</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray hover:text-white transition-colors text-sm">About Nainovate</Link>
              <Link href="/about#leadership" className="block text-gray hover:text-white transition-colors text-sm">Leadership</Link>
              <Link href="/about#partners" className="block text-gray hover:text-white transition-colors text-sm">Partners</Link>
              <Link href="/contact" className="block text-gray hover:text-white transition-colors text-sm">Contact Us</Link>
            </div>
          </div>

          {/* COLUMN 5: RESOURCES */}
          <div>
            <h4 className="font-medium mb-6 text-sm">RESOURCES</h4>
            <div className="space-y-3">
              <Link href="/reports" className="block text-gray hover:text-white transition-colors text-sm">Reports & Research</Link>
              <Link href="/ai-implementation-index" className="block text-gray hover:text-white transition-colors text-sm">Implementation Index</Link>
              <Link href="/demo" className="inline-flex items-center gap-2 text-gray hover:text-white transition-colors text-sm">
                Try Demo
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </Link>
            </div>
          </div>

          {/* COLUMN 6: CTA BOX */}
          <div className="border border-white/20 rounded-lg p-6 bg-white/5">
            <div className="mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2 text-sm">Let&apos;s work together</h4>
            <p className="text-xs text-gray mb-4">
              Get answers and a customized quote for your projects
            </p>
            <Link href="/contact">
              <button className="w-full text-xs font-medium px-4 py-2 border border-white hover:bg-white hover:text-black transition-all">
                SCHEDULE DEMO →
              </button>
            </Link>
          </div>

        </div>

        {/* Middle Section - Logo + QR Code */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-b border-gray-dark mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img
              src="/images/Nainovate_Dark_Mode.svg"
              alt="Nainovate Logo"
              className="h-8"
            />
            <p className="text-sm text-gray">
              Enterprise AI agents that deliver results. Built with GenX.
            </p>
          </div>
          <div>
            <img
              src="/images/QR Code.png"
              alt="Nainovate QR Code"
              className="w-16 h-16 bg-white p-1 rounded"
            />
          </div>
        </div>

        {/* Bottom Section - Copyright + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray">
            © 2025 Nainovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}