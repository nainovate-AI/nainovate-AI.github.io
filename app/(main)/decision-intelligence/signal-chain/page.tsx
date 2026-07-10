import { Metadata } from 'next';
import SignalChainClient from '@/components/pages/SignalChainClient';

export const metadata: Metadata = {
  title: 'Signal → Action Chain | Nainovate Decision Intelligence',
  description: 'Watchlists spot risk. Recommendations propose action. Workflows execute across teams. Every step lineage-linked. Full FD-2104 walkthrough.',
  keywords: 'watchlists, recommendations, workflow orchestration, signal chain, decision lineage',
};

export default function SignalChainPage() {
  return <SignalChainClient />;
}
