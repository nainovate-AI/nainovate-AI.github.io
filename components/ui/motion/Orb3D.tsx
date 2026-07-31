'use client';

type Variant = 'aurora' | 'violet-pink' | 'indigo-cyan' | 'cyan-emerald' | 'pink-orange';
type FloatSpeed = 1 | 2 | 3;

interface Orb3DProps {
  size?: number | string;
  variant?: Variant;
  floatSpeed?: FloatSpeed;
  className?: string;
  blur?: number;
  opacity?: number;
}

const gradientMap: Record<Variant, string> = {
  aurora: 'radial-gradient(circle at 30% 30%, #a78bfa 0%, #8b5cf6 25%, #ec4899 55%, #22d3ee 100%)',
  'violet-pink': 'radial-gradient(circle at 30% 30%, #c4b5fd 0%, #8b5cf6 40%, #ec4899 100%)',
  'indigo-cyan': 'radial-gradient(circle at 30% 30%, #a5b4fc 0%, #6366f1 40%, #22d3ee 100%)',
  'cyan-emerald': 'radial-gradient(circle at 30% 30%, #67e8f9 0%, #22d3ee 40%, #10b981 100%)',
  'pink-orange': 'radial-gradient(circle at 30% 30%, #fbcfe8 0%, #ec4899 40%, #fb923c 100%)',
};

export function Orb3D({
  size = 320,
  variant = 'aurora',
  floatSpeed = 2,
  className = '',
  blur = 40,
  opacity = 0.6,
}: Orb3DProps) {
  const floatClass = `float-3d-${floatSpeed}`;
  const sizeStyle = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${floatClass} ${className}`}
      style={{
        width: sizeStyle,
        height: sizeStyle,
        background: gradientMap[variant],
        filter: `blur(${blur}px)`,
        opacity,
        willChange: 'transform',
      }}
    />
  );
}
