export function PromptWorkshopMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Prompt Workshop</text>
        
        {/* Model Selection */}
        <rect x="600" y="15" width="180" height="20" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="610" y="30" fill="#aaa" fontSize="12">GPT-4 Turbo</text>
        <path d="M770 23 L775 28 L765 28 Z" fill="#aaa"/>
        
        {/* Left Panel - Prompt Input */}
        <rect x="20" y="70" width="360" height="400" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="30" y="95" fill="#888" fontSize="12" fontWeight="500">PROMPT INPUT</text>
        
        {/* Prompt Text Area */}
        <rect x="30" y="105" width="340" height="200" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="40" y="125" fill="#ddd" fontSize="11" fontFamily="monospace">
          <tspan x="40" dy="0">You are an AI assistant helping with</tspan>
          <tspan x="40" dy="16">document analysis. Analyze the</tspan>
          <tspan x="40" dy="16">following contract and identify:</tspan>
          <tspan x="40" dy="16">- Key obligations</tspan>
          <tspan x="40" dy="16">- Payment terms</tspan>
          <tspan x="40" dy="16">- Risk factors</tspan>
        </text>
        
        {/* Temperature Slider */}
        <text x="30" y="330" fill="#888" fontSize="11">Temperature: 0.7</text>
        <rect x="30" y="340" width="340" height="4" rx="2" fill="#222"/>
        <rect x="30" y="340" width="238" height="4" rx="2" fill="#4a9eff"/>
        <circle cx="268" cy="342" r="6" fill="#4a9eff"/>
        
        {/* Max Tokens */}
        <text x="30" y="370" fill="#888" fontSize="11">Max Tokens: 2048</text>
        <rect x="30" y="380" width="340" height="4" rx="2" fill="#222"/>
        <rect x="30" y="380" width="170" height="4" rx="2" fill="#4a9eff"/>
        <circle cx="200" cy="382" r="6" fill="#4a9eff"/>
        
        {/* Test Button */}
        <rect x="30" y="420" width="340" height="40" rx="6" fill="#4a9eff" className="cursor-pointer"/>
        <text x="170" y="445" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Test Prompt</text>
        
        {/* Right Panel - Response Comparison */}
        <rect x="400" y="70" width="380" height="400" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="410" y="95" fill="#888" fontSize="12" fontWeight="500">RESPONSE COMPARISON</text>
        
        {/* Model 1 Response */}
        <rect x="410" y="105" width="360" height="165" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="420" y="125" fill="#4a9eff" fontSize="10" fontWeight="600">GPT-4 TURBO</text>
        <text x="420" y="145" fill="#ccc" fontSize="10" fontFamily="monospace">
          <tspan x="420" dy="0">Key Obligations:</tspan>
          <tspan x="420" dy="14">• Deliver services by Q2 2025</tspan>
          <tspan x="420" dy="14">• Maintain 99.9% uptime SLA</tspan>
          <tspan x="420" dy="14">• Provide monthly reports</tspan>
          <tspan x="420" dy="18">Payment: Net 30, $50k/month</tspan>
          <tspan x="420" dy="18">Risk: Penalty clauses for delays</tspan>
        </text>
        <text x="750" y="125" fill="#4ade80" fontSize="10" fontWeight="600" textAnchor="end">94% ✓</text>
        
        {/* Model 2 Response */}
        <rect x="410" y="285" width="360" height="165" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="420" y="305" fill="#a855f7" fontSize="10" fontWeight="600">CLAUDE 3.5 SONNET</text>
        <text x="420" y="325" fill="#ccc" fontSize="10" fontFamily="monospace">
          <tspan x="420" dy="0">Obligations Analysis:</tspan>
          <tspan x="420" dy="14">1. Service delivery: Q2 2025</tspan>
          <tspan x="420" dy="14">2. Uptime guarantee: 99.9%</tspan>
          <tspan x="420" dy="14">3. Reporting: Monthly basis</tspan>
          <tspan x="420" dy="18">Terms: $50,000 monthly (Net 30)</tspan>
          <tspan x="420" dy="18">Critical: Delay penalties apply</tspan>
        </text>
        <text x="750" y="305" fill="#4ade80" fontSize="10" fontWeight="600" textAnchor="end">96% ✓</text>
        
        {/* Bottom Stats Bar */}
        <rect y="480" width="800" height="20" fill="#0a0a0a"/>
        <text x="20" y="494" fill="#666" fontSize="10">Last test: 2.3s</text>
        <text x="150" y="494" fill="#666" fontSize="10">Tokens: 423</text>
        <text x="280" y="494" fill="#666" fontSize="10">Cost: $0.012</text>
      </svg>
    </div>
  );
}