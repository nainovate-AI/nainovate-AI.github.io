import type { Metadata } from 'next';
import DemoChooserClient from '@/components/pages/DemoChooserClient';

export const metadata: Metadata = {
  title: 'Choose a Demo',
  description: 'Pick a lens to explore: Public Sector Operations or Enterprise Decision NIA.',
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoChooserClient />;
}
