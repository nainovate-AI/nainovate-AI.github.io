import { Metadata } from 'next';
import TheatricalDemoClient from '@/components/pages/TheatricalDemoClient';

export const metadata: Metadata = {
  title: 'Experience GenX Platform - Building Permits Demo | Nainovate',
  description: 'Experience the three delivery formats of GenX: Conversational AI, Intelligence Dashboards, and Workflow Automation. Building permits citizen services demo.',
  keywords: 'AI demo, building permits, citizen services, government AI, chatbot demo, dashboard demo, workflow automation',
  openGraph: {
    title: 'GenX Platform Demo - Citizen Services',
    description: 'Experience conversational AI, intelligence dashboards, and workflow automation in one unified platform.'
  },
};

export default function TryDemoPage() {
  return <TheatricalDemoClient />;
}