import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden flex-1 flex flex-col justify-center border-t cy-border-strong">
      <div className="relative py-12 sm:py-16 lg:py-24 3xl:py-32 bg-[var(--bg-overlay)] dark:bg-[#020610]">
        {/* Full-width bottom glow to mirror the immersive CTA style */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.23),transparent_62%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[62%] h-[42%] bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.34),transparent_60%)] mix-blend-screen"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.78) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.78) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl text-center">
          {/* Split bold headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="block text-white">Ready to secure.</span>
            <span className="block text-primary-400">Defeat every threat.</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 sm:mb-10">
            See CyfroSec in action with a live demo, or talk to our team about your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <a
              href="mailto:demo@cyfrosec.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-primary-50 text-primary-700 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(3,155,224,0.22)] hover:shadow-[0_0_38px_rgba(3,155,224,0.3)] hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:sales@cyfrosec.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/8 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 border border-white/35 hover:border-white/60"
            >
              <Mail className="w-5 h-5" />
              Contact Sales
            </a>
          </div>

          <p className="text-primary-200/95 text-xs sm:text-sm">
            Free trial available. No credit card required for SaaS Starter plan.
          </p>
        </div>
      </div>
    </section>
  );
}
