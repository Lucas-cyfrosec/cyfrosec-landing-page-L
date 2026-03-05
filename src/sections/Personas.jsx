import { Wrench, BarChart3, Shield, Building2 } from 'lucide-react';
import { GlowingEffect } from '../components/ui/grid-glow-effect-purple-blue';
import { cn } from '../lib/utils';

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

        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 p-4 sm:p-6 lg:p-8">
          <ul
            className={cn(
              'grid gap-4 w-full',
              'grid-cols-1 lg:grid-cols-[1fr_1fr_0.16fr_1fr_1fr]',
              'grid-rows-auto lg:grid-rows-[1fr_1fr_0.16fr_1fr_1fr]'
            )}
          >
            {personas.map((persona, idx) => {
              const areas = [
                'lg:col-[4/6] lg:row-[1/3]',
                'lg:col-[1/3] lg:row-[1/3]',
                'lg:col-[1/3] lg:row-[4/6]',
                'lg:col-[4/6] lg:row-[4/6]'
              ];
              const Icon = persona.icon;
              return (
                <li key={persona.title} className={cn('list-none min-h-[15rem]', areas[idx])}>
                  <div className="relative h-full rounded-[1.25rem] border border-surface-200 dark:border-surface-700 p-3 md:rounded-[1.5rem] md:p-4 bg-surface-50/70 dark:bg-surface-800/70 backdrop-blur-sm shadow-lg">
                    <GlowingEffect
                      spread={45}
                      glow
                      disabled={false}
                      proximity={70}
                      inactiveZone={0.05}
                      borderWidth={2}
                      variant="blue-purple"
                      blur={1}
                      movementDuration={2}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-5 md:p-6">
                      <div className="w-fit rounded-lg border border-primary-200 dark:border-primary-800/50 bg-primary-100 dark:bg-primary-900/30 p-2.5 shadow-sm">
                        <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-semibold text-surface-900 dark:text-surface-50">{persona.title}</h3>
                        <p className="text-sm md:text-[15px] text-surface-600 dark:text-surface-400 leading-relaxed">{persona.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs md:text-sm font-medium">
                          {persona.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            <li className="hidden lg:flex lg:col-[3/4] lg:row-[3/4] items-center justify-center">
              <div className="relative w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 border border-surface-300 dark:border-surface-700 shadow-lg shadow-primary-500/25">
                <GlowingEffect
                  spread={45}
                  glow
                  disabled={false}
                  proximity={70}
                  inactiveZone={0.05}
                  borderWidth={2}
                  variant="blue-purple"
                  blur={1}
                  movementDuration={2}
                />
                <div className="absolute inset-1.5 rounded-full bg-white dark:bg-surface-900" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
