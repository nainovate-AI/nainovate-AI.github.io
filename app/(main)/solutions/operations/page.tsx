import { Metadata } from 'next';
import OperationsPageClient from '@/components/pages/OperationsPageClient';

export const metadata: Metadata = {
  title: 'AI for Operations - Automate Internal Workflows | Nainovate',
  description: 'Transform internal operations with AI agents for HR screening, BOQ generation, document processing, and enterprise search. Deploy in days, not months.',
  keywords: 'AI operations, HR automation, BOQ generation, document processing, enterprise AI, internal automation',
  openGraph: {
    title: 'AI for Operations - Automate Internal Workflows',
    description: 'Transform internal operations with intelligent AI agents. Deploy in days.'
  },
};

export default function OperationsPage() {
  return <OperationsPageClient />;
}