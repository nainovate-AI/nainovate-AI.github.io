'use client';

import { useState } from 'react';
import { X, LayoutDashboard, GitBranch, MessageSquare, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PermitsChatbot from '@/components/demo/PermitsChatbot';
import AnalyticsDashboard from '@/components/demo/AnalyticsDashboard';
import WorkflowPlaceholder from '@/components/demo/WorkflowPlaceholder';

type TabType = 'nia' | 'dashboard' | 'workflow';
type UseCase = 'building-permits';

export default function TheatricalDemoClient() {
  const [activeTab, setActiveTab] = useState<TabType>('nia');
  const [activeUseCase, setActiveUseCase] = useState<UseCase>('building-permits');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const useCases = {
    'building-permits': {
      label: 'Building Permit Application',
      available: true
    },
    // 'healthcare': {
    //   label: 'Healthcare (Coming Soon)',
    //   available: false
    // },
    // 'manufacturing': {
    //   label: 'Manufacturing (Coming Soon)',
    //   available: false
    // }
  };

  const sidebarItems = [
    {
      id: 'dashboard' as TabType,
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      id: 'workflow' as TabType,
      label: 'Workflow',
      icon: GitBranch
    },
    {
      id: 'nia' as TabType,
      label: 'NIA',
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      
      {/* Left Sidebar */}
      <div className="w-20 border-r border-white/10 flex flex-col items-center py-6 bg-black fixed left-0 top-0 bottom-0 z-50">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full py-4 flex flex-col items-center gap-2 transition-all duration-200
                ${activeTab === item.id 
                  ? 'text-white bg-white/10' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-20 flex flex-col">
        
        {/* Top Header Bar */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-black fixed top-0 left-20 right-0 z-40">
          
          {/* Left: Use Case Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">{useCases[activeUseCase].label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#111] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden">
                  {Object.entries(useCases).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        if (value.available) {
                          setActiveUseCase(key as UseCase);
                          setIsDropdownOpen(false);
                        }
                      }}
                      className={`
                        w-full px-4 py-3 text-left text-sm transition-colors
                        ${value.available 
                          ? 'hover:bg-white/10 text-white cursor-pointer' 
                          : 'text-gray-600 cursor-not-allowed'
                        }
                        ${activeUseCase === key ? 'bg-white/10' : ''}
                      `}
                      disabled={!value.available}
                    >
                      {value.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right: Close Button */}
          <button
            onClick={() => router.push('/')}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-500 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area - Below Header */}
        <div className="flex-1 overflow-hidden mt-14">
          
          {/* NIA - Conversational AI */}
          {activeTab === 'nia' && (
            <PermitsChatbot />
          )}

          {/* Dashboard - Analytics */}
          {activeTab === 'dashboard' && (
            <AnalyticsDashboard />
          )}

          {/* Workflow */}
          {activeTab === 'workflow' && (
            <WorkflowPlaceholder />
          )}
        </div>
      </div>
    </div>
  );
}