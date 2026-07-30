'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type Props = {
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export function ImageLightbox({ src, alt = '', onClose }: Props) {
  useEffect(() => {
    if (!src) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop — white in light theme, black in dark */}
      <div className="absolute inset-0 bg-bg/95 backdrop-blur-md" />

      {/* Close button — icon dark in light theme, white in dark */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-surface-2 hover:bg-surface-hover text-fg-strong flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image container */}
      <div
        className="relative w-[90vw] h-[85vh] max-w-[1600px] flex items-center justify-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
