import type { Metadata } from "next";
import { HeroSlideshowFull } from '@/components/sections/HeroSlideshowFull';
import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { LensPicker } from '@/components/sections/LensPicker';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { Industries } from '@/components/sections/Industries';
import { Category } from '@/components/sections/Category';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Decision Intelligence Platform — Enterprise AI Agents & Explainable Automation',
  description: 'Nainovate is the Decision Intelligence platform for enterprise. Connect signals, decisions, and actions across support, success, sales, and delivery. Build AI agents, orchestrate workflows, and trace every outcome — no code required.',
  keywords: 'decision intelligence, enterprise AI, AI agents, explainable AI, GenX platform, NIA, AI workflow automation, no-code AI, signal chain, trace and audit, coordination center'
};

//test comment for starting a publish

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.nainovate.ai",
    "name": "Nainovate - Enterprise AI Platform",
    "description": "Build production-ready AI agents in days with Nainovate's no-code platform",
    "publisher": {
      "@type": "Organization",
      "name": "Nainovate Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nainovate.ai/images/Nainovate_Dark_mode.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nainovate.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Updated schema with CORE/NIA/FLOW
  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nainovate GenX Platform",
    "description": "Enterprise AI platform with integrated CORE, NIA, and FLOW components",
    "brand": {
      "@type": "Brand",
      "name": "Nainovate"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "CORE - AI Engine",
          "description": "Create intelligent AI agents"
        },
        {
          "@type": "Offer",
          "name": "NIA - Interface",
          "description": "Deploy conversational AI"
        },
        {
          "@type": "Offer",
          "name": "FLOW - Automation Engine",
          "description": "Orchestrate AI workflows"
        }
      ]
    }
  };
  
  return (
    <main className="bg-bg">
      <JsonLd data={homepageSchema} />
      <JsonLd data={heroSchema} />
      <HeroSlideshowFull />
      <Hero />
      <ProofStrip />
      <LensPicker />
      <Problem />
      <Industries />
      <Features />
      <Category />
      <Stats />
      <CTA />
    </main>
  );
}