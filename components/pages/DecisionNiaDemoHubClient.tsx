'use client';

import { useState } from 'react';
import Link from 'next/link';

type PanelKey =
  | 'dashboard'
  | 'ask'
  | 'watchlists'
  | 'recommendations'
  | 'workflow'
  | 'trace'
  | 'coordination'
  | 'command';

const PANELS: { key: PanelKey; label: string; sub: string }[] = [
  { key: 'dashboard', label: 'Dashboard', sub: 'Support Head overview' },
  { key: 'ask', label: 'Ask', sub: 'Customer chat + AI reply' },
  { key: 'watchlists', label: 'Watchlists', sub: '3 firing' },
  { key: 'recommendations', label: 'Recommendations', sub: '2 auto-approved' },
  { key: 'workflow', label: 'Workflow', sub: '6 steps · 1.42s' },
  { key: 'trace', label: 'Trace & Audit', sub: 'trace_acme_p0_2104' },
  { key: 'coordination', label: 'Coordination', sub: '5 initiatives' },
  { key: 'command', label: 'Command Center', sub: 'Today’s priority' },
];

export default function DecisionNiaDemoHubClient() {
  const [active, setActive] = useState<PanelKey>('dashboard');

  return (
    <main className="pt-16 min-h-screen" style={{ background: '#f5f4ee' }}>
      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-30 px-3 py-1 bg-black text-white text-[10px] tracking-widest uppercase rounded-full">
        Demo · Decision NIA
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-12 pb-16">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-widest text-neutral-500 uppercase mb-2">Decision NIA · Demo Workspace</p>
            <h1 className="text-3xl font-bold text-black">Acme Corp · FD-2104</h1>
            <p className="text-sm text-neutral-500 mt-1">Sarah Johnson · Maintenance Engineer · P0 escalation active</p>
          </div>
          <div className="flex gap-3 text-sm">
            <Link href="/demo" className="text-neutral-500 hover:text-black">← Chooser</Link>
            <Link href="/decision-intelligence" className="text-neutral-500 hover:text-black">Product story</Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase">Workspace</p>
                <p className="text-sm text-white font-medium mt-1">Innovapptive · Customer Support</p>
              </div>
              <nav className="p-2">
                {PANELS.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setActive(p.key)}
                    className={`w-full text-left px-3 py-2.5 rounded transition-colors mb-1 ${
                      active === p.key
                        ? 'bg-white text-black'
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <p className="text-sm font-medium">{p.label}</p>
                    <p className={`text-[11px] mt-0.5 ${active === p.key ? 'text-neutral-500' : 'text-white/40'}`}>{p.sub}</p>
                  </button>
                ))}
              </nav>
              <div className="p-4 border-t border-white/10">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1">Signed in</p>
                <p className="text-sm text-white">Priya Ramanan · Support Head</p>
              </div>
            </div>
          </aside>

          {/* Main panel */}
          <section className="col-span-12 lg:col-span-9">
            {active === 'dashboard' && <DashboardPanel />}
            {active === 'ask' && <AskPanel />}
            {active === 'watchlists' && <WatchlistsPanel />}
            {active === 'recommendations' && <RecommendationsPanel />}
            {active === 'workflow' && <WorkflowPanel />}
            {active === 'trace' && <TracePanel />}
            {active === 'coordination' && <CoordinationPanel />}
            {active === 'command' && <CommandPanel />}
          </section>
        </div>
      </div>
    </main>
  );
}

function Card({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`bg-white border border-black/10 rounded-lg ${className}`} style={style}>
      {children}
    </div>
  );
}

function KpiTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card className="p-5">
      <p className="text-[11px] tracking-widest text-neutral-500 uppercase mb-3">{label}</p>
      <p className="text-3xl font-bold text-black">{value}</p>
      {sub && <p className="text-xs text-neutral-500 mt-1">{sub}</p>}
    </Card>
  );
}

function DashboardPanel() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiTile label="Open P0/P1" value="4" sub="Acme + Initech" />
        <KpiTile label="SLA compliance" value="94%" sub="+2 vs last week" />
        <KpiTile label="Avg MTTR" value="4.1h" sub="from 8.4h" />
        <KpiTile label="AI deflection" value="41%" sub="last 7d" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-black">Priority tickets</p>
            <span className="text-xs text-neutral-500">6 today</span>
          </div>
          <div className="space-y-3">
            {[
              { id: 'FD-2104', c: 'Acme Corp', s: 'mRounds sync hang · P0', tag: 'Escalated' },
              { id: 'FD-2112', c: 'Acme Corp', s: 'Compliance export failing · P1', tag: 'Reopen' },
              { id: 'FD-2105', c: 'Initech', s: 'Vendor API timeout · P1', tag: 'L2' },
              { id: 'FD-2108', c: 'Globex', s: 'PDF layout broken · P2', tag: 'KB miss' },
            ].map((r) => (
              <div key={r.id} className="grid grid-cols-12 gap-3 items-center py-2 border-b border-black/5 last:border-0">
                <span className="col-span-2 font-mono text-xs text-neutral-600">{r.id}</span>
                <span className="col-span-2 text-sm text-black">{r.c}</span>
                <span className="col-span-6 text-sm text-neutral-600">{r.s}</span>
                <span className="col-span-2 text-xs text-black text-right">{r.tag}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-medium text-black mb-4">Watchlist status</p>
          <div className="space-y-4">
            <WlRow name="P0/P1 SLA Breach Risk" fires={2} tone="red" />
            <WlRow name="Reopen-Prone Tickets" fires={3} tone="yellow" />
            <WlRow name="mRounds sync anomaly" fires={1} tone="red" />
            <WlRow name="P2/P3 Stalled > 24h" fires={5} tone="yellow" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <p className="text-sm font-medium text-black mb-4">Pending recommendations</p>
        <div className="space-y-3">
          {[
            { id: 'rec_001', title: 'Escalate FD-2104 to sync module owner', src: 'wl_001', conf: 0.91 },
            { id: 'rec_003', title: 'Draft KB article for reopen pattern', src: 'wl_003', conf: 0.78 },
            { id: 'rec_005', title: 'Notify CSM on Acme health drop', src: 'wl_001', conf: 0.85 },
          ].map((r) => (
            <div key={r.id} className="grid grid-cols-12 gap-3 items-center py-2 border-b border-black/5 last:border-0">
              <span className="col-span-2 font-mono text-xs text-neutral-600">{r.id}</span>
              <span className="col-span-7 text-sm text-black">{r.title}</span>
              <span className="col-span-2 text-xs text-neutral-500">From: {r.src}</span>
              <span className="col-span-1 text-xs font-mono text-black text-right">{(r.conf * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function WlRow({ name, fires, tone }: { name: string; fires: number; tone: 'red' | 'yellow' }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-black">{name}</p>
        <p className="text-xs text-neutral-500">{fires} firing</p>
      </div>
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: tone === 'red' ? '#dc2626' : '#eab308' }}
      />
    </div>
  );
}

function AskPanel() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">S</div>
          <div>
            <p className="text-sm text-black font-medium">Sarah Johnson</p>
            <p className="text-xs text-neutral-500">Acme Corp · 05:45 AM · Freshdesk portal</p>
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <div className="flex justify-end">
            <div className="bg-neutral-100 rounded-2xl px-4 py-3 max-w-xl">
              <p className="text-sm text-black">
                mRounds sync hangs at 87% every morning. 12MB of evidence stuck on device. Reboot did not help.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0">AI</div>
            <div className="border border-black/10 rounded-2xl px-4 py-3 flex-1 bg-neutral-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-neutral-500">Nia AI Agent</span>
                <span className="text-[10px] px-2 py-0.5 bg-black text-white rounded-full font-mono">novelty 0.87</span>
              </div>
              <p className="text-sm text-black leading-relaxed mb-4">
                This looks new — no match in known issues or docs. Creating engineering ticket ENG-4412 for the sync
                module owner and setting priority P0. Sarah, I have logged the device details, network state, and the
                12MB payload for engineering. Support will get back within 4 hours.
              </p>
              <div className="border-t border-black/10 pt-3 space-y-1 text-xs text-neutral-500">
                <p>· Escalation path chosen · confidence 0.91</p>
                <p>· Trace: trace_acme_p0_2104</p>
                <p>· Watchlist fired: wl_001</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4 flex items-center gap-3 text-sm text-neutral-500">
        <span>Ask anything —</span>
        <span className="text-black">Type a follow-up on behalf of the customer...</span>
      </Card>
    </div>
  );
}

function WatchlistsPanel() {
  const rows = [
    { id: 'wl_001', name: 'P0/P1 SLA Breach Risk', purpose: 'Catch critical tickets before SLA breach', fires: 2, conf: 1.0 },
    { id: 'wl_002', name: 'P2/P3 Stalled > 24h', purpose: 'Route stalled tickets to deputy', fires: 5, conf: 0.72 },
    { id: 'wl_003', name: 'Reopen-Prone Tickets', purpose: 'Detect repeat reopen patterns for KB', fires: 3, conf: 0.88 },
    { id: 'wl_004', name: 'mRounds sync anomaly', purpose: 'Product-scoped health signal', fires: 1, conf: 0.95 },
    { id: 'wl_005', name: 'Compliance evidence at risk', purpose: 'Data-loss risk for regulated customers', fires: 1, conf: 1.0 },
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <KpiTile label="Total watchlists" value="15" />
        <KpiTile label="Items tracked" value="142" />
        <KpiTile label="High priority" value="23" />
        <KpiTile label="Critical alerts" value="7" />
      </div>
      <Card className="p-6">
        <div className="grid grid-cols-12 gap-3 pb-3 border-b border-black/10 text-[10px] tracking-widest text-neutral-500 uppercase">
          <span className="col-span-2">ID</span>
          <span className="col-span-3">Name</span>
          <span className="col-span-5">Purpose</span>
          <span className="col-span-1 text-right">Fires</span>
          <span className="col-span-1 text-right">Conf</span>
        </div>
        {rows.map((r) => (
          <div key={r.id} className="grid grid-cols-12 gap-3 items-center py-3 border-b border-black/5 last:border-0">
            <span className="col-span-2 font-mono text-xs text-neutral-600">{r.id}</span>
            <span className="col-span-3 text-sm text-black">{r.name}</span>
            <span className="col-span-5 text-xs text-neutral-500">{r.purpose}</span>
            <span className="col-span-1 text-sm text-black text-right">{r.fires}</span>
            <span className="col-span-1 font-mono text-xs text-black text-right">{r.conf.toFixed(2)}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

function RecommendationsPanel() {
  const rows = [
    { id: 'rec_001', title: 'Escalate FD-2104 to sync module owner', src: 'wl_001', priority: 'P0', conf: 0.91, status: 'Auto-approved' },
    { id: 'rec_002', title: 'Notify CSM Marcus Chen (Acme)', src: 'wl_001', priority: 'P0', conf: 0.91, status: 'Auto-approved' },
    { id: 'rec_003', title: 'Draft KB article for sync reopen pattern', src: 'wl_003', priority: 'P2', conf: 0.78, status: 'Pending' },
    { id: 'rec_004', title: 'Route FD-2108 to L2 QA', src: 'wl_002', priority: 'P2', conf: 0.72, status: 'Pending' },
    { id: 'rec_005', title: 'Update KB-mRounds-Sync-001 with workaround', src: 'wl_003', priority: 'P2', conf: 0.81, status: 'Approved' },
  ];
  return (
    <Card className="p-6">
      <p className="text-sm font-medium text-black mb-4">Pending recommendations</p>
      <div className="grid grid-cols-12 gap-3 pb-3 border-b border-black/10 text-[10px] tracking-widest text-neutral-500 uppercase">
        <span className="col-span-2">ID</span>
        <span className="col-span-4">Title</span>
        <span className="col-span-2">From</span>
        <span className="col-span-1">Priority</span>
        <span className="col-span-1 text-right">Conf</span>
        <span className="col-span-2 text-right">Status</span>
      </div>
      {rows.map((r) => (
        <div key={r.id} className="grid grid-cols-12 gap-3 items-center py-3 border-b border-black/5 last:border-0">
          <span className="col-span-2 font-mono text-xs text-neutral-600">{r.id}</span>
          <span className="col-span-4 text-sm text-black">{r.title}</span>
          <span className="col-span-2 text-xs text-neutral-500 font-mono">{r.src}</span>
          <span className="col-span-1 text-xs text-black">{r.priority}</span>
          <span className="col-span-1 font-mono text-xs text-black text-right">{(r.conf * 100).toFixed(0)}%</span>
          <span className="col-span-2 text-xs text-black text-right">{r.status}</span>
        </div>
      ))}
    </Card>
  );
}

function WorkflowPanel() {
  const steps = [
    { n: 1, action: 'Create Jira ENG-4412 (P0)', target: 'Jira · sync-mobile', dur: '340ms', ok: true },
    { n: 2, action: 'Assign Priya Ramanan', target: 'Jira', dur: '110ms', ok: true },
    { n: 3, action: 'Slack #acme-critical: FD-2104 escalated', target: 'Slack', dur: '290ms', ok: true },
    { n: 4, action: 'Notify CSM Marcus Chen (email + Slack DM)', target: 'CRM · Salesforce', dur: '410ms', ok: true },
    { n: 5, action: 'Insert banner into Acme portal', target: 'Freshdesk portal', dur: '190ms', ok: true },
    { n: 6, action: 'Queue KB post-mortem draft', target: 'Nia KB queue', dur: '80ms', ok: true },
  ];
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1 font-mono">wf_001</p>
            <p className="text-lg font-medium text-black">P0 engineering + CSM notify</p>
          </div>
          <span className="text-xs text-black">1.42s · all steps ✓</span>
        </div>
        {steps.map((s) => (
          <div key={s.n} className="grid grid-cols-12 gap-3 items-center py-3 border-b border-black/5 last:border-0 text-sm">
            <span className="col-span-1 text-neutral-500 font-mono">{s.n}</span>
            <span className="col-span-6 text-black">{s.action}</span>
            <span className="col-span-3 text-neutral-500 text-xs">{s.target}</span>
            <span className="col-span-1 text-neutral-500 font-mono text-xs">{s.dur}</span>
            <span className="col-span-1 text-black text-right">✓</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

function TracePanel() {
  const signals = [
    { l: 'Ticket cluster density (Acme + sync)', w: 0.42, e: '3 tickets in 24h' },
    { l: 'Compliance evidence at risk', w: 0.28, e: '12MB stuck on device' },
    { l: 'Requester seniority (maintenance eng)', w: 0.18, e: 'active user, 47 rounds/day' },
    { l: 'Account health drop (42 → 35)', w: 0.12, e: 'score change in 6h' },
  ];
  const evidence = [
    { id: 'evd_01', src: 'Freshdesk', ref: 'FD-2104', d: 'ticket body, requester, priority' },
    { id: 'evd_02', src: 'Freshdesk', ref: 'FD-2101, FD-2098', d: 'related tickets last 24h' },
    { id: 'evd_03', src: 'Telemetry', ref: 'sync-svc.metrics', d: 'error rate 8.4% (threshold 2%)' },
    { id: 'evd_04', src: 'Salesforce', ref: 'Acme Corp', d: 'health score 35, ARR $1.2M' },
    { id: 'evd_05', src: 'Jira', ref: 'sync-mobile', d: 'owner Priya Ramanan, on-call yes' },
  ];
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-black/10">
          <div>
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1">Trace ID</p>
            <p className="text-sm font-mono text-black">trace_acme_p0_2104</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1">Source</p>
            <p className="text-sm font-mono text-black">FD-2104</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1">Started</p>
            <p className="text-sm text-black">05:45 · 2026-07-09</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1">Duration</p>
            <p className="text-sm text-black">1.42s</p>
          </div>
        </div>
        <p className="text-sm text-black mt-4 leading-relaxed">
          Auto-escalate FD-2104 to P0. Create ENG-4412 assigned to Priya. Notify CSM Marcus. Insert Acme portal banner.
          Queue KB post-mortem. Agent confidence <span className="font-mono">0.91</span>.
        </p>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-4">Weighted signals</p>
          <div className="space-y-4">
            {signals.map((s) => (
              <div key={s.l}>
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-black">{s.l}</p>
                  <p className="font-mono text-xs text-black">{s.w.toFixed(2)}</p>
                </div>
                <p className="text-xs text-neutral-500 mb-2">{s.e}</p>
                <div className="h-1 bg-black/10 rounded overflow-hidden">
                  <div className="h-full bg-black" style={{ width: `${s.w * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-4">Evidence rows</p>
          <div className="space-y-3 text-xs">
            {evidence.map((e) => (
              <div key={e.id} className="border-b border-black/5 pb-3 last:border-0">
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-neutral-500">{e.id}</span>
                  <span className="text-neutral-500">{e.src}</span>
                </div>
                <p className="font-mono text-black mb-1">{e.ref}</p>
                <p className="text-neutral-500">{e.d}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function CoordinationPanel() {
  const items = [
    { id: 'INIT-2104', t: 'Acme mRounds sync stabilization', teams: 'Support · Eng · CSM · Product', p: 60 },
    { id: 'INIT-2088', t: 'Globex compliance report format', teams: 'Support · Product · CSM', p: 25 },
    { id: 'INIT-2062', t: 'Initech onboarding at risk', teams: 'Delivery · CSM · Sales', p: 40 },
    { id: 'INIT-2041', t: 'Umbrella renewal — decision Sept', teams: 'CSM · Sales', p: 15 },
    { id: 'INIT-2019', t: 'mRounds v3.8 release readiness', teams: 'Eng · Support · Product · CSM', p: 75 },
  ];
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <Card key={it.id} className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono mb-1">{it.id}</p>
              <p className="text-base font-medium text-black">{it.t}</p>
              <p className="text-xs text-neutral-500 mt-1">{it.teams}</p>
            </div>
            <div className="w-32">
              <p className="text-[10px] tracking-widest text-neutral-500 uppercase mb-1 text-right">Progress</p>
              <div className="h-1.5 bg-black/10 rounded overflow-hidden">
                <div className="h-full bg-black" style={{ width: `${it.p}%` }} />
              </div>
              <p className="text-xs font-mono text-black text-right mt-1">{it.p}%</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function CommandPanel() {
  return (
    <div className="space-y-6">
      <Card className="p-6" style={{ background: '#111', color: '#fff' }}>
        <p className="text-[10px] tracking-widest text-white/50 uppercase mb-2">Today · 07:00 AM</p>
        <h2 className="text-2xl font-medium mb-4">Good morning, Priya.</h2>
        <p className="text-sm text-white/70 leading-relaxed mb-6">
          Overnight: 1 P0 escalation (Acme FD-2104), 2 auto-approved workflows executed cleanly, watchlist wl_001
          fired once with confidence 1.00. Acme health dropped 42 → 35. Marcus Chen (CSM) is briefed.
          Your first hour: review the FD-2104 root cause with Priya R., confirm hotfix ETA with QA.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { l: 'P0 open', v: '1' },
            { l: 'Workflows executed', v: '2' },
            { l: 'Health drops', v: '1 acct' },
          ].map((k) => (
            <div key={k.l}>
              <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">{k.l}</p>
              <p className="text-3xl font-medium">{k.v}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <p className="text-sm font-medium text-black mb-4">Priority actions</p>
        {[
          { t: '09:00 — Sync with Priya R. on hotfix v3.8.3', tag: 'Eng' },
          { t: '10:30 — Marcus Chen check-in with Sarah (Acme)', tag: 'CSM' },
          { t: '14:00 — Draft executive summary for Acme CIO', tag: 'Support Head' },
          { t: '16:00 — Approve rec_003 (KB draft) or delegate', tag: 'You' },
        ].map((a, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
            <p className="text-sm text-black">{a.t}</p>
            <span className="text-xs text-neutral-500">{a.tag}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
