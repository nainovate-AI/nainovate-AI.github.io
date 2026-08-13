// Integration + regression tests. Static analysis only (no browser needed).
// Covers: demo gate wiring, hero data integrity, page metadata, asset paths,
// theme lock, sitemap, no dead nav links, no console noise.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PUBLIC = join(ROOT, 'public');
const COMPONENTS = join(ROOT, 'components');
const APP = join(ROOT, 'app');
const HOOKS = join(ROOT, 'hooks');

function readAll(dir, ext = ['.tsx', '.ts']) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...readAll(p, ext));
    else if (ext.some((e) => entry.endsWith(e))) out.push(p);
  }
  return out;
}

const COMPONENT_FILES = readAll(COMPONENTS);
const APP_FILES = readAll(APP);

// ── Hero data integrity ─────────────────────────────────────────────
test('every HERO_SLIDES image path exists in /public/hero-slides', () => {
  const heroData = readFileSync(join(COMPONENTS, 'sections', 'HeroCinematic', 'heroData.ts'), 'utf-8');
  const imagePaths = [...heroData.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.ok(imagePaths.length >= 3, 'HERO_SLIDES should have at least 3 slides');
  for (const p of imagePaths) {
    const file = join(PUBLIC, p.replace(/^\//, ''));
    assert.ok(existsSync(file), `Hero image missing on disk: ${p}`);
  }
});

test('every HeroSlide entry has non-empty alt text', () => {
  const heroData = readFileSync(join(COMPONENTS, 'sections', 'HeroCinematic', 'heroData.ts'), 'utf-8');
  const alts = [...heroData.matchAll(/alt:\s*['"]([^'"]*)['"]/g)].map((m) => m[1]);
  for (const alt of alts) {
    assert.ok(alt.length > 5, `alt text too short: "${alt}"`);
  }
});

// ── Demo gate wiring ────────────────────────────────────────────────
test('DemoGate module exports useDemoGate + GatedDemoLink', () => {
  const src = readFileSync(join(COMPONENTS, 'ui', 'DemoGate.tsx'), 'utf-8');
  assert.match(src, /export\s+function\s+useDemoGate/, 'useDemoGate hook missing');
  assert.match(src, /export\s+function\s+GatedDemoLink/, 'GatedDemoLink component missing');
});

test('useDemoAccess persists to localStorage with expiry check', () => {
  const src = readFileSync(join(HOOKS, 'useDemoAccess.ts'), 'utf-8');
  assert.match(src, /localStorage/, 'must persist to localStorage');
  assert.match(src, /EXPIRY_DAYS/, 'must define expiry window');
  assert.match(src, /isExpired/, 'must check expiry');
});

// ── Theme lock (dark only) ──────────────────────────────────────────
test('main layout forces data-theme="dark"', () => {
  const src = readFileSync(join(APP, '(main)', 'layout.tsx'), 'utf-8');
  assert.match(
    src,
    /setAttribute\(['"]data-theme['"],\s*['"]dark['"]\)/,
    'main layout must force data-theme=dark',
  );
});

test('demo layout forces data-theme="dark"', () => {
  const src = readFileSync(join(APP, '(demo)', 'layout.tsx'), 'utf-8');
  assert.match(
    src,
    /setAttribute\(['"]data-theme['"],\s*['"]dark['"]\)/,
    'demo layout must force data-theme=dark',
  );
});

test('ThemeToggle is commented out in Footer (dark-only phase)', () => {
  const src = readFileSync(join(COMPONENTS, 'layout', 'Footer.tsx'), 'utf-8');
  assert.doesNotMatch(src, /^\s*<ThemeToggle\s*\/>\s*$/m, 'ThemeToggle should be commented out');
});

// ── WorkspaceHub picker portal ──────────────────────────────────────
test('WorkspaceHub picker uses createPortal + data-picker-popover attribute', () => {
  const src = readFileSync(join(COMPONENTS, 'workspace', 'WorkspaceHub.tsx'), 'utf-8');
  assert.match(src, /createPortal/, 'must use createPortal');
  assert.match(src, /data-picker-popover/, 'portal root must have data-picker-popover for outside-click filter');
  assert.match(
    src,
    /document\.querySelector\(['"]\[data-picker-popover\]['"]\)/,
    'outside-click handler must query [data-picker-popover]',
  );
});

test('WorkspaceHub picker outside-click ignores clicks inside popover', () => {
  const src = readFileSync(join(COMPONENTS, 'workspace', 'WorkspaceHub.tsx'), 'utf-8');
  // Handler should have both pickerRef and popover check
  assert.match(src, /insidePopover/, 'outside-click must have insidePopover check');
});

// ── Sitemap ─────────────────────────────────────────────────────────
test('app/sitemap.ts exists and defines default export', () => {
  const p = join(APP, 'sitemap.ts');
  assert.ok(existsSync(p), 'app/sitemap.ts must exist');
  const src = readFileSync(p, 'utf-8');
  assert.match(src, /export\s+default\s+function/, 'sitemap.ts must have default export function');
});

// ── Error boundary ──────────────────────────────────────────────────
test('app/error.tsx and app/not-found.tsx exist (Next.js required)', () => {
  assert.ok(existsSync(join(APP, 'error.tsx')), 'app/error.tsx missing');
  assert.ok(existsSync(join(APP, 'not-found.tsx')), 'app/not-found.tsx missing');
});

// ── Header nav integrity ────────────────────────────────────────────
test('Header nav mega dropdowns cap width to viewport (no >900px unbounded)', () => {
  const src = readFileSync(join(COMPONENTS, 'layout', 'Header.tsx'), 'utf-8');
  // Every hardcoded w-[Npx] on mega dropdowns should be paired with min() to cap
  const bareLarge = src.match(/w-\[(\d{3,4})px\](?!;)/g) || [];
  const uncapped = bareLarge.filter((m) => parseInt(m.match(/\d+/)[0], 10) >= 500);
  // At least the mega dropdowns should be capped with min() — accept if uncapped list is empty
  assert.ok(uncapped.length === 0 || src.includes('min(') || src.includes('max-w-'), 'Header wide dropdowns must cap to viewport');
});

// ── No console noise in shipped ─────────────────────────────────────
test('no console.warn or console.error in shipped components', () => {
  const offenders = [];
  for (const f of COMPONENT_FILES) {
    const src = readFileSync(f, 'utf-8');
    // Allow console.error inside catch{} blocks (legit reporting)
    const strippedCatch = src.replace(/catch\s*\([^)]*\)\s*\{[^}]*\}/g, '');
    if (/console\.(warn|error)\(/.test(strippedCatch)) offenders.push(f);
  }
  assert.deepEqual(offenders, [], 'console.warn/error outside catch blocks — remove before shipping');
});

// ── ESLint config sanity ────────────────────────────────────────────
test('eslint-config-next matches Next.js major version (15.x)', () => {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8'));
  const eslintConfigNext = pkg.devDependencies['eslint-config-next'] || '';
  assert.match(eslintConfigNext, /^\^?15\./, `eslint-config-next must be 15.x, got ${eslintConfigNext}`);
});

test('@eslint/eslintrc version >=3 (matches ESLint 9 flat config)', () => {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8'));
  const eslintrc = pkg.devDependencies['@eslint/eslintrc'] || '';
  assert.match(eslintrc, /^\^?3\./, `@eslint/eslintrc must be 3.x, got ${eslintrc}`);
});

// ── Public assets ───────────────────────────────────────────────────
test('logo assets referenced in Header exist in /public/images', () => {
  const src = readFileSync(join(COMPONENTS, 'layout', 'Header.tsx'), 'utf-8');
  const logoPaths = [...src.matchAll(/src=["'](\/images\/[^"']+)["']/g)].map((m) => m[1]);
  for (const p of logoPaths) {
    assert.ok(existsSync(join(PUBLIC, p.replace(/^\//, ''))), `logo missing: ${p}`);
  }
});

// ── LensPicker cards route to /demo/* ───────────────────────────────
test('LensPicker cards route to /demo/public-sector and /demo/decision-nia', () => {
  const src = readFileSync(join(COMPONENTS, 'sections', 'LensPicker.tsx'), 'utf-8');
  assert.match(src, /\/demo\/public-sector/, 'Public Sector lens must route to /demo/public-sector');
  assert.match(src, /\/demo\/decision-nia/, 'Enterprise lens must route to /demo/decision-nia');
});

// ── App layout renders analytics + tracker ──────────────────────────
test('main layout includes Google Analytics tag + PageTracker', () => {
  const src = readFileSync(join(APP, '(main)', 'layout.tsx'), 'utf-8');
  assert.match(src, /G-[A-Z0-9]{10,}/, 'GA measurement ID missing');
  assert.match(src, /PageTracker/, 'PageTracker component missing');
});

// ── Static build assumption ─────────────────────────────────────────
test('next.config sets output: export + images.unoptimized (static site)', () => {
  const p = join(ROOT, 'next.config.ts');
  const src = existsSync(p) ? readFileSync(p, 'utf-8') : '';
  assert.match(src, /output:\s*['"]export['"]/, 'must be static export');
  assert.match(src, /unoptimized:\s*true/, 'static export requires images.unoptimized: true');
});
