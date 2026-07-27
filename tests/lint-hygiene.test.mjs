// Codebase hygiene test — catches things eslint + tsc miss.
// - No stray console.log (console.error/warn OK for real error handling)
// - No <a href="#"> dead links
// - No orphan `TODO(...)` markers in shipped components
// - No hardcoded /try-demo (should be /demo)

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const COMPONENTS = join(ROOT, 'components');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) out.push(p);
  }
  return out;
}

const FILES = walk(COMPONENTS);

test('no stray console.log in shipped components', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    const lines = src.split('\n');
    lines.forEach((line, i) => {
      if (/^\s*console\.log\(/.test(line)) {
        offenders.push(`${f}:${i + 1} — ${line.trim()}`);
      }
    });
  }
  assert.deepEqual(offenders, [], 'Remove stray console.log calls');
});

test('no dead href="#" links', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    if (/href="#"/.test(src)) {
      offenders.push(f);
    }
  }
  assert.deepEqual(offenders, [], 'Replace dead href="#" with real routes or button onClick');
});

test('no orphan TODO markers in shipped components', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    if (/\/\/\s*TODO\b|\bTODO\(/.test(src)) {
      offenders.push(f);
    }
  }
  assert.deepEqual(offenders, [], 'Resolve TODO markers before shipping');
});

test('no legacy /try-demo hrefs', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    if (/["']\/try-demo["']/.test(src)) {
      offenders.push(f);
    }
  }
  assert.deepEqual(offenders, [], 'Legacy /try-demo route — use /demo instead');
});

test('no hardcoded hex or rgba colors in WorkspaceHub (must use CSS vars)', () => {
  const target = join(COMPONENTS, 'workspace', 'WorkspaceHub.tsx');
  const src = readFileSync(target, 'utf-8');
  const hexMatches = src.match(/#[0-9a-fA-F]{6}\b/g) || [];
  const rgbaMatches = src.match(/rgba\(/g) || [];
  assert.equal(hexMatches.length, 0, `Hardcoded hex colors found: ${hexMatches.slice(0, 5).join(', ')}`);
  assert.equal(rgbaMatches.length, 0, 'Hardcoded rgba() values found — use var(--gd-*) tokens');
});

test('no hardcoded localhost:3000 or 4000 URLs', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    if (/localhost:\d+/.test(src)) {
      offenders.push(f);
    }
  }
  assert.deepEqual(offenders, [], 'Remove localhost URLs before production');
});

test('no client-only APIs referenced outside "use client" boundaries', () => {
  const offenders = [];
  for (const f of FILES) {
    const src = readFileSync(f, 'utf-8');
    const hasUseClient = /^\s*['"]use client['"]/m.test(src);
    if (hasUseClient) continue;
    if (/\buseState\b|\buseEffect\b|\buseRef\b|window\.|document\./.test(src)) {
      offenders.push(f);
    }
  }
  assert.deepEqual(offenders, [], 'Server components must not use client-only hooks/APIs');
});
