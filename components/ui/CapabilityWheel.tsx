'use client';

/*
  CapabilityWheel
  Radial diagram — 7 capability nodes orbiting a GenX core.
  Aurora-tinted lines pulse in sequence. Pure SVG + CSS animation.
  Dark-first, premium enterprise aesthetic. Replaces NeuralNetwork.
*/
const CAPS = [
  { label: 'Observe',    angle:   0 },
  { label: 'Understand', angle:  51.4 },
  { label: 'Recommend',  angle: 102.8 },
  { label: 'Coordinate', angle: 154.2 },
  { label: 'Execute',    angle: 205.7 },
  { label: 'Monitor',    angle: 257.1 },
  { label: 'Learn',      angle: 308.5 },
];

const CX = 200;
const CY = 200;
const ORBIT_R = 140;
const NODE_R = 22;

function polar(angleDeg: number, r: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r };
}

export function CapabilityWheel() {
  const nodes = CAPS.map((c) => ({ ...c, ...polar(c.angle, ORBIT_R) }));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[440px] max-h-[440px]"
        role="img"
        aria-label="Seven-capability decision intelligence wheel"
      >
        <defs>
          <radialGradient id="cw-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#6d28d9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3730a3" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="cw-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="50%"  stopColor="#8b5cf6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
          </linearGradient>

          <radialGradient id="cw-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#c4b5fd" />
            <stop offset="55%"  stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3730a3" />
          </radialGradient>

          <filter id="cw-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer orbit ring */}
        <circle
          cx={CX} cy={CY} r={ORBIT_R}
          fill="none"
          stroke="rgba(139,92,246,0.18)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        {/* Second inner ring */}
        <circle
          cx={CX} cy={CY} r={ORBIT_R - 55}
          fill="none"
          stroke="rgba(34,211,238,0.1)"
          strokeWidth="1"
        />

        {/* Spokes from core to each node */}
        {nodes.map((n, i) => (
          <line
            key={`spoke-${i}`}
            x1={CX} y1={CY} x2={n.x} y2={n.y}
            stroke="url(#cw-line)"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}

        {/* Connector arcs between adjacent nodes */}
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length];
          return (
            <path
              key={`arc-${i}`}
              d={`M ${n.x} ${n.y} A ${ORBIT_R} ${ORBIT_R} 0 0 1 ${next.x} ${next.y}`}
              fill="none"
              stroke="rgba(139,92,246,0.25)"
              strokeWidth="1.25"
            />
          );
        })}

        {/* Traveling pulse — orbit path */}
        <circle r="3" fill="#22d3ee" filter="url(#cw-glow)">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path={`M ${CX + ORBIT_R} ${CY} A ${ORBIT_R} ${ORBIT_R} 0 1 1 ${CX + ORBIT_R - 0.01} ${CY}`}
          />
        </circle>
        <circle r="2" fill="#ec4899" filter="url(#cw-glow)" opacity="0.85">
          <animateMotion
            dur="9s"
            begin="-3s"
            repeatCount="indefinite"
            path={`M ${CX + ORBIT_R} ${CY} A ${ORBIT_R} ${ORBIT_R} 0 1 1 ${CX + ORBIT_R - 0.01} ${CY}`}
          />
        </circle>
        <circle r="2" fill="#c4b5fd" filter="url(#cw-glow)" opacity="0.7">
          <animateMotion
            dur="9s"
            begin="-6s"
            repeatCount="indefinite"
            path={`M ${CX + ORBIT_R} ${CY} A ${ORBIT_R} ${ORBIT_R} 0 1 1 ${CX + ORBIT_R - 0.01} ${CY}`}
          />
        </circle>

        {/* Core */}
        <circle cx={CX} cy={CY} r="46" fill="url(#cw-core)" />
        <circle
          cx={CX} cy={CY} r="30"
          fill="rgba(10,10,20,0.85)"
          stroke="rgba(139,92,246,0.6)"
          strokeWidth="1.25"
        />
        <text
          x={CX} y={CY - 2}
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="0.5"
        >
          GenX
        </text>
        <text
          x={CX} y={CY + 12}
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="7"
          fontWeight="600"
          fill="rgba(255,255,255,0.55)"
          letterSpacing="1.5"
        >
          DECISION CORE
        </text>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={n.x} cy={n.y} r={NODE_R + 4}
              fill="rgba(139,92,246,0.14)"
              className="cw-halo"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <circle
              cx={n.x} cy={n.y} r={NODE_R}
              fill="url(#cw-node)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            <text
              x={n.x} y={n.y + 3}
              textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8.5"
              fontWeight="700"
              fill="#ffffff"
              letterSpacing="0.4"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
            {/* Label ring — sits just outside the node */}
            <text
              x={n.x + (n.x - CX) * 0.22}
              y={n.y + (n.y - CY) * 0.22 + 3}
              textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="10"
              fontWeight="600"
              fill="rgba(255,255,255,0.78)"
              letterSpacing="0.3"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
