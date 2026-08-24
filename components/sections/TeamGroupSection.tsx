import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TeamGroupMembers } from '@/components/sections/TeamGroupMembers';
import type { TeamGroup } from '@/types/team';

/*
  One numbered band per group — 01 / LEADERSHIP, 02 / ADVISORS, 03 / ENGINEERING.
  The numbering gives the page a structured, enterprise feel rather than a flat
  employee grid. Group data comes from data/marketing/team.json.
*/
export function TeamGroupSection({ group }: { group: TeamGroup }) {
  return (
    <Section spacing="lg" id={group.id}>
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-eyebrow text-fg-faint tabular-nums">{group.number}</span>
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                <span className="text-eyebrow text-fg-muted">{group.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2">
                <span className="block text-fg-strong">{group.headingTop}</span>
                <span className="block text-gradient-aurora">{group.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <TeamGroupMembers members={group.members} />
      </Container>
    </Section>
  );
}
