import { Metadata } from 'next';
import DemoChooserClient from '@/components/pages/DemoChooserClient';

export const metadata: Metadata = {
  title: 'Try Demo — Choose your NIA | Nainovate',
  description: 'Pick a demo. Operations NIA or Decision NIA. Same platform, different lens.',
};

export default function DemoPage() {
  return <DemoChooserClient />;
}
