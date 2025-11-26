export function EnterpriseSearchMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="60" fill="#111"/>
        <text x="20" y="38" fill="#fff" fontSize="16" fontWeight="600">Enterprise Search</text>
        
        {/* Search Bar */}
        <rect x="20" y="80" width="760" height="50" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <svg x="35" y="95" width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <text x="65" y="110" fill="#888" fontSize="14">Find contracts related to payment terms and deliverables...</text>
        
        {/* Filters Bar */}
        <rect x="20" y="145" width="760" height="35" fill="#111"/>
        <text x="35" y="166" fill="#888" fontSize="11">FILTERS:</text>
        
        {/* Filter Pills */}
        <rect x="100" y="153" width="90" height="20" rx="10" fill="#4a9eff" fillOpacity="0.2" stroke="#4a9eff" strokeWidth="1"/>
        <text x="110" y="167" fill="#4a9eff" fontSize="10">Documents</text>
        
        <rect x="200" y="153" width="80" height="20" rx="10" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <text x="210" y="167" fill="#a855f7" fontSize="10">Contracts</text>
        
        <rect x="290" y="153" width="90" height="20" rx="10" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1"/>
        <text x="300" y="167" fill="#10b981" fontSize="10">Last 30 days</text>
        
        {/* Results Header */}
        <text x="20" y="210" fill="#888" fontSize="11">FOUND 247 RESULTS IN 0.3 SECONDS</text>
        
        {/* Search Result 1 */}
        <rect x="20" y="220" width="760" height="70" rx="6" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="240" fill="#4a9eff" fontSize="13" fontWeight="600">Q4 2024 Service Agreement - Vendor A.pdf</text>
        <text x="35" y="258" fill="#ccc" fontSize="10">
          <tspan>...payment terms include Net 30 with deliverables due by end of Q4 2024.</tspan>
          <tspan x="35" dy="14">Monthly invoicing with detailed breakdown required. All deliverables subject to...</tspan>
        </text>
        <rect x="700" y="235" width="60" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="712" y="247" fill="#4ade80" fontSize="9" fontWeight="600">98% Match</text>
        
        {/* Search Result 2 */}
        <rect x="20" y="300" width="760" height="70" rx="6" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="320" fill="#4a9eff" fontSize="13" fontWeight="600">Master Services Agreement - 2024.docx</text>
        <text x="35" y="338" fill="#ccc" fontSize="10">
          <tspan>...defines payment schedules and deliverable milestones. Section 3.2 outlines specific</tspan>
          <tspan x="35" dy="14">terms for project phases including acceptance criteria and payment triggers...</tspan>
        </text>
        <rect x="700" y="315" width="60" height="18" rx="3" fill="#4ade80" fillOpacity="0.2"/>
        <text x="712" y="327" fill="#4ade80" fontSize="9" fontWeight="600">95% Match</text>
        
        {/* Search Result 3 */}
        <rect x="20" y="380" width="760" height="70" rx="6" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="400" fill="#4a9eff" fontSize="13" fontWeight="600">Payment Terms Amendment - Nov 2024.pdf</text>
        <text x="35" y="418" fill="#ccc" fontSize="10">
          <tspan>Amendment to original agreement modifying payment terms and extending deliverable</tspan>
          <tspan x="35" dy="14">deadlines. New payment structure includes milestone-based releases with...</tspan>
        </text>
        <rect x="700" y="395" width="60" height="18" rx="3" fill="#fbbf24" fillOpacity="0.2"/>
        <text x="712" y="407" fill="#fbbf24" fontSize="9" fontWeight="600">87% Match</text>
        
        {/* Bottom Stats Bar */}
        <rect y="470" width="800" height="30" fill="#111"/>
        <text x="20" y="490" fill="#666" fontSize="10">Sources: SharePoint, Google Drive, Confluence, Salesforce</text>
        <text x="550" y="490" fill="#666" fontSize="10">Indexed: 2.4M documents</text>
      </svg>
    </div>
  );
}