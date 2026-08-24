import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CTALink } from '@/components/ui/CTA';
import { TeamGroupSection } from '@/components/sections/TeamGroupSection';
import { TeamEngineeringSection } from '@/components/sections/TeamEngineeringSection';
import { TeamPrinciples } from '@/components/sections/TeamPrinciples';
import { TeamMarkets } from '@/components/sections/TeamMarkets';
import teamData from '@/data/marketing/team.json';
import type { TeamContent } from '@/types/team';

const team = teamData as TeamContent;

export const metadata: Metadata = {
  title: 'Teams - The People Behind Nainovate GenX',
  description:
    'Meet the Nainovate team — founders, advisors, and engineers building the GenX decision intelligence platform for enterprises and governments.',
  keywords: 'Nainovate team, Nainovate founders, AI company team, Nainovate advisors, Nainovate leadership',
  openGraph: {
    title: 'Teams - The People Behind Nainovate GenX',
    description: 'Founders, advisors, and engineers building enterprise decision intelligence.',
  },
};

export default function TeamsPage() {
  const allMembers = team.groups.flatMap((group) => group.members);

  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nainovate Technologies',
    url: 'https://www.nainovate.ai',
    employee: allMembers.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      worksFor: { '@type': 'Organization', name: 'Nainovate Technologies' },
    })),
  };

  return (
    <main className="pt-20 bg-bg">
      <JsonLd data={teamSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">{team.hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">{team.hero.headingTop}</span>
                <span className="block text-gradient-aurora">{team.hero.headingAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">{team.hero.intro}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 01 / 02 — Leadership, Advisors */}
      {team.groups.map((group) => (
        <TeamGroupSection key={group.id} group={group} />
      ))}

      {/* 03 — Engineering (roles only, no photos/bios) */}
      <TeamEngineeringSection content={team.engineering} />

      <TeamPrinciples content={team.howWeWork} />
      <TeamMarkets content={team.markets} />

      {/* CTA — business positioning first, hiring note secondary */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 left-1/4 w-[38vw] h-[38vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">{team.cta.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2 mb-8">
                <span className="block text-fg-strong">{team.cta.headingTop}</span>
                <span className="block text-gradient-aurora">{team.cta.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl mb-10 md:mb-14 leading-relaxed">
                {team.cta.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTALink href={team.cta.ctaHref} variant="solid" size="lg" arrow>
                {team.cta.ctaLabel}
              </CTALink>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-sm text-fg-muted max-w-xl mt-10 md:mt-14 pt-8 border-t border-border">
                {team.cta.hiringNote}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
