'use client';

import { useState } from 'react';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { TeamMemberCard } from '@/components/sections/TeamMemberCard';
import type { TeamMember } from '@/types/team';

/*
  Owns which profile in a group is expanded. One at a time — opening a second
  card closes the first, so two detail panels never compete for attention.
*/
export function TeamGroupMembers({ members }: { members: TeamMember[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <RevealGroup className="space-y-6">
      {members.map((member) => (
        <RevealItem key={member.id}>
          <TeamMemberCard
            member={member}
            isOpen={openId === member.id}
            onToggle={() => setOpenId((current) => (current === member.id ? null : member.id))}
          />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
