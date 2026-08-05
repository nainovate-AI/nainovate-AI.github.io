import { ElementType, HTMLAttributes } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLElement> {
  tone?: 'default' | 'muted' | 'accent';
  as?: ElementType;
  withDot?: boolean;
}

const toneMap = {
  default: 'text-fg-mid',
  muted: 'text-fg-muted',
  accent: 'text-fg-strong',
};

export function Eyebrow({
  tone = 'default',
  as: Tag = 'p',
  withDot = false,
  className = '',
  children,
  ...rest
}: EyebrowProps) {
  return (
    <Tag
      className={`text-eyebrow inline-flex items-center gap-2 ${toneMap[tone]} ${className}`}
      {...rest}
    >
      {withDot && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-60" aria-hidden="true" />
      )}
      {children}
    </Tag>
  );
}
