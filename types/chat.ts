export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ChatMatcher = {
  keywords: string[];
  response: string;
  followups?: string[];
};

export type ChatPack = {
  welcome?: string;
  suggestions?: string[];
  defaultResponse?: string;
  matchers: ChatMatcher[];
};
