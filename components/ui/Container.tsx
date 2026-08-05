import { ElementType, HTMLAttributes } from 'react';

type Size = 'narrow' | 'default' | 'wide' | 'full';

const sizeMap: Record<Size, string> = {
  narrow: 'max-w-container-narrow',
  default: 'max-w-container',
  wide: 'max-w-container-wide',
  full: 'max-w-container-full',
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  as?: ElementType;
}

export function Container({
  size = 'wide',
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={`${sizeMap[size]} mx-auto px-4 sm:px-6 md:px-8 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
