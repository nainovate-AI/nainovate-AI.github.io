export function IntelligentDataProcessingMockup() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border border-fg-strong/10 rounded-lg overflow-hidden shadow-2xl">
      <svg viewBox="0 0 800 500" className="w-full h-full">
        {/* Background */}
        <rect width="800" height="500" fill="#0a0a0a"/>
        
        {/* Header Bar */}
        <rect width="800" height="50" fill="#111"/>
        <text x="20" y="32" fill="#fff" fontSize="16" fontWeight="600">Intelligent Data Processing</text>
        
        {/* Pipeline Status */}
        <rect x="600" y="15" width="180" height="20" rx="10" fill="#4ade80" fillOpacity="0.2"/>
        <circle cx="615" cy="25" r="4" fill="#4ade80"/>
        <text x="625" y="29" fill="#4ade80" fontSize="11" fontWeight="600">Pipeline Active</text>
        
        {/* Processing Pipeline Visualization */}
        <text x="20" y="80" fill="#888" fontSize="12" fontWeight="500">RAG PIPELINE: Contract Analysis</text>
        
        {/* Stage 1: Document Ingestion */}
        <rect x="40" y="100" width="160" height="90" rx="8" fill="#0f0f0f" stroke="#4a9eff" strokeWidth="2"/>
        <text x="55" y="125" fill="#4a9eff" fontSize="11" fontWeight="600">1. INGESTION</text>
        <text x="55" y="145" fill="#ccc" fontSize="10">
          <tspan>• 247 documents</tspan>
          <tspan x="55" dy="14">• PDF, DOCX, TXT</tspan>
          <tspan x="55" dy="14">• 12.4 MB total</tspan>
        </text>
        <circle cx="120" cy="155" r="15" fill="#4ade80" fillOpacity="0.2"/>
        <text x="113" y="161" fill="#4ade80" fontSize="11" fontWeight="700">✓</text>
        
        {/* Arrow 1 */}
        <path d="M 200 145 L 230 145" stroke="#4a9eff" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#4a9eff" />
          </marker>
        </defs>
        
        {/* Stage 2: Text Extraction */}
        <rect x="230" y="100" width="160" height="90" rx="8" fill="#0f0f0f" stroke="#a855f7" strokeWidth="2"/>
        <text x="245" y="125" fill="#a855f7" fontSize="11" fontWeight="600">2. EXTRACTION</text>
        <text x="245" y="145" fill="#ccc" fontSize="10">
          <tspan>• OCR processing</tspan>
          <tspan x="245" dy="14">• Layout analysis</tspan>
          <tspan x="245" dy="14">• Metadata extraction</tspan>
        </text>
        <circle cx="310" cy="155" r="15" fill="#4ade80" fillOpacity="0.2"/>
        <text x="303" y="161" fill="#4ade80" fontSize="11" fontWeight="700">✓</text>
        
        {/* Arrow 2 */}
        <path d="M 390 145 L 420 145" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
        <defs>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
          </marker>
        </defs>
        
        {/* Stage 3: Chunking */}
        <rect x="420" y="100" width="160" height="90" rx="8" fill="#0f0f0f" stroke="#10b981" strokeWidth="2"/>
        <text x="435" y="125" fill="#10b981" fontSize="11" fontWeight="600">3. CHUNKING</text>
        <text x="435" y="145" fill="#ccc" fontSize="10">
          <tspan>• Smart segmentation</tspan>
          <tspan x="435" dy="14">• 512 token chunks</tspan>
          <tspan x="435" dy="14">• Context preservation</tspan>
        </text>
        <circle cx="500" cy="155" r="15" fill="#fbbf24" fillOpacity="0.2"/>
        <text x="494" y="161" fill="#fbbf24" fontSize="11" fontWeight="700">⟳</text>
        
        {/* Arrow 3 */}
        <path d="M 580 145 L 610 145" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead3)"/>
        <defs>
          <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
        </defs>
        
        {/* Stage 4: Embedding */}
        <rect x="610" y="100" width="160" height="90" rx="8" fill="#0f0f0f" stroke="#ef4444" strokeWidth="2"/>
        <text x="625" y="125" fill="#ef4444" fontSize="11" fontWeight="600">4. EMBEDDING</text>
        <text x="625" y="145" fill="#ccc" fontSize="10">
          <tspan>• Vector generation</tspan>
          <tspan x="625" dy="14">• ada-002 model</tspan>
          <tspan x="625" dy="14">• 1536 dimensions</tspan>
        </text>
        <circle cx="690" cy="155" r="15" fill="#fbbf24" fillOpacity="0.2"/>
        <text x="684" y="161" fill="#fbbf24" fontSize="11" fontWeight="700">⟳</text>
        
        {/* Processing Stats */}
        <text x="20" y="230" fill="#888" fontSize="12" fontWeight="500">PROCESSING STATISTICS</text>
        
        <rect x="20" y="245" width="360" height="110" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="35" y="270" fill="#888" fontSize="10" fontWeight="500">DOCUMENTS PROCESSED</text>
        <rect x="35" y="280" width="330" height="8" rx="4" fill="#222"/>
        <rect x="35" y="280" width="280" height="8" rx="4" fill="#4a9eff"/>
        <text x="35" y="305" fill="#4a9eff" fontSize="12" fontWeight="700">247 / 247</text>
        <text x="110" y="305" fill="#888" fontSize="10">(100% complete)</text>
        
        <text x="35" y="330" fill="#888" fontSize="10" fontWeight="500">CHUNKS CREATED</text>
        <text x="35" y="348" fill="#fff" fontSize="16" fontWeight="700">12,847</text>
        
        {/* Quality Metrics */}
        <rect x="400" y="245" width="380" height="110" rx="8" fill="#0f0f0f" stroke="#222" strokeWidth="1"/>
        <text x="415" y="270" fill="#888" fontSize="10" fontWeight="500">QUALITY METRICS</text>
        
        <text x="415" y="293" fill="#888" fontSize="9">Extraction Accuracy</text>
        <text x="550" y="293" fill="#4ade80" fontSize="11" fontWeight="600">98.4%</text>
        
        <text x="415" y="313" fill="#888" fontSize="9">Avg Chunk Quality</text>
        <text x="550" y="313" fill="#4ade80" fontSize="11" fontWeight="600">94.2%</text>
        
        <text x="415" y="333" fill="#888" fontSize="9">Processing Speed</text>
        <text x="550" y="333" fill="#4a9eff" fontSize="11" fontWeight="600">2.3 docs/sec</text>
        
        <text x="640" y="293" fill="#888" fontSize="9">Token Usage</text>
        <text x="740" y="293" fill="#888" fontSize="11" fontWeight="600">1.2M</text>
        
        <text x="640" y="313" fill="#888" fontSize="9">Storage Used</text>
        <text x="740" y="313" fill="#888" fontSize="11" fontWeight="600">2.4 GB</text>
        
        <text x="640" y="333" fill="#888" fontSize="9">API Cost</text>
        <text x="740" y="333" fill="#888" fontSize="11" fontWeight="600">$3.47</text>
        
        {/* Recent Activity Log */}
        <text x="20" y="390" fill="#888" fontSize="12" fontWeight="500">RECENT ACTIVITY</text>
        
        <rect x="20" y="400" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="412" r="3" fill="#4ade80"/>
        <text x="45" y="415" fill="#ccc" fontSize="9">12:45:23 - Completed embedding for Q4_Contract_Final.pdf</text>
        
        <rect x="20" y="425" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="437" r="3" fill="#4ade80"/>
        <text x="45" y="440" fill="#ccc" fontSize="9">12:45:18 - Extracted 247 chunks from vendor_agreement.docx</text>
        
        <rect x="20" y="450" width="760" height="25" fill="#0a0a0a" stroke="#222" strokeWidth="1"/>
        <circle cx="35" cy="462" r="3" fill="#4a9eff"/>
        <text x="45" y="465" fill="#ccc" fontSize="9">12:45:12 - Started processing batch: legal_documents_2024</text>
        
        {/* Bottom Bar */}
        <rect y="480" width="800" height="20" fill="#111"/>
        <text x="20" y="494" fill="#666" fontSize="9">Vector Database: Pinecone • Embedding Model: text-embedding-ada-002</text>
      </svg>
    </div>
  );
}