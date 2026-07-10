import { Metadata } from 'next';
import AIAgentClient from '@/components/pages/AIAgentClient';

export const metadata: Metadata = {
  title: 'AI Agent — Ask inside Freshdesk | Nainovate Decision Intelligence',
  description: 'Customer-facing AI Agent inside Freshdesk. Four canonical scenarios: doc-based, known issue, new bug, feature request. L1 deflection without a human.',
  keywords: 'AI agent, Freshdesk, L1 deflection, customer support AI, ticket automation',
};

export default function AIAgentPage() {
  return <AIAgentClient />;
}
