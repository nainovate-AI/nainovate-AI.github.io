'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import askData from '@/data/ai-decision-workspace/public-sector/building-permits/ask.json';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const WELCOME_MESSAGE = askData.welcome;

const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    const match = askData.matchers.find((m) =>
        m.keywords.some((k) => msg.includes(k))
    );
    return match ? match.response : askData.fallback;
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

    const suggestions = askData.suggestions;

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