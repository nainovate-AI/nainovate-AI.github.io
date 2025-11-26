export function DeploymentMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Deployment & Lifecycle Management</text>
        
        {/* Deploy Button */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4ade80"/>
        <text x="675" y="30" fill="#000" fontSize="11" fontWeight="600">🚀 Deploy v2.1</text>
        
        {/* Environments */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">ENVIRONMENTS</text>
        
        {/* Environment Cards */}
        <rect x="20" y="90" width="240" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="115" fill="#fbbf24" fontSize="14" fontWeight="600">Development</text>
        <text x="35" y="135" fill="#888" fontSize="10">Version: v2.1.0-dev</text>
        <text x="35" y="150" fill="#888" fontSize="10">Last deploy: 5 min ago</text>
        <rect x="35" y="160" width="80" height="15" rx="7.5" fill="#fbbf24" fillOpacity="0.2"/>
        <circle cx="50" cy="167.5" r="4" fill="#fbbf24"/>
        <text x="58" y="171" fill="#fbbf24" fontSize="8">ACTIVE</text>
        
        <rect x="270" y="90" width="240" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="285" y="115" fill="#4a9eff" fontSize="14" fontWeight="600">Staging</text>
        <text x="285" y="135" fill="#888" fontSize="10">Version: v2.0.5</text>
        <text x="285" y="150" fill="#888" fontSize="10">Last deploy: 2 days ago</text>
        <rect x="285" y="160" width="80" height="15" rx="7.5" fill="#4a9eff" fillOpacity="0.2"/>
        <circle cx="300" cy="167.5" r="4" fill="#4a9eff"/>
        <text x="308" y="171" fill="#4a9eff" fontSize="8">ACTIVE</text>
        
        <rect x="520" y="90" width="260" height="90" rx="8" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="535" y="115" fill="#4ade80" fontSize="14" fontWeight="600">Production</text>
        <text x="535" y="135" fill="#888" fontSize="10">Version: v2.0.4</text>
        <text x="535" y="150" fill="#888" fontSize="10">Last deploy: 5 days ago</text>
        <rect x="535" y="160" width="80" height="15" rx="7.5" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="550" cy="167.5" r="4" fill="#4ade80"/>
        <text x="558" y="171" fill="#4ade80" fontSize="8">LIVE</text>
        
        {/* Deployment Pipeline */}
        <text x="20" y="215" fill="#888" fontSize="12" fontWeight="500">DEPLOYMENT PIPELINE</text>
        
        {/* Pipeline Stages */}
        <rect x="60" y="230" width="140" height="60" rx="6" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="75" y="252" fill="#4ade80" fontSize="11" fontWeight="600">1. Build</text>
        <text x="75" y="268" fill="#888" fontSize="9">Compile & Package</text>
        <circle cx="130" cy="275" r="8" fill="#4ade80"/>
        <text x="125" y="279" fill="#000" fontSize="10" fontWeight="700">✓</text>
        
        <path d="M200 260 L230 260" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow1)"/>
        <defs>
          <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#4ade80" />
          </marker>
        </defs>
        
        <rect x="230" y="230" width="140" height="60" rx="6" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="245" y="252" fill="#4ade80" fontSize="11" fontWeight="600">2. Test</text>
        <text x="245" y="268" fill="#888" fontSize="9">Run Test Suite</text>
        <circle cx="300" cy="275" r="8" fill="#4ade80"/>
        <text x="295" y="279" fill="#000" fontSize="10" fontWeight="700">✓</text>
        
        <path d="M370 260 L400 260" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow2)"/>
        <defs>
          <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#4ade80" />
          </marker>
        </defs>
        
        <rect x="400" y="230" width="140" height="60" rx="6" fill="#0f0f0f" stroke="#fbbf24" strokeWidth="2"/>
        <text x="415" y="252" fill="#fbbf24" fontSize="11" fontWeight="600">3. Stage</text>
        <text x="415" y="268" fill="#888" fontSize="9">Deploy to Staging</text>
        <circle cx="470" cy="275" r="8" fill="#fbbf24"/>
        <text x="466" y="279" fill="#000" fontSize="10" fontWeight="700">⟳</text>
        
        <path d="M540 260 L570 260" stroke="#666" strokeWidth="2" strokeDasharray="4"/>
        
        <rect x="570" y="230" width="140" height="60" rx="6" fill="#0f0f0f" stroke="#666" strokeWidth="1"/>
        <text x="585" y="252" fill="#666" fontSize="11" fontWeight="600">4. Production</text>
        <text x="585" y="268" fill="#666" fontSize="9">Deploy to Prod</text>
        <circle cx="640" cy="275" r="8" fill="#333"/>
        <text x="636" y="279" fill="#666" fontSize="10" fontWeight="700">○</text>
        
        {/* Version History */}
        <text x="20" y="330" fill="#888" fontSize="12" fontWeight="500">VERSION HISTORY</text>
        
        {/* Version Table Header */}
        <rect x="20" y="340" width="760" height="25" fill="#111"/>
        <text x="35" y="358" fill="#888" fontSize="10" fontWeight="600">VERSION</text>
        <text x="180" y="358" fill="#888" fontSize="10" fontWeight="600">DEPLOYED BY</text>
        <text x="380" y="358" fill="#888" fontSize="10" fontWeight="600">DATE</text>
        <text x="550" y="358" fill="#888" fontSize="10" fontWeight="600">ENVIRONMENT</text>
        <text x="700" y="358" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* Version Row 1 */}
        <rect x="20" y="365" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="385" fill="#ccc" fontSize="10" fontWeight="600">v2.1.0-dev</text>
        <text x="180" y="385" fill="#888" fontSize="9">john.smith@company.com</text>
        <text x="380" y="385" fill="#888" fontSize="9">2024-11-25 15:42</text>
        <text x="550" y="385" fill="#fbbf24" fontSize="9">Development</text>
        <circle cx="715" cy="380" r="4" fill="#4ade80"/>
        <text x="724" y="385" fill="#4ade80" fontSize="9">Live</text>
        
        {/* Version Row 2 */}
        <rect x="20" y="395" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="415" fill="#ccc" fontSize="10" fontWeight="600">v2.0.5</text>
        <text x="180" y="415" fill="#888" fontSize="9">sarah.davis@company.com</text>
        <text x="380" y="415" fill="#888" fontSize="9">2024-11-23 10:15</text>
        <text x="550" y="415" fill="#4a9eff" fontSize="9">Staging</text>
        <circle cx="715" cy="410" r="4" fill="#4ade80"/>
        <text x="724" y="415" fill="#4ade80" fontSize="9">Live</text>
        
        {/* Version Row 3 */}
        <rect x="20" y="425" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="445" fill="#ccc" fontSize="10" fontWeight="600">v2.0.4</text>
        <text x="180" y="445" fill="#888" fontSize="9">mike.johnson@company.com</text>
        <text x="380" y="445" fill="#888" fontSize="9">2024-11-20 14:30</text>
        <text x="550" y="445" fill="#4ade80" fontSize="9">Production</text>
        <circle cx="715" cy="440" r="4" fill="#4ade80"/>
        <text x="724" y="445" fill="#4ade80" fontSize="9">Live</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Auto-rollback: Enabled • Canary Deployment: 10% traffic • Health checks: Passing</text>
      </svg>
    </div>
  );
}