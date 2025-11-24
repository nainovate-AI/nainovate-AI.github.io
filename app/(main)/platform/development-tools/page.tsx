import { Metadata } from 'next';
import DevelopmentToolsClient from '@/components/pages/DevelopmentToolsClient';

export const metadata: Metadata = {
  title: 'Development Tools - No-Code & Pro-Code Platform | Nainovate GenX',
  description: 'Build AI agents your way. Visual drag-and-drop builder for business users. Comprehensive SDKs for developers. One unified platform with integrated testing and deployment.',
  keywords: 'no-code AI platform, pro-code development, Python SDK, JavaScript SDK, visual workflow builder, AI agent development',
  openGraph: {
    title: 'Development Tools - GenX Platform',
    description: 'Build AI agents with no-code simplicity or pro-code power. Or both.',
  },
};

export default function DevelopmentToolsPage() {
  return <DevelopmentToolsClient />;
}