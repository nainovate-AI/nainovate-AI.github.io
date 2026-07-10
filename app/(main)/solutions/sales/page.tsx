import { Metadata } from 'next';
import SalesSolutionClient from '@/components/pages/SalesSolutionClient';

export const metadata: Metadata = {
  title: 'Sales — Pipeline aware of deployment reality | Nainovate',
  description: 'Sales sees renewal risk, deployment health, and support signals before pitching. No more expansion into broken deployments.',
  keywords: 'sales AI, pipeline intelligence, renewal risk, account 360, expansion signals',
};

export default function SalesSolutionPage() {
  return <SalesSolutionClient />;
}
