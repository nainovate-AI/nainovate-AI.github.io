export function CustomIntegrationMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Custom Integration Framework</text>
        
        {/* Create Integration Button */}
        <rect x="620" y="15" width="160" height="20" rx="4" fill="#4a9eff"/>
        <text x="645" y="30" fill="#fff" fontSize="11" fontWeight="600">+ New Integration</text>
        
        {/* Integration Builder */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">INTEGRATION BUILDER</text>
        
        {/* Configuration Form */}
        <rect x="20" y="95" width="370" height="365" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        
        {/* Form Fields */}
        <text x="35" y="120" fill="#888" fontSize="11" fontWeight="500">INTEGRATION NAME</text>
        <rect x="35" y="125" width="340" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="45" y="145" fill="#ccc" fontSize="11">Custom CRM Connector</text>
        
        <text x="35" y="180" fill="#888" fontSize="11" fontWeight="500">BASE URL</text>
        <rect x="35" y="185" width="340" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="45" y="205" fill="#ccc" fontSize="11">https://api.customcrm.com/v2</text>
        
        <text x="35" y="240" fill="#888" fontSize="11" fontWeight="500">AUTHENTICATION</text>
        <rect x="35" y="245" width="340" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="45" y="265" fill="#ccc" fontSize="11">OAuth 2.0</text>
        <path d="M360 258 L365 263 L355 263 Z" fill="#888"/>
        
        <text x="35" y="300" fill="#888" fontSize="11" fontWeight="500">API KEY</text>
        <rect x="35" y="305" width="340" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="45" y="325" fill="#666" fontSize="11">••••••••••••••••••••</text>
        
        <text x="35" y="360" fill="#888" fontSize="11" fontWeight="500">DATA MAPPING</text>
        <rect x="35" y="365" width="340" height="60" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
        <text x="45" y="383" fill="#4a9eff" fontSize="9" fontFamily="monospace">customer.name → account.full_name</text>
        <text x="45" y="397" fill="#4a9eff" fontSize="9" fontFamily="monospace">customer.email → account.email</text>
        <text x="45" y="411" fill="#4a9eff" fontSize="9" fontFamily="monospace">customer.phone → account.phone</text>
        
        {/* Test Connection Button */}
        <rect x="35" y="435" width="160" height="30" rx="6" fill="transparent" stroke="#666" strokeWidth="1"/>
        <text x="75" y="455" fill="#888" fontSize="11" fontWeight="600">Test Connection</text>
        
        {/* Save Button */}
        <rect x="215" y="435" width="160" height="30" rx="6" fill="#4a9eff"/>
        <text x="260" y="455" fill="#fff" fontSize="11" fontWeight="600">Save Integration</text>
        
        {/* Code Preview */}
        <rect x="410" y="95" width="370" height="365" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="425" y="120" fill="#888" fontSize="11" fontWeight="500">AUTO-GENERATED CODE</text>
        
        {/* Code Tabs */}
        <rect x="425" y="130" width="60" height="20" rx="4" fill="#4a9eff"/>
        <text x="440" y="145" fill="#fff" fontSize="9" fontWeight="600">Python</text>
        
        <rect x="495" y="130" width="80" height="20" rx="4" fill="transparent" stroke="#666" strokeWidth="1"/>
        <text x="510" y="145" fill="#888" fontSize="9" fontWeight="600">JavaScript</text>
        
        <rect x="585" y="130" width="60" height="20" rx="4" fill="transparent" stroke="#666" strokeWidth="1"/>
        <text x="600" y="145" fill="#888" fontSize="9" fontWeight="600">cURL</text>
        
        {/* Code Content */}
        <rect x="425" y="160" width="340" height="290" rx="4" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        
        <text x="440" y="180" fill="#c678dd" fontSize="9" fontFamily="monospace">import</text>
        <text x="475" y="180" fill="#e06c75" fontSize="9" fontFamily="monospace"> requests</text>
        
        <text x="440" y="200" fill="#e06c75" fontSize="9" fontFamily="monospace">url</text>
        <text x="465" y="200" fill="#abb2bf" fontSize="9" fontFamily="monospace"> = </text>
        <text x="480" y="200" fill="#98c379" fontSize="9" fontFamily="monospace">"https://api.customcrm.com/v2"</text>
        
        <text x="440" y="215" fill="#e06c75" fontSize="9" fontFamily="monospace">headers</text>
        <text x="485" y="215" fill="#abb2bf" fontSize="9" fontFamily="monospace">= {'{'}</text>
        
        <text x="455" y="230" fill="#98c379" fontSize="9" fontFamily="monospace">"Authorization"</text>
        <text x="555" y="230" fill="#abb2bf" fontSize="9" fontFamily="monospace">: </text>
        <text x="565" y="230" fill="#98c379" fontSize="9" fontFamily="monospace">"Bearer {'{'} token {'}'}"</text>
        <text x="665" y="230" fill="#abb2bf" fontSize="9" fontFamily="monospace">,</text>
        
        <text x="455" y="245" fill="#98c379" fontSize="9" fontFamily="monospace">"Content-Type"</text>
        <text x="545" y="245" fill="#abb2bf" fontSize="9" fontFamily="monospace">: </text>
        <text x="555" y="245" fill="#98c379" fontSize="9" fontFamily="monospace">"application/json"</text>
        
        <text x="440" y="260" fill="#abb2bf" fontSize="9" fontFamily="monospace">{"}"}</text>
        
        <text x="440" y="280" fill="#e06c75" fontSize="9" fontFamily="monospace">data</text>
        <text x="470" y="280" fill="#abb2bf" fontSize="9" fontFamily="monospace"> = {'{'}</text>
        
        <text x="455" y="295" fill="#98c379" fontSize="9" fontFamily="monospace">"account"</text>
        <text x="510" y="295" fill="#abb2bf" fontSize="9" fontFamily="monospace">: {'{'}</text>
        
        <text x="470" y="310" fill="#98c379" fontSize="9" fontFamily="monospace">"full_name"</text>
        <text x="540" y="310" fill="#abb2bf" fontSize="9" fontFamily="monospace">: </text>
        <text x="550" y="310" fill="#e06c75" fontSize="9" fontFamily="monospace">customer</text>
        <text x="605" y="310" fill="#abb2bf" fontSize="9" fontFamily="monospace">[</text>
        <text x="610" y="310" fill="#98c379" fontSize="9" fontFamily="monospace">"name"</text>
        <text x="645" y="310" fill="#abb2bf" fontSize="9" fontFamily="monospace">],</text>
        
        <text x="470" y="325" fill="#98c379" fontSize="9" fontFamily="monospace">"email"</text>
        <text x="515" y="325" fill="#abb2bf" fontSize="9" fontFamily="monospace">: </text>
        <text x="525" y="325" fill="#e06c75" fontSize="9" fontFamily="monospace">customer</text>
        <text x="580" y="325" fill="#abb2bf" fontSize="9" fontFamily="monospace">[</text>
        <text x="585" y="325" fill="#98c379" fontSize="9" fontFamily="monospace">"email"</text>
        <text x="625" y="325" fill="#abb2bf" fontSize="9" fontFamily="monospace">],</text>
        
        <text x="470" y="340" fill="#98c379" fontSize="9" fontFamily="monospace">"phone"</text>
        <text x="515" y="340" fill="#abb2bf" fontSize="9" fontFamily="monospace">: </text>
        <text x="525" y="340" fill="#e06c75" fontSize="9" fontFamily="monospace">customer</text>
        <text x="580" y="340" fill="#abb2bf" fontSize="9" fontFamily="monospace">[</text>
        <text x="585" y="340" fill="#98c379" fontSize="9" fontFamily="monospace">"phone"</text>
        <text x="625" y="340" fill="#abb2bf" fontSize="9" fontFamily="monospace">]</text>
        
        <text x="455" y="355" fill="#abb2bf" fontSize="9" fontFamily="monospace">{"}"}</text>
        
        <text x="440" y="370" fill="#abb2bf" fontSize="9" fontFamily="monospace">{"}"}</text>
        
        <text x="440" y="390" fill="#e06c75" fontSize="9" fontFamily="monospace">response</text>
        <text x="495" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace"> = </text>
        <text x="510" y="390" fill="#e06c75" fontSize="9" fontFamily="monospace">requests</text>
        <text x="565" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace">.</text>
        <text x="570" y="390" fill="#61afef" fontSize="9" fontFamily="monospace">post</text>
        <text x="600" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace">(</text>
        <text x="605" y="390" fill="#e06c75" fontSize="9" fontFamily="monospace">url</text>
        <text x="625" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace">, </text>
        <text x="635" y="390" fill="#e5c07b" fontSize="9" fontFamily="monospace">headers</text>
        <text x="685" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace">=</text>
        <text x="693" y="390" fill="#e06c75" fontSize="9" fontFamily="monospace">headers</text>
        <text x="738" y="390" fill="#abb2bf" fontSize="9" fontFamily="monospace">)</text>
        
        <text x="440" y="420" fill="#5c6370" fontSize="9" fontFamily="monospace"># Copy this code to your application</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">SDK Support: Python, JavaScript, Java • Webhook Support • Rate Limiting: Configurable</text>
      </svg>
    </div>
  );
}