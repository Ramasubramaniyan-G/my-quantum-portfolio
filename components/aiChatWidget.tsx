import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useAIResponse } from '@/hooks/aiChat';

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ type: 'bot', text: "Hello! I'm Rama's AI Assistant. Ask me anything about his skills, experience, or quantum research." }]);
  const [input, setInput] = useState("");
  const { ask, response, loading } = useAIResponse("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response) {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }
  }, [response]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    ask(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-96 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex flex-col shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] overflow-hidden animate-fade-in-up">
          <div className="p-4 bg-slate-800/50 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="font-bold text-white text-sm">Portfolio AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={16} className="text-slate-400 hover:text-white" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${msg.type === 'user'
                  ? 'bg-cyan-600/20 text-cyan-100 border border-cyan-500/30 rounded-br-sm'
                  : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-sm'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-3 rounded-xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-white/5 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my projects..."
              className="flex-1 bg-slate-950/50 border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-cyan-500 hover:bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-50" />
        {isOpen ? <X className="text-white" /> : <Bot className="text-white" />}
      </button>
    </div>
  );
};