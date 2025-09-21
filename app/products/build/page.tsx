import type { Metadata } from "next";
import BuildPageClient from "@/components/pages/BuildPageClient";

export const metadata: Metadata = {
  title: 'GenX - No-Code AI Agent Builder Platform for Enterprises',
  description: 'Create production-ready AI agents with visual workflows. Features: RAG pipelines, RLHF fine-tuning, model evaluation, instant deployment. No coding required.',
  keywords: 'GenX, AI builder, no-code AI, visual workflow builder, RAG pipeline, AI fine-tuning, enterprise AI development'
};

export default function BuildPage() {
  return <BuildPageClient />;
}
