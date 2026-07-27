export function DataSecurityMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Data Security & Encryption</text>
        
        {/* Security Status */}
        <rect x="630" y="15" width="150" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="645" cy="25" r="4" fill="#4ade80"/>
        <text x="655" y="29" fill="#4ade80" fontSize="11" fontWeight="600">All Systems Secure</text>
        
        {/* Security Overview Cards */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">SECURITY OVERVIEW</text>
        
        {/* Card 1: Encryption Status */}
        <rect x="20" y="95" width="230" height="110" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="120" fill="#888" fontSize="11" fontWeight="500">ENCRYPTION STATUS</text>
        <text x="35" y="145" fill="#4ade80" fontSize="32" fontWeight="700">100%</text>
        <text x="35" y="165" fill="#888" fontSize="10">Data encrypted at rest</text>
        <text x="35" y="180" fill="#888" fontSize="9">AES-256 encryption</text>
        <text x="35" y="193" fill="#888" fontSize="9">TLS 1.3 in transit</text>
        
        {/* Card 2: Threat Detection */}
        <rect x="270" y="95" width="230" height="110" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="285" y="120" fill="#888" fontSize="11" fontWeight="500">THREAT DETECTION</text>
        <text x="285" y="145" fill="#4ade80" fontSize="32" fontWeight="700">0</text>
        <text x="285" y="165" fill="#888" fontSize="10">Active threats detected</text>
        <text x="285" y="180" fill="#888" fontSize="9">Last scan: 2 min ago</text>
        <text x="285" y="193" fill="#888" fontSize="9">24/7 monitoring active</text>
        
        {/* Card 3: Security Score */}
        <rect x="520" y="95" width="260" height="110" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="535" y="120" fill="#888" fontSize="11" fontWeight="500">SECURITY SCORE</text>
        <text x="535" y="145" fill="#4ade80" fontSize="32" fontWeight="700">A+</text>
        <text x="535" y="165" fill="#888" fontSize="10">Excellent security posture</text>
        <text x="535" y="180" fill="#888" fontSize="9">SOC 2 Type II compliant</text>
        <text x="535" y="193" fill="#888" fontSize="9">ISO 27001 certified</text>
        
        {/* Encryption Keys Section */}
        <text x="20" y="240" fill="#888" fontSize="12" fontWeight="500">ENCRYPTION KEYS</text>
        
        <rect x="20" y="255" width="760" height="70" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        
        {/* Key 1 */}
        <rect x="35" y="270" width="350" height="40" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="50" y="287" fill="#4a9eff" fontSize="10" fontWeight="600">Master Encryption Key</text>
        <text x="50" y="302" fill="#666" fontSize="8" fontFamily="monospace">key-prod-2024-ae7f...9c3d</text>
        <rect x="320" y="278" width="50" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="330" y="291" fill="#4ade80" fontSize="8" fontWeight="600">ACTIVE</text>
        
        {/* Key 2 */}
        <rect x="410" y="270" width="350" height="40" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="425" y="287" fill="#a855f7" fontSize="10" fontWeight="600">Customer Data Key</text>
        <text x="425" y="302" fill="#666" fontSize="8" fontFamily="monospace">key-cust-2024-b8e2...4f1a</text>
        <rect x="695" y="278" width="50" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="705" y="291" fill="#4ade80" fontSize="8" fontWeight="600">ACTIVE</text>
        
        {/* Security Events Log */}
        <text x="20" y="360" fill="#888" fontSize="12" fontWeight="500">RECENT SECURITY EVENTS</text>
        
        {/* Event 1 */}
        <rect x="20" y="375" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="390" r="4" fill="#4ade80"/>
        <text x="50" y="393" fill="#ccc" fontSize="10">15:42:18 - Successful encryption key rotation completed</text>
        <text x="700" y="393" fill="#888" fontSize="9">System</text>
        
        {/* Event 2 */}
        <rect x="20" y="405" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="420" r="4" fill="#4ade80"/>
        <text x="50" y="423" fill="#ccc" fontSize="10">15:38:45 - Security scan completed - No threats detected</text>
        <text x="700" y="423" fill="#888" fontSize="9">Scanner</text>
        
        {/* Event 3 */}
        <rect x="20" y="435" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="450" r="4" fill="#4a9eff"/>
        <text x="50" y="453" fill="#ccc" fontSize="10">15:32:12 - Certificate renewal scheduled for api.nainovate.ai</text>
        <text x="700" y="453" fill="#888" fontSize="9">TLS</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Key Management: AWS KMS • Certificate Authority: Let&apos;s Encrypt • DLP: Enabled</text>
      </svg>
    </div>
  );
}