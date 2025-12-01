export function ModelOrchestratorMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Model Orchestrator</text>
        
        {/* Add Model Button */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4a9eff"/>
        <text x="680" y="30" fill="#fff" fontSize="11" fontWeight="600">+ Add Model</text>
        
        {/* Connected Models Grid */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">CONNECTED MODELS</text>
        
        {/* Model Card 1 - GPT-4 */}
        <rect x="20" y="95" width="240" height="120" rx="8" fill="#0f0f0f" stroke="#4a9eff" strokeWidth="2"/>
        <circle cx="40" cy="115" r="8" fill="#4ade80"/>
        <text x="55" y="119" fill="#fff" fontSize="14" fontWeight="600">GPT-4 Turbo</text>
        <text x="40" y="140" fill="#888" fontSize="10">Provider: OpenAI</text>
        <text x="40" y="158" fill="#888" fontSize="10">Endpoint: api.openai.com</text>
        <text x="40" y="176" fill="#888" fontSize="10">Latency: 1.2s avg</text>
        <rect x="40" y="185" width="200" height="3" rx="1.5" fill="#222"/>
        <rect x="40" y="185" width="160" height="3" rx="1.5" fill="#4ade80"/>
        <text x="40" y="203" fill="#4ade80" fontSize="9">Active • 1.2k requests/day</text>
        
        {/* Model Card 2 - Claude */}
        <rect x="280" y="95" width="240" height="120" rx="8" fill="#0f0f0f" stroke="#a855f7" strokeWidth="2"/>
        <circle cx="300" cy="115" r="8" fill="#4ade80"/>
        <text x="315" y="119" fill="#fff" fontSize="14" fontWeight="600">Claude 3.5 Sonnet</text>
        <text x="300" y="140" fill="#888" fontSize="10">Provider: Anthropic</text>
        <text x="300" y="158" fill="#888" fontSize="10">Endpoint: api.anthropic.com</text>
        <text x="300" y="176" fill="#888" fontSize="10">Latency: 0.9s avg</text>
        <rect x="300" y="185" width="200" height="3" rx="1.5" fill="#222"/>
        <rect x="300" y="185" width="180" height="3" rx="1.5" fill="#4ade80"/>
        <text x="300" y="203" fill="#4ade80" fontSize="9">Active • 2.4k requests/day</text>
        
        {/* Model Card 3 - Gemini */}
        <rect x="540" y="95" width="240" height="120" rx="8" fill="#0f0f0f" stroke="#ef4444" strokeWidth="2"/>
        <circle cx="560" cy="115" r="8" fill="#4ade80"/>
        <text x="575" y="119" fill="#fff" fontSize="14" fontWeight="600">Gemini 1.5 Pro</text>
        <text x="560" y="140" fill="#888" fontSize="10">Provider: Google</text>
        <text x="560" y="158" fill="#888" fontSize="10">Endpoint: generativelanguage</text>
        <text x="560" y="176" fill="#888" fontSize="10">Latency: 1.5s avg</text>
        <rect x="560" y="185" width="200" height="3" rx="1.5" fill="#222"/>
        <rect x="560" y="185" width="120" height="3" rx="1.5" fill="#4ade80"/>
        <text x="560" y="203" fill="#4ade80" fontSize="9">Active • 800 requests/day</text>
        
        {/* Routing Rules Section */}
        <text x="20" y="250" fill="#888" fontSize="12" fontWeight="500">ROUTING RULES</text>
        
        {/* Rule 1 */}
        <rect x="20" y="265" width="760" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="288" fill="#fff" fontSize="12" fontWeight="500">Document Analysis</text>
        <text x="35" y="304" fill="#666" fontSize="10">Route to: Claude 3.5 Sonnet • Fallback: GPT-4</text>
        <rect x="720" y="280" width="25" height="15" rx="7.5" fill="#4ade80"/>
        <circle cx="735" cy="287.5" r="5" fill="#fff"/>
        
        {/* Rule 2 */}
        <rect x="20" y="325" width="760" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="348" fill="#fff" fontSize="12" fontWeight="500">Code Generation</text>
        <text x="35" y="364" fill="#666" fontSize="10">Route to: GPT-4 Turbo • Fallback: Claude 3.5</text>
        <rect x="720" y="340" width="25" height="15" rx="7.5" fill="#4ade80"/>
        <circle cx="735" cy="347.5" r="5" fill="#fff"/>
        
        {/* Rule 3 */}
        <rect x="20" y="385" width="760" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="408" fill="#fff" fontSize="12" fontWeight="500">Multi-modal Tasks</text>
        <text x="35" y="424" fill="#666" fontSize="10">Route to: Gemini 1.5 Pro • Fallback: GPT-4</text>
        <rect x="720" y="400" width="25" height="15" rx="7.5" fill="#333"/>
        <circle cx="727.5" cy="407.5" r="5" fill="#666"/>
        
        {/* Bottom Stats */}
        <rect y="460" width="800" height="40" fill="#111"/>
        <text x="20" y="483" fill="#888" fontSize="11">Total Requests: 4.4k/day</text>
        <text x="200" y="483" fill="#888" fontSize="11">Avg Response: 1.2s</text>
        <text x="400" y="483" fill="#888" fontSize="11">Success Rate: 99.7%</text>
        <text x="600" y="483" fill="#4ade80" fontSize="11">● All Models Online</text>
      </svg>
    </div>
  );
}