import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Industries } from '@/components/sections/Industries';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Features />
      <Industries />
      <Stats />
      <CTA />
    </main>
  );
}