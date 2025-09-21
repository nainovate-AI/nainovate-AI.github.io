import { Metadata } from 'next';
import SolutionsPageClient from '@/components/pages/SolutionsPageClient';

export const metadata: Metadata = {
  title: 'AI Solutions for Planning, Procurement & Execution | Nainovate',
  description: 'Industry-agnostic AI solutions for every business stage. Automate BOQ generation, vendor management, contract analysis. 70% faster delivery, 90% accuracy increase.',
  keywords: 'AI solutions, business automation, procurement AI, planning automation, execution intelligence, BOQ automation, vendor management AI',
  openGraph: {
    title: 'Complete AI Solutions for Every Business Stage',
    description: 'Transform planning, procurement, and execution with intelligent AI agents. Industry-agnostic solutions.'
  },
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}