export function initials(name: string, max = 2): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('');
}
