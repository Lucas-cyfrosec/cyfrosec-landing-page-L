'use client';

import { Bot, Radar, MessageSquare, Network, ShieldCheck, Brain, Scale, Code2 } from 'lucide-react';
import type { ComponentType } from 'react';
import RadialOrbitalTimeline, { type TimelineItem } from '../RadialOrbitalTimeline';
import { useTranslation } from '@/src/i18n';

// Non-translatable metadata per timeline node — kept here, merged with dict text
const TIMELINE_META = [
  { id: 1, icon: Bot,          category: 'Agent',       relatedIds: [3, 6, 7], status: 'completed' as const, energy: 95 },
  { id: 2, icon: Brain,        category: 'AI',          relatedIds: [4, 6, 7], status: 'completed' as const, energy: 90 },
  { id: 3, icon: Radar,        category: 'Discovery',   relatedIds: [1, 5, 7], status: 'completed' as const, energy: 85 },
  { id: 4, icon: MessageSquare,category: 'AI',          relatedIds: [2, 6, 7], status: 'completed' as const, energy: 75 },
  { id: 5, icon: Network,      category: 'Network',     relatedIds: [3, 1, 7], status: 'completed' as const, energy: 88 },
  { id: 6, icon: ShieldCheck,  category: 'Assessment',  relatedIds: [1, 2, 7], status: 'completed' as const, energy: 92 },
  { id: 7, icon: Scale,        category: 'Compliance',  relatedIds: [2, 3, 5, 6], status: 'completed' as const, energy: 84 },
  { id: 8, icon: Code2,        category: 'Code Security', relatedIds: [4, 2, 6], status: 'completed' as const, energy: 88 },
] as const;

export default function SolutionOverview() {
  const { t } = useTranslation();

  const timelineItems: TimelineItem[] = t.solution.items.map((item, i) => {
    const meta = TIMELINE_META[i];
    return {
      id: meta.id,
      icon: meta.icon,
      category: meta.category,
      relatedIds: [...meta.relatedIds],
      status: meta.status,
      energy: meta.energy,
      title: item.title,
      date: item.date,
      content: item.content,
      capabilities: [...item.capabilities],
      keyBenefits: item.keyBenefits.map((b) => ({ title: b.title, description: b.description })),
    };
  });

  return (
    <section id="solutions" className="py-12 sm:py-16 lg:py-24 3xl:py-32 relative overflow-hidden bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {t.solution.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            {t.solution.titlePre}{' '}
            <span className="text-primary-500">{t.solution.titleBrand}</span>{' '}
            {t.solution.titlePost}
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            {t.solution.description}
          </p>
        </div>

        <RadialOrbitalTimeline items={timelineItems} />
        <p className="text-center text-sm text-surface-300 dark:text-surface-300 mt-4 mb-4">{t.solution.tapHint}</p>
      </div>
    </section>
  );
}
