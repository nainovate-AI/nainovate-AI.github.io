'use client';

import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PermitsChatbot from '@/components/demo/PermitsChatbot';
import AnalyticsDashboard from '@/components/demo/AnalyticsDashboard';
import WorkflowPlaceholder from '@/components/demo/WorkflowPlaceholder';

type TabType = 'conversational' | 'analytics' | 'workflow';

export default function TheatricalDemoClient() {
  const [activeTab, setActiveTab] = useState<TabType>('conversational');
  const router = useRouter();

  const tabs = [
    { id: 'conversational' as TabType, label: 'Conversational AI' },
    { id: 'analytics' as TabType, label: 'Analytics Dashboard' },
    { id: 'workflow' as TabType, label: 'Workflow Automation' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black">
        <div className="px-6 py-4 flex items-center justify-between">

          {/* Left: Back Arrow */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back</span>
          </button>

          {/* Center: Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-md text-xs font-medium transition-all duration-200
                  ${activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right: Title + Close Button */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Interactive Demo</span>
            <button
              onClick={() => router.push('/')}
              className="w-8 h-8 flex items-center justify-center rounded-md text-gray-500 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Close demo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Area - Full Height */}
      <div className="flex-1 overflow-hidden mt-[57px]">

        {/* Tab 1: Conversational AI */}
        {activeTab === 'conversational' && (
          <PermitsChatbot />
        )}

        {/* Tab 2: Analytics Dashboard */}
        {activeTab === 'analytics' && (
          <AnalyticsDashboard />
        )}

        {/* Tab 3: Workflow Automation */}
        {activeTab === 'workflow' && (
          <WorkflowPlaceholder />
        )}
      </div>
    </div>
  );
}