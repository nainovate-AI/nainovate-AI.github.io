'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { DemoGateModal } from '@/components/ui/DemoGateModal';
import { useDemoAccess } from '@/hooks/useDemoAccess';

export function DemoGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, hasAccess } = useDemoAccess();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (ready && !hasAccess) {
      setModalOpen(true);
    }
  }, [ready, hasAccess]);

  if (!ready) {
    return <div className="min-h-screen bg-bg" />;
  }

  if (!hasAccess) {
    return (
      <main className="pt-16 sm:pt-20 relative z-10 bg-bg min-h-screen">
        <Link
          href="/"
          aria-label="Close and return home"
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-fg-strong/10 hover:bg-fg-strong/20 text-fg-strong flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </Link>
        <section className="min-h-[90svh] flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-4">
              DEMO ACCESS
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Fill in your details to access the demo
            </h1>
            <p className="text-sm sm:text-base text-fg-muted max-w-md mx-auto mb-8">
              A short form unlocks every demo lens. Takes under 30 seconds.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 text-sm font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all"
            >
              OPEN FORM
            </button>
          </div>
        </section>

        <DemoGateModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={() => {
            setModalOpen(false);
            router.refresh();
          }}
        />
      </main>
    );
  }

  return <>{children}</>;
}
