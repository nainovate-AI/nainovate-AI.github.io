'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroStatus } from './HeroStatus';

type Props = {
  active: number;
  total: number;
  paused: boolean;
  resetKey: number;
  durationMs: number;
  onFillEnd: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (idx: number) => void;
  showArrows?: boolean;
};

export function HeroControls({
  active,
  total,
  paused,
  resetKey,
  durationMs,
  onFillEnd,
  onPrev,
  onNext,
  onSelect,
  showArrows = true,
}: Props) {
  return (
    <div className="flex items-center gap-4 md:gap-6 text-fg-mid">
      <HeroStatus
        active={active}
        total={total}
        paused={paused}
        resetKey={resetKey}
        durationMs={durationMs}
        onFillEnd={onFillEnd}
        onSelect={onSelect}
      />

      {showArrows && (
      <div className="flex items-center gap-1 ml-2 md:ml-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={onPrev}
          className="w-10 h-10 flex items-center justify-center border border-border-strong text-fg hover:border-fg-strong hover:bg-surface-hover transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={onNext}
          className="w-10 h-10 flex items-center justify-center border border-border-strong text-fg hover:border-fg-strong hover:bg-surface-hover transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      )}
    </div>
  );
}
