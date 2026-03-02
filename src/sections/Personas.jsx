import { Wrench, BarChart3, Shield, Building2 } from 'lucide-react';

const personas = [
  {
    icon: Wrench,
    title: 'Network & IT Engineers',
    description: 'Simple, actionable vulnerability insights without needing deep cybersecurity expertise. Fix issues with clear, step-by-step guidance.',
    highlight: 'Actionable guidance, not CVE dumps'
  },
  {
    icon: BarChart3,
    title: 'IT Managers',
    description: 'Executive dashboards, compliance reports, and KPI tracking. Get visibility into your security posture at a glance.',
    highlight: 'Dashboards & reports with key metrics'
  },
  {
    icon: Shield,
    title: 'Security Teams',
    description: 'Robust agent scanning, Code-to-Cloud coverage, and deep integration with your existing security stack (SIEM, SOAR, ticketing).',
    highlight: 'Robust agent, Code to Cloud'
  },
  {
    icon: Building2,
    title: 'SMB Decision Makers',
    description: 'Cost-effective security that scales with your business. Flexible licensing, easy deployment, and no vendor lock-in.',
    highlight: 'Affordable, flexible licensing'
  }
];

export default function Personas() {
  return (
    <section id="personas" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Who CyfroSec is <span className="text-primary-500">for</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Built for the people who actually manage infrastructure not just the security team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl 3xl:max-w-5xl mx-auto">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div key={persona.title} className="group p-5 sm:p-6 lg:p-8 bg-white dark:bg-surface-800 rounded-xl sm:rounded-2xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-50 mb-3">{persona.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-4">{persona.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {persona.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
