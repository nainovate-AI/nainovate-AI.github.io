import { Metadata } from 'next';
import SecurityGovernanceClient from '@/components/pages/SecurityGovernanceClient';

export const metadata: Metadata = {
  title: 'Security & Governance - Enterprise AI Platform | Nainovate GenX',
  description: 'Deploy AI securely with built-in compliance, role-based access control, and comprehensive audit trails. GDPR, HIPAA-ready, multi-region support.',
  keywords: 'AI security, AI governance, enterprise compliance, GDPR AI, HIPAA AI, role-based access control, audit trails',
  openGraph: {
    title: 'Security & Governance - GenX Platform',
    description: 'Enterprise-grade security and compliance built into every AI workflow.',
  },
};

export default function SecurityGovernancePage() {
  return <SecurityGovernanceClient />;
}