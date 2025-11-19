import { Metadata } from 'next';
import TryDemoPageClient from '@/components/pages/TryDemoPageClient';

export const metadata: Metadata = {
  title: 'Try NIA AI Assistant - Interactive Demo | Nainovate',
  description: 'Experience our unified AI assistant in action. Ask questions about HR, BOQ, analytics, compliance, customer service, and more.',
  keywords: 'AI demo, interactive chatbot, enterprise AI, NIA assistant, AI platform demo',
  openGraph: {
    title: 'Try NIA - Unified AI Assistant',
    description: 'Interactive demo of our intelligent AI platform that handles operations, engagement, and intelligence.'
  },
};

export default function TryDemoPage() {
  return <TryDemoPageClient />;
}