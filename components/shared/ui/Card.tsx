import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  padding?: 'sm' | 'md' | 'lg';
};

const PAD = { sm: 'p-3', md: 'p-5', lg: 'p-6' } as const;

export function Card({ padding = 'md', className = '', children, ...rest }: Props) {
  return (
    <div
      className={`rounded-xl border border-fg-strong/10 bg-white/[0.02] ${PAD[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
