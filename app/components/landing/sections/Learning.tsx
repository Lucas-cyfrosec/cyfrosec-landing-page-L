'use client';

import { Shield, Users, Globe } from 'lucide-react';
import ShaderBackground from '../ShaderBackground';
import { useTranslation } from '@/src/i18n';

export default function Learning() {
  const { t } = useTranslation();

  return (
    <section
      id="learning"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 relative overflow-hidden bg-surface-50 dark:bg-[var(--bg-overlay)] min-h-screen flex flex-col justify-center"
    >
      <ShaderBackground className="hidden dark:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-white mb-3 sm:mb-4">
            {t.learning.title}{' '}
            <span className="text-primary-400">CyfroSec</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            {t.learning.subtitle}
          </p>
        </div>

        <div className="max-w-4xl 3xl:max-w-5xl mx-auto">
          {/* CEO Message */}
          <div className="rounded-xl sm:rounded-2xl border border-surface-200 dark:border-white/10 shadow-2xl shadow-primary-500/10 backdrop-blur-xl bg-white dark:bg-surface-900/85 p-6 sm:p-8 lg:p-10">
            <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base lg:text-lg text-surface-800 dark:text-white leading-relaxed">
              {t.learning.ceoMessage}
            </pre>
          </div>

          {/* Key Points Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="text-center p-4 rounded-xl bg-surface-100 dark:bg-surface-900/80 backdrop-blur-xl border border-surface-200 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 bg-primary-500/20 text-primary-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{t.learning.mission.title}</h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                {t.learning.mission.description}
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-surface-100 dark:bg-surface-900/80 backdrop-blur-xl border border-surface-200 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 bg-primary-500/20 text-primary-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{t.learning.team.title}</h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                {t.learning.team.description}
              </p>
            </div>
            <div className="text-center p-4 rounded-xl bg-surface-100 dark:bg-surface-900/80 backdrop-blur-xl border border-surface-200 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 bg-primary-500/20 text-primary-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{t.learning.approach.title}</h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                {t.learning.approach.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
