export type HeroSlide = {
  id: string;
  eyebrow: string;
  titleLines: [string, string];
  image: string;
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'ai-fragmentation',
    eyebrow: 'THE AI REALITY',
    titleLines: ["THE CHALLENGE ISN'T AI.", "IT'S FRAGMENTATION."],
    image: '/hero-slides/hero-slide-1.webp',
    alt: 'The AI Reality — pillars showing why most AI initiatives struggle: independent institutions, fragmented knowledge, disconnected capabilities, limited outcomes',
  },
  {
    id: 'public-sector',
    eyebrow: 'PUBLIC SECTOR',
    titleLines: ['ONE GOVERNMENT.', 'ONE DECISION CENTRE.'],
    image: '/hero-slides/hero-slide-4.webp',
    alt: 'Government Decision Centre linking decision support, coordinated public services, decision intelligence, coordinated execution and citizen outcomes with operators monitoring live service delivery dashboards',
  },
  {
    id: 'signal-chain',
    eyebrow: 'CROSS-FUNCTIONAL',
    titleLines: ['SIGNALS FLOW.', 'DECISIONS FOLLOW.'],
    image: '/hero-slides/hero-slide-3.webp',
    alt: 'Enterprise campus with signal arcs connecting Finance, HR, Operations, Sales, and Supply Chain',
  },
  {
    id: 'seven-capabilities',
    eyebrow: 'GENX FRAMEWORK',
    titleLines: ['ONE ENTERPRISE.', 'SEVEN CAPABILITIES.'],
    image: '/hero-slides/hero-slide-2.webp',
    alt: 'GenX seven-capability framework wheel',
  },
];

export const AUTOPLAY_DURATION_MS = 4000;
