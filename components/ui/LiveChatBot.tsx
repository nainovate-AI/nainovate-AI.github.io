'use client';

import { useState, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  type: 'hr' | 'boq' | 'document' | 'search' | 'customer' | 'citizen' | 'multichannel' | 'quality' | 'analytics' | 'compliance' | 'monitoring';
  autoPlay?: boolean;
}

export default function LiveChatBot({ type, autoPlay = false }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Bot configurations for ALL types
  const botConfig = {
    // Operations bots
    hr: {
      name: 'HR Assistant',
      avatar: '👤',
      welcome: "I'm your HR Assistant. I can analyze candidates, schedule interviews, and help with onboarding.",
      examples: ["What's the match percentage for candidate C-1247 with job J-589?"]
    },
    boq: {
      name: 'BOQ Agent',
      avatar: '📋',
      welcome: "I help generate Bills of Quantities from drawings and specifications.",
      examples: ["Give me detailed description for the occupancy sensor"]
    },
    document: {
      name: 'Document Processor',
      avatar: '📄',
      welcome: "I can process invoices, contracts, and extract key information from any document.",
      examples: ["Process invoice INV-2024-1247"]
    },
    search: {
      name: 'Enterprise Search',
      avatar: '🔍',
      welcome: "Search across all your systems using natural language.",
      examples: ["Find Q3 revenue projections for APAC"]
    },
    // Engagement bots
    customer: {
      name: 'Customer Service',
      avatar: '💬',
      welcome: "Hi! I'm here to help with your orders, accounts, and questions. How can I assist you today?",
      examples: ["Track my order #ORD-2024-5891"]
    },
    citizen: {
      name: 'Citizen Portal',
      avatar: '🏛️',
      welcome: "Welcome to the Citizen Portal. I can help with permits, applications, and city services.",
      examples: ["Check status of building permit BP-2024-1247"]
    },
    multichannel: {
      name: 'Multi-Channel Support',
      avatar: '📱',
      welcome: "I manage your conversations across all channels - chat, email, SMS, and social media.",
      examples: ["Show conversation history for customer C-5891"]
    },
    quality: {
      name: 'Quality Assurance',
      avatar: '✓',
      welcome: "I analyze service interactions and ensure quality standards are met.",
      examples: ["Analyze last 50 support calls"]
    },
    // Intelligence bots
    analytics: {
      name: 'Analytics Dashboard',
      avatar: '📊',
      welcome: "Ask me anything about your data. I'll provide insights and visualizations.",
      examples: ["Show Q4 2024 sales performance by region"]
    },
    compliance: {
      name: 'Compliance Monitor',
      avatar: '⚖️',
      welcome: "I monitor compliance 24/7 and flag violations instantly.",
      examples: ["Check compliance status for manufacturing line 3"]
    },
    monitoring: {
      name: 'Process Monitor',
      avatar: '📈',
      welcome: "I monitor all processes in real-time and predict issues before they occur.",
      examples: ["Show production efficiency for last 24 hours"]
    }
  };

  const config = botConfig[type];

  // Initialize with welcome message
  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: config.welcome,
      timestamp: new Date()
    }]);
  }, [type]);

  // Auto-play demo
  useEffect(() => {
    if (autoPlay && messages.length === 1) {
      const timer = setTimeout(() => {
        const firstExample = config.examples[0];
        const userMessage: Message = {
          role: 'user',
          content: firstExample,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
          const response = getResponse(firstExample);
          const assistantMessage: Message = {
            role: 'assistant',
            content: response,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, assistantMessage]);
          setIsTyping(false);

          setTimeout(() => {
            setMessages([{
              role: 'assistant',
              content: config.welcome,
              timestamp: new Date()
            }]);
          }, 8000);
        }, 3000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [autoPlay, messages.length, type]);

  // Get bot responses based on type
  const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // OPERATIONS RESPONSES
    if (type === 'hr' && msg.includes('c-1247')) {
      return `**Analyzing candidate C-1247 against job J-589...**

✅ **Overall Match: 78.5%**

**Matched Skills (4/5):**
• Python (5 years exp) ✓
• Machine Learning (3 years) ✓
• Data Analysis (4 years) ✓
• SQL (6 years) ✓

⚠️ **Gaps Identified:**
• AWS certification (Required)
• Team lead experience (2 years needed)

💡 **Recommendation:** Good technical fit. Consider for interview with focus on leadership potential.`;
    }

    if (type === 'boq' && msg.includes('occupancy sensor')) {
      return `**Item Details: Occupancy Sensor**

📋 **Specification:**
• **Item Code:** OS-PIR-001
• **Description:** Passive Infrared Occupancy Sensor
• **Type:** Ceiling Mounted, 360° Coverage
• **Detection Range:** 6 meters radius
• **Voltage:** 220-240V AC, 50/60Hz
• **Response Time:** <1 second
• **Coverage Area:** 113 m² (1,217 sq ft)

💰 **Cost Breakdown:**
• **Unit Price:** $45.00
• **Quantity Required:** 24 units
• **Labor Cost:** $15/unit installation
• **Total Material:** $1,080.00
• **Total Labor:** $360.00
• **Grand Total:** $1,440.00

📦 **Recommended Suppliers:**
1. Schneider Electric - Model: PM1W-1
2. Legrand - Model: WSC-PDT
3. Lutron - Model: LOS-CDS

Would you like me to add this to the BOQ or get quotes from suppliers?`;
    }

    if (type === 'document' && (msg.includes('invoice') || msg.includes('inv-'))) {
      return `**Processing Invoice INV-2024-1247...**

✅ **Document Classification:** Invoice - Accounts Payable

📄 **Extracted Information:**
• **Vendor:** Acme Construction Supplies
• **Invoice Number:** INV-2024-1247
• **Date:** November 10, 2024
• **Due Date:** December 10, 2024
• **Amount:** $15,240.00
• **Tax:** $2,286.00
• **Total:** $17,526.00

📋 **Line Items:**
• Cement (50 bags) - $2,500
• Steel rods (5 tons) - $8,750
• Aggregates (20 m³) - $1,800
• Delivery charges - $2,190

✅ **Validation Status:**
• PO Match: ✓ (PO-2024-0892)
• Amount verified: ✓
• Vendor approved: ✓
• Tax calculation: ✓

**Next Steps:**
1. Route to Finance Manager for approval
2. Estimated payment date: Dec 5, 2024`;
    }

    if (type === 'search' && (msg.includes('q3') || msg.includes('revenue') || msg.includes('apac'))) {
      return `**Search Results: Q3 Revenue APAC**

Found 8 results across 4 systems (0.3s)

📊 **Excel - Q3_Forecast_APAC.xlsx**
Revenue projection: $8.4M (↑12% YoY)
Finance Department • Updated 2 days ago
Relevance: 95%

📄 **Document - APAC_Strategy_Q3.docx**
Key markets: Singapore (+15%), India (+8%), Australia (+6%)
Strategy Team • Updated 1 week ago
Relevance: 89%

📧 **Email - RE: APAC Revenue Update**
"Q3 tracking ahead of forecast by 3%..."
From: CFO • Yesterday
Relevance: 87%

Would you like me to open any of these documents?`;
    }

    // ENGAGEMENT RESPONSES
    if (type === 'customer' && (msg.includes('order') || msg.includes('ord-'))) {
      return `**Order Status: ORD-2024-5891**

📦 **Current Status:** Out for Delivery

**Order Details:**
• Order Date: November 15, 2024
• Expected Delivery: Today by 8 PM
• Carrier: FastShip Express
• Tracking: FS-2024-891-XY

**Items (3):**
• Wireless Mouse - Qty: 2 - $29.98
• USB-C Cable - Qty: 1 - $12.99
• Screen Protector - Qty: 1 - $9.99

**Total:** $52.96

📍 **Delivery Address:**
123 Main Street, Apt 4B
New York, NY 10001

**Live Tracking:** Your package is 3 stops away!

Would you like me to notify you when it's delivered?`;
    }

    if (type === 'citizen' && (msg.includes('permit') || msg.includes('bp-'))) {
      return `**Building Permit Status: BP-2024-1247**

✅ **Status:** Approved - Ready for Pickup

**Application Details:**
• Applicant: John Smith
• Property: 456 Oak Avenue
• Project Type: Residential Addition
• Submitted: October 15, 2024
• Approved: November 18, 2024

**Review Timeline:**
✓ Initial Review: Complete (Oct 20)
✓ Zoning Check: Approved (Oct 25)
✓ Fire Safety: Approved (Nov 5)
✓ Final Approval: Complete (Nov 18)

**Next Steps:**
1. Pick up permit at City Hall (Room 201)
   Hours: Mon-Fri 9 AM - 5 PM
2. Schedule inspections
3. Display permit on job site

**Required Inspections:**
• Foundation inspection (before concrete)
• Framing inspection (before drywall)
• Final inspection (upon completion)

Would you like me to schedule your first inspection?`;
    }

    if (type === 'multichannel' && msg.includes('conversation')) {
      return `**Conversation History: Customer C-5891**

**Sarah Johnson** - Premium Customer Since 2022

📊 **Interaction Summary:**
• Total Conversations: 12
• Channels Used: 4
• Last Contact: 2 days ago
• Satisfaction Score: 4.8/5

**Recent Conversations:**

💬 **Live Chat** - 2 days ago
"Issue with order #ORD-2024-5889"
→ Resolved: Refund processed

📧 **Email** - 1 week ago
"Question about premium membership"
→ Resolved: Upgraded to annual plan

📱 **SMS** - 2 weeks ago
"Delivery notification requested"
→ Complete: Enabled SMS alerts

🐦 **Twitter** - 3 weeks ago
"Praised customer service experience"
→ Responded: Thank you message sent

**Current Status:** Active, No Open Issues
**Preferences:** Prefers chat, SMS notifications enabled
**Special Notes:** VIP customer, priority support

Would you like to see the full conversation transcripts?`;
    }

    if (type === 'quality' && msg.includes('calls')) {
      return `**Quality Analysis: Last 50 Support Calls**

📊 **Overall Performance:**
• Average Call Duration: 8.5 minutes
• First Call Resolution: 78%
• Customer Satisfaction: 4.2/5
• Compliance Score: 94%

**Key Findings:**

✅ **Strengths:**
• Greeting protocol: 98% compliance
• Professional tone: 95% of calls
• Issue resolution: 78% FCR rate
• Follow-up commitments: 100% met

⚠️ **Areas for Improvement:**
• Average hold time: 2.3 min (target: <2 min)
• Script adherence: 82% (target: 90%)
• Upsell attempts: Only 15% of calls

**Sentiment Analysis:**
• Positive: 62%
• Neutral: 28%
• Negative: 10%

**Top Issues (causing negative sentiment):**
1. Long hold times (45% of complaints)
2. Transfers required (30%)
3. Information not readily available (25%)

**Agent Performance:**
🌟 Top Performer: Agent #127 (4.8/5 avg)
📈 Most Improved: Agent #089 (+0.6 this month)
⚠️ Needs Support: Agent #056 (3.2/5 avg)

**Recommended Actions:**
1. Additional training on hold time management
2. Update knowledge base for faster lookups
3. Coaching session for Agent #056

Would you like detailed call transcripts or agent-specific reports?`;
    }

    // INTELLIGENCE RESPONSES
    if (type === 'analytics' && (msg.includes('q4') || msg.includes('sales') || msg.includes('performance'))) {
      return `**Q4 2024 Sales Performance by Region**

📊 **Executive Summary:**
• Total Revenue: $4.8M (↑18% vs Q4 2023)
• Target Achievement: 112% of forecast
• Growth Rate: Accelerating (+3% vs Q3)

**Regional Breakdown:**

🌎 **North America: $2.1M (44%)**
• Growth: +15% YoY
• Top State: California ($680K)
• Performance: On track

🌍 **Europe: $1.6M (33%)**
• Growth: +22% YoY
• Top Country: Germany ($520K)
• Performance: Exceeding targets

🌏 **APAC: $950K (20%)**
• Growth: +25% YoY
• Top Market: Singapore ($340K)
• Performance: Strong momentum

🌎 **LATAM: $150K (3%)**
• Growth: +8% YoY
• Top Country: Brazil ($95K)
• Performance: Steady growth

**Product Performance:**
1. Enterprise Plan: $2.4M (50%)
2. Professional Plan: $1.7M (35%)
3. Starter Plan: $700K (15%)

**Key Insights:**
✓ APAC showing strongest growth trajectory
✓ Enterprise upsells driving revenue
✓ December trending 20% above forecast

**Forecast Q1 2025:**
Projected: $5.2M (+8% vs Q4)

Would you like to drill down into specific regions or products?`;
    }

    if (type === 'compliance' && (msg.includes('compliance') || msg.includes('line') || msg.includes('manufacturing'))) {
      return `**Compliance Status: Manufacturing Line 3**

✅ **Overall Status:** Compliant - 1 Minor Issue

**Last Audit:** November 18, 2024 at 2:30 PM

**Compliance Checklist:**

✅ **Safety Standards (OSHA):**
• PPE Requirements: 100% compliant
• Emergency Exits: Clear and marked
• Fire Suppression: Tested and operational
• Machine Guards: All in place

✅ **Quality Standards (ISO 9001):**
• Process Documentation: Up to date
• Calibration Records: Current
• Training Records: Complete
• Audit Trail: Maintained

⚠️ **Environmental (EPA):**
• Emissions Monitoring: Compliant
• Waste Disposal: Compliant
• Chemical Storage: **Minor Issue Detected**
  → Secondary containment seal needs replacement
  → Due date: December 1, 2024
  → Assigned to: Facilities Team

✅ **Data Security (SOC 2):**
• Access Controls: Verified
• Encryption: Active
• Backup Systems: Operational

**Violation History (Last 30 Days):**
• Total Incidents: 0 major, 1 minor
• Resolution Time: <24 hours
• Repeat Violations: 0

**Upcoming Requirements:**
• Annual Safety Recertification: Due Jan 15, 2025
• ISO Audit: Scheduled Feb 2025
• EPA Inspection: Expected Q1 2025

**Risk Score:** Low (2/10)

Would you like to see detailed logs or schedule corrective actions?`;
    }

    if (type === 'monitoring' && (msg.includes('production') || msg.includes('efficiency') || msg.includes('24 hours'))) {
      return `**Production Efficiency: Last 24 Hours**

⚡ **Overall Equipment Effectiveness (OEE): 82.5%**
Target: 80% ✓ Exceeding

**Performance Metrics:**

📊 **Availability: 91.2%**
• Planned Production Time: 24 hours
• Actual Runtime: 21.9 hours
• Downtime: 2.1 hours
  → Scheduled maintenance: 1.5 hours
  → Unplanned stops: 0.6 hours

📈 **Performance: 87.5%**
• Target Cycle Time: 45 seconds/unit
• Actual Cycle Time: 51.4 seconds/unit
• Speed Loss: 12.5%
• Units Produced: 1,537 (target: 1,600)

✓ **Quality: 98.2%**
• Total Produced: 1,537 units
• Quality Rejects: 28 units
• Rework Required: 12 units
• First Pass Yield: 98.2%

**Downtime Analysis:**

🔧 **Scheduled (1.5 hours):**
• Preventive maintenance: 1.2 hours
• Changeover: 0.3 hours

⚠️ **Unplanned (0.6 hours):**
• Sensor calibration: 0.4 hours
• Material shortage: 0.2 hours

**Top Issues Detected:**

1⃣ **Cycle Time Variation**
• Average: 51.4s (target: 45s)
• Root cause: Feed rate inconsistency
• Impact: -63 units production
• **Recommended:** Adjust feed mechanism

2⃣ **Quality Reject Pattern**
• 18 rejects in last 4 hours
• Pattern: Dimensional variance
• **Alert:** Tool wear suspected
• **Action:** Schedule tool inspection

**Predictive Insights:**

🔮 **Next 24 Hours Forecast:**
• Predicted OEE: 84.3%
• Expected Output: 1,620 units
• Risk Level: Low

⚠️ **Maintenance Alert:**
• Bearing temperature trending up
• Prediction: Failure in 72-96 hours
• **Action Required:** Schedule replacement

**Recommendations:**
1. Address feed rate issue (priority: high)
2. Inspect cutting tools (priority: medium)
3. Schedule bearing replacement (priority: high)

Would you like detailed sensor data or maintenance work orders?`;
    }

    // Default response
    return `I understand you're asking about "${userMessage}". Let me help you with that. Try asking me something specific about ${config.name.toLowerCase()}.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(inputValue);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleExampleClick = (example: string) => {
    setInputValue(example);
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-6">
      <div className="bg-black border border-white/10 rounded-lg flex flex-col h-[500px]">
        
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
            <span className="text-xl">{config.avatar}</span>
          </div>
          <div>
            <div className="text-sm font-semibold">{config.name}</div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Online
            </div>
          </div>
        </div>

        {/* Messages - AUTO SCROLL UP */}
        <div className="flex-1 overflow-hidden relative bg-black">
          <div 
            className="p-4 space-y-4 transition-all duration-1000 ease-out"
            style={{ 
              transform: messages.length > 2 
                ? `translateY(calc(-100% + 400px))` 
                : 'translateY(0)'
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className="text-sm whitespace-pre-line leading-relaxed">{message.content}</div>
                  <div className="text-xs text-gray mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Example Questions */}
        {messages.length === 1 && !autoPlay && (
          <div className="px-4 pb-2">
            <div className="text-xs text-gray mb-2">Try asking:</div>
            <div className="space-y-2">
              {config.examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="w-full text-left text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded p-2 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        {!autoPlay && (
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none focus:border-white/20"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 text-sm font-semibold transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}