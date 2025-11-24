import { Metadata } from 'next';
import AIEngineeringToolsClient from '@/components/pages/AIEngineeringToolsClient';

export const metadata: Metadata = {
  title: 'AI Engineering Tools - Build Production-Ready Agents | Nainovate GenX',
  description: 'Build production-ready AI agents with GenX engineering tools. Prompt Workshop, Model Orchestrator, Quality Assurance Lab, and enterprise platform features.',
  keywords: 'AI engineering tools, prompt testing, model management, AI evaluation, GenX CORE, AI development',
  openGraph: {
    title: 'AI Engineering Tools - GenX Platform',
    description: 'Build production-ready AI agents with advanced engineering tools and built-in AI CoE governance.',
  },
};

export default function AIEngineeringToolsPage() {
  return <AIEngineeringToolsClient />;
}