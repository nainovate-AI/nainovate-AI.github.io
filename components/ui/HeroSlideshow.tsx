'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

const SLIDES = [
  { src: '/hero-slides/1.png', alt: 'Decision intelligence 1' },
  { src: '/hero-slides/2.png', alt: 'Decision intelligence 2' },
  { src: '/hero-slides/3.png', alt: 'Decision intelligence 3' },
  { src: '/hero-slides/4.png', alt: 'Decision intelligence 4' },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxSrc) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [lightboxSrc]);

  return (
    <>
      <div
        className="relative w-full aspect-video rounded-lg overflow-hidden bg-bg cursor-zoom-in group"
        onClick={() => setLightboxSrc(SLIDES[active].src)}
        role="button"
        aria-label="Preview image"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLightboxSrc(SLIDES[active].src);
          }
        }}
      >
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
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === active ? 'w-6 bg-fg-strong' : 'w-1.5 bg-fg-strong/40 hover:bg-fg-strong/60'
              }`}
            />
          ))}
        </div>
      </div>

      <ImageLightbox
        src={lightboxSrc}
        alt={SLIDES[active]?.alt}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
