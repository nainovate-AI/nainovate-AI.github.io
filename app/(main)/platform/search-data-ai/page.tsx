import { Metadata } from 'next';
import SearchDataAIClient from '@/components/pages/SearchDataAIClient';

export const metadata: Metadata = {
  title: 'Search + Data AI - Enterprise Knowledge Access | Nainovate GenX',
  description: 'Retrieve accurate, real-time insights with agentic RAG, hybrid vector search, and 100+ enterprise connectors. Unified knowledge access across all systems.',
  keywords: 'enterprise search, RAG, vector search, data connectors, knowledge graph, GenX search, CONTEXTA',
  openGraph: {
    title: 'Search + Data AI - GenX Platform',
    description: 'Access enterprise knowledge instantly with AI-powered search and data retrieval.',
  },
};

export default function SearchDataAIPage() {
  return <SearchDataAIClient />;
}