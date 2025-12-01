export function SDKsMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Developer SDKs & APIs</text>
        
        {/* Language Tabs */}
        <rect x="620" y="15" width="60" height="20" rx="4" fill="#4a9eff"/>
        <text x="637" y="30" fill="#fff" fontSize="10" fontWeight="600">Python</text>
        
        <rect x="690" y="15" width="90" height="20" rx="4" fill="transparent" stroke="#666" strokeWidth="1"/>
        <text x="707" y="30" fill="#888" fontSize="10" fontWeight="600">JavaScript</text>
        
        {/* SDK Installation */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">INSTALLATION</text>
        
        <rect x="20" y="90" width="760" height="50" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        <text x="35" y="110" fill="#666" fontSize="9" fontFamily="monospace">$</text>
        <text x="50" y="110" fill="#4a9eff" fontSize="10" fontFamily="monospace">pip install nainovate-sdk</text>
        <text x="35" y="128" fill="#888" fontSize="9">Install the Python SDK via pip</text>
        
        {/* Code Example */}
        <text x="20" y="170" fill="#888" fontSize="12" fontWeight="500">QUICK START EXAMPLE</text>
        
        <rect x="20" y="180" width="760" height="280" rx="6" fill="#0f0f0f" stroke="#333" strokeWidth="1"/>
        
        {/* Line numbers */}
        <text x="35" y="205" fill="#444" fontSize="10" fontFamily="monospace">1</text>
        <text x="35" y="220" fill="#444" fontSize="10" fontFamily="monospace">2</text>
        <text x="35" y="235" fill="#444" fontSize="10" fontFamily="monospace">3</text>
        <text x="35" y="250" fill="#444" fontSize="10" fontFamily="monospace">4</text>
        <text x="35" y="265" fill="#444" fontSize="10" fontFamily="monospace">5</text>
        <text x="35" y="280" fill="#444" fontSize="10" fontFamily="monospace">6</text>
        <text x="35" y="295" fill="#444" fontSize="10" fontFamily="monospace">7</text>
        <text x="35" y="310" fill="#444" fontSize="10" fontFamily="monospace">8</text>
        <text x="35" y="325" fill="#444" fontSize="10" fontFamily="monospace">9</text>
        <text x="35" y="340" fill="#444" fontSize="10" fontFamily="monospace">10</text>
        <text x="35" y="355" fill="#444" fontSize="10" fontFamily="monospace">11</text>
        <text x="35" y="370" fill="#444" fontSize="10" fontFamily="monospace">12</text>
        <text x="35" y="385" fill="#444" fontSize="10" fontFamily="monospace">13</text>
        <text x="35" y="400" fill="#444" fontSize="10" fontFamily="monospace">14</text>
        <text x="35" y="415" fill="#444" fontSize="10" fontFamily="monospace">15</text>
        <text x="35" y="430" fill="#444" fontSize="10" fontFamily="monospace">16</text>
        <text x="35" y="445" fill="#444" fontSize="10" fontFamily="monospace">17</text>
        
        {/* Code content */}
        <text x="55" y="205" fill="#c678dd" fontSize="10" fontFamily="monospace">from</text>
        <text x="85" y="205" fill="#e06c75" fontSize="10" fontFamily="monospace"> nainovate </text>
        <text x="155" y="205" fill="#c678dd" fontSize="10" fontFamily="monospace">import</text>
        <text x="195" y="205" fill="#61afef" fontSize="10" fontFamily="monospace"> Agent</text>
        
        <text x="55" y="235" fill="#5c6370" fontSize="10" fontFamily="monospace"># Initialize the AI agent</text>
        
        <text x="55" y="250" fill="#e06c75" fontSize="10" fontFamily="monospace">agent</text>
        <text x="95" y="250" fill="#abb2bf" fontSize="10" fontFamily="monospace"> = </text>
        <text x="115" y="250" fill="#61afef" fontSize="10" fontFamily="monospace">Agent</text>
        <text x="155" y="250" fill="#abb2bf" fontSize="10" fontFamily="monospace">(</text>
        
        <text x="75" y="265" fill="#e5c07b" fontSize="10" fontFamily="monospace">api_key</text>
        <text x="125" y="265" fill="#abb2bf" fontSize="10" fontFamily="monospace">=</text>
        <text x="140" y="265" fill="#98c379" fontSize="10" fontFamily="monospace">&quot;your-api-key&quot;</text>
        <text x="245" y="265" fill="#abb2bf" fontSize="10" fontFamily="monospace">,</text>
        
        <text x="75" y="280" fill="#e5c07b" fontSize="10" fontFamily="monospace">model</text>
        <text x="115" y="280" fill="#abb2bf" fontSize="10" fontFamily="monospace">=</text>
        <text x="130" y="280" fill="#98c379" fontSize="10" fontFamily="monospace">&quot;gpt-4&quot;</text>
        
        <text x="55" y="295" fill="#abb2bf" fontSize="10" fontFamily="monospace">)</text>
        
        <text x="55" y="325" fill="#5c6370" fontSize="10" fontFamily="monospace"># Process a document</text>
        
        <text x="55" y="340" fill="#e06c75" fontSize="10" fontFamily="monospace">result</text>
        <text x="95" y="340" fill="#abb2bf" fontSize="10" fontFamily="monospace"> = </text>
        <text x="115" y="340" fill="#e06c75" fontSize="10" fontFamily="monospace">agent</text>
        <text x="155" y="340" fill="#abb2bf" fontSize="10" fontFamily="monospace">.</text>
        <text x="163" y="340" fill="#61afef" fontSize="10" fontFamily="monospace">process</text>
        <text x="213" y="340" fill="#abb2bf" fontSize="10" fontFamily="monospace">(</text>
        
        <text x="75" y="355" fill="#e5c07b" fontSize="10" fontFamily="monospace">document</text>
        <text x="135" y="355" fill="#abb2bf" fontSize="10" fontFamily="monospace">=</text>
        <text x="150" y="355" fill="#98c379" fontSize="10" fontFamily="monospace">&quot;contract.pdf&quot;</text>
        <text x="265" y="355" fill="#abb2bf" fontSize="10" fontFamily="monospace">,</text>
        
        <text x="75" y="370" fill="#e5c07b" fontSize="10" fontFamily="monospace">task</text>
        <text x="110" y="370" fill="#abb2bf" fontSize="10" fontFamily="monospace">=</text>
        <text x="125" y="370" fill="#98c379" fontSize="10" fontFamily="monospace">&quot;extract_payment_terms&quot;</text>
        
        <text x="55" y="385" fill="#abb2bf" fontSize="10" fontFamily="monospace">)</text>
        
        <text x="55" y="415" fill="#5c6370" fontSize="10" fontFamily="monospace"># Print results</text>
        
        <text x="55" y="430" fill="#c678dd" fontSize="10" fontFamily="monospace">print</text>
        <text x="90" y="430" fill="#abb2bf" fontSize="10" fontFamily="monospace">(</text>
        <text x="98" y="430" fill="#e06c75" fontSize="10" fontFamily="monospace">result</text>
        <text x="138" y="430" fill="#abb2bf" fontSize="10" fontFamily="monospace">.</text>
        <text x="146" y="430" fill="#e5c07b" fontSize="10" fontFamily="monospace">payment_terms</text>
        <text x="238" y="430" fill="#abb2bf" fontSize="10" fontFamily="monospace">)</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Documentation: docs.nainovate.ai • Examples: github.com/nainovate/examples</text>
      </svg>
    </div>
  );
}