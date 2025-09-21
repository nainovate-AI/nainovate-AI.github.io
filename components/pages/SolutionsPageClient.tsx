'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SolutionsPageClient() {
  return (
    <main className="pt-20 relative z-10">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
              AI SOLUTIONS
            </p>
            <h1 className="text-[clamp(4rem,5vw,8rem)] font-bold leading-[0.85] tracking-[0.02em] mb-8">
              <span className="block">TRANSFORM EVERY STAGE</span>
              <span className="block mt-4">OF YOUR BUSINESS</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
              From strategic planning to smart procurement to flawless execution — 
              our AI agents revolutionize how businesses operate, regardless of industry.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20 text-center">
            COMPLETE BUSINESS TRANSFORMATION
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-px bg-white/10">
            {/* Planning */}
            <div id="planning" className="bg-black p-12 group hover:bg-white/[0.02] transition-colors">
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray/20 mb-4">01</div>
                <h3 className="text-3xl font-bold mb-4">PLANNING</h3>
                <p className="text-gray text-lg mb-8">
                  Streamline your planning phase with AI-powered document generation and analysis
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">BOQ Generation Agent</h4>
                  <p className="text-sm text-gray">Automatically generate Bills of Quantities from architectural drawings and specifications</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Planning Agent</h4>
                  <p className="text-sm text-gray">Create detailed project timelines and milestone tracking</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Document Analysis Agent</h4>
                  <p className="text-sm text-gray">Extract key insights from RFPs, contracts, and planning documents</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <Button className="text-sm group-hover:bg-white group-hover:text-black transition-all">
                  Explore Planning Solutions →
                </Button>
              </div>
            </div>

            {/* Procurement */}
            <div id="procurement" className="bg-black p-12 group hover:bg-white/[0.02] transition-colors">
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray/20 mb-4">02</div>
                <h3 className="text-3xl font-bold mb-4">PROCUREMENT</h3>
                <p className="text-gray text-lg mb-8">
                  Optimize sourcing and procurement with intelligent vendor management
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Vendor Intelligence Agent</h4>
                  <p className="text-sm text-gray">Evaluate and rank suppliers based on performance metrics</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Price Optimization Agent</h4>
                  <p className="text-sm text-gray">Negotiate better deals with market intelligence</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contract Analysis Agent</h4>
                  <p className="text-sm text-gray">Review contracts and identify risks automatically</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <Button className="text-sm group-hover:bg-white group-hover:text-black transition-all">
                  Explore Procurement Solutions →
                </Button>
              </div>
            </div>

            {/* Execution */}
            <div id="execution" className="bg-black p-12 group hover:bg-white/[0.02] transition-colors">
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray/20 mb-4">03</div>
                <h3 className="text-3xl font-bold mb-4">EXECUTION</h3>
                <p className="text-gray text-lg mb-8">
                  Deliver excellence with AI-powered operations and quality control
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Operations Monitoring Agent</h4>
                  <p className="text-sm text-gray">Track KPIs and alert on anomalies in real-time</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality Assurance Agent</h4>
                  <p className="text-sm text-gray">Maintain standards with automated quality checks</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance Analytics Agent</h4>
                  <p className="text-sm text-gray">Measure impact and optimize continuously</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <Button className="text-sm group-hover:bg-white group-hover:text-black transition-all">
                  Explore Execution Solutions →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">PROVEN ACROSS INDUSTRIES</h2>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Our planning, procurement, and execution solutions adapt to any vertical, 
              delivering transformative results across diverse sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">⚕</span>
              </div>
              <p className="text-sm">Healthcare</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">⚙</span>
              </div>
              <p className="text-sm">Manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">◈</span>
              </div>
              <p className="text-sm">Retail</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">▭</span>
              </div>
              <p className="text-sm">Construction</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">◉</span>
              </div>
              <p className="text-sm">Finance</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/60">◆</span>
              </div>
              <p className="text-sm">Logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20 text-center">THE NAINOVATE APPROACH</h2>
          
          <div className="space-y-24">
            {/* The Nainovate Approach section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-gray/20 mb-6">01</div>
                <h3 className="text-3xl font-bold mb-4">Industry Agnostic</h3>
                <p className="text-gray text-lg">
                  Our AI agents understand business fundamentals, not just industry jargon. 
                  They adapt to your specific context while leveraging cross-industry best practices.
                </p>
              </div>
              {/* Industry Agnostic */}
              <div className="h-64 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-60 h-60 object-contain"
                >
                  <source src="/videos/Industry_Agnostic.webm" type="video/webm" />
                </video>
              </div>
            </div>
            
            {/* End-to-End Integration */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-64 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-50 h-60 object-contain"
                >
                  <source src="/videos/Integration.webm" type="video/webm" />
                </video>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-6xl font-bold text-gray/20 mb-6">02</div>
                <h3 className="text-3xl font-bold mb-4">End-to-End Integration</h3>
                <p className="text-gray text-lg">
                  Connect planning insights directly to procurement decisions, 
                  and procurement data seamlessly to execution metrics. One unified AI ecosystem.
                </p>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-gray/20 mb-6">03</div>
                <h3 className="text-3xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-gray text-lg">
                  Your AI agents get smarter with every interaction, learning from your business 
                  patterns and continuously optimizing their recommendations.
                </p>
              </div>
              <div className="h-64 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-80 h-80 object-contain"
                >
                  <source src="/videos/Continuous_Learning.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray mb-12 leading-relaxed">
            See how our AI solutions can revolutionize your planning, 
            procurement, and execution processes.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}