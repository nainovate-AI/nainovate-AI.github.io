'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function AICenterOfExcellencePage() {
  const [activeSpoke, setActiveSpoke] = useState<number | null>(1);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle through spokes
  useEffect(() => {
    // Don't auto-cycle if user is hovering
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveSpoke((prev) => {
        if (prev === null || prev >= 6) return 1;
        return prev + 1;
      });
    }, 2000); // Change spoke every 2 seconds

    return () => clearInterval(interval);
  }, [isHovering]);

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
                <HubAndSpoke
                  spokes={spokes}
                  activeSpoke={activeSpoke}
                  setActiveSpoke={setActiveSpoke}
                  setIsHovering={setIsHovering}
                />              </div>
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
              <Link href="/platform">
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
  setIsHovering: (hovering: boolean) => void;
};

function HubAndSpoke({ spokes, activeSpoke, setActiveSpoke, setIsHovering }: HubAndSpokeProps) {
  const centerX = 350;
  const centerY = 250;
  const spokeDistance = 180;

  return (
    <svg viewBox="0 0 700 600" className="w-full h-full max-w-[700px]">
      {/* Outer ring */}
      <circle
        cx={centerX}
        cy={centerY}
        r={spokeDistance}
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* Connection lines */}
      {spokes.map((spoke, idx) => {
        const angle = (idx * 60 - 90) * (Math.PI / 180);
        const x = centerX + spokeDistance * Math.cos(angle);
        const y = centerY + spokeDistance * Math.sin(angle);

        return (
          <line
            key={`line-${spoke.id}`}
            x1={centerX}
            y1={centerY}
            x2={x}
            y2={y}
            stroke={activeSpoke === spoke.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"}
            strokeWidth={activeSpoke === spoke.id ? "2" : "1"}
            className="transition-all duration-500"
          />
        );
      })}

      {/* Center - GenX */}
      <g>
        <circle
          cx={centerX}
          cy={centerY}
          r="75"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        <text
          x={centerX}
          y={centerY + 10}
          textAnchor="middle"
          style={{ fontSize: '28px', fontWeight: 'bold', fill: 'white' }}
        >
          GenX
        </text>
      </g>

      {/* Spoke nodes */}
      {spokes.map((spoke, idx) => {
        const angle = (idx * 60 - 90) * (Math.PI / 180);
        const x = centerX + spokeDistance * Math.cos(angle);
        const y = centerY + spokeDistance * Math.sin(angle);

        const isActive = activeSpoke === spoke.id;

        // Label positions
        let labelX = x;
        let labelY = y;
        let textAnchor: "middle" | "start" | "end" = "middle";

        if (idx === 0) {
          labelY = y - 70;
        } else if (idx === 1) {
          labelX = x + 55;
          labelY = y;
          textAnchor = "start";
        } else if (idx === 2) {
          labelX = x + 55;
          labelY = y;
          textAnchor = "start";
        } else if (idx === 3) {
          labelY = y + 70;
        } else if (idx === 4) {
          labelX = x - 55;
          labelY = y;
          textAnchor = "end";
        } else if (idx === 5) {
          labelX = x - 55;
          labelY = y;
          textAnchor = "end";
        }

        const words = spoke.title.split(' ');
        const midpoint = Math.ceil(words.length / 2);
        const line1 = words.slice(0, midpoint).join(' ');
        const line2 = words.slice(midpoint).join(' ');

        return (
          <g
            key={spoke.id}
            onMouseEnter={() => {
              setIsHovering(true);
              setActiveSpoke(spoke.id);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            className="cursor-pointer"
          >
            {/* Glow effect behind circle when active */}
            {isActive && (
              <circle
                cx={x}
                cy={y}
                r="50"
                fill="rgba(255,255,255,0.08)"
                className="transition-all duration-500"
              />
            )}

            {/* Spoke circle */}
            <circle
              cx={x}
              cy={y}
              r="38"
              fill={isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)"}
              stroke={isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)"}
              strokeWidth={isActive ? "2" : "1"}
              className="transition-all duration-500"
            />

            {/* Spoke icon */}
            <text
              x={x}
              y={y + 7}
              textAnchor="middle"
              style={{
                fill: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                fontSize: '20px'
              }}
              className="transition-all duration-500"
            >
              {spoke.icon}
            </text>

            {/* Label */}
            <text
              x={labelX}
              y={labelY}
              textAnchor={textAnchor}
              style={{
                fill: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                fontSize: '13px',
                fontWeight: isActive ? '600' : '400'
              }}
              className="transition-all duration-500"
            >
              <tspan x={labelX} dy="0">{line1}</tspan>
              <tspan x={labelX} dy="16">{line2}</tspan>
            </text>
          </g>
        );
      })}
    </svg>
  );
}