import type { Metadata } from "next";
import CorePageClient from "@/components/pages/CorePageClient";

export const metadata: Metadata = {
  title: 'CORE - AI Engine for Intelligent Agents | Nainovate GenX',
  description: 'Create production-ready AI agents with CORE. Advanced RAG pipelines, RLHF fine-tuning, model optimization. Part of the GenX integrated platform.',
  keywords: 'CORE AI engine, GenX CORE, AI agent builder, RAG pipeline, RLHF, enterprise AI development',
  openGraph: {
    title: 'CORE - The AI Engine | Nainovate GenX',
    description: 'Build specialized AI agents for your exact business needs.',
    images: ['/og-core.png'],
  },
};

export default function CorePage() {
  return <CorePageClient />;
}