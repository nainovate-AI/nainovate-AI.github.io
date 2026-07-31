'use client';

import Image from 'next/image';
import type { HeroSlide } from './heroData';

type Props = {
  slides: HeroSlide[];
  active: number;
  onImageTap?: () => void;
};

export function HeroVisual({ slides, active, onImageTap }: Props) {
  return (
    <div className="relative w-full h-full">
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={[
              'absolute inset-0 transition-opacity duration-[1100ms] ease-out',
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
            ].join(' ')}
          >
            <div
              className={[
                'absolute inset-0 will-change-transform',
                isActive ? 'hero-kenburns' : '',
              ].join(' ')}
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)',
                maskImage:
                  'linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center select-none pointer-events-none"
              />
            </div>
          </div>
        );
      })}

      {/* Tap-to-open overlay — mobile + desktop */}
      {onImageTap && (
        <button
          type="button"
          onClick={onImageTap}
          aria-label="Open image preview"
          className="absolute inset-0 z-20 cursor-zoom-in"
        />
      )}
    </div>
  );
}
