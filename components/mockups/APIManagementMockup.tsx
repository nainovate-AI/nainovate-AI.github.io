export function APIManagementMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">API Management & Orchestration</text>
        
        {/* Create API Key Button */}
        <rect x="640" y="15" width="140" height="20" rx="4" fill="#4a9eff"/>
        <text x="665" y="30" fill="#fff" fontSize="11" fontWeight="600">+ Create API Key</text>
        
        {/* API Keys Section */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">API KEYS</text>
        
        {/* API Key Table Header */}
        <rect x="20" y="95" width="760" height="30" fill="#111"/>
        <text x="35" y="115" fill="#888" fontSize="10" fontWeight="600">NAME</text>
        <text x="250" y="115" fill="#888" fontSize="10" fontWeight="600">KEY</text>
        <text x="500" y="115" fill="#888" fontSize="10" fontWeight="600">USAGE</text>
        <text x="650" y="115" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* API Key Row 1 */}
        <rect x="20" y="125" width="760" height="40" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="148" fill="#fff" fontSize="11" fontWeight="500">Production API</text>
        <text x="250" y="148" fill="#666" fontSize="9" fontFamily="monospace">nai_prod_a8f2...9c3d</text>
        <rect x="500" y="138" width="120" height="6" rx="3" fill="#222"/>
        <rect x="500" y="138" width="95" height="6" rx="3" fill="#4a9eff"/>
        <text x="625" y="148" fill="#888" fontSize="9">7.2k / 10k</text>
        <circle cx="665" cy="145" r="5" fill="#4ade80"/>
        <text x="676" y="148" fill="#4ade80" fontSize="9">Active</text>
        
        {/* API Key Row 2 */}
        <rect x="20" y="165" width="760" height="40" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="188" fill="#fff" fontSize="11" fontWeight="500">Development API</text>
        <text x="250" y="188" fill="#666" fontSize="9" fontFamily="monospace">nai_dev_b3e7...4f1a</text>
        <rect x="500" y="178" width="120" height="6" rx="3" fill="#222"/>
        <rect x="500" y="178" width="36" height="6" rx="3" fill="#10b981"/>
        <text x="625" y="188" fill="#888" fontSize="9">1.5k / 5k</text>
        <circle cx="665" cy="185" r="5" fill="#4ade80"/>
        <text x="676" y="188" fill="#4ade80" fontSize="9">Active</text>
        
        {/* API Key Row 3 */}
        <rect x="20" y="205" width="760" height="40" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="228" fill="#fff" fontSize="11" fontWeight="500">Testing API</text>
        <text x="250" y="228" fill="#666" fontSize="9" fontFamily="monospace">nai_test_c7d4...2e8b</text>
        <rect x="500" y="218" width="120" height="6" rx="3" fill="#222"/>
        <rect x="500" y="218" width="12" height="6" rx="3" fill="#fbbf24"/>
        <text x="625" y="228" fill="#888" fontSize="9">0.5k / 5k</text>
        <circle cx="665" cy="225" r="5" fill="#666"/>
        <text x="676" y="228" fill="#666" fontSize="9">Inactive</text>
        
        {/* API Analytics */}
        <text x="20" y="280" fill="#888" fontSize="12" fontWeight="500">API ANALYTICS (Last 24 Hours)</text>
        
        {/* Analytics Cards */}
        <rect x="20" y="295" width="180" height="80" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="315" fill="#888" fontSize="10">TOTAL REQUESTS</text>
        <text x="35" y="340" fill="#fff" fontSize="24" fontWeight="700">8,742</text>
        <text x="35" y="360" fill="#4ade80" fontSize="9">+12.5% from yesterday</text>
        
        <rect x="210" y="295" width="180" height="80" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="225" y="315" fill="#888" fontSize="10">AVG RESPONSE TIME</text>
        <text x="225" y="340" fill="#fff" fontSize="24" fontWeight="700">142ms</text>
        <text x="225" y="360" fill="#4a9eff" fontSize="9">-8ms from yesterday</text>
        
        <rect x="400" y="295" width="180" height="80" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="415" y="315" fill="#888" fontSize="10">ERROR RATE</text>
        <text x="415" y="340" fill="#fff" fontSize="24" fontWeight="700">0.3%</text>
        <text x="415" y="360" fill="#4ade80" fontSize="9">-0.1% from yesterday</text>
        
        <rect x="590" y="295" width="190" height="80" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="605" y="315" fill="#888" fontSize="10">SUCCESS RATE</text>
        <text x="605" y="340" fill="#fff" fontSize="24" fontWeight="700">99.7%</text>
        <text x="605" y="360" fill="#4ade80" fontSize="9">Excellent performance</text>
        
        {/* Endpoint Usage */}
        <text x="20" y="410" fill="#888" fontSize="12" fontWeight="500">TOP ENDPOINTS</text>
        
        {/* Endpoint Table */}
        <rect x="20" y="420" width="760" height="25" fill="#111"/>
        <text x="35" y="438" fill="#888" fontSize="10" fontWeight="600">ENDPOINT</text>
        <text x="350" y="438" fill="#888" fontSize="10" fontWeight="600">REQUESTS</text>
        <text x="500" y="438" fill="#888" fontSize="10" fontWeight="600">AVG LATENCY</text>
        <text x="650" y="438" fill="#888" fontSize="10" fontWeight="600">SUCCESS</text>
        
        {/* Endpoint Row 1 */}
        <rect x="20" y="445" width="760" height="20" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="459" fill="#4a9eff" fontSize="9">POST /api/v1/agents/process</text>
        <text x="350" y="459" fill="#ccc" fontSize="9">4,247</text>
        <text x="500" y="459" fill="#ccc" fontSize="9">156ms</text>
        <text x="650" y="459" fill="#4ade80" fontSize="9">99.8%</text>
        
        {/* Endpoint Row 2 */}
        <rect x="20" y="465" width="760" height="20" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="479" fill="#4a9eff" fontSize="9">GET /api/v1/models/list</text>
        <text x="350" y="479" fill="#ccc" fontSize="9">2,891</text>
        <text x="500" y="479" fill="#ccc" fontSize="9">45ms</text>
        <text x="650" y="479" fill="#4ade80" fontSize="9">100%</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Rate Limits: Configurable • Webhooks: Supported • API Version: v1.2.0</text>
      </svg>
    </div>
  );
}