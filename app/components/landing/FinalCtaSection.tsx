import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t cy-border-default">
      {/* Massive immersive background */}
      <div className="bg-[#020610] py-32 lg:py-48 relative overflow-hidden">

        {/* Giant bottom radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.25),transparent_60%)]"
        />

        {/* Inner intense glow core */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.4),transparent_60%)] mix-blend-screen"
        />

        {/* Abstract grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-6 z-10 flex flex-col items-center">
          <div className="inline-flex flex-col items-center mb-10">
            <div className="size-20 rounded-full bg-[color-mix(in_srgb,var(--bg-muted)_30%,transparent)] border border-primary-500/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(3,155,224,0.2)]">
              <Shield className="size-10 text-primary-400 drop-shadow-[0_0_12px_rgba(3,155,224,0.5)]" />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
              Your perimeter, secured.
            </p>
          </div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8"
            style={{ fontFamily: HEADING_FONT, lineHeight: 1.1 }}
          >
            Deploy intelligence.<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-info-300">Defeat complexity.</span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto font-medium">
            Connect your environment in minutes. Let our AI correlate vulnerabilities, prioritize risks, and generate remediation code while you sleep.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/get-started`}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary-400 w-full sm:w-auto"
            >
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_var(--color-primary-500)] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_50px_var(--color-primary-500)] transition-all" />
              <span className="relative z-10 flex items-center gap-2 text-base">
                Start Free Trial
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors w-full sm:w-auto px-6 py-4 border border-transparent hover:border-primary-500/30 rounded-full"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
