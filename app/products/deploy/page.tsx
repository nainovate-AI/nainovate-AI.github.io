import { Metadata } from 'next';
import DeployPageClient from '@/components/pages/DeployPageClient';

export const metadata: Metadata = {
  title: 'NIA Chatbot - Deploy & Manage Enterprise AI Agents | Nainovate',
  description: 'Intelligent conversational interface for AI agents. Handle 50M+ daily conversations, <100ms response time, 25+ languages. Deploy GenX agents instantly.',
  keywords: 'NIA chatbot, AI deployment, conversational AI, enterprise chatbot, AI agent interface, multi-language chatbot',
  openGraph: {
    title: 'NIA - Where AI Agents Come to Life',
    description: 'Deploy and manage AI agents at scale. 50M+ daily conversations, 99.9% uptime.',
    images: ['/og-nia.png'],
  },
};

export default function DeployPage() {
  return <DeployPageClient />;
}