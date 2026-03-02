import { Eye, Target, Zap } from 'lucide-react';

const outcomes = [
  {
    icon: Eye,
    title: 'See Everything',
    description: 'Get complete visibility across your attack surface. Discover assets, vulnerabilities, and exposures across cloud, on-prem, hybrid, and AI server infrastructure.'
  },
  {
    icon: Target,
    title: 'Prioritize What Matters',
    description: 'Focus on the vulnerabilities that actually pose risk. Context-aware prioritization based on exploitability and business impact — not just CVSS scores.'
  },
  {
    icon: Zap,
    title: 'Remediate Faster',
    description: 'Accelerate your response with AI-powered remediation guidance, agentic AI that executes fixes, and seamless ticketing integrations.'
  }
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Security outcomes that <span className="text-primary-500">matter</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Stop chasing every vulnerability. Start fixing the ones that actually put your business at risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div key={outcome.title} className="group relative p-5 sm:p-6 lg:p-8 bg-surface-50 dark:bg-surface-800 rounded-xl sm:rounded-2xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-50 mb-2">{outcome.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
