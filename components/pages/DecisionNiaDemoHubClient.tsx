'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  BarChart3,
  MessageSquare,
  FileText,
  ChevronDown,
  ChevronLeft,
  Sparkles,
  Bell,
  Globe,
  Mic,
  Paperclip,
  Send,
} from 'lucide-react';

type SpaceKey = 'customer-support' | 'customer-success' | 'sales' | 'delivery';
type FeatureKey = 'command-center' | 'ask' | 'dashboard' | 'trace';

const SPACES: {
  key: SpaceKey;
  label: string;
  letter: string;
  persona: string;
  role: string;
}[] = [
  { key: 'customer-success', label: 'Customer Success', letter: 'C', persona: 'Alex Morgan', role: 'CSM Director' },
  { key: 'customer-support', label: 'Customer Support', letter: 'C', persona: 'Karen Foster', role: 'Support Head' },
  { key: 'sales', label: 'Sales', letter: 'S', persona: 'Taylor Kim', role: 'AE Lead' },
  { key: 'delivery', label: 'Delivery', letter: 'D', persona: 'Jordan Lee', role: 'Delivery Lead' },
];

const FEATURES: { key: FeatureKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'command-center', label: 'Command Center', Icon: Home },
  { key: 'dashboard', label: 'Dashboard', Icon: BarChart3 },
  { key: 'ask', label: 'Ask', Icon: MessageSquare },
  { key: 'trace', label: 'Trace / Audit', Icon: FileText },
];

export default function DecisionNiaDemoHubClient() {
  const [activeSpace, setActiveSpace] = useState<SpaceKey>('customer-success');
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('command-center');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [pendingTraceId, setPendingTraceId] = useState<string | null>(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    if (pickerOpen || notifOpen) {
      document.addEventListener('mousedown', onClickOutside);
      return () => document.removeEventListener('mousedown', onClickOutside);
    }
  }, [pickerOpen, notifOpen]);

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
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className="w-[260px] border-r flex flex-col shrink-0"
          style={{ borderColor: 'var(--gd-border)', background: 'var(--gd-bg)' }}
        >
          {/* Brand */}
          <button
            onClick={() => setActiveFeature('command-center')}
            className="px-5 py-5 border-b border-white/10 text-left hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-white shrink-0"
                style={{ background: 'var(--gd-primary)' }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white leading-tight">GenX</p>
                <p className="text-[10px] text-white/50 leading-tight">AI Decision Workspace</p>
              </div>
            </div>
          </button>

          {/* Space picker button */}
          <div className="p-3 border-b border-white/10 relative" ref={pickerRef}>
            <button
              onClick={() => setPickerOpen(!pickerOpen)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
                pickerOpen ? 'border-white' : 'border-white/20 hover:border-white/40'
              }`}
            >
              <span className="w-7 h-7 rounded flex items-center justify-center text-xs font-medium border border-white/20 shrink-0">
                {space.letter}
              </span>
              <span className="flex-1 text-left text-sm text-white">{space.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/40" />
            </button>

            {/* Popover */}
            {pickerOpen && (
              <div className="absolute top-0 left-full ml-2 z-50 w-[260px] bg-black border border-white/20 rounded-lg shadow-2xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5">
                  <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">
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
                          isActive ? 'text-white' : 'hover:bg-white/5 text-white'
                        }`}
                        style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                      >
                        <span
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium shrink-0 ${
                            isActive ? 'bg-white/20 text-white' : 'border border-white/20 text-white'
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
          <nav className="p-2 flex-1">
            {FEATURES.map((f) => {
              const isActive = f.key === activeFeature;
              const { Icon } = f;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFeature(f.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:bg-white/5'
                  }`}
                  style={isActive ? { background: 'var(--gd-primary)' } : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm">{f.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Persona footer */}
          <div className="px-4 py-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-medium"
                style={{ background: 'var(--gd-primary)' }}
              >
                {space.persona
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">{space.persona}</p>
                <p className="text-[10px] text-white/50 truncate">{space.role}</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-t border-white/10">
            <Link
              href="/demo"
              className="text-xs text-white/50 hover:text-white flex items-center gap-1"
            >
              <ChevronLeft className="w-3 h-3" /> Back to chooser
            </Link>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="px-8 py-3 border-b border-white/10 flex items-center justify-between">
            <p className="text-sm text-white">{feature.label}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => showToast('English only in demo')}
                className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white px-2 py-1 rounded hover:bg-white/5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>En</span>
              </button>
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="relative text-white/60 hover:text-white p-1.5 rounded hover:bg-white/5"
                >
                  <Bell className="w-4 h-4" />
                  <span
                    className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--gd-danger)' }}
                  />
                </button>
                {notifOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-[320px] rounded-lg shadow-2xl overflow-hidden z-50"
                    style={{ background: 'var(--gd-bg)', border: '1px solid var(--gd-border-strong)' }}
                  >
                    <div className="px-4 py-2 border-b border-white/5">
                      <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">
                        Notifications · 3 unread
                      </p>
                    </div>
                    <div className="max-h-[360px] overflow-y-auto">
                      {[
                        { t: 'Northwind health dropped 42 → 35', trace: 'trace_northwind_outreach', when: '5m ago' },
                        { t: 'FD-2104 P0 auto-escalated to sync module', trace: 'trace_acme_p0_2104', when: '12m ago' },
                        { t: 'Contoso renewal proposal ready to send', trace: 'trace_contoso_renewal_send', when: '1h ago' },
                      ].map((n, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            openTrace(n.trace);
                            setNotifOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5"
                        >
                          <p className="text-sm text-white">{n.t}</p>
                          <p className="text-[10px] text-white/50 mt-1 font-mono">{n.trace} · {n.when}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 w-full">
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
  if (feature === 'ask') return <Ask space={space} persona={persona} onNavigate={onNavigate} onOpenTrace={onOpenTrace} onToast={onToast} />;
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
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-xl leading-none">
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
      <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-1.5 block">
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
      className="w-full text-sm px-3 py-2 rounded bg-transparent text-white placeholder:text-white/40 outline-none focus:border-white/40"
      style={{ border: '1px solid var(--gd-border)' }}
    />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full text-sm px-3 py-2 rounded text-white outline-none"
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
      className="text-xs px-4 py-2 rounded text-white font-medium hover:brightness-110 disabled:opacity-50"
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
      className="text-xs px-4 py-2 rounded text-white bg-transparent hover:bg-white/5"
      style={{ border: '1px solid var(--gd-border)' }}
    >
      {children}
    </button>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/[0.03] border border-white/10 rounded-lg ${className}`}>{children}</div>
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
        <p className="text-xs text-white/50">{label}</p>
      </div>
      <p className="text-3xl font-semibold text-white">{value}</p>
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
      <p className="text-sm font-medium text-white">{children}</p>
      {action}
    </div>
  );
}

function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'red' | 'yellow' | 'green' | 'blue' | 'neutral' }) {
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

const COMMAND_DATA: Record<SpaceKey, {
  greeting: string;
  summary: { headline: string; sub: string };
  actions: { risk: 'high' | 'medium' | 'low'; title: string; account: string; metric: { label: string; value: string }; status: string; cta: string }[];
  signals: { icon: string; label: string; value: string; delta: string; tone: 'up' | 'down' | 'neutral' }[];
  cfi: { team: string; label: string; value: string }[];
  workflows: { in_progress: number; awaiting: number; completed: number; list: { name: string; status: string; tone: 'blue' | 'yellow' | 'green' }[] };
  decisions: { title: string; when: string; impact: string; tone: 'green' | 'neutral' }[];
  watchlist: { code: string; name: string; score: number; risk: 'high' | 'medium' | 'low' }[];
}> = {
  'customer-success': {
    greeting: 'Alex Morgan',
    summary: {
      headline: '3 critical risks detected across Customer Success and Finance',
      sub: '$1.2M revenue at risk. 2 actions recommended. 1 requires approval.',
    },
    actions: [
      { risk: 'high', title: 'Executive outreach needed', account: 'Northwind Industries', metric: { label: 'Revenue at risk', value: '$450K' }, status: 'Due today', cta: 'Approve' },
      { risk: 'medium', title: 'Renewal intervention required', account: 'Contoso Logistics', metric: { label: 'Revenue at risk', value: '$320K' }, status: 'Due in 2 days', cta: 'Auto-run' },
      { risk: 'low', title: 'Pricing review opportunity', account: 'Fabrikam Manufacturing', metric: { label: 'Potential impact', value: '$180K' }, status: 'Due in 5 days', cta: 'Schedule' },
    ],
    signals: [
      { icon: '⚠', label: 'At-risk accounts', value: '12', delta: '↑ 3 vs last 7 days', tone: 'down' },
      { icon: '$', label: 'Revenue at risk', value: '$1.8M', delta: '↑ 18% vs last 7 days', tone: 'down' },
      { icon: '◷', label: 'SLA breaches', value: '6', delta: '↑ 2 vs last 7 days', tone: 'down' },
      { icon: '⇗', label: 'Pipeline risk', value: '$3.2M', delta: '↑ 5% vs last 7 days', tone: 'down' },
    ],
    cfi: [
      { team: 'Customer Success', label: 'At risk', value: '12 accounts' },
      { team: 'Sales', label: 'Impact', value: '$1.8M' },
      { team: 'Finance', label: 'Exposure', value: '$1.2M' },
    ],
    workflows: {
      in_progress: 28,
      awaiting: 4,
      completed: 7,
      list: [
        { name: 'Renewal Intervention — Northwind Industries', status: 'In progress', tone: 'blue' },
        { name: 'Onboarding Optimization — Fabrikam Manufacturing', status: 'Awaiting approval', tone: 'yellow' },
        { name: 'Executive Escalation — Tailspin Toys', status: 'In progress', tone: 'blue' },
      ],
    },
    decisions: [
      { title: 'Churn risk prevented — Northwind Industries', when: '2d ago', impact: '$450K saved', tone: 'green' },
      { title: 'Escalation resolved — Tailspin Toys', when: '1d ago', impact: 'SLA restored', tone: 'green' },
      { title: 'Renewal secured — Wide World Importers', when: '3d ago', impact: '$120K', tone: 'green' },
    ],
    watchlist: [
      { code: 'NI', name: 'Northwind Industries', score: 35, risk: 'high' },
      { code: 'CL', name: 'Contoso Logistics', score: 40, risk: 'high' },
      { code: 'FM', name: 'Fabrikam Manufacturing', score: 45, risk: 'high' },
      { code: 'TT', name: 'Tailspin Toys', score: 48, risk: 'medium' },
      { code: 'WW', name: 'Wide World Importers', score: 58, risk: 'low' },
    ],
  },
  'customer-support': {
    greeting: 'Karen Foster',
    summary: {
      headline: '4 P0/P1 tickets active — SLA at risk on 2',
      sub: 'MTTR trending 4.1h (from 8.4h). AI deflection 41% last 7d.',
    },
    actions: [
      { risk: 'high', title: 'FD-2104 P0 escalation', account: 'Northwind Industries', metric: { label: 'SLA remaining', value: '18m' }, status: 'Overdue soon', cta: 'Approve' },
      { risk: 'medium', title: 'Reopen pattern on export bug', account: 'Contoso Logistics', metric: { label: 'Reopens (30d)', value: '3' }, status: 'Route to QA', cta: 'Auto-run' },
      { risk: 'low', title: 'KB gap: PDF layout bug', account: 'Fabrikam Manufacturing', metric: { label: 'Similar tickets', value: '5' }, status: 'Draft article', cta: 'Schedule' },
    ],
    signals: [
      { icon: '⚠', label: 'Open P0/P1', value: '4', delta: '↑ 1 vs last 7 days', tone: 'down' },
      { icon: '◷', label: 'SLA compliance', value: '94%', delta: '↑ 2 vs last 7 days', tone: 'up' },
      { icon: '⇗', label: 'Avg MTTR', value: '4.1h', delta: '↓ 4.3h vs last 7 days', tone: 'up' },
      { icon: '$', label: 'AI deflection', value: '41%', delta: '↑ 6% vs last 7 days', tone: 'up' },
    ],
    cfi: [
      { team: 'Support L1/L2', label: 'Active', value: '18 tickets' },
      { team: 'Engineering', label: 'Escalated', value: '3 P0' },
      { team: 'Customer Success', label: 'Impacted', value: '4 accounts' },
    ],
    workflows: {
      in_progress: 12,
      awaiting: 2,
      completed: 14,
      list: [
        { name: 'P0 Incident Response — Northwind FD-2104', status: 'In progress', tone: 'blue' },
        { name: 'Hotfix v3.8.3 QA validation', status: 'Awaiting approval', tone: 'yellow' },
        { name: 'KB post-mortem draft — sync module', status: 'Completed', tone: 'green' },
      ],
    },
    decisions: [
      { title: 'Auto-escalated FD-2104 to sync module owner', when: '2h ago', impact: 'Trace opened', tone: 'green' },
      { title: 'Deflected 12 KB queries (mRounds sync)', when: '1d ago', impact: 'Deflection +6%', tone: 'green' },
      { title: 'Reopened FD-2112 flagged as KB gap', when: '3d ago', impact: 'Article drafted', tone: 'neutral' },
    ],
    watchlist: [
      { code: 'NI', name: 'Northwind Industries', score: 35, risk: 'high' },
      { code: 'CL', name: 'Contoso Logistics', score: 42, risk: 'high' },
      { code: 'FM', name: 'Fabrikam Manufacturing', score: 58, risk: 'medium' },
      { code: 'TT', name: 'Tailspin Toys', score: 62, risk: 'medium' },
      { code: 'WW', name: 'Wide World Importers', score: 74, risk: 'low' },
    ],
  },
  sales: {
    greeting: 'Taylor Kim',
    summary: {
      headline: '$2.9M Q3 pipeline · 2 deals at risk',
      sub: 'Northwind expansion at risk due to open P0. Contoso renewal negotiation in progress.',
    },
    actions: [
      { risk: 'high', title: 'Delay Northwind expansion pitch 30d', account: 'Northwind Industries', metric: { label: 'Deal size', value: '$480K' }, status: 'Call at 10:00', cta: 'Approve' },
      { risk: 'medium', title: 'Send Contoso renewal proposal', account: 'Contoso Logistics', metric: { label: 'Renewal ARR', value: '$820K' }, status: 'Ready to send', cta: 'Auto-run' },
      { risk: 'low', title: 'Wayne Industries fast-track pitch', account: 'Wayne Industries', metric: { label: 'Potential ACV', value: '$720K' }, status: 'Q4 targeted', cta: 'Schedule' },
    ],
    signals: [
      { icon: '⇗', label: 'Q3 pipeline', value: '$2.9M', delta: '↑ 12% vs Q2', tone: 'up' },
      { icon: '$', label: 'Weighted', value: '$1.7M', delta: '↑ 8% vs last 30d', tone: 'up' },
      { icon: '⚠', label: 'At-risk deals', value: '2', delta: '↑ 1 vs last 30d', tone: 'down' },
      { icon: '◷', label: 'Avg deal cycle', value: '58d', delta: '↓ 4d vs Q2', tone: 'up' },
    ],
    cfi: [
      { team: 'Sales', label: 'In flight', value: '5 deals' },
      { team: 'Customer Success', label: 'Blockers', value: '2 P0 open' },
      { team: 'Product', label: 'FR asks', value: '3 accts' },
    ],
    workflows: {
      in_progress: 8,
      awaiting: 3,
      completed: 4,
      list: [
        { name: 'Contoso renewal proposal packet', status: 'In progress', tone: 'blue' },
        { name: 'Northwind expansion hold-review', status: 'Awaiting approval', tone: 'yellow' },
        { name: 'Wayne QBR follow-up', status: 'Completed', tone: 'green' },
      ],
    },
    decisions: [
      { title: 'Held Northwind expansion — health 35', when: '4h ago', impact: 'Trust preserved', tone: 'green' },
      { title: 'Warmed Umbrella new champion (LinkedIn)', when: '2d ago', impact: 'Sentiment ↑', tone: 'green' },
      { title: 'FR-338 included in Contoso proposal', when: '3d ago', impact: 'Diff. established', tone: 'neutral' },
    ],
    watchlist: [
      { code: 'NI', name: 'Northwind Industries', score: 35, risk: 'high' },
      { code: 'CL', name: 'Contoso Logistics', score: 68, risk: 'medium' },
      { code: 'IL', name: 'Initech Ltd', score: 42, risk: 'high' },
      { code: 'UG', name: 'Umbrella Group', score: 62, risk: 'medium' },
      { code: 'WI', name: 'Wayne Industries', score: 78, risk: 'low' },
    ],
  },
  delivery: {
    greeting: 'Jordan Lee',
    summary: {
      headline: '3 projects at risk · 2 rescue plans active',
      sub: 'Northwind Phase 2 M3 slip flagged 21d early. Initech pilot go-live in doubt.',
    },
    actions: [
      { risk: 'high', title: 'Initech pilot recovery plan', account: 'Initech Ltd', metric: { label: 'Days to go-live', value: '9' }, status: 'Escalate today', cta: 'Approve' },
      { risk: 'medium', title: 'Reassign Priya from Umbrella green', account: 'Umbrella Group', metric: { label: 'Utilization', value: '138%' }, status: 'Approve reassign', cta: 'Auto-run' },
      { risk: 'low', title: 'Cross-train 1 consultant onto Stark', account: 'Stark Industries', metric: { label: 'Coverage gap', value: '2 wk' }, status: 'Plan for Q4', cta: 'Schedule' },
    ],
    signals: [
      { icon: '⚠', label: 'Projects at risk', value: '3', delta: '↑ 1 vs last 30d', tone: 'down' },
      { icon: '◷', label: 'Milestones 30d', value: '8', delta: '2 at risk', tone: 'down' },
      { icon: '⇗', label: 'On-track', value: '5', delta: '↑ 1 vs last 30d', tone: 'up' },
      { icon: '$', label: 'Rescues active', value: '2', delta: 'Northwind + Initech', tone: 'neutral' },
    ],
    cfi: [
      { team: 'Delivery', label: 'Active', value: '8 projects' },
      { team: 'Engineering', label: 'Blockers', value: '2 P1 escalated' },
      { team: 'Customer Success', label: 'Sentiment', value: 'Watch' },
    ],
    workflows: {
      in_progress: 6,
      awaiting: 2,
      completed: 3,
      list: [
        { name: 'Northwind Phase 2 rescue plan', status: 'In progress', tone: 'blue' },
        { name: 'Initech pilot go-live checklist', status: 'Awaiting approval', tone: 'yellow' },
        { name: 'Umbrella M1 discovery signoff', status: 'Completed', tone: 'green' },
      ],
    },
    decisions: [
      { title: 'Re-baselined Northwind M3 → 2026-07-09', when: '1w ago', impact: 'Steering cleared', tone: 'green' },
      { title: 'Escalated 2 Initech P1s to engineering', when: '3d ago', impact: 'Fixes queued', tone: 'green' },
      { title: 'Priya reassigned from Umbrella green', when: '4d ago', impact: 'Load 138 → 100%', tone: 'neutral' },
    ],
    watchlist: [
      { code: 'NI', name: 'Northwind Industries', score: 42, risk: 'high' },
      { code: 'IL', name: 'Initech Ltd', score: 38, risk: 'high' },
      { code: 'UG', name: 'Umbrella Group', score: 65, risk: 'medium' },
      { code: 'SI', name: 'Stark Industries', score: 72, risk: 'low' },
      { code: 'AW', name: 'Adventure Works', score: 80, risk: 'low' },
    ],
  },
};

type CmdAction = { risk: 'high' | 'medium' | 'low'; title: string; account: string; metric: { label: string; value: string }; status: string; cta: string };
type CmdWorkflow = { name: string; status: string; tone: 'blue' | 'yellow' | 'green' };
type CmdWatchlist = { code: string; name: string; score: number; risk: 'high' | 'medium' | 'low' };

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
        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">Hi, {persona} <span>👋</span></h1>
      </div>

      {/* Summary banner */}
      <div className="border rounded-lg p-5 flex items-start justify-between" style={{ background: 'var(--gd-primary-soft)', borderColor: 'var(--gd-primary-outline)' }}>
        <div className="flex gap-3">
          <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs shrink-0" style={{ background: 'var(--gd-primary)' }}>
            ✦
          </span>
          <div>
            <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase mb-1">
              GenX Summary · as of today
            </p>
            <p className="text-sm font-medium text-white">{d.summary.headline}</p>
            <p className="text-sm text-white/60 mt-1">{d.summary.sub}</p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('trace')}
          className="text-xs px-3 py-1.5 border border-white/10 rounded bg-transparent text-white hover:bg-white/5"
        >
          View full summary →
        </button>
      </div>

      {/* Priority Actions */}
      <div>
        <SectionTitle
          action={
            <button onClick={() => onNavigate('dashboard')} className="text-xs text-white/50 hover:text-white">
              View all actions →
            </button>
          }
        >
          Priority Actions <span className="text-white/40">({d.actions.length})</span>{' '}
          <span className="text-xs text-white/50 font-normal">Needs your attention</span>
        </SectionTitle>
        <div className="grid lg:grid-cols-3 gap-4">
          {d.actions.map((a, i) => {
            const tone = a.risk === 'high' ? 'red' : a.risk === 'medium' ? 'yellow' : 'green';
            const barColor = a.risk === 'high' ? 'var(--gd-danger)' : a.risk === 'medium' ? 'var(--gd-warning)' : 'var(--gd-success)';
            return (
              <Card key={i} className="p-5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: barColor }} />
                <div className="pl-2">
                  <Pill tone={tone}>{a.risk === 'high' ? 'HIGH RISK' : a.risk === 'medium' ? 'MEDIUM RISK' : 'LOW RISK'}</Pill>
                  <p className="text-base font-medium text-white mt-3">{a.title}</p>
                  <p className="text-xs text-white/50 mt-1">{a.account}</p>
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">{a.metric.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-semibold text-white">{a.metric.value}</p>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-white/50">Status</p>
                        <p className="text-xs text-white">{a.status}</p>
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
                        className="text-xs px-3 py-2 border border-white/10 rounded hover:bg-white/5 text-white bg-transparent"
                      >
                        View details
                      </button>
                      <button
                        onClick={() => openCtaDialog(i, a.cta, a.account)}
                        className="text-xs px-3 py-2 rounded text-white font-medium hover:brightness-110"
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
            <button onClick={() => onNavigate('dashboard')} className="text-xs text-white/50 hover:text-white">
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
              <button onClick={() => onNavigate('trace')} className="text-xs text-white/50 hover:text-white">
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
                <p className="text-xs text-white/50 mb-1">{c.team}</p>
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-white">{c.label}</p>
                  <p className="text-sm font-medium text-white">{c.value}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('trace')} className="text-xs text-white/50 hover:text-white">
                View all →
              </button>
            }
          >
            Active Workflows
          </SectionTitle>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-primary)' }}>{d.workflows.in_progress}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">In progress</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-warning)' }}>{d.workflows.awaiting}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Awaiting approval</p>
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--gd-success)' }}>{d.workflows.completed}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Completed today</p>
            </div>
          </div>
          <div className="space-y-2">
            {d.workflows.list.map((w) => (
              <button
                key={w.name}
                onClick={() => setDetailWorkflow(w)}
                className="w-full flex items-center justify-between text-xs py-1.5 px-2 -mx-2 rounded hover:bg-white/5 text-left"
              >
                <span className="text-white">{w.name}</span>
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
              <button onClick={() => onNavigate('trace')} className="text-xs text-white/50 hover:text-white">
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
              className="w-full flex items-start justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 -mx-2 rounded text-left transition-colors"
            >
              <div>
                <p className="text-sm text-white">{r.title}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{r.when}</p>
              </div>
              <p className={`text-xs font-medium ${r.tone === 'green' ? 'text-green-400' : 'text-white/60'}`}>{r.impact}</p>
            </button>
          ))}
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => onNavigate('dashboard')} className="text-xs text-white/50 hover:text-white">
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
              className="w-full flex items-center justify-between py-2.5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] px-2 -mx-2 rounded text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded flex items-center justify-center text-[10px] font-medium" style={{ background: 'var(--gd-muted)' }}>
                  {w.code}
                </span>
                <div>
                  <p className="text-sm text-white">{w.name}</p>
                  <Pill tone={w.risk === 'high' ? 'red' : w.risk === 'medium' ? 'yellow' : 'green'}>
                    {w.risk} risk
                  </Pill>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase text-white/50 tracking-wider">Score</p>
                <p className="text-sm font-medium text-white">{w.score}</p>
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
            <p className="text-sm text-white/70 mb-4">
              Schedule the workflow for <span className="text-white font-medium">{pendingCta.account}</span> to
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
          <p className="text-sm text-white/70">
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
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Account</p>
                <p className="text-white">{detailAction.account}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Risk</p>
                <Pill tone={detailAction.risk === 'high' ? 'red' : detailAction.risk === 'medium' ? 'yellow' : 'green'}>
                  {detailAction.risk}
                </Pill>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">{detailAction.metric.label}</p>
                <p className="text-white font-medium">{detailAction.metric.value}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Status</p>
                <p className="text-white">{detailAction.status}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10">
              <p className="text-xs text-white/60">
                Recommended action: <span className="text-white">{detailAction.cta}</span>. Click the {detailAction.cta}
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
              <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Status</p>
              <Pill tone={detailWorkflow.tone === 'blue' ? 'blue' : detailWorkflow.tone === 'yellow' ? 'yellow' : 'green'}>
                {detailWorkflow.status}
              </Pill>
            </div>
            <p className="text-white/70">
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
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Health score</p>
                <p className="text-3xl font-semibold text-white">{detailWatchlist.score}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Risk</p>
                <Pill tone={detailWatchlist.risk === 'high' ? 'red' : detailWatchlist.risk === 'medium' ? 'yellow' : 'green'}>
                  {detailWatchlist.risk} risk
                </Pill>
              </div>
            </div>
            <p className="text-white/70">
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
  const [tab, setTab] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [fRegion, setFRegion] = useState('all');
  const [fSegment, setFSegment] = useState('all');
  const [fRange, setFRange] = useState('30d');
  const [wPreset, setWPreset] = useState('kpi-tile');
  const [wTitle, setWTitle] = useState('');
  const [wQuery, setWQuery] = useState('');
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
    if (!wTitle.trim()) {
      setWErr('Widget title required');
      return;
    }
    if (!wQuery.trim()) {
      setWErr('Query required');
      return;
    }
    setWidgetOpen(false);
    onToast(`Widget added · "${wTitle}" (${wPreset})`);
    setWTitle('');
    setWQuery('');
    setWErr('');
  }
  const kpis: Record<SpaceKey, { label: string; value: string; delta: string; tone: 'up' | 'down' | 'neutral' }[]> = {
    'customer-success': [
      { label: 'Total customers', value: '1,248', delta: '↑ 12 (1.0%) vs last 30 days', tone: 'up' },
      { label: 'Revenue at risk', value: '$2.4M', delta: '↓ 18% vs last 30 days', tone: 'up' },
      { label: 'Avg health score', value: '72', delta: '↑ 5 pts vs last 30 days', tone: 'up' },
      { label: 'Churn risk (weighted)', value: '23%', delta: '↓ 8 pts vs last 30 days', tone: 'up' },
      { label: 'Expansion pipeline', value: '$1.8M', delta: '↑ 15% vs last 30 days', tone: 'up' },
      { label: 'Active workflows', value: '28', delta: '↑ 4 vs last 30 days', tone: 'up' },
    ],
    'customer-support': [
      { label: 'Total tickets (30d)', value: '9,126', delta: '↑ 4% vs last 30 days', tone: 'up' },
      { label: 'Open P0/P1', value: '4', delta: '↑ 1 vs last 7 days', tone: 'down' },
      { label: 'SLA compliance', value: '94%', delta: '↑ 2% vs last 30 days', tone: 'up' },
      { label: 'Avg MTTR', value: '4.1h', delta: '↓ 4.3h vs last 30 days', tone: 'up' },
      { label: 'AI deflection', value: '41%', delta: '↑ 6% vs last 30 days', tone: 'up' },
      { label: 'Reopens', value: '6%', delta: '↓ 12 pts vs last 30 days', tone: 'up' },
    ],
    sales: [
      { label: 'Q3 pipeline', value: '$2.9M', delta: '↑ 12% vs Q2', tone: 'up' },
      { label: 'Weighted', value: '$1.7M', delta: '↑ 8%', tone: 'up' },
      { label: 'Deals in flight', value: '5', delta: '↑ 1 vs last 30d', tone: 'up' },
      { label: 'At-risk deals', value: '2', delta: '↑ 1', tone: 'down' },
      { label: 'Win rate', value: '38%', delta: '↑ 4 pts', tone: 'up' },
      { label: 'Avg deal cycle', value: '58d', delta: '↓ 4d', tone: 'up' },
    ],
    delivery: [
      { label: 'Active projects', value: '8', delta: 'stable', tone: 'neutral' },
      { label: 'At risk', value: '3', delta: '↑ 1 vs last 30d', tone: 'down' },
      { label: 'On track', value: '5', delta: '↑ 1 vs last 30d', tone: 'up' },
      { label: 'Rescues active', value: '2', delta: 'Northwind + Initech', tone: 'neutral' },
      { label: 'Avg utilization', value: '92%', delta: '↓ 3 pts vs last 30d', tone: 'up' },
      { label: 'Milestones 30d', value: '8', delta: '2 at risk', tone: 'down' },
    ],
  };

  const distribution: Record<SpaceKey, { label: string; value: number; count: number; color: string }[]> = {
    'customer-success': [
      { label: 'Excellent (80–100)', value: 19, count: 220, color: 'var(--gd-success)' },
      { label: 'Good (60–79)', value: 44, count: 546, color: 'var(--gd-primary)' },
      { label: 'At Risk (40–59)', value: 25, count: 312, color: 'var(--gd-warning)' },
      { label: 'Critical (0–39)', value: 13, count: 170, color: 'var(--gd-danger)' },
    ],
    'customer-support': [
      { label: 'Resolved same day', value: 42, count: 3830, color: 'var(--gd-success)' },
      { label: 'Resolved <7d', value: 34, count: 3103, color: 'var(--gd-primary)' },
      { label: 'Aged 7–14d', value: 16, count: 1460, color: 'var(--gd-warning)' },
      { label: 'Aged >14d', value: 8, count: 733, color: 'var(--gd-danger)' },
    ],
    sales: [
      { label: 'Won', value: 22, count: 12, color: 'var(--gd-success)' },
      { label: 'Prop sent', value: 30, count: 16, color: 'var(--gd-primary)' },
      { label: 'Discovery', value: 34, count: 18, color: 'var(--gd-warning)' },
      { label: 'Lost', value: 14, count: 8, color: 'var(--gd-danger)' },
    ],
    delivery: [
      { label: 'Green', value: 62, count: 5, color: 'var(--gd-success)' },
      { label: 'Yellow', value: 25, count: 2, color: 'var(--gd-warning)' },
      { label: 'Red', value: 13, count: 1, color: 'var(--gd-danger)' },
    ],
  };

  const atRisk: Record<SpaceKey, { code: string; name: string; health: number; risk: string; trend: 'up' | 'down' | 'flat' }[]> = {
    'customer-success': [
      { code: 'NI', name: 'Northwind Industries', health: 35, risk: '$450K', trend: 'down' },
      { code: 'CL', name: 'Contoso Logistics', health: 40, risk: '$320K', trend: 'down' },
      { code: 'FM', name: 'Fabrikam Manufacturing', health: 45, risk: '$230K', trend: 'down' },
      { code: 'TT', name: 'Tailspin Toys', health: 48, risk: '$280K', trend: 'flat' },
      { code: 'WW', name: 'Wide World Importers', health: 58, risk: '$210K', trend: 'up' },
    ],
    'customer-support': [
      { code: 'NI', name: 'Northwind Industries', health: 35, risk: '4 P0/P1', trend: 'down' },
      { code: 'CL', name: 'Contoso Logistics', health: 42, risk: '3 open', trend: 'down' },
      { code: 'FM', name: 'Fabrikam Manufacturing', health: 58, risk: '2 open', trend: 'flat' },
      { code: 'TT', name: 'Tailspin Toys', health: 62, risk: '1 open', trend: 'up' },
      { code: 'WW', name: 'Wide World Importers', health: 74, risk: '0 open', trend: 'up' },
    ],
    sales: [
      { code: 'NI', name: 'Northwind Industries', health: 35, risk: '$480K deal', trend: 'down' },
      { code: 'CL', name: 'Contoso Logistics', health: 68, risk: '$820K renewal', trend: 'flat' },
      { code: 'IL', name: 'Initech Ltd', health: 42, risk: '$310K expand', trend: 'down' },
      { code: 'UG', name: 'Umbrella Group', health: 62, risk: '$540K renewal', trend: 'flat' },
      { code: 'WI', name: 'Wayne Industries', health: 78, risk: '$720K new', trend: 'up' },
    ],
    delivery: [
      { code: 'NI', name: 'Northwind Phase 2', health: 42, risk: 'M3 slip', trend: 'down' },
      { code: 'IL', name: 'Initech Pilot', health: 38, risk: '4 P1 open', trend: 'down' },
      { code: 'UG', name: 'Umbrella Discovery', health: 65, risk: 'On track', trend: 'flat' },
      { code: 'SI', name: 'Stark Config', health: 72, risk: 'clean', trend: 'up' },
      { code: 'AW', name: 'Adventure Works', health: 80, risk: 'clean', trend: 'up' },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Dashboards</h1>
          <p className="text-sm text-white/50 mt-1">Real-time views of your customers, health, and actions — {spaceLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="text-xs border border-white/10 rounded px-3 py-1.5 w-56 bg-transparent text-white placeholder:text-white/40"
            placeholder="Search dashboards..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') onToast('Search: coming soon');
            }}
          />
          <button
            onClick={() => setFiltersOpen(true)}
            className="text-xs px-3 py-1.5 border border-white/10 rounded text-white bg-transparent hover:bg-white/5"
          >
            Filters
          </button>
          <button
            onClick={() => setWidgetOpen(true)}
            className="text-xs px-3 py-1.5 rounded text-white font-medium hover:brightness-110"
            style={{ background: 'var(--gd-primary)' }}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {['Overview', 'Health', 'Renewals', 'Adoption', 'Engagement', 'Revenue', 'Support', 'Custom'].map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`text-sm py-2 border-b-2 ${
              tab === i ? 'border-white text-white font-medium' : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {kpis[space].map((k) => (
          <KpiTile key={k.label} icon="◆" label={k.label} value={k.value} delta={k.delta} tone={k.tone} />
        ))}
      </div>

      {/* Distribution + Trend + Revenue */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => setTab(1)} className="text-xs text-white/50 hover:text-white">
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
                  background: `conic-gradient(${distribution[space]
                    .map((d, i) => {
                      const prev = distribution[space].slice(0, i).reduce((a, b) => a + b.value, 0);
                      return `${d.color} ${prev}% ${prev + d.value}%`;
                    })
                    .join(', ')})`,
                }}
              />
              <div className="absolute inset-4 bg-black rounded-full flex flex-col items-center justify-center">
                <p className="text-lg font-semibold text-white">
                  {distribution[space].reduce((a, b) => a + b.count, 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider">Total</p>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {distribution[space].map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                  <span className="text-white/70 flex-1">{d.label}</span>
                  <span className="text-white font-medium">{d.count}</span>
                  <span className="text-white/50">({d.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-white">Trend</p>
            <select className="text-xs border border-white/10 rounded px-2 py-1 bg-black text-white">
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
          <div className="flex justify-between text-[10px] text-white/50 mt-2">
            <span>Day 1</span>
            <span>Day 15</span>
            <span>Today</span>
          </div>
        </Card>

        <Card className="p-5">
          <SectionTitle
            action={
              <button onClick={() => setTab(5)} className="text-xs text-white/50 hover:text-white">
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
                  <span className="text-white">{s.label}</span>
                  <span className="text-white font-medium">{s.amount}</span>
                </div>
                <div className="h-2 bg-black/5 rounded overflow-hidden">
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
            <button onClick={() => setTab(1)} className="text-xs text-white/50 hover:text-white">
              View all at-risk →
            </button>
          }
        >
          Top At-Risk
        </SectionTitle>
        <div className="grid grid-cols-12 gap-3 pb-3 border-b border-white/5 text-[10px] tracking-widest text-white/50 uppercase">
          <span className="col-span-5">Account</span>
          <span className="col-span-2 text-right">Health</span>
          <span className="col-span-3 text-right">Risk</span>
          <span className="col-span-2 text-right">Trend</span>
        </div>
        {atRisk[space].map((a) => (
          <button
            key={a.code}
            onClick={() => onOpenTrace(a.name)}
            className="w-full grid grid-cols-12 gap-3 py-3 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] rounded transition-colors text-left"
          >
            <div className="col-span-5 flex items-center gap-3">
              <span className="w-7 h-7 rounded flex items-center justify-center text-[10px] font-medium" style={{ background: 'var(--gd-muted)' }}>
                {a.code}
              </span>
              <span className="text-sm text-white">{a.name}</span>
            </div>
            <span className="col-span-2 text-right text-sm text-white">{a.health}</span>
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
        <Field label="Widget type">
          <Select value={wPreset} onChange={(e) => setWPreset(e.target.value)}>
            <option value="kpi-tile">KPI tile</option>
            <option value="line-chart">Line chart</option>
            <option value="bar-chart">Bar chart</option>
            <option value="donut">Donut chart</option>
            <option value="table">Data table</option>
            <option value="custom-query">Custom query (AI)</option>
          </Select>
        </Field>
        <Field label="Widget title">
          <Input value={wTitle} onChange={(e) => setWTitle(e.target.value)} placeholder="e.g. Weekly deflection rate" />
        </Field>
        <Field label="Data query">
          <textarea
            value={wQuery}
            onChange={(e) => setWQuery(e.target.value)}
            placeholder="e.g. Count tickets grouped by product for last 30 days"
            rows={3}
            className="w-full text-sm px-3 py-2 rounded bg-transparent text-white placeholder:text-white/40 outline-none focus:border-white/40"
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
            </Select>
          </Field>
          <Field label="Refresh">
            <label className="flex items-center gap-2 pt-2 text-sm text-white cursor-pointer">
              <input
                type="checkbox"
                checked={wForceRefresh}
                onChange={(e) => setWForceRefresh(e.target.checked)}
                className="cursor-pointer"
              />
              Force refresh (skip cache)
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

const ASK_DATA: Record<SpaceKey, BotAnswer> = {
  'customer-success': {
    question: 'Which customers are at risk?',
    timestamp: '11:47 AM',
    direct: {
      headline: '12 customers are at high risk of churn in the next 90 days.',
      sub: 'They represent $2.4M in revenue, 23% of total ARR.',
    },
    insights: [
      { label: 'At Risk Customers', value: '12', delta: '↑ 2 vs last 90 days' },
      { label: 'Revenue at Risk', value: '$2.4M', delta: '↑ 18% vs last 90 days' },
      { label: 'Avg. Health Score', value: '46', delta: '↓ 8 pts vs last 90 days' },
      { label: 'Churn Risk (Weighted)', value: '23%', delta: '↑ 6% vs last 90 days' },
    ],
    table: [
      { code: 'NI', name: 'Northwind Industries', health: 35, risk: 'High', arr: '$450K', factors: ['Usage ↓ 32%', 'Support ↑'], owner: 'Alex Morgan' },
      { code: 'CL', name: 'Contoso Logistics', health: 40, risk: 'High', arr: '$320K', factors: ['Low Adoption', 'Exec Change'], owner: 'Jordan Lee' },
      { code: 'FM', name: 'Fabrikam Manufacturing', health: 45, risk: 'High', arr: '$230K', factors: ['Usage ↓ 28%', 'Open Tickets'], owner: 'Taylor Kim' },
      { code: 'TT', name: 'Tailspin Toys', health: 48, risk: 'Medium', arr: '$280K', factors: ['Low Adoption'], owner: 'Casey Wong' },
      { code: 'WW', name: 'Wide World Importers', health: 50, risk: 'Medium', arr: '$210K', factors: ['Usage ↓ 15%'], owner: 'Jordan Lee' },
    ],
    reasoning: {
      summary: 'Based on 8 signals across usage, engagement, sentiment, support, and renewal indicators.',
      factors: ['Usage Decline', 'Low Feature Adoption', 'Support Activity', 'Sentiment Drop', 'Executive Change'],
    },
    followups: ['Show revenue at risk breakdown', 'Which segment is most at risk?', 'What actions should I take?', 'Compare vs last quarter'],
    keyInsightsRail: [
      { icon: '⚠', label: 'At Risk Customers', value: '12', delta: '↑ 2 vs last 90 days' },
      { icon: '$', label: 'Revenue at Risk', value: '$2.4M', delta: '↑ 18% vs last 90 days' },
      { icon: '◆', label: 'Avg. Health Score', value: '46', delta: '↓ 8 pts vs last 90 days' },
      { icon: '⇗', label: 'Churn Risk (Weighted)', value: '23%', delta: '↑ 6% vs last 90 days' },
    ],
    recommendedActions: [
      { title: 'Executive outreach for Northwind Industries', sub: 'Health score dropped 15 points due to usage decline and open tickets.', priority: 'high' },
      { title: 'Onboarding review for Contoso Logistics', sub: 'Low feature adoption detected. Recommend onboarding workshop.', priority: 'medium' },
      { title: 'Renewal planning for Fabrikam Manufacturing', sub: 'Contract up for renewal in 60 days. High churn probability.', priority: 'high' },
    ],
  },
  'customer-support': {
    question: 'Which tickets need my attention right now?',
    timestamp: '11:47 AM',
    direct: {
      headline: '4 P0/P1 tickets are active; 2 are at SLA risk in the next hour.',
      sub: 'Northwind FD-2104 is the most urgent. Auto-escalation ready.',
    },
    insights: [
      { label: 'Open P0/P1', value: '4', delta: '↑ 1 vs last 7 days' },
      { label: 'SLA at risk', value: '2', delta: '↑ 1 vs last 7 days' },
      { label: 'Avg MTTR', value: '4.1h', delta: '↓ 4.3h vs last 30 days' },
      { label: 'AI deflection', value: '41%', delta: '↑ 6% vs last 30 days' },
    ],
    table: [
      { code: 'NI', name: 'Northwind — FD-2104', health: 35, risk: 'P0', arr: '$450K acct', factors: ['sync hang', 'novelty 0.87'], owner: 'Priya R.' },
      { code: 'CL', name: 'Contoso — FD-2112', health: 45, risk: 'P1 Reopen', arr: '$320K acct', factors: ['export bug'], owner: 'Karen F.' },
      { code: 'FM', name: 'Fabrikam — FD-2108', health: 58, risk: 'P2', arr: '$230K acct', factors: ['PDF layout'], owner: 'Karen F.' },
      { code: 'TT', name: 'Tailspin — FD-2115', health: 62, risk: 'P2', arr: '$280K acct', factors: ['login flow'], owner: 'Aakash M.' },
      { code: 'IL', name: 'Initech — FD-2105', health: 42, risk: 'P1', arr: '$310K acct', factors: ['vendor API'], owner: 'Priya R.' },
    ],
    reasoning: {
      summary: 'Ranked by SLA urgency, priority, ticket age, and customer health signals.',
      factors: ['SLA remaining', 'Priority', 'Reopen count', 'Account health', 'Novelty score'],
    },
    followups: ['Show me the FD-2104 details', 'What deflection was possible?', 'Route to L2', 'Draft KB article for FD-2112'],
    keyInsightsRail: [
      { icon: '⚠', label: 'Open P0/P1', value: '4', delta: '↑ 1 vs last 7 days' },
      { icon: '◷', label: 'SLA at risk', value: '2', delta: '↑ 1 vs last 7 days' },
      { icon: '⇗', label: 'Avg MTTR', value: '4.1h', delta: '↓ 4.3h vs last 30 days' },
      { icon: '$', label: 'AI deflection', value: '41%', delta: '↑ 6% vs last 30 days' },
    ],
    recommendedActions: [
      { title: 'Escalate FD-2104 to sync module owner', sub: 'Novelty 0.87 + no KB match. Auto-approve per policy.', priority: 'high' },
      { title: 'Notify CSM Alex Morgan (Northwind)', sub: 'Health score at 35. Customer briefing needed.', priority: 'high' },
      { title: 'Draft KB article for reopen pattern', sub: '3 similar reopens in 30d. Content gap identified.', priority: 'medium' },
    ],
  },
  sales: {
    question: 'Which deals should I focus on today?',
    timestamp: '11:47 AM',
    direct: {
      headline: '2 deals need immediate attention out of 5 in flight.',
      sub: 'Northwind expansion at risk. Contoso renewal ready to send.',
    },
    insights: [
      { label: 'Q3 pipeline', value: '$2.9M', delta: '↑ 12% vs Q2' },
      { label: 'Weighted', value: '$1.7M', delta: '↑ 8%' },
      { label: 'At-risk deals', value: '2', delta: '↑ 1' },
      { label: 'Win rate', value: '38%', delta: '↑ 4 pts' },
    ],
    table: [
      { code: 'NI', name: 'Northwind — Expansion', health: 35, risk: 'Delay', arr: '$480K', factors: ['Health 35', 'FD-2104 P0'], owner: 'Taylor Kim' },
      { code: 'CL', name: 'Contoso — Renewal', health: 68, risk: 'Send', arr: '$820K', factors: ['FR-338 packaged'], owner: 'Taylor Kim' },
      { code: 'IL', name: 'Initech — Expansion', health: 42, risk: 'Hold', arr: '$310K', factors: ['Delivery slip'], owner: 'Casey Wong' },
      { code: 'UG', name: 'Umbrella — Renewal', health: 62, risk: 'Discovery', arr: '$540K', factors: ['New champion'], owner: 'Taylor Kim' },
      { code: 'WI', name: 'Wayne — New logo', health: 78, risk: 'Fast-track', arr: '$720K', factors: ['Pilot success'], owner: 'Ana K.' },
    ],
    reasoning: {
      summary: 'Ranked by deal size × win probability × time to close × account health signals.',
      factors: ['Deal size', 'Health score', 'Time to close', 'FR alignment', 'Champion strength'],
    },
    followups: ['Delay Northwind pitch — draft messaging', 'Contoso proposal — final review', 'Umbrella champion — LinkedIn signals', 'Q3 forecast update'],
    keyInsightsRail: [
      { icon: '⇗', label: 'Q3 pipeline', value: '$2.9M', delta: '↑ 12% vs Q2' },
      { icon: '$', label: 'Weighted', value: '$1.7M', delta: '↑ 8%' },
      { icon: '⚠', label: 'At-risk deals', value: '2', delta: '↑ 1' },
      { icon: '◷', label: 'Win rate', value: '38%', delta: '↑ 4 pts' },
    ],
    recommendedActions: [
      { title: 'Delay Northwind expansion 30 days', sub: 'FD-2104 P0 active. Trust-first play.', priority: 'high' },
      { title: 'Send Contoso renewal proposal', sub: 'FR-338 timeline included. Ready to close.', priority: 'high' },
      { title: 'Warm new Umbrella champion', sub: 'Prior champion left; new hire promoted internally.', priority: 'medium' },
    ],
  },
  delivery: {
    question: 'Which projects are at risk of missing milestones?',
    timestamp: '11:47 AM',
    direct: {
      headline: '3 projects at risk — Northwind Phase 2 and Initech pilot most critical.',
      sub: 'Rescue plans active for both. On-track projects: 5.',
    },
    insights: [
      { label: 'Projects at risk', value: '3', delta: '↑ 1 vs last 30d' },
      { label: 'On track', value: '5', delta: '↑ 1' },
      { label: 'Rescues active', value: '2', delta: 'Northwind + Initech' },
      { label: 'Milestones 30d', value: '8', delta: '2 at risk' },
    ],
    table: [
      { code: 'NI', name: 'Northwind Phase 2', health: 42, risk: 'M3 slip', arr: 'Rescue', factors: ['UAT delay', 'Utilization ↑'], owner: 'Priya B.' },
      { code: 'IL', name: 'Initech Pilot', health: 38, risk: 'Go-live risk', arr: 'Recovery', factors: ['4 P1 open'], owner: 'Jordan Lee' },
      { code: 'UG', name: 'Umbrella M1', health: 65, risk: 'On track', arr: '2 wk out', factors: ['clean'], owner: 'Priya B.' },
      { code: 'SI', name: 'Stark Config', health: 72, risk: 'On track', arr: '4 wk out', factors: ['clean'], owner: 'Aakash M.' },
      { code: 'AW', name: 'Adventure Works', health: 80, risk: 'On track', arr: '6 wk out', factors: ['clean'], owner: 'Casey Wong' },
    ],
    reasoning: {
      summary: 'Multi-signal risk model: milestone slippage + utilization + P-tickets + CSM sentiment.',
      factors: ['Milestone slip', 'Consultant load', 'Open P1s', 'CSM sentiment', 'Client feedback'],
    },
    followups: ['Show Northwind rescue plan', 'Initech go-live checklist', 'Reassign consultants', 'Q3 delivery forecast'],
    keyInsightsRail: [
      { icon: '⚠', label: 'Projects at risk', value: '3', delta: '↑ 1 vs last 30d' },
      { icon: '◷', label: 'On track', value: '5', delta: '↑ 1' },
      { icon: '⇗', label: 'Rescues active', value: '2', delta: 'Northwind + Initech' },
      { icon: '$', label: 'Milestones 30d', value: '8', delta: '2 at risk' },
    ],
    recommendedActions: [
      { title: 'Reassign Priya to Initech pilot recovery', sub: 'Umbrella green frees 40% capacity. Coverage plan ready.', priority: 'high' },
      { title: 'Escalate 2 Initech P1s to engineering', sub: 'Blockers for go-live. Both fixes in QA.', priority: 'high' },
      { title: 'Re-baseline Initech go-live with PMO', sub: 'New date proposal: +12d. Sentiment recovery plan attached.', priority: 'medium' },
    ],
  },
};

const ANSWER_BANK: Record<SpaceKey, BotAnswer[]> = {
  'customer-success': [
    {
      question: 'Show revenue at risk breakdown',
      direct: {
        headline: '$2.4M revenue at risk across 12 accounts, weighted 65% Enterprise.',
        sub: 'Northwind ($450K) + Contoso ($320K) + Fabrikam ($230K) = 42% of exposure.',
      },
      bullets: [
        'Enterprise: $1.6M (67%) — 6 accounts',
        'Mid Market: $560K (23%) — 4 accounts',
        'Strategic: $240K (10%) — 2 accounts',
        'Top driver: usage decline (-24% avg on impacted accounts)',
      ],
      followups: ['Which segment is most at risk?', 'What actions should I take?', 'How is Northwind doing?', 'Compare vs last quarter'],
    },
    {
      question: 'Which segment is most at risk?',
      direct: {
        headline: 'Enterprise segment carries the highest revenue exposure.',
        sub: '$1.6M at risk, 67% of total. Mid Market accounts are the largest count-wise but smaller in ARR.',
      },
      bullets: [
        'Enterprise: 6 accts × $267K avg ARR',
        'Mid Market: 4 accts × $140K avg ARR',
        'Strategic: 2 accts × $120K avg ARR',
        'Enterprise churn probability weighted 32% vs 18% MM',
      ],
      followups: ['Show me Enterprise account list', 'What is driving Enterprise churn?', 'Which customers are at risk?'],
    },
    {
      question: 'What actions should I take?',
      direct: {
        headline: '3 actions recommended for today. 2 auto-approved, 1 needs review.',
        sub: 'Executive outreach to Northwind is urgent — sync bug + health drop.',
      },
      bullets: [
        '1. Executive outreach — Northwind (health 35, $450K) · APPROVE',
        '2. Onboarding review — Contoso ($320K) · AUTO-RUN',
        '3. Pricing review opportunity — Fabrikam ($180K) · SCHEDULE',
      ],
      followups: ['Show Northwind outreach draft', 'What triggered Contoso onboarding review?', 'How is Northwind doing?'],
    },
    {
      question: 'How is Northwind doing?',
      direct: {
        headline: 'Northwind Industries is at high risk. Health score 35 (down 15 pts in 30d).',
        sub: '$450K ARR. Renewal in 143 days. Support tickets +3 in 24h. Marcus (CSM) is briefed.',
      },
      bullets: [
        'Health: 35 (was 50 last month)',
        'Usage: ↓ 32% (mRounds sync failing)',
        'Open tickets: 4 (1 P0)',
        'Renewal: 2027-01-15',
        'Recommended: executive outreach + workflow started',
      ],
      followups: ['Show Northwind rescue plan', 'What is FD-2104?', 'Show all at-risk accounts'],
    },
    {
      question: 'Compare vs last quarter',
      direct: {
        headline: 'Q3 shows worsening health but improving deflection and MTTR.',
        sub: 'At-risk accounts up from 8 to 12. NPS steady at 42. Deflection ↑ 12%.',
      },
      bullets: [
        'At-risk accounts: 8 → 12',
        'Revenue at risk: $1.8M → $2.4M',
        'Avg health: 68 → 46',
        'AI deflection: 29% → 41%',
        'NRR: 108% (target 110%)',
      ],
      followups: ['Show revenue at risk breakdown', 'What is driving health drop?', 'Which customers are at risk?'],
    },
  ],
  'customer-support': [
    {
      question: 'Show me FD-2104 details',
      direct: {
        headline: 'FD-2104: Northwind mRounds sync hang, P0, novelty 0.87.',
        sub: 'No KB match. Auto-escalated to sync module owner (Priya R.). Trace: trace_acme_p0_2104.',
      },
      bullets: [
        'Customer: Sarah Johnson · Northwind Industries',
        'Started: 05:45 AM — sync hangs at 87%, 12MB stuck',
        'Confidence: 0.87 novelty · 0.91 escalation confidence',
        'Actions: Jira ENG-4412 opened, Marcus (CSM) notified, portal banner up, KB draft queued',
        'Total workflow time: 1.42s',
      ],
      followups: ['Show me the full trace', 'What deflection was possible?', 'Route to L2'],
    },
    {
      question: 'What tickets can we deflect?',
      direct: {
        headline: '41% of L1 volume is deflectable this week — 12 KB matches + 3 known incidents.',
        sub: 'Top deflection candidates: PDF export, login issues, mRounds sync FAQ.',
      },
      bullets: [
        'Docs-solution deflection: 42% (last 7d)',
        'Known-issue deflection: 34%',
        'Feature-request routing: 100% (10 items)',
        'Reopen prevention: 3 patterns identified for KB',
      ],
      followups: ['Which product needs a KB update?', 'Show reopen patterns', 'Show me FD-2104 details'],
    },
    {
      question: 'Show me reopen patterns',
      direct: {
        headline: '3 reopen patterns identified in the last 30 days — all fixable via KB updates.',
        sub: 'mRounds sync reopens (3), export layout reopens (2), login flow reopens (2).',
      },
      bullets: [
        'Pattern 1: mRounds sync — 3 reopens, KB gap',
        'Pattern 2: PDF export layout — 2 reopens, workaround exists',
        'Pattern 3: Login flow SSO — 2 reopens, config issue',
        'Recommended: draft 3 KB articles, notify affected accounts',
      ],
      followups: ['Draft KB article for FD-2112', 'Which product needs a KB update?', 'What tickets can we deflect?'],
    },
    {
      question: 'Which product needs a KB update?',
      direct: {
        headline: 'mRounds has the highest KB gap — 3 reopen patterns + 1 novel escalation this week.',
        sub: 'Recommend prioritizing mRounds Sync + Export documentation refresh.',
      },
      bullets: [
        'mRounds: 3 KB gaps, 8 similar tickets',
        'mWorkOrder: 1 KB gap, 2 similar tickets',
        'mForms: no gaps this week',
        'Owner suggestion: Karen Foster + Priya R.',
      ],
      followups: ['Show reopen patterns', 'Draft KB article for FD-2112', 'What tickets can we deflect?'],
    },
  ],
  sales: [
    {
      question: 'Show Q3 forecast',
      direct: {
        headline: 'Q3 pipeline $2.9M, weighted $1.7M — 2 deals at risk.',
        sub: 'Northwind expansion delayed 30d. Contoso renewal ready to close. Wayne fast-track.',
      },
      bullets: [
        'Total pipeline: $2.9M (↑ 12% vs Q2)',
        'Weighted: $1.7M',
        'Deals in flight: 5',
        'At-risk: 2 (Northwind, Initech)',
        'Ready to close this month: $820K (Contoso renewal)',
      ],
      followups: ['What is Contoso deal status?', 'Where should I focus this week?', 'Which champion left?'],
    },
    {
      question: 'What is Contoso deal status?',
      direct: {
        headline: 'Contoso renewal in negotiation — $820K, likely close in 2 weeks.',
        sub: 'FR-338 timeline packaged into proposal. Health 68. Champion strong.',
      },
      bullets: [
        'Stage: Negotiation',
        'ARR: $820K',
        'Health: 68 (stable)',
        'Champion: Priya Menon (procurement)',
        'Next step: send final proposal',
      ],
      followups: ['Show Q3 forecast', 'Where should I focus this week?', 'Which champion left?'],
    },
    {
      question: 'Which champion left?',
      direct: {
        headline: 'Umbrella Group — prior champion left (LinkedIn signal).',
        sub: 'New champion promoted internally. Warmup workflow started.',
      },
      bullets: [
        'Account: Umbrella Group ($540K renewal)',
        'Signal: LinkedIn — prior champion new role',
        'New champion: promoted from internal team',
        'Warmup workflow: rec_s_04 in progress',
        'Renewal in 90d — proactive',
      ],
      followups: ['Show Q3 forecast', 'Where should I focus this week?'],
    },
    {
      question: 'Where should I focus this week?',
      direct: {
        headline: '3 priorities: Contoso close, Northwind hold, Umbrella warmup.',
        sub: 'Delay Wayne fast-track discussion to next week to avoid overloading calendar.',
      },
      bullets: [
        'Mon: Send Contoso final proposal',
        'Tue: Northwind — hold expansion, book support call',
        'Wed: Warm new Umbrella champion (LinkedIn intro)',
        'Thu: Wayne pilot review',
        'Fri: Q3 forecast review with leadership',
      ],
      followups: ['What is Contoso deal status?', 'Which champion left?', 'Show Q3 forecast'],
    },
  ],
  delivery: [
    {
      question: 'Show Northwind rescue plan',
      direct: {
        headline: 'Northwind Phase 2 M3 rescue on track — new UAT date 2026-07-09 (8-day slip).',
        sub: 'Reassigned Priya B. from Umbrella. 2 P1s escalated. CSM Marcus re-baselined with PMO.',
      },
      bullets: [
        'Original M3: 2026-07-01',
        'New M3: 2026-07-09 (+8d)',
        'Reassigned: Priya B. (was Umbrella green)',
        'Escalated: 2 P1 tickets to Eng',
        'Owner: Priya B. + Jordan L.',
      ],
      followups: ['What is Initech go-live risk?', 'Who has capacity?', 'Show milestone slip risk'],
    },
    {
      question: 'What is Initech go-live risk?',
      direct: {
        headline: 'Initech pilot go-live at high risk — 4 P1 tickets open, 9 days out.',
        sub: 'Recovery plan: escalate P1s, cross-train consultant, propose 12-day re-baseline.',
      },
      bullets: [
        'Project: Initech Pilot',
        'Go-live: 2026-07-22 (9 days)',
        'Open P1s: 4 (2 blockers)',
        'Consultant load: 138% (over-allocated)',
        'Recommended: re-baseline +12d, escalate P1s',
      ],
      followups: ['Show Northwind rescue plan', 'Who has capacity?', 'Show milestone slip risk'],
    },
    {
      question: 'Who has capacity?',
      direct: {
        headline: 'Priya B. freed 40% capacity (Umbrella green complete). Aakash M. 20% available.',
        sub: 'Casey Wong at 78%, tight but OK for cross-training.',
      },
      bullets: [
        'Priya B.: 40% free (Umbrella green freed)',
        'Aakash M.: 20% free',
        'Casey Wong: 22% free',
        'Jordan Lee: 15% (leadership overhead)',
        'Total spare hours this week: 62',
      ],
      followups: ['Show Northwind rescue plan', 'What is Initech go-live risk?', 'Show milestone slip risk'],
    },
    {
      question: 'Show milestone slip risk',
      direct: {
        headline: '2 milestones at slip risk in 30d: Northwind M3 (rescued) + Initech go-live.',
        sub: 'Watchlist wl_delivery_slip fires on multi-signal: tickets + utilization + sentiment.',
      },
      bullets: [
        'Northwind M3: 21d early warning, rescue active',
        'Initech go-live: 9d out, 4 P1 blockers',
        'On track: Umbrella M1, Stark config, Adventure Works',
        'Trigger threshold: 3+ signals firing',
      ],
      followups: ['Show Northwind rescue plan', 'What is Initech go-live risk?', 'Who has capacity?'],
    },
  ],
};

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
  const bank: BotAnswer[] = [ASK_DATA[space], ...ANSWER_BANK[space]];

  const exact = bank.find((a) => a.question.toLowerCase().trim() === norm);
  if (exact) return exact;

  const qTokens = tokenize(norm);
  if (!qTokens.length) return FALLBACK;

  let best: BotAnswer | null = null;
  let bestScore = 0;
  for (const a of bank) {
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
  const seed = ASK_DATA[space];
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'user', text: seed.question, ts: seed.timestamp || nowLabel() },
    { role: 'bot', text: '', answer: seed, ts: seed.timestamp || nowLabel() },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset on space change
    const s = ASK_DATA[space];
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
        <h1 className="text-xl font-semibold text-white mb-4">AI Agent</h1>

        <div ref={scrollRef} className="max-h-[70vh] overflow-y-auto pr-1 space-y-4">
          {messages.map((m, idx) => {
            if (m.role === 'user') {
              return (
                <div key={idx} className="flex justify-end">
                  <div className="rounded-2xl px-4 py-3 max-w-xl text-white" style={{ background: 'var(--gd-primary)' }}>
                    <p className="text-sm">{m.text}</p>
                    <p className="text-[10px] text-white/70 mt-1">{m.ts}</p>
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
            className="text-white/40 hover:text-white p-1"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToast('Voice input: coming soon')}
            className="text-white/40 hover:text-white p-1"
            title="Dictate"
          >
            <Mic className="w-4 h-4" />
          </button>
          <input
            className="flex-1 outline-none text-sm placeholder:text-white/40 bg-transparent text-white"
            placeholder="Ask anything about your business…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit(input);
            }}
          />
          <button
            onClick={() => submit(input)}
            className="w-8 h-8 rounded flex items-center justify-center text-white hover:brightness-110"
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
            <p className="text-sm font-medium text-white mb-3">Key Insights</p>
            {railInsights.map((i) => (
              <div key={i.label} className="py-2 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/50 text-xs">{i.icon}</span>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">{i.label}</p>
                </div>
                <p className="text-xl font-semibold text-white">{i.value}</p>
                <p className="text-[10px] text-green-400 mt-0.5">{i.delta}</p>
              </div>
            ))}
          </Card>
        )}

        {railActions && (
          <Card className="p-4">
            <p className="text-sm font-medium text-white mb-3">Recommended Actions</p>
            {railActions.map((a, i) => (
              <div key={i} className="py-3 border-b border-white/5 last:border-0">
                <p className="text-sm text-white mb-1">{a.title}</p>
                <p className="text-xs text-white/60 leading-relaxed mb-2">{a.sub}</p>
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
        <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs" style={{ background: 'var(--gd-primary)' }}>
          ✦
        </span>
        <span className="text-sm font-medium text-white">GenX Copilot</span>
        {a.table && <Pill tone="neutral">TABLE</Pill>}
        <span className="ml-auto text-xs text-white/50">{ts}</span>
      </div>

      {/* Direct answer */}
      <div className="rounded-lg p-4 mb-4" style={{ background: 'var(--gd-primary-soft)' }}>
        <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase mb-2">✦ Direct Answer</p>
        <p className="text-sm font-medium text-white">{a.direct.headline}</p>
        <p className="text-sm text-white/70 mt-1">{a.direct.sub}</p>
      </div>

      {/* Bullets (compact answers) */}
      {a.bullets && (
        <ul className="space-y-2 mb-6">
          {a.bullets.map((b) => (
            <li key={b} className="text-sm text-white/80 flex gap-2">
              <span className="text-white/40 mt-0.5">·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Insights */}
      {a.insights && (
        <>
          <p className="text-sm font-medium text-white mb-3">Key insights</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {a.insights.map((i) => (
              <div
                key={i.label}
                className="rounded-lg p-3"
                style={{ background: 'var(--gd-muted-2)', border: '1px solid var(--gd-border)' }}
              >
                <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">{i.label}</p>
                <p className="text-xl font-semibold text-white">{i.value}</p>
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
            <p className="text-sm font-medium text-white">Top At-Risk</p>
            <span className="text-xs text-white/50">{a.table.length} rows</span>
          </div>
          <div className="grid grid-cols-12 gap-2 pb-2 border-b border-white/5 text-[10px] uppercase tracking-wider text-white/50">
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
              className="w-full grid grid-cols-12 gap-2 py-2 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] rounded transition-colors text-left"
            >
              <div className="col-span-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded flex items-center justify-center text-[10px]" style={{ background: 'var(--gd-muted)' }}>
                  {r.code}
                </span>
                <span className="text-sm text-white">{r.name}</span>
              </div>
              <span className="col-span-1 text-right text-sm text-white">{r.health}</span>
              <span className="col-span-2 text-center">
                <Pill tone={r.risk === 'High' || r.risk === 'P0' || r.risk === 'Delay' || r.risk === 'M3 slip' || r.risk === 'Go-live risk' ? 'red' : r.risk === 'Medium' || r.risk === 'P1 Reopen' || r.risk === 'Hold' ? 'yellow' : 'green'}>
                  {r.risk}
                </Pill>
              </span>
              <span className="col-span-1 text-right text-sm text-white">{r.arr}</span>
              <span className="col-span-3 flex flex-wrap gap-1">
                {r.factors.map((f) => (
                  <span key={f} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--gd-muted)' }}>
                    {f}
                  </span>
                ))}
              </span>
              <span className="col-span-2 text-xs text-white/70">{r.owner}</span>
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
            <span className="text-white/50">ⓘ</span>
            <p className="text-sm font-medium text-white">Reasoning</p>
          </div>
          <p className="text-xs text-white/60 mb-3">{a.reasoning.summary}</p>
          <div className="flex flex-wrap gap-2">
            {a.reasoning.factors.map((f) => (
              <span key={f} className="text-[10px] px-2 py-1 rounded border border-white/10 text-white">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Followups — only on the most recent bot message */}
      {isLast && a.followups.length > 0 && (
        <>
          <p className="text-[10px] uppercase tracking-wider text-white/50 mt-6 mb-3">You might also ask</p>
          <div className="flex flex-wrap gap-2">
            {a.followups.map((f) => (
              <button
                key={f}
                onClick={() => onFollowup(f)}
                className="text-xs px-3 py-1.5 border border-white/10 rounded-full hover:bg-white/5 text-white bg-transparent"
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

const TRACE_DATA: Record<SpaceKey, {
  kpis: { icon: string; label: string; value: string }[];
  outcomes: { user: string; scenario: string; product: string; platform: string; confidence: number; ticket: string; status: string; feedback: string; when: string; tone: 'green' | 'blue' | 'yellow' | 'gray' }[];
  audit: { type: string; title: string; who: string; when: string }[];
  donut: { label: string; value: number; color: string }[];
  sources: { name: string; pct: number }[];
}> = {
  'customer-success': {
    kpis: [
      { icon: '◉', label: 'Total outcomes', value: '1,240' },
      { icon: '✉', label: 'Tickets created', value: '312' },
      { icon: '⇘', label: 'Deflection rate', value: '75%' },
      { icon: '%', label: 'Avg confidence', value: '81%' },
      { icon: '☺', label: 'Satisfied feedback', value: '89%' },
    ],
    outcomes: [
      { user: 'NIA chat is not responding', scenario: 'Docs solution', product: 'NIA', platform: 'Web', confidence: 92, ticket: '', status: 'Resolution Provided', feedback: 'satisfied', when: '7/13/2026 11:48 AM', tone: 'green' },
      { user: 'mRounds app crashes after sync', scenario: 'Known issue', product: 'mRounds', platform: 'iOS', confidence: 88, ticket: 'SUP-1041', status: 'Known Issue', feedback: '—', when: '7/13/2026 11:48 AM', tone: 'blue' },
      { user: 'mWorkOrder is freezing on Android', scenario: 'New / unclear', product: 'mWorkOrder', platform: 'Android', confidence: 74, ticket: 'SUP-1042', status: 'Open', feedback: '—', when: '7/13/2026 11:48 AM', tone: 'yellow' },
      { user: 'Add bulk export to mRounds reports', scenario: 'Feature req.', product: 'mRounds', platform: 'Web', confidence: 86, ticket: 'SUP-1043', status: 'Review In Progress', feedback: '—', when: '7/13/2026 11:48 AM', tone: 'gray' },
    ],
    audit: [
      { type: 'ACTION EXECUTED', title: 'Renewal outreach email sent to Northwind Industries', who: 'Alex Morgan — CSM Director', when: 'today · 10:24 AM' },
      { type: 'RECORD VIEWED', title: 'Viewed customer health dashboard - Northwind Industries', who: 'Taylor Kim — Sales Director', when: 'today · 10:15 AM' },
      { type: 'MEMORY UPDATED', title: 'Updated note: Executive call with Northwind leadership', who: 'Alex Morgan — CSM Director', when: 'yesterday · 04:35 PM' },
      { type: 'WORKFLOW TRIGGERED', title: 'Renewal Intervention workflow started', who: 'AI Agent — Workflow Engine', when: 'yesterday · 04:32 PM' },
      { type: 'RECORD DELETED', title: 'Deleted duplicate support ticket #12345', who: 'Jordan Lee — Support Manager', when: 'yesterday · 02:10 PM' },
    ],
    donut: [
      { label: 'Docs solution', value: 580, color: 'var(--gd-primary)' },
      { label: 'Known issue', value: 348, color: 'var(--gd-info)' },
      { label: 'New / unclear', value: 280, color: 'var(--gd-warning)' },
      { label: 'Feature req.', value: 32, color: 'var(--gd-neutral)' },
    ],
    sources: [
      { name: 'Salesforce', pct: 32 },
      { name: 'Zendesk', pct: 18 },
      { name: 'Product Analytics', pct: 15 },
      { name: 'NetSuite', pct: 12 },
    ],
  },
  'customer-support': {
    kpis: [
      { icon: '◉', label: 'Total outcomes', value: '9,126' },
      { icon: '✉', label: 'Tickets escalated', value: '312' },
      { icon: '⇘', label: 'Deflection rate', value: '41%' },
      { icon: '%', label: 'Avg confidence', value: '84%' },
      { icon: '☺', label: 'Satisfied feedback', value: '87%' },
    ],
    outcomes: [
      { user: 'How do I export mRounds compliance evidence as PDF?', scenario: 'Docs solution', product: 'mRounds', platform: 'Web', confidence: 94, ticket: '', status: 'Resolution Provided', feedback: 'satisfied', when: '7/13/2026 09:12 AM', tone: 'green' },
      { user: 'App crashes when I open Compliance tab on Android 14', scenario: 'Known issue', product: 'mRounds', platform: 'Android', confidence: 91, ticket: 'INC-887', status: 'Known Issue', feedback: 'satisfied', when: '7/13/2026 08:55 AM', tone: 'blue' },
      { user: 'mRounds sync hangs at 87%, 12MB stuck on device', scenario: 'New / unclear', product: 'mRounds', platform: 'iOS', confidence: 87, ticket: 'FD-2104', status: 'P0 Escalated', feedback: '—', when: '7/13/2026 05:47 AM', tone: 'yellow' },
      { user: 'Can we bulk-approve round evidence?', scenario: 'Feature req.', product: 'mRounds', platform: 'Web', confidence: 82, ticket: 'FR-338', status: 'Product Board', feedback: 'satisfied', when: '7/12/2026 03:14 PM', tone: 'gray' },
    ],
    audit: [
      { type: 'WORKFLOW TRIGGERED', title: 'P0 escalation workflow — FD-2104', who: 'AI Agent — Watchlist Engine', when: 'today · 05:47 AM' },
      { type: 'ACTION EXECUTED', title: 'Auto-created Jira ENG-4412 for sync module owner', who: 'AI Agent — Workflow Engine', when: 'today · 05:47 AM' },
      { type: 'RECORD VIEWED', title: 'Karen Foster opened FD-2104 trace', who: 'Karen Foster — Support Head', when: 'today · 06:10 AM' },
      { type: 'MEMORY UPDATED', title: 'Draft KB article seeded from FD-2104 pattern', who: 'AI Agent — KB Queue', when: 'today · 05:48 AM' },
      { type: 'ACTION EXECUTED', title: 'Deflected 12 mRounds sync queries via KB match', who: 'AI Agent — Deflection', when: 'today · 08:00 AM' },
    ],
    donut: [
      { label: 'Docs solution', value: 3830, color: 'var(--gd-primary)' },
      { label: 'Known issue', value: 3103, color: 'var(--gd-info)' },
      { label: 'New / unclear', value: 1460, color: 'var(--gd-warning)' },
      { label: 'Feature req.', value: 733, color: 'var(--gd-neutral)' },
    ],
    sources: [
      { name: 'Freshdesk (Incident Mgmt)', pct: 42 },
      { name: 'Jira', pct: 22 },
      { name: 'KB — Confluence', pct: 18 },
      { name: 'Product Telemetry', pct: 10 },
    ],
  },
  sales: {
    kpis: [
      { icon: '◉', label: 'Total outcomes', value: '624' },
      { icon: '✉', label: 'Deals shaped', value: '48' },
      { icon: '⇘', label: 'Delay rate', value: '18%' },
      { icon: '%', label: 'Avg confidence', value: '86%' },
      { icon: '☺', label: 'Rep confirmed', value: '91%' },
    ],
    outcomes: [
      { user: 'Should I pitch Northwind expansion today?', scenario: 'Delay rec.', product: 'CRM · Salesforce', platform: 'Web', confidence: 94, ticket: 'REC-401', status: 'Delayed 30d', feedback: 'satisfied', when: '7/13/2026 09:30 AM', tone: 'yellow' },
      { user: 'Contoso renewal — what to include?', scenario: 'Content aid', product: 'CRM · Salesforce', platform: 'Web', confidence: 89, ticket: '', status: 'Resolution Provided', feedback: 'satisfied', when: '7/12/2026 04:20 PM', tone: 'green' },
      { user: 'Umbrella new champion — how to warm?', scenario: 'Playbook', product: 'CRM · Salesforce', platform: 'Web', confidence: 82, ticket: 'REC-388', status: 'In Progress', feedback: '—', when: '7/11/2026 11:15 AM', tone: 'blue' },
      { user: 'Wayne Industries — pilot to close plan', scenario: 'Fast-track', product: 'CRM · Salesforce', platform: 'Web', confidence: 78, ticket: 'REC-372', status: 'Approved', feedback: 'satisfied', when: '7/10/2026 02:00 PM', tone: 'gray' },
    ],
    audit: [
      { type: 'ACTION EXECUTED', title: 'Recommended: delay Northwind expansion 30d', who: 'AI Agent — Reasoning Engine', when: 'today · 09:30 AM' },
      { type: 'RECORD VIEWED', title: 'Taylor Kim opened Contoso renewal proposal', who: 'Taylor Kim — AE Lead', when: 'today · 10:00 AM' },
      { type: 'MEMORY UPDATED', title: 'FR-338 timeline attached to Contoso proposal', who: 'Taylor Kim', when: 'yesterday · 04:20 PM' },
      { type: 'WORKFLOW TRIGGERED', title: 'Umbrella new-champion warmup workflow', who: 'AI Agent — Workflow Engine', when: 'yesterday · 11:15 AM' },
      { type: 'ACTION EXECUTED', title: 'Wayne pilot-to-close plan sent to Ana K.', who: 'Taylor Kim', when: '2 days ago' },
    ],
    donut: [
      { label: 'Delay rec.', value: 78, color: 'var(--gd-warning)' },
      { label: 'Content aid', value: 210, color: 'var(--gd-primary)' },
      { label: 'Playbook', value: 240, color: 'var(--gd-info)' },
      { label: 'Fast-track', value: 96, color: 'var(--gd-neutral)' },
    ],
    sources: [
      { name: 'Salesforce', pct: 48 },
      { name: 'LinkedIn Sales Nav', pct: 22 },
      { name: 'Product Analytics', pct: 18 },
      { name: 'Gong', pct: 12 },
    ],
  },
  delivery: {
    kpis: [
      { icon: '◉', label: 'Total outcomes', value: '486' },
      { icon: '✉', label: 'Rescues opened', value: '18' },
      { icon: '⇘', label: 'Slip caught early', value: '73%' },
      { icon: '%', label: 'Avg confidence', value: '85%' },
      { icon: '☺', label: 'PMO confirmed', value: '92%' },
    ],
    outcomes: [
      { user: 'Northwind Phase 2 — what is M3 risk?', scenario: 'Rescue plan', product: 'PSA · Kimble', platform: 'Web', confidence: 93, ticket: 'INIT-2104', status: 'Rescue Active', feedback: 'satisfied', when: '7/13/2026 08:20 AM', tone: 'yellow' },
      { user: 'Initech pilot — go/no-go?', scenario: 'Decision', product: 'PSA · Kimble', platform: 'Web', confidence: 88, ticket: 'INIT-2103', status: 'Go with plan', feedback: 'satisfied', when: '7/12/2026 11:30 AM', tone: 'blue' },
      { user: 'Umbrella M1 — approve signoff?', scenario: 'Approval', product: 'PSA · Kimble', platform: 'Web', confidence: 84, ticket: '', status: 'Approved', feedback: 'satisfied', when: '7/11/2026 03:15 PM', tone: 'green' },
      { user: 'Reassign Priya — capacity check', scenario: 'Playbook', product: 'PSA · Kimble', platform: 'Web', confidence: 79, ticket: 'REC-411', status: 'Auto-run', feedback: '—', when: '7/10/2026 09:45 AM', tone: 'gray' },
    ],
    audit: [
      { type: 'WORKFLOW TRIGGERED', title: 'Northwind Phase 2 rescue plan workflow', who: 'AI Agent — Watchlist Engine', when: 'today · 08:20 AM' },
      { type: 'ACTION EXECUTED', title: 'Re-baselined M3 date to 2026-07-09', who: 'Jordan Lee — Delivery Lead', when: '1 week ago' },
      { type: 'RECORD VIEWED', title: 'Priya B. opened Initech pilot dashboard', who: 'Priya Bhat — Consultant', when: 'today · 09:00 AM' },
      { type: 'ACTION EXECUTED', title: 'Escalated 2 Initech P1s to engineering', who: 'AI Agent', when: '3 days ago' },
      { type: 'MEMORY UPDATED', title: 'Recorded PMO feedback on rescue plan', who: 'Jordan Lee', when: '2 days ago' },
    ],
    donut: [
      { label: 'Rescue plan', value: 120, color: 'var(--gd-warning)' },
      { label: 'Decision', value: 168, color: 'var(--gd-primary)' },
      { label: 'Approval', value: 148, color: 'var(--gd-success)' },
      { label: 'Playbook', value: 50, color: 'var(--gd-neutral)' },
    ],
    sources: [
      { name: 'Kimble (PSA)', pct: 45 },
      { name: 'Jira', pct: 24 },
      { name: 'Slack sentiment', pct: 18 },
      { name: 'Timesheets', pct: 13 },
    ],
  },
};

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
          <h1 className="text-2xl font-semibold text-white">Trace / Audit</h1>
          <p className="text-sm text-white/50 mt-1">View system memory, decisions, actions, and audit trails.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFiltersOpen(true)}
            className="text-xs px-3 py-1.5 border border-white/10 rounded text-white bg-transparent hover:bg-white/5"
          >
            Filters
          </button>
          <button
            onClick={exportOutcomes}
            className="text-xs px-3 py-1.5 rounded text-white font-medium hover:brightness-110"
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
      <div className="flex gap-6 border-b border-white/10">
        {['Memory Explorer', 'Decision Log', 'Audit Trail', 'Data Lineage', 'Access History', 'Retention & Policies'].map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className={`text-sm py-2 border-b-2 ${
              activeTab === i ? 'border-white text-white font-medium' : 'border-transparent text-white/50 hover:text-white'
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
            <p className="text-sm font-medium text-white">Recent Outcomes ({filteredOutcomes.length})</p>
            <div className="flex items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs border border-white/10 rounded px-3 py-1 w-56 bg-transparent text-white placeholder:text-white/40"
                placeholder="Search outcomes..."
              />
              <select
                value={scenarioFilter}
                onChange={(e) => setScenarioFilter(e.target.value)}
                className="text-xs border border-white/10 rounded px-2 py-1 bg-black text-white"
              >
                <option value="all">All Types</option>
                {Array.from(new Set(d.outcomes.map((o) => o.scenario))).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                onChange={(e) => onToast(`Time range: ${e.target.value}`)}
                className="text-xs border border-white/10 rounded px-2 py-1 bg-black text-white"
              >
                <option value="all">All time</option>
                <option value="24h">Last 24h</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 pb-2 border-b border-white/5 text-[10px] uppercase tracking-wider text-white/50">
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
            <p className="text-sm text-white/50 py-8 text-center">No outcomes match filters</p>
          )}
          {filteredOutcomes.map((o, i) => (
            <button
              key={i}
              onClick={() => setSelected(o)}
              className="grid grid-cols-12 gap-2 py-3 border-b border-white/5 last:border-0 items-start text-xs w-full text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="col-span-4 text-white">{o.user}</span>
              <span className="col-span-1">
                <Pill tone={o.tone === 'green' ? 'green' : o.tone === 'blue' ? 'blue' : o.tone === 'yellow' ? 'yellow' : 'neutral'}>
                  {o.scenario}
                </Pill>
              </span>
              <span className="col-span-2 text-white">
                {o.product}
                <br />
                <span className="text-white/50">{o.platform}</span>
              </span>
              <span className="col-span-1 text-right text-white font-mono">{o.confidence}%</span>
              <span className="col-span-1 text-white font-mono">{o.ticket || '—'}</span>
              <span className="col-span-1">
                <span className="text-white">{o.status}</span>
              </span>
              <span className="col-span-1">
                {o.feedback === 'satisfied' ? <Pill tone="green">satisfied</Pill> : <span className="text-white/40">—</span>}
              </span>
              <span className="col-span-1 text-right text-white/50">{o.when.split(' ')[0]}<br /><span className="text-white/40">{o.when.split(' ').slice(1).join(' ')}</span></span>
            </button>
          ))}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-white">Audit Trail (Latest)</p>
            <button onClick={() => setActiveTab(2)} className="text-xs" style={{ color: 'var(--gd-primary)' }}>
              View all →
            </button>
          </div>
          {d.audit.map((a, i) => (
            <div key={i} className="py-3 border-b border-white/5 last:border-0">
              <div className="flex items-start gap-2">
                <span className="text-white/40 text-xs mt-0.5">⓪</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase mb-1">{a.type}</p>
                  <p className="text-sm text-white leading-tight">{a.title}</p>
                  <p className="text-xs text-white/50 mt-1">{a.who}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{a.when}</p>
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
          <p className="text-sm font-medium text-white mb-4">Outcomes by Scenario</p>
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
            <div className="absolute inset-4 bg-black rounded-full flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-white">{donutTotal.toLocaleString()}</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider">Total</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {d.donut.map((x) => (
              <div key={x.label} className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: x.color }} />
                <span className="text-white/70 flex-1">{x.label}</span>
                <span className="text-white font-medium">{x.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-white">Memory Retention</p>
            <button onClick={() => setActiveTab(5)} className="text-xs" style={{ color: 'var(--gd-primary)' }}>
              Manage →
            </button>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Average retention period</p>
          <p className="text-4xl font-semibold text-white">180</p>
          <p className="text-xs text-white/50 mb-4">days</p>
          <div className="text-xs space-y-2">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/50">Oldest memory</span>
              <span className="text-white">Mar 14, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Retention policy</span>
              <span className="text-white">Standard (180 days)</span>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-medium text-white mb-4">Top Data Sources</p>
          {d.sources.map((s) => (
            <div key={s.name} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white">{s.name}</span>
                <span className="text-white font-medium">{s.pct}%</span>
              </div>
              <div className="h-1.5 bg-black/5 rounded overflow-hidden">
                <div className="h-full" style={{ width: `${s.pct * 2}%`, background: 'var(--gd-primary)' }} />
              </div>
            </div>
          ))}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-white">Compliance &amp; Security</p>
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
            <div key={c.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-sm text-white">{c.name}</span>
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
    { id: 'evd_04', src: 'Salesforce', ref: 'Account · Northwind', d: 'ARR + renewal + health signals' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black border border-white/20 rounded-lg max-w-4xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-widest text-white/50 uppercase mb-2 font-mono">
              trace · {outcome.ticket || 'unassigned'}
            </p>
            <h2 className="text-lg font-semibold text-white">{outcome.user}</h2>
            <p className="text-sm text-white/60 mt-1">
              {outcome.scenario} · {outcome.product} · {outcome.platform} · confidence{' '}
              <span className="font-mono">{outcome.confidence}%</span>
            </p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white text-xl">
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
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">{x.l}</p>
                <p className="text-sm text-white">{x.v}</p>
              </div>
            ))}
          </div>

          {/* Weighted signals */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Weighted signals</p>
            {signals.map((s) => (
              <div key={s.label} className="mb-3">
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-white">{s.label}</p>
                  <p className="font-mono text-xs text-white">{s.weight.toFixed(2)}</p>
                </div>
                <div className="h-1 bg-white/10 rounded overflow-hidden">
                  <div className="h-full" style={{ width: `${s.weight * 100}%`, background: 'var(--gd-primary)' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Evidence rows */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Evidence rows</p>
            <div className="space-y-3">
              {evidence.map((e) => (
                <div key={e.id} className="border-b border-white/5 pb-3 last:border-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-white/50">{e.id}</span>
                    <span className="text-xs text-white/50">{e.src}</span>
                  </div>
                  <p className="font-mono text-sm text-white mb-1">{e.ref}</p>
                  <p className="text-xs text-white/60">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end gap-2">
            <button onClick={onClose} className="text-xs px-4 py-2 border border-white/10 rounded text-white bg-transparent hover:bg-white/5">
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
              className="text-xs px-4 py-2 rounded text-white font-medium hover:brightness-110"
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
