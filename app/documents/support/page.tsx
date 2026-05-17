'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Getting Started',
    title: 'Logging Support Tickets',
    overview: 'Use the support form in the CyfroSec portal to submit issues, attach logs or screenshots, and receive help from the support team. Tickets are delivered to our support inbox and are not stored in the product database.',
    contactNote: 'Need Help? Contact our Support Team at',
    whatCanSendTitle: 'What You Can Send',
    whatCanSendItems: [
      'Issue type (e.g., CyfroAssistant, Asset Discovery, Dashboard)',
      'Scan name for scan-related issues',
      'Description and frequency',
      'Optional files (logs, screenshots)',
    ],
    helpfulDetailsTitle: 'Helpful Details to Include',
    helpfulDetailsItems: [
      'What you expected vs what happened',
      'When the issue started',
      'Whether the issue is reproducible',
      'Links or screenshots, if available',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',          label: 'Overview' },
      { id: 'what-you-can-send', label: 'What You Can Send' },
      { id: 'helpful-details',   label: 'Helpful Details to Include' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'البدء',
    title: 'تسجيل تذاكر الدعم',
    overview: 'استخدم نموذج الدعم في بوابة CyfroSec لتقديم المشكلات وإرفاق السجلات أو لقطات الشاشة والحصول على المساعدة من فريق الدعم. يتم تسليم التذاكر إلى صندوق بريد الدعم ولا تُخزَّن في قاعدة بيانات المنتج.',
    contactNote: 'هل تحتاج مساعدة؟ تواصل مع فريق الدعم على',
    whatCanSendTitle: 'ما يمكنك إرساله',
    whatCanSendItems: [
      'نوع المشكلة (مثل CyfroAssistant، اكتشاف الأصول، لوحة التحكم)',
      'اسم الفحص للمشكلات المتعلقة بالفحص',
      'الوصف والتكرار',
      'ملفات اختيارية (سجلات، لقطات شاشة)',
    ],
    helpfulDetailsTitle: 'تفاصيل مفيدة للتضمين',
    helpfulDetailsItems: [
      'ما توقعته مقابل ما حدث',
      'متى بدأت المشكلة',
      'هل المشكلة قابلة للتكرار',
      'روابط أو لقطات شاشة، إن توفرت',
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',          label: 'نظرة عامة' },
      { id: 'what-you-can-send', label: 'ما يمكنك إرساله' },
      { id: 'helpful-details',   label: 'تفاصيل مفيدة للتضمين' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function SupportPage() {
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

        <p className="cy-text-secondary leading-relaxed mb-6" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview}
        </p>

        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-10" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.contactNote}{' '}
          <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline" dir="ltr" lang="en">support@cyfrosec.com</a>
        </div>

        <hr className="cy-border-default mb-10" />

        {/* What You Can Send */}
        <section id="what-you-can-send" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.whatCanSendTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.whatCanSendItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Helpful Details */}
        <section id="helpful-details" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.helpfulDetailsTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.helpfulDetailsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

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
