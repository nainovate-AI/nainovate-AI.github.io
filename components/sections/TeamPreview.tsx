import Link from 'next/link';
import { MapPin, LayoutGrid, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { TeamAvatar } from '@/components/sections/TeamAvatar';
import teamData from '@/data/marketing/team.json';
import type { TeamContent, TeamMember } from '@/types/team';

const team = teamData as TeamContent;

/*
  Home-page teaser only — photo, name, role, location, two focus labels, LinkedIn.
  Biographies, full expertise lists and email stay on /teams so the home page
  proves credibility without turning into a company brochure.
*/
export function TeamPreview() {
  const { homePreview } = team;
  const byId = new Map<string, TeamMember>(
    team.groups.flatMap((group) => group.members).map((member) => [member.id, member])
  );
  const members = homePreview.memberIds
    .map((id) => byId.get(id))
    .filter((member): member is TeamMember => Boolean(member));

  return (
    <Section spacing="xl" className="relative overflow-hidden" id="team">
      <Container size="wide" className="relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-6">{homePreview.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2 leading-[1.1]">
                <span className="block text-fg-strong">{homePreview.headingTop}</span>
                <span className="block text-gradient-aurora">{homePreview.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={0.15}>
              <p className="text-body-lg text-fg-mid leading-relaxed">{homePreview.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* Cards — columns track the member count so the row never leaves a hole */}
        <RevealGroup
          className={`grid gap-5 md:gap-6 sm:grid-cols-2 ${
            members.length >= 4
              ? 'lg:grid-cols-4'
              : members.length === 3
                ? 'lg:grid-cols-3'
                : 'max-w-xl sm:max-w-2xl mx-auto'
          }`}
        >
          {members.map((member) => (
            <RevealItem key={member.id}>
              <article className="group relative h-full overflow-hidden rounded-lg2 border border-border bg-surface p-4 transition-colors duration-200 hover:border-border-strong">
                {/* Corner wash — brand token, reveals on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-16 w-52 h-52 rounded-full bg-brand-2 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.18]"
                />

                <div className="relative flex h-full flex-col">
                  <TeamAvatar
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Nainovate`}
                    initials={member.initials}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    className="aspect-[4/3] w-full mb-5"
                  />

                  <h3 className="text-h4 text-fg-strong mb-1">{member.name}</h3>
                  <p className="text-body-sm text-brand-2 mb-4">{member.role}</p>

                  {member.location && (
                    <div className="flex items-center gap-2 border-t border-border pt-3 mb-3 text-body-sm text-fg-mid">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-fg-faint" aria-hidden="true" />
                      <span>{member.location}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-2 border-t border-border pt-3 text-body-sm text-fg-mid">
                    <LayoutGrid className="w-3.5 h-3.5 shrink-0 mt-1 text-fg-faint" aria-hidden="true" />
                    <span>{member.focus.slice(0, 2).join(' · ')}</span>
                  </div>

                  <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                    <Link
                      href={homePreview.ctaHref}
                      className="group/more inline-flex items-center gap-1.5 text-body-sm text-fg-mid hover:text-fg-strong transition-colors"
                    >
                      More
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover/more:translate-x-1">
                        →
                      </span>
                    </Link>

                    {member.links?.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-sm2 border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg-strong"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-10 md:mt-12 flex justify-start lg:justify-end">
            <Link
              href={homePreview.ctaHref}
              className="group inline-flex items-center gap-2 text-body-sm text-fg-mid hover:text-fg-strong transition-colors"
            >
              {homePreview.ctaLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
