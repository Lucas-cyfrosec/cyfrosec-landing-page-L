'use client';

import { Eye, Target, Zap } from 'lucide-react';
import { FeatureGrid } from '../ui/modern-feature-grid';
import type { ComponentType } from 'react';

interface OutcomeFeature {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const outcomes: OutcomeFeature[] = [
  {
    Icon: Eye,
    title: 'See Everything',
    description: 'Get complete visibility across your attack surface. Discover assets, vulnerabilities, misconfigurations, secrets across AI servers network and infrastructure assets.'
  },
  {
    Icon: Target,
    title: 'Prioritize What Matters',
    description: 'Focus on the vulnerabilities that actually pose risk. Context-aware prioritization  and correlation based on exploitability and impact (not just CVSS scores).'
  },
  {
    Icon: Zap,
    title: 'Understand & Remediate Faster',
    description: 'Accelerate your response with AI-powered remediation guidance, which could be understood from management executives to engineers.'
  }
];

export default function Outcomes() {
  return (
    <FeatureGrid
      id="outcomes"
      sectionTitle="Security outcomes that matter"
      sectionDescription={<>Stop chasing every alert and finding.<br />Start fixing the ones that actually put your business at risk.</>}
      features={outcomes}
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-surface-900"
    />
  );
}
