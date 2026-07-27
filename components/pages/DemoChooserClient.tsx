'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DemoGateModal } from '@/components/ui/DemoGateModal';
import { useDemoAccess } from '@/hooks/useDemoAccess';

export default function DemoChooserClient() {
  const router = useRouter();
  const { ready, hasAccess } = useDemoAccess();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (ready && !hasAccess) {
      setModalOpen(true);
    }
  }, [ready, hasAccess]);

  if (ready && !hasAccess) {
    return (
      <main className="pt-16 sm:pt-20 relative z-10 bg-bg min-h-screen">
        <section className="min-h-[90vh] flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-4">
              DEMO ACCESS
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Fill in your details to access the demo
            </h1>
            <p className="text-sm sm:text-base text-fg-muted max-w-md mx-auto mb-8">
              A short form unlocks both lenses. Takes under 30 seconds.
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

  return (
    <main className="pt-16 sm:pt-20 relative z-10 bg-bg min-h-screen">
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full py-10 md:py-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-6 sm:mb-8">
            TRY DEMO
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-6 sm:mb-8">
            <span className="block">PICK YOUR</span>
            <span className="block">LENS.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-10 sm:mb-16">
            Same platform. Two lenses. Government &amp; Public Services runs building
            permits and inter-department approvals. Enterprise Business Functions
            sits on Incident Management + CRM as an explainable decision layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Government & Public Services */}
            <Link
              href="/demo/public-sector"
              className="group border border-border-strong rounded-lg p-6 sm:p-8 md:p-12 hover:border-fg-strong transition-colors block bg-surface-2"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4 sm:mb-6">01 • PUBLIC SECTOR</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 group-hover:text-fg-strong">Government &amp; Public Services</h2>
              <p className="text-sm sm:text-base text-fg-muted mb-6 sm:mb-8 leading-relaxed">
                Building permits portal walkthrough with AI-driven approvals,
                analytics dashboard, and workflow orchestration.
              </p>
              <div className="space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm text-fg-muted">
                <p>· Permits intake automation</p>
                <p>· Analytics dashboard</p>
                <p>· Workflow orchestration</p>
              </div>
              <span className="text-sm text-fg-strong group-hover:underline">Open Public Sector demo →</span>
            </Link>

            {/* Enterprise Business Functions */}
            <Link
              href="/demo/decision-nia"
              className="group border border-border-strong rounded-lg p-6 sm:p-8 md:p-12 hover:border-fg-strong transition-colors block bg-surface-2"
            >
              <p className="text-xs tracking-widest text-fg-muted uppercase mb-4 sm:mb-6">02 • ENTERPRISE</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 group-hover:text-fg-strong">Enterprise Business Functions</h2>
              <p className="text-sm sm:text-base text-fg-muted mb-6 sm:mb-8 leading-relaxed">
                AI decision layer for enterprise support. Ask, Watchlists, Trace,
                Coordination. Live 4-team walkthrough anchored on Account A FD-2104.
              </p>
              <div className="space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm text-fg-muted">
                <p>· Customer Support</p>
                <p>· Customer Success</p>
                <p>· Sales</p>
                <p>· Delivery</p>
              </div>
              <span className="text-sm text-fg-strong group-hover:underline">Open Enterprise demo →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
