'use client';

import Link from 'next/link';
import { useState } from 'react';
import mockData from '@/data/marketing/platform.json';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

type Spoke = {
  id: number;
  angle: number;
  color: string;
  icon: string;
  title: string;
  description: string;
};

const beforeItems = [
  'Just AI tools, no framework',
  'Black box solutions',
  'You rent it, they own it',
  'Hope for the best approach',
  'No governance or best practices',
  'Long implementation timelines',
];

const afterItems = [
  'AI + Complete CoE Framework',
  'Full transparency & control',
  'You OWN the solution',
  'McKinsey best practices built-in',
  'Governance from day one',
  '30-day delivery guarantee',
];

const capabilities = [
  {
    name: 'CORE',
    label: 'AI Engine',
    body: 'Build intelligent agents for any task with advanced RAG pipelines and fine-tuning capabilities.',
    href: '/platform/core',
    Glyph: () => (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22h8M14 26h4M10 14a6 6 0 1112 0c0 3-2 4-2 6H12c0-2-2-3-2-6z" /></svg>
    ),
  },
  {
    name: 'FLOW',
    label: 'Automation Engine',
    body: 'Automate complex workflows with multi-agent orchestration and seamless integrations.',
    href: '/platform/flow',
    Glyph: () => (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4L6 18h9l-1 10 12-14h-9z" /></svg>
    ),
  },
  {
    name: 'NIA',
    label: 'Interface Layer',
    body: 'Talk to your AI agents through conversational interfaces. Multi-channel, multi-lingual support.',
    href: '/platform/nia',
    Glyph: () => (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M28 15c0 5.9-5.4 10.7-12 10.7a13 13 0 01-5.7-1.3L4 26.5l1.9-5A9.5 9.5 0 014 15C4 9.1 9.4 4.3 16 4.3s12 4.8 12 10.7z" /><circle cx="10" cy="15" r="1" fill="currentColor" /><circle cx="16" cy="15" r="1" fill="currentColor" /><circle cx="22" cy="15" r="1" fill="currentColor" /></svg>
    ),
  },
  {
    name: 'AI CoE',
    label: 'Governance Framework',
    body: 'Scale AI responsibly with built-in governance, ethics, and McKinsey best practices.',
    href: '/ai-center-of-excellence',
    Glyph: () => (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l11 4v9c0 6.7-4.9 12.6-11 14-6.1-1.4-11-7.3-11-14V7l11-4z" /><path d="M11 16l3.5 3.5L21 13" /></svg>
    ),
    highlight: true,
  },
];

const features = [
  { title: 'AI Engineering Tools', items: ['RAG pipeline builder', 'RLHF fine-tuning', 'Model evaluation', 'A/B testing framework'] },
  { title: 'Search + Data AI', items: ['Vector search engine', 'Data preparation tools', 'Real-time analytics', 'Knowledge graph builder'] },
  { title: 'Security + Governance', items: ['Role-based access control', 'Audit logging', 'Compliance frameworks', 'Data privacy tools'] },
  { title: 'No-Code + Pro-Code', items: ['Visual workflow builder', 'Python SDK', 'REST APIs', 'Custom code execution'] },
  { title: 'Integrations', items: ['100+ pre-built connectors', 'CRM & ERP systems', 'Data warehouses', 'Communication platforms'] },
  { title: 'Enterprise Support', items: ['24/7 technical support', 'Dedicated account manager', 'Training & onboarding', 'Custom SLAs'] },
];

const components = [
  { num: '01', title: 'CORE - AI Engine', subtitle: 'Create intelligent agents for any task', href: '/platform/core' },
  { num: '02', title: 'NIA - Interface', subtitle: 'Deploy conversational AI at scale', href: '/platform/nia' },
  { num: '03', title: 'FLOW - Automation Engine', subtitle: 'Orchestrate complex workflows', href: '/platform/flow' },
];

const enterprisePoints = [
  { title: 'Production Ready', body: 'Deploy confidently with 99.9% uptime SLA and enterprise-grade infrastructure.' },
  { title: 'Enterprise Scale', body: 'Handle millions of requests per day. Built for the demands of large organizations.' },
  { title: 'Security & Compliance', body: 'SOC 2, GDPR, HIPAA compliant. Your data stays yours.' },
  { title: 'Continuous Learning', body: 'Agents improve over time with RLHF and real-world feedback loops.' },
];

export default function ProductsPageClient() {
  const [activeSpoke, setActiveSpoke] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const spokes = mockData.spokes as Spoke[];
  const centerX = 250;
  const centerY = 250;
  const spokeRadius = 160;

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <main className="pt-20 bg-bg">
      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.02] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">
                One Platform · Complete Center of Excellence
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display text-fg-strong mb-10">
                <span className="block">The GenX</span>
                <span className="block text-gradient-aurora">Platform.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-12 leading-relaxed">
                Build, Deploy, and Scale AI Responsibly with Governance and Trust Built Into Every Workflow.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Schedule Demo
                </CTALink>
                <CTALink href="/ai-center-of-excellence" variant="outline" size="lg" arrow>
                  Explore AI CoE
                </CTALink>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-border">
                {['30-Day Delivery', 'Fixed Pricing', 'You Own It'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-3 text-eyebrow text-fg-mid">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-fg-strong" />
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Before/After Slider — monochrome */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Comparison</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">What makes</span>
                  <span className="block text-gradient-aurora">GenX different?</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <Reveal delay={0.1}>
                <p className="text-body-lg text-fg-mid leading-relaxed">
                  Drag the slider to see the transformation from generic AI tools to a complete platform with governance.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div
              className="relative w-full h-[520px] md:h-[560px] rounded-xl2 overflow-hidden border border-border-strong bg-bg-elevated select-none grain"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* BEFORE — monochrome dim */}
              <div
                className="absolute inset-0 bg-bg"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="flex flex-col items-start justify-center h-full pl-8 md:pl-16 pr-6 py-8 w-1/2">
                  <div className="text-fg-muted mb-6">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Eyebrow tone="muted" className="mb-3">Other Platforms</Eyebrow>
                  <h3 className="text-h3 text-fg-mid mb-6">Rented tooling.</h3>
                  <ul className="space-y-3 max-w-md">
                    {beforeItems.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span aria-hidden="true" className="w-4 h-4 rounded-full border border-fg-faint mt-0.5 shrink-0 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-fg-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                        </span>
                        <span className="text-body-md text-fg-mid">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AFTER — monochrome inverse */}
              <div
                className="absolute inset-0 bg-fg-strong text-fg-invert"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="flex flex-col items-start justify-center h-full pl-8 md:pl-16 pr-6 py-8 w-1/2 ml-auto">
                  <div className="text-fg-invert mb-6">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-eyebrow text-fg-invert mb-3 opacity-70">GenX Platform</p>
                  <h3 className="text-h3 mb-6">Owned intelligence.</h3>
                  <ul className="space-y-3 max-w-md">
                    {afterItems.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span aria-hidden="true" className="w-4 h-4 rounded-full border border-fg-invert mt-0.5 shrink-0 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                        <span className="text-body-md">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-px bg-fg-strong cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-fg-strong rounded-full shadow-lg flex items-center justify-center cursor-ew-resize border-2 border-bg">
                  <svg className="w-5 h-5 text-fg-invert" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-center text-body-sm text-fg-muted mt-8">
              Drag the slider left and right to compare
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Four Integrated Capabilities */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Architecture</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Four integrated</span>
                  <span className="block text-gradient-aurora">capabilities.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {capabilities.map((c) => {
              const Body = (
                <div className={`group relative flex flex-col h-full bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated ${c.highlight ? 'bg-bg-elevated' : ''}`}>
                  <div className="w-10 h-10 text-fg-mid group-hover:text-fg-strong transition-colors duration-500 mb-8">
                    <c.Glyph />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 text-fg-strong mb-2">{c.name}</h3>
                    <p className="text-eyebrow text-fg-muted mb-5">{c.label}</p>
                    <p className="text-body-md text-fg-mid leading-relaxed">{c.body}</p>
                  </div>
                  {c.href && (
                    <div className="mt-6 inline-flex items-center gap-2 text-eyebrow text-fg-strong">
                      <span>Learn more</span>
                      <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </div>
                  )}
                </div>
              );
              return (
                <RevealItem key={c.name}>
                  {c.href ? <Link href={c.href} className="block h-full">{Body}</Link> : Body}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      {/* AI Center of Excellence — SVG diagram, monochrome */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">AI Center of Excellence</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">GenX at the core.</span>
                  <span className="block text-gradient-aurora">CoE as the layer.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <Reveal delay={0.1}>
                <p className="text-body-lg text-fg-mid leading-relaxed">
                  GenX at the core. AI CoE as the governance layer. McKinsey&apos;s 6 principles guiding every decision.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Premium 3D SVG diagram — colored spokes + aurora core + glow */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-square rounded-2xl2 border border-border bg-black/50 backdrop-blur-xl overflow-hidden shadow-lg perspective-lg">
                  {/* Aurora ring border */}
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl2 border-aurora opacity-60" />

                  {/* Corner LIVE badge */}
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-eyebrow text-white/90 bg-black/40 backdrop-blur border border-white/10">
                    <span className="relative inline-flex w-1.5 h-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent-cyan)] opacity-70 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[color:var(--accent-cyan)]" />
                    </span>
                    <span>McKinsey · 6 principles</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-eyebrow text-white/60">
                    <span>Governance mesh</span>
                    <span className="font-mono">hover · explore</span>
                  </div>

                  {/* Ambient inner glow */}
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(236,72,153,0.12), transparent 55%)',
                  }} />

                  <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full">
                    <defs>
                      {/* Aurora gradient for outer ring */}
                      <linearGradient id="coe-ring" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                        <stop offset="35%" stopColor="#ec4899" stopOpacity="0.7" />
                        <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                      </linearGradient>
                      {/* Center core radial gradient */}
                      <radialGradient id="coe-core" cx="0.35" cy="0.35" r="0.65">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="30%" stopColor="#c4b5fd" />
                        <stop offset="60%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#4c1d95" />
                      </radialGradient>
                      {/* Per-spoke gradients */}
                      {spokes.map((s, i) => {
                        const colors = [
                          ['#a78bfa', '#8b5cf6', '#6d28d9'], // violet
                          ['#67e8f9', '#22d3ee', '#0891b2'], // cyan
                          ['#fbcfe8', '#ec4899', '#be185d'], // pink
                          ['#6ee7b7', '#10b981', '#047857'], // emerald
                          ['#a5b4fc', '#6366f1', '#4338ca'], // indigo
                          ['#fed7aa', '#fb923c', '#c2410c'], // orange
                        ][i % 6];
                        return (
                          <radialGradient key={`grad-${s.id}`} id={`spoke-${s.id}`} cx="0.35" cy="0.35" r="0.75">
                            <stop offset="0%" stopColor={colors[0]} />
                            <stop offset="50%" stopColor={colors[1]} />
                            <stop offset="100%" stopColor={colors[2]} />
                          </radialGradient>
                        );
                      })}
                      {/* Glow filter */}
                      <filter id="coe-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="coe-glow-strong" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Outer rotating dashed ring */}
                    <g style={{ transformOrigin: '250px 250px' }} className="animate-spin-slow">
                      <circle cx={centerX} cy={centerY} r={spokeRadius + 60} fill="none" stroke="url(#coe-ring)" strokeWidth="1" strokeDasharray="2 8" opacity="0.6" />
                    </g>

                    {/* Middle static ring — subtle */}
                    <circle cx={centerX} cy={centerY} r={spokeRadius + 30} fill="none" stroke="url(#coe-ring)" strokeWidth="0.6" opacity="0.35" />
                    <circle cx={centerX} cy={centerY} r={spokeRadius - 20} fill="none" stroke="url(#coe-ring)" strokeWidth="0.6" opacity="0.25" />

                    {/* Connection lines — colored per spoke */}
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
                          stroke={`url(#spoke-${spoke.id})`}
                          strokeOpacity={isActive ? 0.95 : 0.4}
                          strokeWidth={isActive ? 2 : 1}
                          className="transition-all duration-300"
                          filter={isActive ? 'url(#coe-glow)' : undefined}
                        />
                      );
                    })}

                    {/* Center core — aurora orb with strong glow */}
                    <g filter="url(#coe-glow-strong)">
                      <circle cx={centerX} cy={centerY} r="70" fill="url(#coe-core)" opacity="0.98" />
                    </g>
                    {/* Highlight ring around center */}
                    <circle cx={centerX} cy={centerY} r="70" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" />
                    <circle cx={centerX} cy={centerY} r="78" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
                    <text x={centerX} y={centerY + 8} textAnchor="middle" fill="#ffffff" className="text-2xl font-bold" style={{ filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.6))' }}>
                      GenX
                    </text>

                    {/* CoE label ring text */}
                    <text x={centerX} y={centerY + 110} textAnchor="middle" fill="#ffffff" fillOpacity="0.5" className="text-[11px] tracking-[0.2em] uppercase font-medium">
                      AI Center of Excellence
                    </text>

                    {/* Spoke nodes — colored with halos */}
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
                          className="cursor-pointer transition-all duration-300"
                          style={{ transformOrigin: `${x}px ${y}px`, transform: isActive ? 'scale(1.15)' : 'scale(1)' }}
                        >
                          {/* Outer glow halo */}
                          <circle
                            cx={x}
                            cy={y}
                            r={isActive ? 48 : 38}
                            fill={`url(#spoke-${spoke.id})`}
                            opacity={isActive ? 0.4 : 0.18}
                            filter="url(#coe-glow-strong)"
                            className="transition-all duration-300"
                          />
                          {/* Main circle */}
                          <circle
                            cx={x}
                            cy={y}
                            r="30"
                            fill={`url(#spoke-${spoke.id})`}
                            opacity="0.95"
                            filter={isActive ? 'url(#coe-glow)' : undefined}
                          />
                          {/* Inner highlight */}
                          <circle
                            cx={x - 8}
                            cy={y - 8}
                            r="8"
                            fill="#ffffff"
                            opacity="0.35"
                          />
                          {/* Icon */}
                          <text
                            x={x}
                            y={y + 8}
                            textAnchor="middle"
                            fill="#ffffff"
                            className="text-xl pointer-events-none font-semibold"
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}
                          >
                            {spoke.icon}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Center pulsing glow behind everything */}
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl animate-pulse pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)' }}
                  />
                </div>
              </Reveal>
            </div>

            {/* Spoke list — colored per-spoke accents matching diagram */}
            <div className="lg:col-span-6">
              <Reveal>
                <h3 className="text-h4 text-fg-strong mb-6">
                  McKinsey&apos;s 6 AI Scaling <span className="text-gradient-aurora">Principles</span>
                </h3>
              </Reveal>
              <div className="space-y-3">
                {spokes.map((spoke, i) => {
                  const rgb = [
                    '139, 92, 246',  // violet
                    '34, 211, 238',  // cyan
                    '236, 72, 153',  // pink
                    '16, 185, 129',  // emerald
                    '99, 102, 241',  // indigo
                    '251, 146, 60',  // orange
                  ][i % 6];
                  const isActive = activeSpoke === spoke.id;
                  return (
                    <div
                      key={spoke.id}
                      className="group relative border rounded-lg2 p-5 transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{
                        borderColor: isActive ? `rgba(${rgb},0.6)` : 'var(--border)',
                        background: isActive
                          ? `linear-gradient(135deg, rgba(${rgb},0.10), rgba(${rgb},0.02))`
                          : 'transparent',
                        transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                      }}
                      onMouseEnter={() => setActiveSpoke(spoke.id)}
                      onMouseLeave={() => setActiveSpoke(null)}
                    >
                      {/* Colored left-edge indicator */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-[3px] origin-top transition-transform duration-500 ease-out-quart"
                        style={{
                          background: `linear-gradient(180deg, rgb(${rgb}), rgba(${rgb},0.3))`,
                          transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                        }}
                      />
                      {/* Corner halo */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle, rgba(${rgb},0.5), transparent 70%)`,
                          filter: 'blur(40px)',
                          opacity: isActive ? 1 : 0,
                        }}
                      />

                      <div className="relative flex items-start gap-4">
                        {/* Icon in colored bordered circle */}
                        <div
                          className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 border"
                          style={{
                            borderColor: `rgba(${rgb},${isActive ? 0.7 : 0.35})`,
                            background: `linear-gradient(135deg, rgba(${rgb},0.15), rgba(${rgb},0.03))`,
                            color: `rgb(${rgb})`,
                            transform: isActive ? 'scale(1.1) rotate(-6deg)' : 'scale(1)',
                            boxShadow: isActive ? `0 0 20px rgba(${rgb},0.4)` : 'none',
                          }}
                        >
                          {spoke.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-eyebrow tabular-nums" style={{ color: `rgb(${rgb})` }}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <h4 className="text-body-md font-semibold text-fg-strong">{spoke.title}</h4>
                          </div>
                          <p className="text-body-sm text-fg-mid leading-relaxed">{spoke.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Reveal>
            <div className="mt-14 md:mt-20 flex flex-col items-center gap-6">
              <p className="text-body-sm text-fg-muted text-center max-w-2xl">
                Hover over any spoke to see how McKinsey&apos;s principles integrate with GenX and the AI CoE layer.
              </p>
              <CTALink href="/ai-center-of-excellence" variant="outline" size="md" arrow>
                Explore the Complete AI CoE Framework
              </CTALink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Platform Features grid */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Platform</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Six feature groups.</span>
                  <span className="block text-gradient-aurora">One unified platform.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl2 overflow-hidden">
            {features.map((f, i) => (
              <RevealItem key={f.title} className="group bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-h4 text-fg-strong mb-5">{f.title}</h3>
                <ul className="space-y-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body-md text-fg-mid">
                      <span aria-hidden="true" className="text-fg-faint mt-2">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Components — editorial hairline rows */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Deep dive</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Explore</span>
                  <span className="block text-gradient-aurora">components.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="border-t border-border-strong">
            {components.map((c) => (
              <RevealItem key={c.num}>
                <Link href={c.href} className="group block relative overflow-hidden border-b border-border">
                  <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-fg-strong transition-transform duration-500 ease-out-quart group-hover:scale-x-100" />
                  <div className="relative py-8 md:py-12 flex items-center justify-between gap-6 transition-colors duration-500 group-hover:text-fg-invert">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-display text-fg-faint group-hover:text-fg-invert tabular-nums leading-none transition-colors duration-500" style={{}}>
                        {c.num}
                      </span>
                      <div>
                        <h3 className="text-h3 text-fg-strong group-hover:text-fg-invert transition-colors duration-500 mb-2">{c.title}</h3>
                        <p className="text-body-md text-fg-mid group-hover:text-fg-invert transition-colors duration-500">{c.subtitle}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border-strong group-hover:border-fg-invert shrink-0 transition-all duration-500">
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Enterprise */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Enterprise</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h1 text-fg-strong">
                  <span className="block">Built for</span>
                  <span className="block text-gradient-aurora">enterprise.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {enterprisePoints.map((e, i) => (
              <RevealItem
                key={e.title}
                className={`py-10 md:py-12 lg:pr-8 ${i > 0 ? 'lg:pl-8 lg:border-l lg:border-border' : ''} border-b border-border lg:[&:nth-child(-n+4)]:border-b-0`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{e.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{e.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8 justify-center">
                Trusted by leading organizations
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <blockquote className="text-h2 text-fg-strong leading-tight mb-10 italic">
                &ldquo;GenX Platform + AI CoE transformed how we approach AI adoption.
                The built-in governance framework gave us the confidence to scale AI responsibly across our organization.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-eyebrow text-fg-mid">— Enterprise Technology Leader</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <h2 className="text-display text-fg-strong mb-8">
                <span className="block">Ready to transform</span>
                <span className="block text-gradient-aurora">your AI operations?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                See how GenX Platform + AI CoE can help you scale AI responsibly.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink href="/contact" variant="solid" size="lg" arrow>
                  Schedule Demo
                </CTALink>
                <CTALink href="/platform/core" variant="outline" size="lg" arrow>
                  Explore CORE
                </CTALink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
