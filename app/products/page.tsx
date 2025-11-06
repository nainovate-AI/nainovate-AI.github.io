import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'GenX Platform - Integrated AI Automation System | Nainovate',
  description: 'GenX combines CORE (AI Engine), NIA (Interface), and FLOW (Automation) into one powerful platform. Build, interact, and automate with AI agents.',
  keywords: 'GenX platform, AI automation, CORE, NIA, FLOW, enterprise AI platform',
  openGraph: {
    title: 'GenX Platform - Complete AI Automation System',
    description: 'One platform, three powerful components. Build intelligent agents, deploy conversations, orchestrate workflows.',
    images: ['/og-genx-platform.png'],
  },
};

export default function ProductsPage() {
  const platformSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GenX Platform",
    "applicationCategory": "Enterprise AI Platform",
    "description": "Integrated AI automation system combining CORE, NIA, and FLOW components",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "CORE - AI Engine",
          "description": "Visual AI agent builder with RAG pipelines"
        },
        {
          "@type": "Offer",
          "name": "NIA - Interface",
          "description": "Intelligent conversational interface"
        },
        {
          "@type": "Offer",
          "name": "FLOW - Automation Engine",
          "description": "Multi-agent workflow orchestration"
        }
      ]
    }
  };

  return (
    <main className="bg-black min-h-screen">
      <JsonLd data={platformSchema} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-dark/10 to-black" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32 text-center">
          <div className="mb-6">
            <span className="text-gray uppercase tracking-[0.2em] text-sm">ONE PLATFORM • THREE COMPONENTS</span>
          </div>
          
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.04em] mb-8">
            GENX<br/>
            <span className="text-gray">PLATFORM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray max-w-3xl mx-auto mb-16">
            An integrated AI automation system that creates intelligent agents, 
            provides intuitive interfaces, and orchestrates complex workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">Schedule Demo →</Button>
            </Link>
            <a href="#architecture">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">Explore Platform</Button>
            </a>
          </div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-3xl" />
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold mb-20">
              <span className="text-gray">HOW IT</span><br/>
              <span>WORKS</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <AnimatedSection delay={0.1}>
              <div className="group relative overflow-hidden border border-white/10 rounded-lg p-8 h-full hover:border-white/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-6xl font-bold text-gray group-hover:text-white transition-colors">01</span>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-xl font-bold">C</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">CORE</h3>
                  <p className="text-gray mb-6">The AI engine that creates specialized agents with advanced RAG pipelines and model optimization.</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Domain-specific AI agents</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">RAG pipeline integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">RLHF fine-tuning</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group relative overflow-hidden border border-white/10 rounded-lg p-8 h-full hover:border-white/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-6xl font-bold text-gray group-hover:text-white transition-colors">02</span>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-xl font-bold">N</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">NIA</h3>
                  <p className="text-gray mb-6">The interface where agents come alive through conversational AI.</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Intelligent conversations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Multi-channel deployment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Continuous learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group relative overflow-hidden border border-white/10 rounded-lg p-8 h-full hover:border-white/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-6xl font-bold text-gray group-hover:text-white transition-colors">03</span>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-xl font-bold">F</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">FLOW</h3>
                  <p className="text-gray mb-6">The automation engine that orchestrates complex multi-agent workflows.</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Sequential & parallel execution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Conditional workflows</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">→</span>
                      <span className="text-gray group-hover:text-white/80 transition-colors">Enterprise integrations</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Integration Flow Visual */}
          <AnimatedSection delay={0.4}>
            <div className="bg-black border border-white/10 rounded-xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-black group hover:border-white/40 transition-colors">
                      <span className="text-2xl md:text-3xl font-bold">C</span>
                    </div>
                    <p className="text-sm mt-2 text-gray">CORE</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-white/20 to-white/40"></div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white/40 border-b-[6px] border-b-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-black group hover:border-white/40 transition-colors">
                      <span className="text-2xl md:text-3xl font-bold">N</span>
                    </div>
                    <p className="text-sm mt-2 text-gray">NIA</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-white/20 to-white/40"></div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white/40 border-b-[6px] border-b-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-black group hover:border-white/40 transition-colors">
                      <span className="text-2xl md:text-3xl font-bold">F</span>
                    </div>
                    <p className="text-sm mt-2 text-gray">FLOW</p>
                  </div>
                </div>
                
                <p className="text-center text-gray max-w-2xl mx-auto">
                  Create intelligent agents with CORE, bring them to life through NIA&apos;s interface, 
                  and automate complex processes with FLOW — all in one integrated platform.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold mb-20">
              <span className="text-gray">UNIFIED</span><br/>
              <span>ADVANTAGES</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            <AnimatedSection delay={0.1}>
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-3xl text-white/60">🗲</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                    <p className="text-gray">All components work together natively. No complex integrations or compatibility issues.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-3xl text-white/60">⇶</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Faster Time to Value</h3>
                    <p className="text-gray">Deploy production-ready AI solutions in days, not months. Pre-built templates accelerate development.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-3xl text-white/60">◈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enterprise Scale</h3>
                    <p className="text-gray">Handle millions of interactions and workflows. Built for the demands of large organizations.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-3xl text-white/60">⟲</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-gray">Agents improve over time with RLHF and real-world feedback loops.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Component Navigation */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold mb-20">
              <span className="text-gray">EXPLORE</span><br/>
              <span>COMPONENTS</span>
            </h2>
          </AnimatedSection>
          
          <div className="space-y-0">
            <AnimatedSection delay={0.1}>
              <Link href="/products/core" className="block group">
                <div className="border-t border-gray-dark py-12 hover:bg-white hover:text-black transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-5xl font-bold text-gray group-hover:text-black/30">01</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">CORE - AI ENGINE</h3>
                        <p className="text-gray group-hover:text-black/60">Create specialized AI agents for your exact business needs</p>
                      </div>
                    </div>
                    <svg className="w-8 h-8 transform group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Link href="/products/nia" className="block group">
                <div className="border-t border-gray-dark py-12 hover:bg-white hover:text-black transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-5xl font-bold text-gray group-hover:text-black/30">02</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">NIA - INTERFACE</h3>
                        <p className="text-gray group-hover:text-black/60">Deploy intelligent conversations across any channel</p>
                      </div>
                    </div>
                    <svg className="w-8 h-8 transform group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <Link href="/products/flow" className="block group">
                <div className="border-t border-gray-dark border-b py-12 hover:bg-white hover:text-black transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-5xl font-bold text-gray group-hover:text-black/30">03</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">FLOW - AUTOMATION ENGINE</h3>
                        <p className="text-gray group-hover:text-black/60">Orchestrate complex workflows with multiple agents</p>
                      </div>
                    </div>
                    <svg className="w-8 h-8 transform group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-8">
                    READY TO TRANSFORM?
                </h2>
              <p className="text-xl text-gray mb-8 max-w-1xl mx-auto">
                See how GenX can automate your workflows and scale your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">Schedule Demo →</Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}