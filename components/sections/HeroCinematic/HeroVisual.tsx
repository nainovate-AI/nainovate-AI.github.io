'use client';

import Image from 'next/image';
import type { HeroSlide } from './heroData';

type Props = {
  slides: HeroSlide[];
  active: number;
  onImageTap?: () => void;
};

/* Kept shallow on purpose. The artwork carries labels close to its edges —
   "IT" sits at ~9% from the left, "Marketing" at ~90% — so a deeper fade
   dims them. 7-8% softens the boundary while leaving every label solid. */
const EDGE_FADE =
  'linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%), ' +
  'linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)';

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
              /* 800ms, not 1100ms. The copy's staggered entrance finishes at
                 ~1040ms; at 1100ms the picture was the last thing still
                 moving, and against a 3s dwell that left barely 1.9s of
                 stillness. Now both sides settle together. */
              'absolute inset-0 flex items-center transition-opacity duration-[800ms] ease-out',
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
            ].join(' ')}
          >
            {/* The mask has to sit on a box that matches the artwork's 16:9
               ratio. The parent container is 3/2, so object-contain leaves
               ~7.8% empty bands top and bottom — a fade applied there lands on
               blank space and the picture keeps a hard edge. Sizing this
               wrapper to the image puts the fade on the picture itself. */}
            <div
              className="relative w-full aspect-[16/9] overflow-hidden"
              style={{
                WebkitMaskImage: EDGE_FADE,
                maskImage: EDGE_FADE,
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              {/* Ken Burns moves inside the mask, so the fade stays put
                 instead of drifting with the image. */}
              <div
                className={[
                  'absolute inset-0 will-change-transform',
                  isActive ? 'hero-kenburns' : '',
                ].join(' ')}
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
