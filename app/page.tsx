import type { Metadata } from "next";
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Industries } from '@/components/sections/Industries';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Enterprise AI Platform - Build & Deploy AI Agents in Days',
  description: 'Transform your business with Nainovate. Build AI agents without coding, deploy instantly, orchestrate workflows. 500+ agents deployed. 99.9% uptime. Start free trial today.',
  keywords: 'AI platform, enterprise AI, AI agents, no-code AI development, GenX platform, NIA chatbot, AI workflow automation'
};

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Features />
      <Industries />
      <Stats />
      <CTA />
    </main>
  );
}