'use client';

import type { Metadata } from "next";
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';


export default function BuildPageClient() {
    const genxSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "GenX",
        "alternateName": "GenX AI Builder",
        "applicationCategory": "DeveloperApplication",
        "applicationSubCategory": "AI Development Platform",
        "operatingSystem": "Web-based",
        "description": "No-code AI agent builder platform for enterprises. Create production-ready AI agents with visual workflows.",
        "url": "https://www.nainovate.ai/products/build",
        "screenshot": [
            "https://www.nainovate.ai/images/genx-screenshot-1.png",
            "https://www.nainovate.ai/images/genx-screenshot-2.png"
        ],
        "featureList": [
            "Visual Workflow Builder",
            "CONTEXTA - RAG Pipeline Integration",
            "FINETUNE - RLHF Fine-tuning",
            "MODELA - Model Evaluation",
            "INFERENCE - Production Pipelines",
            "No-code Development",
            "Instant Deployment"
        ],
        "softwareRequirements": "Modern web browser with JavaScript enabled",
        "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "seller": {
                "@type": "Organization",
                "name": "Nainovate Technologies"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Enterprise Customer"
            },
            "reviewBody": "GenX transformed our AI development. We deployed our first agent in just 3 days."
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build an AI Agent with GenX",
        "description": "Step-by-step guide to create your first AI agent",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Define",
                "text": "Set agent purpose, capabilities, and knowledge domain"
            },
            {
                "@type": "HowToStep",
                "name": "Train",
                "text": "Upload data, fine-tune responses, and validate performance"
            },
            {
                "@type": "HowToStep",
                "name": "Deploy",
                "text": "Launch your agent instantly to NIA chatbot"
            }
        ]
    };

    return (
        <main className="pt-20 relative z-10">
            <JsonLd data={genxSchema} />
            <JsonLd data={howToSchema} />

            {/* Hero */}
            <section className="min-h-[80vh] flex items-center">
                <div className="max-w-[1400px] mx-auto px-8 w-full">
                    <div className="max-w-4xl">
                        <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
                            BUILD WITH GENX
                        </p>
                        <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                            <span className="block">CREATE AI</span>
                            <span className="block text-gray">AGENTS</span>
                        </h1>
                        <p className="text-xl text-gray max-w-3xl mb-12">
                            Build production-ready AI agents with our visual workflow builder.
                            No code required. Deploy in days, not months.
                        </p>
                        <div className="flex gap-8">
                            <Link href="/contact">
                                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                                    Start Building
                                </Button>
                            </Link>
                            {/* <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                Watch Demo
              </Button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-8">
                    <h2 className="text-5xl font-bold mb-20">GENX MODULES</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        <AnimatedSection>
                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">CONTEXTA</h3>
                                <p className="text-gray mb-6">
                                    Prepare and optimize RAG pipelines. Index your data, create embeddings,
                                    and build context-aware AI systems that understand your domain.
                                </p>
                                <ul className="text-sm text-gray space-y-2">
                                    <li>→ Vector database integration</li>
                                    <li>→ Custom embedding models</li>
                                    <li>→ Context window optimization</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">FINETUNE</h3>
                                <p className="text-gray mb-6">
                                    Fine-tune models with RLHF, run exploratory data analysis, and
                                    create domain-specific AI that speaks your language.
                                </p>
                                <ul className="text-sm text-gray space-y-2">
                                    <li>→ RLHF implementation</li>
                                    <li>→ Custom dataset preparation</li>
                                    <li>→ Performance benchmarking</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">MODELA</h3>
                                <p className="text-gray mb-6">
                                    Comprehensive evaluation suite. Test accuracy, measure performance,
                                    and ensure your AI meets quality standards before deployment.
                                </p>
                                <ul className="text-sm text-gray space-y-2">
                                    <li>→ Automated testing</li>
                                    <li>→ Performance metrics</li>
                                    <li>→ A/B testing framework</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">INFERENCE</h3>
                                <p className="text-gray mb-6">
                                    Create production pipelines with RAG or direct LLM integration.
                                    Deploy scalable, efficient AI systems ready for real-world use.
                                </p>
                                <ul className="text-sm text-gray space-y-2">
                                    <li>→ Pipeline orchestration</li>
                                    <li>→ Load balancing</li>
                                    <li>→ Response optimization</li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Agent Creation */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="mb-20">
                        <h2 className="text-6xl font-bold mb-8">
                            BUILD AGENTS FOR<br />
                            <span className="text-gray">ANY USE CASE</span>
                        </h2>
                        <p className="text-xl text-gray max-w-3xl">
                            Create specialized AI agents tailored to your exact business needs.
                            GenX empowers you to build intelligent agents that understand your
                            domain, speak your language, and solve your specific challenges.
                        </p>
                    </div>

                    {/* Agent Capabilities */}
                    <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                        <div className="space-y-12">
                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">Domain Expertise</h3>
                                <p className="text-gray leading-relaxed">
                                    Train agents on your industry knowledge, company policies, and specific workflows.
                                    Your agent becomes an expert in your field.
                                </p>
                            </div>

                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">Custom Behaviors</h3>
                                <p className="text-gray leading-relaxed">
                                    Define how your agent responds, what actions it can take, and how it interacts.
                                    Complete control over every aspect.
                                </p>
                            </div>

                            <div className="border-l border-white/20 pl-8">
                                <h3 className="text-2xl font-bold mb-4">Rapid Iteration</h3>
                                <p className="text-gray leading-relaxed">
                                    Test, refine, and deploy agents in days with our visual development environment.
                                    No coding required.
                                </p>
                            </div>
                        </div>

                        {/* Agent Types Grid */}
                        <div className="grid grid-cols-2 gap-px bg-white/10">
                            <div className="bg-black p-8">
                                <h4 className="text-lg font-medium mb-2">Sales Agent</h4>
                                <p className="text-sm text-gray">Lead qualification & conversion</p>
                            </div>
                            <div className="bg-black p-8">
                                <h4 className="text-lg font-medium mb-2">Support Agent</h4>
                                <p className="text-sm text-gray">24/7 customer assistance</p>
                            </div>
                            <div className="bg-black p-8">
                                <h4 className="text-lg font-medium mb-2">Analytics Agent</h4>
                                <p className="text-sm text-gray">Data insights & reporting</p>
                            </div>
                            <div className="bg-black p-8">
                                <h4 className="text-lg font-medium mb-2">Research Agent</h4>
                                <p className="text-sm text-gray">Information synthesis</p>
                            </div>
                        </div>
                    </div>

                    {/* Build Process */}
                    <div className="border border-white/10 rounded-none">
                        <div className="grid md:grid-cols-3 divide-x divide-white/10">
                            <div className="p-12">
                                <div className="text-5xl font-bold mb-6 text-gray">01</div>
                                <h3 className="text-xl font-bold mb-4">DEFINE</h3>
                                <p className="text-gray">
                                    Set agent purpose, capabilities, and knowledge domain. Configure behavior patterns.
                                </p>
                            </div>
                            <div className="p-12">
                                <div className="text-5xl font-bold mb-6 text-gray">02</div>
                                <h3 className="text-xl font-bold mb-4">TRAIN</h3>
                                <p className="text-gray">
                                    Upload data, fine-tune responses, and validate performance against your standards.
                                </p>
                            </div>
                            <div className="p-12">
                                <div className="text-5xl font-bold mb-6 text-gray">03</div>
                                <h3 className="text-xl font-bold mb-4">DEPLOY</h3>
                                <p className="text-gray">
                                    Launch your agent instantly to NIA chatbot. Monitor and optimize in real-time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex gap-8">
                        <Link href="/contact">
                            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                                Start Building
                            </Button>
                        </Link>
                        {/* <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                View Documentation
            </Button> */}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-8 text-center">
                    <h2 className="text-6xl font-bold mb-8">
                        START BUILDING TODAY
                    </h2>
                    <p className="text-xl text-gray mb-12 max-w-2xl mx-auto">
                        Transform your business with AI agents designed for your specific needs.
                    </p>
                    <Link href="/contact">
                        <Button className="border border-white/20 hover:bg-white/10  hover:text-white px-12 py-6 text-lg ">
                            Schedule a Demo →
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}