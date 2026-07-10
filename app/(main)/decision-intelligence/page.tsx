import { Metadata } from 'next';
import DecisionIntelligenceClient from '@/components/pages/DecisionIntelligenceClient';

export const metadata: Metadata = {
  title: 'Decision Intelligence — Explainable AI for Enterprise Support | Nainovate',
  description: 'Turn every ticket, signal, and AI decision into explainable outcomes. Nia sits on Freshdesk, CRM, and knowledge bases as a decision intelligence layer for support, success, sales, and delivery teams.',
  keywords: 'decision intelligence, explainable AI, AI agent, support co-pilot, watchlists, recommendations, workflow, trace audit, coordination',
};

export default function DecisionIntelligencePage() {
  return <DecisionIntelligenceClient />;
}
