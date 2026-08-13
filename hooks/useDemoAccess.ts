'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'nainovate:demo-access';
const EXPIRY_DAYS = 30;

export type DemoAccessRecord = {
  granted: boolean;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  interest: string;
  timestamp: number;
};

function isExpired(record: DemoAccessRecord): boolean {
  const ageMs = Date.now() - record.timestamp;
  return ageMs > EXPIRY_DAYS * 24 * 60 * 60 * 1000;
}

export function useDemoAccess() {
  const [record, setRecord] = useState<DemoAccessRecord | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as DemoAccessRecord;
          if (parsed.granted && !isExpired(parsed)) {
            setRecord(parsed);
            return;
          }
          localStorage.removeItem(STORAGE_KEY);
        }
        setRecord(null);
      } catch {
        setRecord(null);
      }
    };
    load();
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) load();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const grantAccess = useCallback((data: Omit<DemoAccessRecord, 'granted' | 'timestamp'>) => {
    const next: DemoAccessRecord = {
      ...data,
      granted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setRecord(next);
  }, []);

  const revokeAccess = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setRecord(null);
  }, []);

  return {
    ready,
    hasAccess: !!record,
    record,
    grantAccess,
    revokeAccess,
  };
}
