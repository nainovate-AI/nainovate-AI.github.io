import type { Metadata } from 'next';
import { Suspense } from 'react';
import PublicSectorHub from '@/components/public-sector/PublicSectorHub';

export const metadata: Metadata = {
  title: 'Public Sector — Interactive Demo',
  description: 'Explore the public-sector lens: citizen-facing Ask, dashboards, and permit workflows.',
  robots: { index: false, follow: false },
};

export default function PublicSectorDemoPage() {
  return (
    <Suspense fallback={null}>
      <PublicSectorHub />
    </Suspense>
  );
}
