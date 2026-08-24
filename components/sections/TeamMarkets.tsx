import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import type { TeamContent } from '@/types/team';

/*
  Geographic credibility. Markers on a hairline rail — no heavy map asset, so
  it costs nothing on load and stays readable on a 360px screen.
*/
export function TeamMarkets({ content }: { content: TeamContent['markets'] }) {
  return (
    <Section spacing="lg" id="markets">
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

        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 border-t border-border-strong">
          {content.locations.map((location, i) => (
            <RevealItem
              key={location.name}
              className={`relative py-10 md:py-12 pr-4 lg:pr-8 ${i > 0 ? 'lg:pl-8 lg:border-l lg:border-border' : ''} ${i % 2 === 1 ? 'pl-4 border-l border-border lg:border-l' : ''} ${i >= 2 ? 'border-t border-border lg:border-t-0' : ''}`}
            >
              <span
                aria-hidden="true"
                className="block w-1.5 h-1.5 rounded-full bg-fg-strong opacity-60 mb-6"
              />
              <p className="text-h4 text-fg-strong mb-2">{location.name}</p>
              <p className="text-body-sm text-fg-muted">{location.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
