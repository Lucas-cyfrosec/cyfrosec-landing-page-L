'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Bot, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/src/i18n';

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function renderContent(text: string) {
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return <p className="leading-relaxed whitespace-pre-line text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: html }} />;
}

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  time: string;
}

export default function AIChatbot() {
  const { t } = useTranslation();
  const cb = t.chatbot;
  const [chatOpen, setChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', content: cb.welcome, time: formatTime(new Date()) }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  async function sendMessage(question: string, answer: string) {
    setMessages(prev => [...prev, { id: prev.length + 1, type: 'user', content: question, time: formatTime(new Date()) }]);
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

    setMessages(prev => [...prev, { id: prev.length + 1, type: 'bot', content: answer, time: formatTime(new Date()) }]);
    setIsTyping(false);
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      {chatOpen && (
        <div className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] max-w-[20rem] sm:w-80 lg:w-96 bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-surface-200 dark:border-surface-700 animate-slideUp">
          {/* Header */}
          <div className="bg-surface-50 dark:bg-gradient-to-r dark:from-[#0a1628] dark:to-[#0d1f3c] border-b border-surface-200 dark:border-surface-700 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.ico`} alt="" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-surface-900 dark:text-white text-sm sm:text-base">{cb.botName}</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-primary-600 dark:text-blue-300 text-[10px] sm:text-xs">{cb.online}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-surface-500 hover:text-surface-900 dark:text-white/80 dark:hover:text-white transition-colors p-1 hover:bg-surface-100 dark:hover:bg-white/10 rounded">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 sm:h-72 lg:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 bg-surface-50 dark:bg-surface-900" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {messages.map(message => (
              message.type === 'bot' ? (
                <div key={message.id} className="flex gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="max-w-[85%]">
                    <div className="bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-200 rounded-xl sm:rounded-2xl rounded-tl-sm shadow-sm border border-surface-200 dark:border-surface-700 px-2.5 py-2 sm:px-3 sm:py-2.5">
                      {renderContent(message.content)}
                    </div>
                    <span className="text-[10px] sm:text-xs text-surface-400 mt-1 ml-1">{message.time}</span>
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex gap-2 flex-row-reverse">
                  <div className="max-w-[85%]">
                    <div className="bg-primary-600 text-white rounded-xl sm:rounded-2xl rounded-tr-sm px-2.5 py-2 sm:px-3 sm:py-2.5">
                      <p className="leading-relaxed text-xs sm:text-sm">{message.content}</p>
                    </div>
                    <span className="text-[10px] sm:text-xs text-surface-400 mt-1 mr-1 block text-right">{message.time}</span>
                  </div>
                </div>
              )
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl rounded-tl-sm shadow-sm border border-surface-200 dark:border-surface-700 px-3 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {!isTyping && (
            <div className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
              <div className="px-3 pt-2.5 pb-1 sm:px-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <p className="font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide text-[10px] sm:text-xs">
                  {cb.frequentlyAsked}
                </p>
              </div>

              <div className="relative">
                <div
                  className="flex flex-col px-2 sm:px-3 gap-0.5 max-h-40 overflow-y-auto pb-12"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {cb.questions.map(({ q, a }) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q, a)}
                      className="flex items-center gap-2 px-2.5 py-1.5 sm:py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 group transition-colors text-left"
                    >
                      <ChevronRight className="w-3 h-3 text-surface-300 dark:text-surface-600 group-hover:text-primary-500 flex-shrink-0 transition-colors" />
                      <span className="text-[10px] sm:text-xs text-surface-600 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-snug">
                        {q}
                      </span>
                    </button>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-white/0 via-white/85 to-white dark:from-surface-800/0 dark:via-surface-800/85 dark:to-surface-800"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <div className="relative">
        {!chatOpen && (
          <div className="absolute bottom-full right-0 mb-3 animate-bounce">
            <div className="relative bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl rounded-br-sm px-4 py-2 shadow-lg">
              <p className="font-semibold text-surface-900 dark:text-surface-50 whitespace-nowrap text-sm">{cb.greeting}</p>
              {/* Tail — rotated square clipped to bottom-right */}
              <span className="absolute -bottom-[7px] right-4 w-3 h-3 bg-white dark:bg-surface-800 border-r border-b border-surface-200 dark:border-surface-700 rotate-45" />
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(v => !v)}
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-[#0a1628] hover:bg-surface-50 dark:hover:bg-[#0d1f3c] text-surface-900 dark:text-white rounded-full shadow-lg hover:shadow-xl border border-surface-200 dark:border-surface-700 transition-all duration-200 flex items-center justify-center group relative ${chatOpen ? 'hidden' : ''}`}
          aria-label={cb.openChat}
        >
          {chatOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <>
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.ico`} alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#fe904d] rounded-full border-2 border-white dark:border-[#0a1628]"></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
