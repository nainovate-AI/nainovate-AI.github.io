export type WorkspaceVertical =
  | 'customer-success'
  | 'customer-support'
  | 'sales'
  | 'delivery';

export type WorkspacePanel = 'dashboard' | 'ask' | 'command-center' | 'trace';

export type WorkspaceSpace = {
  key: WorkspaceVertical;
  label: string;
  letter: string;
  persona: string;
  role: string;
};

export type PublicSectorVertical = 'building-permits';

export type PublicSectorPanel = 'dashboard' | 'ask' | 'workflow';
