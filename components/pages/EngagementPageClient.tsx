'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { useState } from 'react';
import LiveChatBot from '@/components/ui/LiveChatBot';
import mockData from '@/data/marketing/engagement.json';

export default function EngagementPageClient() {
  const [activeUseCase, setActiveUseCase] = useState<'customer' | 'citizen' | 'multichannel' | 'quality'>('customer');

  const engagementSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI for Engagement",
    "description": "Scale customer interactions with AI-powered engagement solutions",
    "provider": {
      "@type": "Organization",
      "name": "Nainovate"
    }
  };

  const currentCase = mockData.useCases[activeUseCase];

  return (
    <main className="pt-16 md:pt-20 relative z-10">
      <JsonLd data={engagementSchema} />

      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.2em] text-fg-muted uppercase mb-8">
              AI FOR ENGAGEMENT
            </p>
            <h1 className="heading-primary mb-8">
              <span className="block">SCALE</span>
              <span className="block">CUSTOMER</span>
              <span className="block">INTERACTIONS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-2xl leading-relaxed mb-6 md:mb-12">
              Deploy AI agents that handle customer service, citizen requests, and multi-channel support.
              Deliver exceptional experiences at scale, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/contact">
                <Button className="px-6 py-3 text-lg w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-fg-muted">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-fg-muted">Query Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">&lt;2s</div>
              <div className="text-fg-muted">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-fg-muted">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="heading-primary mb-6">USE CASES</h2>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-2xl mx-auto">
              Transform how you engage with customers and citizens
            </p>
          </div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-2 mb-6 md:mb-8 flex-wrap">
            <button
              onClick={() => setActiveUseCase('customer')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'customer'
                ? 'text-fg-strong border-b-2 border-fg-strong'
                : 'text-fg-muted hover:text-fg-strong border-b-2 border-transparent'
                }`}
            >
              CUSTOMER SERVICE
            </button>
            <button
              onClick={() => setActiveUseCase('citizen')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'citizen'
                ? 'text-fg-strong border-b-2 border-fg-strong'
                : 'text-fg-muted hover:text-fg-strong border-b-2 border-transparent'
                }`}
            >
              CITIZEN PORTAL
            </button>
            <button
              onClick={() => setActiveUseCase('multichannel')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'multichannel'
                ? 'text-fg-strong border-b-2 border-fg-strong'
                : 'text-fg-muted hover:text-fg-strong border-b-2 border-transparent'
                }`}
            >
              MULTI-CHANNEL
            </button>
            <button
              onClick={() => setActiveUseCase('quality')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${activeUseCase === 'quality'
                ? 'text-fg-strong border-b-2 border-fg-strong'
                : 'text-fg-muted hover:text-fg-strong border-b-2 border-transparent'
                }`}
            >
              QUALITY ASSURANCE
            </button>
          </div>

          {/* Use Case Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Left: Live Chat Bot */}
            <div className="order-2 lg:order-1">
              <LiveChatBot type={activeUseCase} autoPlay={true} />
            </div>

            {/* Right: Details */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{currentCase.title}</h3>

              <div className="mb-8">
                <div className="text-sm font-semibold text-red-400 mb-2">THE PROBLEM</div>
                <p className="text-fg-muted text-lg">{currentCase.problem}</p>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-green-400 mb-2">THE SOLUTION</div>
                <p className="text-lg">{currentCase.solution}</p>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-fg-muted mb-4">KEY FEATURES</div>
                <div className="grid grid-cols-2 gap-3">
                  {currentCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-fg-faint">✓</span>
                      <span className="text-fg-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-fg-muted mb-4">INDUSTRIES</div>
                <div className="flex flex-wrap gap-2">
                  {currentCase.industries.map((industry, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface-2 rounded-full text-sm border border-border">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/contact">
                <Button className="px-6 py-3">
                  Request Demo →
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="heading-primary mb-6 md:mb-10 text-center">HOW IT WORKS</h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-2xl md:text-3xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Design Conversations</h3>
              <p className="text-fg-muted">
                Map customer journeys, define intents, and create response templates. Import existing FAQs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-2xl md:text-3xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Train & Integrate</h3>
              <p className="text-fg-muted">
                AI learns your brand voice. Connect to CRM, ticketing, and knowledge bases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-2xl md:text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">Launch & Optimize</h3>
              <p className="text-fg-muted">
                Deploy across channels. Monitor performance. Continuously improve with analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="heading-primary mb-8">
            READY TO SCALE YOUR ENGAGEMENT?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted mb-6 md:mb-12">
            See how AI agents can transform your customer and citizen interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact">
              <Button className="px-6 py-3 text-lg w-full sm:w-auto">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button className="px-6 py-3 text-lg w-full sm:w-auto">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}