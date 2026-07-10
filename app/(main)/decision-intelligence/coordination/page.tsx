import { Metadata } from 'next';
import CoordinationClient from '@/components/pages/CoordinationClient';

export const metadata: Metadata = {
  title: 'Coordination Center — Cross-team initiatives | Nainovate',
  description: 'Support → CSM → Sales → Delivery. One shared surface where four lenses converge on the same customer.',
  keywords: 'coordination, cross-team, customer 360, account view, initiatives',
};

export default function CoordinationPage() {
  return <CoordinationClient />;
}
