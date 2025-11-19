'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    capability?: string;
}

const WELCOME_MESSAGE = "Hi! I'm NIA, your unified AI assistant. I can help with HR screening, BOQ generation, customer service, analytics, compliance, and more. What would you like to explore?";

// Intelligent response system that routes to appropriate capability
const getIntelligentResponse = (userMessage: string): { content: string; capability: string } => {
    const msg = userMessage.toLowerCase();

    // HR & Recruitment
    if (msg.includes('candidate') || msg.includes('hire') || msg.includes('recruit') || msg.includes('resume') || msg.includes('job')) {
        return {
            content: `I can help with that! For candidate C-1247 applying to Senior Developer role (J-589):

**Match Analysis:**
- Overall Match: 87%
- Technical Skills: 92% (React, Node.js, Python)
- Experience Level: 85% (8 years vs 7-10 required)
- Cultural Fit: 88%

**Key Strengths:**
• Led 3 teams, managed $2M projects
• Strong full-stack background
• Startup experience aligns with company culture

**Potential Concerns:**
• Limited AWS experience (has Azure)
• No management certification

**Recommendation:** Proceed to technical interview. High potential for success.

Would you like me to schedule interviews or analyze other candidates?`,
            capability: 'HR Screening'
        };
    }

    // BOQ & Construction
    if (msg.includes('boq') || msg.includes('quantity') || msg.includes('construction') || msg.includes('material') || msg.includes('estimate')) {
        return {
            content: `I've analyzed the architectural drawings. Here's the BOQ breakdown:

**Foundation & Structure:**
- Concrete M25: 45 cubic meters
- Steel reinforcement: 3,200 kg
- Formwork: 280 sq meters

**Masonry & Walls:**
- Bricks (9"): 15,000 units
- Cement mortar: 8.5 cubic meters

**Electrical & Plumbing:**
- Copper wiring: 850 meters
- PVC pipes: 320 meters
- Fixtures: 28 units

**Estimated Cost:** ₹24.8 lakhs
**Timeline:** 16 weeks
**Material Lead Time:** 3-4 weeks

Need detailed breakdown for any specific item?`,
            capability: 'BOQ Generation'
        };
    }

    // Customer Service
    if (msg.includes('order') || msg.includes('track') || msg.includes('delivery') || msg.includes('refund') || msg.includes('customer')) {
        return {
            content: `Let me check order #ORD-89234 for you:

**Order Status:** Out for Delivery
**Current Location:** Distribution Hub - Sector 15
**Expected Delivery:** Today by 6:00 PM
**Delivery Partner:** Express Logistics

**Order Details:**
- 2x Wireless Headphones (₹4,998)
- 1x Phone Case (₹499)
- Total: ₹5,497 (Paid)

**Tracking Updates:**
✓ Order Confirmed (Nov 16, 9:30 AM)
✓ Packed (Nov 16, 2:15 PM)
✓ Shipped (Nov 17, 8:00 AM)
→ Out for Delivery (Nov 19, 11:45 AM)

Would you like to modify delivery address or contact the driver?`,
            capability: 'Customer Service'
        };
    }

    // Building Permits & Government
    if (msg.includes('permit') || msg.includes('building') || msg.includes('approval') || msg.includes('government') || msg.includes('citizen')) {
        return {
            content: `Checking building permit BP-2024-1247:

**Application Status:** Under Review - Stage 3 of 4
**Current Department:** Fire Safety Clearance
**Progress:** 75% Complete

**Completed Approvals:**
✓ Architectural Plans (Nov 2)
✓ Structural Engineering (Nov 8)
✓ Environmental Clearance (Nov 12)

**Pending:**
→ Fire Safety Review (In Progress - 2 days)
• Expected completion: Nov 21
• Inspector assigned: FS-089

**Final Steps:**
□ Building Committee Approval (3 days)
□ Fee Payment & Permit Issuance (1 day)

**Estimated Permit Date:** November 26, 2024

You can track real-time updates or schedule a meeting with the fire safety inspector. What would you like to do?`,
            capability: 'Citizen Services'
        };
    }

    // Analytics & Intelligence
    if (msg.includes('analytic') || msg.includes('dashboard') || msg.includes('report') || msg.includes('metric') || msg.includes('data') || msg.includes('insight')) {
        return {
            content: `Here's your real-time analytics overview:

**Permit Processing Performance (Last 30 Days):**

**Volume Metrics:**
- Total Applications: 342
- Approved: 256 (75%)
- Rejected: 28 (8%)
- Under Review: 58 (17%)

**Processing Efficiency:**
- Average Processing Time: 18 days (Target: 21)
- Stage 1 (Architectural): 4.2 days
- Stage 2 (Engineering): 5.8 days
- Stage 3 (Compliance): 5.1 days
- Stage 4 (Final Approval): 2.9 days

**Trending Issues:**
📈 Fire safety rejections up 12%
📉 Structural review time down 23%
⚠️ Environmental clearances delayed in Sector 7-9

**Top Rejection Reasons:**
1. Incomplete drawings (32%)
2. Parking violations (24%)
3. Setback requirements (18%)

Would you like detailed breakdown by district or inspector performance metrics?`,
            capability: 'Analytics Dashboard'
        };
    }

    // Compliance & Governance
    if (msg.includes('complian') || msg.includes('regulation') || msg.includes('audit') || msg.includes('policy') || msg.includes('risk')) {
        return {
            content: `Compliance Status Report - Multi-Jurisdiction:

**Overall Compliance Score:** 94%

**EU AI Act:**
✓ Risk Classification: Compliant
✓ Transparency Requirements: Met
✓ Data Governance: Certified
⚠️ Documentation: 2 items pending review

**India IT Act 2000 & DPDPA 2023:**
✓ Data Localization: Compliant
✓ Consent Management: Implemented
✓ Breach Notification: Protocol Active
✓ Audit Trail: Complete

**US (California CCPA):**
✓ Consumer Rights: Implemented
✓ Data Deletion: Automated
✓ Opt-out Mechanism: Active
⚠️ Annual Assessment: Due Dec 15

**GCC Data Protection:**
✓ Cross-border Transfer: Approved
✓ Local Processing: Active
✓ Security Standards: Certified

**Action Items:**
1. Complete EU documentation (Due: Nov 25)
2. Schedule CA annual assessment
3. Update DPO contact info for GCC

Need detailed audit trail for any jurisdiction?`,
            capability: 'Compliance Tracking'
        };
    }

    // Multi-channel Support
    if (msg.includes('channel') || msg.includes('email') || msg.includes('chat') || msg.includes('sms') || msg.includes('conversation')) {
        return {
            content: `Unified conversation history for Customer #C-45892:

**Communication Timeline:**

**Nov 18, 2:30 PM - WhatsApp:**
Customer: "My order hasn't arrived"
Agent: Checked status, shared tracking link

**Nov 18, 4:15 PM - Email:**
Customer: "Still no update, need urgent delivery"
Agent: Escalated to logistics, confirmed delivery by EOD

**Nov 19, 9:00 AM - Phone Call:**
Duration: 4m 32s
Topic: Delivery confirmation
Resolution: Package delivered successfully

**Nov 19, 11:20 AM - Web Chat (Current):**
Customer: Following up on experience

**Sentiment Analysis:**
Initial: 😠 Frustrated → Current: 😊 Satisfied

**Agent Performance:**
- Response Time: 8 minutes avg
- Resolution Rate: 100%
- Customer Satisfaction: 4.5/5

**Suggested Action:** Send follow-up satisfaction survey

All channels synchronized in real-time. Need transcript from any specific interaction?`,
            capability: 'Multi-Channel Support'
        };
    }

    // Quality Assurance
    if (msg.includes('quality') || msg.includes('defect') || msg.includes('inspection') || msg.includes('testing') || msg.includes('manufacturing')) {
        return {
            content: `Manufacturing Quality Report - Production Line A:

**Today's Metrics (Shift 1):**
- Units Produced: 2,847
- Defect Rate: 0.8% (Target: <1.2%)
- Quality Score: 98.2%

**Defect Analysis:**
⚠️ Visual defects: 12 units (0.42%)
⚠️ Dimensional variance: 8 units (0.28%)
⚠️ Surface finish: 3 units (0.11%)

**Real-time Alerts:**
🔴 Station 4: Temperature deviation detected (2:34 PM)
   → Auto-corrected, production resumed
🟡 Station 7: Calibration due in 4 hours
   → Scheduled for 6:00 PM

**Predictive Insights:**
• Bearing replacement needed at Station 3 (within 72 hours)
• Material batch MB-8847 showing 0.3% higher defect rate
• Optimal production window: 8 AM - 12 PM (lowest defect rate)

**Corrective Actions Taken:**
✓ Adjusted pressure at Station 4
✓ Retrained operator on Station 7
✓ Quarantined defective batch for review

Need detailed defect images or recommendation for process optimization?`,
            capability: 'Quality Assurance'
        };
    }

    // Workflow Automation
    if (msg.includes('workflow') || msg.includes('process') || msg.includes('automation') || msg.includes('approval') || msg.includes('routing')) {
        return {
            content: `Automated workflow status for Invoice Processing:

**Current Pipeline:**

**Awaiting Processing:** 23 invoices
**In Review:** 8 invoices
**Pending Approval:** 5 invoices
**Approved & Queued for Payment:** 12 invoices

**Today's Automation Performance:**
✓ 47 invoices auto-processed
✓ 89% straight-through processing rate
✓ 0 manual interventions required
✓ Average processing time: 4.2 minutes

**Workflow Stages:**
1. **OCR & Data Extraction** → 98.5% accuracy
2. **Vendor Validation** → Auto-matched against database
3. **PO Matching** → 3-way match completed
4. **Amount Verification** → Within tolerance
5. **Approval Routing** → Based on amount thresholds

**Exception Handling:**
⚠️ 3 invoices flagged for review:
- INV-8934: Amount mismatch (PO: ₹45K, Invoice: ₹47K)
- INV-9012: New vendor (requires manual approval)
- INV-9156: Missing PO reference

**Next Actions:**
• Auto-route exceptions to finance team
• Send payment confirmations for approved invoices
• Generate audit trail report

Want to modify approval thresholds or add new routing rules?`,
            capability: 'Workflow Automation'
        };
    }

    // Enterprise Search
    if (msg.includes('search') || msg.includes('find') || msg.includes('document') || msg.includes('policy') || msg.includes('knowledge')) {
        return {
            content: `Enterprise search results for your query:

**Found 127 relevant documents across 8 systems**

**Top Results:**

📄 **Employee Handbook 2024** (HR Portal)
Section 4.2: Remote Work Policy
"...employees can work remotely up to 3 days per week with manager approval..."
Relevance: 95% | Last updated: Oct 2024

📊 **Q3 Financial Report** (SharePoint)
Page 12: Department Budgets
"...IT infrastructure allocation increased by 18%..."
Relevance: 89% | Access: Finance Team

📋 **Client Onboarding SOP** (Confluence)
Step 3: Documentation Requirements
"...compliance checklist must include KYC, PAN, and GSTIN..."
Relevance: 87% | Last updated: Nov 2024

🎯 **Product Roadmap 2025** (Jira)
Feature: AI Integration
"...planned rollout in Q2 2025 across 3 products..."
Relevance: 82% | Status: In Progress

**Filter by:**
• Document Type
• Department
• Date Range
• Access Level

**Also found in:**
Slack (23 conversations), Email (34 threads), Google Drive (18 files)

Need me to summarize any specific document or search within a particular system?`,
            capability: 'Enterprise Search'
        };
    }

    // Default response if no match
    return {
        content: `I can help you with:

**Operations:**
• HR & Recruitment - Candidate screening, job matching
• BOQ & Construction - Quantity estimation, cost analysis
• Document Processing - Extract, analyze, classify
• Enterprise Search - Find info across all systems

**Engagement:**
• Customer Service - Order tracking, issue resolution
• Citizen Services - Building permits, government applications
• Multi-Channel Support - Unified conversations
• Quality Assurance - Call analysis, satisfaction tracking

**Intelligence:**
• Analytics Dashboards - Real-time insights, trend analysis
• Compliance Tracking - Multi-jurisdiction monitoring
• Performance Monitoring - KPIs, efficiency metrics
• Quality Control - Defect tracking, predictive maintenance

What would you like to explore?`,
        capability: 'General'
    };
};

export default function UnifiedChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: WELCOME_MESSAGE,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            role: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate processing time
        setTimeout(() => {
            const response = getIntelligentResponse(inputValue);
            const assistantMessage: Message = {
                role: 'assistant',
                content: response.content,
                timestamp: new Date(),
                capability: response.capability
            };

            setMessages(prev => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleExampleClick = (example: string) => {
        setInputValue(example);
        setTimeout(() => handleSend(), 100);
    };

    const exampleQuestions = [
        "Analyze candidate C-1247 for job J-589",
        "Generate BOQ for architectural drawings",
        "Track order #ORD-89234",
        "Check building permit BP-2024-1247",
        "Show permit processing analytics",
        "Compliance status across jurisdictions"
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="border-b border-white/10 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">NIA - Unified AI Assistant</span>
                        <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">Online</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/* Messages */}
                <div className="h-[500px] overflow-y-auto scrollbar-hide p-6 space-y-4">
                    {messages.map((message, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.role === 'assistant' && (
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/20 border border-blue-500/30">
                                    <img
                                        src="/images/N_Dark_Mode.png"
                                        alt="NIA"
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                            )}

                            <div
                                className={`max-w-[75%] rounded-lg p-4 ${message.role === 'user'
                                        ? 'bg-white/10 border border-white/20'
                                        : 'bg-blue-500/10 border border-blue-500/20'
                                    }`}
                            >
                                {message.capability && message.capability !== 'General' && (
                                    <div className="text-xs text-blue-400 font-medium mb-2">
                                        {message.capability}
                                    </div>
                                )}
                                <div className="text-sm whitespace-pre-line leading-relaxed">
                                    {message.content}
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>

                            {message.role === 'user' && (
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 border border-white/20">
                                    <span className="text-xs">👤</span>
                                </div>
                            )}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-3 justify-start">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/20 border border-blue-500/30">
                                <span className="text-xs font-bold">NIA</span>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Example Questions - Show after every assistant response */}
                {!isTyping && messages[messages.length - 1]?.role === 'assistant' && (
                    <div className="border-t border-white/10 p-4 bg-white/[0.02]">
                        <p className="text-xs text-gray-400 mb-3">Try asking:</p>
                        <div className="flex flex-wrap gap-2">
                            {exampleQuestions.map((question, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleExampleClick(question)}
                                    className="text-xs px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input */}
                <div className="border-t border-white/10 p-4">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything about HR, BOQ, analytics, compliance..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-white/5 disabled:text-gray-500 rounded-lg text-sm font-medium transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}