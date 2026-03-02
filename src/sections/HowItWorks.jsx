import { Plug, Search, ListOrdered, Wrench, BarChart3 } from 'lucide-react';

const steps = [
  { icon: Plug, number: '01', title: 'Connect your sources', description: 'Deploy agents or connect via API. Works with cloud providers, on-prem infrastructure, and third-party security tools.', time: '10 minutes' },
  { icon: Search, number: '02', title: 'Discover your assets', description: 'Automatic discovery maps your entire attack surface. Every device, service, and configuration.', time: '30 minutes' },
  { icon: ListOrdered, number: '03', title: 'See prioritized risks', description: 'AI-powered analysis correlates vulnerabilities with business context. Know exactly what to fix first.', time: 'Real-time' },
  { icon: Wrench, number: '04', title: 'Remediate with guidance', description: 'Get actionable remediation steps. Create tickets automatically. Verify fixes with rescan.', time: 'Continuous' },
  { icon: BarChart3, number: '05', title: 'Track improvement', description: 'Monitor your security posture over time. Prove ROI with executive dashboards.', time: 'Ongoing' }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Get started in <span className="text-primary-500">minutes</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            From deployment to actionable insights in under an hour. No complex setup required.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-[#fe904d] hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={`relative flex flex-col sm:flex-row gap-6 lg:gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-surface-900 transform -translate-x-1/2 hidden sm:block z-10"></div>

                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="sm:ml-16 lg:ml-0 p-6 bg-surface-50 dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                      <div className={`flex items-start gap-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-500">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <span className="text-sm font-bold text-primary-500">{step.number}</span>
                            <h3 className="text-xl font-bold text-surface-900 dark:text-surface-50">{step.title}</h3>
                          </div>
                          <p className={`text-surface-600 dark:text-surface-400 mb-3 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>{step.description}</p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fe904d]/10 dark:bg-[#fe904d]/20 text-[#fe701a] dark:text-[#feb080] rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-50 to-[#fe904d]/10 dark:from-primary-900/30 dark:to-[#fe904d]/10 rounded-xl sm:rounded-2xl border border-primary-200/50 dark:border-primary-800/50">
            <div className="text-2xl sm:text-4xl font-bold text-primary-500">&lt;1 hour</div>
            <div className="text-left">
              <div className="font-semibold text-surface-900 dark:text-surface-50">Time to first insights</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">From deployment to prioritized risks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
