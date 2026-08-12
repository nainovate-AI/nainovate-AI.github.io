'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Tracks visitor behaviour inside an interactive demo: which screens they open
 * and how long they spend on each.
 *
 * The demo lenses are single-page hubs that swap an internal `activeFeature`
 * screen without changing the URL, so GA's pageviews can't see them. Pass the
 * lens name and the current screen key; the hook fires:
 *   - `demo_screen_view`  { demo, screen }            when a screen opens
 *   - `demo_screen_time`  { demo, screen, seconds }   when a screen is left
 *     (either switching screens or leaving the demo entirely)
 *
 * In GA4 → Engagement → Events you can then see which demo screens get opened
 * and the average time on each (average of the `seconds` param).
 */
export function useDemoScreenTracking(demo: string, screen: string) {
  const enteredAt = useRef<number>(Date.now());
  const current = useRef<string>('');
  // Keep the latest demo/screen readable from the unmount cleanup.
  const latest = useRef({ demo, screen });
  latest.current = { demo, screen };

  useEffect(() => {
    if (current.current === screen) return;

    // Leaving the previous screen → record time spent on it.
    if (current.current) {
      const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
      trackEvent('demo_screen_time', { demo, screen: current.current, seconds });
    }

    // Entering the new screen.
    trackEvent('demo_screen_view', { demo, screen });
    enteredAt.current = Date.now();
    current.current = screen;
  }, [demo, screen]);

  // Leaving the demo altogether → record time on the final screen.
  useEffect(() => {
    return () => {
      if (!current.current) return;
      const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
      trackEvent('demo_screen_time', {
        demo: latest.current.demo,
        screen: current.current,
        seconds,
      });
    };
  }, []);
}
