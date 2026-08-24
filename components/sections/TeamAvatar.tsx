'use client';

import { useState } from 'react';
import Image from 'next/image';

/*
  Portrait with initials fallback. Shared by the home preview card and the
  detailed profile on /teams, so photo handling lives in one place.

  Takes primitives rather than the whole member object — a client component
  serializes every prop it receives into the payload, and biographies must not
  ship with the home page.
*/
export function TeamAvatar({
  src,
  alt,
  initials,
  sizes,
  className = '',
}: {
  src?: string | null;
  alt: string;
  initials: string;
  sizes: string;
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showPhoto = Boolean(src) && !imageFailed;

  return (
    <div className={`relative overflow-hidden rounded-md2 border border-border bg-surface ${className}`}>
      {showPhoto ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          onError={() => setImageFailed(true)}
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-2" aria-hidden="true">
          <span className="text-h2 text-fg-faint tracking-tight">{initials}</span>
        </div>
      )}
    </div>
  );
}
