import Link from 'next/link'
import { ArrowRight, BrainCircuit, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export function AiEngineSection() {
  return (
    <section className="relative overflow-hidden border-y cy-border-default">
      {/* Full-bleed immersive deep background */}
      <div className="bg-[#030914] py-24 lg:py-32 relative">
        {/* Abstract intelligence glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(3,155,224,0.15),transparent)]"
        />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-16 lg:grid-cols-12">

            {/* Left: AI Trace / Chat UI Simulation */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="rounded-2xl border border-primary-500/20 bg-[#0a1120]/80 shadow-[0_0_80px_rgba(3,155,224,0.15)] backdrop-blur-xl overflow-hidden flex flex-col h-[480px]">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-primary-500/20 bg-primary-950/30">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="size-4 text-primary-400" />
                    <span className="text-xs font-mono font-medium text-primary-300 tracking-wider">cyfro_reasoning_engine_v2</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-success-400 bg-success-500/10 px-2 py-0.5 rounded-full border border-success-500/20">
                    <span className="size-1.5 rounded-full bg-success-400 animate-pulse" />
                    ANALYZING
                  </span>
                </div>

                {/* AI Trace content */}
                <div className="p-5 flex-1 overflow-hidden flex flex-col gap-4 font-mono text-[13px] relative">
                  {/* Decorative fade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a1120] to-transparent z-10" />

                  <div className="flex flex-col gap-1 text-slate-400">
                    <span className="text-primary-400 font-bold">14:02:05</span>
                    <span className="text-slate-300">Ingested AWS Inspector report for <span className="text-warning-300">us-east-1</span></span>
                  </div>

                  <div className="flex flex-col gap-1 text-slate-400 border-l cy-border-default pl-3 ml-2">
                    <span className="text-slate-500">Evaluating 3,402 raw findings...</span>
                    <span>Correlating with Internet exposure metrics...</span>
                    <span className="text-error-400 flex items-center gap-2 mt-1">
                      <AlertCircle className="size-3" /> MATCH: Publicly accessible EC2 instance
                    </span>
                  </div>

                  <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-3 flex flex-col gap-2 mt-2 text-primary-100 font-sans shadow-inner">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-primary-400" />
                      <span className="font-bold text-sm tracking-wide text-primary-300">AI Context Engine</span>
                    </div>
                    <p className="text-[13px] leading-relaxed opacity-90">
                      The vulnerability <span className="font-mono text-error-300">CVE-2023-44487</span> on instance <span className="font-mono text-primary-300">i-0a1b2c3d</span> is critical because the instance is attached to an Internet Gateway and holds a role with <span className="font-mono text-warning-300">s3:GetObject</span> on customer bucket.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-slate-400 mt-2">
                    <span className="text-primary-400 font-bold">14:02:11</span>
                    <span className="text-success-400 flex items-center gap-2">
                      <CheckCircle2 className="size-3" /> Generated Terraform remediation plan (PR #402)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Badge + Copy */}
            <div className="lg:col-span-6 lg:order-1 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-400 mb-6">
                <BrainCircuit className="size-3.5" />
                CyfroAI Agent 2.0
              </div>

              <h2
                className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
                style={{ fontFamily: HEADING_FONT }}
              >
                It doesn&apos;t just detect.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-info-400">It reasons.</span>
              </h2>

              <p className="mt-6 text-lg tracking-wide text-slate-300 leading-relaxed font-medium">
                The CyfroAI Engine connects every finding to actual business impact and delivers a clear remediation plan — in plain English.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    label: 'Explain',
                    text: 'Every vulnerability comes with an immediate explanation of why it is dangerous and what specific systems it affects in your environment.',
                  },
                  {
                    label: 'Prioritize',
                    text: 'AI-ranked queues cut through the noise, surfacing the highest-impact issues first, ignoring generic CVSS scores in favor of real context.',
                  },
                  {
                    label: 'Guide',
                    text: 'Step-by-step remediation plans are generated for your exact architecture, deployable by any engineer on your team.',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="size-2 rounded-full bg-primary-500 shadow-[0_0_10px_var(--color-primary-500)] group-hover:scale-150 transition-transform" />
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-wide" style={{ fontFamily: HEADING_FONT }}>{item.label}</p>
                      <p className="text-sm leading-relaxed text-slate-400 mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/products/ai-insights" className="cy-btn cy-btn-primary cy-btn-lg gap-2 shadow-[0_0_20px_rgba(3,155,224,0.3)]">
                  Explore AI Insights
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="/products/ai-assistant" className="text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors px-4">
                  Meet CyfroAssistant &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
