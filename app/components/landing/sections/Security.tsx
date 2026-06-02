'use client';

import { Shield, Key, FileText, Globe, Users, Database } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/src/i18n';

const SECURITY_ICONS: ComponentType<{ className?: string }>[] = [
  Shield, Globe, Users, FileText, Key, Database,
];

export default function Security() {
  const { t } = useTranslation();

  return (
    <section id="security" className="py-12 sm:py-16 lg:py-24 3xl:py-32 min-h-screen flex flex-col justify-center bg-white dark:bg-surface-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            {t.security.titlePre}{' '}
            <span className="text-primary-500">{t.security.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            {t.security.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl 3xl:max-w-6xl mx-auto">
          {t.security.items.map((feature, i) => {
            const Icon = SECURITY_ICONS[i];
            return (
              <div key={feature.title} className="p-4 sm:p-6 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-surface-900 dark:text-surface-50">{feature.title}</h3>
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
