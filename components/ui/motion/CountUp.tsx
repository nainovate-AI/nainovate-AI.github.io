'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  value,
  duration = 1.8,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState<string>(value.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;

    if (prefersReduced) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    // Start from zero and animate up. Uses framer's animate() directly —
    // guaranteed onUpdate callbacks + stops cleanly on unmount.
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });

    return () => controls.stop();
  }, [inView, value, duration, decimals, prefersReduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
