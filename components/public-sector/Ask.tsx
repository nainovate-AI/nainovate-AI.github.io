'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import {
  Sparkles,
  FileText,
  Folder,
  Clock,
  Calculator,
  ShieldCheck,
  ChevronRight,
  Send,
  Shield,
  MapPin,
  Calendar,
  Hourglass,
  CheckCircle2,
  MoreHorizontal,
  CheckCheck,
  Zap,
  Scale,
  FileCheck,
  Wallet,
  Building2,
  Flame,
  Leaf,
} from 'lucide-react';
import askPack from '@/data/demo/public-sector/building-permits/ask.json';

type IconCmp = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const ICON_MAP: Record<string, IconCmp> = {
  Sparkles,
  FileText,
  Folder,
  Clock,
  Calculator,
  ShieldCheck,
  ChevronRight,
  Send,
  Shield,
  MapPin,
  Calendar,
  Hourglass,
  CheckCircle2,
  MoreHorizontal,
  CheckCheck,
  Zap,
  Scale,
  FileCheck,
  Wallet,
  Building2,
  Flame,
  Leaf,
};

function resolveIcon(name?: string): IconCmp | undefined {
  if (!name) return undefined;
  return ICON_MAP[name];
}

type StageStatus = 'complete' | 'active' | 'pending';
type StatusCard = {
  kind: 'statusCard';
  title: string;
  fields: { Icon: IconCmp; label: string; value: string }[];
  currentStatus: string;
  stages: { label: string; state: StageStatus }[];
  progressPct: number;
  expected: string;
};

type TimelineCard = {
  kind: 'timelineCard';
  title: string;
  rows: { type: string; duration: string }[];
  currentAverage: string;
  express: { fee: string; turnaround: string };
};

type ListCard = {
  kind: 'listCard';
  title: string;
  Icon: IconCmp;
  groups: { heading: string; items: string[] }[];
  footer?: string;
};

type FeesCard = {
  kind: 'feesCard';
  title: string;
  rows: { type: string; baseFee: string; perSqFt: string }[];
  addons: { label: string; value: string }[];
};

type ComplianceCard = {
  kind: 'complianceCard';
  title: string;
  sections: { Icon: IconCmp; heading: string; items: string[] }[];
};

type TextBlock = {
  kind: 'text';
  heading?: string;
  paragraphs: string[];
};

type BarChart = {
  kind: 'barChart';
  title: string;
  Icon?: IconCmp;
  unit?: string;
  bars: { label: string; value: number; hint?: string }[];
  highlight?: string;
};

type MetricGrid = {
  kind: 'metricGrid';
  metrics: { label: string; value: string; delta?: string; deltaTone?: 'up' | 'down' | 'neutral' }[];
};

type Alert = {
  kind: 'alert';
  tone: 'info' | 'warning' | 'success';
  title: string;
  message: string;
};

type Block =
  | StatusCard
  | TimelineCard
  | ListCard
  | FeesCard
  | ComplianceCard
  | TextBlock
  | BarChart
  | MetricGrid
  | Alert;

type Chip = { label: string; Icon: IconCmp };

type Response = { intro: string; blocks: Block[]; followups: Chip[] };

type Msg =
  | { role: 'user'; content: string; time: string }
  | {
      role: 'assistant';
      response: Response;
      time: string;
      charsShown: number;
      blocksVisible: boolean;
    };

type RawBlock = Record<string, unknown>;
type RawResponse = { intro: string; blocks: RawBlock[]; followups: { label: string; icon: string }[] };
type RawPack = {
  welcome: { greeting: string; capabilities: { label: string; icon: string }[] };
  suggestions: { title: string; sub: string; icon: string; prompt: string }[];
  classifier: Record<string, string[]>;
  blocks: Record<string, RawBlock>;
  responses: Record<string, RawResponse>;
  promptResponses: Record<string, RawResponse | { $response: string }>;
};

const PACK = askPack as unknown as RawPack;

function hydrateBlock(raw: RawBlock): Block {
  if ('$ref' in raw && typeof raw.$ref === 'string') {
    return hydrateBlock(PACK.blocks[raw.$ref]);
  }
  const kind = raw.kind as Block['kind'];
  switch (kind) {
    case 'statusCard': {
      const r = raw as unknown as {
        kind: 'statusCard';
        title: string;
        fields: { icon: string; label: string; value: string }[];
        currentStatus: string;
        stages: { label: string; state: StageStatus }[];
        progressPct: number;
        expected: string;
      };
      return {
        kind: 'statusCard',
        title: r.title,
        fields: r.fields.map((f) => ({ Icon: resolveIcon(f.icon)!, label: f.label, value: f.value })),
        currentStatus: r.currentStatus,
        stages: r.stages,
        progressPct: r.progressPct,
        expected: r.expected,
      };
    }
    case 'timelineCard': {
      const r = raw as unknown as TimelineCard;
      return { ...r, kind: 'timelineCard' };
    }
    case 'listCard': {
      const r = raw as unknown as {
        kind: 'listCard';
        title: string;
        icon: string;
        groups: { heading: string; items: string[] }[];
        footer?: string;
      };
      return {
        kind: 'listCard',
        title: r.title,
        Icon: resolveIcon(r.icon)!,
        groups: r.groups,
        footer: r.footer,
      };
    }
    case 'feesCard': {
      const r = raw as unknown as FeesCard;
      return { ...r, kind: 'feesCard' };
    }
    case 'complianceCard': {
      const r = raw as unknown as {
        kind: 'complianceCard';
        title: string;
        sections: { icon: string; heading: string; items: string[] }[];
      };
      return {
        kind: 'complianceCard',
        title: r.title,
        sections: r.sections.map((s) => ({ Icon: resolveIcon(s.icon)!, heading: s.heading, items: s.items })),
      };
    }
    case 'text': {
      const r = raw as unknown as TextBlock;
      return { kind: 'text', heading: r.heading, paragraphs: r.paragraphs };
    }
    case 'barChart': {
      const r = raw as unknown as {
        kind: 'barChart';
        title: string;
        icon?: string;
        unit?: string;
        bars: { label: string; value: number; hint?: string }[];
        highlight?: string;
      };
      return {
        kind: 'barChart',
        title: r.title,
        Icon: resolveIcon(r.icon),
        unit: r.unit,
        bars: r.bars,
        highlight: r.highlight,
      };
    }
    case 'metricGrid': {
      const r = raw as unknown as MetricGrid;
      return { ...r, kind: 'metricGrid' };
    }
    case 'alert': {
      const r = raw as unknown as Alert;
      return { ...r, kind: 'alert' };
    }
    default:
      throw new Error(`Unknown block kind: ${String(kind)}`);
  }
}

function hydrateResponse(raw: RawResponse): Response {
  return {
    intro: raw.intro,
    blocks: raw.blocks.map(hydrateBlock),
    followups: raw.followups.map((f) => ({ label: f.label, Icon: resolveIcon(f.icon)! })),
  };
}

type Topic = 'status' | 'documents' | 'timeline' | 'fees' | 'compliance' | 'default';

function classify(text: string): Topic {
  const msg = text.toLowerCase();
  const cls = PACK.classifier;
  for (const topic of Object.keys(cls)) {
    if (cls[topic].some((kw) => msg.includes(kw))) return topic as Topic;
  }
  return 'default';
}

function resolveResponse(text: string, responses: Record<string, Response>): Response {
  const key = text.trim().toLowerCase();
  const raw = PACK.promptResponses[key];
  if (raw) {
    if ('$response' in raw && typeof raw.$response === 'string') {
      return responses[raw.$response];
    }
    return hydrateResponse(raw as RawResponse);
  }
  const topic = classify(text);
  return responses[topic];
}

function nowTime(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function StatusCardView({ block }: { block: StatusCard }) {
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        >
          <FileText className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
        </div>
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>

      <div className="space-y-2 mb-4">
        {block.fields.map(({ Icon, label, value }) => (
          <div key={label} className="flex items-center text-sm min-w-0">
            <Icon className="w-4 h-4 text-fg-strong/40 mr-3 shrink-0" />
            <span className="text-fg-strong/60 w-24 sm:w-32 shrink-0">{label}</span>
            <span className="text-fg-strong/90 min-w-0 break-words">{value}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mb-4" style={{ borderColor: 'var(--gd-border)' }}>
        <div className="flex items-center gap-3 mb-4 flex-wrap min-w-0">
          <FileText className="w-4 h-4 text-fg-strong/40 shrink-0" />
          <span className="text-sm text-fg-strong/60 shrink-0">Current Status</span>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-fg-strong min-w-0 break-words"
            style={{ background: 'var(--gd-primary)' }}
          >
            <Hourglass className="w-3 h-3 shrink-0" />
            {block.currentStatus}
          </span>
        </div>

        <div className="flex items-start gap-1 overflow-x-auto -mx-1 px-1 pb-1">
          {block.stages.map((stage, idx) => (
            <div key={stage.label} className="flex items-start flex-1 min-w-[140px]">
              <div className="flex flex-col items-start min-w-0">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mb-2"
                  style={{
                    background:
                      stage.state === 'complete'
                        ? 'rgba(34,197,94,0.15)'
                        : stage.state === 'active'
                        ? 'var(--gd-primary)'
                        : 'rgba(255,255,255,0.06)',
                  }}
                >
                  {stage.state === 'complete' && (
                    <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--gd-success)' }} />
                  )}
                  {stage.state === 'active' && <FileText className="w-3.5 h-3.5 text-fg-strong" />}
                  {stage.state === 'pending' && (
                    <MoreHorizontal className="w-3.5 h-3.5 text-fg-strong/40" />
                  )}
                </div>
                <p className="text-xs text-fg-strong/80 leading-snug">{stage.label}</p>
                <p
                  className="text-[11px] mt-0.5"
                  style={{
                    color:
                      stage.state === 'complete'
                        ? 'var(--gd-success)'
                        : stage.state === 'active'
                        ? 'var(--gd-primary)'
                        : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {stage.state === 'complete' ? 'Complete' : stage.state === 'active' ? 'In Progress' : 'Pending'}
                </p>
              </div>
              {idx < block.stages.length - 1 && (
                <div className="flex-1 border-t border-dashed mt-3.5 mx-2" style={{ borderColor: 'var(--gd-border-strong)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-fg-strong/60 w-16 shrink-0">Progress</span>
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${block.progressPct}%`, background: 'var(--gd-primary)' }}
          />
        </div>
        <span className="text-xs font-medium text-fg-strong shrink-0">{block.progressPct}%</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Calendar className="w-3.5 h-3.5 text-fg-strong/40" />
        <span className="text-xs text-fg-strong/60">Expected Completion: {block.expected}</span>
      </div>
    </div>
  );
}

function TimelineCardView({ block }: { block: TimelineCard }) {
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        >
          <Clock className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
        </div>
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5">
        <div>
          <div className="grid grid-cols-2 gap-3 text-xs pb-2 border-b" style={{ borderColor: 'var(--gd-border)' }}>
            <span style={{ color: 'var(--gd-primary)' }}>Permit Type</span>
            <span style={{ color: 'var(--gd-primary)' }}>Duration</span>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--gd-border)' }}>
            {block.rows.map((r) => (
              <div key={r.type} className="grid grid-cols-2 gap-3 py-2.5 text-sm min-w-0">
                <span className="text-fg-strong/80 break-words">{r.type}</span>
                <span className="text-fg-strong/80 break-words">{r.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl border p-4 min-w-[220px]"
          style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
        >
          <p className="text-xs text-fg-strong/60">Current Average</p>
          <p className="text-xl font-semibold mt-1" style={{ color: 'var(--gd-primary)' }}>
            {block.currentAverage}
          </p>
          <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--gd-border)' }}>
            <p className="text-xs text-fg-strong/70 mb-1.5">Express Processing</p>
            <ul className="text-xs text-fg-strong/60 space-y-1">
              <li>• Additional fee: {block.express.fee}</li>
              <li>• Turnaround: {block.express.turnaround}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListCardView({ block }: { block: ListCard }) {
  const { Icon } = block;
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        >
          <Icon className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
        </div>
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {block.groups.map((g) => (
          <div key={g.heading}>
            <p className="text-xs uppercase tracking-wide text-fg-strong/50 mb-2">{g.heading}</p>
            <ul className="space-y-1.5">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-fg-strong/80">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gd-success)' }} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {block.footer && (
        <p className="text-xs text-fg-strong/50 mt-4 pt-4 border-t" style={{ borderColor: 'var(--gd-border)' }}>
          {block.footer}
        </p>
      )}
    </div>
  );
}

function FeesCardView({ block }: { block: FeesCard }) {
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        >
          <Calculator className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
        </div>
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>

      {/* TODO(mobile): consider card variant for narrow viewports (3-col table) */}
      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="min-w-[320px]">
          <div className="grid grid-cols-3 gap-2 text-xs pb-2 border-b" style={{ borderColor: 'var(--gd-border)' }}>
            <span style={{ color: 'var(--gd-primary)' }}>Permit Type</span>
            <span style={{ color: 'var(--gd-primary)' }}>Base Fee</span>
            <span style={{ color: 'var(--gd-primary)' }}>Per sq ft</span>
          </div>
          <div>
            {block.rows.map((r) => (
              <div
                key={r.type}
                className="grid grid-cols-3 gap-2 py-2.5 text-sm border-b last:border-b-0"
                style={{ borderColor: 'var(--gd-border)' }}
              >
                <span className="text-fg-strong/80 break-words">{r.type}</span>
                <span className="text-fg-strong/80 break-words">{r.baseFee}</span>
                <span className="text-fg-strong/80 break-words">{r.perSqFt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--gd-border)' }}>
        <p className="text-xs uppercase tracking-wide text-fg-strong/50 mb-2">Add-ons</p>
        <ul className="space-y-1.5 text-sm text-fg-strong/80">
          {block.addons.map((a) => (
            <li key={a.label} className="flex items-center justify-between gap-3 min-w-0">
              <span className="min-w-0 break-words">{a.label}</span>
              <span className="text-fg-strong shrink-0 whitespace-nowrap">{a.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComplianceCardView({ block }: { block: ComplianceCard }) {
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        >
          <ShieldCheck className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
        </div>
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {block.sections.map((s) => {
          const { Icon } = s;
          return (
            <div key={s.heading}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
                <p className="text-sm font-medium text-fg-strong">{s.heading}</p>
              </div>
              <ul className="space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="text-xs text-fg-strong/70 leading-relaxed">
                    • {it}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TextBlockView({ block }: { block: TextBlock }) {
  return (
    <div className="pl-1">
      {block.heading && <p className="text-sm font-medium text-fg-strong mb-2">{block.heading}</p>}
      {block.paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-fg-strong/70 leading-relaxed mb-2 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  );
}

function BarChartView({ block }: { block: BarChart }) {
  const max = Math.max(...block.bars.map((b) => b.value));
  const Icon = block.Icon;
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        {Icon && (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(99,102,241,0.15)' }}
          >
            <Icon className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
          </div>
        )}
        <p className="text-sm font-semibold text-fg-strong">{block.title}</p>
      </div>
      <div className="space-y-3">
        {block.bars.map((b) => {
          const pct = (b.value / max) * 100;
          const active = b.label === block.highlight;
          return (
            <div key={b.label} className="grid grid-cols-[5.5rem_1fr_auto] sm:grid-cols-[8rem_1fr_auto] items-center gap-2 sm:gap-3">
              <span className={`text-xs ${active ? 'text-fg-strong font-medium' : 'text-fg-strong/70'}`}>
                {b.label}
              </span>
              <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pct}%`,
                    background: active ? 'var(--gd-primary)' : 'rgba(99,102,241,0.55)',
                  }}
                />
              </div>
              <span className="text-xs text-fg-strong/80 tabular-nums min-w-[3.5rem] text-right">
                {b.hint ?? `${b.value}${block.unit ? ' ' + block.unit : ''}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MetricGridView({ block }: { block: MetricGrid }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
      {block.metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border p-4 min-w-0"
          style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
        >
          <p className="text-xs text-fg-strong/50 break-words">{m.label}</p>
          <p className="text-xl font-semibold text-fg-strong mt-1 break-words">{m.value}</p>
          {m.delta && (
            <p
              className="text-xs mt-1"
              style={{
                color:
                  m.deltaTone === 'up'
                    ? 'var(--gd-success)'
                    : m.deltaTone === 'down'
                    ? 'var(--gd-danger)'
                    : 'rgba(255,255,255,0.5)',
              }}
            >
              {m.delta}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function AlertView({ block }: { block: Alert }) {
  const color =
    block.tone === 'warning' ? 'var(--gd-warning)' : block.tone === 'success' ? 'var(--gd-success)' : 'var(--gd-primary)';
  const bg =
    block.tone === 'warning'
      ? 'rgba(245,158,11,0.10)'
      : block.tone === 'success'
      ? 'rgba(34,197,94,0.10)'
      : 'rgba(99,102,241,0.10)';
  const Icon = block.tone === 'warning' ? Hourglass : block.tone === 'success' ? CheckCircle2 : Sparkles;
  return (
    <div
      className="rounded-xl border p-4 flex items-start gap-3"
      style={{ borderColor: color, background: bg }}
    >
      <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
      <div>
        <p className="text-sm font-medium text-fg-strong">{block.title}</p>
        <p className="text-xs text-fg-strong/70 mt-0.5 leading-relaxed">{block.message}</p>
      </div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'statusCard':
      return <StatusCardView block={block} />;
    case 'timelineCard':
      return <TimelineCardView block={block} />;
    case 'listCard':
      return <ListCardView block={block} />;
    case 'feesCard':
      return <FeesCardView block={block} />;
    case 'complianceCard':
      return <ComplianceCardView block={block} />;
    case 'text':
      return <TextBlockView block={block} />;
    case 'barChart':
      return <BarChartView block={block} />;
    case 'metricGrid':
      return <MetricGridView block={block} />;
    case 'alert':
      return <AlertView block={block} />;
  }
}

export default function PublicSectorAsk() {
  const welcomeCapabilities = useMemo(
    () => PACK.welcome.capabilities.map((c) => ({ label: c.label, Icon: resolveIcon(c.icon)! })),
    [],
  );
  const suggestions = useMemo(
    () => PACK.suggestions.map((s) => ({ title: s.title, sub: s.sub, prompt: s.prompt, Icon: resolveIcon(s.icon)! })),
    [],
  );
  const responses = useMemo<Record<string, Response>>(() => {
    const out: Record<string, Response> = {};
    for (const key of Object.keys(PACK.responses)) {
      out[key] = hydrateResponse(PACK.responses[key]);
    }
    return out;
  }, []);

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [followups, setFollowups] = useState<Chip[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const response = resolveResponse(text, responses);
    setMessages((prev) => [...prev, { role: 'user', content: text, time: nowTime() }]);
    setInput('');
    setIsTyping(true);
    setFollowups([]);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', response, time: nowTime(), charsShown: 0, blocksVisible: false },
      ]);
    }, 3000);
  };

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || last.role !== 'assistant') return;

    const intro = last.response.intro;
    const total = intro.length;

    if (last.charsShown < total) {
      const t = setTimeout(() => {
        setMessages((prev) => {
          const next = [...prev];
          const idx = next.length - 1;
          const cur = next[idx];
          if (!cur || cur.role !== 'assistant') return prev;
          next[idx] = { ...cur, charsShown: cur.charsShown + 1 };
          return next;
        });
      }, 18);
      return () => clearTimeout(t);
    }

    if (!last.blocksVisible) {
      const t = setTimeout(() => {
        setMessages((prev) => {
          const next = [...prev];
          const idx = next.length - 1;
          const cur = next[idx];
          if (!cur || cur.role !== 'assistant') return prev;
          next[idx] = { ...cur, blocksVisible: true };
          return next;
        });
        setFollowups(last.response.followups);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [messages]);

  const hasConversation = messages.length > 0;

  return (
    <div
      className="theme-genx-decision flex flex-col h-[calc(100vh-56px)]"
      style={{ background: 'var(--gd-bg)', color: 'var(--gd-fg)' }}
    >
      {/* Scrollable area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-4 min-h-full flex flex-col">
          {!hasConversation && (
            <>
              {/* Welcome card */}
              <div
                className="rounded-2xl border p-5 sm:p-6 mt-6 sm:mt-10 md:mt-16 mb-8 max-w-2xl mx-auto w-full"
                style={{
                  borderColor: 'var(--gd-border)',
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12), transparent 60%), #07040f',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(139,92,246,0.15)' }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: 'var(--gd-primary)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-fg-strong mb-2">
                      Hello! I&apos;m your{' '}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #A78BFA, #6366F1)' }}
                      >
                        Building Permits Assistant.
                      </span>
                    </p>
                    <p className="text-sm text-fg-strong/60 mb-4">I can help you with:</p>
                    <ul className="space-y-2.5 mb-4">
                      {welcomeCapabilities.map(({ label, Icon }) => (
                        <li key={label} className="flex items-center gap-3 text-sm text-fg-strong/80">
                          <Icon className="w-4 h-4 shrink-0" style={{ color: 'var(--gd-primary)' }} />
                          {label}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-fg-strong/70 pt-3 border-t" style={{ borderColor: 'var(--gd-border)' }}>
                      How can I assist you today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggestion cards — pushed to bottom */}
              <div className="mt-auto pt-8">
                <p className="text-sm text-fg-strong/60 mb-3">Try asking about</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                  {suggestions.map(({ title, sub, Icon, prompt }) => (
                    <button
                      key={title}
                      onClick={() => send(prompt)}
                      className="group h-full text-left rounded-xl border p-5 transition-colors hover:brightness-125"
                      style={{
                        borderColor: 'var(--gd-border)',
                        background:
                          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12), transparent 60%), #07040f',
                      }}
                    >
                      <div className="flex flex-col h-full gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(139,92,246,0.12)' }}
                          >
                            <Icon className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
                          </div>
                          <ChevronRight className="w-4 h-4 mt-1 text-fg-strong/40 group-hover:text-fg-strong shrink-0" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className="text-[13.5px] font-medium text-fg-strong leading-snug line-clamp-2 min-h-[2.4em]"
                            style={{ textWrap: 'balance' as React.CSSProperties['textWrap'] }}
                          >
                            {title}
                          </p>
                          <p
                            className="text-xs text-fg-strong/50 mt-1.5 leading-relaxed line-clamp-2"
                            style={{ textWrap: 'pretty' as React.CSSProperties['textWrap'] }}
                          >
                            {sub}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Chat messages */}
          {hasConversation && (
            <div className="space-y-6">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex flex-col items-end max-w-full">
                    <div
                      className="rounded-2xl px-4 py-2.5 max-w-[85%] sm:max-w-xl text-fg-strong text-sm break-words min-w-0"
                      style={{ background: 'var(--gd-primary)' }}
                    >
                      {m.content}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-fg-strong/40">
                      <span>{m.time}</span>
                      <CheckCheck className="w-3 h-3" style={{ color: 'var(--gd-primary)' }} />
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(139,92,246,0.15)' }}
                    >
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-3">
                      {m.response.intro ? (
                        <div className="flex items-start justify-between gap-3 min-w-0">
                          <p className="text-sm text-fg-strong/90 leading-relaxed min-w-0 break-words">
                            {m.response.intro.slice(0, m.charsShown)}
                            {m.charsShown < m.response.intro.length && (
                              <span
                                className="inline-block w-1.5 h-3.5 ml-0.5 -mb-0.5 align-middle animate-pulse"
                                style={{ background: 'var(--gd-primary)' }}
                              />
                            )}
                          </p>
                          <span className="text-[11px] text-fg-strong/40 shrink-0 whitespace-nowrap">{m.time}</span>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <span className="text-[11px] text-fg-strong/40">{m.time}</span>
                        </div>
                      )}
                      {m.blocksVisible &&
                        m.response.blocks.map((b, bi) => <BlockView key={bi} block={b} />)}
                    </div>
                  </div>
                ),
              )}
              {isTyping && (
                <div className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(139,92,246,0.15)' }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
                  </div>
                  <div
                    className="rounded-2xl px-4 py-3 border flex items-center gap-1"
                    style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
                  >
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Composer */}
      <div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-2 pb-4">
          {hasConversation && followups.length > 0 && !isTyping && (
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {followups.map(({ label, Icon }) => (
                <button
                  key={label}
                  onClick={() => send(label)}
                  className="inline-flex items-center gap-2 text-xs text-fg-strong/80 hover:text-fg-strong rounded-full border px-3 py-1.5 transition-colors hover:bg-fg-strong/[0.04]"
                  style={{ borderColor: 'var(--gd-border)', background: 'rgba(139,92,246,0.05)' }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: 'var(--gd-primary)' }} />
                  {label}
                </button>
              ))}
            </div>
          )}
          <div
            className="rounded-2xl border flex items-center gap-2 pl-4 pr-2 py-2"
            style={{
              borderColor: 'rgba(139,92,246,0.55)',
              background: 'rgba(255,255,255,0.02)',
              boxShadow:
                '0 0 0 1px rgba(139,92,246,0.25), 0 0 24px rgba(99,102,241,0.15), inset 0 0 0 1px rgba(255,255,255,0.02)',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder={hasConversation ? 'Click a suggested question above or ask anything...' : 'Ask about building permits...'}
              className="flex-1 min-w-0 bg-transparent text-sm text-fg-strong placeholder-white/40 focus:outline-none py-2"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim()}
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-fg-strong disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition"
              style={{ background: 'var(--gd-primary)' }}
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-fg-strong/40 text-center mt-2 flex items-center justify-center gap-1.5">
            <Shield className="w-3 h-3" />
            This is a demo. Responses are simulated.
          </p>
        </div>
      </div>
    </div>
  );
}
