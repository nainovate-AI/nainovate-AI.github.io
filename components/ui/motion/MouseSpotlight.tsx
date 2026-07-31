'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface MouseSpotlightProps {
  children: ReactNode;
  className?: string;
  size?: number; // px diameter
  intensity?: number; // 0..1 opacity
}

export function MouseSpotlight({
  children,
  className = '',
  size = 500,
  intensity = 0.08,
}: MouseSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const sx = useSpring(mx, { stiffness: 200, damping: 24 });
  const sy = useSpring(my, { stiffness: 200, damping: 24 });

  const onMove = (e: React.MouseEvent) => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };
  const onLeave = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
    >
      {!prefersReduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(${size}px circle at ${sx.get()}px ${sy.get()}px, rgba(255,255,255,${intensity}), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
