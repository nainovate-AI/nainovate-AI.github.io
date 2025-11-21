'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function AIEngineeringToolsClient() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-sm">GenX Platform / AI Engineering</span>
            </div>
            
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              AI ENGINEERING<br/>
              TOOLS
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Build production-ready AI agents with advanced RAG pipelines, fine-tuning capabilities, 
              and comprehensive evaluation tools. All built with AI CoE governance.
            </p>
            
            <div className="flex gap-6 flex-wrap">
              <Link href="/contact">
                <Button className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-medium">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/products/core">
                <Button className="px-8 py-4 border-2 border-white/20 hover:bg-white/10 font-medium">
                  Back to Platform
                </Button>
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
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Prompt Workshop</h3>
                <p className="text-sm text-gray-400">Test and optimize prompts across multiple models</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Model Orchestrator</h3>
                <p className="text-sm text-gray-400">Connect and manage any AI model seamlessly</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assurance Lab</h3>
                <p className="text-sm text-gray-400">Evaluate and ensure AI quality before deployment</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Platform Features</h3>
                <p className="text-sm text-gray-400">Enterprise integrations and security built-in</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 1: Prompt Workshop */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Prompt Workshop</h2>
                  <p className="text-xl text-gray-300">
                    Experiment with and refine prompts across multiple AI models to achieve optimal 
                    performance and business outcomes.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Prompt Experimentation</h3>
                      <p className="text-gray-400">
                        Test identical prompts across multiple AI models simultaneously, comparing outputs, 
                        monitoring token consumption, and measuring response times in real-time.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Prompt Versioning</h3>
                      <p className="text-gray-400">
                        Monitor, control, and rollback prompt modifications across the AI agent development cycle, 
                        maintaining uniformity and enabling swift iterations at enterprise scale.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">60+ Prompt Libraries</h3>
                      <p className="text-gray-400">
                        Fast-track your AI development with ready-to-use prompt libraries for data classification, 
                        content summarization, generation workflows, and more—no need to build from zero.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual/Screenshot Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                    <p className="text-gray-400">Prompt Workshop Interface</p>
                    <p className="text-sm text-gray-500 mt-2">[Screenshot placeholder]</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Model Orchestrator */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual/Screenshot Placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <p className="text-gray-400">Model Orchestrator Interface</p>
                    <p className="text-sm text-gray-500 mt-2">[Screenshot placeholder]</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Model Orchestrator</h2>
                  <p className="text-xl text-gray-300">
                    Empower your team to easily integrate, manage, and connect multiple AI models, whether 
                    commercial, fine-tuned, or open source, within a single agentic workflow.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Enterprise Models</h3>
                      <p className="text-gray-400">
                        Integrate any enterprise AI model from OpenAI, Claude, Gemini, and leading providers 
                        directly into GenX Platform.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Open-Source Integration</h3>
                      <p className="text-gray-400">
                        Access open-source AI models seamlessly through HuggingFace connectivity, unlocking 
                        millions of models for diverse applications.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Custom Models</h3>
                      <p className="text-gray-400">
                        Train large language models using your proprietary data or deploy your own specialized 
                        models for industry-specific requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Quality Assurance Lab */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Quality Assurance Lab</h2>
                  <p className="text-xl text-gray-300">
                    Assess the performance of both AI models and agentic applications to ensure quality, 
                    accurate, less biased, compliant, and reliable AI agent responses before and after deployment.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Response Validation</h3>
                      <p className="text-gray-400">
                        Identify AI model hallucinations during development and rapidly optimize them through 
                        test datasets or human-in-the-loop feedback for precision.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Query Alignment</h3>
                      <p className="text-gray-400">
                        Assess whether AI agent outputs effectively address user inquiries using integrated 
                        evaluators or custom-built validation frameworks.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Behavior Testing</h3>
                      <p className="text-gray-400">
                        Verify your AI agents perform as intended and utilize appropriate tools for each situation 
                        by creating and validating custom test scenarios aligned with your operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual/Screenshot Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-400">Quality Assurance Lab Interface</p>
                    <p className="text-sm text-gray-500 mt-2">[Screenshot placeholder]</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Built with AI CoE Governance */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <AnimatedSection>
            <div className="mb-12">
              <svg className="w-16 h-16 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h2 className="text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Every AI engineering tool integrates with our Center of Excellence framework. This means 
              quality, ethical compliance, validation, and ethical guardrails are built-in—not bolted on.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Automatic Validation</h3>
                <p className="text-sm text-gray-400">Every model passes quality gates before deployment</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Audit Tools</h3>
                <p className="text-sm text-gray-400">Complete traceability built into development</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <Link href="/platform/search-data-ai">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Search + Data AI</h3>
                  <p className="text-sm text-gray-400">Hybrid search and data integration</p>
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
              READY TO BUILD WITH GenX?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              See how our AI engineering tools can accelerate your agent development
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact">
                <Button className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-medium">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="/products/core">
                <Button className="px-8 py-4 border-2 border-white/20 hover:bg-white/10 font-medium">
                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}