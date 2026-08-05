'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DemoGateModal } from '@/components/ui/DemoGateModal';
import { useDemoAccess } from '@/hooks/useDemoAccess';
import { HERO_SLIDES, AUTOPLAY_DURATION_MS } from './heroData';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroControls } from './HeroControls';
import { HeroLightbox } from './HeroLightbox';

const SWIPE_THRESHOLD_PX = 40;

export function HeroCinematic() {
  const router = useRouter();
  const { hasAccess, ready } = useDemoAccess();
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const touchStartXRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  const goTo = useCallback((idx: number) => {
    const total = HERO_SLIDES.length;
    setActive(((idx % total) + total) % total);
    setResetKey((k) => k + 1);
  }, []);

  /*
    next/prev use functional setState so keyboard/arrow events always advance
    from the *current* slide, not the value captured when the callback was
    first bound. Old version used `goTo(active + 1)`, whose stale closure
    caused rapid keystrokes to skip slides (e.g. only every other image).
  */
  const next = useCallback(() => {
    setActive((i) => (i + 1) % HERO_SLIDES.length);
    setResetKey((k) => k + 1);
  }, []);
  const prev = useCallback(() => {
    setActive((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setResetKey((k) => k + 1);
  }, []);

  const advancedForSlideRef = useRef<number>(-1);
  const onFillEnd = useCallback(() => {
    if (advancedForSlideRef.current === active) return;
    advancedForSlideRef.current = active;
    setActive((i) => (i + 1) % HERO_SLIDES.length);
  }, [active]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  // Keep lightboxOpen in a ref so keyboard-listener useEffect has a stable
  // deps array. Avoids "size of deps changed between renders" HMR error.
  const lightboxOpenRef = useRef(false);
  useEffect(() => {
    lightboxOpenRef.current = lightboxOpen;
  }, [lightboxOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Skip when lightbox is open — HeroLightbox has its own window keydown
      // listener; running both fires next/prev twice per keystroke and makes
      // the lightbox skip every other slide.
      if (lightboxOpenRef.current) return;
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    const root = rootRef.current;
    root?.addEventListener('keydown', onKey);
    return () => root?.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Pause autoplay while lightbox is open
  useEffect(() => {
    if (lightboxOpen) setPaused(true);
    else setPaused(false);
  }, [lightboxOpen]);

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

  const handleWatchDemo = () => {
    if (!ready) return;
    if (hasAccess) router.push('/demo');
    else setModalOpen(true);
  };

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <section
      ref={rootRef}
      tabIndex={-1}
      aria-roledescription="carousel"
      aria-label="Nainovate hero"
      className="relative overflow-hidden pt-24 md:pt-28 min-h-screen flex flex-col focus:outline-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1rem,3vw,3rem)] flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,2.4vw,2rem)] items-center w-full pb-6 md:pb-10">
          {/* LEFT — copy */}
          <div className="lg:col-span-5 lg:pr-4 order-3 lg:order-1">
            <HeroContent
              slides={HERO_SLIDES}
              active={active}
              onWatchDemo={handleWatchDemo}
            />
          </div>

          {/* RIGHT — cinematic visual + controls under it */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex flex-col gap-4">
            {/* 16:9 padding-based aspect wrapper — no aspect-ratio utility */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0">
                <HeroVisual
                  slides={HERO_SLIDES}
                  active={active}
                  onImageTap={openLightbox}
                />
              </div>
            </div>

            {/* Centered small controls under image */}
            <div className="pt-3 md:pt-4 flex justify-center">
              <HeroControls
                active={active}
                total={HERO_SLIDES.length}
                paused={paused}
                resetKey={resetKey}
                durationMs={AUTOPLAY_DURATION_MS}
                onFillEnd={onFillEnd}
                onPrev={prev}
                onNext={next}
                onSelect={goTo}
                showArrows={false}
              />
            </div>
          </div>
        </div>
      </div>

      <HeroLightbox
        open={lightboxOpen}
        slides={HERO_SLIDES}
        active={active}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
        onSelect={goTo}
      />

      <DemoGateModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false);
          router.push('/demo');
        }}
      />
    </section>
  );
}
