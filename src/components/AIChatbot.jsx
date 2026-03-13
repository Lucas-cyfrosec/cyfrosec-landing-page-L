import { useState, useRef, useEffect } from 'react';
import { X, Bot, ChevronRight } from 'lucide-react';

const suggestedQuestions = [
  'Is CyfroSec agent-based or agentless?',
  'How often does CyfroSec scan for vulnerabilities?',
  'What operating systems and cloud platforms are supported?',
  'What permissions does the agent require?',
  'How does CyfroSec handle false positives?',
  'Does CyfroSec support SSO and RBAC?',
  'Is CyfroSec compliant with SOC 2, ISO 27001, GDPR?',
  'Can I run CyfroSec in an air-gapped environment?',
  'How long does deployment take?',
  'Contact support'
];

const responses = {
  agent: "CyfroSec supports both. Our lightweight agent provides deep visibility for on-prem systems, while agentless scanning covers cloud resources and network assets. You can mix and match based on your needs.",
  scan: "Scanning frequency is configurable per asset or asset group. Options range from continuous real-time monitoring to scheduled daily, weekly, or monthly scans. Most customers use continuous scanning for critical assets and scheduled scans for lower-priority systems.",
  os: "CyfroSec supports **Windows Server 2016+**, **Ubuntu 18.04+**, **Debian 10+**, **CentOS 7+**, **RHEL 7+**, and most Linux distributions. For cloud, we integrate with **AWS**, **Azure**, **GCP**, and **Kubernetes** environments.",
  permissions: "The agent runs as a standard user for most operations. Root/admin access is only needed for certain deep scans (e.g., kernel configuration checks). All permissions are documented, and we support least-privilege deployments.",
  falsePositive: "Our AI-powered analysis significantly reduces false positives by correlating findings with actual exploitability data. You can also suppress or tune findings with full audit trail.",
  sso: "Yes. We support **SAML 2.0**, **OIDC**, and direct integration with major identity providers (Okta, Azure AD, Google Workspace). Role-based access control lets you define granular permissions per team, asset group, or organization.",
  compliance: "Our SaaS platform is **SOC 2 Type II** certified and we maintain **ISO 27001** compliance. For GDPR, we offer EU data residency options and full data processing agreements. On-premises deployment gives you complete control.",
  airgap: "Yes. Our on-premises deployment supports fully air-gapped environments. Vulnerability databases and threat intelligence can be updated via offline bundle transfer.",
  deploy: "**SaaS deployment** takes minutes — just sign up and connect your first source. **On-premises deployment** typically takes less than an hour with our Docker-based installer.",
  integration: "We offer **100+ pre-built integrations** including:\n\n• **SIEM** - Splunk, Elastic, Sentinel\n• **SOAR** - XSOAR, Splunk SOAR\n• **Ticketing** - Jira, ServiceNow\n• **Cloud** - AWS, Azure, GCP\n• **CI/CD** - GitHub Actions, GitLab, Jenkins",
  support: "You can reach our support team at:\n\n• **Email** - support@cyfrosec.com\n• **Chat** - Available in your dashboard\n• **Docs** - docs.cyfrosec.com\n\nEnterprise customers have access to a dedicated support engineer.",
  default: "Great question! Here's what I can help you with:\n\n• Agent vs agentless deployment\n• Scanning frequency and OS support\n• Compliance and SSO/RBAC\n• Integrations and deployment options\n\nClick any question below to get started."
};

function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function getResponse(text) {
  const lower = text.toLowerCase();
  if (lower.includes('agent-based') || lower.includes('agentless') || lower.includes('agent based')) return responses.agent;
  if (lower.includes('how often') || lower.includes('scan for') || lower.includes('frequency')) return responses.scan;
  if (lower.includes('operating system') || lower.includes('cloud platform') || lower.includes('os support')) return responses.os;
  if (lower.includes('permission')) return responses.permissions;
  if (lower.includes('false positive')) return responses.falsePositive;
  if (lower.includes('sso') || lower.includes('rbac') || lower.includes('saml') || lower.includes('oidc')) return responses.sso;
  if (lower.includes('compliant') || lower.includes('soc 2') || lower.includes('iso') || lower.includes('gdpr')) return responses.compliance;
  if (lower.includes('air-gap') || lower.includes('air gap') || lower.includes('airgap')) return responses.airgap;
  if (lower.includes('deployment') || lower.includes('how long') || lower.includes('install')) return responses.deploy;
  if (lower.includes('integration') || lower.includes('available')) return responses.integration;
  if (lower.includes('contact') || lower.includes('support')) return responses.support;
  return responses.default;
}

function renderContent(text) {
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function AIChatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: "Welcome! I'm Cyfrosec Bot, your security assistant. Click any question below to learn more about how CyfroSec can help secure your organization.", time: formatTime(new Date()) }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  async function sendMessage(text) {
    const messageText = text.trim();
    if (!messageText) return;

    setMessages(prev => [...prev, { id: prev.length + 1, type: 'user', content: messageText, time: formatTime(new Date()) }]);
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

    setMessages(prev => [...prev, { id: prev.length + 1, type: 'bot', content: getResponse(messageText), time: formatTime(new Date()) }]);
    setIsTyping(false);
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      {chatOpen && (
        <div className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] max-w-[20rem] sm:w-80 lg:w-96 bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-surface-200 dark:border-surface-700 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0a1628] to-[#0d1f3c] px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-full flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}favicon.ico`} alt="" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Cyfrosec Bot</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-blue-300 text-[10px] sm:text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
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

          {/* Suggested Questions — always visible */}
          {!isTyping && (
            <div className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
              <div className="px-3 pt-2.5 pb-1 sm:px-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <p className="text-[10px] sm:text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide">
                  Frequently asked
                </p>
              </div>

              <div className="relative">
                <div
                  className="flex flex-col px-2 sm:px-3 gap-0.5 max-h-40 overflow-y-auto pb-12"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {suggestedQuestions.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="flex items-center justify-between gap-2 px-2.5 py-1.5 sm:py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 group transition-colors text-left"
                    >
                      <span className="text-[10px] sm:text-xs text-surface-600 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 leading-snug">
                        {q}
                      </span>
                      <ChevronRight className="w-3 h-3 text-surface-300 dark:text-surface-600 group-hover:text-primary-500 flex-shrink-0 transition-colors" />
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

      {/* Toggle Button — hidden when chat is open */}
      <button
        onClick={() => setChatOpen(v => !v)}
        className={`w-12 h-12 sm:w-14 sm:h-14 bg-[#0a1628] hover:bg-[#0d1f3c] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group relative ${chatOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        {chatOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <>
            <img src={`${import.meta.env.BASE_URL}favicon.ico`} alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#fe904d] rounded-full border-2 border-white"></span>
          </>
        )}
      </button>
    </div>
  );
}
