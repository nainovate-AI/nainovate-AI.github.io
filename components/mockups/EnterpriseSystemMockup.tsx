export function EnterpriseSystemMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Enterprise System Support</text>
        
        {/* Status Indicator */}
        <rect x="630" y="15" width="150" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="645" cy="25" r="4" fill="#4ade80"/>
        <text x="655" y="29" fill="#4ade80" fontSize="11" fontWeight="600">All Systems Online</text>
        
        {/* Enterprise Systems Grid */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">SUPPORTED ENTERPRISE SYSTEMS</text>
        
        {/* System Category 1: ERP */}
        <text x="20" y="105" fill="#4a9eff" fontSize="11" fontWeight="600">ENTERPRISE RESOURCE PLANNING (ERP)</text>
        
        <rect x="20" y="115" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="35" y="130" width="35" height="35" rx="4" fill="#ea4335" fillOpacity="0.2"/>
        <text x="44" y="153" fill="#ea4335" fontSize="14" fontWeight="700">SAP</text>
        <text x="80" y="143" fill="#fff" fontSize="11" fontWeight="600">SAP ERP</text>
        <text x="80" y="158" fill="#888" fontSize="9">Full integration support</text>
        <circle cx="200" cy="147" r="5" fill="#4ade80"/>
        <text x="210" y="151" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="260" y="115" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="275" y="130" width="35" height="35" rx="4" fill="#c74634" fillOpacity="0.2"/>
        <text x="282" y="153" fill="#c74634" fontSize="14" fontWeight="700">OR</text>
        <text x="320" y="143" fill="#fff" fontSize="11" fontWeight="600">Oracle ERP</text>
        <text x="320" y="158" fill="#888" fontSize="9">Cloud & on-premise</text>
        <circle cx="440" cy="147" r="5" fill="#4ade80"/>
        <text x="450" y="151" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="500" y="115" width="280" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="515" y="130" width="35" height="35" rx="4" fill="#0070d1" fillOpacity="0.2"/>
        <text x="522" y="153" fill="#0070d1" fontSize="14" fontWeight="700">NS</text>
        <text x="560" y="143" fill="#fff" fontSize="11" fontWeight="600">NetSuite</text>
        <text x="560" y="158" fill="#888" fontSize="9">Financial & inventory sync</text>
        <circle cx="730" cy="147" r="5" fill="#4ade80"/>
        <text x="740" y="151" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* System Category 2: CRM */}
        <text x="20" y="210" fill="#a855f7" fontSize="11" fontWeight="600">CUSTOMER RELATIONSHIP MANAGEMENT (CRM)</text>
        
        <rect x="20" y="220" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="35" y="235" width="35" height="35" rx="4" fill="#00a1e0" fillOpacity="0.2"/>
        <text x="42" y="258" fill="#00a1e0" fontSize="14" fontWeight="700">SF</text>
        <text x="80" y="248" fill="#fff" fontSize="11" fontWeight="600">Salesforce</text>
        <text x="80" y="263" fill="#888" fontSize="9">Sales & service cloud</text>
        <circle cx="200" cy="252" r="5" fill="#4ade80"/>
        <text x="210" y="256" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="260" y="220" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="275" y="235" width="35" height="35" rx="4" fill="#ff7a59" fillOpacity="0.2"/>
        <text x="282" y="258" fill="#ff7a59" fontSize="14" fontWeight="700">HS</text>
        <text x="320" y="248" fill="#fff" fontSize="11" fontWeight="600">HubSpot</text>
        <text x="320" y="263" fill="#888" fontSize="9">Marketing & CRM</text>
        <circle cx="440" cy="252" r="5" fill="#4ade80"/>
        <text x="450" y="256" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="500" y="220" width="280" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="515" y="235" width="35" height="35" rx="4" fill="#0078d4" fillOpacity="0.2"/>
        <text x="520" y="258" fill="#0078d4" fontSize="14" fontWeight="700">MD</text>
        <text x="560" y="248" fill="#fff" fontSize="11" fontWeight="600">MS Dynamics</text>
        <text x="560" y="263" fill="#888" fontSize="9">Customer engagement</text>
        <circle cx="730" cy="252" r="5" fill="#4ade80"/>
        <text x="740" y="256" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* System Category 3: HR */}
        <text x="20" y="315" fill="#10b981" fontSize="11" fontWeight="600">HUMAN RESOURCES MANAGEMENT (HRM)</text>
        
        <rect x="20" y="325" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="35" y="340" width="35" height="35" rx="4" fill="#eb0028" fillOpacity="0.2"/>
        <text x="40" y="363" fill="#eb0028" fontSize="14" fontWeight="700">WD</text>
        <text x="80" y="353" fill="#fff" fontSize="11" fontWeight="600">Workday</text>
        <text x="80" y="368" fill="#888" fontSize="9">HR & payroll</text>
        <circle cx="200" cy="357" r="5" fill="#4ade80"/>
        <text x="210" y="361" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="260" y="325" width="230" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="275" y="340" width="35" height="35" rx="4" fill="#0066b2" fillOpacity="0.2"/>
        <text x="282" y="363" fill="#0066b2" fontSize="14" fontWeight="700">SF</text>
        <text x="320" y="353" fill="#fff" fontSize="11" fontWeight="600">SuccessFactors</text>
        <text x="320" y="368" fill="#888" fontSize="9">Talent management</text>
        <circle cx="440" cy="357" r="5" fill="#4ade80"/>
        <text x="450" y="361" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        <rect x="500" y="325" width="280" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="515" y="340" width="35" height="35" rx="4" fill="#6772e5" fillOpacity="0.2"/>
        <text x="520" y="363" fill="#6772e5" fontSize="14" fontWeight="700">AD</text>
        <text x="560" y="353" fill="#fff" fontSize="11" fontWeight="600">ADP Workforce</text>
        <text x="560" y="368" fill="#888" fontSize="9">Payroll & benefits</text>
        <circle cx="730" cy="357" r="5" fill="#4ade80"/>
        <text x="740" y="361" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* Integration Statistics */}
        <text x="20" y="425" fill="#888" fontSize="12" fontWeight="500">INTEGRATION STATISTICS</text>
        
        <rect x="20" y="435" width="760" height="30" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="455" fill="#888" fontSize="10">Total Integrations:</text>
        <text x="180" y="455" fill="#fff" fontSize="10" fontWeight="600">12</text>
        
        <text x="250" y="455" fill="#888" fontSize="10">Data Synced Today:</text>
        <text x="390" y="455" fill="#fff" fontSize="10" fontWeight="600">247k records</text>
        
        <text x="500" y="455" fill="#888" fontSize="10">Sync Status:</text>
        <text x="600" y="455" fill="#4ade80" fontSize="10" fontWeight="600">● All Active</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Real-time Sync • Bi-directional Data Flow • Custom Field Mapping • Conflict Resolution</text>
      </svg>
    </div>
  );
}