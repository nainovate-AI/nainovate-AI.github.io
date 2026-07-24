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
  PanelLeftClose,
  PanelLeftOpen,
  Send,
  Plus,
} from 'lucide-react';
import data from '@/data/public-sector.json';

type SpaceKey = 'building-permits' | 'public-health' | 'public-safety' | 'revenue';
type FeatureKey = 'command-center' | 'ask' | 'dashboard' | 'trace';

const FEATURES: { key: FeatureKey; label: string; Icon: typeof Home }[] = [
  { key: 'command-center', label: 'Command Center', Icon: Home },
  { key: 'ask', label: 'Ask', Icon: MessageSquare },
  { key: 'dashboard', label: 'Dashboard', Icon: BarChart3 },
  { key: 'trace', label: 'Trace / Audit', Icon: FileText },
];

type Widget = {
  id: string;
  type: string;
  title: string;
  columns?: string[];
  rows?: string[][];
  data?: { label: string; value: number }[];
};

export default function PublicSectorDemoHubClient() {
  const [activeSpace, setActiveSpace] = useState<SpaceKey>('building-permits');
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('command-center');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dashboardWidgets, setDashboardWidgets] = useState<Widget[]>([]);
  const pickerRef = useRef<HTMLDivElement>(null);

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

  const space = data.spaces.find((s) => s.key === activeSpace)!;
  const feature = FEATURES.find((f) => f.key === activeFeature)!;
  const kpis = (data.kpis as Record<string, { label: string; value: string; delta: string }[]>)[activeSpace] || [];

  const addWidget = (w: Widget) => {
    const id = `w-${Date.now()}`;
    setDashboardWidgets((prev) => [...prev, { ...w, id }]);
    showToast(`Added "${w.title}" to dashboard`);
    setActiveFeature('dashboard');
  };

  const removeWidget = (id: string) => {
    setDashboardWidgets((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <main
      className="theme-genx-decision min-h-screen"
      style={{ background: 'var(--gd-bg)', color: 'var(--gd-fg)' }}
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${sidebarCollapsed ? 'hidden' : 'flex'} w-[260px] border-r flex-col shrink-0`}
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
                <p className="text-[10px] text-white/50 leading-tight">Public Sector Workspace</p>
              </div>
            </div>
          </button>

          {/* Department picker */}
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

            {pickerOpen && (
              <div className="absolute top-0 left-full ml-2 z-50 w-[260px] bg-black border border-white/20 rounded-lg shadow-2xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5">
                  <p className="text-[10px] font-semibold text-white/50 tracking-widest uppercase">
                    Public Sector Demo
                  </p>
                </div>
                <div className="p-2">
                  {data.spaces.map((s) => {
                    const isActive = s.key === activeSpace;
                    return (
                      <button
                        key={s.key}
                        onClick={() => {
                          setActiveSpace(s.key as SpaceKey);
                          setPickerOpen(false);
                          setDashboardWidgets([]);
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
                {space.role[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">{space.role}</p>
                <p className="text-[10px] text-white/50 truncate">{space.department}</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-t border-white/10">
            <Link
              href="/"
              className="text-xs text-white/50 hover:text-white flex items-center gap-1"
            >
              <ChevronLeft className="w-3 h-3" /> Back to home
            </Link>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1 min-w-0">
          <div className="px-8 py-3 border-b border-white/10 flex items-center justify-between">
            <p className="text-sm text-white">{feature.label}</p>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white/60 hover:text-white p-1.5 rounded hover:bg-white/5"
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {sidebarCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            </button>
          </div>

          <div className="px-4 md:px-8 py-6 md:py-8 w-full">
            {activeFeature === 'command-center' && (
              <CommandCenter space={activeSpace} spaceLabel={space.label} hero={space.hero} kpis={kpis} onOpenAsk={() => setActiveFeature('ask')} />
            )}
            {activeFeature === 'ask' && (
              <Ask space={activeSpace} onAddWidget={addWidget} />
            )}
            {activeFeature === 'dashboard' && (
              <Dashboard space={activeSpace} kpis={kpis} widgets={dashboardWidgets} onRemove={removeWidget} onOpenAsk={() => setActiveFeature('ask')} />
            )}
            {activeFeature === 'trace' && (
              <Trace space={activeSpace} />
            )}
          </div>
        </section>
      </div>

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

/* ---------- Command Center ---------- */

function CommandCenter({
  spaceLabel,
  hero,
  kpis,
  onOpenAsk,
}: {
  space: SpaceKey;
  spaceLabel: string;
  hero: { headline: string; sub: string };
  kpis: { label: string; value: string; delta: string }[];
  onOpenAsk: () => void;
}) {
  const workflows = (data.workflows as Record<string, { id: string; title: string; when: string; status: string; steps: string[] }[]>)[
    'building-permits'
  ] || [];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">{spaceLabel} · Command Center</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{hero.headline}</h1>
        <p className="text-sm text-white/70">{hero.sub}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="border border-white/10 rounded-lg p-4 md:p-5" style={{ background: 'var(--gd-surface, rgba(255,255,255,0.02))' }}>
            <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">{k.label}</p>
            <p className="text-2xl md:text-3xl font-bold text-white">{k.value}</p>
            <p className="text-[10px] text-white/50 mt-1">{k.delta}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-white">Active Workflows</h2>
          <button
            onClick={onOpenAsk}
            className="text-xs text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded"
          >
            Ask about these →
          </button>
        </div>
        <div className="space-y-3">
          {workflows.map((w) => (
            <div key={w.id} className="border border-white/10 rounded-lg p-4 md:p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-white font-medium">{w.title}</p>
                  <p className="text-[10px] text-white/50 mt-1">{w.when}</p>
                </div>
                <span
                  className={`text-[10px] tracking-widest uppercase px-2 py-1 rounded ${
                    w.status === 'approved'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : w.status === 'flagged'
                      ? 'bg-rose-500/20 text-rose-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {w.status}
                </span>
              </div>
              <div className="grid gap-1.5 pt-3 border-t border-white/5">
                {w.steps.map((s, i) => (
                  <p key={i} className="text-xs text-white/70">
                    · {s}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Ask ---------- */

type Message =
  | { role: 'user'; text: string }
  | { role: 'assistant'; text: string; widget?: Widget };

function Ask({ space, onAddWidget }: { space: SpaceKey; onAddWidget: (w: Widget) => void }) {
  const suggestions = (data.askSuggestions as Record<string, string[]>)[space] || [];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    const q: Message = { role: 'user', text };
    // find matching canned answer
    const match = data.cannedAnswers.find((a) =>
      new RegExp(a.match, 'i').test(text)
    );
    const answer: Message = match
      ? { role: 'assistant', text: match.answer, widget: match.widget as Widget }
      : {
          role: 'assistant',
          text:
            "I don't have a canned answer for that in the demo. Try one of the suggestions to see how Add Widget works.",
        };
    setMessages((prev) => [...prev, q, answer]);
    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">Ask</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">What do you want to know?</h1>
        <p className="text-sm text-white/60 mt-2">
          Ask a question. GenX suggests a widget you can drop onto the dashboard.
        </p>
      </div>

      {messages.length === 0 && (
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-left text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/30 rounded-lg p-3"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4 mb-6">
        {messages.map((m, i) => (
          <div key={i}>
            {m.role === 'user' ? (
              <div className="flex justify-end">
                <div className="max-w-[80%] px-4 py-2.5 rounded-lg text-sm text-white" style={{ background: 'var(--gd-primary)' }}>
                  {m.text}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="max-w-[85%] px-4 py-2.5 rounded-lg text-sm text-white border border-white/10 bg-white/5">
                  {m.text}
                </div>
                {m.widget && (
                  <div className="max-w-[85%] border border-white/15 rounded-lg p-4 bg-white/[0.03]">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-medium text-white/80">{m.widget.title}</p>
                      <button
                        onClick={() => m.widget && onAddWidget(m.widget)}
                        className="inline-flex items-center gap-1 text-xs text-white border border-white/30 hover:border-white/60 hover:bg-white/5 px-2.5 py-1 rounded"
                      >
                        <Plus className="w-3 h-3" /> Add Widget
                      </button>
                    </div>
                    <WidgetPreview widget={m.widget} />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border border-white/15 rounded-lg px-3 py-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />
        <button type="submit" className="text-white/70 hover:text-white p-1.5">
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

/* ---------- Dashboard ---------- */

function Dashboard({
  kpis,
  widgets,
  onRemove,
  onOpenAsk,
}: {
  space: SpaceKey;
  kpis: { label: string; value: string; delta: string }[];
  widgets: Widget[];
  onRemove: (id: string) => void;
  onOpenAsk: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">Dashboard</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Live view</h1>
        </div>
        <button
          onClick={onOpenAsk}
          className="text-xs text-white border border-white/30 hover:border-white/60 hover:bg-white/5 px-3 py-1.5 rounded whitespace-nowrap"
        >
          + Ask &amp; add widget
        </button>
      </div>

      {/* KPI section (default) */}
      <section>
        <p className="text-[10px] tracking-widest uppercase text-white/50 mb-3">KPIs</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="border border-white/10 rounded-lg p-4">
              <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">{k.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-white">{k.value}</p>
              <p className="text-[10px] text-white/50 mt-1">{k.delta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Widgets section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] tracking-widest uppercase text-white/50">Widgets</p>
          <p className="text-[10px] text-white/40">
            {widgets.length === 0 ? 'No widgets yet — add from Ask' : `${widgets.length} added`}
          </p>
        </div>
        {widgets.length === 0 ? (
          <div className="border border-dashed border-white/15 rounded-lg p-8 text-center">
            <p className="text-sm text-white/60 mb-3">Dashboard is empty. Ask a question to add a widget.</p>
            <button
              onClick={onOpenAsk}
              className="text-xs text-white border border-white/30 hover:border-white/60 hover:bg-white/5 px-3 py-1.5 rounded"
            >
              Open Ask →
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {widgets.map((w) => (
              <div key={w.id} className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-white/80">{w.title}</p>
                  <button
                    onClick={() => onRemove(w.id)}
                    className="text-[10px] text-white/40 hover:text-white/80"
                  >
                    Remove
                  </button>
                </div>
                <WidgetPreview widget={w} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ---------- Trace / Audit ---------- */

function Trace({ space }: { space: SpaceKey }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <p className="text-[10px] tracking-widest uppercase text-white/50 mb-2">Trace / Audit</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Every decision, explainable.</h1>
        <p className="text-sm text-white/60 mt-2">
          Full audit trail for cross-department actions in {space.replace('-', ' ')}.
        </p>
      </div>
      <div className="border border-white/10 rounded-lg divide-y divide-white/5">
        {[
          { t: 'Permit BP-2841 escalated to Fire Review', when: '12m ago', actor: 'AI Agent' },
          { t: 'Water capacity confirmed for BP-2815', when: '48m ago', actor: 'Water Dept' },
          { t: 'Rejection notice sent for BP-2799', when: '2h ago', actor: 'Planning' },
          { t: 'Revenue fee assessed for BP-2839', when: '3h ago', actor: 'Revenue' },
        ].map((e, i) => (
          <div key={i} className="p-4 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[10px] text-white/60 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white">{e.t}</p>
              <p className="text-[10px] text-white/50 mt-1">
                {e.actor} · {e.when}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Widget preview ---------- */

function WidgetPreview({ widget }: { widget: Widget }) {
  if (widget.type === 'table' && widget.columns && widget.rows) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-white/50 border-b border-white/10">
              {widget.columns.map((c) => (
                <th key={c} className="text-left font-medium px-3 py-2 uppercase tracking-widest text-[10px]">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {widget.rows.map((row, i) => (
              <tr key={i} className="border-b border-white/5 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-2 text-white/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (widget.type === 'bar' && widget.data) {
    const max = Math.max(...widget.data.map((d) => d.value));
    return (
      <div className="space-y-2">
        {widget.data.map((d) => (
          <div key={d.label}>
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-white/70">{d.label}</span>
              <span className="text-white/50">{d.value}</span>
            </div>
            <div className="h-2 bg-white/5 rounded overflow-hidden">
              <div
                className="h-full rounded"
                style={{ width: `${(d.value / max) * 100}%`, background: 'var(--gd-primary)' }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <p className="text-xs text-white/50">Widget type not supported: {widget.type}</p>;
}
