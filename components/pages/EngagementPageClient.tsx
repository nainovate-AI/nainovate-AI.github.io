'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { useState } from 'react';
import LiveChatBot from '@/components/ui/LiveChatBot';

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

  const useCases = {
    customer: {
      title: 'Customer Service Bot',
      problem: 'Support teams are overwhelmed. 70% of queries are repetitive. Response times are hours, not minutes.',
      solution: 'AI bot handles common queries instantly, escalates complex issues to humans with full context.',
      features: [
        '24/7 availability',
        'Instant responses',
        'Order tracking',
        'Password resets',
        'FAQ automation',
        'Smart escalation'
      ],
      industries: ['Retail', 'E-commerce', 'SaaS', 'Hospitality']
    },
    citizen: {
      title: 'Citizen Portal',
      problem: 'Government services have long wait times. Citizens struggle to navigate complex processes.',
      solution: 'AI-powered portal guides citizens through applications, tracks status, and answers questions 24/7.',
      features: [
        'Permit applications',
        'Status tracking',
        'Document upload',
        'Multi-language support',
        'Payment processing',
        'Appointment scheduling'
      ],
      industries: ['Government', 'Municipal Services', 'Public Sector', 'Education']
    },
    multichannel: {
      title: 'Multi-Channel Support',
      problem: 'Customers reach out via chat, email, SMS, social media. Context is lost between channels.',
      solution: 'Unified AI platform maintains conversation history across all channels, providing seamless experience.',
      features: [
        'Unified inbox',
        'Cross-channel history',
        'Email integration',
        'SMS support',
        'Social media monitoring',
        'Consistent responses'
      ],
      industries: ['Enterprise', 'Retail', 'Healthcare', 'Financial Services']
    },
    quality: {
      title: 'Service Quality Assurance',
      problem: 'Manual call review is slow. Quality issues are discovered too late. Training gaps are unclear.',
      solution: 'AI analyzes 100% of interactions in real-time, identifies issues, and recommends training.',
      features: [
        'Call transcription',
        'Sentiment analysis',
        'Compliance checking',
        'Performance scoring',
        'Training recommendations',
        'Trend identification'
      ],
      industries: ['Call Centers', 'Healthcare', 'Financial Services', 'Insurance']
    }
  };

  const currentCase = useCases[activeUseCase];

  return (
    <main className="pt-20 relative z-10">
      <JsonLd data={engagementSchema} />
      
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.2em] text-gray uppercase mb-8">
              AI FOR ENGAGEMENT
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.02em] mb-8">
              <span className="block">SCALE</span>
              <span className="block">CUSTOMER</span>
              <span className="block">INTERACTIONS</span>
            </h1>
            <p className="text-xl text-gray max-w-2xl leading-relaxed mb-12">
              Deploy AI agents that handle customer service, citizen requests, and multi-channel support. 
              Deliver exceptional experiences at scale, 24/7.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-4">
                  Schedule Demo
                </Button>
              </Link>
              <Link href="#use-cases">
                <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                  See Use Cases
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
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-gray">Query Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">&lt;2s</div>
              <div className="text-gray">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <div className="text-gray">Cost Reduction</div>
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
              Transform how you engage with customers and citizens
            </p>
          </div>

          {/* Use Case Tabs */}
          <div className="flex justify-center gap-2 mb-16 flex-wrap">
            <button
              onClick={() => setActiveUseCase('customer')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${
                activeUseCase === 'customer'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray hover:text-white border-b-2 border-transparent'
              }`}
            >
              CUSTOMER SERVICE
            </button>
            <button
              onClick={() => setActiveUseCase('citizen')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${
                activeUseCase === 'citizen'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray hover:text-white border-b-2 border-transparent'
              }`}
            >
              CITIZEN PORTAL
            </button>
            <button
              onClick={() => setActiveUseCase('multichannel')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${
                activeUseCase === 'multichannel'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray hover:text-white border-b-2 border-transparent'
              }`}
            >
              MULTI-CHANNEL
            </button>
            <button
              onClick={() => setActiveUseCase('quality')}
              className={`px-8 py-4 text-sm font-medium tracking-wider transition-all ${
                activeUseCase === 'quality'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray hover:text-white border-b-2 border-transparent'
              }`}
            >
              QUALITY ASSURANCE
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
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-4">
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
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-3xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Conversations</h3>
              <p className="text-gray">
                Map customer journeys, define intents, and create response templates. Import existing FAQs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-3xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Train & Integrate</h3>
              <p className="text-gray">
                AI learns your brand voice. Connect to CRM, ticketing, and knowledge bases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                <span className="text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Launch & Optimize</h3>
              <p className="text-gray">
                Deploy across channels. Monitor performance. Continuously improve with analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            READY TO SCALE YOUR ENGAGEMENT?
          </h2>
          <p className="text-xl text-gray mb-12">
            See how AI agents can transform your customer and citizen interactions.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-4">
                Schedule Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}