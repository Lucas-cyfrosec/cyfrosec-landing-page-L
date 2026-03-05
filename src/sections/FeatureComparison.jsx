import { Check, X, Minus } from 'lucide-react';

const features = [
  { feature: 'AI-powered prioritization', cyfrosec: 'yes', traditional: 'no' },
  { feature: 'Plain-language remediation guidance', cyfrosec: 'yes', traditional: 'no' },
  { feature: 'Designed for non-security engineers', cyfrosec: 'yes', traditional: 'no' },
  { feature: 'Agent + agentless scanning', cyfrosec: 'yes', traditional: 'partial' },
  { feature: 'Cloud, on-prem & hybrid coverage', cyfrosec: 'yes', traditional: 'partial' },
  { feature: 'Secrets & misconfiguration detection', cyfrosec: 'yes', traditional: 'partial' },
  { feature: 'Conversational AI assistant', cyfrosec: 'yes', traditional: 'no' },
  { feature: 'Flexible licensing (no per-IP lock-in)', cyfrosec: 'yes', traditional: 'no' },
  { feature: 'On-premises / air-gapped deployment', cyfrosec: 'yes', traditional: 'partial' },
  { feature: 'SIEM, SOAR & ticketing integrations', cyfrosec: 'yes', traditional: 'yes' }
];

function StatusIcon({ status }) {
  if (status === 'yes') {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>
    );
  }
  if (status === 'partial') {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30">
        <Minus className="w-4 h-4 text-amber-600 dark:text-amber-400" />
      </div>
    );
  }
  return (
    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30">
      <X className="w-4 h-4 text-red-600 dark:text-red-400" />
    </div>
  );
}

export default function FeatureComparison() {
  return (
    <section id="comparison" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            CyfroSec vs <span className="text-primary-500">Traditional Tools</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            See how CyfroSec compares to legacy vulnerability management platforms.
          </p>
        </div>

        <div className="max-w-2xl 3xl:max-w-3xl mx-auto">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[480px] table-fixed">
            <thead>
              <tr className="border-b-2 border-surface-200 dark:border-surface-700">
                <th className="text-left py-3 sm:py-4 pr-3 sm:pr-4 text-xs sm:text-sm font-semibold text-surface-900 dark:text-surface-50 w-1/2">Feature</th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-bold rounded-full">CyfroSec</span>
                  </div>
                </th>
                <th className="py-4 pl-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="px-3 py-1 bg-surface-200 dark:bg-surface-700 text-surface-600 dark:text-surface-400 text-sm font-medium rounded-full">Traditional</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.feature} className="border-b border-surface-100 dark:border-surface-800">
                  <td className="py-3 sm:py-4 pr-3 sm:pr-4 text-xs sm:text-sm text-surface-700 dark:text-surface-300">{row.feature}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-center">
                    <StatusIcon status={row.cyfrosec} />
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <StatusIcon status={row.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}
