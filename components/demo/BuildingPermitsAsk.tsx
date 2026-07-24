'use client';

import { useState, useRef, useEffect } from 'react';
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
} from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const WELCOME_CAPABILITIES: { label: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }> }[] = [
  { label: 'Check permit application status', Icon: FileText },
  { label: 'Document requirements',            Icon: Folder },
  { label: 'Processing timelines',             Icon: Clock },
  { label: 'Fee calculations',                 Icon: Calculator },
  { label: 'Compliance guidelines',            Icon: ShieldCheck },
];

const SUGGESTIONS: {
  title: string;
  sub: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  prompt: string;
}[] = [
  { title: 'Check application status', sub: 'See the status of your permit application', Icon: FileText,   prompt: 'Check my application status' },
  { title: 'What documents do I need?', sub: 'Get a list of required documents',          Icon: Folder,     prompt: 'What documents do I need?' },
  { title: 'How long does it take?',    sub: 'View typical processing timelines',          Icon: Clock,      prompt: 'How long does processing take?' },
  { title: 'What are the fees?',        sub: 'Calculate fees for your permit',             Icon: Calculator, prompt: 'What are the fees?' },
];

type Topic = 'status' | 'documents' | 'timeline' | 'fees' | 'compliance' | 'default';

function classify(text: string): Topic {
  const msg = text.toLowerCase();
  if (msg.includes('status') || msg.includes('track') || msg.includes('application')) return 'status';
  if (msg.includes('document') || msg.includes('require') || msg.includes('need') || msg.includes('submit')) return 'documents';
  if (msg.includes('long') || msg.includes('time') || msg.includes('timeline') || msg.includes('days')) return 'timeline';
  if (msg.includes('fee') || msg.includes('cost') || msg.includes('price') || msg.includes('pay')) return 'fees';
  if (msg.includes('compliance') || msg.includes('guideline') || msg.includes('rule') || msg.includes('regulation')) return 'compliance';
  return 'default';
}

const FOLLOWUPS: Record<Topic, string[]> = {
  status:     ['Show processing timeline', 'What happens next?', 'Contact reviewer'],
  documents:  ['Show format requirements', 'Where to submit?', 'Sample application form'],
  timeline:   ['Express processing options', 'Compare permit types', 'Track my application'],
  fees:       ['Payment methods', 'Fee waivers', 'Renovation discount'],
  compliance: ['Zoning setback rules', 'Fire safety code', 'LEED requirements'],
  default:    ['Check application status', 'What documents do I need?', 'How long does it take?', 'What are the fees?'],
};

function respond(text: string): string {
  const msg = text.toLowerCase();
  if (msg.includes('status') || msg.includes('track') || msg.includes('application')) {
    return `**Permit Application Status**

📋 Application ID: BP-2026-04892
📍 Location: Commercial District, Block 7
📅 Submitted: 2026-06-15

Current Status: Under Technical Review ⏳

| Stage | Status |
|-------|--------|
| Document Verification | ✅ Complete |
| Zoning Compliance | ✅ Complete |
| Technical Review | 🔄 In Progress |
| Final Approval | ⏸️ Pending |

Progress: 65% · Expected: 2026-07-05`;
  }
  if (msg.includes('document') || msg.includes('require') || msg.includes('need') || msg.includes('submit')) {
    return `**Required Documents**

Essential:
✓ Completed application form
✓ Site plan (1:500 scale)
✓ Architectural drawings
✓ Structural engineering plans
✓ Fire safety plan
✓ Environmental assessment

Supporting:
✓ Land ownership proof
✓ NOC from municipality
✓ Contractor license
✓ Insurance certificate

Format: PDF (max 10MB per file)`;
  }
  if (msg.includes('long') || msg.includes('time') || msg.includes('timeline') || msg.includes('days')) {
    return `**Processing Timeline**

| Permit Type | Duration |
|-------------|----------|
| Residential | 15-20 business days |
| Commercial | 25-35 business days |
| Industrial | 35-45 business days |
| Renovation | 10-15 business days |

Current Average: 18 days

Express Processing:
- Additional fee: $500
- Turnaround: 7-10 days`;
  }
  if (msg.includes('fee') || msg.includes('cost') || msg.includes('price') || msg.includes('pay')) {
    return `**Fee Structure**

| Permit Type | Base Fee | Per sq ft |
|-------------|----------|-----------|
| Residential | $250     | $0.50     |
| Commercial  | $500     | $1.20     |
| Industrial  | $1,000   | $2.50     |
| Renovation  | $150     | $0.30     |

Add-ons:
- Express processing: +$500
- Inspection: $75/visit
- Certificate: $50`;
  }
  if (msg.includes('compliance') || msg.includes('guideline') || msg.includes('rule') || msg.includes('regulation')) {
    return `**Compliance Guidelines**

Zoning:
- Setback: min 5m front, 3m side
- Height: 12m residential, 24m commercial
- Coverage: max 60% of plot area

Safety:
- Fire exits per NFPA-101
- Structural per IBC 2021
- Egress width min 1.2m

Environmental:
- Green space min 20%
- Rainwater harvesting mandatory > 5,000 sq ft
- LEED Silver required for commercial > 10,000 sq ft`;
  }
  return `I can help with permit status, document requirements, processing timelines, fees, and compliance. Try one of the quick prompts below.`;
}

export default function BuildingPermitsAsk() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [followups, setFollowups] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const topic = classify(text);
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);
    setFollowups([]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: respond(text) }]);
      setIsTyping(false);
      setFollowups(FOLLOWUPS[topic]);
    }, 700);
  };

  const hasConversation = messages.length > 0;

  return (
    <div
      className="theme-genx-decision flex flex-col h-[calc(100vh-56px)]"
      style={{ background: 'var(--gd-bg)', color: 'var(--gd-fg)' }}
    >
      {/* Scrollable area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-4">
        <div className="max-w-5xl mx-auto px-8 pt-8 pb-4 min-h-full flex flex-col">
          {!hasConversation && (
            <>
              {/* Welcome card */}
              <div
                className="rounded-2xl border p-6 mb-8"
                style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(139,92,246,0.15)' }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: 'var(--gd-primary)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-white mb-2">
                      Hello! I&apos;m your{' '}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, #A78BFA, #6366F1)',
                        }}
                      >
                        Building Permits Assistant.
                      </span>
                    </p>
                    <p className="text-sm text-white/60 mb-4">I can help you with:</p>
                    <ul className="space-y-2.5 mb-4">
                      {WELCOME_CAPABILITIES.map(({ label, Icon }) => (
                        <li key={label} className="flex items-center gap-3 text-sm text-white/80">
                          <Icon className="w-4 h-4 shrink-0" style={{ color: 'var(--gd-primary)' }} />
                          {label}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-white/70 pt-3 border-t" style={{ borderColor: 'var(--gd-border)' }}>
                      How can I assist you today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Suggestion cards — pushed to bottom, above composer */}
              <div className="mt-auto pt-8">
              <p className="text-sm text-white/60 mb-3">Try asking about</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                {SUGGESTIONS.map(({ title, sub, Icon, prompt }) => (
                  <button
                    key={title}
                    onClick={() => send(prompt)}
                    className="group h-full text-left rounded-xl border p-5 transition-colors hover:bg-white/[0.04]"
                    style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="flex flex-col h-full gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(139,92,246,0.12)' }}
                        >
                          <Icon className="w-4 h-4" style={{ color: 'var(--gd-primary)' }} />
                        </div>
                        <ChevronRight className="w-4 h-4 mt-1 text-white/40 group-hover:text-white shrink-0" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[13.5px] font-medium text-white leading-snug line-clamp-2 min-h-[2.4em]"
                          style={{ textWrap: 'balance' as React.CSSProperties['textWrap'] }}
                        >
                          {title}
                        </p>
                        <p
                          className="text-xs text-white/50 mt-1.5 leading-relaxed line-clamp-2"
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
            <div className="space-y-4">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex justify-end">
                    <div
                      className="rounded-2xl px-4 py-3 max-w-xl text-white text-sm"
                      style={{ background: 'var(--gd-primary)' }}
                    >
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex justify-start">
                    <div
                      className="rounded-2xl px-4 py-3 max-w-xl text-white/90 text-sm border whitespace-pre-wrap"
                      style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
                    >
                      {m.content}
                    </div>
                  </div>
                ),
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl px-4 py-3 border flex items-center gap-1"
                    style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
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
        <div className="max-w-5xl mx-auto px-8 pt-2 pb-4">
          {hasConversation && followups.length > 0 && !isTyping && (
            <div className="flex flex-wrap justify-center gap-2 mb-3 max-w-2xl mx-auto">
              {followups.map((chip) => (
                <button
                  key={chip}
                  onClick={() => send(chip)}
                  className="text-xs text-white/70 hover:text-white rounded-full border px-3 py-1.5 transition-colors hover:bg-white/[0.04]"
                  style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}
          <div
            className="rounded-2xl border flex items-center gap-2 pl-4 pr-2 py-2"
            style={{ borderColor: 'var(--gd-border)', background: 'rgba(255,255,255,0.02)' }}
          >
            <input
              type="text"
              value=""
              disabled
              readOnly
              placeholder="Click a suggested question above"
              className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none py-2 cursor-not-allowed"
            />
            <button
              disabled
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-white opacity-40 cursor-not-allowed"
              style={{ background: 'var(--gd-primary)' }}
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-white/40 text-center mt-2 flex items-center justify-center gap-1.5">
            <Shield className="w-3 h-3" />
            This is a demo. Responses are simulated.
          </p>
        </div>
      </div>
    </div>
  );
}
