'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Scans',
    title: 'Network Discovery Scan',
    overview: 'Network Discovery scan identifies open ports and services to drive vulnerability detection and analysis.',
    items: [
      'Run during scheduled scanning jobs or on agent request.',
      'Fast scanning for performance and reduced noise.',
      'Helps discover vulnerabilities and exposed ports.',
      'Collect extra metadata (e.g., TLS certificate info).',
      'Enriched findings are passed to the Service Fingerprinting and Asset Discovery pipelines for deeper assessments and data correlation using CyfroAI Engine.',
    ],
    tocTitle: 'On this page',
    tocItems: [{ id: 'overview', label: 'Overview' }],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'الفحوصات',
    title: 'فحص اكتشاف الشبكة',
    overview: 'يحدد فحص اكتشاف الشبكة المنافذ المفتوحة والخدمات لدفع عملية اكتشاف الثغرات والتحليل.',
    items: [
      'يعمل خلال مهام الفحص المجدولة أو عند طلب الوكيل.',
      'فحص سريع للأداء وتقليل الضوضاء.',
      'يساعد في اكتشاف الثغرات والمنافذ المكشوفة.',
      'جمع بيانات وصفية إضافية (مثل معلومات شهادة TLS).',
      'تُمرَّر النتائج المُثراة إلى خطوط أنابيب بصمة الخدمة واكتشاف الأصول لإجراء تقييمات أعمق وتوافق البيانات باستخدام محرك CyfroAI Engine.',
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [{ id: 'overview', label: 'نظرة عامة' }],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function NetworkDiscoveryPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
          dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview}
        </p>

        <ol className="space-y-4 cy-text-secondary text-sm mb-10">
          {c.items.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                {i + 1}
              </span>
              <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
            </li>
          ))}
        </ol>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.tocTitle}
          </p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block"
                  dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
