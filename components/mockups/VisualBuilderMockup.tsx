export function VisualBuilderMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Visual Workflow Builder</text>
        
        {/* Toolbar */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4a9eff"/>
        <text x="680" y="30" fill="#fff" fontSize="11" fontWeight="600">Deploy Flow</text>
        
        {/* Left Sidebar - Node Palette */}
        <rect x="20" y="60" width="180" height="420" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="85" fill="#888" fontSize="11" fontWeight="500">WORKFLOW NODES</text>
        
        {/* Node Type 1 */}
        <rect x="35" y="95" width="150" height="40" rx="6" fill="#1a1a1a" stroke="#4a9eff" strokeWidth="1"/>
        <text x="50" y="118" fill="#4a9eff" fontSize="10" fontWeight="600">⚡ Trigger</text>
        
        {/* Node Type 2 */}
        <rect x="35" y="145" width="150" height="40" rx="6" fill="#1a1a1a" stroke="#a855f7" strokeWidth="1"/>
        <text x="50" y="168" fill="#a855f7" fontSize="10" fontWeight="600">🤖 AI Agent</text>
        
        {/* Node Type 3 */}
        <rect x="35" y="195" width="150" height="40" rx="6" fill="#1a1a1a" stroke="#10b981" strokeWidth="1"/>
        <text x="50" y="218" fill="#10b981" fontSize="10" fontWeight="600">🔄 Transform</text>
        
        {/* Node Type 4 */}
        <rect x="35" y="245" width="150" height="40" rx="6" fill="#1a1a1a" stroke="#fbbf24" strokeWidth="1"/>
        <text x="50" y="268" fill="#fbbf24" fontSize="10" fontWeight="600">✓ Condition</text>
        
        {/* Node Type 5 */}
        <rect x="35" y="295" width="150" height="40" rx="6" fill="#1a1a1a" stroke="#ef4444" strokeWidth="1"/>
        <text x="50" y="318" fill="#ef4444" fontSize="10" fontWeight="600">📤 Action</text>
        
        {/* Canvas Area */}
        <rect x="220" y="60" width="560" height="420" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        
        {/* Workflow: Document Analysis */}
        <text x="235" y="85" fill="#888" fontSize="11" fontWeight="500">WORKFLOW: Document Analysis Pipeline</text>
        
        {/* Node 1: Trigger */}
        <rect x="280" y="120" width="140" height="60" rx="8" fill="#0f0f0f" stroke="#4a9eff" strokeWidth="2"/>
        <text x="295" y="142" fill="#4a9eff" fontSize="11" fontWeight="600">API Request</text>
        <text x="295" y="158" fill="#888" fontSize="8">POST /analyze</text>
        <circle cx="350" cy="180" r="6" fill="#4a9eff"/>
        
        {/* Connection Line 1 */}
        <line x1="350" y1="186" x2="350" y2="220" stroke="#4a9eff" strokeWidth="2"/>
        <polygon points="350,220 345,212 355,212" fill="#4a9eff"/>
        
        {/* Node 2: AI Agent */}
        <rect x="280" y="220" width="140" height="60" rx="8" fill="#0f0f0f" stroke="#a855f7" strokeWidth="2"/>
        <text x="295" y="242" fill="#a855f7" fontSize="11" fontWeight="600">Extract Data</text>
        <text x="295" y="258" fill="#888" fontSize="8">GPT-4 Agent</text>
        <circle cx="350" cy="280" r="6" fill="#a855f7"/>
        
        {/* Connection Line 2 */}
        <line x1="350" y1="286" x2="350" y2="320" stroke="#a855f7" strokeWidth="2"/>
        <polygon points="350,320 345,312 355,312" fill="#a855f7"/>
        
        {/* Node 3: Condition */}
        <rect x="280" y="320" width="140" height="60" rx="8" fill="#0f0f0f" stroke="#fbbf24" strokeWidth="2"/>
        <text x="295" y="342" fill="#fbbf24" fontSize="11" fontWeight="600">Validate</text>
        <text x="295" y="358" fill="#888" fontSize="8">Confidence {">"} 90%</text>
        <circle cx="320" cy="380" r="6" fill="#10b981"/>
        <circle cx="380" cy="380" r="6" fill="#ef4444"/>
        
        {/* Success Path */}
        <line x1="320" y1="386" x2="270" y2="420" stroke="#10b981" strokeWidth="2"/>
        <polygon points="270,420 275,413 268,410" fill="#10b981"/>
        <rect x="230" y="410" width="100" height="50" rx="6" fill="#0f0f0f" stroke="#10b981" strokeWidth="2"/>
        <text x="245" y="432" fill="#10b981" fontSize="10" fontWeight="600">Save Result</text>
        <text x="245" y="447" fill="#888" fontSize="8">Database</text>
        
        {/* Failure Path */}
        <line x1="380" y1="386" x2="430" y2="420" stroke="#ef4444" strokeWidth="2"/>
        <polygon points="430,420 425,413 432,410" fill="#ef4444"/>
        <rect x="370" y="410" width="100" height="50" rx="6" fill="#0f0f0f" stroke="#ef4444" strokeWidth="2"/>
        <text x="385" y="432" fill="#ef4444" fontSize="10" fontWeight="600">Manual Review</text>
        <text x="385" y="447" fill="#888" fontSize="8">Queue</text>
        
        {/* Parallel Branch */}
        <line x1="420" y1="250" x2="520" y2="250" stroke="#888" strokeWidth="2" strokeDasharray="4"/>
        <rect x="520" y="220" width="140" height="60" rx="8" fill="#0f0f0f" stroke="#10b981" strokeWidth="2"/>
        <text x="535" y="242" fill="#10b981" fontSize="11" fontWeight="600">Generate Summary</text>
        <text x="535" y="258" fill="#888" fontSize="8">Claude Agent</text>
        
        {/* Stats */}
        <rect x="220" y="450" width="560" height="30" fill="#111"/>
        <text x="235" y="470" fill="#888" fontSize="9">Nodes: 6 • Connections: 7 • Estimated Runtime: 2.3s</text>
        <text x="600" y="470" fill="#4ade80" fontSize="9">✓ Valid Flow</text>
      </svg>
    </div>
  );
}