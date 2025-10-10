import { Metadata } from 'next';
import NiaPageClient from '@/components/pages/NiaPageClient';

export const metadata: Metadata = {
  title: 'NIA - Interface Layer for AI Agents | Nainovate GenX',
  description: 'Where AI agents come to life. Handle 50M+ daily conversations, <100ms response time, 25+ languages. Part of the GenX integrated platform.',
  keywords: 'NIA interface, GenX NIA, AI chatbot, conversational AI, enterprise chatbot, AI agent interface',
  openGraph: {
    title: 'NIA - The Interface Layer | Nainovate GenX',
    description: 'Deploy and interact with AI agents at scale. 50M+ daily conversations, 99.9% uptime.',
    images: ['/og-nia.png'],
  },
};

export default function NiaPage() {
  return <NiaPageClient />;
}