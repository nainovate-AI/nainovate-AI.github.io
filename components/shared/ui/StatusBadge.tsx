type Tone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const TONES: Record<Tone, string> = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  danger:  'bg-red-500/10 text-red-400 border-red-500/20',
  info:    'bg-blue-500/10 text-blue-400 border-blue-500/20',
  neutral: 'bg-surface-2 text-fg-strong/70 border-fg-strong/10',
};

export function StatusBadge({ tone = 'neutral', children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-full border ${TONES[tone]}`}>
      {children}
    </span>
  );
}
