'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { useState } from 'react';
import LiveChatBot from '@/components/ui/LiveChatBot';
import { div } from 'framer-motion/client';

export default function OperationsPageClient() {
    const [activeUseCase, setActiveUseCase] = useState<'hr' | 'boq' | 'document' | 'search'>('hr');

    const operationsSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI for Operations",
        "description": "Automate internal workflows with intelligent AI agents",
        "provider": {
            "@type": "Organization",
            "name": "Nainovate"
        }
    };

    const useCases = {
        hr: {
            title: 'HR Screening Assistant',
            problem: 'Manual resume screening takes hours. HR teams spend 60% of time on repetitive tasks.',
            solution: 'AI agent analyzes candidates against job requirements in seconds, providing match scores and recommendations.',
            features: [
                'Automated resume parsing',
                'Skills gap analysis',
                'Interview scheduling',
                'Candidate ranking',
                'Compliance tracking',
                'Onboarding automation'
            ],
            industries: ['Technology', 'Healthcare', 'Manufacturing', 'Retail']
        },
        boq: {
            title: 'BOQ Generation',
            problem: 'Creating Bills of Quantities from architectural drawings is time-consuming and error-prone.',
            solution: 'AI extracts quantities from drawings and specifications, generating accurate BOQs in minutes.',
            features: [
                'Drawing analysis',
                'Quantity extraction',
                'Material estimation',
                'Cost calculation',
                'Version tracking',
                'Export to Excel/PDF'
            ],
            industries: ['Construction', 'Real Estate', 'Engineering', 'Architecture']
        },
        document: {
            title: 'Document Processing',
            problem: 'Processing contracts, invoices, and reports manually is slow and inconsistent.',
            solution: 'AI extracts key information from any document type, categorizes, and routes for approval.',
            features: [
                'OCR & text extraction',
                'Smart classification',
                'Data validation',
                'Approval workflows',
                'Version control',
                'Audit trails'
            ],
            industries: ['Legal', 'Finance', 'Government', 'Insurance']
        },
        search: {
            title: 'Enterprise Search',
            problem: 'Finding information across multiple systems wastes 20% of employee time.',
            solution: 'AI-powered search understands context and intent, surfacing relevant information instantly.',
            features: [
                'Natural language queries',
                'Cross-system search',
                'Semantic understanding',
                'Personalized results',
                'Access control',
                'Usage analytics'
            ],
            industries: ['Enterprise', 'Healthcare', 'Education', 'Technology']
        }
    };

    const currentCase = useCases[activeUseCase];

    return (
        <main className="pt-4 relative z-10">
            <JsonLd data={operationsSchema} />

            {/* Hero */}
            <section className="min-h-[70vh] flex items-center border-b border-white/10 py-20">
                <div className="max-w-[1400px] mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
                            AI FOR OPERATIONS
                        </p>
                        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.02em] mb-8">
                            <span className="block">AUTOMATE</span>
                            <span className="block">INTERNAL</span>
                            <span className="block">WORKFLOWS</span>
                        </h1>
                        <p className="text-xl text-gray max-w-2xl leading-relaxed mb-12">
                            Deploy AI agents that handle HR screening, document processing, BOQ generation,
                            and enterprise search. Free your team to focus on strategic work.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/contact">
                                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                                    Schedule Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">70%</div>
                            <div className="text-gray">Faster Processing</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">60%</div>
                            <div className="text-gray">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">90%</div>
                            <div className="text-gray">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2">24/7</div>
                            <div className="text-gray">Availability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-32">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">USE CASES</h2>
                        <p className="text-xl text-gray max-w-2xl mx-auto">
                            Real-world applications that transform how your operations team works
                        </p>
                    </div>

                    {/* Use Case Tabs - Styled like Solutions page */}
                    <div className="flex justify-center gap-2 mb-16">
                        <button
                            onClick={() => setActiveUseCase('hr')}
                            className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'hr'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray hover:text-white border-b-2 border-transparent'
                                }`}
                        >
                            HR SCREENING
                        </button>
                        <button
                            onClick={() => setActiveUseCase('boq')}
                            className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'boq'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray hover:text-white border-b-2 border-transparent'
                                }`}
                        >
                            BOQ GENERATION
                        </button>
                        <button
                            onClick={() => setActiveUseCase('document')}
                            className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'document'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray hover:text-white border-b-2 border-transparent'
                                }`}
                        >
                            DOCUMENT PROCESSING
                        </button>
                        <button
                            onClick={() => setActiveUseCase('search')}
                            className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'search'
                                ? 'text-white border-b-2 border-white'
                                : 'text-gray hover:text-white border-b-2 border-transparent'
                                }`}
                        >
                            ENTERPRISE SEARCH
                        </button>
                    </div>

                    {/* Use Case Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Live Chat Bot (Auto-play, No scroll) */}
                        <div className="order-2 lg:order-1">
                            <LiveChatBot type={activeUseCase} autoPlay={true} />
                        </div>

                        {/* Right: Details */}
                        <div className="order-1 lg:order-2">
                            <h3 className="text-4xl font-bold mb-6">{currentCase.title}</h3>

                            <div className="mb-8">
                                <div className="text-sm font-semibold text-red-400 mb-2">THE PROBLEM</div>
                                <p className="text-gray text-lg">{currentCase.problem}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm font-semibold text-green-400 mb-2">THE SOLUTION</div>
                                <p className="text-lg">{currentCase.solution}</p>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm font-semibold text-gray-400 mb-4">KEY FEATURES</div>
                                <div className="grid grid-cols-2 gap-3">
                                    {currentCase.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-white/40">✓</span>
                                            <span className="text-gray text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-sm font-semibold text-gray-400 mb-4">INDUSTRIES</div>
                                <div className="flex flex-wrap gap-2">
                                    {currentCase.industries.map((industry, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact">
                                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                                    Request Demo →
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-32 border-t border-white/10 bg-white/[0.01]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <h2 className="text-5xl font-bold mb-16 text-center">HOW IT WORKS</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                <span className="text-3xl font-bold text-blue-400">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Configure Agent</h3>
                            <p className="text-gray">
                                Define your workflow, upload templates, and set business rules. No coding required.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                <span className="text-3xl font-bold text-blue-400">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Train & Test</h3>
                            <p className="text-gray">
                                Our AI learns your specific requirements. Test with sample data before going live.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                <span className="text-3xl font-bold text-blue-400">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Deploy & Scale</h3>
                            <p className="text-gray">
                                Launch in days. Agent handles volume automatically with continuous learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 border-t border-white/10">
                <div className="max-w-[800px] mx-auto px-8 text-center">
                    <h2 className="text-5xl font-bold mb-8">
                        READY TO AUTOMATE YOUR OPERATIONS?
                    </h2>
                    <p className="text-xl text-gray mb-12">
                        See how AI agents can transform your internal workflows in just 30 days.
                    </p>
                    <div className="flex gap-6 justify-center">
                        <Link href="/contact">
                            <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 text-lg">
                                Schedule Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Mockup Components
function HRMockup() {
    return (
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-8">
            {/* Chat Interface Mockup */}
            <div className="bg-black border border-white/10 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">👤</span>
                    </div>
                    <div>
                        <div className="text-sm font-semibold">NIA - HR Assistant</div>
                        <div className="text-xs text-gray">Online</div>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="text-gray">• Leave management</div>
                    <div className="text-gray">• Interview scheduling</div>
                    <div className="text-gray">• Onboarding processes</div>
                    <div className="text-xs text-gray mt-4">How can I assist you today?</div>
                </div>

                <div className="pt-4 border-t border-white/10">
                    <div className="bg-white/5 rounded p-3 mb-3">
                        <div className="text-xs text-gray mb-1">User Query</div>
                        <div className="text-sm">What's the match percentage for candidate C-1247 with job J-589?</div>
                    </div>

                    <div className="bg-blue-500/10 rounded p-4 border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
                                <span className="text-xs">🤖</span>
                            </div>
                            <div className="text-sm font-semibold">Analyzing candidate...</div>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Overall Match: <strong>78.5%</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Matched Skills: (4/5)</span>
                            </div>
                            <div className="text-xs text-gray mt-3">
                                • Python (5 years exp)<br />
                                • Machine Learning (3 years)<br />
                                • Data Analysis (4 years)<br />
                                • SQL (6 years)
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-yellow-400">⚠</span>
                                <span className="text-xs">Gaps Identified:</span>
                            </div>
                            <div className="text-xs text-gray">
                                • AWS certification (Required)<br />
                                • Team lead experience (2 years needed)
                            </div>
                            <div className="mt-3 text-xs">
                                <span className="text-green-400">💡 Recommendation:</span> Good technical fit. Consider for interview with focus on leadership potential.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="bg-white/5 rounded px-3 py-2 text-xs text-gray flex items-center justify-between">
                        <span>Type a message...</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BOQMockup() {
    return (
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-8">
            <div className="bg-black border border-white/10 rounded-lg p-6 space-y-4">
                <div className="text-sm font-semibold mb-4">BOQ Generation Agent</div>

                <div className="bg-white/5 rounded p-4 border border-white/10">
                    <div className="text-xs text-gray mb-2">Upload Drawing</div>
                    <div className="border-2 border-dashed border-white/20 rounded p-4 text-center">
                        <div className="text-2xl mb-2">📄</div>
                        <div className="text-xs text-gray">architectural_plan_v3.pdf</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray">Processing...</span>
                        <span className="text-green-400">85%</span>
                    </div>
                    <div className="bg-white/5 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>

                <div className="bg-blue-500/10 rounded p-4 border border-blue-500/20 space-y-2 text-xs">
                    <div className="flex justify-between">
                        <span>Concrete (m³)</span>
                        <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Steel (tons)</span>
                        <span className="font-semibold">89.5</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Bricks (units)</span>
                        <span className="font-semibold">45,230</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10">
                        <span>Estimated Cost</span>
                        <span className="font-semibold">$2.4M</span>
                    </div>
                </div>

                <button className="w-full bg-white text-black rounded py-2 text-sm font-semibold hover:bg-white/90 transition-colors">
                    Export to Excel
                </button>
            </div>
        </div>
    );
}

function DocumentMockup() {
    return (
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-8">
            <div className="bg-black border border-white/10 rounded-lg p-6 space-y-4">
                <div className="text-sm font-semibold mb-4">Document Processing</div>

                <div className="space-y-3">
                    <div className="bg-white/5 rounded p-3 border-l-2 border-green-400">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold">invoice_Q42024.pdf</span>
                            <span className="text-xs text-green-400">Processed</span>
                        </div>
                        <div className="text-xs text-gray space-y-1">
                            <div>• Vendor: Acme Corp</div>
                            <div>• Amount: $15,240</div>
                            <div>• Due Date: Nov 30, 2024</div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded p-3 border-l-2 border-yellow-400">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold">contract_amendment.docx</span>
                            <span className="text-xs text-yellow-400">Review Required</span>
                        </div>
                        <div className="text-xs text-gray space-y-1">
                            <div>• Contract Type: NDA</div>
                            <div>• Parties: 2</div>
                            <div>• Flagged: Non-standard clause</div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded p-3 border-l-2 border-blue-400">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold">expense_report_nov.xlsx</span>
                            <span className="text-xs text-blue-400">Processing</span>
                        </div>
                        <div className="text-xs text-gray">
                            Extracting line items...
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                            <div className="text-2xl font-bold text-green-400">124</div>
                            <div className="text-gray">Processed</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-yellow-400">7</div>
                            <div className="text-gray">Pending</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-400">98%</div>
                            <div className="text-gray">Accuracy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SearchMockup() {
    return (
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-8">
            <div className="bg-black border border-white/10 rounded-lg p-6 space-y-4">
                <div className="text-sm font-semibold mb-4">Enterprise Search</div>

                <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                    <input
                        type="text"
                        placeholder="What are our Q3 revenue projections for APAC region?"
                        className="bg-transparent w-full text-sm outline-none"
                        readOnly
                    />
                </div>

                <div className="space-y-3">
                    <div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 bg-blue-500/20 rounded">📊 Excel</span>
                            <span className="text-xs font-semibold">Q3_Forecast_APAC.xlsx</span>
                        </div>
                        <div className="text-xs text-gray mb-2">
                            Revenue projection for APAC: $8.4M (12% growth YoY)
                        </div>
                        <div className="text-xs text-blue-400">Finance Department • Updated 2 days ago</div>
                    </div>

                    <div className="bg-white/5 rounded p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 bg-white/10 rounded">📄 Doc</span>
                            <span className="text-xs font-semibold">APAC_Strategy_Q3.docx</span>
                        </div>
                        <div className="text-xs text-gray mb-2">
                            Key markets: Singapore (+15%), India (+8%), Australia (+6%)
                        </div>
                        <div className="text-xs text-gray">Strategy Team • Updated 1 week ago</div>
                    </div>

                    <div className="bg-white/5 rounded p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-0.5 bg-white/10 rounded">📧 Email</span>
                            <span className="text-xs font-semibold">RE: APAC Revenue Update</span>
                        </div>
                        <div className="text-xs text-gray mb-2">
                            Q3 tracking ahead of forecast by 3%...
                        </div>
                        <div className="text-xs text-gray">From: CFO • Sent yesterday</div>
                    </div>
                </div>

                <div className="pt-3 text-xs text-gray text-center">
                    Found 24 results across 5 systems in 0.3s
                </div>
            </div>
        </div>
    );
}