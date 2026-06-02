'use client';

import { Brain, Lightbulb, Wrench, MessageSquare } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/src/i18n';

const CAPABILITY_ICONS: ComponentType<{ className?: string }>[] = [Brain, Lightbulb, Wrench, MessageSquare];

export default function CyfroAIEngine() {
  const { t } = useTranslation();
  const { chat } = t.aiEngine;

  return (
    <section id="ai-engine" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 3xl:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#fe904d]/10 dark:bg-[#fe904d]/20 text-[#fe701a] dark:text-[#feb080] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Brain className="w-4 h-4" />
              {t.aiEngine.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-4 sm:mb-6">
              {t.aiEngine.titlePre}
              <span className="block text-primary-500 whitespace-nowrap">{t.aiEngine.titleHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 mb-6 sm:mb-8 leading-relaxed">
              {t.aiEngine.description}
            </p>

            <div className="space-y-6">
              {t.aiEngine.capabilities.map((cap, i) => {
                const Icon = CAPABILITY_ICONS[i];
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

          {/* Right: AI Visual — always LTR (technical/scan data must stay left-to-right) */}
          <div className="relative ps-6 lg:ps-10" dir="ltr">
            <div className="bg-surface-50 dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 overflow-hidden shadow-xl">
              {/* Mock AI chat header */}
              <div className="px-5 py-4 border-b border-surface-200 dark:border-surface-700 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-surface-900 dark:text-surface-50">{chat.assistantName}</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {chat.online}
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4 min-h-[500px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="px-4 py-3 bg-primary-500 text-white rounded-2xl rounded-br-md text-sm max-w-[80%]">
                    {chat.userMessage}
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-white dark:bg-surface-700 rounded-2xl rounded-bl-md text-sm max-w-[85%] border border-surface-200 dark:border-surface-600">
                    <p className="text-surface-900 dark:text-surface-50 font-medium mb-2">{chat.analysisTitle}</p>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">{chat.scanWindowLabel}</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-3">
                      <li>Fingerprint: 2026-03-14T16:27:12Z</li>
                      <li>Port scan: 2026-03-14T15:29:05Z</li>
                      <li>Asset discovery: 2026-03-14T16:40:40Z</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">{chat.keyFindingsLabel}</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-2">
                      <li>{chat.totalVulns}</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">{chat.topVulnsLabel}</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside mb-3">
                      <li><span className="text-red-500 dark:text-red-400 font-semibold">CVE-2023-6879</span> | CRITICAL | libaom3 | 3.6.0-1+deb12u2 | Title: aom: heap-buffer-overflow on frame size change</li>
                      <li><span className="text-red-500 dark:text-red-400 font-semibold">CVE-2025-7458</span> | CRITICAL | libsqlite3-0 | 3.40.1-2+deb12u2 | Title: sqlite: SQLite integer overflow</li>
                    </ul>
                    <p className="text-surface-700 dark:text-surface-300 text-xs font-medium mb-1">{chat.fixesLabel}</p>
                    <ul className="text-xs text-surface-600 dark:text-surface-400 space-y-1 list-disc list-inside">
                      <li>{chat.fix1}</li>
                      <li>{chat.fix2}</li>
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
