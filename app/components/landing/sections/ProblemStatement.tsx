'use client';

import { EyeOff, Lock, DollarSign, ShieldAlert, Network, ScanSearch, Fingerprint, Code2 } from 'lucide-react';
import type { ComponentType } from 'react';
import { BentoCard, BentoGrid } from '../ui/bento-grid';
import { useTranslation } from '@/src/i18n';

type IconName = 'EyeOff' | 'ShieldAlert' | 'DollarSign' | 'Lock';
const ICON_MAP: Record<IconName, ComponentType<{ className?: string }>> = {
  EyeOff, ShieldAlert, DollarSign, Lock,
};

const CARD_META = [
  { icon: 'EyeOff' as IconName, accent: '3 155 224', href: '#solutions', className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2' },
  { icon: 'ShieldAlert' as IconName, accent: '254 144 77', href: '#solutions', className: 'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2' },
  { icon: 'DollarSign' as IconName, accent: '20 184 166', href: '#solutions', className: 'lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3' },
  { icon: 'Lock' as IconName, accent: '139 92 246', href: '#solutions', className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3' },
];

const BRINGS_ICONS = [Network, ScanSearch, Fingerprint, Code2];

export default function ProblemStatement() {
  const { t, lang } = useTranslation();
  const isAr = lang === 'ar';

  return (
    <section
      id="problem"
      className="bg-surface-50 py-12 sm:py-16 lg:py-20 3xl:py-24 dark:bg-surface-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="mb-8 text-center sm:mb-10">
          <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            {t.problem.heading.pre}{' '}
            <span className="text-primary-500">{t.problem.heading.highlight}</span>
            {t.problem.heading.post}
          </h2>
          <p dir={isAr ? 'rtl' : undefined} className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            {t.problem.subtitle}
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-2 max-w-6xl mx-auto">
          {t.problem.cards.map((card, i) => {
            const meta = CARD_META[i];
            const Icon = ICON_MAP[meta.icon];
            return (
              <BentoCard
                key={card.name}
                name={card.name}
                description={card.description}
                impact={card.impact}
                href={meta.href}
                cta={card.cta}
                eyebrow={card.eyebrow}
                metricLabel={card.metricLabel}
                metricValue={card.metricValue}
                accent={meta.accent}
                Icon={Icon}
                className={meta.className}
              />
            );
          })}
        </BentoGrid>

        {/* CyfroSec Brings Together */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 dir={isAr ? 'rtl' : undefined} className="text-xl sm:text-2xl lg:text-3xl font-bold">
              {t.problem.brings.titlePre}
              <span className="text-primary-400">{t.problem.brings.titleBrand}</span>
              {t.problem.brings.titleMid}
              <span className="text-surface-900 dark:text-white">{t.problem.brings.titlePost}</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.problem.brings.items.map((item, i) => {
              const Icon = BRINGS_ICONS[i];
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 rounded-xl border border-surface-200 dark:border-white/10 bg-white dark:bg-surface-900/50 backdrop-blur-sm gap-3 hover:border-primary-500/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 dir={isAr ? 'rtl' : undefined} className="font-semibold text-surface-900 dark:text-white text-base">{item.title}</h4>
                  <p dir={isAr ? 'rtl' : undefined} className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
