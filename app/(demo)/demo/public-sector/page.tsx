import { Suspense } from 'react';
import PublicSectorHub from '@/components/public-sector/PublicSectorHub';

export default function PublicSectorDemoPage() {
  return (
    <Suspense fallback={null}>
      <PublicSectorHub />
    </Suspense>
  );
}
