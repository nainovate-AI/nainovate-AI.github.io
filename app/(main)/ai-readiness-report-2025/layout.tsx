import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Report 2025 — Enterprise Benchmarks',
  description:
    'Where does your organization stand on enterprise AI? Download the 2025 AI Readiness Report — cross-industry benchmarks on data, governance, talent, and production readiness.',
  keywords:
    'AI readiness, AI benchmark, enterprise AI 2025, AI maturity, AI governance, AI data readiness, AI production',
  openGraph: {
    title: 'AI Readiness Report 2025 — Nainovate',
    description:
      'Benchmark your enterprise AI maturity across data, governance, talent, and production readiness.',
    images: ['/og-ai-readiness-report-2025.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Report 2025 — Nainovate',
    description:
      'Enterprise AI maturity benchmarks. Download the free report.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
