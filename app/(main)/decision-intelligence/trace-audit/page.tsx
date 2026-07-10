import { Metadata } from 'next';
import TraceAuditClient from '@/components/pages/TraceAuditClient';

export const metadata: Metadata = {
  title: 'Trace & Audit — Explainable AI decisions | Nainovate',
  description: 'Every AI decision logged with confidence, weighted signals, and evidence rows. Legal-audit ready. Zero black box.',
  keywords: 'AI trace, AI audit, explainable AI, decision lineage, agent confidence, compliance',
};

export default function TraceAuditPage() {
  return <TraceAuditClient />;
}
