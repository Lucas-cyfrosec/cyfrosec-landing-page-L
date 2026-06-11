'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveGlobe from '../InteractiveGlobe';
import { useTranslation } from '@/src/i18n';

const ROTATE_MS = 3600;
const ease = [0.16, 1, 0.3, 1] as const;

function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

const scrollIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 as const },
  transition: { duration: 0.6, ease },
};

export default function Hero() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const phrases = t.hero.rotatingPhrases;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIdx((n) => (n + 1) % phrases.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-surface-50 dark:bg-surface-950 min-h-[100svh] flex flex-col justify-start pt-20 sm:pt-24 lg:min-h-screen lg:justify-center lg:pt-0"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50/50 via-transparent to-[#fe904d]/10 dark:from-primary-950/30 dark:via-transparent dark:to-[#fe904d]/5"
      />
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-[2200px]">
        {/* Full-width headline above the grid */}
        <motion.h1
          {...reveal(0.1)}
          className="text-center text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold tracking-tight leading-[1.4] text-surface-800 dark:text-surface-200 max-w-5xl mx-auto pt-6 sm:pt-16 lg:pt-28 3xl:pt-36 mb-10 sm:mb-12 lg:mb-16"
          style={{ textWrap: 'pretty' } as React.CSSProperties}
        >
          {t.hero.headline}
        </motion.h1>

        <div className="flex flex-col lg:flex-row min-h-[auto] sm:min-h-[500px] lg:min-h-[550px] 3xl:min-h-[650px] items-center gap-8 lg:gap-12 3xl:gap-16 pb-12 sm:pb-16 lg:pb-28 3xl:pb-36">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-start">
            {/* Phase 2: Rotating subline */}
            <motion.div
              {...reveal(1.5)}
              className="mb-4 sm:mb-5 mx-auto lg:mx-0 max-w-xl 3xl:max-w-2xl"
            >
              <p className="text-sm sm:text-base lg:text-lg text-primary-500 dark:text-primary-400 font-semibold tracking-wide mb-2">
                {t.hero.rotatingPrefix}
              </p>
              <div className="relative min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-x-0 text-xl sm:text-2xl md:text-3xl 3xl:text-4xl font-bold text-primary-600 dark:text-primary-300 leading-snug"
                  >
                    {phrases[idx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Phase 3: Tagline */}
            <motion.p
              {...reveal(3)}
              className="text-sm sm:text-base md:text-lg 3xl:text-xl leading-relaxed text-surface-600 dark:text-surface-400 max-w-lg 3xl:max-w-xl mb-8 sm:mb-10 mx-auto lg:mx-0"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Scroll-triggered: Description + CTA */}
            <motion.div
              {...scrollIn}
              className="max-w-lg 3xl:max-w-xl mb-8 sm:mb-10 mx-auto lg:mx-0"
            >
              <p
                className="text-xs sm:text-sm 3xl:text-base leading-relaxed text-surface-500 dark:text-surface-400 mb-5 sm:mb-6"
                style={{ textWrap: 'pretty' } as React.CSSProperties}
              >
                {t.hero.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm sm:text-base font-semibold transition-colors duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  {t.hero.bookDemo}
                </Link>
              </div>
            </motion.div>

            {/* Scroll-triggered: Stats */}
            <motion.div
              {...scrollIn}
              className="flex items-center gap-3 sm:gap-5 justify-center lg:justify-start"
            >
              <div className="shrink-0">
                <p className="text-base sm:text-xl 3xl:text-2xl font-bold text-surface-900 dark:text-surface-50">
                  {t.hero.stats.deployment.value}
                </p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500 dark:text-surface-400">
                  {t.hero.stats.deployment.label}
                </p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-surface-200 dark:bg-surface-700 shrink-0" />
              <div className="shrink-0">
                <p className="text-base sm:text-xl 3xl:text-2xl font-bold text-surface-900 dark:text-surface-50">
                  {t.hero.stats.aiPowered.value}
                </p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500 dark:text-surface-400">
                  {t.hero.stats.aiPowered.label}
                </p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-surface-200 dark:bg-surface-700 shrink-0" />
              <div className="shrink-0">
                <p className="text-base sm:text-xl 3xl:text-2xl font-bold text-surface-900 dark:text-surface-50">
                  {t.hero.stats.agenticAI.value}
                </p>
                <p className="text-[11px] sm:text-xs 3xl:text-sm text-surface-500 dark:text-surface-400">
                  {t.hero.stats.agenticAI.label}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Globe */}
          <motion.div
            {...reveal(2)}
            className="flex-1 flex items-center justify-center w-full lg:w-auto"
          >
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] 3xl:max-w-[600px] 4xl:max-w-[700px] aspect-square">
              <InteractiveGlobe className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
