'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{prefix}{count}{suffix}</span>;
}

export default function AIImplementationIndexPage() {
    const [showForm, setShowForm] = useState(false);
    const [hoveredStat, setHoveredStat] = useState<string | null>(null);
    const [selectedMaturity, setSelectedMaturity] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: ''
    });

    const dashboardStats = [
        {
            id: 'pilots',
            value: 73,
            suffix: '%',
            label: 'HAVE PILOTS',
            insight: 'Companies experimenting with AI',
            color: 'rgba(255, 255, 255, 0.3)'
        },
        {
            id: 'production',
            value: 23,
            suffix: '%',
            label: 'IN PRODUCTION',
            insight: 'Actually delivering value',
            color: 'rgba(255, 255, 255, 0.8)'
        },
        {
            id: 'loss',
            value: 2.3,
            prefix: '$',
            suffix: 'M',
            label: 'ANNUAL LOSS',
            insight: 'Cost of failed initiatives',
            color: 'rgba(255, 100, 100, 0.5)'
        },
        {
            id: 'time',
            value: 90,
            suffix: '',
            label: 'DAYS TO VALUE',
            insight: 'With the right approach',
            color: 'rgba(100, 255, 100, 0.5)'
        }
    ];

    const maturityLevels = [
        { level: 1, name: 'Experimental', percentage: 35 },
        { level: 2, name: 'Foundational', percentage: 28 },
        { level: 3, name: 'Operational', percentage: 23 },
        { level: 4, name: 'Optimized', percentage: 11 },
        { level: 5, name: 'Transformational', percentage: 3 }
    ];

    const implementationPillars = [
        { icon: '⚙', name: 'Architecture', key: 'Platform readiness' },
        { icon: '⚖', name: 'Governance', key: 'Compliance framework' },
        { icon: '👥', name: 'Organization', key: 'Team capability' },
        { icon: '📊', name: 'Value', key: 'ROI measurement' }
    ];

    const reportSchema = {
        "@context": "https://schema.org",
        "@type": "Report",
        "name": "Enterprise AI Implementation Index 2025",
        "description": "Visual dashboard revealing why 77% of AI pilots fail and how to reach production",
        "publisher": {
            "@type": "Organization",
            "name": "Nainovate"
        }
    };

    const handleQuickDownload = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Download initiated:', formData);
        setShowForm(false);
        // Trigger download
    };

    return (
        <main className="bg-black min-h-screen pt-20">
            <JsonLd data={reportSchema} />

            {/* Hero Dashboard Section */}
            <section className="min-h-[90vh] relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-12">
                    {/* Header */}
                    <AnimatedSection>
                        <div className="mb-16">
                            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-4">
                                2025 AI IMPLEMENTATION INDEX
                            </p>
                            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold mb-4">
                                Your AI pilots are dying. Here's why.
                            </h1>
                        </div>
                    </AnimatedSection>

                    {/* Live Dashboard Grid */}
                    <div className="grid lg:grid-cols-4 gap-6 mb-16">
                        {dashboardStats.map((stat, idx) => (
                            <AnimatedSection key={stat.id} delay={idx * 0.1}>
                                <div
                                    className="relative bg-black border border-white/10 p-6 hover:border-white/30 transition-all cursor-pointer"
                                    onMouseEnter={() => setHoveredStat(stat.id)}
                                    onMouseLeave={() => setHoveredStat(null)}
                                >
                                    {/* Background accent */}
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{ backgroundColor: stat.color }}
                                    ></div>

                                    <div className="relative z-10">
                                        <div className="text-4xl font-bold mb-2">
                                            <AnimatedCounter
                                                end={stat.value}
                                                prefix={stat.prefix}
                                                suffix={stat.suffix}
                                            />
                                        </div>
                                        <div className="text-sm text-gray uppercase tracking-wider">
                                            {stat.label}
                                        </div>

                                        {/* Hover insight */}
                                        <div className={`absolute top-full left-0 right-0 mt-2 p-3 bg-black border border-white/20 text-xs transition-opacity ${hoveredStat === stat.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                            }`}>
                                            {stat.insight}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Visual Success Path */}
                    <AnimatedSection delay={0.5}>
                        <div className="bg-black/50 backdrop-blur border border-white/10 p-8">
                            <h2 className="text-2xl font-bold mb-6">From Pilot to Production</h2>

                            {/* Progress visualization */}
                            <div className="relative h-12 mb-8">
                                <div className="absolute inset-0 bg-white/5 rounded-full overflow-hidden">
                                    {/* Animated progress fill */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-500/50 via-yellow-500/50 to-green-500/50 transition-all duration-1000"
                                        style={{ width: '100%' }}
                                    ></div>
                                </div>

                                {/* Milestone markers */}
                                <div className="absolute inset-0 flex justify-between items-center px-4">
                                    <div className="text-xs">STUCK IN PILOTS</div>
                                    <div className="text-xs font-bold">PRODUCTION SUCCESS</div>
                                </div>
                            </div>

                            {/* Single Clear CTA */}
                            <div className="text-center">
                                <p className="text-sm text-gray mb-4">
                                    Discover why 77% fail and how to join the successful 23%
                                </p>
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="px-8 py-4 bg-white text-black hover:bg-gray-light transition-all font-medium"
                                >
                                    DOWNLOAD IMPLEMENTATION INDEX
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Maturity Distribution */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-12 text-center">Where Companies Get Stuck</h2>
                    </AnimatedSection>

                    <div className="max-w-4xl mx-auto">
                        {maturityLevels.map((level, idx) => (
                            <AnimatedSection key={level.level} delay={idx * 0.1}>
                                <div
                                    className="mb-4 cursor-pointer"
                                    onClick={() => setSelectedMaturity(level.level)}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-sm font-medium w-32">{level.name}</span>
                                        <div className="flex-1 relative h-8 bg-white/5 rounded overflow-hidden">
                                            <div
                                                className="absolute left-0 top-0 bottom-0 bg-white/30 transition-all duration-1000"
                                                style={{ width: `${level.percentage}%` }}
                                            ></div>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs">
                                                {level.percentage}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {selectedMaturity && (
                        <AnimatedSection>
                            <div className="mt-8 p-6 bg-black border border-white/10 max-w-2xl mx-auto">
                                <h3 className="font-bold mb-2">Stage {selectedMaturity} Insights</h3>
                                <p className="text-sm text-gray mb-4">
                                    Companies at this stage typically face governance and technical architecture challenges.
                                </p>
                                <Link href="/contact">
                                    <Button className="text-sm">Get Stage-Specific Guidance →</Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    )}
                </div>
            </section>

            {/* Four Pillars - Visual Only */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[1200px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-12 text-center">Implementation Pillars</h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-4 gap-8">
                        {implementationPillars.map((pillar, idx) => (
                            <AnimatedSection key={pillar.name} delay={idx * 0.1}>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-6xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="font-medium mb-2">{pillar.name}</h3>
                                    <p className="text-xs text-gray opacity-0 group-hover:opacity-100 transition-opacity">
                                        {pillar.key}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[600px] mx-auto px-8 text-center">
                    <AnimatedSection>
                        <div className="mb-8">
                            <div className="text-6xl font-bold mb-4">90</div>
                            <p className="text-xl">days to production-ready AI</p>
                        </div>

                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full group relative overflow-hidden border border-white/20 mb-4"
                        >
                            <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                                DOWNLOAD IMPLEMENTATION INDEX
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        </button>

                        <Link href="/contact">
                            <button className="w-full px-8 py-4 text-sm text-gray hover:text-white transition-colors">
                                Need help with implementation? Talk to an expert →
                            </button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Simplified Download Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8">
                    <AnimatedSection>
                        <div className="bg-black border border-white/20 p-8 max-w-md w-full">
                            <h3 className="text-2xl font-bold mb-6">
                                Download Implementation Index
                            </h3>
                            <p className="text-sm text-gray mb-6">
                                Get instant access to the 2025 Enterprise AI Implementation Index
                            </p>

                            <form onSubmit={handleQuickDownload} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />

                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />

                                <input
                                    type="text"
                                    placeholder="Company"
                                    required
                                    className="w-full bg-transparent border border-white/20 p-3 text-white placeholder-gray focus:border-white/40 transition-colors"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-white text-black px-6 py-3 font-medium hover:bg-gray-light transition-colors"
                                    >
                                        SEND REPORT
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-6 py-3 text-gray hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            )}
        </main>
    );
}
