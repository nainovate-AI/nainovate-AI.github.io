import { Suspense } from 'react';
import PublicSectorHub from '@/components/public-sector/PublicSectorHub';

export default function OperationsDemoPage() {
  return (
    <Suspense fallback={null}>
      <PublicSectorHub />
    </Suspense>
  );
}
