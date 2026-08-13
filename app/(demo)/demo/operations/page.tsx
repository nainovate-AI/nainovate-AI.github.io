import type { Metadata } from 'next';
import { Suspense } from 'react';
import PublicSectorHub from '@/components/public-sector/PublicSectorHub';

export const metadata: Metadata = {
  title: 'Public Sector Operations — Interactive Demo',
  description: 'Live demo of the Building Permits Portal — Ask, Dashboard, and citizen workflows for public-sector operations.',
  robots: { index: false, follow: false },
};

export default function OperationsDemoPage() {
  return (
    <Suspense fallback={null}>
      <PublicSectorHub />
    </Suspense>
  );
}
