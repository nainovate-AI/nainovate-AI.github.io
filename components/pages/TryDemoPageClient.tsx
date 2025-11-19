'use client';

import UnifiedChatBot from '@/components/ui/UnifiedChatBot';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function TryDemoPageClient() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
              INTERACTIVE DEMO
            </p>
            <h1 className="text-[clamp(3rem,5vw,6rem)] font-bold leading-[0.9] tracking-tight mb-8">
              <span className="block">EXPERIENCE NIA</span>
              <span className="block mt-2">IN ACTION</span>
            </h1>
            <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed mb-12">
              Chat with our unified AI assistant. Ask about HR screening, BOQ generation, 
              analytics, compliance, customer service, or any business operation.
            </p>
            
            {/* Capability Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                HR & Recruitment
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                BOQ Generation
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                Customer Service
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                Building Permits
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                Analytics
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                Compliance
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                Workflow Automation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chat Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <UnifiedChatBot />
          
          {/* Info Cards Below Chat */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-black border border-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Intelligent Routing</h3>
              <p className="text-sm text-gray">
                Ask anything. NIA automatically understands context and routes to the right capability.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Real-time Responses</h3>
              <p className="text-sm text-gray">
                Get instant answers with data, analytics, and actionable insights in every response.
              </p>
            </div>
            
            <div className="bg-black border border-white/10 rounded-lg p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-bold mb-2">Multi-domain Knowledge</h3>
              <p className="text-sm text-gray">
                One assistant handles operations, engagement, and intelligence across your entire business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Showcase */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">WHAT YOU CAN ASK</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Try these example queries to see NIA's capabilities across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operations Examples */}
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-lg">⚙️</span>
                </div>
                <h3 className="font-bold">Operations</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>"Analyze candidate C-1247 for job J-589"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>"Generate BOQ for architectural drawings"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>"Process invoice INV-2024-1247"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>"Search for Q3 budget documents"</span>
                </li>
              </ul>
            </div>

            {/* Engagement Examples */}
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <span className="text-lg">💬</span>
                </div>
                <h3 className="font-bold">Engagement</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>"Track order #ORD-89234"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>"Check building permit BP-2024-1247"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>"Show conversation history"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>"Analyze support call quality"</span>
                </li>
              </ul>
            </div>

            {/* Intelligence Examples */}
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-lg">📊</span>
                </div>
                <h3 className="font-bold">Intelligence</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>"Show permit processing analytics"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>"Compliance status across jurisdictions"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>"Quality metrics for production line"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>"Workflow automation status"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            READY FOR THE FULL PLATFORM?
          </h2>
          <p className="text-xl text-gray mb-12">
            This is just a demo. The real GenX platform offers customization, 
            integrations, workflows, and enterprise-grade security.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg">
                Schedule Demo →
              </Button>
            </Link>
            <Link href="/products">
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4 text-lg">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}