'use client';

import { motion, useMotionValue, useSpring, useReducedMotion, useTransform, useMotionTemplate } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // degrees max
  glareOpacity?: number;
  as?: 'div' | 'article' | 'section';
}

export function TiltCard({
  children,
  className = '',
  intensity = 6,
  glareOpacity = 0.08,
  as = 'div',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 22 });
  const sy = useSpring(my, { stiffness: 220, damping: 22 });
  const rx = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const ry = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);
  const glareXPct = useTransform(sx, [-0.5, 0.5], [20, 80]);
  const glareYPct = useTransform(sy, [-0.5, 0.5], [20, 80]);
  const glareBg = useMotionTemplate`radial-gradient(600px circle at ${glareXPct}% ${glareYPct}%, rgba(255,255,255,${glareOpacity}), transparent 45%)`;

  const onMove = (e: React.MouseEvent) => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative [perspective:1200px] ${className}`}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full will-change-transform"
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBg }}
        />
      </motion.div>
    </MotionTag>
  );
}
