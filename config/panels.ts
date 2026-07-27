import { BarChart3, MessageSquare, GitBranch, Home, FileText } from 'lucide-react';
import type { PublicSectorPanel, WorkspacePanel } from '@/types/workspace';

type PanelDef<K extends string> = {
  key: K;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const PUBLIC_SECTOR_PANELS: PanelDef<PublicSectorPanel>[] = [
  { key: 'dashboard', label: 'Dashboards', Icon: BarChart3 },
  { key: 'ask',       label: 'Ask',        Icon: MessageSquare },
  { key: 'workflow',  label: 'Workflow',   Icon: GitBranch },
];

export const WORKSPACE_PANELS: PanelDef<WorkspacePanel>[] = [
  { key: 'command-center', label: 'Command Center', Icon: Home },
  { key: 'dashboard',      label: 'Dashboard',      Icon: BarChart3 },
  { key: 'ask',            label: 'Ask',            Icon: MessageSquare },
  { key: 'trace',          label: 'Trace / Audit',  Icon: FileText },
];
