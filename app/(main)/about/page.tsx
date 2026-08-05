import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';

export const metadata: Metadata = {
  title: 'About Nainovate - Leading Enterprise AI Platform Company',
  description: 'Learn about Nainovate\'s mission to democratize AI. Founded in 2023, we help enterprises build intelligent agents. NVIDIA Inception partner. Operating in India, GCC, and North America.',
  keywords: 'about Nainovate, AI company, enterprise AI platform, NVIDIA partner, AI solutions provider, Hyderabad AI company',
  openGraph: {
    title: 'About Nainovate - Building the Future of AI',
    description: 'Discover how Nainovate is transforming businesses with accessible, powerful AI solutions.',
  },
};

const timeline = [
  {
    year: '2023',
    title: 'Building in Stealth',
    body: 'Began operations in stealth mode, conducting extensive research and development. Laid the technical foundation for the GenX platform through rigorous market analysis and prototype development.',
    body2: null as string[] | null,
  },
  {
    year: '2024',
    title: 'Proving the Concept',
    body: 'Completed GenX platform development and validation. Delivered over 20 proof-of-concept implementations across various industries, refining our approach based on real-world feedback.',
    body2: null,
  },
  {
    year: '2025',
    title: 'Scaling Globally',
    body: null as unknown as string,
    body2: [
      'Signed MoU with strategic partner in Oman',
      'Established partnership with Indian medical device manufacturer',
      'Expanding proof-of-concepts to GCC, North America, and Australia',
    ],
  },
];

const values = [
  { num: '01', title: 'Enterprise Security', body: 'On-premise deployment ensures complete data sovereignty and regulatory compliance' },
  { num: '02', title: 'Rapid Implementation', body: 'Visual workflow builders enable production deployment within days' },
  { num: '03', title: 'ROI-Driven Solutions', body: 'Guaranteed performance metrics with average 300% ROI in year one' },
  { num: '04', title: 'Collaborative Growth', body: 'Success-based partnerships aligned with your business outcomes' },
];

const partners = [
  { name: 'NVIDIA', role: 'Inception Partner' },
  { name: 'Walnut', role: 'Strategic Partner' },
  { name: 'Brillius', role: 'Strategic Partner' },
  { name: 'Al Tomouh IT', role: 'Strategic Partner | Suhail Bahwan Group' },
];

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Nainovate Technologies',
      foundingDate: '2023',
      description: 'Nainovate transforms businesses with intelligent AI agents',
      mission: 'To democratize AI by making it accessible to every business, regardless of technical expertise or resources',
      knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Enterprise Software', 'No-code Development', 'AI Agents'],
      memberOf: [{ '@type': 'ProgramMembership', programName: 'NVIDIA Inception Program', membershipNumber: 'NVIDIA Partner' }],
      partner: [{ '@type': 'Organization', name: 'Walnut' }, { '@type': 'Organization', name: 'Brillius' }],
    },
  };
  const timelineSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'Event', name: 'Building in Stealth', startDate: '2023', description: 'Began operations in stealth mode, conducting extensive research and development' } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'Event', name: 'Proving the Concept', startDate: '2024', description: 'Completed GenX platform development and delivered 20+ proof-of-concepts' } },
      { '@type': 'ListItem', position: 3, item: { '@type': 'Event', name: 'Scaling Globally', startDate: '2025', description: 'Signed MoU with Oman partner, expanding to GCC, North America, and Australia' } },
    ],
  };

  return (
    <main className="pt-20 bg-bg">
      <JsonLd data={aboutSchema} />
      <JsonLd data={timelineSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">About</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Building the</span>
                <span className="block text-gradient-aurora">future of AI.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Nainovate transforms businesses with intelligent AI agents.
                We believe AI should be accessible, powerful, and tailored to your needs.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Our Mission</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2 mb-8">
                  <span className="block text-fg-strong">Democratize</span>
                  <span className="block text-gradient-aurora">AI.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <p className="text-body-lg text-fg-strong leading-relaxed">
                  To democratize AI by making it accessible to every business,
                  regardless of technical expertise or resources.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-body-md text-fg-mid leading-relaxed">
                  We believe that AI should augment human capabilities, not replace them.
                  Our GenX platform empowers organizations to build intelligent agents
                  that understand their unique challenges and deliver real results.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-body-md text-fg-mid leading-relaxed">
                  Currently focused on governance, healthcare, and manufacturing sectors,
                  we&apos;re developing AI solutions that address complex operational challenges with measurable outcomes.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story — editorial timeline */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Three chapters.</span>
                  <span className="block text-gradient-aurora">One trajectory.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="border-t border-border-strong">
            {timeline.map((t) => (
              <RevealItem key={t.year} className="border-b border-border py-10 md:py-14 grid lg:grid-cols-12 gap-6 lg:gap-16">
                <div className="lg:col-span-3">
                  <div className="text-display text-fg-strong tabular-nums leading-none">{t.year}</div>
                </div>
                <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-border">
                  <h3 className="text-h3 text-fg-strong mb-4">{t.title}</h3>
                  {t.body && (
                    <p className="text-body-lg text-fg-mid leading-relaxed max-w-3xl">{t.body}</p>
                  )}
                  {t.body2 && (
                    <ul className="text-body-lg text-fg-mid leading-relaxed space-y-3 max-w-3xl">
                      {t.body2.map((line) => (
                        <li key={line} className="flex items-start gap-3">
                          <span aria-hidden="true" className="text-fg-faint mt-2">·</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Our Values</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Four principles.</span>
                  <span className="block text-gradient-aurora">Shipped every day.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {values.map((v, i) => (
              <RevealItem
                key={v.title}
                className={`py-10 md:py-12 lg:pr-8 ${i > 0 ? 'lg:pl-8 lg:border-l lg:border-border' : ''} border-b border-border sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+4)]:border-b-0`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-eyebrow text-fg-faint tabular-nums">{v.num}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-h4 text-fg-strong mb-3">{v.title}</h3>
                <p className="text-body-sm text-fg-mid leading-relaxed">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Partners */}
      <Section spacing="lg" as="section">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20" id="partners">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Partners & Investors</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Backed by</span>
                  <span className="block text-gradient-aurora">the right people.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {partners.map((p, i) => (
              <RevealItem
                key={p.name}
                className={`py-10 md:py-12 lg:pr-8 ${i > 0 ? 'lg:pl-8 lg:border-l lg:border-border' : ''} border-b border-border sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+4)]:border-b-0`}
              >
                <p className="text-h3 text-fg-strong mb-2">{p.name}</p>
                <p className="text-body-sm text-fg-muted">{p.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <h2 className="text-h2 mb-8">
                <span className="block text-fg-strong">Join our</span>
                <span className="block text-gradient-aurora">mission.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                Be part of the team that&apos;s making AI accessible to everyone.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CTALink href="/contact" variant="solid" size="lg" arrow>
                Contact Us
              </CTALink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
