import { ElementType, HTMLAttributes } from 'react';

type Spacing = 'sm' | 'md' | 'lg' | 'xl' | 'none';
type Tone = 'default' | 'elevated' | 'invert';

const spacingMap: Record<Spacing, string> = {
  none: '',
  sm: 'py-6 md:py-8',
  md: 'py-8 md:py-12',
  lg: 'py-10 md:py-14',
  xl: 'py-12 md:py-16',
};

const toneMap: Record<Tone, string> = {
  default: '',
  elevated: 'bg-bg-elevated',
  invert: 'bg-fg-strong text-fg-invert',
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: Spacing;
  tone?: Tone;
  divider?: 'top' | 'bottom' | 'both' | 'none';
  as?: ElementType;
}

export function Section({
  spacing = 'md',
  tone = 'default',
  divider = 'none',
  as: Tag = 'section',
  className = '',
  children,
  ...rest
}: SectionProps) {
  const dividerClass =
    divider === 'top' ? 'hairline-t' :
    divider === 'bottom' ? 'hairline-b' :
    divider === 'both' ? 'hairline-t hairline-b' : '';

  return (
    <Tag
      className={`relative ${spacingMap[spacing]} ${toneMap[tone]} ${dividerClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
