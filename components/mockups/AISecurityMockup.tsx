export function AISecurityMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">AI-Specific Security</text>
        
        {/* Security Status */}
        <rect x="630" y="15" width="150" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="645" cy="25" r="4" fill="#4ade80"/>
        <text x="655" y="29" fill="#4ade80" fontSize="11" fontWeight="600">All Checks Passed</text>
        
        {/* AI Security Metrics */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">AI SECURITY DASHBOARD</text>
        
        {/* Metric Cards */}
        <rect x="20" y="95" width="180" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="115" fill="#888" fontSize="10" fontWeight="500">PROMPT INJECTION</text>
        <text x="35" y="140" fill="#4ade80" fontSize="28" fontWeight="700">0</text>
        <text x="35" y="160" fill="#888" fontSize="9">Attacks blocked today</text>
        <text x="35" y="173" fill="#4ade80" fontSize="8">✓ Protection Active</text>
        
        <rect x="210" y="95" width="180" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="225" y="115" fill="#888" fontSize="10" fontWeight="500">DATA LEAKAGE</text>
        <text x="225" y="140" fill="#4ade80" fontSize="28" fontWeight="700">0</text>
        <text x="225" y="160" fill="#888" fontSize="9">Incidents detected</text>
        <text x="225" y="173" fill="#4ade80" fontSize="8">✓ DLP Enabled</text>
        
        <rect x="400" y="95" width="180" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="415" y="115" fill="#888" fontSize="10" fontWeight="500">MODEL POISONING</text>
        <text x="415" y="140" fill="#4ade80" fontSize="28" fontWeight="700">0</text>
        <text x="415" y="160" fill="#888" fontSize="9">Threats neutralized</text>
        <text x="415" y="173" fill="#4ade80" fontSize="8">✓ Monitoring Active</text>
        
        <rect x="590" y="95" width="190" height="90" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="605" y="115" fill="#888" fontSize="10" fontWeight="500">ADVERSARIAL INPUTS</text>
        <text x="605" y="140" fill="#4ade80" fontSize="28" fontWeight="700">3</text>
        <text x="605" y="160" fill="#888" fontSize="9">Filtered successfully</text>
        <text x="605" y="173" fill="#4ade80" fontSize="8">✓ Filters Active</text>
        
        {/* Security Controls */}
        <text x="20" y="220" fill="#888" fontSize="12" fontWeight="500">ACTIVE SECURITY CONTROLS</text>
        
        {/* Control 1 */}
        <rect x="20" y="235" width="370" height="60" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="257" fill="#fff" fontSize="12" fontWeight="600">Input Validation & Sanitization</text>
        <text x="35" y="275" fill="#888" fontSize="9">Filters malicious inputs and prompt injections</text>
        <rect x="300" y="250" width="60" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="315" cy="260" r="4" fill="#4ade80"/>
        <text x="324" y="263" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* Control 2 */}
        <rect x="410" y="235" width="370" height="60" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="425" y="257" fill="#fff" fontSize="12" fontWeight="600">Output Content Filtering</text>
        <text x="425" y="275" fill="#888" fontSize="9">Prevents sensitive data leakage in responses</text>
        <rect x="690" y="250" width="60" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="705" cy="260" r="4" fill="#4ade80"/>
        <text x="714" y="263" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* Control 3 */}
        <rect x="20" y="305" width="370" height="60" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="327" fill="#fff" fontSize="12" fontWeight="600">Model Access Control</text>
        <text x="35" y="345" fill="#888" fontSize="9">Rate limiting and authentication for API calls</text>
        <rect x="300" y="320" width="60" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="315" cy="330" r="4" fill="#4ade80"/>
        <text x="324" y="333" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* Control 4 */}
        <rect x="410" y="305" width="370" height="60" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="425" y="327" fill="#fff" fontSize="12" fontWeight="600">Adversarial Defense</text>
        <text x="425" y="345" fill="#888" fontSize="9">Detects and blocks adversarial attack patterns</text>
        <rect x="690" y="320" width="60" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="705" cy="330" r="4" fill="#4ade80"/>
        <text x="714" y="333" fill="#4ade80" fontSize="8">ACTIVE</text>
        
        {/* Recent Threats */}
        <text x="20" y="400" fill="#888" fontSize="12" fontWeight="500">RECENT THREAT ACTIVITY</text>
        
        {/* Threat 1 */}
        <rect x="20" y="415" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="427" r="4" fill="#4ade80"/>
        <text x="50" y="430" fill="#ccc" fontSize="9">15:45:33 - Blocked prompt injection attempt - Pattern: "Ignore previous instructions"</text>
        <text x="720" y="430" fill="#4ade80" fontSize="9">BLOCKED</text>
        
        {/* Threat 2 */}
        <rect x="20" y="440" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="452" r="4" fill="#4ade80"/>
        <text x="50" y="455" fill="#ccc" fontSize="9">15:42:17 - Filtered adversarial input - High confidence attack signature</text>
        <text x="720" y="455" fill="#4ade80" fontSize="9">FILTERED</text>
        
        {/* Threat 3 */}
        <rect x="20" y="465" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="477" r="4" fill="#fbbf24"/>
        <text x="50" y="480" fill="#ccc" fontSize="9">15:38:52 - Detected unusual query pattern - Flagged for review</text>
        <text x="720" y="480" fill="#fbbf24" fontSize="9">FLAGGED</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">AI Firewall: Active • Threat Intelligence: Updated • Red Team Testing: Monthly</text>
      </svg>
    </div>
  );
}