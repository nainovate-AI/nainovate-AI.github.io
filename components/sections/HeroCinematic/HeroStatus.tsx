'use client';

type Props = {
  active: number;
  total: number;
  paused: boolean;
  resetKey: number;
  durationMs: number;
  onFillEnd: () => void;
  onSelect: (idx: number) => void;
};

export function HeroStatus({
  active,
  total,
  paused,
  resetKey,
  durationMs,
  onFillEnd,
  onSelect,
}: Props) {
  return (
    <div className="flex items-center gap-1.5 md:gap-2 w-[220px] md:w-[320px]">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === active;
        const isFilled = i < active;
        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onSelect(i)}
            className="flex-1 h-[3px] rounded-full bg-white/20 overflow-hidden cursor-pointer group"
          >
            {isFilled && (
              <div className="h-full w-full bg-white rounded-full" />
            )}
            {isActive && (
              <div
                key={`${active}-${resetKey}`}
                onAnimationEnd={onFillEnd}
                style={{ ['--hero-status-duration' as string]: `${durationMs}ms` }}
                className={[
                  'h-full w-full bg-white rounded-full hero-status-fill group-hover:bg-brand',
                  paused ? 'is-paused' : '',
                ].join(' ')}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
