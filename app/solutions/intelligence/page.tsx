import { Metadata } from 'next';
import IntelligencePageClient from '@/components/pages/IntelligencePageClient';

export const metadata: Metadata = {
  title: 'AI for Intelligence - Analytics & Compliance Automation | Nainovate',
  description: 'Transform data into insights with AI-powered analytics dashboards, compliance tracking, and quality assurance. Real-time monitoring and reporting.',
  keywords: 'AI analytics, compliance automation, quality assurance AI, business intelligence, process monitoring, data insights',
  openGraph: {
    title: 'AI for Intelligence - Data-Driven Decision Making',
    description: 'Turn data into actionable insights with intelligent AI agents. Real-time analytics and compliance.'
  },
};

export default function IntelligencePage() {
  return <IntelligencePageClient />;
}