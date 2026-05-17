'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Scans',
    title: 'Service Fingerprinting Scan',
    overview: 'Service Fingerprinting Scan assesses security posture by signature matching of CVEs in installed packages and services, detecting common misconfigurations and scanning for exposed secrets.',
    whatCheckedTitle: 'What is checked:',
    whatCheckedItems: [
      'Known CVEs mapped to installed package and service versions.',
      'Common misconfigurations such as weak TLS ciphers, overly permissive storage, and default credentials.',
      'Secrets in code or configuration (API keys, private keys, tokens).',
    ],
    detectionTitle: 'Detection process:',
    detectionItems: [
      'Fingerprinting: Collect package and service version data from hosts and images.',
      'Vulnerability mapping: Match package/version to vulnerability databases and advisories.',
      'Misconfiguration checks: Run configuration audits and TLS/certificate checks.',
      'Secrets scanning: Run targeted detectors and regex checks on code and configuration artifacts.',
      'Each finding includes a clear description and evidence like file, package details or command output would be provided.',
      'Actionable remediation steps like upgrades, configuration change or credential rotation.',
      'Service Fingerprinting findings are fed into CyfroAI Engine for deep assessments with the other scans to enhance data correlation.',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',          label: 'Overview' },
      { id: 'what-is-checked',   label: 'What is Checked' },
      { id: 'detection-process', label: 'Detection Process' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'الفحوصات',
    title: 'فحص بصمة الخدمات',
    overview: 'يقيّم فحص بصمة الخدمات وضع الأمان من خلال مطابقة التوقيعات للثغرات CVE في الحزم والخدمات المثبتة، واكتشاف الإعدادات الخاطئة الشائعة وفحص الأسرار المكشوفة.',
    whatCheckedTitle: 'ما يتم فحصه:',
    whatCheckedItems: [
      'ثغرات CVE المعروفة المرتبطة بإصدارات الحزم والخدمات المثبتة.',
      'الإعدادات الخاطئة الشائعة مثل أصفار TLS الضعيفة والتخزين المفرط في الأذونات وبيانات الاعتماد الافتراضية.',
      'الأسرار في الكود أو الإعدادات (مفاتيح API، المفاتيح الخاصة، الرموز المميزة).',
    ],
    detectionTitle: 'عملية الاكتشاف:',
    detectionItems: [
      'أخذ بصمة: جمع بيانات إصدار الحزمة والخدمة من المضيفين والصور.',
      'ربط الثغرات: مطابقة الحزمة/الإصدار بقواعد بيانات الثغرات والتحذيرات.',
      'فحوصات الإعدادات الخاطئة: تشغيل عمليات تدقيق الإعدادات وفحوصات TLS/الشهادات.',
      'فحص الأسرار: تشغيل كاشفات مستهدفة وفحوصات regex على الكود وقطع الإعدادات.',
      'يتضمن كل نتيجة وصفاً واضحاً وأدلة مثل الملف وتفاصيل الحزمة أو مخرجات الأوامر.',
      'خطوات علاج قابلة للتنفيذ مثل الترقيات وتغيير الإعدادات أو تدوير بيانات الاعتماد.',
      'تُغذَّى نتائج بصمة الخدمات في محرك CyfroAI Engine لإجراء تقييمات عميقة مع الفحوصات الأخرى لتحسين توافق البيانات.',
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',          label: 'نظرة عامة' },
      { id: 'what-is-checked',   label: 'ما يتم فحصه' },
      { id: 'detection-process', label: 'عملية الاكتشاف' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function ServiceFingerprintingPage() {
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

        <p className="cy-text-secondary leading-relaxed mb-10" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* What is checked */}
        <section id="what-is-checked" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.whatCheckedTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.whatCheckedItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Detection process */}
        <section id="detection-process" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.detectionTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.detectionItems.map((text, i) => (
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
