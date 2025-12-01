'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const WELCOME_MESSAGE = `Hello! I'm your Building Permits Assistant. I can help you with:

- Check permit application status
- Document requirements
- Processing timelines
- Fee calculations
- Compliance guidelines

How can I assist you today?`;

const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('status') || msg.includes('track') || msg.includes('application')) {
        return `**Permit Application Status**

📋 **Application ID:** BP-2025-04892
📍 **Location:** Commercial District, Block 7
📅 **Submitted:** November 15, 2025

**Current Status:** Under Technical Review ⏳

| Stage | Status |
|-------|--------|
| Document Verification | ✅ Complete |
| Zoning Compliance | ✅ Complete |
| Technical Review | 🔄 In Progress |
| Final Approval | ⏸️ Pending |

**Progress:** 65% complete
**Expected Completion:** December 5, 2025`;
    }

    if (msg.includes('document') || msg.includes('require') || msg.includes('need') || msg.includes('submit')) {
        return `**Required Documents for Building Permit**

**Essential Documents:**
✓ Completed application form
✓ Site plan (1:500 scale)
✓ Architectural drawings
✓ Structural engineering plans
✓ Fire safety plan
✓ Environmental assessment

**Supporting Documents:**
✓ Land ownership proof
✓ NOC from municipality
✓ Contractor license
✓ Insurance certificate

**Format:** PDF (max 10MB per file)`;
    }

    if (msg.includes('long') || msg.includes('time') || msg.includes('timeline') || msg.includes('days')) {
        return `**Processing Timeline**

| Permit Type | Duration |
|-------------|----------|
| Residential | 15-20 business days |
| Commercial | 25-35 business days |
| Industrial | 35-45 business days |
| Renovation | 10-15 business days |

**Current Average:** 18 days

**Express Processing Available:**
- Additional fee: $500
- Processing time: 7-10 days`;
    }

    if (msg.includes('fee') || msg.includes('cost') || msg.includes('pay') || msg.includes('price')) {
        return `**Permit Fee Structure**

| Building Type | Fee per sqm |
|---------------|-------------|
| Residential | $8 |
| Commercial | $12 |
| Industrial | $15 |

**Example (500 sqm Commercial):**
- Base fee: $6,000
- Inspection: $800
- Processing: $200
- **Total: $7,000**`;
    }

    if (msg.includes('compliance') || msg.includes('regulation') || msg.includes('code') || msg.includes('safety')) {
        return `**Compliance Requirements**

**Structural:**
✓ Load-bearing calculations
✓ Seismic design standards
✓ Foundation specifications

**Fire Safety:**
✓ Fire exits every 30m
✓ Fire-resistant materials
✓ Sprinkler systems (buildings >15m)

**Accessibility:**
✓ Ramps (1:12 slope)
✓ Accessible parking (2%)
✓ Elevator (>4 floors)`;
    }

    return `I can help you with:

- **Status** - "Check my application status"
- **Documents** - "What documents do I need?"
- **Timeline** - "How long does it take?"
- **Fees** - "What are the permit fees?"
- **Compliance** - "What are the requirements?"

What would you like to know?`;
};

export default function PermitsChatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: WELCOME_MESSAGE }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getResponse(userMessage);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const suggestions = [
        "Check application status",
        "What documents do I need?",
        "How long does it take?",
        "What are the fees?"
    ];

    return (
        <div className="h-full flex flex-col overflow-hidden">

            {/* Scrollable Messages Area - MIDDLE */}
            <div className="flex-1 overflow-y-auto p-6 pb-[180px]">
                <div className="max-w-3xl mx-auto space-y-6">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-5 py-4 ${msg.role === 'user'
                                        ? 'bg-white text-black'
                                        : 'bg-white/5 border border-white/10'
                                    }`}
                            >
                                <div className="text-sm whitespace-pre-line leading-relaxed">
                                    {msg.content}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Fixed Bottom Area - Suggestions + Input */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black px-6 py-4">
                <div className="max-w-3xl mx-auto">

                    {/* Suggestions */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {suggestions.map((suggestion, idx) => (
                            <button
                                key={idx}
                                onClick={() => setInput(suggestion)}
                                className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-full px-4 py-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about building permits..."
                            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-[10px] text-gray-600 text-center mt-2">
                        This is a demo. Responses are simulated.
                    </p>
                </div>
            </div>
        </div>
    );
}