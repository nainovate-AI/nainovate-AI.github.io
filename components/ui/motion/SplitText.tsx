'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  by?: 'word' | 'char';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function SplitText({
  children,
  className = '',
  stagger = 0.06,
  duration = 0.7,
  delay = 0,
  by = 'word',
  as = 'span',
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const tokens = by === 'word' ? children.split(' ') : children.split('');
  const MotionTag = motion[as] as typeof motion.span;

  if (prefersReduced) {
    const Tag = as as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={children}
    >
      {tokens.map((token, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            aria-hidden="true"
          >
            {token === ' ' ? ' ' : token}
          </motion.span>
          {by === 'word' && i < tokens.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}

interface SplitLinesProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

// SplitLines: for use with pre-split <span className="block">...</span> children
export function SplitLines({ children, className = '', stagger = 0.12, duration = 0.9 }: SplitLinesProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
