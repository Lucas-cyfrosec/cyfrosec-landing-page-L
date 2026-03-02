import { EyeOff, Lock, DollarSign, ShieldAlert } from 'lucide-react';

const problems = [
  {
    icon: EyeOff,
    title: 'Blind Spots Everywhere',
    description: 'A company runs workloads across AWS, an on-prem data center, and a Kubernetes cluster — but their scanner only covers public IPs. Internal services, shadow IT, and container workloads are invisible until an attacker finds them first.',
    color: 'red'
  },
  {
    icon: ShieldAlert,
    title: 'Built for Security Experts Only',
    description: 'A network engineer gets a scan report with 2,000+ CVEs ranked by CVSS score. No context on which ones are actually exploitable, no remediation steps, no plain-language explanation. They escalate to the security team, adding days to the response.',
    color: 'amber'
  },
  {
    icon: DollarSign,
    title: 'Rigid, Expensive Licensing',
    description: 'An SMB pays per-IP annually. When they add 50 servers for a new project, the vendor charges overages. They end up paying more for the vulnerability scanner than for the infrastructure it protects.',
    color: 'orange'
  },
  {
    icon: Lock,
    title: 'Alert Fatigue, No Prioritization',
    description: 'A team receives 5,000 vulnerability alerts after a weekly scan. 90% are informational or low-risk. Buried in the noise, a critical RCE on an internet-facing server sits unpatched for weeks because nobody could find it in time.',
    color: 'red'
  }
];

const colorMap = {
  red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', icon: 'text-red-600 dark:text-red-400' },
  amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-300', icon: 'text-amber-600 dark:text-amber-400' },
  orange: { bg: 'bg-[#fe904d]/10 dark:bg-[#fe904d]/20', text: 'text-[#fe701a] dark:text-[#feb080]', icon: 'text-[#fe701a] dark:text-[#feb080]' }
};

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Why Traditional Vulnerability Tools <span className="text-primary-500">Fail</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Legacy tools weren't built for today's attack surface. Here's what teams are struggling with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl 3xl:max-w-5xl mx-auto">
          {problems.map((problem) => {
            const colors = colorMap[problem.color];
            const Icon = problem.icon;
            return (
              <div key={problem.title} className="p-5 sm:p-6 lg:p-8 bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl border border-surface-200 dark:border-surface-700">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-50 mb-3">{problem.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
