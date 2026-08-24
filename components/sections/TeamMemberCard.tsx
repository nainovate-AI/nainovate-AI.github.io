'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, LayoutGrid, Linkedin, Mail, X } from 'lucide-react';
import { TeamAvatar } from '@/components/sections/TeamAvatar';
import type { TeamMember } from '@/types/team';

/*
  Featured profile for /teams.

  Two states. Collapsed, the card shows photo + identity + focus and the right
  third sits empty. "Read profile" fills that empty space with a detail panel
  rather than pushing the biography out underneath the button — the layout
  keeps its shape and the vacant half does the work.

  Open state is owned by TeamGroupMembers so only one profile in a group is
  expanded at a time. Below md there is no right half, so the panel stacks
  underneath instead.
*/
export function TeamMemberCard({
  member,
  isOpen,
  onToggle,
}: {
  member: TeamMember;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `profile-${member.id}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-lg2 border bg-surface p-6 md:p-10 transition-colors duration-200 ${
        isOpen ? 'border-border-strong' : 'border-border hover:border-border-strong'
      }`}
    >
      {/* Corner wash — brand token, on while the profile is open */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-32 -right-20 w-72 h-72 rounded-full bg-brand-2 blur-3xl transition-opacity duration-500 ${
          isOpen ? 'opacity-[0.14]' : 'opacity-0 group-hover:opacity-[0.10]'
        }`}
      />

      <div className="relative grid md:grid-cols-12 gap-8 md:gap-10">
        {/* Portrait */}
        <div className="md:col-span-3">
          <TeamAvatar
            src={member.image}
            alt={`${member.name}, ${member.role} at Nainovate`}
            initials={member.initials}
            sizes="(max-width: 768px) 70vw, 260px"
            className="aspect-[4/5] w-full max-w-[260px]"
          />
        </div>

        {/* Identity — fixed width, so opening the panel never reflows it */}
        <div className="md:col-span-5">
          <h3 className="text-h2 text-fg-strong leading-[1.1] mb-2">{member.name}</h3>
          <p className="text-body-md text-brand-2 mb-6">{member.role}</p>

          {member.location && (
            <div className="flex items-center gap-2 border-t border-border pt-4 mb-4 text-body-sm text-fg-mid">
              <MapPin className="w-4 h-4 shrink-0 text-fg-faint" aria-hidden="true" />
              <span>{member.location}</span>
            </div>
          )}

          {member.focus.length > 0 && (
            <div className="flex items-start gap-2 border-t border-border pt-4 mb-8">
              <LayoutGrid className="w-4 h-4 shrink-0 mt-1 text-fg-faint" aria-hidden="true" />
              <ul className="text-body-sm text-fg-mid space-y-1">
                {member.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 text-body-sm text-fg-mid hover:text-fg-strong transition-colors"
          >
            {isOpen ? 'Hide profile' : 'Read profile'}
            <span
              aria-hidden="true"
              className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            >
              →
            </span>
          </button>

          {(member.links?.linkedin || member.links?.email) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {member.links?.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-sm2 border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg-strong"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {member.links?.email && (
                <a
                  href={`mailto:${member.links.email}`}
                  aria-label={`Email ${member.name}`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-sm2 border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg-strong"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Detail panel — occupies the otherwise-empty right column */}
        <div className="md:col-span-4">
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id={panelId}
                key="panel"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-md2 border border-border bg-bg-elevated p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <p className="text-eyebrow text-fg-faint">Profile</p>
                  <button
                    type="button"
                    onClick={onToggle}
                    aria-label={`Close ${member.name}'s profile`}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-sm2 border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg-strong"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-body-sm text-fg-mid leading-relaxed mb-6">{member.bio}</p>
                <p className="text-body-sm text-fg-mid leading-relaxed mb-8">
                  {member.detail.background}
                </p>

                <p className="text-eyebrow text-fg-faint mb-4">What they own</p>
                <ul className="border-t border-border mb-8">
                  {member.detail.owns.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-3 text-body-sm text-fg-mid"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <dl className="space-y-3">
                  {member.detail.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-wrap gap-x-3 gap-y-1">
                      <dt className="text-eyebrow text-fg-faint min-w-[88px]">{fact.label}</dt>
                      <dd className="text-body-sm text-fg-mid flex-1">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
