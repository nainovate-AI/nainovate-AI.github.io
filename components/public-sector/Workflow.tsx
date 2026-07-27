'use client';

import { Cog } from 'lucide-react';
import workflowData from '@/data/demo/public-sector/building-permits/workflow.json';

export default function PublicSectorWorkflow() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface-2 border border-fg-strong/10 flex items-center justify-center">
          <Cog className="w-10 h-10 text-fg-subtle" />
        </div>
        <h2 className="text-2xl font-bold text-fg-strong mb-3">{workflowData.title}</h2>
        <p className="text-fg-muted mb-6">
          {workflowData.description}
        </p>
        <div className="inline-block px-4 py-2 bg-surface-2 border border-fg-strong/10 rounded-full">
          <span className="text-sm text-fg-subtle">{workflowData.status}</span>
        </div>
      </div>
    </div>
  );
}