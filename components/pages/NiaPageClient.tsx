'use client';

import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import mockData from '@/data/nia.json';


export default function NiaPageClient() {
  const niaSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GenX NIA",
    "alternateName": "NIA Interface",
    "applicationCategory": "ChatApplication",
    "operatingSystem": "Web-based",
    "description": "Intelligent conversational interface where GenX CORE agents interact with users",
    "url": "https://www.nainovate.ai/platform/nia",
    "featureList": [
      "Multi-agent Support",
      "Contextual Intelligence",
      "50M+ Daily Conversations",
      "<100ms Response Time",
      "25+ Languages",
      "99.9% Uptime SLA",
      "Real-time Analytics"
    ],
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000"
    }
  };

  const chatActionSchema = {
    "@context": "https://schema.org",
    "@type": "Action",
    "name": "Chat with NIA",
    "description": "Interact with AI agents through NIA interface",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://chat.nainovate.ai",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  };

  // Support Agent Messages
  const [candidateMessage, setCandidateMessage] = useState(0);
  const candidateMessages = mockData.candidateMessages;

  // BOQ Messages
  const [boqMessage, setBoqMessage] = useState(0);
  const boqMessages = mockData.boqMessages;

  // For BOQ Messages
  const [showBoqTyping, setShowBoqTyping] = useState<number | null>(null); // Separate typing state

  // Update the useEffect for BOQ
  useEffect(() => {
    const boqInterval = setInterval(() => {
      const nextIndex = (boqMessage + 1) % boqMessages.length;
      if (boqMessages[nextIndex].type === 'bot') {
        setShowBoqTyping(nextIndex);
        setTimeout(() => {
          setBoqMessage(nextIndex);
          setShowBoqTyping(null);
        }, 1500);
      } else {
        setBoqMessage(nextIndex);
      }
    }, 3000);

    return () => clearInterval(boqInterval);
  }, [boqMessage]);

  const [showTyping, setShowTyping] = useState<number | null>(null);

  const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          onComplete?.();
        }
      }, 10); // Adjust speed here (20ms per character)

      return () => clearInterval(interval);
    }, [text]);

    return <p className="text-sm whitespace-pre-line">{displayedText}</p>;
  };
  // Animation effects
  useEffect(() => {
    const candidateInterval = setInterval(() => {
      // Show typing for bot messages
      const nextIndex = (candidateMessage + 1) % candidateMessages.length;
      if (candidateMessages[nextIndex].type === 'bot') {
        setShowTyping(nextIndex);
        setTimeout(() => {
          setCandidateMessage(nextIndex);
          setShowTyping(null);
        }, 1500); // Show typing for 1.5 seconds
      } else {
        setCandidateMessage(nextIndex);
      }
    }, 3000);

    return () => clearInterval(candidateInterval);
  }, [candidateMessage]);
  return (
    <main className="pt-20 relative z-10">
      <JsonLd data={niaSchema} />
      <JsonLd data={chatActionSchema} />
      
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              GENX NIA • INTERFACE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">WHERE AGENTS</span>
              <span className="block text-gray">COME TO LIFE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-6 md:mb-12">
              NIA is the conversational interface where your CORE-built agents
              interact with users. Deploy once, engage everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4">
                  Try Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 md:py-32 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-20">SEE NIA IN ACTION</h2>

          {/* First Demo - HR Agent */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-32">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Intelligent hiring decisions</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray mb-8">
                Evaluate candidates objectively with AI-powered assessment. Match skills, analyze experience, and make data-driven hiring decisions.
              </p>

              <div className="space-y-6 pt-4">
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Job-Candidate Matching</h4>
                  <p className="text-gray">Percentage-based fit analysis for any role</p>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Skills Gap Analysis</h4>
                  <p className="text-gray">Identify training needs and development areas</p>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Interview Intelligence</h4>
                  <p className="text-gray">Ensure questions align with job requirements</p>
                </div>
              </div>
            </div>

            {/* Chat Demo Right */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent blur-xl"></div>
              <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden max-w-md">
                <div className="border-b border-white/10 p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray">NIA - HR Assistant</span>
                </div>

                <div className="h-96 p-6 flex flex-col">
                  <div className="flex-1 space-y-4">
                    {candidateMessages.slice(0, candidateMessage + 1).map((msg, idx) => (
                      <div key={idx}>
                        {msg.type === 'user' ? (
                          <div className="flex justify-end gap-3">
                            <div className="max-w-[80%] bg-black border border-white/10 rounded-2xl px-4 py-3">
                              <p className="text-sm whitespace-pre-line">{msg.text}</p>
                            </div>
                            <div className="w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-start gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-black border border-white/10">
                              <img
                                src="/images/N_Dark_Mode.png"
                                alt="NIA"
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                            <div className="max-w-[80%] bg-black border border-white/10 rounded-2xl px-4 py-3">
                              {idx === candidateMessage ? (
                                <TypewriterText text={msg.text} />
                              ) : (
                                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {showTyping === candidateMessage + 1 && (
                      <div className="flex justify-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-black border border-white/10">
                          <img
                            src="/images/N_Dark_Mode.png"
                            alt="NIA"
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div className="bg-black border border-white/10 rounded-2xl px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="bg-white/5 rounded-lg px-4 py-3 text-sm text-gray">
                      Type a message...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Demo Section - BOQ Agent (Reversed) */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Chat Demo Left */}
            <div className="order-2 lg:order-1">
              <div className="bg-black border border-white/10 rounded-lg overflow-hidden max-w-md mx-auto">
                <div className="border-b border-white/10 p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray">NIA - BOQ Assistant</span>
                </div>

                <div className="h-96 p-6 flex flex-col">
                  <div className="flex-1 space-y-4">
                    {boqMessages.slice(0, boqMessage + 1).map((msg, idx) => (
                      <div key={idx}>
                        {msg.type === 'user' ? (
                          <div className="flex justify-end gap-3">
                            <div className="max-w-[80%] bg-black border border-white/10 rounded-2xl px-4 py-3">
                              <p className="text-sm whitespace-pre-line">{msg.text}</p>
                            </div>
                            <div className="w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-start gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-black border border-white/10">
                              <img
                                src="/images/N_Dark_Mode.png"
                                alt="NIA"
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                            <div className="max-w-[80%] bg-black border border-white/10 rounded-2xl px-4 py-3">
                              {idx === boqMessage ? (
                                <TypewriterText text={msg.text} />
                              ) : (
                                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {showBoqTyping === boqMessage + 1 && (
                      <div className="flex justify-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-black border border-white/10">
                          <img
                            src="/images/N_Dark_Mode.png"
                            alt="NIA"
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div className="bg-black border border-white/10 rounded-2xl px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="bg-white/5 rounded-lg px-4 py-3 text-sm text-gray">
                      Type a message...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Instant BOQ intelligence</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray mb-8">
                Get detailed specifications, pricing, and material information instantly. 
                Your AI-powered construction assistant knows every detail.
              </p>

              <div className="space-y-6 pt-4">
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Item Specifications</h4>
                  <p className="text-gray">Detailed descriptions for any construction item</p>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Real-time Pricing</h4>
                  <p className="text-gray">Current supply amounts and market rates</p>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <h4 className="text-lg font-semibold mb-2">Regional Data</h4>
                  <p className="text-gray">Location-specific pricing and availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOQ message animation */}
      <script dangerouslySetInnerHTML={{
        __html: `
          setInterval(() => {
            const boqMessages = document.querySelectorAll('.boq-message');
            if (boqMessages.length > 0) {
              const currentIndex = Array.from(boqMessages).findIndex(msg => !msg.classList.contains('hidden'));
              boqMessages[currentIndex].classList.add('hidden');
              boqMessages[(currentIndex + 1) % boqMessages.length].classList.remove('hidden');
            }
          }, 4000);
        `
      }} />

      {/* Features */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-20">THE NIA ADVANTAGE</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6 md:space-y-12">
              <div className="border-l border-white/20 pl-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Contextual Intelligence</h3>
                <p className="text-gray leading-relaxed">
                  NIA maintains conversation context across sessions, understanding user intent
                  and routing to the right agent automatically.
                </p>
              </div>

              <div className="border-l border-white/20 pl-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Unified Interface</h3>
                <p className="text-gray leading-relaxed">
                  All your CORE agents accessible through one intelligent chatbot interface.
                  Seamless switching between different agent capabilities.
                </p>
              </div>

              <div className="border-l border-white/20 pl-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Continuous Optimization</h3>
                <p className="text-gray leading-relaxed">
                  NIA learns from every interaction, continuously improving response accuracy
                  and adapting to your business terminology and processes.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-4xl font-bold mb-2">50M+</p>
                    <p className="text-gray">Daily conversations</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">&lt;100ms</p>
                    <p className="text-gray">Response time</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold mb-2">99.9%</p>
                    <p className="text-gray">Uptime SLA</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">25+</p>
                    <p className="text-gray">Languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            EXPERIENCE NIA TODAY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray mb-6 md:mb-12 max-w-2xl mx-auto">
            See how intelligent conversations can transform your business operations.
          </p>
          <Link href="/contact">
            <Button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 text-lg">
              See NIA in Action →
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}