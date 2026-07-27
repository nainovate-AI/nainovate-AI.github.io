'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  BarChart3,
  MessageSquare,
  GitBranch,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
} from 'lucide-react';
import PublicSectorDashboard from '@/components/public-sector/Dashboard';
import PublicSectorAsk from '@/components/public-sector/Ask';
import PublicSectorWorkflow from '@/components/public-sector/Workflow';

type SpaceKey = 'building-permits';
type FeatureKey = 'dashboards' | 'ask' | 'workflow';

const SPACES: {
  key: SpaceKey;
  label: string;
  letter: string;
  department: string;
  role: string;
}[] = [
  { key: 'building-permits', label: 'Building Permits', letter: 'B', department: 'Alex Nguyen', role: 'Permit Officer' },
];

const FEATURES: { key: FeatureKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'dashboards', label: 'Dashboards', Icon: BarChart3 },
  { key: 'ask', label: 'Ask', Icon: MessageSquare },
  { key: 'workflow', label: 'Workflow', Icon: GitBranch },
];

export default function PublicSectorHub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('dashboards');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const space = SPACES[0];
  const feature = FEATURES.find((f) => f.key === activeFeature)!;
  const closeHref = searchParams.get('from') === 'home' ? '/' : '/demo';

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleFeatureSelect = (key: FeatureKey) => {
    setActiveFeature(key);
    setMobileOpen(false);
  };

  return (
    <main
      className="theme-genx-decision min-h-screen"
      style={{ background: 'var(--gd-bg)', color: 'var(--gd-fg)' }}
    >
      <div className="flex min-h-screen relative">
        {/* Mobile backdrop */}
        {mobileOpen && (
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-bg/60 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`flex flex-col shrink-0 h-screen overflow-hidden transition-[width,transform] duration-300
            md:sticky md:top-0
            fixed inset-y-0 left-0 z-50
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            ${sidebarCollapsed ? 'md:w-16' : 'md:w-[260px]'}
            w-[260px]`}
          style={{ background: 'var(--gd-bg)' }}
        >
          {/* Brand */}
          <div
            className="flex items-center border-b h-14"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <button
              onClick={() => handleFeatureSelect('dashboards')}
              className={`h-full flex items-center hover:bg-fg-strong/5 transition-colors w-full ${
                sidebarCollapsed ? 'md:justify-center px-5 text-left' : 'px-5 text-left'
              }`}
              title="Dashboards"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-fg-strong shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              {(!sidebarCollapsed || mobileOpen) && (
                <div className="min-w-0 ml-2.5 md:block">
                  <p className="text-sm font-semibold text-fg-strong leading-tight">GenX</p>
                  <p className="text-[10px] text-fg-strong/50 leading-tight">AI Decision Workspace</p>
                </div>
              )}
            </button>
          </div>

          {/* Space label */}
          <div className="p-3 border-b" style={{ borderColor: 'var(--gd-border)' }}>
            <div
              className={`w-full flex items-center rounded-lg border border-fg-strong/20 gap-3 px-3 py-2.5 ${
                sidebarCollapsed ? 'md:gap-0 md:px-0 md:justify-center' : ''
              }`}
              title={space.label}
            >
              <span className="w-7 h-7 rounded flex items-center justify-center text-xs font-medium border border-fg-strong/20 shrink-0">
                {space.letter}
              </span>
              {(!sidebarCollapsed || mobileOpen) && (
                <>
                  <span className="flex-1 text-left text-sm text-fg-strong truncate">{space.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-fg-strong/40 shrink-0" />
                </>
              )}
            </div>
          </div>

          {/* Feature nav */}
          <nav className="p-2 flex-1 flex flex-col">
            {FEATURES.map((f) => {
              const isActive = f.key === activeFeature;
              const { Icon } = f;
              return (
                <button
                  key={f.key}
                  onClick={() => handleFeatureSelect(f.key)}
                  title={f.label}
                  aria-label={f.label}
                  className={`flex items-center rounded-lg mb-0.5 transition-colors w-full gap-3 px-3 py-2.5 ${
                    sidebarCollapsed ? 'md:justify-center md:px-0' : ''
                  } ${isActive ? 'text-fg-strong' : 'text-fg-strong/70 hover:bg-fg-strong/5'}`}
                  style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {(!sidebarCollapsed || mobileOpen) && <span className="text-sm">{f.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Persona footer + collapse toggle */}
          <div className="px-3 py-3">
            <div
              className={`flex items-center gap-3 px-1 ${sidebarCollapsed ? 'md:justify-center md:px-0 md:gap-0' : ''}`}
              title={`${space.department} · ${space.role}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-fg-strong font-medium shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                {space.department
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              {(!sidebarCollapsed || mobileOpen) && (
                <>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-fg-strong truncate">{space.department}</p>
                    <p className="text-[10px] text-fg-strong/50 truncate">{space.role}</p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-fg-strong/40 shrink-0" />
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-pressed={!sidebarCollapsed}
              className={`hidden md:flex mt-2 items-center justify-center rounded-md text-fg-strong/60 hover:text-fg-strong hover:bg-fg-strong/5 transition-colors ${
                sidebarCollapsed ? 'w-8 h-8 mx-auto' : 'w-full h-8 gap-2 px-2'
              }`}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-xs font-medium">Collapse</span>
                </>
              )}
            </button>
          </div>
        </aside>

        {/* Main */}
        <section
          className="flex-1 min-w-0 md:border-l"
          style={{ borderColor: 'var(--gd-border)' }}
        >
          {/* Top bar */}
          <div
            className="px-4 sm:px-6 md:px-8 h-14 border-b flex items-center justify-between gap-3"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-fg-strong/70 hover:text-fg-strong p-1.5 rounded hover:bg-fg-strong/5"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <p className="text-sm text-fg-strong truncate">{feature.label}</p>
            </div>
            <button
              type="button"
              onClick={() => router.push(closeHref)}
              className="text-fg-strong/60 hover:text-fg-strong p-1.5 rounded hover:bg-fg-strong/5 shrink-0"
              title={closeHref === '/' ? 'Back to home' : 'Back to lens chooser'}
              aria-label="Close workspace"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="w-full">
            {activeFeature === 'dashboards' && <PublicSectorDashboard />}
            {activeFeature === 'ask' && <PublicSectorAsk />}
            {activeFeature === 'workflow' && <PublicSectorWorkflow />}
          </div>
        </section>
      </div>
    </main>
  );
}
