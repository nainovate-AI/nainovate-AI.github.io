import { Metadata } from 'next';
import CustomerSupportSolutionClient from '@/components/pages/CustomerSupportSolutionClient';

export const metadata: Metadata = {
  title: 'Customer Support — AI Co-Pilot inside Freshdesk | Nainovate',
  description: 'Sarah files FD-2104. Nia deflects, escalates, and coordinates in seconds. See how AI Co-Pilot inside Freshdesk changes L1/L2 support.',
  keywords: 'customer support AI, Freshdesk co-pilot, L1 deflection, ticket automation, support head dashboard',
};

export default function CustomerSupportSolutionPage() {
  return <CustomerSupportSolutionClient />;
}
