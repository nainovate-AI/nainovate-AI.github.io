'use client';

import { ReactNode, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CTA } from '@/components/ui/CTA';
import { DemoGateModal } from '@/components/ui/DemoGateModal';
import { useDemoAccess } from '@/hooks/useDemoAccess';

/*
  Demo gate — enforces the lead-capture form before ANY link that lands on
  /demo* routes. Two consumption patterns:

  1) `<GatedDemoLink href="/demo" variant="solid" size="lg" arrow>Launch Demo</GatedDemoLink>`
     Drop-in replacement for CTALink where the target is a /demo route.

  2) `const { requestDemo, gateModal } = useDemoGate();`
     Use in custom triggers (cards, banners) where you can't use CTA. Call
     `requestDemo('/demo/public-sector')` on click; render `gateModal` once.
*/

export function useDemoGate() {
  const router = useRouter();
  const { ready, hasAccess } = useDemoAccess();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string>('/demo');

  const requestDemo = useCallback(
    (href: string) => {
      if (!ready) return;
      setPending(href);
      if (hasAccess) {
        router.push(href);
      } else {
        setOpen(true);
      }
    },
    [ready, hasAccess, router],
  );

  const gateModal = (
    <DemoGateModal
      open={open}
      onClose={() => setOpen(false)}
      onSuccess={() => {
        setOpen(false);
        router.push(pending);
      }}
    />
  );

  return { requestDemo, gateModal };
}

type GatedDemoLinkProps = {
  href: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

export function GatedDemoLink({
  href,
  children,
  variant = 'solid',
  size = 'md',
  arrow = false,
  fullWidth = false,
  className = '',
}: GatedDemoLinkProps) {
  const { requestDemo, gateModal } = useDemoGate();
  return (
    <>
      <CTA
        onClick={() => requestDemo(href)}
        variant={variant}
        size={size}
        arrow={arrow}
        fullWidth={fullWidth}
        className={className}
      >
        {children}
      </CTA>
      {gateModal}
    </>
  );
}
