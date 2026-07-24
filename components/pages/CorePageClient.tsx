'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import mockData from '@/data/core.json';


export default function CorePageClient() {
    const coreSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "GenX CORE",
        "alternateName": "CORE AI Engine",
        "applicationCategory": "DeveloperApplication",
        "applicationSubCategory": "AI Development Platform",
        "operatingSystem": "Web-based",
        "description": "AI engine for creating specialized agents. Part of the GenX integrated platform.",
        "url": "https://www.nainovate.ai/platform/core",
        "screenshot": [
            "https://www.nainovate.ai/images/core-screenshot-1.png",
            "https://www.nainovate.ai/images/core-screenshot-2.png"
        ],
        "featureList": [
            "CONTEXTA - RAG Pipeline Integration",
            "FINETUNE - RLHF Fine-tuning",
            "MODELA - Model Evaluation",
            "INFERENCE - Production Pipelines",
            "Domain-Specific Agent Creation",
            "Advanced Model Optimization"
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
            "reviewBody": "CORE transformed our AI development. We deployed our first agent in just 3 days."
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build an AI Agent with CORE",
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
                "text": "Launch your agent instantly to NIA interface"
            }
        ]
    };

    return (
        <main className="pt-20 relative z-10">
            <JsonLd data={coreSchema} />
            <JsonLd data={howToSchema} />

            {/* Hero */}
            <section className="min-h-[80vh] flex items-center">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
                    <div className="max-w-4xl">
                        <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
                            GENX CORE • AI ENGINE
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                            <span className="block">CREATE AI</span>
                            <span className="block text-gray">AGENTS</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-6 md:mb-12">
                            Build production-ready AI agents with our advanced engine.
                            Domain-specific. Purpose-built. Deploy in days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4">
                                    Start Building
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE Modules */}
            <section className="py-16 md:py-32 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-20">CORE MODULES</h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                        {mockData.modules.map((mod, i) => (
                            <AnimatedSection key={mod.title} delay={i * 0.1}>
                                <div className="border-l border-white/20 pl-8">
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">{mod.title}</h3>
                                    <p className="text-gray mb-6">
                                        {mod.description}
                                    </p>
                                    <ul className="text-sm text-gray space-y-2">
                                        {mod.bullets.map((b) => (
                                            <li key={b}>→ {b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Build Agents for Any Use Case */}
            <section className="py-16 md:py-32 bg-white/[0.02] border-y border-white/10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-8 leading-[0.9]">
                        <span className="block">BUILD AGENTS FOR</span>
                        <span className="block text-gray">ANY USE CASE</span>
                    </h2>

                    <div className="max-w-3xl mb-10 md:mb-20">
                        <p className="text-base sm:text-lg md:text-xl text-gray leading-relaxed">
                            Create specialized AI agents tailored to your exact business needs.
                            CORE empowers you to build intelligent agents that understand your
                            domain, speak your language, and solve your specific challenges.
                        </p>
                    </div>

                    {/* Agent Capabilities */}
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-32">
                        <div className="space-y-6 md:space-y-12">
                            {mockData.capabilities.map((cap) => (
                                <div key={cap.title} className="border-l border-white/20 pl-8">
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">{cap.title}</h3>
                                    <p className="text-gray leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Agent Types Grid */}
                        <div className="grid grid-cols-2 gap-px bg-white/10">
                            {mockData.agentTypes.map((agent) => (
                                <div key={agent.title} className="bg-black p-5 md:p-8">
                                    <h4 className="text-lg font-medium mb-2">{agent.title}</h4>
                                    <p className="text-sm text-gray">{agent.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Build Process */}
                    <div className="border border-white/10 rounded-none">
                        <div className="grid md:grid-cols-3 divide-x divide-white/10">
                            {mockData.buildProcess.map((step) => (
                                <div key={step.number} className="p-6 md:p-12">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray">{step.number}</div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4">
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
            <section className="py-16 md:py-32">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">START BUILDING TODAY</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray mb-6 md:mb-10">
                        Transform your business with AI agents designed for your specific needs.
                    </p>
                    <Link href="/contact">
                        <Button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4">
                            Schedule a Demo →
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}