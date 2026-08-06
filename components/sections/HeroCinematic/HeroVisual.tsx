'use client';

import Image from 'next/image';
import type { HeroSlide } from './heroData';
import { TiltCard } from '@/components/ui/motion/TiltCard';

type Props = {
  slides: HeroSlide[];
  active: number;
  onImageTap?: () => void;
};

export function HeroVisual({ slides, active, onImageTap }: Props) {
  return (
    <div className="relative w-full h-full perspective-lg">
      {/* Glass framed product panel with 3D tilt */}
      <TiltCard intensity={5} className="w-full h-full">
        <div className="relative w-full h-full rounded-2xl2 overflow-hidden border border-border bg-bg-elevated/70 backdrop-blur-xl shadow-lg">
          {/* Aurora border ring */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl2 border-aurora opacity-70" />

          {/* Crossfade slide images */}
          <div className="absolute inset-0">
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.id}
                  aria-hidden={!isActive}
                  className={[
                    'absolute inset-0 transition-opacity duration-1000 ease-out',
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'absolute inset-0 will-change-transform',
                      isActive ? 'hero-kenburns' : '',
                    ].join(' ')}
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center select-none pointer-events-none"
                    />
                  </div>
                  {/* Bottom gradient legibility scrim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}
                  />
                </div>
              );
            })}
          </div>

          {/* Tap-to-expand */}
          {onImageTap && (
            <button
              type="button"
              onClick={onImageTap}
              aria-label="Open image preview"
              className="absolute inset-0 z-30 cursor-zoom-in"
            />
          )}
        </div>
      </TiltCard>

    </div>
  );
}
