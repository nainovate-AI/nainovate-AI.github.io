export function formatNumber(n: number, digits = 0): string {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatCurrency(n: number, currency = 'USD'): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
}

export function formatPercent(n: number, digits = 1): string {
  return `${n.toFixed(digits)}%`;
}

export function formatDelta(delta: string, dir: 'up' | 'down'): string {
  const sign = dir === 'up' ? '+' : '-';
  return delta.startsWith('+') || delta.startsWith('-') ? delta : `${sign}${delta}`;
}
