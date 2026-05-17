'use client'

import { BookDemoForm } from '@/app/components/landing/BookDemoForm'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { MorphingCardStack } from '@/app/components/ui/morphing-card-stack'
import { ScreenshotShowcase } from '@/app/components/ui/screenshot-showcase'
import { Eye, Shield, Zap } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export default function BookDemo() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'

  const copy = isAr ? {
    eyebrow: 'رؤى أمنية للمهندسين. رؤية استراتيجية للقيادات.',
    heroTitle: 'اكتشف سطح الهجوم لديك',
    heroAccent: 'خلال دقائق',
    headerTitle: 'اكتشف بنيتك التحتية وأمّنها باستخدام الذكاء الاصطناعي المتقدم',
    tagline: 'ذكاء اصطناعي متقدم. أمن سيبراني بسيط.',
    p1: 'شاهد بنيتك التحتية بالطريقة التي يراها بها المهاجمون.',
    p2: 'تكتشف CyfroSec الأصول باستمرار، وتحلل الثغرات، وتوفر إرشادات معالجة مدفوعة بالذكاء الاصطناعي عبر بنيتك التحتية.',
    formTitle: 'جاهز لرؤية سطح الهجوم لديك؟',
    cards: [
      {
        id: 'visibility',
        icon: <Eye className="size-4 text-primary-400" />,
        title: 'الرؤية',
        points: [
          'اكتشاف مستمر للأصول والثغرات والأسرار وأخطاء الإعداد.',
          'طوبولوجيا أصول مدعومة بالذكاء الاصطناعي ورؤى عميقة للبنية التحتية.',
        ],
      },
      {
        id: 'risk',
        icon: <Shield className="size-4 text-primary-400" />,
        title: 'المخاطر والامتثال',
        points: [
          'تحديد أولويات المخاطر بالذكاء الاصطناعي بناءً على التعرض وقابلية الاستغلال.',
          'تقارير جاهزة للامتثال تشمل GDPR وأطر الأمان.',
        ],
      },
      {
        id: 'remediation',
        icon: <Zap className="size-4 text-primary-400" />,
        title: 'المعالجة بالذكاء الاصطناعي',
        points: [
          'تحديد أولويات المعالجة بالذكاء الاصطناعي وفق التعرض وقابلية الاستغلال.',
          'إرشادات معالجة بلغة واضحة يمكن لأي مهندس فهمها.',
        ],
      },
    ],
    screenshotLabel: 'شاهد CyfroSec أثناء العمل',
  } : {
    eyebrow: 'Security insights for engineers. Strategic visibility for executives.',
    heroTitle: 'Discover Your Attack Surface',
    heroAccent: 'in Minutes',
    headerTitle: 'Discover and Secure Your Infrastructure with Advanced AI',
    tagline: 'Advanced AI. Simple Cybersecurity.',
    p1: 'See your infrastructure the way attackers do.',
    p2: 'CyfroSec continuously discovers assets, analyzes vulnerabilities, and provides AI-driven remediation guidance across your infrastructure.',
    formTitle: 'Ready to see your attack surface?',
    cards: [
      {
        id: 'visibility',
        icon: <Eye className="size-4 text-primary-400" />,
        title: 'Visibility',
        points: [
          'Continuous discovery of assets, vulnerabilities, secrets, and misconfigurations.',
          'AI-powered asset topology and deep infrastructure insights.',
        ],
      },
      {
        id: 'risk',
        icon: <Shield className="size-4 text-primary-400" />,
        title: 'Risk & Compliance',
        points: [
          'AI-powered risk prioritization based on exposure and exploitability.',
          'Compliance-ready reports including GDPR and security frameworks.',
        ],
      },
      {
        id: 'remediation',
        icon: <Zap className="size-4 text-primary-400" />,
        title: 'AI-Driven Remediation',
        points: [
          'AI-driven remediation prioritization based on exposure and exploitability.',
          'Plain-language remediation guidance that any engineer can understand.',
        ],
      },
    ],
    screenshotLabel: 'See CyfroSec in Action',
  }

  return (
    <PublicPageShell>
      {/* Page header */}
      <section className="relative bg-[#050d1a] pt-28 pb-14 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(3,155,224,0.18),transparent)]"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400" dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}>
          {copy.eyebrow}
        </p>
        <h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ fontFamily: HEADING_FONT }}
          dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}
        >
          {copy.heroTitle}
          <br className="hidden sm:block" />
          <span className="text-primary-400"> {copy.heroAccent}</span>
        </h1>
      </section>

      {/* Two-column body */}
      <section className="bg-[#050d1a] pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Header text — above both columns */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: HEADING_FONT }}
              dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}
            >
              {copy.headerTitle}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary-400" dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}>
              {copy.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-2xl" dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}>
              {copy.p1}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-2xl" dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}>
              {copy.p2}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

            {/* ── Left: Form + What happens next ── */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <h2
                  className="mb-6 text-2xl font-bold text-white"
                  style={{ fontFamily: HEADING_FONT }}
                  dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}
                >
                  {copy.formTitle}
                </h2>
                <BookDemoForm />
              </div>

            </div>

            {/* ── Right: Marketing ── */}
            <div className="space-y-10 order-1 lg:order-2 lg:sticky lg:top-8 lg:self-start">

              {/* Value cards — MorphingCardStack */}
              <MorphingCardStack
                defaultLayout="stack"
                cards={copy.cards}
              />

              {/* Screenshot showcase */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-400" dir={isAr ? 'rtl' : undefined} lang={isAr ? 'ar' : 'en'}>
                  {copy.screenshotLabel}
                </p>
                <ScreenshotShowcase />
              </div>

            </div>

          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
