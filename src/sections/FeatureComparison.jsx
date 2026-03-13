import { Check, X, Minus } from 'lucide-react';

const features = [
  {
    feature: 'AI-powered prioritization',
    cyfrosec: 'yes', cyfrosecTip: 'ML models rank vulnerabilities by real-world exploitability and asset criticality.',
    traditional: 'no', traditionalTip: 'Relies on static CVSS scores with no contextual risk analysis.',
  },
  {
    feature: 'Plain-language remediation guidance',
    cyfrosec: 'yes', cyfrosecTip: 'Step-by-step fix instructions written for developers, not just security experts.',
    traditional: 'no', traditionalTip: 'Provides raw CVE data only — no actionable fix guidance included.',
  },
  {
    feature: 'Designed for non-security engineers',
    cyfrosec: 'yes', cyfrosecTip: 'Intuitive interface and clear guidance built for DevOps and engineering teams.',
    traditional: 'no', traditionalTip: 'Requires deep security expertise to interpret and act on results.',
  },
  {
    feature: 'Agent + agentless scanning',
    cyfrosec: 'yes', cyfrosecTip: 'Supports both lightweight agent and agentless scanning for any environment.',
    traditional: 'partial', traditionalTip: 'Usually agent-only or agentless-only — rarely supports both seamlessly.',
  },
  {
    feature: 'Cloud, on-prem & hybrid coverage',
    cyfrosec: 'yes', cyfrosecTip: 'Unified coverage across AWS, Azure, GCP, and on-premises infrastructure.',
    traditional: 'partial', traditionalTip: 'Often cloud or on-prem focused — true hybrid coverage is uncommon.',
  },
  {
    feature: 'Secrets & misconfiguration detection',
    cyfrosec: 'yes', cyfrosecTip: 'Automatically detects exposed secrets, weak configs, and compliance gaps.',
    traditional: 'partial', traditionalTip: 'Limited misconfiguration checks — typically focused on CVEs only.',
  },
  {
    feature: 'Conversational AI assistant',
    cyfrosec: 'yes', cyfrosecTip: 'Built-in AI chat for querying scan results and getting security guidance.',
    traditional: 'no', traditionalTip: 'No AI assistant — results require manual interpretation by analysts.',
  },
  {
    feature: 'Flexible licensing (no per-IP lock-in)',
    cyfrosec: 'yes', cyfrosecTip: 'Asset-based pricing with no per-IP fees or scan limits at scale.',
    traditional: 'no', traditionalTip: 'Per-IP or per-node licensing significantly increases costs at scale.',
  },
  {
    feature: 'On-premises / air-gapped deployment',
    cyfrosec: 'yes', cyfrosecTip: 'Full on-prem support with offline vulnerability database bundle updates.',
    traditional: 'partial', traditionalTip: 'Some on-prem support but true air-gap capability is rarely available.',
  },
  {
    feature: 'SIEM, SOAR & ticketing integrations',
    cyfrosec: 'yes', cyfrosecTip: '100+ pre-built integrations via REST API and webhooks out of the box.',
    traditional: 'yes', traditionalTip: 'Most legacy tools also offer standard SIEM and ticketing integrations.',
  },
  {
    feature: 'Complete AI infrastructure coverage',
    cyfrosec: 'yes', cyfrosecTip: 'Specialized scanning for AI servers, GPUs, storage, and ML pipelines.',
    traditional: 'no', traditionalTip: 'Focused on standard servers — misses AI-specific components entirely.',
  },
  {
    feature: 'Code-to-cloud scanning',
    cyfrosec: 'yes', cyfrosecTip: 'End-to-end protection from source code repositories to production workloads.',
    traditional: 'partial', traditionalTip: 'Fragmented — separate tools needed for code, containers, and infra.',
  },
];

function StatusIcon({ status, tip }) {
  const base = 'inline-flex items-center justify-center w-7 h-7 rounded-full';
  const icon =
    status === 'yes' ? (
      <div className={`${base} bg-emerald-100 dark:bg-emerald-900/30`}>
        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>
    ) : status === 'partial' ? (
      <div className={`${base} bg-amber-100 dark:bg-amber-900/30`}>
        <Minus className="w-4 h-4 text-amber-600 dark:text-amber-400" />
      </div>
    ) : (
      <div className={`${base} bg-red-100 dark:bg-red-900/30`}>
        <X className="w-4 h-4 text-red-600 dark:text-red-400" />
      </div>
    );

  return (
    <div className="relative inline-flex justify-center group/tip">
      {icon}
      {tip && (
        <div className="
          pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
          w-48 rounded-lg px-3 py-2
          bg-surface-900 dark:bg-surface-950 text-white text-[11px] leading-snug text-center
          shadow-xl border border-surface-700
          opacity-0 scale-95 group-hover/tip:opacity-100 group-hover/tip:scale-100
          transition-all duration-150
        ">
          {tip}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-surface-900 dark:border-t-surface-950" />
        </div>
      )}
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
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                      <StatusIcon status={row.cyfrosec} tip={row.cyfrosecTip} />
                    </td>
                    <td className="py-4 pl-4 text-center">
                      <StatusIcon status={row.traditional} tip={row.traditionalTip} />
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
