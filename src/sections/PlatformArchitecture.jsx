import { Server, Cpu, ShieldAlert } from 'lucide-react';

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif';

export default function PlatformArchitecture() {
  return (
    <section
      id="architecture"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
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

          {/* Abstract Data Pipeline — always dark */}
          <div className="relative rounded-3xl border border-[#24374a] bg-[#0c1724] overflow-hidden p-8 lg:p-12 shadow-2xl">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#24374a_1px,transparent_1px),linear-gradient(to_bottom,#24374a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">

              {/* Step 1: Ingestion */}
              <div className="flex flex-col items-center text-center gap-4 flex-1">
                <div className="relative size-20 rounded-2xl bg-[#122234]/60 border border-[#24374a] flex items-center justify-center shadow-lg">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl" />
                  <Server className="size-8 text-[#e6eef6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e6eef6]">Continuous Discovery</h3>
                  <p className="text-sm text-[#87a0b5] mt-2">Agentless scanning across cloud, endpoint, and network assets in real-time.</p>
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
                  <div className="w-full h-full bg-[#0c1724] rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-500/10" />
                    <Cpu className="size-10 text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e6eef6]">Cyfro AI Engine</h3>
                  <p className="text-sm text-[#87a0b5] mt-2">Correlates CVEs with actual exploitability and asset criticality to prioritize risk.</p>
                </div>
              </div>

              {/* Connector: AI Engine → Autonomous Defense */}
              <div className="hidden lg:block flex-1 relative mt-12 h-[2px] self-start">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
                <span className="anim-packet-ltr size-2 rounded-full bg-primary-400 shadow-[0_0_6px_rgba(3,155,224,0.9)]" style={{ animationDelay: '1s' }} />
              </div>

              {/* Step 3: Auto-Remediation */}
              <div className="flex flex-col items-center text-center gap-4 flex-1">
                <div className="relative size-20 rounded-2xl bg-[#122234]/60 border border-[#24374a] flex items-center justify-center shadow-lg group">
                  <div className="absolute inset-0 bg-[#10b981]/10 rounded-2xl blur-xl" />
                  <ShieldAlert className="size-8 text-[#10b981] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e6eef6]">Autonomous Defense</h3>
                  <p className="text-sm text-[#87a0b5] mt-2">Generates one-click patches and infrastructure-as-code updates to eliminate threats.</p>
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>
    </section>
  );
}
