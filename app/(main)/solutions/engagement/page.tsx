import { Metadata } from 'next';
import EngagementPageClient from '@/components/pages/EngagementPageClient';

export const metadata: Metadata = {
  title: 'AI for Engagement - Customer Service & Support Automation | Nainovate',
  description: 'Scale customer interactions with AI-powered service bots, citizen portals, and multi-channel support. 24/7 availability, instant responses.',
  keywords: 'AI customer service, chatbot, citizen portal, multi-channel support, customer engagement AI, service automation',
  openGraph: {
    title: 'AI for Engagement - Scale Customer Interactions',
    description: 'Deliver exceptional customer experiences with intelligent AI agents. 24/7 support automation.'
  },
};

export default function EngagementPage() {
  return <EngagementPageClient />;
}