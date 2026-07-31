'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useState } from 'react';
import Link from 'next/link';
import mockData from '@/data/marketing/platform.json';

export default function ProductsPageClient() {
    const [activeSpoke, setActiveSpoke] = useState<number | null>(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };
    const spokes = mockData.spokes;
    // define SVG center and radius values for the AI CoE diagram
    const centerX = 250;
    const centerY = 250;
    const spokeRadius = 160;

    return (
        <main className="bg-bg min-h-screen pt-10">

            {/* SECTION 1: HERO */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface to-bg" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 text-center">
                    <AnimatedSection>
                        <div className="mb-6">
                            <span className="text-fg-muted uppercase tracking-[0.2em] text-sm">
                                ONE PLATFORM • COMPLETE CENTER OF EXCELLENCE
                            </span>
                        </div>

                        <h1 className="heading-primary mb-4 md:mb-6">
                            THE GENX<br />
                            <span>PLATFORM</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-fg-muted max-w-3xl mx-auto mb-6 md:mb-8">
                            Build, Deploy, and Scale AI Responsibly with Governance and Trust Built Into Every Workflow
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 md:mb-12">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                                    Schedule Demo →
                                </Button>
                            </Link>
                            <Link href="/ai-center-of-excellence" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                                    Explore AI CoE
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-fg-muted">
                            <div className="flex items-center gap-2">
                                <span className="text-fg-strong">✓</span>
                                <span>30-Day Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-fg-strong">✓</span>
                                <span>Fixed Pricing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-fg-strong">✓</span>
                                <span>You Own It</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-4 md:mb-6 text-center">
                            WHAT MAKES GENX DIFFERENT?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-fg-muted text-center mb-6 md:mb-10 max-w-2xl mx-auto">
                            Drag the slider to see the transformation from generic AI tools to a complete platform with governance.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="max-w-5xl mx-auto">
                            <div
                                className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-border-strong select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleMouseUp}
                            >

                                {/* BEFORE (Other Platforms) - LEFT SIDE */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"
                                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                                >
                                    <div className="flex flex-col items-start justify-center h-full pl-10 md:pl-16 pr-8 py-8 w-1/2">
                                        <div className="text-white/60 mb-4">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 text-white/70">OTHER PLATFORMS</h3>
                                        <div className="space-y-3 text-left max-w-md">
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">Just AI tools, no framework</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">Black box solutions</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">You rent it, they own it</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">Hope for the best approach</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">No governance or best practices</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-400 text-xl">✗</span>
                                                <p className="text-white/70">Long implementation timelines</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AFTER (GenX Platform) - RIGHT SIDE */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-surface-hover to-surface-2"
                                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                                >
                                    <div className="flex flex-col items-start justify-center h-full pl-10 md:pl-16 pr-8 py-8 w-1/2 ml-auto">
                                        <div className="text-fg-strong mb-4">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">GENX PLATFORM</h3>
                                        <div className="space-y-3 text-left max-w-md">
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">AI + Complete CoE Framework</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">Full transparency & control</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">You OWN the solution</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">McKinsey best practices built-in</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">Governance from day one</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-400 text-xl">✓</span>
                                                <p className="text-fg-strong">30-day delivery guarantee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SLIDER HANDLE */}
                                <div
                                    className="absolute top-0 bottom-0 w-1 bg-fg-strong cursor-ew-resize"
                                    style={{ left: `${sliderPosition}%` }}
                                    onMouseDown={handleMouseDown}
                                    onTouchStart={handleMouseDown}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-fg-strong rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize">
                                        <svg className="w-6 h-6 text-fg-invert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </div>

                                {/* LABELS */}
                                <div className="absolute top-8 left-8 text-sm font-bold text-fg-muted uppercase tracking-wider">
                                    Other Platforms
                                </div>
                                <div className="absolute top-8 right-8 text-sm font-bold uppercase tracking-wider">
                                    GenX Platform
                                </div>

                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Instructions */}
                    <AnimatedSection delay={0.3}>
                        <p className="text-center text-fg-muted text-sm mt-8">
                            👆 Drag the slider left and right to compare
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 3: FOUR CORE CAPABILITIES */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-6 md:mb-10 text-center">
                            FOUR INTEGRATED CAPABILITIES
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* CORE */}
                        <AnimatedSection delay={0.1}>
                            <div className="group border border-border rounded-lg p-5 md:p-8 hover:border-border-strong transition-all cursor-pointer h-full flex flex-col">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">CORE</h3>
                                    <p className="text-sm text-fg-muted mb-4">AI Engine</p>
                                    <p className="text-fg-muted leading-relaxed">
                                        Build intelligent agents for any task with advanced RAG pipelines and fine-tuning capabilities.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        
                        {/* FLOW */}
                        <AnimatedSection delay={0.3}>
                            <div className="group border border-border rounded-lg p-5 md:p-8 hover:border-border-strong transition-all cursor-pointer h-full flex flex-col">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">FLOW</h3>
                                    <p className="text-sm text-fg-muted mb-4">Automation Engine</p>
                                    <p className="text-fg-muted leading-relaxed">
                                        Automate complex workflows with multi-agent orchestration and seamless integrations.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* NIA */}
                        <AnimatedSection delay={0.2}>
                            <div className="group border border-border rounded-lg p-5 md:p-8 hover:border-border-strong transition-all cursor-pointer h-full flex flex-col">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">NIA</h3>
                                    <p className="text-sm text-fg-muted mb-4">Interface Layer</p>
                                    <p className="text-fg-muted leading-relaxed">
                                        Talk to your AI agents through conversational interfaces. Multi-channel, multi-lingual support.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* AI CoE - HIGHLIGHTED */}
                        <AnimatedSection delay={0.4}>
                            <Link href="/ai-center-of-excellence">
                                <div className="group border-2 border-border-strong rounded-lg p-5 md:p-8 bg-gradient-to-br from-surface-hover to-surface-2 hover:border-border-active transition-all cursor-pointer h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6 text-fg-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">AI CoE</h3>
                                        <p className="text-sm text-fg-muted mb-4">Governance Framework</p>
                                        <p className="text-fg-muted leading-relaxed mb-4 flex-1">
                                            Scale AI responsibly with built-in governance, ethics, and McKinsey best practices.
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-fg-strong mt-auto group-hover:translate-x-1 transition-transform">
                                            <span>Learn More</span>
                                            <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-4 md:mb-6 text-center">
                            AI CENTER OF EXCELLENCE
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-fg-muted text-center mb-6 md:mb-10 max-w-3xl mx-auto">
                            GenX at the core. AI CoE as the governance layer. McKinsey&apos;s 6 principles guiding every decision.
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">

                        {/* LEFT: SVG Diagram */}
                        <AnimatedSection delay={0.2}>
                            <div className="relative">
                                <svg width="500" height="500" viewBox="0 0 500 500" className="w-full h-full text-fg-strong">

                                    {/* Outer rotating ring */}
                                    <circle
                                        cx={centerX}
                                        cy={centerY}
                                        r={spokeRadius + 40}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeOpacity={0.5}
                                        strokeWidth="1.5"
                                        strokeDasharray="5,5"
                                        className="animate-spin-slow"
                                    />

                                    {/* Middle ring - CoE */}
                                    <circle
                                        cx={centerX}
                                        cy={centerY}
                                        r={spokeRadius - 30}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeOpacity={0.7}
                                        strokeWidth="2"
                                    />

                                    {/* Connection lines from center to spokes */}
                                    {spokes.map((spoke) => {
                                        const angleRad = (spoke.angle - 90) * (Math.PI / 180);
                                        const x = centerX + spokeRadius * Math.cos(angleRad);
                                        const y = centerY + spokeRadius * Math.sin(angleRad);
                                        const isActive = activeSpoke === spoke.id;

                                        return (
                                            <line
                                                key={`line-${spoke.id}`}
                                                x1={centerX}
                                                y1={centerY}
                                                x2={x}
                                                y2={y}
                                                stroke={isActive ? spoke.color : "currentColor"}
                                                strokeOpacity={isActive ? 1 : 0.7}
                                                strokeWidth={isActive ? "3" : "1.5"}
                                                className="transition-all duration-300"
                                            />
                                        );
                                    })}

                                    {/* Center circle - GenX */}
                                    <g>
                                        <circle
                                            cx={centerX}
                                            cy={centerY}
                                            r="60"
                                            fill="currentColor"
                                            fillOpacity={0.1}
                                            stroke="currentColor"
                                            strokeOpacity={1}
                                            strokeWidth="2.5"
                                        />
                                        <text
                                            x={centerX}
                                            y={centerY + 5}
                                            textAnchor="middle"
                                            fill="currentColor"
                                            className="text-2xl font-bold"
                                        >
                                            GenX
                                        </text>
                                    </g>

                                    {/* Middle ring label */}
                                    <text
                                        x={centerX}
                                        y={centerY + 95}
                                        textAnchor="middle"
                                        fill="currentColor"
                                        fillOpacity={0.7}
                                        className="text-xs"
                                    >
                                        AI Center of Excellence
                                    </text>

                                    {/* Spoke nodes */}
                                    {spokes.map((spoke) => {
                                        const angleRad = (spoke.angle - 90) * (Math.PI / 180);
                                        const x = centerX + spokeRadius * Math.cos(angleRad);
                                        const y = centerY + spokeRadius * Math.sin(angleRad);
                                        const isActive = activeSpoke === spoke.id;

                                        return (
                                            <g
                                                key={spoke.id}
                                                onMouseEnter={() => setActiveSpoke(spoke.id)}
                                                onMouseLeave={() => setActiveSpoke(null)}
                                                className="cursor-pointer"
                                            >
                                                {/* Spoke circle */}
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r="30"
                                                    fill={isActive ? `${spoke.color}40` : "currentColor"}
                                                    fillOpacity={isActive ? 1 : 0.12}
                                                    stroke={isActive ? spoke.color : "currentColor"}
                                                    strokeOpacity={1}
                                                    strokeWidth="2"
                                                    className="transition-all duration-300"
                                                />

                                                {/* Spoke icon */}
                                                <text
                                                    x={x}
                                                    y={y + 8}
                                                    textAnchor="middle"
                                                    fill="currentColor"
                                                    className="text-2xl pointer-events-none"
                                                >
                                                    {spoke.icon}
                                                </text>
                                            </g>
                                        );
                                    })}

                                </svg>

                                {/* Pulsing center glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
                            </div>
                        </AnimatedSection>

                        {/* RIGHT: Spoke Details */}
                        <AnimatedSection delay={0.3}>
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold mb-6">McKinsey&apos;s 6 AI Scaling Principles</h3>

                                {spokes.map((spoke) => (
                                    <div
                                        key={spoke.id}
                                        className={`border rounded-lg p-5 transition-all cursor-pointer ${activeSpoke === spoke.id
                                            ? 'border-border-active bg-surface-2 scale-[1.02]'
                                            : 'border-border hover:border-border-strong hover:bg-surface-2'
                                            }`}
                                        onMouseEnter={() => setActiveSpoke(spoke.id)}
                                        onMouseLeave={() => setActiveSpoke(null)}
                                        style={{
                                            borderColor: activeSpoke === spoke.id ? spoke.color : undefined
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="text-3xl flex-shrink-0 transition-transform duration-300"
                                                style={{
                                                    transform: activeSpoke === spoke.id ? 'scale(1.2)' : 'scale(1)'
                                                }}
                                            >
                                                {spoke.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold mb-1">{spoke.title}</h4>
                                                <p className="text-sm text-fg-muted">{spoke.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                    </div>

                    {/* Bottom CTA */}
                    <AnimatedSection delay={0.4}>
                        <div className="max-w-3xl mx-auto mt-10 md:mt-20 text-center">
                            <p className="text-fg-muted mb-8">
                                👆 Hover over any spoke to see how McKinsey&apos;s principles integrate with GenX and the AI CoE layer
                            </p>
                            <Link href="/ai-center-of-excellence">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                                    Explore the Complete AI CoE Framework →
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>

                </div>

                {/* Custom Animations */}
                <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
            </section>

            {/* SECTION 5: PLATFORM FEATURES */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-6 md:mb-10 text-center">
                            PLATFORM FEATURES
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Feature 1: AI Engineering Tools */}
                        <AnimatedSection delay={0.1}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">AI Engineering Tools</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• RAG pipeline builder</li>
                                    <li>• RLHF fine-tuning</li>
                                    <li>• Model evaluation</li>
                                    <li>• A/B testing framework</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Feature 2: Search + Data AI */}
                        <AnimatedSection delay={0.2}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">Search + Data AI</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• Vector search engine</li>
                                    <li>• Data preparation tools</li>
                                    <li>• Real-time analytics</li>
                                    <li>• Knowledge graph builder</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Feature 3: Security + Governance */}
                        <AnimatedSection delay={0.3}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">Security + Governance</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• Role-based access control</li>
                                    <li>• Audit logging</li>
                                    <li>• Compliance frameworks</li>
                                    <li>• Data privacy tools</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Feature 4: No-Code + Pro-Code */}
                        <AnimatedSection delay={0.4}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">No-Code + Pro-Code</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• Visual workflow builder</li>
                                    <li>• Python SDK</li>
                                    <li>• REST APIs</li>
                                    <li>• Custom code execution</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Feature 5: Integrations */}
                        <AnimatedSection delay={0.5}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">Integrations</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• 100+ pre-built connectors</li>
                                    <li>• CRM & ERP systems</li>
                                    <li>• Data warehouses</li>
                                    <li>• Communication platforms</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Feature 6: Enterprise Support */}
                        <AnimatedSection delay={0.6}>
                            <div className="border border-border rounded-lg p-5 md:p-8 hover:border-border-strong hover:bg-surface-2 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">Enterprise Support</h3>
                                <ul className="space-y-2 text-fg-muted text-sm">
                                    <li>• 24/7 technical support</li>
                                    <li>• Dedicated account manager</li>
                                    <li>• Training & onboarding</li>
                                    <li>• Custom SLAs</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>

            {/* SECTION 6: COMPONENT DEEP DIVE (KEEP EXISTING) */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-8 md:mb-12">
                            <span>EXPLORE</span><br />
                            <span>COMPONENTS</span>
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-0">
                        <AnimatedSection delay={0.1}>
                            <Link href="/platform/core" className="block group">
                                <div className="border-t border-border-strong py-6 md:py-12 hover:bg-fg-strong hover:text-fg-invert transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 md:gap-8">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted group-hover:text-fg-invert transition-colors">01</span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">CORE - AI Engine</h3>
                                                <p className="text-fg-muted group-hover:text-fg-invert transition-colors">
                                                    Create intelligent agents for any task
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-8 h-8 text-fg-muted group-hover:text-fg-invert transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <Link href="/platform/nia" className="block group">
                                <div className="border-t border-border-strong py-6 md:py-12 hover:bg-fg-strong hover:text-fg-invert transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 md:gap-8">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted group-hover:text-fg-invert transition-colors">02</span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">NIA - Interface</h3>
                                                <p className="text-fg-muted group-hover:text-fg-invert transition-colors">
                                                    Deploy conversational AI at scale
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-8 h-8 text-fg-muted group-hover:text-fg-invert transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <Link href="/platform/flow" className="block group">
                                <div className="border-t border-b border-border-strong py-6 md:py-12 hover:bg-fg-strong hover:text-fg-invert transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 md:gap-8">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted group-hover:text-fg-invert transition-colors">03</span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">FLOW - Automation Engine</h3>
                                                <p className="text-fg-muted group-hover:text-fg-invert transition-colors">
                                                    Orchestrate complex workflows
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-8 h-8 text-fg-muted group-hover:text-fg-invert transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* SECTION 7: ENTERPRISE FEATURES (MOVED DOWN) */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-6 md:mb-10 text-center">
                            BUILT FOR ENTERPRISE
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <AnimatedSection delay={0.1}>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Production Ready</h3>
                                <p className="text-fg-muted">Deploy confidently with 99.9% uptime SLA and enterprise-grade infrastructure.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">↑</span>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Enterprise Scale</h3>
                                <p className="text-fg-muted">Handle millions of requests per day. Built for the demands of large organizations.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Security & Compliance</h3>
                                <p className="text-fg-muted">SOC 2, GDPR, HIPAA compliant. Your data stays yours.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-surface-2 rounded-full flex items-center justify-center">
                                    <span className="text-3xl">⟲</span>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Continuous Learning</h3>
                                <p className="text-fg-muted">Agents improve over time with RLHF and real-world feedback loops.</p>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>

            {/* SECTION 8: SOCIAL PROOF */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-6 md:mb-10 text-center">
                            TRUSTED BY LEADING ORGANIZATIONS
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-base sm:text-lg lg:text-xl text-fg-muted italic mb-8">
                                &quot;GenX Platform + AI CoE transformed how we approach AI adoption.
                                The built-in governance framework gave us the confidence to scale AI responsibly across our organization.&quot;
                            </p>
                            <p className="text-fg-muted">
                                — Enterprise Technology Leader
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* SECTION 9: FINAL CTA */}
            <section className="py-8 md:py-12 border-t border-border">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="heading-primary mb-4 md:mb-6">
                            READY TO TRANSFORM YOUR AI OPERATIONS?
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-fg-muted mb-6 md:mb-8">
                            See how GenX Platform + AI CoE can help you scale AI responsibly
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                                    Schedule Demo →
                                </Button>
                            </Link>
                            <Link href="/platform/core" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-lg">
                                    Explore CORE
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

        </main>
    );
}