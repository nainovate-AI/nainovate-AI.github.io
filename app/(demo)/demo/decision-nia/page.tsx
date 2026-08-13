import type { Metadata } from 'next';
import { Suspense } from 'react';
import WorkspaceHub from '@/components/workspace/WorkspaceHub';

export const metadata: Metadata = {
  title: 'Decision NIA — Interactive Demo',
  description: 'Explore the Decision NIA workspace: Command Center, Ask, Dashboard, and Trace across Customer Success, Support, Sales, and Delivery.',
  robots: { index: false, follow: false },
};

export default function DecisionNiaDemoPage() {
  return (
    <Suspense fallback={null}>
      <WorkspaceHub />
    </Suspense>
  );
}
