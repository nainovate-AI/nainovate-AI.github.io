import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function Chip({ active = false, className = '', children, ...rest }: Props) {
  const base =
    'shrink-0 whitespace-nowrap px-2.5 py-1 text-[10px] rounded-full border transition-colors';
  const state = active
    ? 'bg-surface-2 border-fg-strong/20 text-fg-strong'
    : 'bg-surface-2 hover:bg-fg-strong/10 border-fg-strong/10 text-fg-muted hover:text-fg-strong';
  return (
    <button className={`${base} ${state} ${className}`} {...rest}>
      {children}
    </button>
  );
}
