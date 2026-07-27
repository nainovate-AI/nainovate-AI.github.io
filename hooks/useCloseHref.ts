'use client';

import { useSearchParams } from 'next/navigation';

export function useCloseHref(): string {
  const params = useSearchParams();
  return params.get('from') === 'home' ? '/' : '/demo';
}
