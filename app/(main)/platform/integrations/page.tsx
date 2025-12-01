import { Metadata } from 'next';
import IntegrationsClient from '@/components/pages/IntegrationsClient';

export const metadata: Metadata = {
  title: 'Integrations - 100+ Pre-Built Connectors | Nainovate GenX',
  description: 'Connect AI agents to your entire tech stack. 100+ pre-built enterprise connectors for CRM, ERP, databases, cloud services. Custom integration framework with visual mapping.',
  keywords: 'AI integrations, enterprise connectors, CRM integration, ERP integration, API management, Salesforce, Microsoft, Google, Oracle',
  openGraph: {
    title: 'Integrations - GenX Platform',
    description: 'Connect to any system. 100+ pre-built connectors plus custom integration framework.',
  },
};

export default function IntegrationsPage() {
  return <IntegrationsClient />;
}