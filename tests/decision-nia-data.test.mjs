// Data-integrity test for the WorkspaceHub (Decision NIA / Lens 2).
// Verifies the ASK_BUNDLE + COMMAND_DATA + TRACE_DATA structures inside
// WorkspaceHub.tsx have complete data for all 4 spaces.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const FILE = new URL('../components/workspace/WorkspaceHub.tsx', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const SRC = readFileSync(FILE, 'utf-8');

const SPACES = ['customer-success', 'customer-support', 'sales', 'delivery'];
const FEATURES = ['command-center', 'ask', 'dashboard', 'trace'];

test('all 4 spaces are declared in SPACES array', () => {
  for (const space of SPACES) {
    assert.match(SRC, new RegExp(`key:\\s*'${space}'`), `SPACES missing entry for ${space}`);
  }
});

test('all 4 features are declared in FEATURES array', () => {
  for (const feature of FEATURES) {
    assert.match(SRC, new RegExp(`key:\\s*'${feature}'`), `FEATURES missing entry for ${feature}`);
  }
});

function blockBetween(src, startMarker, endMarker) {
  const s = src.indexOf(startMarker);
  const e = src.indexOf(endMarker, s + 1);
  if (s < 0 || e < 0) return '';
  return src.slice(s, e);
}

test('COMMAND_DATA has entries for all 4 spaces', () => {
  const block = blockBetween(SRC, 'const COMMAND_DATA:', 'function CommandCenter(');
  for (const space of SPACES) {
    assert.match(block, new RegExp(`(?:'${space}'|${space}):`), `COMMAND_DATA missing space ${space}`);
  }
});

test('ASK_BUNDLE has entries for all 4 spaces', () => {
  const block = blockBetween(SRC, 'const ASK_BUNDLE:', 'function Ask(');
  for (const space of SPACES) {
    assert.match(block, new RegExp(`(?:'${space}'|${space}):`), `ASK_BUNDLE missing space ${space}`);
  }
});

test('TRACE_DATA has entries for all 4 spaces', () => {
  const block = blockBetween(SRC, 'const TRACE_DATA:', 'function Trace(');
  for (const space of SPACES) {
    assert.match(block, new RegExp(`(?:'${space}'|${space}):`), `TRACE_DATA missing space ${space}`);
  }
});

test('Ask component uses onNavigate for cross-feature nav', () => {
  assert.match(SRC, /function Ask\({[^}]*onNavigate/, 'Ask must receive onNavigate prop');
  assert.match(SRC, /onNavigate\('dashboard'\)/, 'Ask should navigate to dashboard on "View all at-risk"');
});

test('Trace outcome modal is wired', () => {
  assert.match(SRC, /OutcomeDetailModal/, 'OutcomeDetailModal function missing');
  assert.match(SRC, /setSelected\(o\)/, 'Trace outcome row should setSelected on click');
});

test('space picker popover is opaque (solid bg not transparent)', () => {
  // Guards against the transparency bug we hit earlier
  const popoverMatch = SRC.match(/absolute top-0 left-full[^"]*"/);
  assert.ok(popoverMatch, 'Space picker popover className must be present');
  assert.match(popoverMatch[0], /bg-(black|bg)\b/, 'Popover must have solid bg (bg-black or bg-bg) to avoid transparent overlap');
  assert.doesNotMatch(popoverMatch[0], /bg-white\/\[0\.03\]/, 'Popover must not be transparent');
});

test('lookupAnswer + FALLBACK + ASK_BUNDLE all present', () => {
  assert.match(SRC, /function lookupAnswer/, 'lookupAnswer helper missing');
  assert.match(SRC, /const FALLBACK:/, 'FALLBACK answer missing');
  assert.match(SRC, /function tokenize/, 'tokenize helper missing');
  assert.match(SRC, /const ASK_BUNDLE:/, 'ASK_BUNDLE missing');
});

test('Ask composer submits on Enter + button', () => {
  assert.match(SRC, /onKeyDown={\(e\) =>[^}]+submit\(input\)/, 'Composer should submit on Enter');
  assert.match(SRC, /onClick={\(\) => submit\(input\)}/, 'Composer button should submit on click');
});

test('right rail falls back to seed rails when current answer lacks them', () => {
  assert.match(SRC, /railInsights/, 'Must define railInsights fallback var');
  assert.match(SRC, /railActions/, 'Must define railActions fallback var');
  assert.match(SRC, /\?\?\s*seed\.keyInsightsRail/, 'railInsights must fall back to seed');
});
