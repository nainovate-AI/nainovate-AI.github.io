'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import {
  FileText,
  Clock,
  CheckCircle2,
  TrendingUp,
  Hourglass,
  XCircle,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Send,
  X,
  MessageCircle,
} from 'lucide-react';
import data from '@/data/building-permits/dashboards.json';

type Msg = { role: 'user' | 'assistant'; content: string };

const IconFor = ({ name, className }: { name: string; className?: string }) => {
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    file: FileText,
    clock: Clock,
    check: CheckCircle2,
    trend: TrendingUp,
    hour: Hourglass,
    x: XCircle,
  };
  const C = map[name] || FileText;
  return <C className={className} />;
};

/* ── Close button (top-right of every widget) ───────────────────────── */
function CloseX({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-2 right-2 w-6 h-6 rounded-md text-white/40 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors z-10"
      aria-label="Remove widget"
      title="Remove"
    >
      <X className="w-3.5 h-3.5" />
    </button>
  );
}

/* ── Mini sparkline ─────────────────────────────────────────────────── */
function Sparkline({ values, color, variant = 'line' }: { values: number[]; color: string; variant?: 'line' | 'bar' }) {
  const w = 100;
  const h = 32;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  if (variant === 'bar') {
    const bw = w / values.length - 1.5;
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8">
        {values.map((v, i) => {
          const bh = ((v - min) / span) * h;
          return <rect key={i} x={i * (bw + 1.5)} y={h - bh} width={bw} height={bh} fill={color} rx="1" opacity="0.9" />;
        })}
      </svg>
    );
  }
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const line = `M ${pts.join(' L ')}`;
  const area = `${line} L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8">
      <defs>
        <linearGradient id={`spark-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spark-${color.replace('#','')})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/* ── KPI tile ───────────────────────────────────────────────────────── */
function KpiTile({ tile, onClose }: { tile: (typeof data.kpiTiles)[number]; onClose: () => void }) {
  const isUp = tile.deltaDir === 'up';
  const isBar = tile.icon === 'trend';
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <CloseX onClose={onClose} />
      <div className="flex items-start gap-4 pr-6">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${tile.color}22`, color: tile.color }}
        >
          <IconFor name={tile.icon} className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-white/60">{tile.label}</p>
          <p className="text-2xl font-semibold text-white leading-tight">{tile.value}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className={`inline-flex items-center gap-1 text-xs ${isUp ? 'text-emerald-400' : 'text-amber-400'}`}>
          {isUp ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {tile.delta}
        </span>
        <span className="text-xs text-white/50">{tile.deltaNote}</span>
        <div className="ml-auto w-24">
          <Sparkline values={tile.spark} color={tile.color} variant={isBar ? 'bar' : 'line'} />
        </div>
      </div>
    </div>
  );
}

/* ── Donut ──────────────────────────────────────────────────────────── */
function Donut({
  items,
  centerTop,
  centerBottom,
  size = 180,
  ring = 22,
}: {
  items: { label: string; value: number; color: string }[];
  centerTop: string;
  centerBottom: string;
  size?: number;
  ring?: number;
}) {
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  const r = (size - ring) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={ring} />
        {items.map((it, i) => {
          const frac = it.value / total;
          const dash = c * frac;
          const gap = c - dash;
          const rot = (offset / c) * 360 - 90;
          offset += dash;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={it.color}
              strokeWidth={ring}
              strokeDasharray={`${dash} ${gap}`}
              transform={`rotate(${rot} ${size / 2} ${size / 2})`}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-semibold text-white leading-tight">{centerTop}</p>
        <p className="text-xs text-white/50">{centerBottom}</p>
      </div>
    </div>
  );
}

/* ── Legend row list ────────────────────────────────────────────────── */
function LegendRows({ items }: { items: { label: string; value: number; percent: number; color: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-3 text-sm">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: it.color }} />
          <span className="text-white/80 flex-1">{it.label}</span>
          <span className="text-white font-medium tabular-nums">{it.value.toLocaleString()}</span>
          <span className="text-white/50 tabular-nums text-xs">({it.percent}%)</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Horizontal bar list ────────────────────────────────────────────── */
function BarList({ items, max }: { items: { label: string; value: number; color: string }[]; max: number }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.label} className="grid grid-cols-[80px_1fr_40px] items-center gap-3 text-sm">
          <span className="text-white/80">{it.label}</span>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${(it.value / max) * 100}%`, background: it.color }}
            />
          </div>
          <span className="text-white text-right tabular-nums font-medium">{it.value}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Line chart ─────────────────────────────────────────────────────── */
function LineChart({ labels, values }: { labels: string[]; values: number[] }) {
  const w = 520;
  const h = 240;
  const pad = { l: 40, r: 12, t: 10, b: 28 };
  const iw = w - pad.l - pad.r;
  const ih = h - pad.t - pad.b;
  const min = 0;
  const max = Math.ceil(Math.max(...values) / 250) * 250;
  const yTicks = [0, 250, 500, 750, 1000, 1250].filter((t) => t <= max);
  const pts = values.map((v, i) => {
    const x = pad.l + (i / (values.length - 1)) * iw;
    const y = pad.t + ih - ((v - min) / (max - min)) * ih;
    return { x, y, v };
  });
  const line = `M ${pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')}`;
  const area = `${line} L ${pts[pts.length - 1].x},${pad.t + ih} L ${pts[0].x},${pad.t + ih} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-56">
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {yTicks.map((t) => {
        const y = pad.t + ih - ((t - min) / (max - min)) * ih;
        return (
          <g key={t}>
            <line x1={pad.l} y1={y} x2={w - pad.r} y2={y} stroke="rgba(255,255,255,0.06)" />
            <text x={pad.l - 8} y={y + 3} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.4)">
              {t.toLocaleString()}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#trendFill)" />
      <path d={line} fill="none" stroke="#8B5CF6" strokeWidth="2" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#8B5CF6" stroke="#0B0B10" strokeWidth="2" />
      ))}
      {labels.map((l, i) => (
        <text
          key={l}
          x={pad.l + (i / (labels.length - 1)) * iw}
          y={h - 8}
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.5)"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

/* ── Small tile inside Applications Summary ─────────────────────────── */
function SummaryTile({ tile }: { tile: { label: string; value: string; icon: string; color: string } }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
        style={{ background: `${tile.color}22`, color: tile.color }}
      >
        <IconFor name={tile.icon} className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className="text-lg font-semibold text-white leading-tight">{tile.value}</p>
        <p className="text-[11px] text-white/60 truncate">{tile.label}</p>
      </div>
    </div>
  );
}

/* ── Assistant chat popup (old-style floating) ──────────────────────── */
function AssistantChatPopup({
  onClose,
  onReveal,
}: {
  onClose: () => void;
  onReveal: (ids: string[]) => void;
}) {
  const a = data.assistant;
  const [messages, setMessages] = useState<Msg[]>(a.seedConversation as Msg[]);
  const [input, setInput] = useState('');
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const reply =
      (a.cannedReplies as Record<string, string>)[text] ||
      "Try one of the quick prompts below — I'll surface the matching chart.";
    const targets = (a.widgetMap as Record<string, string[]>)[text] || [];
    if (targets.length > 0) onReveal(targets);
    setMessages((prev) => [...prev, { role: 'user', content: text }, { role: 'assistant', content: reply }]);
    setUsedPrompts((prev) => {
      const next = new Set(prev);
      next.add(text);
      return next;
    });
    setInput('');
  };

  const remainingPrompts = a.quickPrompts.filter((q) => !usedPrompts.has(q));

  return (
    <div className="fixed bottom-6 right-6 w-[380px] h-[500px] bg-black border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-white">{a.title}</span>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl bg-[#6366F1] text-white text-xs px-4 py-2">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-start">
              <div className="max-w-[85%] rounded-xl bg-white/10 text-white text-sm px-3 py-2">
                {m.content}
              </div>
            </div>
          ),
        )}
      </div>

      {/* Quick prompts */}
      {remainingPrompts.length > 0 && (
        <div className="px-4 py-2 border-t border-white/10">
          <div className="flex gap-1.5 overflow-x-auto scrollbar-thin -mx-1 px-1 pb-1">
            {remainingPrompts.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="shrink-0 whitespace-nowrap px-2.5 py-1 text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-white/10">
        <div className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-full px-3 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask for analytics..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
          />
          <button
            onClick={() => send()}
            disabled={!input.trim()}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main dashboard ─────────────────────────────────────────────────── */
type WidgetId =
  | 'kpi-total'
  | 'kpi-time'
  | 'kpi-approval'
  | 'kpi-vs'
  | 'kpi-pending'
  | 'kpi-approved'
  | 'kpi-rejected'
  | 'byType'
  | 'byDepartment'
  | 'byZone'
  | 'avgTime'
  | 'monthlyTrends';

const DEFAULT_VISIBLE: WidgetId[] = ['kpi-total', 'kpi-approval', 'byType', 'monthlyTrends'];

export default function BuildingPermitsDashboard() {
  const [chatOpen, setChatOpen] = useState(false);
  const [visible, setVisible] = useState<Set<WidgetId>>(new Set(DEFAULT_VISIBLE));
  const isShown = (id: WidgetId) => visible.has(id);
  const hide = (id: WidgetId) =>
    setVisible((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  const reveal = (ids: string[]) =>
    setVisible((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id as WidgetId));
      return next;
    });

  const maxProcTime = useMemo(
    () => Math.max(...data.avgProcessingTime.items.map((i) => i.value)),
    [],
  );

  const kpiIds: WidgetId[] = ['kpi-total', 'kpi-time', 'kpi-approval', 'kpi-vs', 'kpi-pending', 'kpi-approved', 'kpi-rejected'];

  return (
    <div className="w-full min-h-[calc(100vh-56px)]">
      <div className="p-4 md:p-6 overflow-y-auto">
        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {data.kpiTiles.map((t, i) => {
            const id = kpiIds[i];
            if (!isShown(id)) return null;
            return <KpiTile key={id} tile={t} onClose={() => hide(id)} />;
          })}
        </div>

        {/* Charts — single responsive grid (2/3 per row, wrap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {isShown('byType') && (
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <CloseX onClose={() => hide('byType')} />
              <p className="text-sm font-medium text-white mb-4 pr-6">{data.byBuildingType.title}</p>
              <div className="flex items-center gap-5">
                <Donut
                  items={data.byBuildingType.items}
                  centerTop={data.byBuildingType.total.toLocaleString()}
                  centerBottom="Total"
                  size={170}
                />
                <div className="flex-1 min-w-0">
                  <LegendRows items={data.byBuildingType.items} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/60">{data.byBuildingType.totalLabel}</span>
                <span className="text-white font-medium tabular-nums">
                  {data.byBuildingType.totalValue.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {isShown('byDepartment') && (
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <CloseX onClose={() => hide('byDepartment')} />
              <p className="text-sm font-medium text-white mb-4 pr-6">{data.byDepartment.title}</p>
              <div className="flex items-center gap-5">
                <Donut items={data.byDepartment.items} centerTop="" centerBottom="" size={170} ring={16} />
                <div className="flex-1 min-w-0">
                  <LegendRows items={data.byDepartment.items} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/60">{data.byDepartment.totalLabel}</span>
                <span className="text-white font-medium tabular-nums">
                  {data.byDepartment.totalValue.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {isShown('byZone') && (
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <CloseX onClose={() => hide('byZone')} />
              <p className="text-sm font-medium text-white mb-4 pr-6">{data.byZone.title}</p>
              <div className="flex items-center gap-5">
                <Donut items={data.byZone.items} centerTop="" centerBottom="" size={170} />
                <div className="flex-1 min-w-0">
                  <LegendRows items={data.byZone.items} />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/60">{data.byZone.totalLabel}</span>
                <span className="text-white font-medium tabular-nums">
                  {data.byZone.totalValue.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {isShown('avgTime') && (
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5 flex flex-col">
              <CloseX onClose={() => hide('avgTime')} />
              <p className="text-sm font-medium text-white mb-4 pr-6">{data.avgProcessingTime.title}</p>
              <BarList items={data.avgProcessingTime.items} max={maxProcTime + 8} />
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white/50">{data.avgProcessingTime.overall.label}</p>
                  <p className="text-lg font-semibold text-white leading-tight">
                    {data.avgProcessingTime.overall.value}
                  </p>
                </div>
                <div className="text-right">
                  <p className="inline-flex items-center gap-1 text-xs text-amber-400">
                    <ArrowDown className="w-3 h-3" />
                    {data.avgProcessingTime.overall.delta}
                  </p>
                  <p className="text-[10px] text-white/50">{data.avgProcessingTime.overall.deltaNote}</p>
                </div>
              </div>
            </div>
          )}

          {isShown('monthlyTrends') && (
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <CloseX onClose={() => hide('monthlyTrends')} />
              <p className="text-sm font-medium text-white mb-4 pr-6">{data.monthlyTrends.title}</p>
              <LineChart labels={data.monthlyTrends.labels} values={data.monthlyTrends.values} />
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                {data.monthlyTrends.seriesLabel}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Chat: floating popup + FAB (old style) */}
      {chatOpen ? (
        <AssistantChatPopup onClose={() => setChatOpen(false)} onReveal={reveal} />
      ) : (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Open assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
