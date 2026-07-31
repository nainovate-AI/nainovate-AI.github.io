'use client';

import type { HeroSlide } from './heroData';

type Props = {
  slides: HeroSlide[];
  active: number;
  onWatchDemo: () => void;
};

/*
  Fluid sizing scale (single source of truth).
  Every rem→px assumes root 16px. Values interpolate smoothly between
  320px and 1920px viewport widths via clamp(min, preferred, max).
*/
const T = {
  eyebrow: 'text-[clamp(0.625rem,0.7vw,0.8125rem)]',        // 10 → 13
  title:   'heading-primary',                                // shared global size
  highlight: 'text-[clamp(0.875rem,1.4vw,1.375rem)]',        // 14 → 22
  desc:    'text-[clamp(0.75rem,1vw,1rem)]',                 // 12 → 16
  cta:     'text-[clamp(0.6875rem,0.8vw,0.8125rem)]',        // 11 → 13
  gapY:    'gap-[clamp(0.875rem,1.4vw,1.5rem)]',             // 14 → 24
  ctaGap:  'gap-[clamp(0.5rem,1vw,1rem)]',                   // 8  → 16
  ctaTop:  'mt-[clamp(1.25rem,2.4vw,2.5rem)]',               // 20 → 40
  ctaPx:   'px-[clamp(1rem,1.8vw,1.75rem)]',                 // 16 → 28
  ctaPy:   'py-[clamp(0.625rem,1vw,0.875rem)]',              // 10 → 14
};

export function HeroContent({ slides, active, onWatchDemo }: Props) {
  return (
    <div className="relative">
      <div className="relative">
        {slides.map((slide, i) => {
          const isActive = i === active;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={[
                i === 0 ? 'relative' : 'absolute inset-0',
                'flex flex-col',
                T.gapY,
                'transition-opacity duration-700 ease-out',
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
              ].join(' ')}
            >
              <p
                className={[
                  T.eyebrow,
                  'font-semibold tracking-[0.22em] text-brand',
                  'transition-all duration-500 ease-out',
                  isActive ? 'opacity-100 translate-y-0 delay-[80ms]' : 'opacity-0 -translate-y-2',
                ].join(' ')}
              >
                {slide.eyebrow}
              </p>

              <h1
                className={[
                  T.title,
                  'uppercase text-fg-strong',
                  'transition-all duration-700 ease-out',
                  isActive ? 'opacity-100 translate-y-0 delay-[160ms]' : 'opacity-0 translate-y-3',
                ].join(' ')}
              >
                <span className="block">{slide.titleLines[0]}</span>
                <span className="block">{slide.titleLines[1]}</span>
              </h1>

              <p
                className={[
                  T.highlight,
                  'font-medium text-fg leading-snug',
                  'transition-all duration-700 ease-out',
                  isActive ? 'opacity-100 translate-y-0 delay-[260ms]' : 'opacity-0 translate-y-3',
                ].join(' ')}
              >
                {slide.highlight}
              </p>

              <p
                className={[
                  T.desc,
                  'text-fg-mid leading-relaxed max-w-[38ch]',
                  'transition-all duration-700 ease-out',
                  isActive ? 'opacity-100 translate-y-0 delay-[340ms]' : 'opacity-0 translate-y-3',
                ].join(' ')}
              >
                {slide.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className={['flex flex-col sm:flex-row', T.ctaGap, T.ctaTop].join(' ')}>
        <button
          type="button"
          onClick={onWatchDemo}
          className={[
            T.cta,
            T.ctaPx,
            T.ctaPy,
            'font-semibold tracking-[0.14em] uppercase border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-colors',
          ].join(' ')}
        >
          Watch Demo
        </button>
        <a
          href="https://calendly.com/naveen-nainovate/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className={[
              T.cta,
              T.ctaPx,
              T.ctaPy,
              'w-full sm:w-auto font-semibold tracking-[0.14em] uppercase border-2 border-border-strong text-fg hover:border-fg-strong hover:bg-surface-hover transition-colors',
            ].join(' ')}
          >
            Schedule Demo
          </button>
        </a>
      </div>
    </div>
  );
}
