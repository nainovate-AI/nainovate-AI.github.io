export function TestingDebuggingMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Testing & Debugging Console</text>
        
        {/* Run Test Button */}
        <rect x="650" y="15" width="130" height="20" rx="4" fill="#4ade80"/>
        <text x="680" y="30" fill="#000" fontSize="11" fontWeight="600">▶ Run Tests</text>
        
        {/* Test Results Summary */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">TEST EXECUTION SUMMARY</text>
        
        {/* Summary Cards */}
        <rect x="20" y="90" width="180" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="110" fill="#888" fontSize="10">TESTS PASSED</text>
        <text x="35" y="135" fill="#4ade80" fontSize="24" fontWeight="700">47</text>
        <text x="80" y="135" fill="#666" fontSize="14">/ 50</text>
        
        <rect x="210" y="90" width="180" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="225" y="110" fill="#888" fontSize="10">FAILED</text>
        <text x="225" y="135" fill="#ef4444" fontSize="24" fontWeight="700">3</text>
        
        <rect x="400" y="90" width="180" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="415" y="110" fill="#888" fontSize="10">DURATION</text>
        <text x="415" y="135" fill="#4a9eff" fontSize="24" fontWeight="700">12.4s</text>
        
        <rect x="590" y="90" width="190" height="70" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="605" y="110" fill="#888" fontSize="10">SUCCESS RATE</text>
        <text x="605" y="135" fill="#4ade80" fontSize="24" fontWeight="700">94%</text>
        
        {/* Test Cases */}
        <text x="20" y="190" fill="#888" fontSize="12" fontWeight="500">TEST CASES</text>
        
        {/* Test Table Header */}
        <rect x="20" y="200" width="760" height="25" fill="#111"/>
        <text x="35" y="218" fill="#888" fontSize="10" fontWeight="600">TEST NAME</text>
        <text x="350" y="218" fill="#888" fontSize="10" fontWeight="600">DURATION</text>
        <text x="480" y="218" fill="#888" fontSize="10" fontWeight="600">ASSERTIONS</text>
        <text x="650" y="218" fill="#888" fontSize="10" fontWeight="600">STATUS</text>
        
        {/* Test Row 1 - Pass */}
        <rect x="20" y="225" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="245" fill="#ccc" fontSize="10">test_document_extraction()</text>
        <text x="350" y="245" fill="#888" fontSize="9">0.8s</text>
        <text x="480" y="245" fill="#888" fontSize="9">5 / 5 passed</text>
        <circle cx="665" cy="240" r="6" fill="#4ade80"/>
        <text x="677" y="245" fill="#4ade80" fontSize="9">PASS</text>
        
        {/* Test Row 2 - Pass */}
        <rect x="20" y="255" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="275" fill="#ccc" fontSize="10">test_payment_terms_parser()</text>
        <text x="350" y="275" fill="#888" fontSize="9">1.2s</text>
        <text x="480" y="275" fill="#888" fontSize="9">8 / 8 passed</text>
        <circle cx="665" cy="270" r="6" fill="#4ade80"/>
        <text x="677" y="275" fill="#4ade80" fontSize="9">PASS</text>
        
        {/* Test Row 3 - Fail */}
        <rect x="20" y="285" width="760" height="30" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <text x="35" y="305" fill="#ccc" fontSize="10">test_contract_validation()</text>
        <text x="350" y="305" fill="#888" fontSize="9">0.5s</text>
        <text x="480" y="305" fill="#ef4444" fontSize="9">2 / 3 passed</text>
        <circle cx="665" cy="300" r="6" fill="#ef4444"/>
        <text x="677" y="305" fill="#ef4444" fontSize="9">FAIL</text>
        
        {/* Debug Console */}
        <text x="20" y="345" fill="#888" fontSize="12" fontWeight="500">DEBUG CONSOLE</text>
        
        <rect x="20" y="355" width="760" height="105" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        
        {/* Console Log */}
        <text x="35" y="375" fill="#4ade80" fontSize="9" fontFamily="monospace">
          <tspan>[12:45:18] INFO: Starting test suite...</tspan>
        </text>
        <text x="35" y="390" fill="#4a9eff" fontSize="9" fontFamily="monospace">
          <tspan>[12:45:19] DEBUG: Loading test data from fixtures/</tspan>
        </text>
        <text x="35" y="405" fill="#4ade80" fontSize="9" fontFamily="monospace">
          <tspan>[12:45:20] PASS: test_document_extraction</tspan>
        </text>
        <text x="35" y="420" fill="#4ade80" fontSize="9" fontFamily="monospace">
          <tspan>[12:45:21] PASS: test_payment_terms_parser</tspan>
        </text>
        <text x="35" y="435" fill="#ef4444" fontSize="9" fontFamily="monospace">
          <tspan>[12:45:22] FAIL: test_contract_validation</tspan>
        </text>
        <text x="35" y="450" fill="#fbbf24" fontSize="9" fontFamily="monospace">
          <tspan>  AssertionError: Expected &apos;Net 30&apos; but got &apos;Net 45&apos;</tspan>
        </text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Coverage: 87% • Last run: 2 minutes ago • View detailed report</text>
      </svg>
    </div>
  );
}