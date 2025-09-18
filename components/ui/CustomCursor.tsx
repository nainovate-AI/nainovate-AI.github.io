'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  if (!mounted) return null;
  
  return null; // The cursor is created with vanilla JS
}