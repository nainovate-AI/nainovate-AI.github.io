'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Home,
  BarChart3,
  MessageSquare,
  FileText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Mic,
  Paperclip,
  Send,
  X,
  Menu,
} from 'lucide-react';

// Per-space, per-capability panel data (extracted from inline mocks)
import csCommandCenter from '@/data/demo/workspace/customer-success/command-center.json';
import csAsk from '@/data/demo/workspace/customer-success/ask.json';
import csDashboards from '@/data/demo/workspace/customer-success/dashboard.json';
import csTrace from '@/data/demo/workspace/customer-success/trace.json';

import supCommandCenter from '@/data/demo/workspace/customer-support/command-center.json';
import supAsk from '@/data/demo/workspace/customer-support/ask.json';
import supDashboards from '@/data/demo/workspace/customer-support/dashboard.json';
import supTrace from '@/data/demo/workspace/customer-support/trace.json';

import salesCommandCenter from '@/data/demo/workspace/sales/command-center.json';
import salesAsk from '@/data/demo/workspace/sales/ask.json';
import salesDashboards from '@/data/demo/workspace/sales/dashboard.json';
import salesTrace from '@/data/demo/workspace/sales/trace.json';

import delCommandCenter from '@/data/demo/workspace/delivery/command-center.json';
import delAsk from '@/data/demo/workspace/delivery/ask.json';
import delDashboards from '@/data/demo/workspace/delivery/dashboard.json';
import delTrace from '@/data/demo/workspace/delivery/trace.json';

type SpaceKey = 'customer-support' | 'customer-success' | 'sales' | 'delivery';
type FeatureKey = 'command-center' | 'ask' | 'dashboard' | 'trace';

/* ---------- data shape types (match the JSON files) ---------- */

type Risk = 'high' | 'medium' | 'low';
type Tone = 'up' | 'down' | 'neutral';
type PillTone = 'red' | 'yellow' | 'green' | 'blue' | 'neutral';

type CmdAction = {
  risk: Risk;
  title: string;
  account: string;
  metric: { label: string; value: string };
  status: string;
  cta: string;
};

type CmdWorkflow = { name: string; status: string; tone: 'blue' | 'yellow' | 'green' };
type CmdWatchlist = { code: string; name: string; score: number; risk: Risk };

type CommandData = {
  greeting: string;
  summary: { headline: string; sub: string };
  actions: CmdAction[];
  signals: { icon: string; label: string; value: string; delta: string; tone: Tone }[];
  cfi: { team: string; label: string; value: string }[];
  workflows: {
    in_progress: number;
    awaiting: number;
    completed: number;
    list: CmdWorkflow[];
  };
  decisions: { title: string; when: string; impact: string; tone: 'green' | 'neutral' }[];
  watchlist: CmdWatchlist[];
};

type DashboardData = {
  kpis: { label: string; value: string; delta: string; tone: Tone }[];
  distribution: { label: string; value: number; count: number; color: string }[];
  atRisk: { code: string; name: string; health: number; risk: string; trend: 'up' | 'down' | 'flat' }[];
};

type BotAnswer = {
  question: string;
  timestamp?: string;
  direct: { headline: string; sub: string };
  insights?: { label: string; value: string; delta: string }[];
  table?: { name: string; health: number; risk: string; arr: string; factors: string[]; owner: string; code: string }[];
  reasoning?: { summary: string; factors: string[] };
  followups: string[];
  bullets?: string[];
  keyInsightsRail?: { icon: string; label: string; value: string; delta: string }[];
  recommendedActions?: { title: string; sub: string; priority: 'high' | 'medium' }[];
};

type AskData = { seed: BotAnswer; bank: BotAnswer[] };

type TraceOutcome = {
  user: string;
  scenario: string;
  product: string;
  platform: string;
  confidence: number;
  ticket: string;
  status: string;
  feedback: string;
  when: string;
  tone: 'green' | 'blue' | 'yellow' | 'gray';
};

type TraceData = {
  kpis: { icon: string; label: string; value: string }[];
  outcomes: TraceOutcome[];
  audit: { type: string; title: string; who: string; when: string }[];
  donut: { label: string; value: number; color: string }[];
  sources: { name: string; pct: number }[];
};

/* ---------- lookup tables ---------- */

const COMMAND_DATA: Record<SpaceKey, CommandData> = {
  'customer-success': csCommandCenter as CommandData,
  'customer-support': supCommandCenter as CommandData,
  sales: salesCommandCenter as CommandData,
  delivery: delCommandCenter as CommandData,
};

const DASHBOARD_DATA: Record<SpaceKey, DashboardData> = {
  'customer-success': csDashboards as DashboardData,
  'customer-support': supDashboards as DashboardData,
  sales: salesDashboards as DashboardData,
  delivery: delDashboards as DashboardData,
};

const ASK_BUNDLE: Record<SpaceKey, AskData> = {
  'customer-success': csAsk as AskData,
  'customer-support': supAsk as AskData,
  sales: salesAsk as AskData,
  delivery: delAsk as AskData,
};

const TRACE_DATA: Record<SpaceKey, TraceData> = {
  'customer-success': csTrace as TraceData,
  'customer-support': supTrace as TraceData,
  sales: salesTrace as TraceData,
  delivery: delTrace as TraceData,
};

/* ---------- metadata (kept inline, not "mock" content) ---------- */

const SPACES: {
  key: SpaceKey;
  label: string;
  letter: string;
  persona: string;
  role: string;
}[] = [
  { key: 'customer-success', label: 'Customer Success', letter: 'C', persona: 'Alex Morgan', role: 'CSM Director' },
  { key: 'customer-support', label: 'Customer Support', letter: 'C', persona: 'Jordan Chen', role: 'Support Head' },
  { key: 'sales', label: 'Sales', letter: 'S', persona: 'Riley Patel', role: 'AE Lead' },
  { key: 'delivery', label: 'Delivery', letter: 'D', persona: 'Sam Rivera', role: 'Delivery Lead' },
];

const FEATURES: { key: FeatureKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'command-center', label: 'Command Center', Icon: Home },
  { key: 'dashboard', label: 'Dashboard', Icon: BarChart3 },
  { key: 'ask', label: 'Ask', Icon: MessageSquare },
  { key: 'trace', label: 'Trace / Audit', Icon: FileText },
];

export default function WorkspaceHub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const closeHref = searchParams.get('from') === 'home' ? '/' : '/demo';
  const [activeSpace, setActiveSpace] = useState<SpaceKey>('customer-success');
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('command-center');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [pendingTraceId, setPendingTraceId] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    }
    if (pickerOpen) {
      document.addEventListener('mousedown', onClickOutside);
      return () => document.removeEventListener('mousedown', onClickOutside);
    }
  }, [pickerOpen]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (msg: string) => setToast(msg);
  const openTrace = (traceId: string) => {
    setPendingTraceId(traceId);
    setActiveFeature('trace');
  };

  const space = SPACES.find((s) => s.key === activeSpace)!;
  const feature = FEATURES.find((f) => f.key === activeFeature)!;

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
          className={`flex flex-col shrink-0 h-screen overflow-hidden border-r transition-[width,transform] duration-300
            md:sticky md:top-0
            fixed inset-y-0 left-0 z-50
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            ${sidebarCollapsed ? 'md:w-16' : 'md:w-[260px]'}
            w-[260px]`}
          style={{ borderColor: 'var(--gd-border)', background: 'var(--gd-bg)' }}
        >
          {/* Brand */}
          <div
            className="flex items-center border-b h-14"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <button
              onClick={() => setActiveFeature('command-center')}
              className={`h-full flex items-center hover:bg-fg-strong/5 transition-colors w-full ${
                sidebarCollapsed ? 'justify-center' : 'px-5 text-left'
              }`}
              title="Command Center"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-fg-strong shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              {!sidebarCollapsed && (
                <p className="text-sm font-semibold text-fg-strong leading-tight ml-2.5">GenX</p>
              )}
            </button>
          </div>

          {/* Space picker button */}
          <div
            className="p-3 border-b relative"
            style={{ borderColor: 'var(--gd-border)' }}
            ref={pickerRef}
          >
            <button
              onClick={() => setPickerOpen(!pickerOpen)}
              title={space.label}
              className={`w-full flex items-center rounded-lg border transition-colors ${
                sidebarCollapsed ? 'justify-center py-2.5' : 'gap-3 px-3 py-2.5'
              } ${pickerOpen ? 'border-fg-strong' : 'border-fg-strong/20 hover:border-fg-strong/40'}`}
            >
              <span className="w-7 h-7 rounded flex items-center justify-center text-xs font-medium border border-fg-strong/20 shrink-0">
                {space.letter}
              </span>
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-left text-sm text-fg-strong truncate">{space.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-fg-strong/40" />
                </>
              )}
            </button>

            {/* Popover */}
            {pickerOpen && (
              <div className="absolute top-0 left-full ml-2 z-50 w-[260px] bg-bg border border-fg-strong/20 rounded-lg shadow-2xl overflow-hidden">
                <div className="px-4 py-2 border-b border-fg-strong/5">
                  <p className="text-[10px] font-semibold text-fg-strong/50 tracking-widest uppercase">
                    Enterprise Demo
                  </p>
                </div>
                <div className="p-2">
                  {SPACES.map((s) => {
                    const isActive = s.key === activeSpace;
                    return (
                      <button
                        key={s.key}
                        onClick={() => {
                          setActiveSpace(s.key);
                          setPickerOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          isActive ? 'text-fg-strong' : 'hover:bg-fg-strong/5 text-fg-strong'
                        }`}
                        style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                      >
                        <span
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium shrink-0 ${
                            isActive ? 'bg-surface-hover text-fg-strong' : 'border border-fg-strong/20 text-fg-strong'
                          }`}
                        >
                          {s.letter}
                        </span>
                        <span className="text-sm">{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Feature nav */}
          <nav className={`p-2 flex-1 flex flex-col ${sidebarCollapsed ? 'items-center' : ''}`}>
            {FEATURES.map((f) => {
              const isActive = f.key === activeFeature;
              const { Icon } = f;
              return (
                <button
                  key={f.key}
                  onClick={() => {
                    setActiveFeature(f.key);
                    setMobileOpen(false);
                  }}
                  title={f.label}
                  aria-label={f.label}
                  className={`flex items-center rounded-lg mb-0.5 transition-colors ${
                    sidebarCollapsed ? 'justify-center w-10 h-10' : 'w-full gap-3 px-3 py-2.5'
                  } ${isActive ? 'text-fg-strong' : 'text-fg-strong/70 hover:bg-fg-strong/5'}`}
                  style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {!sidebarCollapsed && <span className="text-sm">{f.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Persona footer + collapse toggle */}
          <div
            className="px-3 py-3 border-t"
            style={{ borderColor: 'var(--gd-border)' }}
          >
            <div
              className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3 px-1'}`}
              title={`${space.persona} · ${space.role}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-fg-strong font-medium shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                {space.persona
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-fg-strong truncate">{space.persona}</p>
                  <p className="text-[10px] text-fg-strong/50 truncate">{space.role}</p>
                </div>
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
        <section className="flex-1 min-w-0">
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
          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 w-full">
            <FeaturePanel
              space={space.key}
              feature={activeFeature}
              spaceLabel={space.label}
              persona={space.persona}
              onNavigate={setActiveFeature}
              onOpenTrace={openTrace}
              onToast={showToast}
              pendingTraceId={pendingTraceId}
              clearPendingTraceId={() => setPendingTraceId(null)}
            />
          </div>
        </section>
      </div>

      {/* Toast surface */}
      {toast && (
        <div
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg text-sm shadow-2xl"
          style={{
            background: 'var(--gd-bg)',
            color: 'var(--gd-fg)',
            border: '1px solid var(--gd-border-strong)',
          }}
        >
          {toast}
        </div>
      )}
    </main>
  );
}

/* =====================================================================
   Panels — 4 features × 4 spaces = 16 combinations
   ===================================================================== */

function FeaturePanel({
  space,
  feature,
  spaceLabel,
  persona,
  onNavigate,
  onOpenTrace,
  onToast,
  pendingTraceId,
  clearPendingTraceId,
}: {
  space: SpaceKey;
  feature: FeatureKey;
  spaceLabel: string;
  persona: string;
  onNavigate: (f: FeatureKey) => void;
  onOpenTrace: (traceId: string) => void;
  onToast: (msg: string) => void;
  pendingTraceId: string | null;
  clearPendingTraceId: () => void;
}) {
  if (feature === 'command-center')
    return <CommandCenter space={space} persona={persona} onNavigate={onNavigate} onOpenTrace={onOpenTrace} onToast={onToast} />;
  if (feature === 'dashboard') return <Dashboard space={space} spaceLabel={spaceLabel} onOpenTrace={onOpenTrace} onToast={onToast} />;
  if (feature === 'ask') return <Ask space={space} onNavigate={onNavigate} onOpenTrace={onOpenTrace} onToast={onToast} />;
  if (feature === 'trace') return <Trace space={space} pendingTraceId={pendingTraceId} clearPendingTraceId={clearPendingTraceId} onToast={onToast} />;
  return null;
}

/* ---------- primitives ---------- */

function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 'md',
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: 'sm' | 'md' | 'lg';
}) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const w = width === 'sm' ? 'max-w-md' : width === 'lg' ? 'max-w-3xl' : 'max-w-xl';
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'var(--gd-backdrop)' }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${w} w-full rounded-lg overflow-hidden`}
        style={{ background: 'var(--gd-bg)', border: '1px solid var(--gd-border-strong)' }}
      >
        <div className="p-5 border-b flex items-start justify-between" style={{ borderColor: 'var(--gd-border)' }}>
          <h2 className="text-base font-semibold text-fg-strong">{title}</h2>
          <button onClick={onClose} className="text-fg-strong/60 hover:text-fg-strong text-xl leading-none">
            ×
          </button>
        </div>
        <div className="p-5 max-h-[70vh] overflow-y-auto">{children}</div>
        {footer && (
          <div className="p-5 border-t flex justify-end gap-2" style={{ borderColor: 'var(--gd-border)' }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mb-4 last:mb-0">
      <span className="text-[10px] font-semibold tracking-widest uppercase text-fg-strong/50 mb-1.5 block">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full text-sm px-3 py-2 rounded bg-transparent text-fg-strong placeholder:text-fg-strong/40 outline-none focus:border-fg-strong/40"
      style={{ border: '1px solid var(--gd-border)' }}
    />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full text-sm px-3 py-2 rounded text-fg-strong outline-none"
      style={{ background: 'var(--gd-bg)', border: '1px solid var(--gd-border)' }}
    >
      {children}
    </select>
  );
}

function BtnPrimary({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="text-xs px-4 py-2 rounded text-fg-strong font-medium hover:brightness-110 disabled:opacity-50"
      style={{ background: 'var(--gd-primary)' }}
    >
      {children}
    </button>
  );
}

function BtnSecondary({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="text-xs px-4 py-2 rounded text-fg-strong bg-transparent hover:bg-fg-strong/5"
      style={{ border: '1px solid var(--gd-border)' }}
    >
      {children}
    </button>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/[0.03] border border-fg-strong/10 rounded-lg ${className}`}>{children}</div>
  );
}

function KpiTile({
  icon,
  label,
  value,
  delta,
  tone,
}: {
  icon: string;
  label: string;
  value: string;
  delta?: string;
  tone?: 'up' | 'down' | 'neutral';
}) {
  const deltaColor = tone === 'up' ? 'var(--gd-success)' : tone === 'down' ? 'var(--gd-danger)' : 'var(--gd-fg-muted)';
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded flex items-center justify-center text-[11px]" style={{ background: 'var(--gd-muted)' }}>
          {icon}
        </span>
        <p className="text-xs text-fg-strong/50">{label}</p>
      </div>
      <p className="text-3xl font-semibold text-fg-strong">{value}</p>
      {delta && (
        <p className="text-xs mt-1" style={{ color: deltaColor }}>
          {delta}
        </p>
      )}
    </Card>
  );
}

function SectionTitle({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-medium text-fg-strong">{children}</p>
      {action}
    </div>
  );
}

function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: PillTone }) {
  const map: Record<string, { bg: string; fg: string }> = {
    red: { bg: 'var(--gd-danger-soft)', fg: 'var(--gd-danger-fg)' },
    yellow: { bg: 'var(--gd-warning-soft)', fg: 'var(--gd-warning-fg)' },
    green: { bg: 'var(--gd-success-soft)', fg: 'var(--gd-success-fg)' },
    blue: { bg: 'var(--gd-info-soft)', fg: 'var(--gd-info-fg)' },
    neutral: { bg: 'var(--gd-muted)', fg: 'var(--gd-neutral-fg)' },
  };
  const c = map[tone];
  return (
    <span
      className="text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider"
      style={{ background: c.bg, color: c.fg }}
    >
      {children}
    </span>
  );
}

/* ================================================================
   COMMAND CENTER
   ================================================================ */

function CommandCenter({
  space,
  persona,
  onNavigate,
  onOpenTrace,
  onToast,
}: {
  space: SpaceKey;
  persona: string;
  onNavigate: (f: FeatureKey) => void;
  onOpenTrace: (traceId: string) => void;
  onToast: (msg: string) => void;
}) {
  const d = COMMAND_DATA[space];
  const [actionState, setActionState] = useState<Record<number, 'approved' | 'auto-running' | 'scheduled'>>({});
  const [detailAction, setDetailAction] = useState<CmdAction | null>(null);
  const [detailWorkflow, setDetailWorkflow] = useState<CmdWorkflow | null>(null);
  const [detailWatchlist, setDetailWatchlist] = useState<CmdWatchlist | null>(null);
  const [pendingCta, setPendingCta] = useState<{ idx: number; cta: string; account: string } | null>(null);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('09:00');
  const [scheduleErr, setScheduleErr] = useState('');

  function openCtaDialog(idx: number, cta: string, account: string) {
    setPendingCta({ idx, cta, account });
    if (cta === 'Schedule') {
      const tomorrow = new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0, 10);
      setScheduleDate(tomorrow);
      setScheduleTime('09:00');
      setScheduleErr('');
    }
  }

  function confirmCta() {
    if (!pendingCta) return;
    if (pendingCta.cta === 'Schedule') {
      if (!scheduleDate) {
        setScheduleErr('Date required');
        return;
      }
      const when = new Date(`${scheduleDate}T${scheduleTime}`);
      if (when.getTime() < Date.now()) {
        setScheduleErr('Schedule must be in the future');
        return;
      }
      setActionState((p) => ({ ...p, [pendingCta.idx]: 'scheduled' }));
      onToast(`Scheduled · ${when.toLocaleString()}`);
    } else if (pendingCta.cta === 'Approve') {
      setActionState((p) => ({ ...p, [pendingCta.idx]: 'approved' }));
      onToast('Approved · workflow started');
    } else if (pendingCta.cta === 'Auto-run') {
      setActionState((p) => ({ ...p, [pendingCta.idx]: 'auto-running' }));
      onToast('Auto-running · no approval needed');
    }
    setPendingCta(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-fg-strong flex items-center gap-2">Hi, {persona} <span>👋</span></h1>
      </div>

      {/* Summary banner */}
      <div className="border rounded-lg p-5 flex items-start justify-between" style={{ background: 'var(--gd-primary-soft)', borderColor: 'var(--gd-primary-outline)' }}>
        <div className="flex gap-3">
          <span className="w-6 h-6 rounded flex items-center justify-center text-fg-strong text-xs shrink-0" style={{ background: 'var(--gd-primary)' }}>
            ✦
          </span>
          <div>
            <p className="text-[10px] font-semibold text-fg-strong/50 tracking-widest uppercase mb-1">
              GenX Summary · as of today
            </p>
            <p className="text-sm font-medium text-fg-strong">{d.summary.headline}</p>
            <p className="text-sm text-fg-strong/60 mt-1">{d.summary.sub}</p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('trace')}
          className="text-xs px-3 py-1.5 border border-fg-strong/10 rounded bg-transparent text-fg-strong hover:bg-fg-strong/5"
        >
          View full summary →
        </button>
      </div>

      {/* Priority Actions */}
      <div>
        <SectionTitle
          action={
            <button onClick={() => onNavigate('dashboard')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
              View all actions →
            </button>
          }
        >
          Priority Actions <span className="text-fg-strong/40">({d.actions.length})</span>{' '}
          <span className="text-xs text-fg-strong/50 font-normal">Needs your attention</span>
        </SectionTitle>
        <div className="grid lg:grid-cols-3 gap-4">
          {d.actions.map((a, i) => {
            const tone: PillTone = a.risk === 'high' ? 'red' : a.risk === 'medium' ? 'yellow' : 'green';
            const barColor = a.risk === 'high' ? 'var(--gd-danger)' : a.risk === 'medium' ? 'var(--gd-warning)' : 'var(--gd-success)';
            return (
              <Card key={i} className="p-5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: barColor }} />
                <div className="pl-2">
                  <Pill tone={tone}>{a.risk === 'high' ? 'HIGH RISK' : a.risk === 'medium' ? 'MEDIUM RISK' : 'LOW RISK'}</Pill>
                  <p className="text-base font-medium text-fg-strong mt-3">{a.title}</p>
                  <p className="text-xs text-fg-strong/50 mt-1">{a.account}</p>
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mb-1">{a.metric.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-semibold text-fg-strong">{a.metric.value}</p>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-fg-strong/50">Status</p>
                        <p className="text-xs text-fg-strong">{a.status}</p>
                      </div>
                    </div>
                  </div>
                  {actionState[i] ? (
                    <div
                      className="mt-4 text-xs px-3 py-2 rounded text-center font-medium"
                      style={{
                        background:
                          actionState[i] === 'approved'
                            ? 'var(--gd-success-soft)'
                            : actionState[i] === 'auto-running'
                            ? 'var(--gd-info-soft)'
                            : 'var(--gd-primary-soft)',
                        color:
                          actionState[i] === 'approved'
                            ? 'var(--gd-success-fg)'
                            : actionState[i] === 'auto-running'
                            ? 'var(--gd-info-fg)'
                            : 'var(--gd-fg)',
                      }}
                    >
                      {actionState[i] === 'approved' && '✓ Approved · workflow started'}
                      {actionState[i] === 'auto-running' && '⟳ Auto-running…'}
                      {actionState[i] === 'scheduled' && '⏱ Scheduled · tomorrow 09:00'}
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDetailAction(a)}
                        className="text-xs px-3 py-2 border border-fg-strong/10 rounded hover:bg-fg-strong/5 text-fg-strong bg-transparent"
                      >
                        View details
                      </button>
                      <button
                        onClick={() => openCtaDialog(i, a.cta, a.account)}
                        className="text-xs px-3 py-2 rounded text-fg-strong font-medium hover:brightness-110"
                        style={{ background: 'var(--gd-primary)' }}
                      >
                        {a.cta}
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Key Signals */}
      <div>
        <SectionTitle
          action={
            <button onClick={() => onNavigate('dashboard')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
              View all →
            </button>
          }
        >
          Key Signals
        </SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {d.signals.map((s) => (
            <KpiTile key={s.label} icon={s.icon} label={s.label} value={s.value} delta={s.delta} tone={s.tone} />
          ))}
        </div>
      </div>

      {/* CFI + Active Workflows */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('trace')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View map →
              </button>
            }
          >
            Cross-Functional Impact
          </SectionTitle>
          <div className="space-y-3">
            {d.cfi.map((c) => (
              <button
                key={c.team}
                onClick={() => onNavigate('dashboard')}
                className="w-full text-left p-4 rounded hover:brightness-125 transition"
                style={{ background: 'var(--gd-muted-2)' }}
              >
                <p className="text-xs text-fg-strong/50 mb-1">{c.team}</p>
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-fg-strong">{c.label}</p>
                  <p className="text-sm font-medium text-fg-strong">{c.value}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('trace')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View all →
              </button>
            }
          >
            Active Workflows
          </SectionTitle>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-primary)' }}>{d.workflows.in_progress}</p>
              <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mt-1">In progress</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-warning)' }}>{d.workflows.awaiting}</p>
              <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mt-1">Awaiting approval</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-success)' }}>{d.workflows.completed}</p>
              <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mt-1">Completed today</p>
            </div>
          </div>
          <div className="space-y-2">
            {d.workflows.list.map((w) => (
              <button
                key={w.name}
                onClick={() => setDetailWorkflow(w)}
                className="w-full flex items-center justify-between text-xs py-1.5 px-2 -mx-2 rounded hover:bg-fg-strong/5 text-left"
              >
                <span className="text-fg-strong">{w.name}</span>
                <Pill tone={w.tone === 'blue' ? 'blue' : w.tone === 'yellow' ? 'yellow' : 'green'}>{w.status}</Pill>
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Decisions + Watchlist */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('trace')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View all →
              </button>
            }
          >
            Recent Decisions &amp; Outcomes
          </SectionTitle>
          {d.decisions.map((r, i) => (
            <button
              key={i}
              onClick={() => onOpenTrace(r.title)}
              className="w-full flex items-start justify-between py-3 border-b border-fg-strong/5 last:border-0 hover:bg-fg-strong/[0.02] px-2 -mx-2 rounded text-left transition-colors"
            >
              <div>
                <p className="text-sm text-fg-strong">{r.title}</p>
                <p className="text-[10px] text-fg-strong/50 mt-0.5">{r.when}</p>
              </div>
              <p className={`text-xs font-medium ${r.tone === 'green' ? 'text-green-400' : 'text-fg-strong/60'}`}>{r.impact}</p>
            </button>
          ))}
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('dashboard')} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View all →
              </button>
            }
          >
            Watchlist Highlights
          </SectionTitle>
          {d.watchlist.map((w) => (
            <button
              key={w.code}
              onClick={() => setDetailWatchlist(w)}
              className="w-full flex items-center justify-between py-2.5 border-b border-fg-strong/5 last:border-0 hover:bg-fg-strong/[0.02] px-2 -mx-2 rounded text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded flex items-center justify-center text-[10px] font-medium" style={{ background: 'var(--gd-muted)' }}>
                  {w.code}
                </span>
                <div>
                  <p className="text-sm text-fg-strong">{w.name}</p>
                  <Pill tone={w.risk === 'high' ? 'red' : w.risk === 'medium' ? 'yellow' : 'green'}>
                    {w.risk} risk
                  </Pill>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase text-fg-strong/50 tracking-wider">Score</p>
                <p className="text-sm font-medium text-fg-strong">{w.score}</p>
              </div>
            </button>
          ))}
        </Card>
      </div>

      {/* CTA confirm dialog (Approve / Auto-run / Schedule) */}
      <Dialog
        open={!!pendingCta}
        onClose={() => setPendingCta(null)}
        title={
          pendingCta?.cta === 'Approve'
            ? 'Approve recommended action'
            : pendingCta?.cta === 'Auto-run'
            ? 'Auto-run without approval'
            : 'Schedule action'
        }
        footer={
          <>
            <BtnSecondary onClick={() => setPendingCta(null)}>Cancel</BtnSecondary>
            <BtnPrimary onClick={confirmCta}>
              {pendingCta?.cta === 'Schedule' ? 'Schedule' : pendingCta?.cta === 'Auto-run' ? 'Start auto-run' : 'Approve'}
            </BtnPrimary>
          </>
        }
      >
        {pendingCta?.cta === 'Schedule' ? (
          <div>
            <p className="text-sm text-fg-strong/70 mb-4">
              Schedule the workflow for <span className="text-fg-strong font-medium">{pendingCta.account}</span> to
              run at a future time.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Date">
                <Input type="date" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
              </Field>
              <Field label="Time">
                <Input type="time" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
              </Field>
            </div>
            {scheduleErr && (
              <p className="text-xs mt-2" style={{ color: 'var(--gd-danger-fg)' }}>
                {scheduleErr}
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-fg-strong/70">
            {pendingCta?.cta === 'Approve'
              ? `Approve action for ${pendingCta?.account}? Workflow will run immediately.`
              : `Enable auto-run for ${pendingCta?.account}? Future actions of this type will fire without approval.`}
          </p>
        )}
      </Dialog>

      {/* Action detail dialog */}
      <Dialog
        open={!!detailAction}
        onClose={() => setDetailAction(null)}
        title={detailAction?.title || ''}
        footer={<BtnSecondary onClick={() => setDetailAction(null)}>Close</BtnSecondary>}
      >
        {detailAction && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Account</p>
                <p className="text-fg-strong">{detailAction.account}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Risk</p>
                <Pill tone={detailAction.risk === 'high' ? 'red' : detailAction.risk === 'medium' ? 'yellow' : 'green'}>
                  {detailAction.risk}
                </Pill>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">{detailAction.metric.label}</p>
                <p className="text-fg-strong font-medium">{detailAction.metric.value}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Status</p>
                <p className="text-fg-strong">{detailAction.status}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-fg-strong/10">
              <p className="text-xs text-fg-strong/60">
                Recommended action: <span className="text-fg-strong">{detailAction.cta}</span>. Click the {detailAction.cta}
                button on the card to proceed.
              </p>
            </div>
          </div>
        )}
      </Dialog>

      {/* Workflow detail dialog */}
      <Dialog
        open={!!detailWorkflow}
        onClose={() => setDetailWorkflow(null)}
        title={detailWorkflow?.name || ''}
        footer={
          <>
            <BtnSecondary onClick={() => setDetailWorkflow(null)}>Close</BtnSecondary>
            <BtnPrimary
              onClick={() => {
                if (detailWorkflow) onOpenTrace(detailWorkflow.name);
                setDetailWorkflow(null);
              }}
            >
              Open trace
            </BtnPrimary>
          </>
        }
      >
        {detailWorkflow && (
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Status</p>
              <Pill tone={detailWorkflow.tone === 'blue' ? 'blue' : detailWorkflow.tone === 'yellow' ? 'yellow' : 'green'}>
                {detailWorkflow.status}
              </Pill>
            </div>
            <p className="text-fg-strong/70">
              This workflow was auto-triggered by the associated watchlist. Open the trace to see every step,
              weighted signals, and evidence rows.
            </p>
          </div>
        )}
      </Dialog>

      {/* Watchlist detail dialog */}
      <Dialog
        open={!!detailWatchlist}
        onClose={() => setDetailWatchlist(null)}
        title={detailWatchlist?.name || ''}
        footer={
          <>
            <BtnSecondary onClick={() => setDetailWatchlist(null)}>Close</BtnSecondary>
            <BtnPrimary
              onClick={() => {
                if (detailWatchlist) onOpenTrace(detailWatchlist.name);
                setDetailWatchlist(null);
              }}
            >
              Open trace
            </BtnPrimary>
          </>
        }
      >
        {detailWatchlist && (
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Health score</p>
                <p className="text-3xl font-semibold text-fg-strong">{detailWatchlist.score}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">Risk</p>
                <Pill tone={detailWatchlist.risk === 'high' ? 'red' : detailWatchlist.risk === 'medium' ? 'yellow' : 'green'}>
                  {detailWatchlist.risk} risk
                </Pill>
              </div>
            </div>
            <p className="text-fg-strong/70">
              Account is being monitored by an active watchlist. Open the trace to see the signals that fired
              and the recommended actions in flight.
            </p>
          </div>
        )}
      </Dialog>
    </div>
  );
}

/* ================================================================
   DASHBOARD
   ================================================================ */

function Dashboard({
  space,
  spaceLabel,
  onOpenTrace,
  onToast,
}: {
  space: SpaceKey;
  spaceLabel: string;
  onOpenTrace: (traceId: string) => void;
  onToast: (msg: string) => void;
}) {
  const d = DASHBOARD_DATA[space];
  const [tab, setTab] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [fRegion, setFRegion] = useState('all');
  const [fSegment, setFSegment] = useState('all');
  const [fRange, setFRange] = useState('30d');
  const [wPreset, setWPreset] = useState('Executive Overview');
  const [wQuery, setWQuery] = useState('');
  const [wTaskId, setWTaskId] = useState('');
  const [wLang, setWLang] = useState('en');
  const [wForceRefresh, setWForceRefresh] = useState(false);
  const [wErr, setWErr] = useState('');

  function applyFilters() {
    setFiltersOpen(false);
    const parts = [];
    if (fRegion !== 'all') parts.push(`region=${fRegion}`);
    if (fSegment !== 'all') parts.push(`segment=${fSegment}`);
    parts.push(`range=${fRange}`);
    onToast(`Filters applied · ${parts.join(' · ')}`);
  }

  function submitWidget() {
    if (!wQuery.trim()) {
      setWErr('Query required');
      return;
    }
    if (!wTaskId.trim()) {
      setWErr('Task ID required');
      return;
    }
    setWidgetOpen(false);
    onToast(`Widget added · ${wPreset}`);
    setWQuery('');
    setWTaskId('');
    setWErr('');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-fg-strong">Dashboards</h1>
          <p className="text-sm text-fg-strong/50 mt-1">Real-time views of your customers, health, and actions — {spaceLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="text-xs border border-fg-strong/10 rounded px-3 py-1.5 w-56 bg-transparent text-fg-strong placeholder:text-fg-strong/40"
            placeholder="Search dashboards..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') onToast('Search: coming soon');
            }}
          />
          <button
            onClick={() => setFiltersOpen(true)}
            className="text-xs px-3 py-1.5 border border-fg-strong/10 rounded text-fg-strong bg-transparent hover:bg-fg-strong/5"
          >
            Filters
          </button>
          <button
            onClick={() => setWidgetOpen(true)}
            className="text-xs px-3 py-1.5 rounded text-fg-strong font-medium hover:brightness-110"
            style={{ background: 'var(--gd-primary)' }}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-fg-strong/10">
        {['Overview', 'Health', 'Renewals', 'Adoption', 'Engagement', 'Revenue', 'Support', 'Custom'].map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`text-sm py-2 border-b-2 ${
              tab === i ? 'border-fg-strong text-fg-strong font-medium' : 'border-transparent text-fg-strong/50 hover:text-fg-strong'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {d.kpis.map((k) => (
          <KpiTile key={k.label} icon="◆" label={k.label} value={k.value} delta={k.delta} tone={k.tone} />
        ))}
      </div>

      {/* Distribution + Trend + Revenue */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => setTab(1)} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View report →
              </button>
            }
          >
            Distribution
          </SectionTitle>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 shrink-0">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(${d.distribution
                    .map((seg, i) => {
                      const prev = d.distribution.slice(0, i).reduce((a, b) => a + b.value, 0);
                      return `${seg.color} ${prev}% ${prev + seg.value}%`;
                    })
                    .join(', ')})`,
                }}
              />
              <div className="absolute inset-4 bg-bg rounded-full flex flex-col items-center justify-center">
                <p className="text-lg font-semibold text-fg-strong">
                  {d.distribution.reduce((a, b) => a + b.count, 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-fg-strong/50 uppercase tracking-wider">Total</p>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {d.distribution.map((seg) => (
                <div key={seg.label} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: seg.color }} />
                  <span className="text-fg-strong/70 flex-1">{seg.label}</span>
                  <span className="text-fg-strong font-medium">{seg.count}</span>
                  <span className="text-fg-strong/50">({seg.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-fg-strong">Trend</p>
            <select className="text-xs border border-fg-strong/10 rounded px-2 py-1 bg-bg text-fg-strong">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <svg viewBox="0 0 300 140" className="w-full h-32">
            <path
              d="M0,110 L40,105 L80,98 L120,80 L160,70 L200,55 L240,42 L300,38"
              stroke="var(--gd-primary)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {[0, 40, 80, 120, 160, 200, 240, 300].map((x, i) => (
              <circle key={i} cx={x} cy={[110, 105, 98, 80, 70, 55, 42, 38][i]} r="3" fill="var(--gd-primary)" />
            ))}
          </svg>
          <div className="flex justify-between text-[10px] text-fg-strong/50 mt-2">
            <span>Day 1</span>
            <span>Day 15</span>
            <span>Today</span>
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => setTab(5)} className="text-xs text-fg-strong/50 hover:text-fg-strong">
                View segments →
              </button>
            }
          >
            By Segment
          </SectionTitle>
          <div className="space-y-3">
            {[
              { label: 'Mid Market', value: 60, amount: '$1.2M' },
              { label: 'Enterprise', value: 42, amount: '$850K' },
              { label: 'Strategic', value: 18, amount: '$350K' },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-fg-strong">{s.label}</span>
                  <span className="text-fg-strong font-medium">{s.amount}</span>
                </div>
                <div className="h-2 bg-bg/5 rounded overflow-hidden">
                  <div className="h-full" style={{ width: `${s.value}%`, background: 'var(--gd-danger)' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* At-risk table */}
      <Card className="p-5">
        <SectionTitle
          action={
            <button onClick={() => setTab(1)} className="text-xs text-fg-strong/50 hover:text-fg-strong">
              View all at-risk →
            </button>
          }
        >
          Top At-Risk
        </SectionTitle>
        <div className="grid grid-cols-12 gap-3 pb-3 border-b border-fg-strong/5 text-[10px] tracking-widest text-fg-strong/50 uppercase">
          <span className="col-span-5">Account</span>
          <span className="col-span-2 text-right">Health</span>
          <span className="col-span-3 text-right">Risk</span>
          <span className="col-span-2 text-right">Trend</span>
        </div>
        {d.atRisk.map((a) => (
          <button
            key={a.code}
            onClick={() => onOpenTrace(a.name)}
            className="w-full grid grid-cols-12 gap-3 py-3 border-b border-fg-strong/5 last:border-0 items-center hover:bg-fg-strong/[0.02] rounded transition-colors text-left"
          >
            <div className="col-span-5 flex items-center gap-3">
              <span className="w-7 h-7 rounded flex items-center justify-center text-[10px] font-medium" style={{ background: 'var(--gd-muted)' }}>
                {a.code}
              </span>
              <span className="text-sm text-fg-strong">{a.name}</span>
            </div>
            <span className="col-span-2 text-right text-sm text-fg-strong">{a.health}</span>
            <span className="col-span-3 text-right text-sm" style={{ color: 'var(--gd-danger)' }}>{a.risk}</span>
            <span className="col-span-2 text-right">
              <svg width="40" height="16" viewBox="0 0 40 16">
                <path
                  d={a.trend === 'down' ? 'M2,4 L14,7 L26,10 L38,13' : a.trend === 'up' ? 'M2,13 L14,10 L26,6 L38,3' : 'M2,8 L14,7 L26,9 L38,8'}
                  stroke={a.trend === 'down' ? 'var(--gd-danger)' : a.trend === 'up' ? 'var(--gd-success)' : 'var(--gd-fg-muted)'}
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        ))}
      </Card>

      {/* Filters dialog */}
      <Dialog
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="Filter dashboard"
        footer={
          <>
            <BtnSecondary
              onClick={() => {
                setFRegion('all');
                setFSegment('all');
                setFRange('30d');
                setFiltersOpen(false);
                onToast('Filters cleared');
              }}
            >
              Clear all
            </BtnSecondary>
            <BtnPrimary onClick={applyFilters}>Apply filters</BtnPrimary>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-3">
          <Field label="Region">
            <Select value={fRegion} onChange={(e) => setFRegion(e.target.value)}>
              <option value="all">All regions</option>
              <option value="na">North America</option>
              <option value="emea">EMEA</option>
              <option value="apac">APAC</option>
              <option value="latam">LATAM</option>
            </Select>
          </Field>
          <Field label="Segment">
            <Select value={fSegment} onChange={(e) => setFSegment(e.target.value)}>
              <option value="all">All segments</option>
              <option value="enterprise">Enterprise</option>
              <option value="mid-market">Mid Market</option>
              <option value="strategic">Strategic</option>
            </Select>
          </Field>
        </div>
        <Field label="Date range">
          <div className="flex gap-2">
            {[
              { k: '30d', l: 'Last 30 days' },
              { k: '90d', l: 'Last 90 days' },
              { k: '365d', l: 'Last 365 days' },
            ].map((r) => (
              <button
                key={r.k}
                onClick={() => setFRange(r.k)}
                className="text-xs px-3 py-2 rounded flex-1"
                style={{
                  background: fRange === r.k ? 'var(--gd-primary)' : 'transparent',
                  border: `1px solid ${fRange === r.k ? 'var(--gd-primary)' : 'var(--gd-border)'}`,
                  color: 'var(--gd-fg)',
                }}
              >
                {r.l}
              </button>
            ))}
          </div>
        </Field>
      </Dialog>

      {/* Add Widget dialog */}
      <Dialog
        open={widgetOpen}
        onClose={() => setWidgetOpen(false)}
        title="Add widget"
        footer={
          <>
            <BtnSecondary onClick={() => setWidgetOpen(false)}>Cancel</BtnSecondary>
            <BtnPrimary onClick={submitWidget}>Add widget</BtnPrimary>
          </>
        }
      >
        <Field label="Widget preset">
          <Select value={wPreset} onChange={(e) => setWPreset(e.target.value)}>
            <option value="Executive Overview">Executive Overview</option>
            <option value="Revenue Risk">Revenue Risk</option>
            <option value="Renewal Forecast">Renewal Forecast</option>
            <option value="Adoption Analytics">Adoption Analytics</option>
            <option value="CSM Workspace">CSM Workspace</option>
            <option value="Custom Query">Custom Query</option>
          </Select>
        </Field>
        <Field label="Query (natural language)">
          <textarea
            value={wQuery}
            onChange={(e) => setWQuery(e.target.value)}
            placeholder="Describe what this widget should show…"
            rows={2}
            className="w-full text-sm px-3 py-2 rounded bg-transparent text-fg-strong placeholder:text-fg-strong/40 outline-none focus:border-fg-strong/40"
            style={{ border: '1px solid var(--gd-border)' }}
          />
        </Field>
        <Field label="Task ID">
          <input
            type="text"
            value={wTaskId}
            onChange={(e) => setWTaskId(e.target.value)}
            placeholder="ObjectId of the analytics task"
            className="w-full text-sm px-3 py-2 rounded bg-transparent text-fg-strong placeholder:text-fg-strong/40 outline-none focus:border-fg-strong/40 font-mono"
            style={{ border: '1px solid var(--gd-border)' }}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Language">
            <Select value={wLang} onChange={(e) => setWLang(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="ar">Arabic</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
            </Select>
          </Field>
          <Field label="Force refresh">
            <label className="flex items-center gap-2 pt-2 text-sm text-fg-strong cursor-pointer">
              <input
                type="checkbox"
                checked={wForceRefresh}
                onChange={(e) => setWForceRefresh(e.target.checked)}
                className="cursor-pointer"
              />
              Bypass cache
            </label>
          </Field>
        </div>
        {wErr && (
          <p className="text-xs mt-2" style={{ color: 'var(--gd-danger-fg)' }}>
            {wErr}
          </p>
        )}
      </Dialog>
    </div>
  );
}

/* ================================================================
   ASK
   ================================================================ */

const FALLBACK: BotAnswer = {
  question: '',
  direct: {
    headline: "I don't have specific data on that question.",
    sub: 'Try one of the suggested follow-ups below, or ask about at-risk accounts, revenue, deals, tickets, or milestones.',
  },
  followups: ['Which customers are at risk?', 'What actions should I take?', 'Show me the trace'],
};

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 3);
}

function lookupAnswer(q: string, space: SpaceKey): BotAnswer {
  const norm = q.toLowerCase().trim();
  const { seed, bank } = ASK_BUNDLE[space];
  const all: BotAnswer[] = [seed, ...bank];

  const exact = all.find((a) => a.question.toLowerCase().trim() === norm);
  if (exact) return exact;

  const qTokens = tokenize(norm);
  if (!qTokens.length) return FALLBACK;

  let best: BotAnswer | null = null;
  let bestScore = 0;
  for (const a of all) {
    const aTokens = tokenize(a.question);
    let score = 0;
    for (const t of qTokens) {
      for (const at of aTokens) {
        if (at === t) score += 3;
        else if (at.startsWith(t) || t.startsWith(at)) score += 2;
        else if (at.includes(t) || t.includes(at)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = a;
    }
  }
  return bestScore >= 3 ? best! : FALLBACK;
}

type ChatMessage = { role: 'user' | 'bot'; text: string; answer?: BotAnswer; ts: string };

function nowLabel(): string {
  const d = new Date();
  const h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const am = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m} ${am}`;
}

function Ask({
  space,
  onNavigate,
  onOpenTrace,
  onToast,
}: {
  space: SpaceKey;
  onNavigate: (f: FeatureKey) => void;
  onOpenTrace: (traceId: string) => void;
  onToast: (msg: string) => void;
}) {
  const seed = ASK_BUNDLE[space].seed;
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'user', text: seed.question, ts: seed.timestamp || nowLabel() },
    { role: 'bot', text: '', answer: seed, ts: seed.timestamp || nowLabel() },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset on space change
    const s = ASK_BUNDLE[space].seed;
    setMessages([
      { role: 'user', text: s.question, ts: s.timestamp || nowLabel() },
      { role: 'bot', text: '', answer: s, ts: s.timestamp || nowLabel() },
    ]);
  }, [space]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  function submit(text: string) {
    const q = text.trim();
    if (!q) return;
    const ans = lookupAnswer(q, space);
    const ts = nowLabel();
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: q, ts },
      { role: 'bot', text: '', answer: ans, ts },
    ]);
    setInput('');
  }

  const latestBot = [...messages].reverse().find((m) => m.role === 'bot');
  const currentAnswer = latestBot?.answer;
  // Right rails fall back to seed's rails so panel never empties
  const railInsights = currentAnswer?.keyInsightsRail ?? seed.keyInsightsRail;
  const railActions = currentAnswer?.recommendedActions ?? seed.recommendedActions;

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <h1 className="text-xl font-semibold text-fg-strong mb-4">AI Agent</h1>

        <div ref={scrollRef} className="max-h-[70vh] overflow-y-auto pr-1 space-y-4">
          {messages.map((m, idx) => {
            if (m.role === 'user') {
              return (
                <div key={idx} className="flex justify-end">
                  <div className="rounded-2xl px-4 py-3 max-w-xl text-fg-strong" style={{ background: 'var(--gd-primary)' }}>
                    <p className="text-sm">{m.text}</p>
                    <p className="text-[10px] text-fg-strong/70 mt-1">{m.ts}</p>
                  </div>
                </div>
              );
            }
            const a = m.answer!;
            const isLast = idx === messages.length - 1;
            return <BotCard key={idx} answer={a} isLast={isLast} ts={m.ts} onFollowup={submit} onNavigate={onNavigate} onOpenTrace={onOpenTrace} />;
          })}
        </div>

        {/* Composer */}
        <Card className="p-3 mt-4 flex items-center gap-3">
          <button
            onClick={() => onToast('Attach file: coming soon')}
            className="text-fg-strong/40 hover:text-fg-strong p-1"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToast('Voice input: coming soon')}
            className="text-fg-strong/40 hover:text-fg-strong p-1"
            title="Dictate"
          >
            <Mic className="w-4 h-4" />
          </button>
          <input
            className="flex-1 outline-none text-sm placeholder:text-fg-strong/40 bg-transparent text-fg-strong"
            placeholder="Ask anything about your business…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit(input);
            }}
          />
          <button
            onClick={() => submit(input)}
            className="w-8 h-8 rounded flex items-center justify-center text-fg-strong hover:brightness-110"
            style={{ background: 'var(--gd-primary)' }}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </Card>
      </div>

      {/* Right rail */}
      <div className="col-span-3 space-y-4">
        {railInsights && (
          <Card className="p-4">
            <p className="text-sm font-medium text-fg-strong mb-3">Key Insights</p>
            {railInsights.map((i) => (
              <div key={i.label} className="py-2 border-b border-fg-strong/5 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-fg-strong/50 text-xs">{i.icon}</span>
                  <p className="text-[10px] uppercase tracking-wider text-fg-strong/50">{i.label}</p>
                </div>
                <p className="text-xl font-semibold text-fg-strong">{i.value}</p>
                <p className="text-[10px] text-green-400 mt-0.5">{i.delta}</p>
              </div>
            ))}
          </Card>
        )}

        {railActions && (
          <Card className="p-4">
            <p className="text-sm font-medium text-fg-strong mb-3">Recommended Actions</p>
            {railActions.map((a, i) => (
              <div key={i} className="py-3 border-b border-fg-strong/5 last:border-0">
                <p className="text-sm text-fg-strong mb-1">{a.title}</p>
                <p className="text-xs text-fg-strong/60 leading-relaxed mb-2">{a.sub}</p>
                <div className="flex items-center justify-between">
                  <Pill tone={a.priority === 'high' ? 'red' : 'yellow'}>{a.priority} priority</Pill>
                  <button onClick={() => onNavigate('trace')} className="text-xs" style={{ color: 'var(--gd-primary)' }}>
                    View
                  </button>
                </div>
              </div>
            ))}
          </Card>
        )}
      </div>
    </div>
  );
}

function BotCard({
  answer: a,
  isLast,
  ts,
  onFollowup,
  onNavigate,
  onOpenTrace,
}: {
  answer: BotAnswer;
  isLast: boolean;
  ts: string;
  onFollowup: (q: string) => void;
  onNavigate: (f: FeatureKey) => void;
  onOpenTrace: (traceId: string) => void;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-6 rounded flex items-center justify-center text-fg-strong text-xs" style={{ background: 'var(--gd-primary)' }}>
          ✦
        </span>
        <span className="text-sm font-medium text-fg-strong">GenX Copilot</span>
        {a.table && <Pill tone="neutral">TABLE</Pill>}
        <span className="ml-auto text-xs text-fg-strong/50">{ts}</span>
      </div>

      {/* Direct answer */}
      <div className="rounded-lg p-4 mb-4" style={{ background: 'var(--gd-primary-soft)' }}>
        <p className="text-[10px] font-semibold text-fg-strong/50 tracking-widest uppercase mb-2">✦ Direct Answer</p>
        <p className="text-sm font-medium text-fg-strong">{a.direct.headline}</p>
        <p className="text-sm text-fg-strong/70 mt-1">{a.direct.sub}</p>
      </div>

      {/* Bullets (compact answers) */}
      {a.bullets && (
        <ul className="space-y-2 mb-6">
          {a.bullets.map((b) => (
            <li key={b} className="text-sm text-fg-strong/80 flex gap-2">
              <span className="text-fg-strong/40 mt-0.5">·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Insights */}
      {a.insights && (
        <>
          <p className="text-sm font-medium text-fg-strong mb-3">Key insights</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {a.insights.map((i) => (
              <div
                key={i.label}
                className="rounded-lg p-3"
                style={{ background: 'var(--gd-muted-2)', border: '1px solid var(--gd-border)' }}
              >
                <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mb-1">{i.label}</p>
                <p className="text-xl font-semibold text-fg-strong">{i.value}</p>
                <p className="text-[10px] text-green-400 mt-1">{i.delta}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Table */}
      {a.table && (
        <>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-fg-strong">Top At-Risk</p>
            <span className="text-xs text-fg-strong/50">{a.table.length} rows</span>
          </div>
          <div className="grid grid-cols-12 gap-2 pb-2 border-b border-fg-strong/5 text-[10px] uppercase tracking-wider text-fg-strong/50">
            <span className="col-span-3">Account</span>
            <span className="col-span-1 text-right">Health</span>
            <span className="col-span-2 text-center">Risk</span>
            <span className="col-span-1 text-right">ARR</span>
            <span className="col-span-3">Factors</span>
            <span className="col-span-2">Owner</span>
          </div>
          {a.table.map((r) => (
            <button
              key={r.name}
              onClick={() => onOpenTrace(r.name)}
              className="w-full grid grid-cols-12 gap-2 py-2 border-b border-fg-strong/5 last:border-0 items-center hover:bg-fg-strong/[0.02] rounded transition-colors text-left"
            >
              <div className="col-span-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded flex items-center justify-center text-[10px]" style={{ background: 'var(--gd-muted)' }}>
                  {r.code}
                </span>
                <span className="text-sm text-fg-strong">{r.name}</span>
              </div>
              <span className="col-span-1 text-right text-sm text-fg-strong">{r.health}</span>
              <span className="col-span-2 text-center">
                <Pill tone={r.risk === 'High' || r.risk === 'P0' || r.risk === 'Delay' || r.risk === 'M3 slip' || r.risk === 'Go-live risk' ? 'red' : r.risk === 'Medium' || r.risk === 'P1 Reopen' || r.risk === 'Hold' ? 'yellow' : 'green'}>
                  {r.risk}
                </Pill>
              </span>
              <span className="col-span-1 text-right text-sm text-fg-strong">{r.arr}</span>
              <span className="col-span-3 flex flex-wrap gap-1">
                {r.factors.map((f) => (
                  <span key={f} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--gd-muted)' }}>
                    {f}
                  </span>
                ))}
              </span>
              <span className="col-span-2 text-xs text-fg-strong/70">{r.owner}</span>
            </button>
          ))}
          <button onClick={() => onNavigate('dashboard')} className="text-xs mt-3 inline-block" style={{ color: 'var(--gd-primary)' }}>
            View all at-risk customers →
          </button>
        </>
      )}

      {/* Reasoning */}
      {a.reasoning && (
        <div className="rounded-lg p-4 mt-6" style={{ background: 'var(--gd-muted-2)', border: '1px solid var(--gd-border)' }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-fg-strong/50">ⓘ</span>
            <p className="text-sm font-medium text-fg-strong">Reasoning</p>
          </div>
          <p className="text-xs text-fg-strong/60 mb-3">{a.reasoning.summary}</p>
          <div className="flex flex-wrap gap-2">
            {a.reasoning.factors.map((f) => (
              <span key={f} className="text-[10px] px-2 py-1 rounded border border-fg-strong/10 text-fg-strong">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Followups — only on the most recent bot message */}
      {isLast && a.followups.length > 0 && (
        <>
          <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mt-6 mb-3">You might also ask</p>
          <div className="flex flex-wrap gap-2">
            {a.followups.map((f) => (
              <button
                key={f}
                onClick={() => onFollowup(f)}
                className="text-xs px-3 py-1.5 border border-fg-strong/10 rounded-full hover:bg-fg-strong/5 text-fg-strong bg-transparent"
              >
                {f}
              </button>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}


/* ================================================================
   TRACE / AUDIT
   ================================================================ */

function Trace({
  space,
  pendingTraceId,
  clearPendingTraceId,
  onToast,
}: {
  space: SpaceKey;
  pendingTraceId: string | null;
  clearPendingTraceId: () => void;
  onToast: (msg: string) => void;
}) {
  const d = TRACE_DATA[space];
  const donutTotal = d.donut.reduce((a, b) => a + b.value, 0);
  const [selected, setSelected] = useState<TraceOutcome | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');
  const [scenarioFilter, setScenarioFilter] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [fType, setFType] = useState('all');
  const [fFeedback, setFFeedback] = useState('all');

  useEffect(() => {
    setSelected(null);
    setActiveTab(0);
    setSearch('');
    setScenarioFilter('all');
  }, [space]);

  const filteredOutcomes = d.outcomes.filter((o) => {
    if (search) {
      const q = search.toLowerCase();
      if (!o.user.toLowerCase().includes(q) && !o.ticket.toLowerCase().includes(q) && !o.product.toLowerCase().includes(q)) {
        return false;
      }
    }
    if (scenarioFilter !== 'all' && o.scenario !== scenarioFilter) return false;
    if (fType !== 'all' && o.scenario !== fType) return false;
    if (fFeedback !== 'all' && o.feedback !== fFeedback) return false;
    return true;
  });

  // Auto-open outcome when Command Center / Ask / Dashboard nav sends us a hint
  useEffect(() => {
    if (!pendingTraceId) return;
    const hint = pendingTraceId.toLowerCase();
    const match =
      d.outcomes.find(
        (o) => o.ticket.toLowerCase() === hint || o.user.toLowerCase().includes(hint),
      ) ||
      d.outcomes.find((o) => {
        const nameTokens = hint.split(/[\s-]+/).filter((t) => t.length > 3);
        return nameTokens.some(
          (t) => o.user.toLowerCase().includes(t) || o.product.toLowerCase().includes(t) || o.ticket.toLowerCase().includes(t),
        );
      }) ||
      d.outcomes[0];
    setSelected(match);
    clearPendingTraceId();
  }, [pendingTraceId, d.outcomes, clearPendingTraceId]);

  const exportOutcomes = () => {
    const blob = new Blob([JSON.stringify(d.outcomes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${space}-outcomes.json`;
    a.click();
    URL.revokeObjectURL(url);
    onToast(`Exported ${d.outcomes.length} outcomes`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-fg-strong">Trace / Audit</h1>
          <p className="text-sm text-fg-strong/50 mt-1">View system memory, decisions, actions, and audit trails.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFiltersOpen(true)}
            className="text-xs px-3 py-1.5 border border-fg-strong/10 rounded text-fg-strong bg-transparent hover:bg-fg-strong/5"
          >
            Filters
          </button>
          <button
            onClick={exportOutcomes}
            className="text-xs px-3 py-1.5 rounded text-fg-strong font-medium hover:brightness-110"
            style={{ background: 'var(--gd-primary)' }}
          >
            Export
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {d.kpis.map((k) => (
          <KpiTile key={k.label} icon={k.icon} label={k.label} value={k.value} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-fg-strong/10">
        {['Memory Explorer', 'Decision Log', 'Audit Trail', 'Data Lineage', 'Access History', 'Retention & Policies'].map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`text-sm py-2 border-b-2 ${
              activeTab === i ? 'border-fg-strong text-fg-strong font-medium' : 'border-transparent text-fg-strong/50 hover:text-fg-strong'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Outcomes + Audit rail */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-fg-strong">Recent Outcomes ({filteredOutcomes.length})</p>
            <div className="flex items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs border border-fg-strong/10 rounded px-3 py-1 w-56 bg-transparent text-fg-strong placeholder:text-fg-strong/40"
                placeholder="Search outcomes..."
              />
              <select
                value={scenarioFilter}
                onChange={(e) => setScenarioFilter(e.target.value)}
                className="text-xs border border-fg-strong/10 rounded px-2 py-1 bg-bg text-fg-strong"
              >
                <option value="all">All Types</option>
                {Array.from(new Set(d.outcomes.map((o) => o.scenario))).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                onChange={(e) => onToast(`Time range: ${e.target.value}`)}
                className="text-xs border border-fg-strong/10 rounded px-2 py-1 bg-bg text-fg-strong"
              >
                <option value="all">All time</option>
                <option value="24h">Last 24h</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 pb-2 border-b border-fg-strong/5 text-[10px] uppercase tracking-wider text-fg-strong/50">
            <span className="col-span-4">User Message</span>
            <span className="col-span-1">Scenario</span>
            <span className="col-span-2">Product</span>
            <span className="col-span-1 text-right">Conf.</span>
            <span className="col-span-1">Ticket</span>
            <span className="col-span-1">Status</span>
            <span className="col-span-1">Feedback</span>
            <span className="col-span-1 text-right">When</span>
          </div>
          {filteredOutcomes.length === 0 && (
            <p className="text-sm text-fg-strong/50 py-8 text-center">No outcomes match filters</p>
          )}
          {filteredOutcomes.map((o, i) => (
            <button
              key={i}
              onClick={() => setSelected(o)}
              className="grid grid-cols-12 gap-2 py-3 border-b border-fg-strong/5 last:border-0 items-start text-xs w-full text-left hover:bg-fg-strong/[0.02] transition-colors"
            >
              <span className="col-span-4 text-fg-strong">{o.user}</span>
              <span className="col-span-1">
                <Pill tone={o.tone === 'green' ? 'green' : o.tone === 'blue' ? 'blue' : o.tone === 'yellow' ? 'yellow' : 'neutral'}>
                  {o.scenario}
                </Pill>
              </span>
              <span className="col-span-2 text-fg-strong">
                {o.product}
                <br />
                <span className="text-fg-strong/50">{o.platform}</span>
              </span>
              <span className="col-span-1 text-right text-fg-strong font-mono">{o.confidence}%</span>
              <span className="col-span-1 text-fg-strong font-mono">{o.ticket || '—'}</span>
              <span className="col-span-1">
                <span className="text-fg-strong">{o.status}</span>
              </span>
              <span className="col-span-1">
                {o.feedback === 'satisfied' ? <Pill tone="green">satisfied</Pill> : <span className="text-fg-strong/40">—</span>}
              </span>
              <span className="col-span-1 text-right text-fg-strong/50">{o.when.split(' ')[0]}<br /><span className="text-fg-strong/40">{o.when.split(' ').slice(1).join(' ')}</span></span>
            </button>
          ))}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-fg-strong">Audit Trail (Latest)</p>
            <button onClick={() => setActiveTab(2)} className="text-xs" style={{ color: 'var(--gd-primary)' }}>
              View all →
            </button>
          </div>
          {d.audit.map((a, i) => (
            <div key={i} className="py-3 border-b border-fg-strong/5 last:border-0">
              <div className="flex items-start gap-2">
                <span className="text-fg-strong/40 text-xs mt-0.5">⓪</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-fg-strong/50 tracking-widest uppercase mb-1">{a.type}</p>
                  <p className="text-sm text-fg-strong leading-tight">{a.title}</p>
                  <p className="text-xs text-fg-strong/50 mt-1">{a.who}</p>
                  <p className="text-[10px] text-fg-strong/40 mt-0.5">{a.when}</p>
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => setActiveTab(2)} className="text-xs mt-3 inline-block" style={{ color: 'var(--gd-primary)' }}>
            View full audit trail →
          </button>
        </Card>
      </div>

      {/* Bottom row: donut + retention + sources + compliance */}
      <div className="grid lg:grid-cols-4 gap-6">
        <Card className="p-5">
          <p className="text-sm font-medium text-fg-strong mb-4">Outcomes by Scenario</p>
          <div className="relative w-32 h-32 mx-auto">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `conic-gradient(${d.donut
                  .map((x, i) => {
                    const prev = (d.donut.slice(0, i).reduce((a, b) => a + b.value, 0) / donutTotal) * 100;
                    const curr = ((prev + (x.value / donutTotal) * 100));
                    return `${x.color} ${prev}% ${curr}%`;
                  })
                  .join(', ')})`,
              }}
            />
            <div className="absolute inset-4 bg-bg rounded-full flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-fg-strong">{donutTotal.toLocaleString()}</p>
              <p className="text-[10px] text-fg-strong/50 uppercase tracking-wider">Total</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {d.donut.map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: x.color }} />
                <span className="text-fg-strong/70 flex-1">{x.label}</span>
                <span className="text-fg-strong font-medium">{x.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-fg-strong">Memory Retention</p>
            <button onClick={() => setActiveTab(5)} className="text-xs" style={{ color: 'var(--gd-primary)' }}>
              Manage →
            </button>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-fg-strong/50 mb-1">Average retention period</p>
          <p className="text-4xl font-semibold text-fg-strong">180</p>
          <p className="text-xs text-fg-strong/50 mb-4">days</p>
          <div className="text-xs space-y-2">
            <div className="flex justify-between border-b border-fg-strong/5 pb-2">
              <span className="text-fg-strong/50">Oldest memory</span>
              <span className="text-fg-strong">Mar 14, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fg-strong/50">Retention policy</span>
              <span className="text-fg-strong">Standard (180 days)</span>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-medium text-fg-strong mb-4">Top Data Sources</p>
          {d.sources.map((s) => (
            <div key={s.name} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-fg-strong">{s.name}</span>
                <span className="text-fg-strong font-medium">{s.pct}%</span>
              </div>
              <div className="h-1.5 bg-bg/5 rounded overflow-hidden">
                <div className="h-full" style={{ width: `${s.pct * 2}%`, background: 'var(--gd-primary)' }} />
              </div>
            </div>
          ))}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-fg-strong">Compliance &amp; Security</p>
            <button onClick={() => setActiveTab(4)} className="text-[10px]" style={{ color: 'var(--gd-primary)' }}>
              View →
            </button>
          </div>
          {[
            { name: 'SOC 2 Type II', status: 'Compliant', tone: 'green' as const },
            { name: 'Data Encryption', status: 'At rest & transit', tone: 'green' as const },
            { name: 'Access Controls', status: 'Role-based', tone: 'green' as const },
            { name: 'Audit Logging', status: 'Enabled', tone: 'green' as const },
            { name: 'Data Retention', status: 'Policy enforced', tone: 'green' as const },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between py-2 border-b border-fg-strong/5 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-sm text-fg-strong">{c.name}</span>
              </div>
              <Pill tone={c.tone}>{c.status}</Pill>
            </div>
          ))}
        </Card>
      </div>

      {/* Outcome detail modal */}
      {selected && <OutcomeDetailModal outcome={selected} onClose={() => setSelected(null)} />}

      {/* Filters dialog */}
      <Dialog
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="Filter outcomes"
        footer={
          <>
            <BtnSecondary
              onClick={() => {
                setFType('all');
                setFFeedback('all');
                setFiltersOpen(false);
                onToast('Filters cleared');
              }}
            >
              Clear all
            </BtnSecondary>
            <BtnPrimary
              onClick={() => {
                setFiltersOpen(false);
                onToast(`Filters applied · ${filteredOutcomes.length} match`);
              }}
            >
              Apply
            </BtnPrimary>
          </>
        }
      >
        <Field label="Scenario type">
          <Select value={fType} onChange={(e) => setFType(e.target.value)}>
            <option value="all">All types</option>
            {Array.from(new Set(d.outcomes.map((o) => o.scenario))).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field label="Feedback">
          <Select value={fFeedback} onChange={(e) => setFFeedback(e.target.value)}>
            <option value="all">Any feedback</option>
            <option value="satisfied">Satisfied only</option>
            <option value="—">Not rated</option>
          </Select>
        </Field>
      </Dialog>
    </div>
  );
}

function OutcomeDetailModal({ outcome, onClose }: { outcome: TraceOutcome; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const signals = [
    { label: 'KB match confidence', weight: outcome.confidence / 100 },
    { label: 'Ticket cluster density', weight: 0.34 },
    { label: 'Novelty score', weight: outcome.scenario === 'New / unclear' ? 0.87 : 0.22 },
    { label: 'Customer sentiment', weight: outcome.feedback === 'satisfied' ? 0.15 : 0.42 },
  ];

  const evidence = [
    { id: 'evd_01', src: 'Product KB', ref: `KB-${outcome.product.toLowerCase().replace(/\s/g, '-')}-01`, d: 'Article matched by semantic search' },
    { id: 'evd_02', src: 'Ticket history', ref: outcome.ticket || 'no ticket', d: 'Prior tickets on same product/platform' },
    { id: 'evd_03', src: 'Telemetry', ref: `${outcome.product}.metrics`, d: 'Product-side event stream' },
    { id: 'evd_04', src: 'CRM', ref: 'Account · Contoso Ltd', d: 'ARR + renewal + health signals' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/70" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-bg border border-fg-strong/20 rounded-lg max-w-4xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-fg-strong/10 flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-2 font-mono">
              trace · {outcome.ticket || 'unassigned'}
            </p>
            <h2 className="text-lg font-semibold text-fg-strong">{outcome.user}</h2>
            <p className="text-sm text-fg-strong/60 mt-1">
              {outcome.scenario} · {outcome.product} · {outcome.platform} · confidence{' '}
              <span className="font-mono">{outcome.confidence}%</span>
            </p>
          </div>
          <button onClick={onClose} className="text-fg-strong/60 hover:text-fg-strong text-xl">
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Meta */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { l: 'Status', v: outcome.status },
              { l: 'Feedback', v: outcome.feedback === '—' ? 'not rated' : outcome.feedback },
              { l: 'When', v: outcome.when },
              { l: 'Trace ID', v: `t_${(outcome.ticket || 'auto').toLowerCase().replace(/-/g, '_')}` },
            ].map((x) => (
              <div key={x.l}>
                <p className="text-[10px] tracking-widest text-fg-strong/50 uppercase mb-1">{x.l}</p>
                <p className="text-sm text-fg-strong">{x.v}</p>
              </div>
            ))}
          </div>

          {/* Weighted signals */}
          <div>
            <p className="text-sm font-medium text-fg-strong mb-4">Weighted signals</p>
            {signals.map((s) => (
              <div key={s.label} className="mb-3">
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-fg-strong">{s.label}</p>
                  <p className="font-mono text-xs text-fg-strong">{s.weight.toFixed(2)}</p>
                </div>
                <div className="h-1 bg-surface-2 rounded overflow-hidden">
                  <div className="h-full" style={{ width: `${s.weight * 100}%`, background: 'var(--gd-primary)' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Evidence rows */}
          <div>
            <p className="text-sm font-medium text-fg-strong mb-4">Evidence rows</p>
            <div className="space-y-3">
              {evidence.map((e) => (
                <div key={e.id} className="border-b border-fg-strong/5 pb-3 last:border-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-fg-strong/50">{e.id}</span>
                    <span className="text-xs text-fg-strong/50">{e.src}</span>
                  </div>
                  <p className="font-mono text-sm text-fg-strong mb-1">{e.ref}</p>
                  <p className="text-xs text-fg-strong/60">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-fg-strong/10 flex justify-end gap-2">
            <button onClick={onClose} className="text-xs px-4 py-2 border border-fg-strong/10 rounded text-fg-strong bg-transparent hover:bg-fg-strong/5">
              Close
            </button>
            <button
              onClick={() => {
                const payload = { outcome, signals, evidence, exported_at: new Date().toISOString() };
                const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `trace-${(outcome.ticket || 'auto').toLowerCase()}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="text-xs px-4 py-2 rounded text-fg-strong font-medium hover:brightness-110"
              style={{ background: 'var(--gd-primary)' }}
            >
              Export trace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
