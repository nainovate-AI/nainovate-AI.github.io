'use client';

import { Cog } from 'lucide-react';
import workflowData from '@/data/ai-decision-workspace/public-sector/building-permits/workflow.json';

export default function WorkflowPlaceholder() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Cog className="w-10 h-10 text-gray-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">{workflowData.title}</h2>
        <p className="text-gray-400 mb-6">
          {workflowData.description}
        </p>
        <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <span className="text-sm text-gray-500">{workflowData.status}</span>
        </div>
      </div>
    </div>
  );
}