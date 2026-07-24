'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  { src: '/hero-slides/1.png', alt: 'Decision intelligence background 1' },
  { src: '/hero-slides/2.png', alt: 'Decision intelligence background 2' },
  { src: '/hero-slides/3.png', alt: 'Decision intelligence background 3' },
  { src: '/hero-slides/4.png', alt: 'Decision intelligence background 4' },
  { src: '/hero-slides/5.png', alt: 'Decision intelligence background 5' },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
