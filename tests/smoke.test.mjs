// Smoke test — verifies every critical route in the built static export
// exists as an index.html file. Run with `npm test` after `npm run build`.
//
// This test does not spin up a server; it validates the export output
// directly. No external deps.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = new URL('../out/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/reports',
  '/platform',
  '/platform/nia',
  '/platform/core',
  '/platform/flow',
  '/platform/integrations',
  '/platform/ai-engineering-tools',
  '/platform/search-data-ai',
  '/platform/security-governance',
  '/platform/development-tools',
  '/solutions',
  '/solutions/operations',
  '/solutions/engagement',
  '/solutions/intelligence',
  '/solutions/customer-support',
  '/solutions/customer-success',
  '/solutions/sales',
  '/solutions/delivery',
  '/decision-intelligence',
  '/decision-intelligence/ai-agent',
  '/decision-intelligence/signal-chain',
  '/decision-intelligence/trace-audit',
  '/decision-intelligence/coordination',
  '/demo',
  '/demo/decision-nia',
  '/demo/operations',
  '/ai-center-of-excellence',
  '/ai-implementation-index',
  '/ai-readiness-report-2025',
];

test('build output exists', () => {
  assert.ok(existsSync(OUT), `Expected ${OUT} to exist — run \`npm run build\` first`);
});

test('every critical route is prerendered as index.html', () => {
  for (const route of ROUTES) {
    const path = route === '/' ? join(OUT, 'index.html') : join(OUT, route, 'index.html');
    assert.ok(existsSync(path), `Missing built file for route ${route} (expected ${path})`);
    const size = statSync(path).size;
    assert.ok(size > 500, `Route ${route} produced suspiciously small HTML (${size} bytes)`);
  }
});

function visibleText(html) {
  // Strip <script>, <style>, and comments — leaves only user-visible markup
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
}

test('no route HTML contains raw undefined placeholders visible to user', () => {
  for (const route of ROUTES) {
    const path = route === '/' ? join(OUT, 'index.html') : join(OUT, route, 'index.html');
    const visible = visibleText(readFileSync(path, 'utf-8'));
    const leakMatch = visible.match(/>[^<]*\bundefined\b[^<]*</);
    assert.equal(leakMatch, null, `Route ${route} contains undefined leak: ${leakMatch?.[0]}`);
  }
});

test('no route HTML contains raw NaN in visible text', () => {
  for (const route of ROUTES) {
    const path = route === '/' ? join(OUT, 'index.html') : join(OUT, route, 'index.html');
    const visible = visibleText(readFileSync(path, 'utf-8'));
    const nanMatch = visible.match(/>[^<]*\bNaN\b[^<]*</);
    assert.equal(nanMatch, null, `Route ${route} contains NaN leak: ${nanMatch?.[0]}`);
  }
});

test('all internal hrefs point to routes that exist in the build', () => {
  const missing = new Set();
  const seen = new Set();

  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const p = join(dir, entry);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (entry.endsWith('.html')) {
        const html = readFileSync(p, 'utf-8');
        const matches = html.matchAll(/href="(\/[^"#]+)"/g);
        for (const m of matches) {
          const href = m[1];
          if (
            href.startsWith('/_next') ||
            href.startsWith('/images') ||
            href.startsWith('/icon') ||
            href.startsWith('/kb') ||
            href.startsWith('/hero-slides')
          ) continue;
          if (seen.has(href)) continue;
          seen.add(href);
          const normalized = href.endsWith('/') ? href.slice(0, -1) : href;
          const path = normalized === '' ? join(OUT, 'index.html') : join(OUT, normalized, 'index.html');
          if (!existsSync(path)) missing.add(href);
        }
      }
    }
  }
  walk(OUT);
  assert.deepEqual([...missing], [], 'Broken internal links found');
});
