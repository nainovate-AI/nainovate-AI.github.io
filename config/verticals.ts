import type { WorkspaceSpace } from '@/types/workspace';

export const WORKSPACE_SPACES: WorkspaceSpace[] = [
  { key: 'customer-success', label: 'Customer Success', letter: 'C', persona: 'Alex Morgan',  role: 'CSM Director' },
  { key: 'customer-support', label: 'Customer Support', letter: 'C', persona: 'Jordan Chen',  role: 'Support Head' },
  { key: 'sales',            label: 'Sales',            letter: 'S', persona: 'Riley Patel',  role: 'AE Lead' },
  { key: 'delivery',         label: 'Delivery',         letter: 'D', persona: 'Sam Rivera',   role: 'Delivery Lead' },
];

export const PUBLIC_SECTOR_SPACES = [
  { key: 'building-permits', label: 'Building Permits', letter: 'B', department: 'Alex Nguyen', role: 'Permit Officer' },
];
