import { Metadata } from 'next';
import CustomerSuccessSolutionClient from '@/components/pages/CustomerSuccessSolutionClient';

export const metadata: Metadata = {
  title: 'Customer Success — Health-anchored decision layer | Nainovate',
  description: 'CSMs see health drops before customers churn. Every ticket, every signal, every renewal — one shared surface.',
  keywords: 'customer success, health score, CSM AI, churn prevention, renewal risk, account health',
};

export default function CustomerSuccessSolutionPage() {
  return <CustomerSuccessSolutionClient />;
}
