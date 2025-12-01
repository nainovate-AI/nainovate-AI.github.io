import { Metadata } from 'next';
import ProductsPageClient from '@/components/pages/ProductsPageClient';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'GenX Platform + AI Center of Excellence | Nainovate',
  description: 'Complete AI automation platform with built-in governance. GenX combines CORE, NIA, FLOW with AI CoE framework. Build, deploy, scale AI responsibly.',
  keywords: 'GenX platform, AI automation, AI Center of Excellence, CORE, NIA, FLOW, enterprise AI platform, AI governance, McKinsey AI framework',
  openGraph: {
    title: 'GenX Platform - AI Tools + Center of Excellence',
    description: 'Other platforms give you AI tools. We give you AI tools + complete governance framework.',
    images: ['/og-genx-platform.png'],
  },
};

export default function ProductsPage() {
  const platformSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GenX Platform",
    "applicationCategory": "Enterprise AI Platform",
    "description": "Integrated AI automation system with Center of Excellence framework, combining CORE, NIA, and FLOW components",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "CORE - AI Engine",
          "description": "Build intelligent agents with RAG pipelines and fine-tuning"
        },
        {
          "@type": "Offer",
          "name": "NIA - Interface",
          "description": "Deploy conversational AI at scale"
        },
        {
          "@type": "Offer",
          "name": "FLOW - Automation Engine",
          "description": "Orchestrate multi-agent workflows"
        },
        {
          "@type": "Offer",
          "name": "AI Center of Excellence",
          "description": "Governance framework with McKinsey best practices"
        }
      ]
    },
    "featureList": [
      "AI Engineering Tools",
      "Search + Data AI",
      "Security + Governance",
      "No-Code + Pro-Code Tools",
      "100+ Integrations",
      "McKinsey AI Framework",
      "Built-in CoE Governance"
    ]
  };

  return (
    <>
      <JsonLd data={platformSchema} />
      <ProductsPageClient />
    </>
  );
}