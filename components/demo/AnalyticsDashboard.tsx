'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp, MessageCircle, X, MoreVertical } from 'lucide-react';

interface ChartWidget {
    id: string;
    type: 'bar' | 'pie' | 'line';
    title: string;
    labels: string[];
    values: number[];
    colors: string[];
    activeType?: 'bar' | 'pie' | 'line';
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

// Generate chart based on query
const getChartForQuery = (query: string): ChartWidget | null => {
    const msg = query.toLowerCase();
    const id = Date.now().toString();

    if (msg.includes('building type') || msg.includes('type request')) {
        return {
            id,
            type: 'bar',
            title: 'Building Type Requests - 2025',
            labels: ['Residential', 'Commercial', 'Industrial', 'Government', 'Others'],
            values: [380, 95, 85, 45, 15],
            colors: ['#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6']
        };
    }

    if (msg.includes('region') || msg.includes('location')) {
        return {
            id,
            type: 'pie',
            title: 'Requests by Region',
            labels: ['North District', 'South District', 'East District', 'West District'],
            values: [4230, 4876, 2150, 1890],
            colors: ['#F97316', '#3B82F6', '#10B981', '#8B5CF6']
        };
    }

    if (msg.includes('monthly') || msg.includes('trend')) {
        return {
            id,
            type: 'line',
            title: 'Monthly Application Trends',
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            values: [120, 150, 180, 220, 195, 240, 280, 310, 290, 320, 350],
            colors: ['#3B82F6']
        };
    }

    if (msg.includes('approval') || msg.includes('status')) {
        return {
            id,
            type: 'pie',
            title: 'Approval Statistics',
            labels: ['Approved', 'Under Review', 'Rejected', 'Pending'],
            values: [67, 18, 8, 7],
            colors: ['#10B981', '#F59E0B', '#EF4444', '#6B7280']
        };
    }

    if (msg.includes('license') || msg.includes('wilayat')) {
        return {
            id,
            type: 'bar',
            title: 'Licenses Issued per Wilayat',
            labels: ['Muscat', 'Salalah', 'Sohar', 'Nizwa', 'Sur', 'Ibri'],
            values: [260, 180, 145, 120, 95, 78],
            colors: ['#8B5CF6', '#8B5CF6', '#8B5CF6', '#8B5CF6', '#8B5CF6', '#8B5CF6']
        };
    }

    if (msg.includes('processing') || msg.includes('time')) {
        return {
            id,
            type: 'bar',
            title: 'Average Processing Time (Days)',
            labels: ['Residential', 'Commercial', 'Industrial', 'Renovation'],
            values: [18, 32, 45, 12],
            colors: ['#10B981', '#F59E0B', '#EF4444', '#3B82F6']
        };
    }

    return null;
};

// Bar Chart Component
const BarChart = ({ widget }: { widget: ChartWidget }) => {
    const maxValue = Math.max(...widget.values);

    return (
        <div className="h-full flex flex-col">
            <h3 className="text-sm font-medium text-white mb-4">{widget.title}</h3>
            <div className="flex-1 flex flex-col justify-center space-y-2">
                {widget.labels.map((label, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500 w-20 truncate">{label}</span>
                        <div className="flex-1 h-5 bg-white/5 rounded overflow-hidden">
                            <div
                                className="h-full rounded transition-all duration-1000 ease-out"
                                style={{
                                    width: `${(widget.values[idx] / maxValue) * 100}%`,
                                    backgroundColor: widget.colors[idx] || '#3B82F6'
                                }}
                            />
                        </div>
                        <span className="text-[10px] text-white w-8 text-right">{widget.values[idx]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Pie Chart Component
const PieChart = ({ widget }: { widget: ChartWidget }) => {
    const total = widget.values.reduce((a, b) => a + b, 0);
    let currentAngle = 0;

    return (
        <div className="h-full flex flex-col">
            <h3 className="text-sm font-medium text-white mb-4">{widget.title}</h3>
            <div className="flex-1 flex items-center gap-4">
                <div className="relative w-28 h-28 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        {widget.values.map((value, idx) => {
                            const percentage = (value / total) * 100;
                            const angle = (percentage / 100) * 360;
                            const startAngle = currentAngle;
                            currentAngle += angle;

                            const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                            const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                            const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                            const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
                            const largeArc = angle > 180 ? 1 : 0;

                            return (
                                <path
                                    key={idx}
                                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                                    fill={widget.colors[idx] || '#3B82F6'}
                                />
                            );
                        })}
                        <circle cx="50" cy="50" r="20" fill="black" />
                    </svg>
                </div>
                <div className="flex-1 space-y-1">
                    {widget.labels.map((label, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: widget.colors[idx] }}
                            />
                            <span className="text-[10px] text-gray-400 truncate">{label}</span>
                            <span className="text-[10px] text-white ml-auto">{widget.values[idx]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Line Chart Component
const LineChart = ({ widget }: { widget: ChartWidget }) => {
    const maxValue = Math.max(...widget.values);
    const minValue = Math.min(...widget.values);
    const range = maxValue - minValue || 1;

    const points = widget.values
        .map((value, idx) => {
            const x = 10 + (idx / (widget.values.length - 1)) * 80;
            const y = 85 - ((value - minValue) / range) * 60;
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <div className="h-full flex flex-col">
            <h3 className="text-sm font-medium text-white mb-2">{widget.title}</h3>
            <div className="flex-1 relative overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                    />
                    {widget.values.map((_, idx) => {
                        const x = 10 + (idx / (widget.values.length - 1)) * 80;
                        const y = 85 - ((widget.values[idx] - minValue) / range) * 60;
                        return <circle key={idx} cx={x} cy={y} r="1.5" fill="#3B82F6" />;
                    })}
                </svg>
            </div>
            <div className="flex justify-between text-[8px] text-gray-500 mt-1">
                <span>{widget.labels[0]}</span>
                <span>{widget.labels[Math.floor(widget.labels.length / 2)]}</span>
                <span>{widget.labels[widget.labels.length - 1]}</span>
            </div>
        </div>
    );
};

// Widget Card
// Widget Card
const WidgetCard = ({ widget, onRemove, onChangeType }: {
    widget: ChartWidget;
    onRemove: (id: string) => void;
    onChangeType: (id: string, type: 'bar' | 'pie' | 'line') => void;
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const displayType = widget.activeType || widget.type;

    const chartTypes = [
        { type: 'bar' as const, label: 'Bar Chart', icon: '📊' },
        { type: 'pie' as const, label: 'Pie Chart', icon: '🥧' },
        { type: 'line' as const, label: 'Line Chart', icon: '📈' },
    ];

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-[220px] relative group">
            {/* Three Dot Menu */}
            <div className="absolute top-2 right-2 z-10">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                >
                    <MoreVertical className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div className="absolute top-8 right-0 bg-black border border-white/20 rounded-lg py-1 min-w-[140px] z-20 shadow-xl">
                            {chartTypes.map((chart) => (
                                <button
                                    key={chart.type}
                                    onClick={() => {
                                        onChangeType(widget.id, chart.type);
                                        setMenuOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 text-left text-xs flex items-center gap-2 hover:bg-white/10 transition-colors ${displayType === chart.type ? 'text-white' : 'text-gray-400'
                                        }`}
                                >
                                    <span>{chart.icon}</span>
                                    <span>{chart.label}</span>
                                    {displayType === chart.type && <span className="ml-auto">✓</span>}
                                </button>
                            ))}
                            <div className="border-t border-white/10 mt-1 pt-1">
                                <button
                                    onClick={() => {
                                        onRemove(widget.id);
                                        setMenuOpen(false);
                                    }}
                                    className="w-full px-3 py-2 text-left text-xs flex items-center gap-2 hover:bg-white/10 transition-colors text-red-400"
                                >
                                    <span>🗑️</span>
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Chart */}
            {displayType === 'bar' && <BarChart widget={widget} />}
            {displayType === 'pie' && <PieChart widget={widget} />}
            {displayType === 'line' && <LineChart widget={widget} />}
        </div>
    );
};

export default function AnalyticsDashboard() {
    const [widgets, setWidgets] = useState<ChartWidget[]>([]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Ask me to show analytics and I\'ll add widgets to your dashboard!' }
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
            const chart = getChartForQuery(userMessage);
            if (chart) {
                setWidgets(prev => [...prev, chart]);
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `Added "${chart.title}" to your dashboard!`
                }]);
            } else {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: 'Try asking about: building types, regions, monthly trends, approval status, licenses, or processing time.'
                }]);
            }
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const removeWidget = (id: string) => {
        setWidgets(prev => prev.filter(w => w.id !== id));
    };

    const changeWidgetType = (id: string, newType: 'bar' | 'pie' | 'line') => {
        setWidgets(prev => prev.map(w =>
            w.id === id ? { ...w, activeType: newType } : w
        ));
    };

    const suggestions = [
        "Show building type requests",
        "Show requests by region",
        "Show monthly trends",
        "Show approval status",
        "Show licenses by wilayat",
        "Show processing time"
    ];

    return (
        <div className="h-full relative">

            {/* Dashboard Grid */}
            <div className="h-full overflow-y-auto p-6 pb-[100px]">
                {widgets.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p className="text-lg">Your dashboard is empty</p>
                            <p className="text-sm mt-2">Click the chat button and ask for analytics</p>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {widgets.map(widget => (
                            <WidgetCard
                                key={widget.id}
                                widget={widget}
                                onRemove={removeWidget}
                                onChangeType={changeWidgetType}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Chat Button */}
            {!isChatOpen && (
                <button
                    onClick={() => setIsChatOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}

            {/* Chat Popup */}
            {isChatOpen && (
                <div className="fixed bottom-6 right-6 w-[380px] h-[500px] bg-black border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">

                    {/* Chat Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                        <span className="text-sm font-medium">Analytics Assistant</span>
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${msg.role === 'user'
                                        ? 'bg-white text-black'
                                        : 'bg-white/10 text-white'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 rounded-xl px-3 py-2">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    <div className="px-4 py-2 border-t border-white/10">
                        <div className="flex flex-wrap gap-1.5">
                            {suggestions.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setInput(suggestion)}
                                    className="px-2 py-1 text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-white/10">
                        <div className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-full px-3 py-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask for analytics..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                            >
                                <ArrowUp className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}