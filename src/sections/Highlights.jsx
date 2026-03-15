const highlights = [
  {
    title: 'Unified Asset Inventory',
    description: 'See every asset across cloud, on-prem, and hybrid environments in one place. Automatic classification and tagging.',
    callouts: [
      { label: 'Asset Types', position: 'top-left' },
      { label: 'Risk Score', position: 'top-right' },
      { label: 'Last Seen', position: 'bottom-left' }
    ]
  },
  {
    title: 'Contextual Findings',
    description: 'Every vulnerability comes with context: exploitability, exposure, affected assets, and remediation guidance.',
    callouts: [
      { label: 'Evidence', position: 'top-left' },
      { label: 'Impact', position: 'center-right' },
      { label: 'Fix Steps', position: 'bottom-left' }
    ]
  },
  {
    title: 'Executive Dashboard',
    description: 'Real-time visibility into security posture. Track KPIs, trends, and compliance status at a glance.',
    callouts: [
      { label: 'Risk Trend', position: 'top-center' },
      { label: 'SLA Status', position: 'center-left' },
      { label: 'Top Issues', position: 'bottom-right' }
    ]
  }
];

function calloutStyle(position) {
  const top = position.includes('top') ? '20%' : position.includes('bottom') ? '80%' : '50%';
  const left = position.includes('left') ? '20%' : position.includes('right') ? '80%' : '50%';
  return { top, left };
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            See the platform <span className="text-primary-500">in action</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Purpose-built interfaces that give you the right information at the right time.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {highlights.map((highlight, i) => (
            <div key={highlight.title} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 3xl:gap-16 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-xl sm:text-2xl md:text-3xl 3xl:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">{highlight.title}</h3>
                <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 leading-relaxed">{highlight.description}</p>
              </div>

              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[16/10] bg-white dark:bg-surface-800 rounded-2xl shadow-2xl shadow-surface-900/10 dark:shadow-black/30 border border-surface-200 dark:border-surface-700 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 max-w-xs mx-auto bg-surface-200 dark:bg-surface-700 rounded-md"></div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-6">
                    <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="h-8 w-24 bg-primary-100 dark:bg-primary-900/30 rounded"></div>
                      <div className="h-8 w-20 bg-surface-100 dark:bg-surface-700 rounded"></div>
                      <div className="h-8 w-28 bg-surface-100 dark:bg-surface-700 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="h-20 bg-surface-100 dark:bg-surface-700 rounded-lg"></div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-12 bg-surface-50 dark:bg-surface-700/50 rounded-lg border border-surface-200 dark:border-surface-600"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {highlight.callouts.map((callout) => (
                  <div
                    key={callout.label}
                    className="absolute hidden sm:block px-2 sm:px-3 py-1 sm:py-1.5 bg-primary-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2"
                    style={calloutStyle(callout.position)}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      {callout.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
