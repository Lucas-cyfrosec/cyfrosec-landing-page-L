'use client';

import { Eye, Target, Zap } from 'lucide-react';
import type { ComponentType } from 'react';
import { FeatureGrid } from '../ui/modern-feature-grid';
import { useTranslation } from '@/src/i18n';

const OUTCOME_ICONS: ComponentType<{ className?: string }>[] = [Eye, Target, Zap];

export default function Outcomes() {
  const { t } = useTranslation();

  const features = t.outcomes.items.map((item, i) => ({
    Icon: OUTCOME_ICONS[i],
    title: item.title,
    description: item.description,
  }));

  return (
    <FeatureGrid
      id="outcomes"
      sectionTitle={t.outcomes.title}
      sectionDescription={
        <span>
          {t.outcomes.descriptionLine1}
          <br />
          {t.outcomes.descriptionLine2}
        </span>
      }
      features={features}
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-surface-900"
    />
  );
}
