'use client';

"use client";

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** If true, animate only on first reveal. If false, animate every time it enters view. */
  once?: boolean;
}

export function AnimatedSection({ children, className = '', delay = 0, once = true }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already within viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && observer) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root: null, rootMargin: '-100px', threshold: 0 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [once]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}