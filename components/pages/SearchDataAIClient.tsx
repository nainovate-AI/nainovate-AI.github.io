'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { EnterpriseSearchMockup } from '../mockups/EnterpriseSearchMockup';
import { UniversalConnectorsMockup } from '../mockups/UniversalConnectorsMockup';
import { IntelligentDataProcessingMockup } from '../mockups/IntelligentDataProcessingMockup';

export default function SearchDataAIClient() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-sm">GenX Platform / Search + Data</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              SEARCH + DATA<br />
              AI
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Retrieve accurate, real-time insights with agentic RAG, hybrid vector search,
              and 100+ enterprise connectors. Transform scattered data into unified knowledge.
            </p>

            <div className="flex gap-6 flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/platform">
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">CORE CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Enterprise Search</h3>
                <p className="text-sm text-gray-400">Natural language queries across all systems</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Universal Connectors</h3>
                <p className="text-sm text-gray-400">100+ pre-built integrations</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Data Processing</h3>
                <p className="text-sm text-gray-400">AI-powered extraction and indexing</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">RAG Pipelines</h3>
                <p className="text-sm text-gray-400">Custom retrieval strategies</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 1: Enterprise Search Engine */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Enterprise Search Engine</h2>
                  <p className="text-xl text-gray-300">
                    Ask questions in natural language. Get accurate answers grounded in your enterprise
                    data. No more keyword searches or buried documents.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Natural Language Queries</h3>
                      <p className="text-gray-400">
                        Ask questions like you would to a colleague. The AI understands context,
                        intent, and follows up with clarifications automatically.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Real-Time Data Retrieval</h3>
                      <p className="text-gray-400">
                        Search across live systems. Get up-to-date information from CRM, ERP,
                        databases, and cloud storage in milliseconds.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Contextual Answer Generation</h3>
                      <p className="text-gray-400">
                        Not just links—get synthesized answers with citations, summaries, and
                        actionable insights pulled from multiple sources.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual/Screenshot Placeholder */}
            <div><EnterpriseSearchMockup /></div>
          </div>
        </div>
      </section>

      {/* Section 2: Universal Connectors */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual/Screenshot Placeholder */}
            <div><UniversalConnectorsMockup /></div>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Universal Connectors</h2>
                  <p className="text-xl text-gray-300">
                    Connect to any enterprise system. 100+ pre-built integrations with CRM, ERP,
                    databases, cloud storage, and communication platforms.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Plug-and-Play Integration</h3>
                      <p className="text-gray-400">
                        Pre-built connectors for Salesforce, SAP, Microsoft 365, ServiceNow,
                        Slack, and 100+ more. Deploy in minutes, not months.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Real-Time Data Sync</h3>
                      <p className="text-gray-400">
                        Bi-directional sync keeps your data fresh. Changes in connected systems
                        reflect instantly in search results.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Custom Connector SDK</h3>
                      <p className="text-gray-400">
                        Need a proprietary system? Build custom connectors with our SDK.
                        Full control over data mapping and transformation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Intelligent Data Processing */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Intelligent Data Processing</h2>
                  <p className="text-xl text-gray-300">
                    Automatic document parsing, smart chunking, and multi-modal extraction.
                    Turn unstructured data into searchable, actionable knowledge.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Automatic Document Parsing</h3>
                      <p className="text-gray-400">
                        PDFs, Word docs, spreadsheets, presentations—automatically extracted
                        and indexed. Text, tables, images, all searchable.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Smart Chunking & Segmentation</h3>
                      <p className="text-gray-400">
                        AI-powered document segmentation preserves context. Paragraphs, sections,
                        chapters—chunked intelligently for optimal retrieval.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-Modal Extraction</h3>
                      <p className="text-gray-400">
                        Extract meaning from images, charts, diagrams. Vision models understand
                        visual content and make it searchable.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual/Screenshot Placeholder */}
            <div><IntelligentDataProcessingMockup /></div>
          </div>
        </div>
      </section>

      {/* Built with AI CoE Governance */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <AnimatedSection>
            <div className="mb-12">
              <svg className="w-16 h-16 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Every search query and data access integrates with our Center of Excellence framework.
              Quality, compliance, and audit trails are built-in—not bolted on.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Complete Audit Trails</h3>
                <p className="text-sm text-gray-400">Every query and data access logged for compliance</p>
              </div>

              <div className="p-6">
                <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Permission-Aware Search</h3>
                <p className="text-sm text-gray-400">Only returns results users have access to</p>
              </div>

              <div className="p-6">
                <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Compliance Built-In</h3>
                <p className="text-sm text-gray-400">SOC2, GDPR, HIPAA compliance out of the box</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">EXPLORE MORE PLATFORM FEATURES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <Link href="/platform/ai-engineering-tools">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">AI Engineering Tools</h3>
                  <p className="text-sm text-gray-400">Build and optimize AI agents</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link href="/platform/security-governance">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Security + Governance</h3>
                  <p className="text-sm text-gray-400">Enterprise-grade security</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link href="/platform/development-tools">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Development Tools</h3>
                  <p className="text-sm text-gray-400">No-code and pro-code options</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href="/platform/integrations">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Integrations</h3>
                  <p className="text-sm text-gray-400">100+ pre-built connectors</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-8">
              READY TO UNIFY YOUR KNOWLEDGE?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              See how Search + Data AI can transform scattered data into actionable intelligence
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">                  Schedule Demo
                </Button>
              </Link>
              <Link href="/demo">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}