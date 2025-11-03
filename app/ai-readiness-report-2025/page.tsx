'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export default function AIReadinessReport2025Page() {
    const [showForm, setShowForm] = useState(false);
    const [activeRegion, setActiveRegion] = useState<string | null>(null);
    const [activePillar, setActivePillar] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        region: ''
    });

    const regions = [
        {
            id: 'eu',
            name: 'Europe',
            status: 'High',
            regulation: 'EU AI Act',
            readiness: '85%',
            color: 'rgba(255, 255, 255, 0.9)'
        },
        {
            id: 'india',
            name: 'India',
            status: 'Medium',
            regulation: 'DPDP Act',
            readiness: '65%',
            color: 'rgba(255, 255, 255, 0.7)'
        },
        {
            id: 'gcc',
            name: 'GCC',
            status: 'Emerging',
            regulation: 'AI Ethics',
            readiness: '45%',
            color: 'rgba(255, 255, 255, 0.5)'
        },
        {
            id: 'us',
            name: 'United States',
            status: 'Advanced',
            regulation: 'NIST AI RMF',
            readiness: '75%',
            color: 'rgba(255, 255, 255, 0.8)'
        }
    ];

    const pillars = [
        { id: 1, name: 'Strategy & Leadership', icon: '◈' },
        { id: 2, name: 'Data Readiness', icon: '◉' },
        { id: 3, name: 'Technology Infrastructure', icon: '⬡' },
        { id: 4, name: 'Talent & Culture', icon: '◯' },
        { id: 5, name: 'Governance & Ethics', icon: '◆' }
    ];

    const complianceFeatures = [
        { feature: 'Risk Classification', regions: ['EU', 'US'] },
        { feature: 'Consent Management', regions: ['EU', 'India'] },
        { feature: 'Data Sovereignty', regions: ['GCC', 'India'] },
        { feature: 'Explainability', regions: ['EU', 'US', 'India'] },
        { feature: 'Audit Trails', regions: ['EU', 'US', 'India', 'GCC'] }
    ];

    const reportSchema = {
        "@context": "https://schema.org",
        "@type": "Report",
        "name": "AI Readiness Report 2025",
        "description": "The Global State of AI Readiness & Responsible Innovation",
        "publisher": {
            "@type": "Organization",
            "name": "Nainovate"
        },
        "datePublished": "2025-01-01",
        "about": {
            "@type": "Thing",
            "name": "AI Governance and Compliance"
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowForm(false);
        // Trigger download
    };

    return (
        <main className="bg-black min-h-screen pt-20">
            <JsonLd data={reportSchema} />

            {/* Hero Section - Authoritative */}
            <section className="min-h-[70vh] flex items-center relative overflow-hidden">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.03) 3px)',
                        backgroundSize: '100% 4px'
                    }}></div>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <div className="max-w-4xl">
                            {/* Official badge */}
                            <div className="inline-flex items-center gap-2 mb-8 border border-white/20 px-4 py-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-sm tracking-wider">2025 OFFICIAL REPORT</span>
                            </div>

                            <h1 className="text-[clamp(3rem,7vw,5rem)] font-bold leading-[0.9] tracking-[-0.02em] mb-6">
                                <span className="block">AI READINESS</span>
                                <span className="block text-gray">REPORT 2025</span>
                            </h1>

                            <p className="text-xl mb-12 max-w-3xl">
                                The Global State of AI Readiness & Responsible Innovation
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="group relative overflow-hidden border-2 border-white"
                                >
                                    <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                                        DOWNLOAD FULL REPORT
                                    </span>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                </button>

                                <a href="#readiness-assessment" className="px-8 py-4 font-medium text-gray hover:text-white transition-colors border border-white/10">
                                    ASSESS YOUR READINESS
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Key Finding Banner */}
            <section className="py-8 border-y border-white/10 bg-white/[0.02]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold">80%</span>
                                <span className="text-lg">of enterprises have AI deployment</span>
                            </div>
                            <div className="text-2xl font-bold">×</div>
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold">20%</span>
                                <span className="text-lg">achieve full-scale readiness</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Global Readiness Map */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold mb-4">Global AI Readiness Landscape</h2>
                        <p className="text-gray mb-12 max-w-3xl">
                            Regulatory maturity and compliance requirements across major economies
                        </p>
                    </AnimatedSection>

                    {/* Regional Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {regions.map((region, idx) => (
                            <AnimatedSection key={region.id} delay={idx * 0.1}>
                                <div
                                    className="border border-white/10 p-6 hover:border-white/30 transition-all cursor-pointer"
                                    style={{ borderTopColor: region.color, borderTopWidth: '3px' }}
                                    onMouseEnter={() => setActiveRegion(region.id)}
                                    onMouseLeave={() => setActiveRegion(null)}
                                >
                                    <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray">Status:</span>
                                            <span>{region.status}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray">Regulation:</span>
                                            <span>{region.regulation}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray">Readiness:</span>
                                            <span className="font-bold">{region.readiness}</span>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mt-4 h-1 bg-white/10 rounded overflow-hidden">
                                        <div
                                            className="h-full bg-white/50 transition-all duration-1000"
                                            style={{ width: region.readiness }}
                                        ></div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Key Insight */}
                    <AnimatedSection delay={0.5}>
                        <div className="bg-black border border-white/10 p-6 text-center">
                            <p className="text-lg font-medium">
                                "AI readiness in 2025 is defined not by how much AI you use — but by how responsibly you use it."
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Five Pillars */}
            <section className="py-20 border-t border-white/10 bg-white/[0.02]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold mb-12 text-center">The Five Pillars of AI Readiness</h2>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-5 gap-4">
                        {pillars.map((pillar, idx) => (
                            <AnimatedSection key={pillar.id} delay={idx * 0.1}>
                                <div
                                    className="text-center p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                                    onClick={() => setActivePillar(pillar.id)}
                                    style={{
                                        backgroundColor: activePillar === pillar.id ? 'rgba(255,255,255,0.05)' : 'transparent'
                                    }}
                                >
                                    <div className="text-5xl mb-4 opacity-80">{pillar.icon}</div>
                                    <h3 className="text-sm font-medium">{pillar.name}</h3>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {activePillar && (
                        <AnimatedSection>
                            <div className="mt-8 p-6 bg-black border border-white/10 max-w-2xl mx-auto">
                                <p className="text-sm text-gray">
                                    Organizations excelling in this pillar demonstrate clear governance structures,
                                    measurable outcomes, and continuous improvement processes.
                                </p>
                                <Link href="/contact">
                                    <Button className="mt-4 text-sm">Develop This Pillar →</Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    )}
                </div>
            </section>

            {/* Compliance Requirements Visual */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Critical Compliance Requirements</h2>
                            <p className="text-gray max-w-2xl mx-auto">
                                Key capabilities needed for multi-jurisdiction AI deployment
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Visual Grid Instead of Table */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                requirement: 'Risk Classification',
                                description: 'Automated categorization of AI systems by risk level',
                                critical: ['EU AI Act', 'NIST Framework']
                            },
                            {
                                requirement: 'Consent Management',
                                description: 'User consent tracking and right to explanation',
                                critical: ['GDPR', 'India DPDP']
                            },
                            {
                                requirement: 'Data Sovereignty',
                                description: 'Local data storage and processing requirements',
                                critical: ['GCC Frameworks', 'India Localization']
                            },
                            {
                                requirement: 'Explainability',
                                description: 'AI decision transparency and auditability',
                                critical: ['EU AI Act', 'US Federal Guidelines']
                            },
                            {
                                requirement: 'Audit Trails',
                                description: 'Complete documentation of AI decisions',
                                critical: ['All Jurisdictions']
                            },
                            {
                                requirement: 'Human Oversight',
                                description: 'Human-in-the-loop validation processes',
                                critical: ['EU High-Risk', 'Healthcare/Finance']
                            }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="border border-white/10 p-6 hover:border-white/30 transition-all">
                                    <h3 className="font-bold mb-2">{item.requirement}</h3>
                                    <p className="text-sm text-gray mb-4">{item.description}</p>
                                    <div className="space-y-1">
                                        {item.critical.map((region, i) => (
                                            <div key={i} className="text-xs text-gray flex items-center gap-2">
                                                <div className="w-1 h-1 bg-gray rounded-full"></div>
                                                {region}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Building Trust in AI */}
            <section className="py-20 border-t border-white/10 bg-white/[0.02]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold mb-12 text-center">The Trust Framework</h2>
                        <p className="text-gray text-center mb-16 max-w-2xl mx-auto">
                            Successful AI deployment requires three foundational elements of trust
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <AnimatedSection delay={0.1}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◈</span>
                                </div>
                                <h3 className="font-medium mb-2">Risk Assessment</h3>
                                <p className="text-sm text-gray">Continuous evaluation of AI impact and mitigation strategies</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◉</span>
                                </div>
                                <h3 className="font-medium mb-2">Transparency</h3>
                                <p className="text-sm text-gray">Clear documentation of AI decisions and reasoning</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◆</span>
                                </div>
                                <h3 className="font-medium mb-2">Accountability</h3>
                                <p className="text-sm text-gray">Human oversight and clear responsibility chains</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[800px] mx-auto px-8 text-center">
                    <AnimatedSection>
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Ready for Responsible AI?
                            </h2>
                            <p className="text-xl text-gray">
                                Join organizations building AI with trust, compliance, and human oversight at the core.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowForm(true)}
                                className="group relative overflow-hidden border-2 border-white"
                            >
                                <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                                    DOWNLOAD 2025 REPORT
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </button>

                            <Link href="/ai-center-of-excellence">
                                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                                    Build Your AI Governance →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Download Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8">
                    <AnimatedSection>
                        <div className="bg-black border border-white/20 p-8 max-w-md w-full">
                            <h3 className="text-2xl font-bold mb-6">
                                Access AI Readiness Report 2025
                            </h3>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full Name*"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />

                                <input
                                    type="email"
                                    placeholder="Work Email*"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />

                                <input
                                    type="text"
                                    placeholder="Company*"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />

                                <select
                                    required
                                    className="w-full bg-black border border-white/20 p-3 text-white focus:border-white/40 transition-colors"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                >
                                    <option value="">Select Role*</option>
                                    <option value="c-suite">C-Suite</option>
                                    <option value="compliance">Compliance/Legal</option>
                                    <option value="it-director">IT Director</option>
                                    <option value="ai-lead">AI/ML Lead</option>
                                    <option value="other">Other</option>
                                </select>

                                <select
                                    className="w-full bg-black border border-white/20 p-3 text-white focus:border-white/40 transition-colors"
                                    value={formData.region}
                                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                >
                                    <option value="">Select Region</option>
                                    <option value="europe">Europe</option>
                                    <option value="india">India</option>
                                    <option value="gcc">GCC</option>
                                    <option value="americas">Americas</option>
                                    <option value="apac">APAC</option>
                                </select>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-white text-black px-6 py-3 font-medium hover:bg-gray-light transition-colors"
                                    >
                                        ACCESS REPORT
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="flex-1 border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </form>

                            <p className="text-xs text-gray mt-4 text-center">
                                By downloading, you agree to receive updates on AI compliance and governance.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            )}
        </main>
    );
}
