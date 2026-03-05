import { EyeOff, Lock, DollarSign, ShieldAlert } from 'lucide-react';
import { BentoCard, BentoGrid } from '../components/ui/bento-grid';

const problems = [
  {
    Icon: EyeOff,
    name: 'Blind Spots Everywhere',
    description:
      'A company runs workloads across AWS, an on-prem data center, and a Kubernetes cluster — but their scanner only covers public IPs. Internal services, shadow IT, and container workloads are invisible until an attacker finds them first.',
    href: '#solution',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-red-600/5 blur-2xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-blind" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-blind)" className="text-red-500" />
        </svg>
        <EyeOff className="absolute right-8 bottom-8 w-32 h-32 text-red-500/5" />
      </div>
    ),
    iconClassName: 'text-red-500 dark:text-red-400',
  },
  {
    Icon: ShieldAlert,
    name: 'Built for Security Experts Only',
    description:
      'A network engineer gets a scan report with 2,000+ CVEs ranked by CVSS score. No context on which ones are actually exploitable, no remediation steps, no plain-language explanation. They escalate to the security team, adding days to the response.',
    href: '#solution',
    cta: 'See how we fix this',
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3',
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-amber-600/5 blur-2xl" />
        <ShieldAlert className="absolute right-4 bottom-6 w-36 h-36 text-amber-500/5" />
      </div>
    ),
    iconClassName: 'text-amber-500 dark:text-amber-400',
  },
  {
    Icon: DollarSign,
    name: 'Rigid, Expensive Licensing',
    description:
      'An SMB pays per-IP annually. When they add 50 servers for a new project, the vendor charges overages. They end up paying more for the vulnerability scanner than for the infrastructure it protects.',
    href: '#solution',
    cta: 'See how we fix this',
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3',
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-0 w-56 h-56 rounded-full bg-orange-500/10 blur-3xl" />
        <DollarSign className="absolute right-4 bottom-4 w-28 h-28 text-orange-500/5" />
      </div>
    ),
    iconClassName: 'text-orange-500 dark:text-orange-400',
  },
  {
    Icon: Lock,
    name: 'Alert Fatigue, No Prioritization',
    description:
      'A team receives 5,000 vulnerability alerts after a weekly scan. 90% are informational or low-risk. Buried in the noise, a critical RCE on an internet-facing server sits unpatched for weeks because nobody could find it in time.',
    href: '#solution',
    cta: 'See how we fix this',
    className: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3',
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-10 w-56 h-56 rounded-full bg-red-500/10 blur-3xl" />
        <Lock className="absolute right-4 bottom-4 w-28 h-28 text-red-500/5" />
      </div>
    ),
    iconClassName: 'text-red-500 dark:text-red-400',
  },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Why Traditional Vulnerability Tools <span className="text-primary-500">Fail</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Legacy tools weren't built for today's attack surface. Here's what teams are struggling with.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-2 max-w-5xl mx-auto">
          {problems.map((problem) => (
            <BentoCard
              key={problem.name}
              name={problem.name}
              description={problem.description}
              href={problem.href}
              cta={problem.cta}
              Icon={(props) => <problem.Icon {...props} className={`${props.className ?? ''} ${problem.iconClassName}`} />}
              background={problem.background}
              className={problem.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
