import { Metadata } from 'next';
import DecisionNiaDemoHubClient from '@/components/pages/DecisionNiaDemoHubClient';

export const metadata: Metadata = {
  title: 'Decision NIA — Demo | Nainovate',
  description: 'Live walkthrough of Decision NIA across four teams. Anchored on Acme FD-2104.',
};

export default function DecisionNiaDemoPage() {
  return <DecisionNiaDemoHubClient />;
}
