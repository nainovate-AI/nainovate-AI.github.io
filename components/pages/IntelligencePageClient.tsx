'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { useState } from 'react';
import LiveChatBot from '@/components/ui/LiveChatBot';

export default function IntelligencePageClient() {
  const [activeUseCase, setActiveUseCase] = useState<'analytics' | 'compliance' | 'quality' | 'monitoring'>('analytics');

  const intelligenceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI for Intelligence",
    "description": "Transform data into insights with AI-powered intelligence solutions",
    "provider": {
      "@type": "Organization",
      "name": "Nainovate"
    }
  };

  const useCases = {
    analytics: {
      title: 'Analytics Dashboards',
      problem: 'Data is scattered across systems. Building reports takes days. Insights come too late to act on.',
      solution: 'AI-powered dashboards aggregate data in real-time, answer questions in natural language, and surface insights automatically.',
      features: [
        'Natural language queries',
        'Real-time data sync',
        'Automated reporting',
        'Predictive analytics',
        'Custom visualizations',
        'Export capabilities'
      ],
      industries: ['Enterprise', 'Finance', 'Healthcare', 'Manufacturing']
    },
    compliance: {
      title: 'Compliance Tracking',
      problem: 'Manual compliance checks are error-prone. Regulations change frequently. Audit trails are incomplete.',
      solution: 'AI monitors activities 24/7, flags violations instantly, maintains complete audit logs, and adapts to regulatory changes.',
      features: [
        'Automated monitoring',
        'Violation detection',
        'Audit trail generation',
        'Regulatory updates',
        'Risk scoring',
        'Compliance reporting'
      ],
      industries: ['Government', 'Financial Services', 'Healthcare', 'Manufacturing']
    },
    quality: {
      title: 'Quality Assurance',
      problem: 'Quality issues discovered after production. Manual inspection is slow and inconsistent. Root causes unclear.',
      solution: 'AI inspects 100% of output in real-time, identifies defects instantly, tracks trends, and recommends corrective actions.',
      features: [
        'Defect detection',
        'Real-time inspection',
        'Trend analysis',
        'Root cause identification',
        'Corrective actions',
        'Performance tracking'
      ],
      industries: ['Manufacturing', 'Pharma', 'Food & Beverage', 'Automotive']
    },
    monitoring: {
      title: 'Process Monitoring',
      problem: 'Critical processes run blind. Issues escalate before detection. Performance bottlenecks are hidden.',
      solution: 'AI monitors all processes 24/7, predicts failures before they occur, and optimizes performance automatically.',
      features: [
        '24/7 monitoring',
        'Anomaly detection',
        'Predictive maintenance',
        'Performance optimization',
        'Alert management',
        'Capacity planning'
      ],
      industries: ['Manufacturing', 'Energy', 'Logistics', 'IT Operations']
    }
  };

  const currentCase = useCases[activeUseCase];

  return (
    <main className="pt-4 relative z-10">
      <JsonLd data={intelligenceSchema} />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center border-b border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
              AI FOR INTELLIGENCE
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.02em] mb-8">
              <span className="block">TRANSFORM</span>
              <span className="block">DATA INTO</span>
              <span className="block">INSIGHTS</span>
            </h1>
            <p className="text-xl text-gray max-w-2xl leading-relaxed mb-12">
              Deploy AI agents that analyze data, ensure compliance, monitor quality, and optimize processes.
              Make data-driven decisions in real-time.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 text-lg">
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
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-gray">Data Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Real-time</div>
              <div className="text-gray">Insights</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-gray">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50%</div>
              <div className="text-gray">Faster Decisions</div>
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
              Turn your data into competitive advantage
            </p>
          </div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-2 mb-16 flex-wrap">
            <button
              onClick={() => setActiveUseCase('analytics')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'analytics'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              ANALYTICS
            </button>
            <button
              onClick={() => setActiveUseCase('compliance')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'compliance'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              COMPLIANCE
            </button>
            <button
              onClick={() => setActiveUseCase('quality')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'quality'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              QUALITY ASSURANCE
            </button>
            <button
              onClick={() => setActiveUseCase('monitoring')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'monitoring'
                ? 'text-white border-b-2 border-white'
                : 'text-gray hover:text-white border-b-2 border-transparent'
                }`}
            >
              PROCESS MONITORING
            </button>
          </div>

          {/* Use Case Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Live Chat Bot */}
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
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                <span className="text-3xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect Data Sources</h3>
              <p className="text-gray">
                Link databases, APIs, and systems. AI automatically understands your data structure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                <span className="text-3xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Define Metrics & Rules</h3>
              <p className="text-gray">
                Set KPIs, thresholds, and compliance rules. AI monitors and alerts automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                <span className="text-3xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Insights</h3>
              <p className="text-gray">
                Ask questions in plain English. Get instant answers with visual dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            READY TO UNLOCK YOUR DATA?
          </h2>
          <p className="text-xl text-gray mb-12">
            See how AI agents can transform your analytics, compliance, and quality processes.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 text-lg">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 text-lg">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}