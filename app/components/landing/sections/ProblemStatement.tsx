'use client';

import { EyeOff, Lock, DollarSign, ShieldAlert, Network, ScanSearch, Fingerprint, Code2 } from 'lucide-react';
import { BentoCard, BentoGrid } from '../ui/bento-grid';

const problems = [
  {
    Icon: EyeOff,
    eyebrow: 'Confusion & lack of focus',
    name: 'No Contextual Prioritization',
    description:
      'Team spends time sorting alerts instead of reducing real exposure. Prioritized findings and remediation steps get overlooked.',
    impact:
      "Critical fixes get lost in the noise and tools don't understand your infrastructure's context to prioritize accordingly.",
    metricLabel: 'Critical Vulnerabilities',
    metricValue: '50+',
    accent: '3 155 224',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: ShieldAlert,
    eyebrow: 'Usability Bottleneck',
    name: 'Built for Security Experts Only',
    description:
      'Teams get massive CVE, misconfigurations and insecure packages lists with no exploitability context, remediation steps or guidance which could be understood by all stakeholders.',
    impact:
      'Routine analysis and remediation decisions get escalated to multiple experts who are on a time crunch thus causing delayed analysis, fixes and avoidable queues.',
    metricLabel: 'Report Dump',
    metricValue: '500+ CVEs, 150+ exposed secrets and 300+ insecure packages',
    accent: '254 144 77',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: DollarSign,
    eyebrow: 'Pricing Friction',
    name: 'Rigid, Expensive Pricing',
    description:
      'Add few more servers and dependencies for a new project and the bills for security tools jump faster than the infrastructure spend.',
    impact:
      'Essential security coverage becomes a budgeting problem, so teams delay rollout or leave assets out of scope to avoid overages.',
    metricLabel: 'Overage Trigger',
    metricValue: '4+ servers and 30+ dependencies',
    accent: '20 184 166',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3',
  },
  {
    Icon: Lock,
    eyebrow: 'Alert Fatigue',
    name: 'Visibility Gap',
    description:
      'Frequent scans flood teams with thousands of low-value alerts which are hard to analyse.',
    impact:
      'Impacting issues that actually need immediate action get buried in the long list of alerts.',
    metricLabel: 'Alert Volume',
    metricValue: '10000+ alerts and 500+ reports',
    accent: '139 92 246',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3',
  },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="bg-surface-50 py-12 sm:py-16 lg:py-20 3xl:py-24 dark:bg-surface-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Why Traditional Security Tools <span className="text-primary-500">Fail</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Legacy tools weren&apos;t built for today&apos;s attack surface. Here&apos;s what teams are struggling with.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-2 max-w-6xl mx-auto">
          {problems.map((problem) => (
            <BentoCard
              key={problem.name}
              name={problem.name}
              description={problem.description}
              impact={problem.impact}
              href={problem.href}
              cta={problem.cta}
              eyebrow={problem.eyebrow}
              metricLabel={problem.metricLabel}
              metricValue={problem.metricValue}
              accent={problem.accent}
              Icon={problem.Icon}
              className={problem.className}
            />
          ))}
        </BentoGrid>

        {/* CyfroSec Brings Together */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-primary-400">CyfroSec</span>{' '}Brings{' '}
              <span className="text-surface-900 dark:text-white">Together</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                Icon: Network,
                title: 'Network Visibility',
                description: 'Understand everything connected to your environment in real time',
              },
              {
                Icon: ScanSearch,
                title: 'Asset Discovery',
                description: 'Know what exists, what matters, and what\'s exposed',
              },
              {
                Icon: Fingerprint,
                title: 'Deep Fingerprinting',
                description: 'Identify technologies, services, and hidden risks with precision',
              },
              {
                Icon: Code2,
                title: 'Code Security',
                description: 'Secure applications from development to deployment',
              },
            ].map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-surface-200 dark:border-white/10 bg-white dark:bg-surface-900/50 backdrop-blur-sm gap-3 hover:border-primary-500/40 transition-colors duration-300"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400"
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-surface-900 dark:text-white text-base">{title}</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
