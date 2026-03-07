import { useState, useEffect, useRef, useCallback } from 'react';
import { Server, Cpu, ShieldAlert, ArrowRight, ArrowLeft } from 'lucide-react';

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif';

/* ── Data (original architecture view) ─────────────────── */
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

/* ── Component ──────────────────────────────────────────── */
export default function PlatformArchitecture() {
  const [showArch, setShowArch] = useState(false);
  const [animClass, setAnimClass] = useState('');
  const timerRef = useRef(null);

  const switchView = useCallback((next) => {
    const outClass = next ? 'anim-slide-out-left' : 'anim-slide-out-right';
    const inClass  = next ? 'anim-slide-in-right' : 'anim-slide-in-left';
    setAnimClass(outClass);
    setTimeout(() => {
      setShowArch(next);
      setAnimClass(inClass);
      setTimeout(() => setAnimClass(''), 280);
    }, 220);
  }, []);

  // Auto-rotate every 5s; resets on each view change
  useEffect(() => {
    timerRef.current = setTimeout(() => switchView(!showArch), 5000);
    return () => clearTimeout(timerRef.current);
  }, [showArch, switchView]);

  function handleClick(next) {
    clearTimeout(timerRef.current);
    switchView(next);
    // After manual click, delay next auto-rotate by 10s
    timerRef.current = setTimeout(() => switchView(!next), 10000);
  }

  return (
    <section
      id="architecture"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className={animClass} style={{ overflow: 'hidden' }}>

        {/* ── View A: Unified Architecture overview ── */}
        {!showArch && (
          <section id="platform" className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-brand mb-4">Unified Architecture</p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-surface-900 dark:text-surface-50 mb-6"
                style={{ fontFamily: HEADING_FONT }}
              >
                One platform. <span className="text-primary-500">Every layer.</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-surface-600 dark:text-surface-300 font-medium">
                Stop stitching together fragmented tools. CyfroSec ingests data from your entire environment, analyzes it with our proprietary AI engine, and outputs autonomous remediation.
              </p>
            </div>

            {/* Abstract Data Pipeline */}
            <div className="relative rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] overflow-hidden p-8 lg:p-12 shadow-2xl">
              {/* Decorative background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-strong)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-strong)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">

                {/* Step 1: Ingestion */}
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="relative size-20 rounded-2xl bg-[var(--bg-panel-strong)] border border-[var(--border-default)] flex items-center justify-center shadow-lg">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl" />
                    <Server className="size-8 text-[var(--text-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Continuous Discovery</h3>
                    <p className="text-sm text-[var(--text-muted)] mt-2">Agentless scanning across cloud, endpoint, and network assets in real-time.</p>
                  </div>
                </div>

                {/* Connector: Discovery → AI Engine */}
                <div className="hidden lg:block flex-1 relative mt-10 h-[2px] self-start">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
                  <span className="anim-packet-ltr size-2 rounded-full bg-primary-400 shadow-[0_0_6px_rgba(3,155,224,0.9)]" />
                </div>

                {/* Step 2: AI Engine */}
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="relative size-24 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-[1px] shadow-[0_0_40px_rgba(3,155,224,0.3)]">
                    <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full" />
                    <div className="w-full h-full bg-[var(--bg-elevated)] rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary-500/10" />
                      <Cpu className="size-10 text-primary-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Cyfro AI Engine</h3>
                    <p className="text-sm text-[var(--text-muted)] mt-2">Correlates CVEs with actual exploitability and asset criticality to prioritize risk.</p>
                  </div>
                </div>

                {/* Connector: AI Engine → Autonomous Defense */}
                <div className="hidden lg:block flex-1 relative mt-12 h-[2px] self-start">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
                  <span className="anim-packet-ltr size-2 rounded-full bg-primary-400 shadow-[0_0_6px_rgba(3,155,224,0.9)]" style={{ animationDelay: '1s' }} />
                </div>

                {/* Step 3: Auto-Remediation */}
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="relative size-20 rounded-2xl bg-[var(--bg-panel-strong)] border border-[var(--border-default)] flex items-center justify-center shadow-lg group">
                    <div className="absolute inset-0 bg-[#10b981]/10 rounded-2xl blur-xl" />
                    <ShieldAlert className="size-8 text-[#10b981] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Autonomous Defense</h3>
                    <p className="text-sm text-[var(--text-muted)] mt-2">Generates one-click patches and infrastructure-as-code updates to eliminate threats.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => handleClick(true)}
                className="group flex items-center gap-2 text-sm font-bold text-surface-900 dark:text-surface-50 hover:text-primary-500 transition-colors"
              >
                Explore the full technical architecture
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        )}

        {/* ── View B: Full platform architecture ── */}
        {showArch && (
          <div>
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

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => handleClick(false)}
                className="group flex items-center gap-2 text-sm font-bold text-surface-900 dark:text-surface-50 hover:text-primary-500 transition-colors"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                Back to overview
              </button>
            </div>
          </div>
        )}

        </div>
      </div>
    </section>
  );
}
