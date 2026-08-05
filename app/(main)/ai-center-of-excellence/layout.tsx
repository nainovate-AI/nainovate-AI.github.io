import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Center of Excellence — Enterprise AI Governance & Strategy',
  description:
    'Stand up an AI Center of Excellence with Nainovate. Governance, model risk management, cross-functional alignment, and production playbooks for enterprise AI.',
  keywords:
    'AI Center of Excellence, AI CoE, enterprise AI governance, AI strategy, AI risk management, AI operating model',
  openGraph: {
    title: 'AI Center of Excellence — Nainovate',
    description:
      'Build the governance backbone for enterprise AI. Playbooks, patterns, and cross-functional alignment.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
