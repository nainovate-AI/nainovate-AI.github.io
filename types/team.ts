export type TeamMemberLinks = {
  linkedin?: string | null;
  email?: string | null;
};

/** Extra content revealed in the side panel when a profile is opened. */
export type TeamMemberDetail = {
  background: string;
  owns: string[];
  facts: { label: string; value: string }[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  location?: string;
  /** Path under /public — e.g. /images/team/name.jpg. Falls back to initials when missing. */
  image?: string | null;
  initials: string;
  bio: string;
  focus: string[];
  detail: TeamMemberDetail;
  links?: TeamMemberLinks;
};

export type TeamGroup = {
  id: string;
  number: string;
  eyebrow: string;
  headingTop: string;
  headingAccent: string;
  members: TeamMember[];
};

export type TeamPrinciple = {
  number: string;
  title: string;
  body: string;
};

export type TeamMarket = {
  name: string;
  note: string;
};

export type TeamContent = {
  hero: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    intro: string;
  };
  /** Compact 3-card teaser rendered on the home page. Members are referenced by id. */
  homePreview: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    intro: string;
    memberIds: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  groups: TeamGroup[];
  howWeWork: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    principles: TeamPrinciple[];
  };
  markets: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    locations: TeamMarket[];
  };
  cta: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    hiringNote: string;
  };
};
