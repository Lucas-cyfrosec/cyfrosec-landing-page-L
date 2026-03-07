import { EyeOff, Lock, DollarSign, ShieldAlert } from 'lucide-react';
import { BentoCard, BentoGrid } from '../components/ui/bento-grid';

const problems = [
  {
    Icon: EyeOff,
    eyebrow: 'Visibility Gap',
    name: 'Blind Spots Everywhere',
    description:
      'Public-IP-only scanning misses internal services, shadow IT, and container workloads spread across AWS, on-prem, and Kubernetes.',
    impact:
      'Teams think they have coverage, but entire classes of assets stay invisible until attackers interact with them first.',
    metricLabel: 'Coverage Blind Spot',
    metricValue: 'Public IPs only',
    accent: '3 155 224',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: ShieldAlert,
    eyebrow: 'Usability Bottleneck',
    name: 'Built for Security Experts Only',
    description:
      'Teams get massive CVE lists with no exploitability context, remediation steps, or plain-language guidance for non-specialists.',
    impact:
      'Routine remediation decisions get escalated to security experts, slowing fixes and creating avoidable queues.',
    metricLabel: 'Report Dump',
    metricValue: '2,000+ CVEs',
    accent: '254 144 77',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: DollarSign,
    eyebrow: 'Pricing Friction',
    name: 'Rigid, Expensive Licensing',
    description:
      'Per-IP pricing punishes growth. Add 50 servers for a new project and the scanner bill jumps faster than the infrastructure spend.',
    impact:
      'Security coverage becomes a budgeting problem, so teams delay rollout or leave assets out of scope to avoid overages.',
    metricLabel: 'Overage Trigger',
    metricValue: '+50 servers',
    accent: '20 184 166',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3',
  },
  {
    Icon: Lock,
    eyebrow: 'Signal Collapse',
    name: 'Alert Fatigue, No Prioritization',
    description:
      'Weekly scans flood teams with thousands of low-value alerts, burying the few internet-facing issues that actually need immediate action.',
    impact:
      'Critical fixes get lost in the noise, and the team spends time sorting alerts instead of reducing real exposure.',
    metricLabel: 'Alert Volume',
    metricValue: '5,000 findings',
    accent: '139 92 246',
    href: '#solutions',
    cta: 'See how we fix this',
    className: 'lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3',
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
            Why Traditional Vulnerability Tools <span className="text-primary-500">Fail</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Legacy tools weren't built for today's attack surface. Here's what teams are struggling with.
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
      </div>
    </section>
  );
}
