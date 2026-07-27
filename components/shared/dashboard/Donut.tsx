type Item = { label: string; value: number; color: string };

type Props = {
  items: Item[];
  centerTop?: string;
  centerBottom?: string;
  size?: number;
  ring?: number;
};

export function Donut({ items, centerTop = '', centerBottom = '', size = 180, ring = 22 }: Props) {
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  const r = (size - ring) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={ring} />
        {items.map((it, i) => {
          const frac = it.value / total;
          const dash = c * frac;
          const gap = c - dash;
          const rot = (offset / c) * 360 - 90;
          offset += dash;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={it.color}
              strokeWidth={ring}
              strokeDasharray={`${dash} ${gap}`}
              transform={`rotate(${rot} ${size / 2} ${size / 2})`}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      {(centerTop || centerBottom) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {centerTop && <p className="text-2xl font-semibold text-fg-strong leading-tight">{centerTop}</p>}
          {centerBottom && <p className="text-xs text-fg-strong/50">{centerBottom}</p>}
        </div>
      )}
    </div>
  );
}
