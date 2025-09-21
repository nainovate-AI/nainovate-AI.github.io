import { Button } from '@/components/ui/Button';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate AI Solutions - Property Intelligence Platform | Nainovate',
  description: 'AI for real estate: 50% faster valuations, 92% market prediction accuracy. Automate property analysis, lead qualification, document processing. 3x conversion rates.',
  keywords: 'real estate AI, property valuation AI, market analysis AI, lead qualification automation, real estate technology',
  openGraph: {
    title: 'Real Estate AI Solutions - Intelligent Property Decisions',
    description: 'Make faster, data-driven real estate decisions with AI. 50% faster closings.'
  },
};

export default function RealEstateSolutionPage() {
  return (
    <main className="bg-black pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              REAL ESTATE SOLUTIONS
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">PROPERTY</span>
              <span className="block text-gray">INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-12">
              AI agents that analyze properties, predict market trends, and automate 
              valuations. Make faster, data-driven real estate decisions.
            </p>
            <div className="flex gap-8">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Request Demo
              </Button>
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">USE CASES</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Property Valuation</h3>
              <p className="text-gray mb-6">
                Instant, accurate property valuations based on market data, 
                comparable sales, and predictive analytics.
              </p>
              <p className="text-sm text-gray">→ 50% faster valuations</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Market Analysis</h3>
              <p className="text-gray mb-6">
                Real-time market insights, trend predictions, and investment 
                opportunities identification across regions.
              </p>
              <p className="text-sm text-gray">→ 92% prediction accuracy</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Document Processing</h3>
              <p className="text-gray mb-6">
                Automate lease agreements, purchase contracts, and compliance 
                documents. Extract key terms instantly.
              </p>
              <p className="text-sm text-gray">→ 80% time reduction</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Lead Qualification</h3>
              <p className="text-gray mb-6">
                AI agents that qualify leads, match properties to buyers, 
                and prioritize high-value opportunities.
              </p>
              <p className="text-sm text-gray">→ 3x conversion rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">KEY FEATURES</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">MLS Integration</h3>
              <p className="text-gray">Direct connection to Multiple Listing Services for real-time data.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Computer Vision</h3>
              <p className="text-gray">Analyze property images to assess condition and features.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Market Prediction</h3>
              <p className="text-gray">AI models trained on decades of market data for accurate forecasts.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">CRM Integration</h3>
              <p className="text-gray">Works with Salesforce, HubSpot, and industry-specific CRMs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Virtual Tours</h3>
              <p className="text-gray">AI-powered virtual property tours and staging recommendations.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Compliance</h3>
              <p className="text-gray">Automated compliance checks for fair housing and regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">PROVEN RESULTS</h2>
              <p className="text-xl text-gray mb-12">
                Real estate firms using our AI close deals faster, reduce operational 
                costs, and make better investment decisions.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Calculate Your ROI →
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">50%</p>
                <p className="text-gray">Faster closings</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">3x</p>
                <p className="text-gray">More leads</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">92%</p>
                <p className="text-gray">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">25%</p>
                <p className="text-gray">Cost reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-6xl font-bold mb-8">
            TRANSFORM REAL ESTATE WITH AI
          </h2>
          <p className="text-xl text-gray mb-12 max-w-2xl mx-auto">
            Join leading real estate firms already using GenX to revolutionize property transactions.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg">
            Schedule Real Estate Demo →
          </Button>
        </div>
      </section>
    </main>
  );
}