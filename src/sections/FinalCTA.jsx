import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden flex-1 flex flex-col justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-[#fe904d] rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-white mb-4 sm:mb-6">
          Ready to secure your attack surface?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl text-primary-100 max-w-2xl mx-auto mb-8 sm:mb-10">
          See CyfroSec in action with a live demo, or talk to our team about your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <a
            href="mailto:demo@cyfrosec.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-primary-50 text-primary-700 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:sales@cyfrosec.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 hover:bg-primary-400 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 border border-primary-400"
          >
            <Mail className="w-5 h-5" />
            Contact Sales
          </a>
          <a
            href="https://app.cyfrosec.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-primary-100 hover:text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 border border-primary-400/50 hover:border-primary-300"
          >
            Go to Portal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <p className="text-primary-200 text-xs sm:text-sm">
          Free trial available. No credit card required for SaaS Starter plan.
        </p>
      </div>
    </section>
  );
}
