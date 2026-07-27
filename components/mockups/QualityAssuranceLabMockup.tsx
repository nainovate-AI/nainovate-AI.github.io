export function QualityAssuranceLabMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Quality Assurance Lab</text>
        
        {/* Run Tests Button */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4ade80"/>
        <text x="675" y="30" fill="#000" fontSize="11" fontWeight="600">▶ Run Tests</text>
        
        {/* Test Suite Overview */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">TEST SUITE: Document Analysis Agent</text>
        
        {/* Metrics Cards */}
        <rect x="20" y="95" width="180" height="80" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="115" fill="#888" fontSize="10">ACCURACY SCORE</text>
        <text x="35" y="145" fill="#4ade80" fontSize="28" fontWeight="700">94.2%</text>
        <text x="35" y="165" fill="#4ade80" fontSize="9">+2.3% from baseline</text>
        
        <rect x="220" y="95" width="180" height="80" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="235" y="115" fill="#888" fontSize="10">RESPONSE TIME</text>
        <text x="235" y="145" fill="#4a9eff" fontSize="28" fontWeight="700">1.8s</text>
        <text x="235" y="165" fill="#4a9eff" fontSize="9">-0.3s improvement</text>
        
        <rect x="420" y="95" width="180" height="80" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="435" y="115" fill="#888" fontSize="10">HALLUCINATION</text>
        <text x="435" y="145" fill="#fbbf24" fontSize="28" fontWeight="700">3.1%</text>
        <text x="435" y="165" fill="#fbbf24" fontSize="9">Needs attention</text>
        
        <rect x="620" y="95" width="160" height="80" rx="8" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="635" y="115" fill="#888" fontSize="10">TESTS PASSED</text>
        <text x="635" y="145" fill="#4ade80" fontSize="28" fontWeight="700">47/50</text>
        <text x="635" y="165" fill="#888" fontSize="9">94% pass rate</text>
        
        {/* Test Results Table */}
        <text x="20" y="210" fill="#888" fontSize="12" fontWeight="500">RECENT TEST RESULTS</text>
        
        {/* Table Header */}
        <rect x="20" y="220" width="760" height="30" fill="#111"/>
        <text x="35" y="240" fill="#888" fontSize="10" fontWeight="600">TEST CASE</text>
        <text x="350" y="240" fill="#888" fontSize="10" fontWeight="600">EXPECTED</text>
        <text x="550" y="240" fill="#888" fontSize="10" fontWeight="600">ACTUAL</text>
        <text x="720" y="240" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* Test Row 1 - Pass */}
        <rect x="20" y="250" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="272" fill="#ccc" fontSize="10">Extract contract date</text>
        <text x="350" y="272" fill="#888" fontSize="9">2024-12-15</text>
        <text x="550" y="272" fill="#888" fontSize="9">2024-12-15</text>
        <circle cx="735" cy="268" r="6" fill="#4ade80"/>
        <text x="750" y="272" fill="#4ade80" fontSize="9">✓</text>
        
        {/* Test Row 2 - Pass */}
        <rect x="20" y="285" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="307" fill="#ccc" fontSize="10">Identify payment terms</text>
        <text x="350" y="307" fill="#888" fontSize="9">Net 30</text>
        <text x="550" y="307" fill="#888" fontSize="9">Net 30</text>
        <circle cx="735" cy="303" r="6" fill="#4ade80"/>
        <text x="750" y="307" fill="#4ade80" fontSize="9">✓</text>
        
        {/* Test Row 3 - Fail */}
        <rect x="20" y="320" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="342" fill="#ccc" fontSize="10">Extract total amount</text>
        <text x="350" y="342" fill="#888" fontSize="9">$150,000</text>
        <text x="550" y="342" fill="#ef4444" fontSize="9">$145,000</text>
        <circle cx="735" cy="338" r="6" fill="#ef4444"/>
        <text x="750" y="342" fill="#ef4444" fontSize="9">✗</text>
        
        {/* Test Row 4 - Pass */}
        <rect x="20" y="355" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="377" fill="#ccc" fontSize="10">Detect risk factors</text>
        <text x="350" y="377" fill="#888" fontSize="9">2 high-risk clauses</text>
        <text x="550" y="377" fill="#888" fontSize="9">2 high-risk clauses</text>
        <circle cx="735" cy="373" r="6" fill="#4ade80"/>
        <text x="750" y="377" fill="#4ade80" fontSize="9">✓</text>
        
        {/* Test Row 5 - Warning */}
        <rect x="20" y="390" width="760" height="35" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="412" fill="#ccc" fontSize="10">Response confidence</text>
        <text x="350" y="412" fill="#888" fontSize="9">&gt;90%</text>
        <text x="550" y="412" fill="#fbbf24" fontSize="9">87%</text>
        <circle cx="735" cy="408" r="6" fill="#fbbf24"/>
        <text x="750" y="412" fill="#fbbf24" fontSize="9">!</text>
        
        {/* Bottom Action Bar */}
        <rect y="450" width="800" height="50" fill="#111"/>
        <text x="20" y="478" fill="#888" fontSize="10">Last run: 2 minutes ago</text>
        <rect x="650" y="463" width="130" height="25" rx="4" fill="transparent" stroke="#666" strokeWidth="1"/>
        <text x="685" y="480" fill="#888" fontSize="11">Export Results</text>
      </svg>
    </div>
  );
}