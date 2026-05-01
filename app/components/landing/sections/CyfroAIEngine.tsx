import { Brain, Lightbulb, Wrench, MessageSquare } from 'lucide-react';
import type { ComponentType } from 'react';

interface Capability {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: Brain,
    title: 'Contextual Analysis and Correlation',
    description: 'Goes beyond CVE scores. Correlates exploitability, asset criticality, and exposure to determine real-world risk.'
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Explanations and Prioritization',
    description: 'Every finding comes with an easy to understand explanation of why it matters, who is affected, and what to prioritize.'
  },
  {
    icon: Wrench,
    title: 'Remediation Plans',
    description: 'Generates step-by-step remediation guidance tailored to your environment. Includes commands, config changes, and clean steps.'
  },
  {
    icon: MessageSquare,
    title: 'CyfroAssistant',
    description: 'Ask questions in natural language and get instant answers about your security posture, scan settings, reports, or agents.'
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
              CyfroAI Engine
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-4 sm:mb-6">
              Doesn&apos;t just detect.
              <span className="block text-primary-500 whitespace-nowrap">Explains and recommends fixes.</span>
            </h2>
            <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 mb-6 sm:mb-8 leading-relaxed">
              The CyfroAI Engine doesn&apos;t just find vulnerabilities, it explains why they matter, tells you what to fix first, and shows you exactly how to fix it.
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
          <div className="relative pl-6 lg:pl-10">
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

              <div className="p-5 space-y-4 min-h-[500px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="px-4 py-3 bg-primary-500 text-white rounded-2xl rounded-br-md text-sm max-w-[80%]">
                    Analyze latest security scan.
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-white dark:bg-surface-700 rounded-2xl rounded-bl-md text-sm max-w-[85%] border border-surface-200 dark:border-surface-600">
                    <p className="text-surface-900 dark:text-surface-50 font-medium mb-2">Analysis: Latest Security Scan (Fingerprint + Asset Discovery)</p>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">Scan window</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-3">
                      <li>Fingerprint: 2026-03-14T16:27:12Z</li>
                      <li>Port scan: 2026-03-14T15:29:05Z</li>
                      <li>Asset discovery: 2026-03-14T16:40:40Z</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">Key findings</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-2">
                      <li>Total vulnerabilities (fingerprint): 1748</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">Top vulnerabilities (sampled highlights from the latest scan)</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-3">
                      <li><span className="text-red-500 dark:text-red-400 font-semibold">CVE-2023-6879</span> | CRITICAL | libaom3 | 3.6.0-1+deb12u2 | Title: aom: heap-buffer-overflow on frame size change</li>
                      <li><span className="text-red-500 dark:text-red-400 font-semibold">CVE-2025-7458</span> | CRITICAL | libsqlite3-0 | 3.40.1-2+deb12u2 | Title: sqlite: SQLite integer overflow</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">Notes on fixes and mitigations observed</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside">
                      <li>Some critical/high CVEs show a fixed package version available (e.g., OpenSSL 3.0.18-1~deb12u2; libpng fixes for certain entries; h11 fixed to 0.16.0).</li>
                      <li>Several high/severe issues in glibc family components (memalign overflow) and several Linux libc-dev entries currently have no listed fixes in this scan, indicating urgent patch-tracking is needed.</li>
                    </ul>
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
