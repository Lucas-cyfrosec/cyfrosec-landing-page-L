const dataSources = [
  { label: 'Endpoints', sub: 'Servers, Workstations, Containers' },
  { label: 'Network', sub: 'Subnets, Services, Firewalls' },
  { label: 'Cloud', sub: 'AWS, Azure, GCP, K8s' },
];

const outputs = [
  { label: 'Cyfro AI Insights', sub: 'Explain, Prioritize, Remediate' },
  { label: 'CyfroAssistant', sub: 'Conversational AI Interface' },
  { label: 'SOAR & Response', sub: 'Automated Playbooks & Actions' },
  { label: 'Dashboards & Reports', sub: 'APIs, Alerts, Compliance' },
];

export default function PlatformArchitectureDetail() {
  return (
    <section
      id="architecture-detail"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-[#0c1724] min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Platform <span className="text-primary-500">Architecture</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            A modern, scalable architecture designed for security at every layer.
          </p>
        </div>

        <div className="max-w-5xl 3xl:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

            {/* Column 1: Data Sources */}
            <div className="space-y-4">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-500">Data Sources</span>
              </div>
              {dataSources.map((source) => (
                <div key={source.label} className="p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                  <div className="font-semibold text-surface-900 dark:text-surface-50 text-sm">{source.label}</div>
                  <div className="text-xs text-surface-500 mt-1">{source.sub}</div>
                </div>
              ))}
            </div>

            {/* Column 2: Processing */}
            <div className="space-y-4 flex flex-col">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-500">Processing</span>
              </div>
              <div className="flex items-center justify-center md:hidden py-2">
                <svg className="w-6 h-6 text-primary-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="p-5 bg-primary-50 dark:bg-primary-900/30 rounded-xl border-2 border-primary-300 dark:border-primary-700 text-center">
                <div className="font-bold text-primary-700 dark:text-primary-300">CyfroAgent</div>
                <div className="text-xs text-primary-600 dark:text-primary-400 mt-1">Lightweight Collection</div>
              </div>
              <div className="flex items-center justify-center py-1">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="p-5 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                <div className="font-semibold text-surface-900 dark:text-surface-50">Data Ingestion & SIEM</div>
                <div className="text-xs text-surface-500 mt-1">Normalization & Correlation</div>
              </div>
              <div className="flex items-center justify-center py-1">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="p-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-center shadow-lg shadow-primary-500/20">
                <div className="font-bold text-white">Cyfro AI Engine</div>
                <div className="text-xs text-primary-100 mt-1">Analysis & Prioritization</div>
              </div>
            </div>

            {/* Column 3: Outputs */}
            <div className="space-y-4">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-500">Outputs</span>
              </div>
              <div className="flex items-center justify-center md:hidden py-2">
                <svg className="w-6 h-6 text-primary-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              {outputs.map((output) => (
                <div key={output.label} className="p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                  <div className="font-semibold text-surface-900 dark:text-surface-50 text-sm">{output.label}</div>
                  <div className="text-xs text-surface-500 mt-1">{output.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
