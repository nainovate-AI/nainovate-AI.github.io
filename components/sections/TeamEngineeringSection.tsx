import { LayoutGrid } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import type { TeamContent } from '@/types/team';

/*
  Roles-only band — deliberately not member cards. No photo, no bio, no
  "More details". This signals real engineering depth (functions, not
  headcount) without naming or picturing individuals who haven't been
  cleared for a public profile.
*/
export function TeamEngineeringSection({ content }: { content: TeamContent['engineering'] }) {
  return (
    <Section spacing="lg" id={content.id}>
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-eyebrow text-fg-faint tabular-nums">{content.number}</span>
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                <span className="text-eyebrow text-fg-muted">{content.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2">
                <span className="block text-fg-strong">{content.headingTop}</span>
                <span className="block text-gradient-aurora">{content.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.roles.map((role) => (
            <RevealItem key={role}>
              <div className="flex items-center gap-3 rounded-lg2 border border-border bg-surface px-5 py-4 h-full">
                <LayoutGrid className="w-4 h-4 shrink-0 text-fg-faint" aria-hidden="true" />
                <span className="text-body-sm text-fg-strong font-medium">{role}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
