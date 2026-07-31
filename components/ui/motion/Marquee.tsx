'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one full loop
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = '',
  pauseOnHover = true,
}: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className={`flex ${className}`} aria-hidden="false">
        <div className="flex shrink-0 items-center gap-16 whitespace-nowrap">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <motion.div
        className={`flex shrink-0 items-center gap-16 whitespace-nowrap will-change-transform ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        animate={{ x: reverse ? ['−50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
