'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: '/hero-slides/slide-1.png', alt: 'The AI Reality: Why most AI initiatives struggle' },
  { src: '/hero-slides/slide-2.png', alt: 'Government Decision Intelligence' },
  { src: '/hero-slides/slide-3.png', alt: 'One Enterprise. Seven Capabilities. Infinite Impact' },
  { src: '/hero-slides/slide-4.png', alt: 'One Enterprise. One Decision Intelligence Platform' },
];

const IMG_W = 2200;
const IMG_H = 1000;
const DURATION_MS = 4000;
const SWIPE_THRESHOLD_PX = 40;

export function HeroSlideshowFull() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const startRef = useRef<number>(0);
  const elapsedBeforePauseRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setProgress(0);
    elapsedBeforePauseRef.current = 0;
    startRef.current = performance.now();
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    startRef.current = performance.now() - elapsedBeforePauseRef.current;

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);

      if (elapsed >= DURATION_MS) {
        setActive((i) => (i + 1) % SLIDES.length);
        setProgress(0);
        elapsedBeforePauseRef.current = 0;
        startRef.current = performance.now();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, active]);

  const pause = useCallback(() => {
    elapsedBeforePauseRef.current = performance.now() - startRef.current;
    setPaused(true);
  }, []);

  const resume = useCallback(() => setPaused(false), []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    pause();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    resume();
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx <= -SWIPE_THRESHOLD_PX) next();
    else if (dx >= SWIPE_THRESHOLD_PX) prev();
  };

  return (
    <section className="relative w-full bg-bg pt-16 md:pt-20 px-4 md:px-10">
      <div
        className="relative w-full overflow-hidden lg:h-[calc(100vh-80px)]"
        style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
        onMouseDown={pause}
        onMouseUp={resume}
        onMouseLeave={resume}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-[400ms] ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full h-full flex-shrink-0 object-contain lg:object-cover select-none pointer-events-none"
            />
          ))}
        </div>

        {/* Tap zones */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-0 top-0 bottom-1 w-1/2 z-10 cursor-w-resize"
        />
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-0 top-0 bottom-1 w-1/2 z-10 cursor-e-resize"
        />

        {/* Progress bar strip — thin, bottom edge */}
        <div className="absolute left-0 right-0 bottom-0 flex gap-[2px] z-20 pointer-events-none">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-[2px] bg-white/25 overflow-hidden"
            >
              <div
                className="h-full bg-white"
                style={{
                  width:
                    i < active ? '100%' :
                    i === active ? `${progress}%` :
                    '0%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
