import { Metadata } from 'next';
import DeliverySolutionClient from '@/components/pages/DeliverySolutionClient';

export const metadata: Metadata = {
  title: 'Delivery — Milestone risk surfaced early | Nainovate',
  description: 'Delivery slips surfaced at the trigger, not at the review. Cross-team coordination on every milestone.',
  keywords: 'delivery, project rescue, milestone risk, professional services AI, implementation health',
};

export default function DeliverySolutionPage() {
  return <DeliverySolutionClient />;
}
