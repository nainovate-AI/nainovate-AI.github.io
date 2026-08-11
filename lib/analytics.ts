/**
 * Thin wrapper over GA4's gtag for custom event tracking.
 *
 * The gtag script and pageview config live in app/(main)/layout.tsx
 * (property G-Z1HV8SD1NH); PageTracker handles route-change pageviews.
 * This is only for discrete interactions — button clicks, form submits.
 *
 * Fire-and-forget: no-ops safely when gtag is unavailable (SSR, local dev
 * without the tag, ad/tracker blockers), so callers never need to guard.
 *
 * Events land in GA4 → Reports → Engagement → Events (~24-48h delay;
 * Realtime shows them immediately). Keep event names snake_case and stable
 * once shipped — renaming splits the history in GA.
 */
type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
