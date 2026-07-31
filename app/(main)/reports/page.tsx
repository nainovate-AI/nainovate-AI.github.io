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
        <main className="bg-bg min-h-screen pt-16 md:pt-20">
            {/* Hero */}
            <section className="py-12 md:py-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-6 md:mb-8">
                            <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-4">
                                NAINOVATE RESEARCH
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold mb-6">
                                <span className="block">2025 AI <span className="text-gradient-aurora">REPORTS</span></span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-2xl mx-auto">
                                Two perspectives on enterprise AI success: Implementation reality and compliance readiness
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Reports Grid - Now Differentiated */}
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
                        {/* Implementation Report - Business Focus */}
                        <AnimatedSection delay={0.1}>
                            <Link href="/ai-implementation-index">
                                <div className="h-full border border-border hover:border-border-strong transition-all relative overflow-hidden group">
                                    {/* Visual indicator */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

                                    <div className="p-5 md:p-8">
                                        <div className="mb-6">
                                            <p className="text-sm text-fg-muted mb-2">FOR BUSINESS LEADERS</p>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Enterprise AI Implementation Index</h2>
                                            <p className="text-sm text-fg-muted">2025 Edition</p>
                                        </div>

                                        {/* Key stat - visual focus */}
                                        <div className="mb-8 py-8 border-y border-border">
                                            <div className="text-center">
                                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">77%</div>
                                                <p className="text-base md:text-lg">of AI pilots never reach production</p>
                                            </div>
                                        </div>

                                        {/* What's inside */}
                                        <div className="mb-8">
                                            <p className="font-medium mb-4">What you&apos;ll learn:</p>
                                            <ul className="space-y-2 text-sm text-fg-muted">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>Why pilots fail and how to avoid the trap</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>5-stage maturity assessment framework</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>90-day production deployment roadmap</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-fg-muted">15-minute read</span>
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
                                <div className="h-full border border-border hover:border-border-strong transition-all relative overflow-hidden group">
                                    {/* Visual indicator */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/60 to-white/30"></div>

                                    <div className="p-5 md:p-8">
                                        <div className="mb-6">
                                            <p className="text-sm text-fg-muted mb-2">FOR COMPLIANCE & GOVERNANCE</p>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2">AI Readiness Report</h2>
                                            <p className="text-sm text-fg-muted">2025 Global Edition</p>
                                        </div>

                                        {/* Key stat - visual focus */}
                                        <div className="mb-8 py-8 border-y border-border">
                                            <div className="text-center">
                                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">20%</div>
                                                <p className="text-base md:text-lg">achieve full compliance readiness</p>
                                            </div>
                                        </div>

                                        {/* What's inside */}
                                        <div className="mb-8">
                                            <p className="font-medium mb-4">What you&apos;ll learn:</p>
                                            <ul className="space-y-2 text-sm text-fg-muted">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>Global regulatory landscape (EU, US, India, GCC)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>5 pillars of AI readiness framework</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-fg-strong mt-0.5">→</span>
                                                    <span>Compliance requirements by jurisdiction</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-fg-muted">20-minute read</span>
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
                        <div className="mt-8 md:mt-16 text-center">
                            <p className="text-sm text-fg-muted">
                                Join 500+ enterprises using our research to guide their AI journey
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">Why These Reports Matter Now</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border-l-2 border-border-strong pl-6">
                                <h3 className="font-bold mb-2">The Implementation Crisis</h3>
                                <p className="text-fg-muted">
                                    $2.3M average loss from failed AI pilots. Our Implementation Index shows you exactly how to avoid becoming another statistic.
                                </p>
                            </div>

                            <div className="border-l-2 border-border-strong pl-6">
                                <h3 className="font-bold mb-2">The Compliance Imperative</h3>
                                <p className="text-fg-muted">
                                    4 major jurisdictions, dozens of regulations. Our Readiness Report maps the entire compliance landscape for 2025.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Reports Are Just the Beginning
                        </h2>
                        <p className="text-fg-muted mb-8">
                            Ready to move from insight to action? Let&apos;s build your AI success story together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 font-medium border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all">
                                    SCHEDULE STRATEGY CALL →
                                </button>
                            </Link>

                            <Link href="/ai-center-of-excellence" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 font-medium border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all">
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
