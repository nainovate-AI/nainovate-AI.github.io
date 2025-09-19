"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PageTracker(){
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("config", "G-Z1HV8SD1NH", {
        page_path: pathname + (searchParams.toString() ? `?${searchParams}` : ""),
      });
    }
  }, [pathname, searchParams]);

  return null; // ✅ must return ReactNode
}