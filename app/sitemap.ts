import type { MetadataRoute } from 'next';

// Static export requires explicit force-static (Next 15).
export const dynamic = 'force-static';

const BASE_URL = 'https://www.nainovate.ai';

/*
  Sitemap — enumerated from the app router tree.
  When a route is added under app/(main)/, add an entry here too.
  Prefer higher priority for pillar pages (home, platform, decision-intelligence).
*/
const routes: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = [
  // Root
  { path: '', priority: 1.0, changeFrequency: 'weekly' },

  // Pillars
  { path: 'platform', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'decision-intelligence', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'solutions', priority: 0.9, changeFrequency: 'weekly' },

  // Platform sub-pages
  { path: 'platform/core', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'platform/nia', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'platform/flow', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'platform/ai-engineering-tools', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'platform/search-data-ai', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'platform/security-governance', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'platform/development-tools', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'platform/integrations', priority: 0.7, changeFrequency: 'monthly' },

  // Decision Intelligence sub-pages
  { path: 'decision-intelligence/ai-agent', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'decision-intelligence/signal-chain', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'decision-intelligence/trace-audit', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'decision-intelligence/coordination', priority: 0.8, changeFrequency: 'monthly' },

  // Solutions sub-pages
  { path: 'solutions/operations', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/engagement', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/intelligence', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/customer-support', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/customer-success', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/sales', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'solutions/delivery', priority: 0.7, changeFrequency: 'monthly' },

  // Marketing / trust
  { path: 'about', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'ai-center-of-excellence', priority: 0.6, changeFrequency: 'monthly' },

  // Resources / lead-gen
  { path: 'reports', priority: 0.6, changeFrequency: 'monthly' },
  { path: 'ai-implementation-index', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'ai-readiness-report-2025', priority: 0.7, changeFrequency: 'monthly' },

  // Demo entry (gated behind form — still crawlable for organic SEO)
  { path: 'demo', priority: 0.5, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
