'use client';

import { useState } from 'react';
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
} from 'lucide-react';
import BuildingPermitsDashboard from '@/components/demo/BuildingPermitsDashboard';
import BuildingPermitsAsk from '@/components/demo/BuildingPermitsAsk';
import WorkflowPlaceholder from '@/components/demo/WorkflowPlaceholder';

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

export default function PublicSectorHubClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('dashboards');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const space = SPACES[0];
  const feature = FEATURES.find((f) => f.key === activeFeature)!;
  const closeHref = searchParams.get('from') === 'home' ? '/' : '/demo';

  return (
    <main
      className="theme-genx-decision min-h-screen"
      style={{ background: 'var(--gd-bg)', color: 'var(--gd-fg)' }}
    >
      <div className="flex min-h-screen">
        {/* Sidebar — nia icon-rail collapse */}
        <aside
          className={`flex flex-col shrink-0 h-screen sticky top-0 overflow-hidden transition-[width] duration-300 ${
            sidebarCollapsed ? 'w-16' : 'w-[260px]'
          }`}
          style={{ background: 'var(--gd-bg)' }}
        >
          {/* Brand */}
          <div
            className="flex items-center border-b h-14"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <button
              onClick={() => setActiveFeature('dashboards')}
              className={`h-full flex items-center hover:bg-white/5 transition-colors w-full ${
                sidebarCollapsed ? 'justify-center' : 'px-5 text-left'
              }`}
              title="Dashboards"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-white shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              {!sidebarCollapsed && (
                <div className="min-w-0 ml-2.5">
                  <p className="text-sm font-semibold text-white leading-tight">GenX</p>
                  <p className="text-[10px] text-white/50 leading-tight">AI Decision Workspace</p>
                </div>
              )}
            </button>
          </div>

          {/* Space label */}
          <div className="p-3 border-b border-[var(--gd-border)]">
            <div
              className={`w-full flex items-center rounded-lg border border-white/20 ${
                sidebarCollapsed ? 'justify-center py-2.5' : 'gap-3 px-3 py-2.5'
              }`}
              title={space.label}
            >
              <span className="w-7 h-7 rounded flex items-center justify-center text-xs font-medium border border-white/20 shrink-0">
                {space.letter}
              </span>
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-left text-sm text-white truncate">{space.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/40 shrink-0" />
                </>
              )}
            </div>
          </div>

          {/* Feature nav */}
          <nav className={`p-2 flex-1 flex flex-col ${sidebarCollapsed ? 'items-center' : ''}`}>
            {FEATURES.map((f) => {
              const isActive = f.key === activeFeature;
              const { Icon } = f;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFeature(f.key)}
                  title={f.label}
                  aria-label={f.label}
                  className={`flex items-center rounded-lg mb-0.5 transition-colors ${
                    sidebarCollapsed ? 'justify-center w-10 h-10' : 'w-full gap-3 px-3 py-2.5'
                  } ${isActive ? 'text-white' : 'text-white/70 hover:bg-white/5'}`}
                  style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {!sidebarCollapsed && <span className="text-sm">{f.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Persona footer + collapse toggle */}
          <div className="px-3 py-3">
            <div
              className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3 px-1'}`}
              title={`${space.department} · ${space.role}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-medium shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                {space.department
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              {!sidebarCollapsed && (
                <>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{space.department}</p>
                    <p className="text-[10px] text-white/50 truncate">{space.role}</p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-white/40 shrink-0" />
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-pressed={!sidebarCollapsed}
              className={`mt-2 flex items-center justify-center rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors ${
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
          className="flex-1 min-w-0 border-l"
          style={{ borderColor: 'var(--gd-border)' }}
        >
          {/* Top bar */}
          <div
            className="px-8 h-14 border-b flex items-center justify-between"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <p className="text-sm text-white">{feature.label}</p>
            <button
              type="button"
              onClick={() => router.push(closeHref)}
              className="text-white/60 hover:text-white p-1.5 rounded hover:bg-white/5 relative z-20"
              title={closeHref === '/' ? 'Back to home' : 'Back to lens chooser'}
              aria-label="Close workspace"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="w-full">
            {activeFeature === 'dashboards' && <BuildingPermitsDashboard />}
            {activeFeature === 'ask' && <BuildingPermitsAsk />}
            {activeFeature === 'workflow' && <WorkflowPlaceholder />}
          </div>
        </section>
      </div>
    </main>
  );
}
