'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  offset?: number; // px translate range
  reverse?: boolean;
}

export function ParallaxLayer({
  children,
  className = '',
  offset = 60,
  reverse = false,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [offset, -offset] : [-offset, offset],
  );

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}
