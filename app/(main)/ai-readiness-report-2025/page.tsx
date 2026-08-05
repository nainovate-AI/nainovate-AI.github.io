'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';

export default function AIReadinessReport2025Page() {
    const [showForm, setShowForm] = useState(false);
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Dynamically import the report download library
            const { validateFormData, submitReportDownload, trackDownloadEvent } = await import('@/lib/reportDownload');

            // Validate form
            const validation = validateFormData(
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    role: formData.role,
                    region: formData.region,
                },
                'readiness-report'
            );

            if (!validation.valid) {
                setErrorMessage(validation.errors.join(', '));
                setSubmitStatus('error');
                setIsSubmitting(false);
                return;
            }

            // Submit to backend
            const response = await submitReportDownload({
                name: formData.name,
                email: formData.email,
                company: formData.company,
                role: formData.role,
                region: formData.region,
                report_type: 'readiness-report',
            });

            if (response.result === 'success') {
                setSubmitStatus('success');
                trackDownloadEvent('readiness-report');

                // Reset form and close modal after 4 seconds
                setTimeout(() => {
                    setShowForm(false);
                    setFormData({ name: '', email: '', company: '', role: '', region: '' });
                    setSubmitStatus('idle');
                }, 4000);
            } else {
                setSubmitStatus('error');
                setErrorMessage(response.message || 'Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <main className="bg-bg min-h-screen pt-20">
            <JsonLd data={reportSchema} />

            {/* Back Button */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-8">
                <Link href="/reports" className="inline-flex items-center gap-2 text-fg-muted hover:text-fg-strong transition-colors group">
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm uppercase tracking-wider">Back to Reports</span>
                </Link>
            </div>
            {/* Hero Section - Authoritative */}
            <section className="min-h-[70svh] flex items-center relative overflow-hidden">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.03) 3px)',
                        backgroundSize: '100% 4px'
                    }}></div>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <div className="max-w-4xl">
                            {/* Official badge */}
                            <div className="inline-flex items-center gap-2 mb-8 border border-border-strong px-4 py-2">
                                <div className="w-2 h-2 bg-fg-strong rounded-full"></div>
                                <span className="text-sm tracking-wider">2025 OFFICIAL REPORT</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-6">
                                <span className="block">AI READINESS</span>
                                <span className="block text-gradient-aurora">REPORT 2025</span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-12 max-w-3xl">
                                The Global State of AI Readiness & Responsible Innovation
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-medium border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all"
                                >
                                    DOWNLOAD FULL REPORT
                                </button>

                                <a href="#readiness-assessment" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-medium text-fg-muted hover:text-fg-strong transition-colors border border-border text-center">
                                    ASSESS YOUR READINESS
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Key Finding Banner */}
            <section className="py-8 border-y border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">80%</span>
                                <span className="text-base sm:text-lg">of enterprises have AI deployment</span>
                            </div>
                            <div className="text-xl md:text-2xl font-bold">×</div>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">20%</span>
                                <span className="text-base sm:text-lg">achieve full-scale readiness</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Global Readiness Map */}
            <section className="py-8 md:py-12">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Global AI Readiness Landscape</h2>
                        <p className="text-fg-muted mb-6 md:mb-12 max-w-3xl">
                            Regulatory maturity and compliance requirements across major economies
                        </p>
                    </AnimatedSection>

                    {/* Regional Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 md:mb-12">
                        {regions.map((region, idx) => (
                            <AnimatedSection key={region.id} delay={idx * 0.1}>
                                <div
                                    className="border border-border p-6 hover:border-border-strong transition-all cursor-pointer"
                                    style={{ borderTopColor: region.color, borderTopWidth: '3px' }}
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{region.name}</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-fg-muted">Status:</span>
                                            <span>{region.status}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-fg-muted">Regulation:</span>
                                            <span>{region.regulation}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-fg-muted">Readiness:</span>
                                            <span className="font-bold">{region.readiness}</span>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mt-4 h-1 bg-surface-2 rounded overflow-hidden">
                                        <div
                                            className="h-full bg-surface-20 transition-all duration-1000"
                                            style={{ width: region.readiness }}
                                        ></div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Key Insight */}
                    <AnimatedSection delay={0.5}>
                        <div className="bg-bg border border-border p-6 text-center">
                            <p className="text-lg font-medium">
                                &ldquo;AI readiness in 2025 is defined not by how much AI you use — but by how responsibly you use it.&rdquo;
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Five Pillars */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">The Five Pillars of AI Readiness</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {pillars.map((pillar, idx) => (
                            <AnimatedSection key={pillar.id} delay={idx * 0.1}>
                                <div
                                    className="text-center p-5 md:p-6 border border-border hover:border-border-strong transition-all cursor-pointer"
                                    onClick={() => setActivePillar(pillar.id)}
                                    style={{
                                        backgroundColor: activePillar === pillar.id ? 'rgba(255,255,255,0.05)' : 'transparent'
                                    }}
                                >
                                    <div className="text-3xl sm:text-4xl md:text-5xl mb-4 opacity-80">{pillar.icon}</div>
                                    <h3 className="text-sm font-medium">{pillar.name}</h3>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {activePillar && (
                        <AnimatedSection>
                            <div className="mt-8 p-6 bg-bg border border-border max-w-2xl mx-auto">
                                <p className="text-sm text-fg-muted">
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
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Critical Compliance Requirements</h2>
                            <p className="text-fg-muted max-w-2xl mx-auto">
                                Key capabilities needed for multi-jurisdiction AI deployment
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Visual Grid Instead of Table */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                                <div className="border border-border p-6 hover:border-border-strong transition-all">
                                    <h3 className="font-bold mb-2">{item.requirement}</h3>
                                    <p className="text-sm text-fg-muted mb-4">{item.description}</p>
                                    <div className="space-y-1">
                                        {item.critical.map((region, i) => (
                                            <div key={i} className="text-xs text-fg-muted flex items-center gap-2">
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
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">The Trust Framework</h2>
                        <p className="text-fg-muted text-center mb-6 md:mb-8 max-w-2xl mx-auto">
                            Successful AI deployment requires three foundational elements of trust
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <AnimatedSection delay={0.1}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-border-strong rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◈</span>
                                </div>
                                <h3 className="font-medium mb-2">Risk Assessment</h3>
                                <p className="text-sm text-fg-muted">Continuous evaluation of AI impact and mitigation strategies</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-border-strong rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◉</span>
                                </div>
                                <h3 className="font-medium mb-2">Transparency</h3>
                                <p className="text-sm text-fg-muted">Clear documentation of AI decisions and reasoning</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 border-2 border-border-strong rounded-full flex items-center justify-center">
                                    <span className="text-3xl">◆</span>
                                </div>
                                <h3 className="font-medium mb-2">Accountability</h3>
                                <p className="text-sm text-fg-muted">Human oversight and clear responsibility chains</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <AnimatedSection>
                        <div className="mb-6 md:mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready for Responsible AI?
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-fg-muted">
                                Join organizations building AI with trust, compliance, and human oversight at the core.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-medium border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all"
                            >
                                DOWNLOAD 2025 REPORT
                            </button>

                            <Link href="/ai-center-of-excellence" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4">
                                    Build Your AI Governance →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Download Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-fg-strong/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <AnimatedSection>
                        <div className="bg-bg border border-border-strong p-5 md:p-8 max-w-md w-full relative">
                            <h3 className="text-xl md:text-2xl font-bold mb-6">
                                Access AI Readiness Report 2025
                            </h3>

                            {submitStatus === 'success' ? (
                                <div className="py-8">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-center mb-2">Success!</h4>
                                    <p className="text-center text-fg-muted">
                                        Check your email for the download link. We&apos;ve sent the AI Readiness Report to <strong>{formData.email}</strong>
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        required
                                        className="w-full bg-transparent border border-border-strong p-3 text-fg-strong placeholder-gray focus:border-border-active transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={isSubmitting}
                                    />

                                    <input
                                        type="email"
                                        placeholder="Work Email*"
                                        required
                                        className="w-full bg-transparent border border-border-strong p-3 text-fg-strong placeholder-gray focus:border-border-active transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={isSubmitting}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company*"
                                        required
                                        className="w-full bg-transparent border border-border-strong p-3 text-fg-strong placeholder-gray focus:border-border-active transition-colors"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        disabled={isSubmitting}
                                    />

                                    <select
                                        required
                                        className="w-full bg-bg border border-border-strong p-3 text-fg-strong focus:border-border-active transition-colors cursor-pointer"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        disabled={isSubmitting}
                                    >
                                        <option value="" disabled>Select Role*</option>
                                        <option value="c-level">C-Level Executive (CEO, CTO, CFO)</option>
                                        <option value="vp-director">VP / Director</option>
                                        <option value="manager">Manager</option>
                                        <option value="engineer">Engineer / Developer</option>
                                        <option value="consultant">Consultant</option>
                                        <option value="other">Other</option>
                                    </select>

                                    <select
                                        required
                                        className="w-full bg-bg border border-border-strong p-3 text-fg-strong focus:border-border-active transition-colors cursor-pointer"
                                        value={formData.region}
                                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                        disabled={isSubmitting}
                                    >
                                        <option value="" disabled>Select Region*</option>
                                        <option value="europe">Europe</option>
                                        <option value="india">India</option>
                                        <option value="gcc">GCC (Middle East)</option>
                                        <option value="americas">Americas</option>
                                        <option value="apac">Asia Pacific</option>
                                    </select>

                                    {submitStatus === 'error' && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                                            {errorMessage || 'Something went wrong. Please try again.'}
                                        </div>
                                    )}

                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-fg-strong text-black px-6 py-3 font-medium hover:bg-gray-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'SENDING...' : 'ACCESS REPORT'}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowForm(false);
                                                setSubmitStatus('idle');
                                                setErrorMessage('');
                                            }}
                                            disabled={isSubmitting}
                                            className="flex-1 border border-border-strong px-6 py-3 font-medium hover:bg-surface-2 transition-colors disabled:opacity-50"
                                        >
                                            CANCEL
                                        </button>
                                    </div>

                                    <p className="text-xs text-fg-muted mt-4 text-center">
                                        By downloading, you agree to receive updates on AI compliance and governance.
                                    </p>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            )}
        </main>
    );
}
