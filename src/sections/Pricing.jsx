import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const YEARLY_DISCOUNT = 0.20;

function yearlyMonthly(monthly) {
  return Math.round(monthly * (1 - YEARLY_DISCOUNT));
}

function yearlySavings(monthly) {
  return Math.round(monthly * YEARLY_DISCOUNT * 12);
}

const plans = [
  {
    index: 0,
    name: 'Base',
    badge: null,
    description: 'Essential security monitoring for small teams. Perfect for startups and small businesses.',
    monthlyPrice: 29,
    staticLabel: null,
    priceSuffix: '/mo',
    highlight: false,
    features: [
      'Up to 5 users',
      'Up to 3 agents',
      '100 active tests',
      'Vulnerability scanning',
      'Email reports',
      'Community support'
    ],
    cta: 'Try Cyfrosec',
    ctaLink: 'https://app.cyfrosec.com'
  },
  {
    index: 1,
    name: 'Pro',
    badge: 'Most Popular',
    description: 'Advanced security features for growing teams. Includes AI-powered insights and automation.',
    monthlyPrice: 99,
    staticLabel: null,
    priceSuffix: '/mo',
    highlight: true,
    features: [
      'Up to 25 users',
      'Up to 10 agents',
      '500 active tests',
      'AI-powered insights',
      'AI chat assistant',
      'Priority support',
      'API access',
      'Custom reports',
      'Webhooks',
      '14-day free trial'
    ],
    cta: 'Try Cyfrosec',
    ctaLink: '#cta'
  },
  {
    index: 2,
    name: 'Ultra',
    badge: null,
    description: 'Enterprise-grade security platform with unlimited resources. Includes dedicated support and compliance tools.',
    monthlyPrice: 299,
    staticLabel: null,
    priceSuffix: '/mo',
    highlight: false,
    features: [
      'Unlimited users',
      'Up to 50 agents',
      'Unlimited tests',
      'Advanced AI models',
      'SSO / SAML',
      'Compliance reports',
      'Dedicated support',
      '99.9% SLA',
      '30-day free trial'
    ],
    cta: 'Try Cyfrosec',
    ctaLink: '#pricing'
  }
];

const footerNotes = ['Cancel anytime', 'Volume discounts available', 'Non-profit pricing'];

export default function Pricing({ navigate }) {
  const [isYearly, setIsYearly] = useState(false);
  const fireworksRef = useRef(null);

  useEffect(() => {
    import('canvas-confetti').then((mod) => {
      fireworksRef.current = mod.default;
    }).catch(() => {});
  }, []);

  function fireConfetti() {
    if (!fireworksRef.current) return;
    const duration = 3000;
    const end = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
    const rand = (a, b) => Math.random() * (b - a) + a;
    const interval = setInterval(() => {
      const left = end - Date.now();
      if (left <= 0) return clearInterval(interval);
      const count = 50 * (left / duration);
      fireworksRef.current({ ...defaults, particleCount: count, origin: { x: rand(0.1, 0.3), y: -0.1 }, colors: ['#039be0', '#fe904d', '#ffffff', '#10b981'] });
      fireworksRef.current({ ...defaults, particleCount: count, origin: { x: rand(0.7, 0.9), y: -0.1 }, colors: ['#039be0', '#fe904d', '#ffffff', '#10b981'] });
    }, 250);
  }

  function handleToggle() {
    const next = !isYearly;
    setIsYearly(next);
    if (next) fireConfetti();
  }

  function getPrice(plan) {
    if (plan.staticLabel) return plan.staticLabel;
    const m = plan.monthlyPrice;
    return isYearly ? `$${yearlyMonthly(m)}` : `$${m}`;
  }

  function getPriceKey(plan) {
    return `${plan.index}-${isYearly ? 'y' : 'm'}`;
  }

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white dark:bg-surface-900 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Simple, transparent <span className="text-primary-500">pricing</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term commitments.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-20">
          <span className={`text-sm sm:text-base font-medium select-none transition-colors duration-200 ${!isYearly ? 'text-surface-900 dark:text-surface-100' : 'text-surface-400 dark:text-surface-500'}`}>
            Monthly
          </span>

          <button
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle billing period"
            onClick={handleToggle}
            className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${isYearly ? 'bg-primary-500' : 'bg-surface-300 dark:bg-surface-600'}`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}
            ></span>
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-sm sm:text-base font-medium select-none transition-colors duration-200 ${isYearly ? 'text-surface-900 dark:text-surface-100' : 'text-surface-400 dark:text-surface-500'}`}>
              Yearly
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-all duration-300 origin-left bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 ${isYearly ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
            >
              Save 20%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-stretch gap-4 sm:gap-6 lg:flex-row lg:items-stretch lg:gap-5 lg:justify-center max-w-6xl 3xl:max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.index}
              className={`relative flex flex-col w-full lg:flex-1 transition-transform duration-500 ease-out ${plan.highlight ? 'lg:-translate-y-6 lg:z-10' : 'lg:scale-[0.94] lg:z-0'}`}
            >
              <div
                className={`relative flex flex-col h-full p-5 sm:p-7 lg:p-8 rounded-2xl border-2 transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white dark:bg-surface-800 border-primary-500 shadow-2xl shadow-primary-500/20 hover:-translate-y-1'
                    : 'bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 shadow-sm hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg shadow-primary-500/40 whitespace-nowrap tracking-wide uppercase">
                    ★ {plan.badge}
                  </div>
                )}

                {/* Name & description */}
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-surface-900 dark:text-surface-50 mb-1.5">{plan.name}</h3>
                  <p className="text-surface-500 dark:text-surface-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price — keyed so React remounts it on toggle, replaying CSS animation */}
                <div className="mb-6 sm:mb-7 pb-6 sm:pb-7 border-b border-surface-100 dark:border-surface-700/60">
                  <div key={getPriceKey(plan)} className="flex items-end gap-1.5 animate-priceFade">
                    {plan.staticLabel ? (
                      <span className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-50">
                        {plan.staticLabel}
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-surface-50">
                          {getPrice(plan)}
                        </span>
                        {plan.priceSuffix && (
                          <span className="text-surface-500 dark:text-surface-400 text-sm mb-1.5 leading-tight">
                            {plan.priceSuffix}
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {plan.monthlyPrice !== null && (
                    <p key={`note-${isYearly}`} className="text-xs mt-1.5 font-medium animate-priceFade">
                      {isYearly ? (
                        <span className="text-emerald-600 dark:text-emerald-400">
                          Billed annually · Save ${yearlySavings(plan.monthlyPrice)}/yr
                        </span>
                      ) : (
                        <span className="text-surface-400 dark:text-surface-500">Billed monthly</span>
                      )}
                    </p>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-primary-100 dark:bg-primary-900/40' : 'bg-emerald-100 dark:bg-emerald-900/30'}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-primary-600 dark:text-primary-400' : 'text-emerald-600 dark:text-emerald-400'}`} />
                      </span>
                      <span className="text-surface-700 dark:text-surface-300 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                {plan.ctaLink === 'mailto:sales@cyfrosec.com' ? (
                  <button
                    onClick={() => navigate?.('contact-sales')}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-900 dark:text-surface-50 hover:-translate-y-0.5`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <a
                    href={plan.ctaLink}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5'
                        : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 text-surface-900 dark:text-surface-50 hover:-translate-y-0.5'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer notes */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-surface-600 dark:text-surface-400 mb-4 text-sm sm:text-base">
            Trial length varies by plan. No credit card required for eligible tiers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-surface-500">
            {footerNotes.map((note) => (
              <span key={note} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
