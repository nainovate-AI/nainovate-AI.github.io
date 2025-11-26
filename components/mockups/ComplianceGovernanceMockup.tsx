export function ComplianceGovernanceMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Compliance & Governance</text>
        
        {/* Compliance Status */}
        <rect x="630" y="15" width="150" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="645" cy="25" r="4" fill="#4ade80"/>
        <text x="655" y="29" fill="#4ade80" fontSize="11" fontWeight="600">100% Compliant</text>
        
        {/* Compliance Frameworks */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">COMPLIANCE FRAMEWORKS</text>
        
        {/* Framework Cards Row 1 */}
        <rect x="20" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="35" y="120" fill="#4ade80" fontSize="14" fontWeight="700">SOC 2 Type II</text>
        <text x="35" y="140" fill="#888" fontSize="10">Security, Availability</text>
        <text x="35" y="155" fill="#888" fontSize="10">Confidentiality</text>
        <rect x="35" y="170" width="130" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="65" y="183" fill="#4ade80" fontSize="9" fontWeight="600">✓ CERTIFIED</text>
        
        <rect x="210" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="225" y="120" fill="#4ade80" fontSize="14" fontWeight="700">GDPR</text>
        <text x="225" y="140" fill="#888" fontSize="10">EU Data Protection</text>
        <text x="225" y="155" fill="#888" fontSize="10">Privacy Rights</text>
        <rect x="225" y="170" width="130" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="255" y="183" fill="#4ade80" fontSize="9" fontWeight="600">✓ COMPLIANT</text>
        
        <rect x="400" y="95" width="180" height="100" rx="8" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="415" y="120" fill="#4ade80" fontSize="14" fontWeight="700">HIPAA</text>
        <text x="415" y="140" fill="#888" fontSize="10">Healthcare Data</text>
        <text x="415" y="155" fill="#888" fontSize="10">PHI Protection</text>
        <rect x="415" y="170" width="130" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="445" y="183" fill="#4ade80" fontSize="9" fontWeight="600">✓ COMPLIANT</text>
        
        <rect x="590" y="95" width="190" height="100" rx="8" fill="#0f0f0f" stroke="#4ade80" strokeWidth="2"/>
        <text x="605" y="120" fill="#4ade80" fontSize="14" fontWeight="700">ISO 27001</text>
        <text x="605" y="140" fill="#888" fontSize="10">Information Security</text>
        <text x="605" y="155" fill="#888" fontSize="10">Management</text>
        <rect x="605" y="170" width="150" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="640" y="183" fill="#4ade80" fontSize="9" fontWeight="600">✓ CERTIFIED</text>
        
        {/* Audit Trail Section */}
        <text x="20" y="230" fill="#888" fontSize="12" fontWeight="500">AUDIT TRAIL (Last 24 Hours)</text>
        
        {/* Audit Table Header */}
        <rect x="20" y="245" width="760" height="30" fill="#111"/>
        <text x="35" y="265" fill="#888" fontSize="10" fontWeight="600">TIMESTAMP</text>
        <text x="180" y="265" fill="#888" fontSize="10" fontWeight="600">USER</text>
        <text x="350" y="265" fill="#888" fontSize="10" fontWeight="600">ACTION</text>
        <text x="650" y="265" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* Audit Row 1 */}
        <rect x="20" y="275" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="297" fill="#ccc" fontSize="9">2024-11-25 15:42:18</text>
        <text x="180" y="297" fill="#ccc" fontSize="9">john.smith@company.com</text>
        <text x="350" y="297" fill="#ccc" fontSize="9">Accessed customer data - Invoice #12345</text>
        <circle cx="665" cy="293" r="4" fill="#4ade80"/>
        <text x="675" y="297" fill="#4ade80" fontSize="9">Approved</text>
        
        {/* Audit Row 2 */}
        <rect x="20" y="310" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="332" fill="#ccc" fontSize="9">2024-11-25 15:38:22</text>
        <text x="180" y="332" fill="#ccc" fontSize="9">sarah.davis@company.com</text>
        <text x="350" y="332" fill="#ccc" fontSize="9">Modified AI model configuration - Model #847</text>
        <circle cx="665" cy="328" r="4" fill="#4ade80"/>
        <text x="675" y="332" fill="#4ade80" fontSize="9">Logged</text>
        
        {/* Audit Row 3 */}
        <rect x="20" y="345" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="367" fill="#ccc" fontSize="9">2024-11-25 15:32:45</text>
        <text x="180" y="367" fill="#ccc" fontSize="9">mike.johnson@company.com</text>
        <text x="350" y="367" fill="#ccc" fontSize="9">Exported compliance report - Q4 2024</text>
        <circle cx="665" cy="363" r="4" fill="#4ade80"/>
        <text x="675" y="367" fill="#4ade80" fontSize="9">Approved</text>
        
        {/* Audit Row 4 */}
        <rect x="20" y="380" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="402" fill="#ccc" fontSize="9">2024-11-25 15:28:13</text>
        <text x="180" y="402" fill="#ccc" fontSize="9">emily.wilson@company.com</text>
        <text x="350" y="402" fill="#ccc" fontSize="9">Failed login attempt detected</text>
        <circle cx="665" cy="398" r="4" fill="#fbbf24"/>
        <text x="675" y="402" fill="#fbbf24" fontSize="9">Flagged</text>
        
        {/* Compliance Metrics */}
        <text x="20" y="445" fill="#888" fontSize="12" fontWeight="500">COMPLIANCE METRICS</text>
        
        <rect x="20" y="455" width="760" height="25" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="473" fill="#888" fontSize="10">Audit Events Today:</text>
        <text x="200" y="473" fill="#fff" fontSize="10" fontWeight="600">1,247</text>
        
        <text x="320" y="473" fill="#888" fontSize="10">Data Retention:</text>
        <text x="450" y="473" fill="#fff" fontSize="10" fontWeight="600">7 Years</text>
        
        <text x="570" y="473" fill="#888" fontSize="10">Last Audit:</text>
        <text x="680" y="473" fill="#fff" fontSize="10" fontWeight="600">Oct 2024</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Audit Retention: 7 years • CCPA Compliant • Regular Security Assessments</text>
      </svg>
    </div>
  );
}