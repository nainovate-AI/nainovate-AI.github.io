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

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const advancedForSlideRef = useRef<number>(-1);
  const onFillEnd = useCallback(() => {
    if (advancedForSlideRef.current === active) return;
    advancedForSlideRef.current = active;
    setActive((i) => (i + 1) % HERO_SLIDES.length);
  }, [active]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
      className="relative bg-bg overflow-hidden pt-16 md:pt-20 focus:outline-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1rem,3vw,3rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,2.4vw,2rem)] items-center py-[clamp(1rem,2vw,1.5rem)] lg:pt-[clamp(1rem,2vw,2rem)] lg:pb-[clamp(3.5rem,6vw,5.5rem)]">
          {/* LEFT — copy */}
          <div className="lg:col-span-4 lg:pr-4 order-3 lg:order-1">
            <HeroContent
              slides={HERO_SLIDES}
              active={active}
              onWatchDemo={handleWatchDemo}
            />
          </div>

          {/* RIGHT — cinematic visual (larger footprint) */}
          <div className="lg:col-span-8 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[3/2] max-h-[min(85vh,860px)]">
              <HeroVisual
                slides={HERO_SLIDES}
                active={active}
                onImageTap={openLightbox}
              />
            </div>
          </div>

          {/* MOBILE controls — under image, above copy (order-2) */}
          <div className="lg:hidden order-2 pt-1 pb-1">
            <div className="flex justify-center">
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

      {/* DESKTOP controls — anchored to hero bottom */}
      <div className="hidden lg:block lg:absolute lg:bottom-6 lg:left-0 lg:right-0 lg:px-12 z-30 pointer-events-none">
        <div className="mx-auto w-full max-w-[1600px] flex justify-center pointer-events-auto">
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

      <HeroLightbox
        open={lightboxOpen}
        slides={HERO_SLIDES}
        active={active}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
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
