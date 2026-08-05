'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from './heroData';

type Props = {
  open: boolean;
  slides: HeroSlide[];
  active: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const SWIPE_THRESHOLD_PX = 40;

export function HeroLightbox({ open, slides, active, onClose, onPrev, onNext }: Props) {
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onNext();
      else if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  const slide = slides[active];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx <= -SWIPE_THRESHOLD_PX) onNext();
    else if (dx >= SWIPE_THRESHOLD_PX) onPrev();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hero image preview"
      className="fixed inset-0 z-[200] flex items-center justify-center pt-24 md:pt-28 pb-16"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Light backdrop — forces light theme for popup regardless of page theme */}
      <div className="absolute inset-0 bg-white/97 backdrop-blur-md" />

      {/* Close */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close preview"
        className="fixed top-5 right-5 md:top-8 md:right-8 z-[210] w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white hover:bg-black/90 hover:scale-105 shadow-lg border-2 border-black flex items-center justify-center transition-all"
      >
        <X className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.4} />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image */}
      <div
        className="relative w-[88vw] h-[70vh] max-w-6xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="92vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-black/70 text-xs font-mono tracking-widest">
        {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
