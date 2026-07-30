import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Replacement rules — mechanical, safe (exact strings, no regex on TSX identifiers)
const RULES = [
  // Section padding — reduce vertical rhythm
  ['py-14 md:py-20', 'py-8 md:py-12'],
  ['py-16 md:py-24', 'py-8 md:py-12'],
  ['py-20 md:py-32', 'py-8 md:py-12'],
  ['py-16 md:py-20', 'py-8 md:py-12'],
  ['py-12 md:py-24', 'py-8 md:py-12'],
  ['py-20 md:py-24', 'py-8 md:py-12'],
  ['py-24 md:py-32', 'py-8 md:py-12'],
  ['py-12 md:py-20', 'py-8 md:py-12'],
  ['py-10 md:py-20', 'py-8 md:py-12'],
  ['py-10 md:py-16', 'py-8 md:py-12'],
  ['py-32 md:py-40', 'py-8 md:py-12'],
  ['py-32 border-t', 'py-8 md:py-12 border-t'],
  ['py-32 border-b', 'py-8 md:py-12 border-b'],
  ['py-24 border-t', 'py-8 md:py-12 border-t'],
  ['py-24 border-b', 'py-8 md:py-12 border-b'],
  ['py-20 border-t', 'py-8 md:py-12 border-t'],
  ['py-20 border-b', 'py-8 md:py-12 border-b'],

  // Heading clamps — normalize to homepage scale
  ['text-[clamp(3rem,6vw,5rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(2.5rem,5vw,3.75rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(3rem,6vw,4.5rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(2.5rem,6vw,4rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(3rem,5vw,4rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(4rem,8vw,6rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(3.5rem,8vw,7rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(3rem,7vw,5rem)]', 'text-[clamp(2rem,4vw,3rem)]'],
  ['text-[clamp(4rem,8vw,7rem)]', 'text-[clamp(2rem,4vw,3rem)]'],

  // Duplicate sm:text-4xl left by earlier bad refactor
  ['text-4xl sm:text-3xl sm:text-4xl md:text-5xl', 'text-3xl sm:text-4xl md:text-5xl'],

  // Bare oversized headings
  ['text-6xl font-bold', 'text-3xl sm:text-4xl md:text-5xl font-bold'],
  ['text-7xl font-bold', 'text-3xl sm:text-4xl md:text-5xl font-bold'],
  ['text-8xl font-bold', 'text-3xl sm:text-4xl md:text-5xl font-bold'],

  // Bloated heading combos → homepage size ceiling
  ['text-4xl md:text-6xl', 'text-3xl sm:text-4xl md:text-5xl'],
  ['text-5xl md:text-6xl', 'text-3xl sm:text-4xl md:text-5xl'],
  ['text-5xl md:text-7xl', 'text-3xl sm:text-4xl md:text-5xl'],
  ['text-6xl md:text-7xl', 'text-3xl sm:text-4xl md:text-5xl'],
  ['text-6xl md:text-8xl', 'text-3xl sm:text-4xl md:text-5xl'],
  ['text-4xl md:text-5xl lg:text-6xl', 'text-3xl sm:text-4xl md:text-5xl'],

  // Oversized body text
  ['text-xl md:text-2xl text-fg-muted', 'text-base sm:text-lg lg:text-xl text-fg-muted'],
  ['text-2xl md:text-3xl text-fg-muted', 'text-base sm:text-lg lg:text-xl text-fg-muted'],
  ['text-xl md:text-2xl lg:text-3xl', 'text-base sm:text-lg lg:text-xl'],
  ['text-lg md:text-xl lg:text-2xl', 'text-base sm:text-lg lg:text-xl'],

  // Bloated margins
  ['mb-10 md:mb-20', 'mb-4 md:mb-6'],
  ['mb-16 md:mb-24', 'mb-6 md:mb-10'],
  ['mb-12 md:mb-20', 'mb-6 md:mb-10'],
  ['mb-8 md:mb-16', 'mb-6 md:mb-8'],
  ['mb-10 md:mb-16', 'mb-6 md:mb-8'],
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) out.push(p);
  }
  return out;
}

const roots = ['components/pages', 'components/sections', 'app'];
const files = roots.flatMap(walk);

const report = {};
let totalChanges = 0;

for (const file of files) {
  const before = readFileSync(file, 'utf8');
  let after = before;
  const perRule = {};
  for (const [from, to] of RULES) {
    if (!after.includes(from)) continue;
    const parts = after.split(from);
    const count = parts.length - 1;
    if (count > 0) {
      after = parts.join(to);
      perRule[from] = count;
    }
  }
  if (after !== before) {
    writeFileSync(file, after);
    const short = file.replace(/\\/g, '/').replace(/^.*\/(components|app)\//, '$1/');
    report[short] = perRule;
    totalChanges += Object.values(perRule).reduce((a, b) => a + b, 0);
  }
}

console.log(JSON.stringify(report, null, 2));
console.log('\nTOTAL EDITS:', totalChanges);
console.log('FILES TOUCHED:', Object.keys(report).length);
