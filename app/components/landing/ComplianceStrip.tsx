import { BadgeCheck } from 'lucide-react'
import { COMPLIANCE_ITEMS } from './content'

export function ComplianceStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-6 pb-20">
      <div className="relative overflow-hidden rounded-2xl border cy-border-default bg-[color-mix(in_srgb,var(--bg-elevated)_40%,transparent)] backdrop-blur-md px-6 py-6 sm:px-10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">

        {/* Subtle metallic sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-muted shrink-0 text-center lg:text-left lg:mr-8 border-b lg:border-b-0 lg:border-r cy-border-default pb-4 lg:pb-0 lg:pr-8">
            Engineered for <br className="hidden lg:block" /> Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {COMPLIANCE_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-2 text-[15px] font-medium cy-text-primary tracking-wide">
                <BadgeCheck className="size-5 text-primary-500 shrink-0 filter drop-shadow-[0_0_8px_rgba(3,155,224,0.4)]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
