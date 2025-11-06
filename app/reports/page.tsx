import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Research & Reports | Nainovate',
    description: 'Access industry-leading AI research reports on implementation, readiness, and compliance. Free downloads for enterprise leaders.',
    keywords: 'AI reports, AI research, enterprise AI, AI implementation, AI compliance',
};

export default function ReportsPage() {
    return (
        <main className="bg-black min-h-screen pt-20">
            {/* Hero */}
            <section className="py-20">
                <div className="max-w-[1400px] mx-auto px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-4">
                                NAINOVATE RESEARCH
                            </p>
                            <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-6">
                                <span className="block">2025 AI REPORTS</span>
                            </h1>
                            <p className="text-xl text-gray max-w-2xl mx-auto">
                                Two perspectives on enterprise AI success: Implementation reality and compliance readiness
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Reports Grid - Now Differentiated */}
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Implementation Report - Business Focus */}
                        <AnimatedSection delay={0.1}>
                            <Link href="/ai-implementation-index">
                                <div className="h-full border border-white/10 hover:border-white/30 transition-all relative overflow-hidden group">
                                    {/* Visual indicator */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <p className="text-sm text-gray mb-2">FOR BUSINESS LEADERS</p>
                                            <h2 className="text-3xl font-bold mb-2">Enterprise AI Implementation Index</h2>
                                            <p className="text-sm text-gray">2025 Edition</p>
                                        </div>

                                        {/* Key stat - visual focus */}
                                        <div className="mb-8 py-8 border-y border-white/10">
                                            <div className="text-center">
                                                <div className="text-6xl font-bold mb-2">77%</div>
                                                <p className="text-lg">of AI pilots never reach production</p>
                                            </div>
                                        </div>

                                        {/* What's inside */}
                                        <div className="mb-8">
                                            <p className="font-medium mb-4">What you&apos;ll learn:</p>
                                            <ul className="space-y-2 text-sm text-gray">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>Why pilots fail and how to avoid the trap</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>5-stage maturity assessment framework</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>90-day production deployment roadmap</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray">15-minute read</span>
                                            <span className="font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                                GET THE REPORT
                                                <span>→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>

                        {/* Readiness Report - Compliance Focus */}
                        <AnimatedSection delay={0.2}>
                            <Link href="/ai-readiness-report-2025">
                                <div className="h-full border border-white/10 hover:border-white/30 transition-all relative overflow-hidden group">
                                    {/* Visual indicator */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/60 to-white/30"></div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <p className="text-sm text-gray mb-2">FOR COMPLIANCE & GOVERNANCE</p>
                                            <h2 className="text-3xl font-bold mb-2">AI Readiness Report</h2>
                                            <p className="text-sm text-gray">2025 Global Edition</p>
                                        </div>

                                        {/* Key stat - visual focus */}
                                        <div className="mb-8 py-8 border-y border-white/10">
                                            <div className="text-center">
                                                <div className="text-6xl font-bold mb-2">20%</div>
                                                <p className="text-lg">achieve full compliance readiness</p>
                                            </div>
                                        </div>

                                        {/* What's inside */}
                                        <div className="mb-8">
                                            <p className="font-medium mb-4">What you&apos;ll learn:</p>
                                            <ul className="space-y-2 text-sm text-gray">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>Global regulatory landscape (EU, US, India, GCC)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>5 pillars of AI readiness framework</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-white mt-0.5">→</span>
                                                    <span>Compliance requirements by jurisdiction</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray">20-minute read</span>
                                            <span className="font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                                GET THE REPORT
                                                <span>→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Trust Indicators */}
                    <AnimatedSection delay={0.3}>
                        <div className="mt-16 text-center">
                            <p className="text-sm text-gray">
                                Join 500+ enterprises using our research to guide their AI journey
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="py-20 border-t border-white/10 bg-white/[0.02]">
                <div className="max-w-[1000px] mx-auto px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-12 text-center">Why These Reports Matter Now</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border-l-2 border-white/20 pl-6">
                                <h3 className="font-bold mb-2">The Implementation Crisis</h3>
                                <p className="text-gray">
                                    $2.3M average loss from failed AI pilots. Our Implementation Index shows you exactly how to avoid becoming another statistic.
                                </p>
                            </div>

                            <div className="border-l-2 border-white/20 pl-6">
                                <h3 className="font-bold mb-2">The Compliance Imperative</h3>
                                <p className="text-gray">
                                    4 major jurisdictions, dozens of regulations. Our Readiness Report maps the entire compliance landscape for 2025.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-[800px] mx-auto px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8">
                            Reports Are Just the Beginning
                        </h2>
                        <p className="text-gray mb-8">
                            Ready to move from insight to action? Let&apos;s build your AI success story together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="group relative overflow-hidden border border-white/20">
                                    <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                                        SCHEDULE STRATEGY CALL →
                                    </span>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                </button>
                            </Link>

                            <Link href="/ai-center-of-excellence">
                                <button className="px-8 py-4 text-gray hover:text-white transition-colors border border-white/10">
                                    Explore AI Center of Excellence
                                </button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
