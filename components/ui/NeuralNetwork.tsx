'use client';

import { useEffect, useRef } from 'react';

function getIsDark(): boolean {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'light') return false;
  if (explicit === 'dark') return true;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

type Node = {
  x0: number; y0: number; z0: number; // original 3D
  x: number; y: number; z: number;    // rotated
  size: number;
  hue: number; // 0..360
  connections: number[];
};

// Aurora palette (violet → pink → cyan → indigo) — cycles by node hue
function auroraColor(hue: number, alpha: number): string {
  const stops: Array<[number, [number, number, number]]> = [
    [0,   [139, 92, 246]],   // violet
    [90,  [236, 72, 153]],   // pink
    [180, [34, 211, 238]],   // cyan
    [270, [99, 102, 241]],   // indigo
    [360, [139, 92, 246]],   // wrap
  ];
  const h = ((hue % 360) + 360) % 360;
  let a = stops[0], b = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (h >= stops[i][0] && h <= stops[i + 1][0]) { a = stops[i]; b = stops[i + 1]; break; }
  }
  const t = (h - a[0]) / (b[0] - a[0] || 1);
  const r = Math.round(a[1][0] + (b[1][0] - a[1][0]) * t);
  const g = Math.round(a[1][1] + (b[1][1] - a[1][1]) * t);
  const bl = Math.round(a[1][2] + (b[1][2] - a[1][2]) * t);
  return `rgba(${r},${g},${bl},${alpha})`;
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // HiDPI setup
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0;
    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let isDark = getIsDark();

    // Build nodes on Fibonacci sphere for even 3D distribution
    const NODE_COUNT = 26;
    const R = 130;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2; // -1..1
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      nodes.push({
        x0: x * R, y0: y * R, z0: z * R,
        x: 0, y: 0, z: 0,
        size: 2 + Math.random() * 2,
        hue: (i / NODE_COUNT) * 360,
        connections: [],
      });
    }

    // Connect each node to its 3 nearest neighbors (deduped)
    const connSet = new Set<string>();
    for (let i = 0; i < NODE_COUNT; i++) {
      const dists = nodes.map((n, j) => ({
        j,
        d: (n.x0 - nodes[i].x0) ** 2 + (n.y0 - nodes[i].y0) ** 2 + (n.z0 - nodes[i].z0) ** 2,
      })).filter(x => x.j !== i).sort((a, b) => a.d - b.d);
      for (let k = 0; k < 3; k++) {
        const pair = [Math.min(i, dists[k].j), Math.max(i, dists[k].j)].join('-');
        if (!connSet.has(pair)) {
          connSet.add(pair);
          nodes[i].connections.push(dists[k].j);
        }
      }
    }

    let rotY = 0, rotX = 0;
    let animationId: number;
    let t = 0;

    function animate() {
      if (!canvas || !ctx) return;
      t += 0.016;
      rotY += 0.004;
      // Ease rotX toward pointer
      const targetX = pointerRef.current.active ? (pointerRef.current.y - 0.5) * 0.8 : Math.sin(t * 0.3) * 0.15;
      const targetY = pointerRef.current.active ? (pointerRef.current.x - 0.5) * 0.8 : 0;
      rotX += (targetX - rotX) * 0.06;
      rotY += (targetY * 0.01);

      const cx = width / 2;
      const cy = height / 2;

      // Rotate nodes
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      for (const n of nodes) {
        // Y-axis rotation
        const x1 = n.x0 * cosY - n.z0 * sinY;
        const z1 = n.z0 * cosY + n.x0 * sinY;
        // X-axis rotation
        const y1 = n.y0 * cosX - z1 * sinX;
        const z2 = z1 * cosX + n.y0 * sinX;
        n.x = x1; n.y = y1; n.z = z2;
      }

      // Trail fade
      const bgRGB = isDark ? '0,0,0' : '255,255,255';
      ctx.fillStyle = `rgba(${bgRGB},0.12)`;
      ctx.fillRect(0, 0, width, height);

      const FOG = 260;
      const perspective = (z: number) => FOG / (FOG + z);

      // Draw connections
      const drawn = new Set<string>();
      for (let i = 0; i < NODE_COUNT; i++) {
        const a = nodes[i];
        const sa = perspective(a.z);
        const ax = cx + a.x * sa, ay = cy + a.y * sa;
        for (const j of a.connections) {
          const key = [i, j].sort().join('-');
          if (drawn.has(key)) continue;
          drawn.add(key);
          const b = nodes[j];
          const sb = perspective(b.z);
          const bx = cx + b.x * sb, by = cy + b.y * sb;
          const avgZ = (a.z + b.z) / 2;
          const depth = 1 - Math.max(0, Math.min(1, (avgZ + R) / (2 * R)));
          const alpha = 0.05 + depth * 0.35;

          // Gradient stroke — hue based on node position on wave
          const hue = (a.hue + b.hue) / 2 + t * 12;
          const grad = ctx.createLinearGradient(ax, ay, bx, by);
          grad.addColorStop(0, auroraColor(hue, alpha));
          grad.addColorStop(1, auroraColor(hue + 90, alpha));
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.4 + depth * 0.9;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      // Sort nodes back-to-front for correct occlusion
      const sorted = [...nodes].sort((a, b) => b.z - a.z);

      // Draw nodes with halo
      for (const n of sorted) {
        const s = perspective(n.z);
        const x = cx + n.x * s;
        const y = cy + n.y * s;
        const depth = 1 - Math.max(0, Math.min(1, (n.z + R) / (2 * R)));
        const hue = n.hue + t * 18;
        const r = n.size * s;

        // Halo glow
        const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
        halo.addColorStop(0, auroraColor(hue, 0.35 + depth * 0.35));
        halo.addColorStop(0.4, auroraColor(hue, 0.12 + depth * 0.15));
        halo.addColorStop(1, auroraColor(hue, 0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = auroraColor(hue, 0.85 + depth * 0.15);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        // Bright inner highlight
        ctx.fillStyle = isDark ? `rgba(255,255,255,${0.6 + depth * 0.4})` : `rgba(255,255,255,${0.9})`;
        ctx.beginPath();
        ctx.arc(x - r * 0.25, y - r * 0.25, r * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Pointer tracking for parallax
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerRef.current.x = (e.clientX - rect.left) / rect.width;
      pointerRef.current.y = (e.clientY - rect.top) / rect.height;
      pointerRef.current.active = true;
    };
    const onLeave = () => { pointerRef.current.active = false; };
    container.addEventListener('pointermove', onMove);
    container.addEventListener('pointerleave', onLeave);

    // Theme sync
    const syncTheme = () => {
      const next = getIsDark();
      if (next !== isDark) isDark = next;
    };
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', syncTheme);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      ro.disconnect();
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerleave', onLeave);
      observer.disconnect();
      mq.removeEventListener('change', syncTheme);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
