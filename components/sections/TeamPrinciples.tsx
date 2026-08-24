import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import type { TeamContent } from '@/types/team';

/*
  "How we work" — answers the question the profiles don't: can this team
  actually deliver. Editorial hairline blocks, no decorative cards.
*/
export function TeamPrinciples({ content }: { content: TeamContent['howWeWork'] }) {
  return (
    <Section spacing="lg" id="how-we-work">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-5">{content.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h2">
                <span className="block text-fg-strong">{content.headingTop}</span>
                <span className="block text-gradient-aurora">{content.headingAccent}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="grid md:grid-cols-3 border-t border-border-strong">
          {content.principles.map((principle, i) => (
            <RevealItem
              key={principle.number}
              className={`py-10 md:py-12 md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l md:border-border' : ''} border-b border-border md:border-b-0`}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-eyebrow text-fg-faint tabular-nums">{principle.number}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-h4 text-fg-strong mb-3">{principle.title}</h3>
              <p className="text-body-sm text-fg-mid leading-relaxed">{principle.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
