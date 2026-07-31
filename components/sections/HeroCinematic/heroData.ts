export type HeroSlide = {
  id: string;
  eyebrow: string;
  titleLines: [string, string];
  highlight: string;
  description: string;
  image: string;
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'every-department',
    eyebrow: 'DECISION INTELLIGENCE',
    titleLines: ['EVERY DEPARTMENT.', 'ONE PLATFORM.'],
    highlight: 'One connected view.',
    description:
      'Connect every team — from government offices to enterprise functions — on one platform. No silos. No missed signals.',
    image: '/hero-slides/hero-slide-1.png',
    alt: 'Aerial view of government and enterprise buildings connected through Nainovate',
  },
  {
    id: 'seven-capabilities',
    eyebrow: 'GENX FRAMEWORK',
    titleLines: ['ONE ENTERPRISE.', 'SEVEN CAPABILITIES.'],
    highlight: 'One workflow. Start to finish.',
    description:
      'Observe. Understand. Recommend. Coordinate. Execute. Monitor. Learn. Every step in one place — so every decision has context.',
    image: '/hero-slides/hero-slide-2.png',
    alt: 'GenX seven-capability framework wheel',
  },
  {
    id: 'signal-chain',
    eyebrow: 'CROSS-FUNCTIONAL',
    titleLines: ['SIGNALS FLOW.', 'DECISIONS FOLLOW.'],
    highlight: 'One team spots it. Every team acts.',
    description:
      'When one function sees a change, the right people across Finance, HR, Sales, and Support get notified — and take action, together.',
    image: '/hero-slides/hero-slide-3.png',
    alt: 'Enterprise campus with signal arcs connecting Finance, HR, Operations, Sales, and Supply Chain',
  },
  {
    id: 'public-sector',
    eyebrow: 'PUBLIC SECTOR',
    titleLines: ['ONE GOVERNMENT.', 'ONE DECISION CENTRE.'],
    highlight: 'From policy to citizen outcome.',
    description:
      'Decision support, coordinated public services and real-time operations in a single centre — so every policy reaches the citizens it was written for.',
    image: '/hero-slides/hero-slide-4.png',
    alt: 'A government decision centre linking decision support, coordinated public services, coordinated execution and citizen outcomes, with operators monitoring national service-delivery dashboards',
  },
];

export const AUTOPLAY_DURATION_MS = 3000;
