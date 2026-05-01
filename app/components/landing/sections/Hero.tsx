'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveGlobe from '../InteractiveGlobe';

const titles = [
  'Finds Vulnerabilities.',
  'Stops Threats.',
  'Simplifies Fixes.',
  'Explains Risks.',
];

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setTitleNumber((n) => (n + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-surface-50 dark:bg-surface-950 min-h-[100svh] flex flex-col justify-start pt-20 sm:pt-24 lg:min-h-screen lg:justify-center lg:pt-0"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50/50 via-transparent to-[#fe904d]/10 dark:from-primary-950/30 dark:via-transparent dark:to-[#fe904d]/5"></div>
      <div aria-hidden="true" className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-[2200px]">
        <div className="flex flex-col lg:flex-row min-h-[auto] sm:min-h-[600px] lg:min-h-[700px] 3xl:min-h-[800px] items-center gap-8 lg:gap-12 3xl:gap-16 pt-6 pb-12 sm:py-16 lg:py-28 3xl:py-36">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">

            {/* Headline with Animated Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-6">
              <span className="text-surface-900 dark:text-surface-50">AI That</span>
              <span className="relative flex w-full lg:w-[150%] justify-center lg:justify-start overflow-hidden md:pb-4 md:pt-1">
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
              See your network the way attackers do.
            </p>
            <p className="text-sm sm:text-base md:text-lg 3xl:text-xl leading-relaxed text-surface-500 dark:text-surface-500 max-w-xl 3xl:max-w-2xl mb-8 sm:mb-10 mx-auto lg:mx-0">
              Continuous network discovery, service fingerprinting, compliance and AI driven remediation guidance which could be understood from executives to cybersecurity engineers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
              {/* <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-primary-300 dark:border-primary-700 hover:border-primary-500 text-surface-900 dark:text-surface-50 text-sm sm:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Sales
                <Mail className="w-4 h-4" />
              </Link> */}
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-semibold transition-colors duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Book a Demo
              </Link>
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
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500">Remediation</p>
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

      </div>
    </section>
  );
}
