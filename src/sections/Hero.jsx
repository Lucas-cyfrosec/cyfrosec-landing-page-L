import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import InteractiveGlobe from '../components/InteractiveGlobe';

const titles = ['Detects Threats', 'Explains Risks', 'Takes Action', 'Secures Infrastructure'];

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((n) => (n + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-[#fe904d]/10 dark:from-primary-950/30 dark:via-transparent dark:to-[#fe904d]/5"></div>
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}
      ></div>

      {/* Ambient glow behind globe */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-[2200px]">
        <div className="flex flex-col lg:flex-row min-h-[auto] sm:min-h-[600px] lg:min-h-[700px] 3xl:min-h-[800px] items-center gap-8 lg:gap-12 3xl:gap-16 py-12 sm:py-16 lg:py-28 3xl:py-36">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 hover:bg-primary-200/80 dark:hover:bg-primary-900/60 transition-colors"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                </span>
                Vulnerability Assessment as a Service
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Headline with Animated Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-6">
              <span className="text-surface-900 dark:text-surface-50">AI That</span>
              <span className="relative flex w-full justify-center lg:justify-start overflow-hidden md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <span
                    key={title}
                    className={`animated-title absolute font-semibold text-primary-500 ${
                      titleNumber === index ? 'active' : titleNumber > index ? 'above' : 'below'
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl leading-relaxed text-surface-600 dark:text-surface-400 max-w-xl 3xl:max-w-2xl mb-4 mx-auto lg:mx-0">
              AI-driven threat detection, plain-language explanations, and agentic AI that executes remediation commands for you.
            </p>
            <p className="text-sm sm:text-base md:text-lg 3xl:text-xl leading-relaxed text-surface-500 dark:text-surface-500 max-w-xl 3xl:max-w-2xl mb-8 sm:mb-10 mx-auto lg:mx-0">
              Built for network engineers, IT teams, and AI server infrastructure not just cybersecurity experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
              <a
                href="mailto:sales@cyfrosec.com"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-primary-300 dark:border-primary-700 hover:border-primary-500 text-surface-900 dark:text-surface-50 text-sm sm:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Sales
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start text-surface-600 dark:text-surface-400">
              <div>
                <p className="text-lg sm:text-2xl 3xl:text-3xl font-bold text-surface-900 dark:text-surface-50">SaaS + On-Prem</p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500">Deployment Options</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-surface-200 dark:bg-surface-700"></div>
              <div>
                <p className="text-lg sm:text-2xl 3xl:text-3xl font-bold text-surface-900 dark:text-surface-50">AI-Powered</p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500">Prioritization</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-surface-200 dark:bg-surface-700 hidden sm:block"></div>
              <div className="hidden sm:block">
                <p className="text-lg sm:text-2xl 3xl:text-3xl font-bold text-surface-900 dark:text-surface-50">Agentic AI</p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500">Auto-Remediation</p>
              </div>
            </div>
          </div>

          {/* Right: Globe */}
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] 3xl:max-w-[600px] 4xl:max-w-[700px] aspect-square">
              <InteractiveGlobe className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pb-8 sm:pb-12 lg:pb-16 pt-6 sm:pt-8 border-t border-surface-200 dark:border-surface-800">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm 3xl:text-base text-surface-500">
            {['SOC 2 Type II Ready', 'SSO / SAML / OIDC', 'Role-Based Access Control', 'End-to-End Encryption'].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
