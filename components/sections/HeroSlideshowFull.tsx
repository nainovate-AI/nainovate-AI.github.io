'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  { src: '/hero-slides/slide-1.png', alt: 'The AI Reality: Why most AI initiatives struggle' },
  { src: '/hero-slides/slide-2.png', alt: 'Government Decision Intelligence' },
  { src: '/hero-slides/slide-3.png', alt: 'One Enterprise. Seven Capabilities. Infinite Impact' },
  { src: '/hero-slides/slide-4.png', alt: 'One Enterprise. One Decision Intelligence Platform' },
];

const IMG_W = 2200;
const IMG_H = 1000;

export function HeroSlideshowFull() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-bg pt-16 md:pt-20 px-4 md:px-10">
      <div
        className="relative w-full overflow-hidden lg:h-[calc(100vh-80px)]"
        style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
      >
        {SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-contain lg:object-cover transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}
