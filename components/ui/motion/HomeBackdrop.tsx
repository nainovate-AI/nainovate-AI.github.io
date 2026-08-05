'use client';

import { Orb3D } from './Orb3D';

/**
 * HomeBackdrop
 * Full-height ambient aurora layer that sits behind all homepage sections.
 * Uses absolute positioning so it spans the entire page height and orbs
 * are distributed at varied vertical positions (revealed as user scrolls).
 * Sections above must be transparent (or subtly translucent) to let it show.
 */
export function HomeBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden perspective-lg"
    >
      {/* Base wash — very subtle aurora radial */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 15%, rgba(139,92,246,0.08), transparent 55%), radial-gradient(ellipse at 80% 45%, rgba(34,211,238,0.05), transparent 55%), radial-gradient(ellipse at 30% 78%, rgba(236,72,153,0.06), transparent 55%)',
        }}
      />

      {/* Distributed 3D floating orbs — placed at scroll milestones */}

      {/* Above the fold — top-left violet-pink */}
      <Orb3D
        size="48vw"
        variant="violet-pink"
        floatSpeed={1}
        blur={90}
        opacity={0.32}
        className="top-[-8%] left-[-12%]"
      />
      {/* Above the fold — top-right indigo-cyan */}
      <Orb3D
        size="42vw"
        variant="indigo-cyan"
        floatSpeed={2}
        blur={90}
        opacity={0.24}
        className="top-[6%] right-[-14%]"
      />

      {/* Below fold (~scroll 1) — center cyan-emerald */}
      <Orb3D
        size="38vw"
        variant="cyan-emerald"
        floatSpeed={3}
        blur={85}
        opacity={0.18}
        className="top-[45%] left-[35%]"
      />

      {/* Mid page — left pink-orange */}
      <Orb3D
        size="46vw"
        variant="pink-orange"
        floatSpeed={2}
        blur={95}
        opacity={0.22}
        className="top-[80%] left-[-15%]"
      />

      {/* Mid-lower — right aurora */}
      <Orb3D
        size="44vw"
        variant="aurora"
        floatSpeed={1}
        blur={100}
        opacity={0.24}
        className="top-[115%] right-[-16%]"
      />

      {/* Lower page — indigo-cyan */}
      <Orb3D
        size="40vw"
        variant="indigo-cyan"
        floatSpeed={2}
        blur={90}
        opacity={0.2}
        className="top-[150%] left-[-10%]"
      />

      {/* Near footer — violet-pink */}
      <Orb3D
        size="50vw"
        variant="violet-pink"
        floatSpeed={3}
        blur={100}
        opacity={0.26}
        className="top-[190%] right-[-18%]"
      />

      {/* Grain overlay for tactile depth */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle grid — reads as tech infrastructure. Very low opacity so it doesn't fight orbs. */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          opacity: 0.25,
        }}
      />
    </div>
  );
}
