import { Suspense } from 'react';
import WorkspaceHub from '@/components/workspace/WorkspaceHub';

export default function DecisionNiaDemoPage() {
  return (
    <Suspense fallback={null}>
      <WorkspaceHub />
    </Suspense>
  );
}
