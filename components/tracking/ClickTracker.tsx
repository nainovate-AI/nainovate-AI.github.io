"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/*
  Delegated click tracking for Contact Us CTAs.

  There are ~60 links to /contact spread across ~27 files, in two forms
  (<CTALink> and <Link>), and more get added over time. Rather than tag
  each call site — which is error-prone and silently misses every future
  one — we listen once at the document level and fire a single shared
  event, `contact_us_click`, whenever a click lands on any anchor whose
  path is /contact. New contact CTAs are covered automatically.

  The shared name lets the team aggregate all contact intent in GA4 →
  Engagement → Events; the `link_text` and `from` params preserve which
  button and which page it came from for breakdowns.
*/

// Match /contact regardless of the trailingSlash-added "/" or any query/hash.
function isContactPath(pathname: string): boolean {
  return pathname === "/contact" || pathname === "/contact/";
}

export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      // anchor.pathname resolves relative/absolute hrefs to a clean path.
      if (!isContactPath(anchor.pathname)) return;

      trackEvent("contact_us_click", {
        link_text: (anchor.textContent || "").trim().slice(0, 80) || "unlabeled",
        from: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
