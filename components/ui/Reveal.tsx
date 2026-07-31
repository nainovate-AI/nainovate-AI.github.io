'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  as?: 'div' | 'span' | 'section' | 'article' | 'li' | 'p';
}

const directionOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: distance };
    case 'right': return { x: -distance };
    default: return {};
  }
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 24,
  once = true,
  as = 'div',
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const offset = directionOffset(direction, distance);

  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReduced) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export function RevealGroup({
  children,
  className = '',
  stagger = 0.08,
  once = true,
}: RevealGroupProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: 'div' | 'span' | 'li' | 'article' | 'p';
}

export function RevealItem({
  children,
  className = '',
  direction = 'up',
  distance = 20,
  duration = 0.6,
  as = 'div',
}: RevealItemProps) {
  const offset = directionOffset(direction, distance);
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: [0.25, 1, 0.5, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
