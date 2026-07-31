'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Magnetic } from '@/components/ui/motion/Magnetic';

type Variant = 'solid' | 'outline' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;
type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & { href: string };

// Same visual size/shape everywhere — matches Hero Watch Demo + Schedule Demo.
const base =
  'group relative inline-flex items-center justify-center gap-2 font-semibold tracking-[0.14em] uppercase rounded-full transition-all duration-300 ease-out-quart select-none overflow-hidden isolate';

const sizeMap: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-body-sm',
  lg: 'px-8 py-4 text-body-sm',
};

const linkSize: Record<Size, string> = {
  sm: 'text-body-sm',
  md: 'text-body-md',
  lg: 'text-body-lg',
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="relative w-4 h-4 transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SolidBody({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)' }}
      />
      <span className="relative">{children}</span>
      {arrow && <ArrowIcon />}
    </>
  );
}

function OutlineBody({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span className="relative">{children}</span>
      {arrow && <ArrowIcon />}
    </>
  );
}

function computeClasses(variant: Variant, size: Size, fullWidth: boolean, extra: string) {
  if (variant === 'link') {
    const width = fullWidth ? 'w-full' : '';
    return `group inline-flex items-center gap-2 text-fg-strong hover:opacity-80 transition-opacity duration-300 ${linkSize[size]} ${width} ${extra}`.trim();
  }
  if (variant === 'ghost') {
    const width = fullWidth ? 'w-full' : '';
    return `${base} ${sizeMap[size]} text-fg-mid hover:text-fg-strong ${width} ${extra}`.trim();
  }
  if (variant === 'outline') {
    const width = fullWidth ? 'w-full' : '';
    return `${base} ${sizeMap[size]} text-fg-strong border border-border-strong hover:border-fg-strong bg-bg-elevated/40 backdrop-blur ${width} ${extra}`.trim();
  }
  // solid — aurora gradient with hover swap (Watch Demo style)
  const width = fullWidth ? 'w-full' : '';
  return `${base} ${sizeMap[size]} text-white ${width} ${extra}`.trim();
}

function solidStyle(): React.CSSProperties {
  return { background: 'var(--grad-aurora)', backgroundSize: '200% 200%' };
}

export const CTA = forwardRef<HTMLButtonElement, ButtonProps>(function CTA(
  { variant = 'solid', size = 'md', arrow = false, fullWidth = false, className = '', children, ...rest },
  ref,
) {
  const cls = computeClasses(variant, size, fullWidth, className);
  const style = variant === 'solid' ? solidStyle() : undefined;
  const body =
    variant === 'solid' ? <SolidBody arrow={arrow}>{children}</SolidBody> : <OutlineBody arrow={arrow}>{children}</OutlineBody>;

  const btn = (
    <button ref={ref} className={cls} style={style} {...rest}>
      {body}
    </button>
  );

  // Wrap magnetic for solid + outline (skip ghost/link for subtle behavior)
  if (variant === 'solid' || variant === 'outline') {
    return <Magnetic strength={variant === 'solid' ? 0.35 : 0.25}>{btn}</Magnetic>;
  }
  return btn;
});

export function CTALink({
  variant = 'solid',
  size = 'md',
  arrow = false,
  fullWidth = false,
  className = '',
  href,
  children,
  ...rest
}: AnchorProps) {
  const cls = computeClasses(variant, size, fullWidth, className);
  const style = variant === 'solid' ? solidStyle() : undefined;
  const isExternal = /^https?:\/\//.test(href);
  const body =
    variant === 'solid' ? <SolidBody arrow={arrow}>{children}</SolidBody> : <OutlineBody arrow={arrow}>{children}</OutlineBody>;

  const anchor = isExternal ? (
    <a href={href} className={cls} style={style} target="_blank" rel="noopener noreferrer" {...rest}>
      {body}
    </a>
  ) : (
    <Link href={href} className={cls} style={style} {...rest}>
      {body}
    </Link>
  );

  if (variant === 'solid' || variant === 'outline') {
    return <Magnetic strength={variant === 'solid' ? 0.35 : 0.25}>{anchor}</Magnetic>;
  }
  return anchor;
}
