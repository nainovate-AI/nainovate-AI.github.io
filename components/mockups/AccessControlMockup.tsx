export function AccessControlMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Access Control & Identity</text>
        
        {/* Add User Button */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4a9eff"/>
        <text x="680" y="30" fill="#fff" fontSize="11" fontWeight="600">+ Add User</text>
        
        {/* Active Users Section */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">ACTIVE USERS (24)</text>
        
        {/* User Table Header */}
        <rect x="20" y="95" width="760" height="30" fill="#111"/>
        <text x="40" y="115" fill="#888" fontSize="10" fontWeight="600">USER</text>
        <text x="280" y="115" fill="#888" fontSize="10" fontWeight="600">ROLE</text>
        <text x="420" y="115" fill="#888" fontSize="10" fontWeight="600">PERMISSIONS</text>
        <text x="650" y="115" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* User Row 1 */}
        <rect x="20" y="125" width="760" height="45" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <circle cx="40" cy="147" r="12" fill="#4a9eff" fillOpacity="0.3"/>
        <text x="34" y="152" fill="#4a9eff" fontSize="11" fontWeight="600">JS</text>
        <text x="60" y="145" fill="#fff" fontSize="11" fontWeight="500">John Smith</text>
        <text x="60" y="159" fill="#666" fontSize="9">john.smith@company.com</text>
        <rect x="280" y="138" width="110" height="20" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="295" y="152" fill="#ef4444" fontSize="9" fontWeight="600">Administrator</text>
        <text x="420" y="145" fill="#888" fontSize="9">Full Access</text>
        <text x="420" y="159" fill="#666" fontSize="8">All modules • User management</text>
        <circle cx="665" cy="147" r="5" fill="#4ade80"/>
        <text x="676" y="150" fill="#4ade80" fontSize="9">Active</text>
        
        {/* User Row 2 */}
        <rect x="20" y="170" width="760" height="45" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <circle cx="40" cy="192" r="12" fill="#a855f7" fillOpacity="0.3"/>
        <text x="35" y="197" fill="#a855f7" fontSize="11" fontWeight="600">SD</text>
        <text x="60" y="190" fill="#fff" fontSize="11" fontWeight="500">Sarah Davis</text>
        <text x="60" y="204" fill="#666" fontSize="9">sarah.davis@company.com</text>
        <rect x="280" y="183" width="90" height="20" rx="4" fill="#4a9eff" fillOpacity="0.2" stroke="#4a9eff" strokeWidth="1"/>
        <text x="295" y="197" fill="#4a9eff" fontSize="9" fontWeight="600">Developer</text>
        <text x="420" y="190" fill="#888" fontSize="9">Read/Write</text>
        <text x="420" y="204" fill="#666" fontSize="8">API access • Model training</text>
        <circle cx="665" cy="192" r="5" fill="#4ade80"/>
        <text x="676" y="195" fill="#4ade80" fontSize="9">Active</text>
        
        {/* User Row 3 */}
        <rect x="20" y="215" width="760" height="45" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <circle cx="40" cy="237" r="12" fill="#10b981" fillOpacity="0.3"/>
        <text x="35" y="242" fill="#10b981" fontSize="11" fontWeight="600">MJ</text>
        <text x="60" y="235" fill="#fff" fontSize="11" fontWeight="500">Mike Johnson</text>
        <text x="60" y="249" fill="#666" fontSize="9">mike.johnson@company.com</text>
        <rect x="280" y="228" width="90" height="20" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1"/>
        <text x="295" y="242" fill="#10b981" fontSize="9" fontWeight="600">Analyst</text>
        <text x="420" y="235" fill="#888" fontSize="9">Read Only</text>
        <text x="420" y="249" fill="#666" fontSize="8">View dashboards • Export reports</text>
        <circle cx="665" cy="237" r="5" fill="#4ade80"/>
        <text x="676" y="240" fill="#4ade80" fontSize="9">Active</text>
        
        {/* User Row 4 */}
        <rect x="20" y="260" width="760" height="45" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <circle cx="40" cy="282" r="12" fill="#fbbf24" fillOpacity="0.3"/>
        <text x="36" y="287" fill="#fbbf24" fontSize="11" fontWeight="600">EW</text>
        <text x="60" y="280" fill="#fff" fontSize="11" fontWeight="500">Emily Wilson</text>
        <text x="60" y="294" fill="#666" fontSize="9">emily.wilson@company.com</text>
        <rect x="280" y="273" width="110" height="20" rx="4" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1"/>
        <text x="295" y="287" fill="#fbbf24" fontSize="9" fontWeight="600">Support Agent</text>
        <text x="420" y="280" fill="#888" fontSize="9">Limited Access</text>
        <text x="420" y="294" fill="#666" fontSize="8">View tickets • Chat access</text>
        <circle cx="665" cy="282" r="5" fill="#666"/>
        <text x="676" y="285" fill="#666" fontSize="9">Offline</text>
        
        {/* Permission Groups Section */}
        <text x="20" y="340" fill="#888" fontSize="12" fontWeight="500">PERMISSION GROUPS</text>
        
        {/* Group 1 */}
        <rect x="20" y="355" width="370" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="375" fill="#fff" fontSize="11" fontWeight="600">AI Model Access</text>
        <text x="35" y="393" fill="#666" fontSize="9">12 users • Full model training and deployment rights</text>
        
        {/* Group 2 */}
        <rect x="410" y="355" width="370" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="425" y="375" fill="#fff" fontSize="11" fontWeight="600">Data Access</text>
        <text x="425" y="393" fill="#666" fontSize="9">18 users • Read/write access to datasets and pipelines</text>
        
        {/* Group 3 */}
        <rect x="20" y="415" width="370" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="435" fill="#fff" fontSize="11" fontWeight="600">API Access</text>
        <text x="35" y="453" fill="#666" fontSize="9">8 users • Programmatic API access with rate limits</text>
        
        {/* Group 4 */}
        <rect x="410" y="415" width="370" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="425" y="435" fill="#fff" fontSize="11" fontWeight="600">Admin Panel</text>
        <text x="425" y="453" fill="#666" fontSize="9">3 users • Full system administration capabilities</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">SSO: Enabled • MFA: Required • Session Timeout: 8 hours</text>
      </svg>
    </div>
  );
}