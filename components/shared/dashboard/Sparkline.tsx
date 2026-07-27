type Props = {
  values: number[];
  color: string;
  variant?: 'line' | 'bar';
  width?: number;
  height?: number;
};

export function Sparkline({ values, color, variant = 'line', width = 100, height = 32 }: Props) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  if (variant === 'bar') {
    const bw = width / values.length - 1.5;
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-8">
        {values.map((v, i) => {
          const bh = ((v - min) / span) * height;
          return (
            <rect
              key={i}
              x={i * (bw + 1.5)}
              y={height - bh}
              width={bw}
              height={bh}
              fill={color}
              rx="1"
              opacity="0.9"
            />
          );
        })}
      </svg>
    );
  }

  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width;
    const y = height - ((v - min) / span) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const line = `M ${pts.join(' L ')}`;
  const area = `${line} L ${width},${height} L 0,${height} Z`;
  const gid = `spark-${color.replace('#', '')}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-8">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
