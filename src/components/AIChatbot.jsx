import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, MessageCircle, Sparkles } from 'lucide-react';

const suggestedQuestions = [
  'How does AI prioritization work?',
  'What vulnerabilities should I fix first?',
  'Explain attack surface management'
];

const responses = {
  priorit: "CyfroSec AI analyzes vulnerabilities using multiple factors:\n\n• **Exploitability** - Is there active exploitation in the wild?\n• **Asset Criticality** - How important is the affected system?\n• **Attack Path** - Can attackers reach this vulnerability?\n• **Business Impact** - What's the potential damage?\n\nThis helps you focus on the 5% of vulnerabilities that represent 95% of your risk.",
  fix: "Based on AI analysis, you should prioritize:\n\n1. **Critical exploited vulnerabilities** on internet-facing assets\n2. **High-severity issues** with public exploits\n3. **Vulnerabilities in your crown jewel systems**\n\nWould you like me to explain our risk scoring methodology?",
  'attack surface': "Attack Surface Management (ASM) provides continuous visibility into all your external-facing assets:\n\n• **Discovery** - Find unknown assets, shadow IT, and forgotten infrastructure\n• **Assessment** - Identify vulnerabilities and misconfigurations\n• **Monitoring** - Track changes and new exposures in real-time\n\nCyfroSec discovers assets you didn't know you had.",
  vulnerab: "CyfroSec scans for vulnerabilities across:\n\n• **Infrastructure** - Servers, networks, cloud resources\n• **Applications** - Web apps, APIs, containers\n• **Configurations** - Misconfigurations, compliance gaps\n\nOur AI correlates findings with threat intelligence to show real-world risk, not just CVSS scores.",
  integration: "CyfroSec integrates with 100+ tools:\n\n• **SIEM** - Splunk, Elastic, Microsoft Sentinel\n• **Ticketing** - Jira, ServiceNow, PagerDuty\n• **Cloud** - AWS, Azure, GCP native APIs\n• **CI/CD** - GitHub Actions, GitLab, Jenkins\n\nAll via REST API and webhooks.",
  deploy: "CyfroSec offers flexible deployment:\n\n• **SaaS** - Cloud-hosted, instant setup\n• **On-Premises** - Full control, air-gap support\n• **Hybrid** - Best of both worlds\n\nOn-prem deploys in under an hour with Docker.",
  pricing: "CyfroSec pricing is based on asset count:\n\n• **Starter** - Up to 100 assets, free\n• **Pro** - Up to 1,000 assets\n• **Enterprise** - Unlimited + dedicated support\n\nWant me to connect you with sales for a custom quote?",
  demo: "I'd be happy to arrange a demo! You can:\n\n• **Self-serve** - Try our free tier at app.cyfrosec.com\n• **Guided demo** - Book a call with our team\n\nWhich would you prefer?",
  default: "Great question! Here's what I can help you with:\n\n• Vulnerability prioritization strategies\n• Attack surface management concepts\n• CyfroSec platform capabilities\n• Integration and deployment options\n\nWhat would you like to know more about?"
};

function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function getResponse(text) {
  const lower = text.toLowerCase();
  if (lower.includes('priorit') || lower.includes('ai') || lower.includes('rank')) return responses.priorit;
  if (lower.includes('fix') || lower.includes('first') || lower.includes('should')) return responses.fix;
  if (lower.includes('attack surface') || lower.includes('asm') || lower.includes('discover')) return responses['attack surface'];
  if (lower.includes('vulnerab') || lower.includes('scan') || lower.includes('find')) return responses.vulnerab;
  if (lower.includes('integrat') || lower.includes('connect') || lower.includes('siem')) return responses.integration;
  if (lower.includes('deploy') || lower.includes('install') || lower.includes('on-prem')) return responses.deploy;
  if (lower.includes('pric') || lower.includes('cost') || lower.includes('plan')) return responses.pricing;
  if (lower.includes('demo') || lower.includes('trial') || lower.includes('try')) return responses.demo;
  return responses.default;
}

function renderContent(text) {
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function AIChatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: "Welcome! I'm CyfroSec AI, your security assistant. Ask me anything about vulnerability management, attack surface monitoring, or how CyfroSec can help secure your organization.", time: formatTime(new Date()) }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  async function sendMessage(text) {
    const messageText = (text || inputMessage).trim();
    if (!messageText) return;

    setMessages(prev => [...prev, { id: prev.length + 1, type: 'user', content: messageText, time: formatTime(new Date()) }]);
    setInputMessage('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

    setMessages(prev => [...prev, { id: prev.length + 1, type: 'bot', content: getResponse(messageText), time: formatTime(new Date()) }]);
    setIsTyping(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      {chatOpen && (
        <div className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] max-w-[20rem] sm:w-80 lg:w-96 bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-surface-200 dark:border-surface-700 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">CyfroSec AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-primary-100 text-[10px] sm:text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 sm:h-72 lg:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 bg-surface-50 dark:bg-surface-900">
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
                      <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
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
          {messages.length === 1 && (
            <div className="px-3 py-2 sm:px-4 bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
              <p className="text-[10px] sm:text-xs text-surface-500 mb-1.5">Suggested questions:</p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {suggestedQuestions.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-surface-100 dark:bg-surface-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-full text-[10px] sm:text-xs text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-2.5 sm:px-4 sm:py-3 bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about security, vulnerabilities..."
                className="flex-1 px-2.5 py-2 sm:px-3 sm:py-2.5 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg sm:rounded-xl text-surface-800 dark:text-surface-200 placeholder-surface-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="p-2 sm:p-2.5 bg-primary-600 hover:bg-primary-700 disabled:bg-surface-300 dark:disabled:bg-surface-600 disabled:cursor-not-allowed text-white rounded-lg sm:rounded-xl transition-colors"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button — hidden when chat is open */}
      <button
        onClick={() => setChatOpen(v => !v)}
        className={`w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group relative ${chatOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        {chatOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#fe904d] rounded-full border-2 border-white"></span>
          </>
        )}
      </button>
    </div>
  );
}
