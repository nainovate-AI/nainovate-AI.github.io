export function UniversalConnectorsMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Universal Connectors</text>
        
        {/* Add Connector Button */}
        <rect x="630" y="15" width="150" height="20" rx="4" fill="#4a9eff"/>
        <text x="660" y="30" fill="#fff" fontSize="11" fontWeight="600">+ Add Connector</text>
        
        {/* Active Connectors Section */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">ACTIVE CONNECTIONS (8)</text>
        
        {/* Connector Grid Row 1 */}
        {/* SharePoint */}
        <rect x="20" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="35" y="110" width="40" height="40" rx="6" fill="#0078d4" fillOpacity="0.2"/>
        <text x="48" y="138" fill="#0078d4" fontSize="20" fontWeight="700">SP</text>
        <text x="85" y="122" fill="#fff" fontSize="12" fontWeight="600">SharePoint</text>
        <text x="85" y="138" fill="#888" fontSize="9">Microsoft 365</text>
        <circle cx="35" cy="175" r="4" fill="#4ade80"/>
        <text x="45" y="179" fill="#4ade80" fontSize="9">Connected</text>
        <text x="135" y="179" fill="#666" fontSize="9">1.2k docs</text>
        
        {/* Google Drive */}
        <rect x="210" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="225" y="110" width="40" height="40" rx="6" fill="#4285f4" fillOpacity="0.2"/>
        <text x="237" y="138" fill="#4285f4" fontSize="20" fontWeight="700">GD</text>
        <text x="275" y="122" fill="#fff" fontSize="12" fontWeight="600">Google Drive</text>
        <text x="275" y="138" fill="#888" fontSize="9">Workspace</text>
        <circle cx="225" cy="175" r="4" fill="#4ade80"/>
        <text x="235" y="179" fill="#4ade80" fontSize="9">Connected</text>
        <text x="325" y="179" fill="#666" fontSize="9">3.4k docs</text>
        
        {/* Salesforce */}
        <rect x="400" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="415" y="110" width="40" height="40" rx="6" fill="#00a1e0" fillOpacity="0.2"/>
        <text x="428" y="138" fill="#00a1e0" fontSize="20" fontWeight="700">SF</text>
        <text x="465" y="122" fill="#fff" fontSize="12" fontWeight="600">Salesforce</text>
        <text x="465" y="138" fill="#888" fontSize="9">CRM Data</text>
        <circle cx="415" cy="175" r="4" fill="#4ade80"/>
        <text x="425" y="179" fill="#4ade80" fontSize="9">Connected</text>
        <text x="515" y="179" fill="#666" fontSize="9">850 records</text>
        
        {/* Confluence */}
        <rect x="590" y="95" width="190" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="605" y="110" width="40" height="40" rx="6" fill="#0052cc" fillOpacity="0.2"/>
        <text x="618" y="138" fill="#0052cc" fontSize="20" fontWeight="700">CF</text>
        <text x="655" y="122" fill="#fff" fontSize="12" fontWeight="600">Confluence</text>
        <text x="655" y="138" fill="#888" fontSize="9">Atlassian</text>
        <circle cx="605" cy="175" r="4" fill="#4ade80"/>
        <text x="615" y="179" fill="#4ade80" fontSize="9">Connected</text>
        <text x="705" y="179" fill="#666" fontSize="9">620 pages</text>
        
        {/* Connector Grid Row 2 */}
        {/* Slack */}
        <rect x="20" y="205" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="35" y="220" width="40" height="40" rx="6" fill="#4a154b" fillOpacity="0.2"/>
        <text x="47" y="248" fill="#e01e5a" fontSize="20" fontWeight="700">SL</text>
        <text x="85" y="232" fill="#fff" fontSize="12" fontWeight="600">Slack</text>
        <text x="85" y="248" fill="#888" fontSize="9">Messages</text>
        <circle cx="35" cy="285" r="4" fill="#4ade80"/>
        <text x="45" y="289" fill="#4ade80" fontSize="9">Connected</text>
        <text x="135" y="289" fill="#666" fontSize="9">5.2k msgs</text>
        
        {/* Notion */}
        <rect x="210" y="205" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="225" y="220" width="40" height="40" rx="6" fill="#fff" fillOpacity="0.1"/>
        <text x="237" y="248" fill="#fff" fontSize="20" fontWeight="700">NT</text>
        <text x="275" y="232" fill="#fff" fontSize="12" fontWeight="600">Notion</text>
        <text x="275" y="248" fill="#888" fontSize="9">Wiki & Docs</text>
        <circle cx="225" cy="285" r="4" fill="#4ade80"/>
        <text x="235" y="289" fill="#4ade80" fontSize="9">Connected</text>
        <text x="325" y="289" fill="#666" fontSize="9">940 pages</text>
        
        {/* Dropbox */}
        <rect x="400" y="205" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="415" y="220" width="40" height="40" rx="6" fill="#0061ff" fillOpacity="0.2"/>
        <text x="427" y="248" fill="#0061ff" fontSize="20" fontWeight="700">DB</text>
        <text x="465" y="232" fill="#fff" fontSize="12" fontWeight="600">Dropbox</text>
        <text x="465" y="248" fill="#888" fontSize="9">File Storage</text>
        <circle cx="415" cy="285" r="4" fill="#4ade80"/>
        <text x="425" y="289" fill="#4ade80" fontSize="9">Connected</text>
        <text x="515" y="289" fill="#666" fontSize="9">2.1k files</text>
        
        {/* Jira */}
        <rect x="590" y="205" width="190" height="100" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <rect x="605" y="220" width="40" height="40" rx="6" fill="#0052cc" fillOpacity="0.2"/>
        <text x="618" y="248" fill="#0052cc" fontSize="20" fontWeight="700">JR</text>
        <text x="655" y="232" fill="#fff" fontSize="12" fontWeight="600">Jira</text>
        <text x="655" y="248" fill="#888" fontSize="9">Issue Tracking</text>
        <circle cx="605" cy="285" r="4" fill="#4ade80"/>
        <text x="615" y="289" fill="#4ade80" fontSize="9">Connected</text>
        <text x="705" y="289" fill="#666" fontSize="9">1.5k issues</text>
        
        {/* Available Connectors Section */}
        <text x="20" y="335" fill="#888" fontSize="12" fontWeight="500">AVAILABLE CONNECTORS (92+)</text>
        
        {/* Available Connector Pills */}
        <rect x="20" y="350" width="100" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="38" y="370" fill="#888" fontSize="10">Box</text>
        
        <rect x="130" y="350" width="120" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="148" y="370" fill="#888" fontSize="10">OneDrive</text>
        
        <rect x="260" y="350" width="110" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="278" y="370" fill="#888" fontSize="10">Zendesk</text>
        
        <rect x="380" y="350" width="110" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="398" y="370" fill="#888" fontSize="10">HubSpot</text>
        
        <rect x="500" y="350" width="100" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="518" y="370" fill="#888" fontSize="10">Asana</text>
        
        <rect x="610" y="350" width="100" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="628" y="370" fill="#888" fontSize="10">GitHub</text>
        
        <rect x="720" y="350" width="60" height="30" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="738" y="370" fill="#888" fontSize="10">+86</text>
        
        {/* Sync Status */}
        <rect x="20" y="410" width="760" height="60" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="432" fill="#888" fontSize="11" fontWeight="500">SYNC STATUS</text>
        <text x="35" y="450" fill="#4ade80" fontSize="10">● All connectors syncing normally</text>
        <text x="35" y="464" fill="#666" fontSize="9">Last sync: 2 minutes ago • Next sync: in 8 minutes</text>
        
        <text x="550" y="432" fill="#888" fontSize="11" fontWeight="500">TOTAL INDEXED</text>
        <text x="550" y="450" fill="#fff" fontSize="16" fontWeight="700">10.8k</text>
        <text x="550" y="464" fill="#666" fontSize="9">documents & records</text>
      </svg>
    </div>
  );
}