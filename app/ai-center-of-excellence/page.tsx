'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function AICenterOfExcellencePage() {
  const [activeSpoke, setActiveSpoke] = useState<number | null>(null);
  
  const spokes = [
    {
      id: 1,
      title: 'Workflows over agents',
      description: 'End-to-end business workflow design',
      icon: '⟲',
      color: '#3B82F6'
    },
    {
      id: 2,
      title: 'Right tool for the right task',
      description: 'AI tool selection governance',
      icon: '⚙',
      color: '#F97316'
    },
    {
      id: 3,
      title: 'Fight "AI slop"',
      description: 'Continuous evaluation & improvement',
      icon: '◆',
      color: '#10B981'
    },
    {
      id: 4,
      title: 'Agents as employees',
      description: 'Onboarding & performance monitoring',
      icon: '◯',
      color: '#8B5CF6'
    },
    {
      id: 5,
      title: 'Frameworks for orchestration',
      description: 'Seamless integration & scale',
      icon: '◈',
      color: '#EF4444'
    },
    {
      id: 6,
      title: 'User-centric trust loops',
      description: 'Ethics, compliance, and feedback',
      icon: '◉',
      color: '#14B8A6'
    }
  ];
  
  return (
    <main className="bg-black min-h-screen pt-20">
      {/* Hero Section with Hub-and-Spoke Visualization */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium tracking-widest text-gray uppercase mb-4">
                    CENTER OF EXCELLENCE
                  </p>
                  <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                      <span className="block">AI CoE</span>
                      <span className="block text-gray">AS A SERVICE</span>
                  </h1>
                </div>
                
                <p className="text-xl text-gray max-w-lg">
                  Scale AI responsibly with governance, orchestration, and trust built into every workflow.
                </p>
                
                <div className="flex gap-8">
                  <Link href="/contact">
                    <button className="group relative overflow-hidden">
                      <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                        BUILD YOUR COE
                      </span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>
                  </Link>

                </div>
              </div>
            </AnimatedSection>
            
            {/* Right: Interactive Hub and Spoke */}
            <AnimatedSection delay={0.2}>
              <div className="relative h-[600px] flex items-center justify-center">
                <HubAndSpoke spokes={spokes} activeSpoke={activeSpoke} setActiveSpoke={setActiveSpoke} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What It Delivers Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-20">
              <span className="text-gray">WHAT IT</span> DELIVERS
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection delay={0.1}>
              <div className="space-y-12">
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Scalable AI Adoption</h3>
                  <p className="text-gray">
                    Execute multiple AI programs with consistent standards across organizations or government agencies.
                  </p>
                </div>
                
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Ethical & Compliant by Design</h3>
                  <p className="text-gray">
                    Embeds regulatory, ethical, and trust frameworks into every AI workflow.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="space-y-12">
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Human-Centric Intelligence</h3>
                  <p className="text-gray">
                    Human-Machine Interaction keeps people at the center of AI-driven decisions.
                  </p>
                </div>
                
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Operational Excellence</h3>
                  <p className="text-gray">
                    GenX orchestrates AI capabilities, workflows, and continuous improvement for measurable outcomes.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Framework Deep Dive */}
      <section id="framework" className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-20 text-center">
              <span className="text-gray">THE COE</span> FRAMEWORK
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Core */}
            <AnimatedSection delay={0.1}>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">GX</span>
                </div>
                <h3 className="text-xl font-bold mb-2">GenX Platform</h3>
                <p className="text-gray">The Intelligence Engine</p>
              </div>
            </AnimatedSection>
            
            {/* Middle Layer */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Center of Excellence</h3>
                <p className="text-gray">Governance & Orchestration Layer</p>
              </div>
            </AnimatedSection>
            
            {/* Outer Layer */}
            <AnimatedSection delay={0.3}>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">◆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">McKinsey Best Practices</h3>
                <p className="text-gray">6 Proven AI Scaling Lessons</p>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Spokes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spokes.map((spoke, idx) => (
              <AnimatedSection key={spoke.id} delay={idx * 0.1}>
                <div 
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all cursor-pointer"
                  style={{ borderColor: activeSpoke === spoke.id ? spoke.color + '60' : '' }}
                  onMouseEnter={() => setActiveSpoke(spoke.id)}
                  onMouseLeave={() => setActiveSpoke(null)}
                >
                  <div className="text-3xl mb-4">{spoke.icon}</div>
                  <h4 className="font-bold mb-2">{spoke.title}</h4>
                  <p className="text-sm text-gray">{spoke.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nainovate Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-8">
                <span className="text-gray">WHY</span> NAINOVATE?
              </h2>
              <p className="text-xl text-gray max-w-3xl mx-auto">
                With Nainovate.ai, organizations don&apos;t just adopt AI — they operationalize 
                intelligence responsibly, turning complexity into clarity and delivering real-world impact.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-gray">Compliance Ready</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div>
                <div className="text-4xl font-bold mb-2">3X</div>
                <p className="text-gray">Faster Deployment</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <p className="text-gray">Cost Reduction</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-gray">Expert Support</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-6xl font-bold mb-8">
              READY TO BUILD YOUR AI COE?
            </h2>
            
            <p className="text-xl text-gray mb-10">
              Transform your AI initiatives with a proven framework for scale, governance, and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">Schedule Consultation →</Button>
              </Link>
              <Link href="/products">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">Explore GenX Platform</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

// Interactive Hub and Spoke Component
// Define a proper type for spokes to avoid `any`
type Spoke = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
};

type HubAndSpokeProps = {
  spokes: Spoke[];
  activeSpoke: number | null;
  setActiveSpoke: (id: number | null) => void;
};

function HubAndSpoke({ spokes, activeSpoke, setActiveSpoke }: HubAndSpokeProps) {
  const centerX = 250;
  const centerY = 250;
  const radius = 180;
  
  // Helper: split a short title into up to `maxLines` lines by breaking at a space
  // keeps lines reasonably sized so SVG <text>/<tspan> can render them without overflow
  function splitLines(text: string, maxLen: number, maxLines = 2) {
    if (!text) return [];
    if (text.length <= maxLen) return [text];

    const firstCut = text.slice(0, maxLen);
    const lastSpace = firstCut.lastIndexOf(' ');
    const line1 = lastSpace > -1 ? firstCut.slice(0, lastSpace) : firstCut;
    let rest = text.slice(line1.length).trim();

    if (!rest) return [line1];

    if (rest.length > maxLen) {
      rest = rest.slice(0, maxLen - 3).trim() + '...';
    }

    const lines = [line1];
    if (lines.length < maxLines && rest) lines.push(rest);
    return lines.slice(0, maxLines);
  }
  
  return (
    <svg width="500" height="500" viewBox="0 0 500 500" className="w-full h-full">
      {/* Outer rotating circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius + 40}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
        strokeDasharray="5,5"
        className="animate-spin-slow"
      />
      
      {/* Middle circle - CoE */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius - 30}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
      
      {/* Connection lines */}
      {spokes.map((spoke, idx) => {
        const angle = (idx * 60 - 90) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        return (
          <g key={spoke.id}>
            <line
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={activeSpoke === spoke.id ? spoke.color : "rgba(255,255,255,0.1)"}
              strokeWidth={activeSpoke === spoke.id ? "2" : "1"}
              className="transition-all duration-300"
            />
          </g>
        );
      })}
      
      {/* Center - GenX */}
      <g>
        <circle
          cx={centerX}
          cy={centerY}
          r="60"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />
        <text
          x={centerX}
          y={centerY + 5}
          textAnchor="middle"
          className="fill-white text-2xl font-bold"
        >
          GenX
        </text>
      </g>
      
      {/* Middle ring label */}
      <text
        x={centerX}
        y={centerY + 100}
        textAnchor="middle"
        className="fill-gray text-sm"
      >
        AI Center of Excellence
      </text>
      
      {/* Spoke nodes */}
      {spokes.map((spoke, idx) => {
        const angle = (idx * 60 - 90) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        // prepare wrapped title lines for tooltip (max 2 lines)
        const titleLines = splitLines(spoke.title, 20, 2);
        const rectWidth = 160;
        const rectPadding = 12; // vertical padding
        const lineHeight = 16;
        const rectHeight = rectPadding + titleLines.length * lineHeight + 8; // extra padding
        const rectX = x - rectWidth / 2;
        const rectY = y + 40;

        return (
          <g
            key={spoke.id}
            onMouseEnter={() => setActiveSpoke(spoke.id)}
            onMouseLeave={() => setActiveSpoke(null)}
            className="cursor-pointer"
          >
            <circle
              cx={x}
              cy={y}
              r="30"
              fill={activeSpoke === spoke.id ? spoke.color + '40' : "rgba(255,255,255,0.1)"}
              stroke={activeSpoke === spoke.id ? spoke.color : "rgba(255,255,255,0.2)"}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <text
              x={x}
              y={y + 5}
              textAnchor="middle"
              className="fill-white text-2xl"
            >
              {spoke.icon}
            </text>
            
            {/* Tooltip (title wrapped to up to 2 lines) */}
            {activeSpoke === spoke.id && (
              <g>
                <rect
                  x={rectX}
                  y={rectY}
                  width={rectWidth}
                  height={rectHeight}
                  rx="8"
                  fill="rgba(0,0,0,0.9)"
                  stroke="rgba(255,255,255,0.2)"
                />
                <text
                  x={x}
                  y={rectY + 18}
                  textAnchor="middle"
                  className="fill-white text-xs font-medium"
                >
                  {titleLines.map((line, i) => (
                    <tspan key={i} x={x} dy={i === 0 ? '0' : String(lineHeight)}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}