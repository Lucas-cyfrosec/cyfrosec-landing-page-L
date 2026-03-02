import { Brain, Lightbulb, Wrench, MessageSquare } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Contextual Analysis',
    description: 'Goes beyond CVE scores. Correlates exploitability, asset criticality, and exposure to determine real-world risk.'
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Explanations',
    description: 'Every finding comes with a plain-language explanation of why it matters, who is affected, and what could happen if left unpatched.'
  },
  {
    icon: Wrench,
    title: 'Remediation Plans',
    description: 'Generates step-by-step remediation guidance tailored to your environment. Includes commands, config changes, and verification steps.'
  },
  {
    icon: MessageSquare,
    title: 'CyfroAssistant',
    description: 'Ask questions in natural language. Get instant answers about your security posture, generate reports, or walk through a fix.'
  }
];

export default function CyfroAIEngine() {
  return (
    <section id="ai-engine" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 3xl:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#fe904d]/10 dark:bg-[#fe904d]/20 text-[#fe701a] dark:text-[#feb080] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Brain className="w-4 h-4" />
              Cyfro AI Engine
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-4 sm:mb-6">
              Doesn't just detect.
              <span className="block text-primary-500">Explains and fixes.</span>
            </h2>
            <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 mb-6 sm:mb-8 leading-relaxed">
              The Cyfro AI Engine doesn't just find vulnerabilities, it explains why they matter, tells you what to fix first, and shows you exactly how to fix it.
            </p>

            <div className="space-y-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 dark:text-surface-50 mb-1">{cap.title}</h3>
                      <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: AI Visual */}
          <div className="relative">
            <div className="bg-surface-50 dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 overflow-hidden shadow-xl">
              {/* Mock AI chat */}
              <div className="px-5 py-4 border-b border-surface-200 dark:border-surface-700 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-surface-900 dark:text-surface-50">CyfroAssistant</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Online
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="px-4 py-3 bg-primary-500 text-white rounded-2xl rounded-br-md text-sm max-w-[80%]">
                    What's the most critical finding on our web server?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-white dark:bg-surface-700 rounded-2xl rounded-bl-md text-sm max-w-[85%] border border-surface-200 dark:border-surface-600">
                    <p className="text-surface-900 dark:text-surface-50 font-medium mb-2">CVE-2024-3094 — Critical (CVSS 10.0)</p>
                    <p className="text-surface-600 dark:text-surface-400 text-xs mb-3">XZ Utils backdoor affecting your web-server-01. This is actively exploited in the wild and allows remote code execution.</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">Critical</span>
                      <span className="px-2 py-0.5 bg-[#fe904d]/10 dark:bg-[#fe904d]/20 text-[#fe701a] dark:text-[#feb080] rounded text-xs font-medium">Exploited</span>
                    </div>
                  </div>
                </div>

                {/* AI fix suggestion */}
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl rounded-bl-md text-sm max-w-[85%] border border-emerald-200 dark:border-emerald-800">
                    <p className="text-emerald-800 dark:text-emerald-200 font-medium mb-1">Recommended fix:</p>
                    <code className="block text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-2 rounded mt-1 font-mono">sudo apt update && sudo apt upgrade xz-utils</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
