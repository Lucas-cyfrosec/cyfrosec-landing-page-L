'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAI Engine',
    title: 'CyfroAI Insights',
    overview1: 'CyfroAI Insights are generated automatically after a scan interval completes. You do not need to click anything to trigger analysis. As long as scans are running and vulnerabilities/misconfigurations/secrets are found, CyfroAI Insights will appear.',
    overview2: 'Our CyfroAI Engine receives the raw scan findings (open ports, detected CVEs, misconfigurations, exposed secrets) alongside network topology context (which hosts are reachable from where) and produces:',
    overviewItems: [
      'An Executive Summary: An easily understandable overview of the most important security findings from that scan run.',
      'A Prioritized Risk List: Vulnerabilities re-ranked using exposure correlation, not just CVSS severity alone.',
    ],
    executiveSummaryTitle: 'Executive Summary',
    executiveSummaryDesc: 'An easily understandable summary of who is affected and what matters the most at a glance. A gradient card (Brain icon header) containing AI-generated paragraphs that describe:',
    executiveSummaryItems: [
      'The overall security posture from this scan.',
      'The most significant findings in plain language.',
      'Any patterns or correlations across multiple findings.',
    ],
    executiveSummaryNote: 'CVE IDs mentioned in the summary are automatically linked to the corresponding entry in the Report page. Click any CVE ID to jump directly to its full detail.',
    prioritizedRisksTitle: 'Prioritized Risks',
    prioritizedRisksDesc: 'A ranked list of the most important vulnerabilities from this scan, sorted by AI-assessed effective risk rather than raw CVSS score alone. Each risk card can be expanded for full detail.',
    collapsedTitle: 'Collapsed card view:',
    collapsedHeaders: ['Element', 'Description'],
    collapsedRows: [
      ['Rank', 'AI-assigned priority order (1 = highest risk)'],
      ['Base Severity', 'Original scanner severity: Critical / High / Medium / Low'],
      ['Effective Risk', 'AI-adjusted severity after factoring in exposure and reachability'],
      ['CVE / Finding ID', 'The vulnerability identifier (monospace)'],
      ['Reachable badge', 'Animated badge shown when the finding is confirmed reachable from outside your local network'],
      ['Exposure status', 'Exposed (red), Local Only (amber), or Unconfirmed (blue)'],
      ['Title', 'Short description of the vulnerability'],
      ['Open in Reports', 'Deep link to the Report page pre-filtered to this specific finding'],
    ],
    expandedTitle: 'Expanded card view:',
    expandedHeaders: ['Section', 'Description'],
    expandedRows: [
      ['Target', 'The host or IP address affected'],
      ['Package', 'The software package or service version where the vulnerability was found'],
      ['CVSS Score', 'Numeric score from the vulnerability database'],
      ['Reachability Confidence', 'A 0–100% bar showing how confident the AI is that this finding is network-reachable'],
      ['Reasoning & Context', 'AI explanation of why this finding was prioritized, including infrastructure context'],
      ['Recommended Action', 'The single most important remediation step in easily understandable language'],
      ['OS Remediation Commands', 'Ready to run shell commands for patching, broken out by OS (Linux, macOS, Windows) where available'],
      ['Correlation Evidence', 'Technical notes on how exposure was assessed (network path data, open port correlation, etc.)'],
    ],
    expandCollapseNote: 'Use Expand All / Collapse All at the top of the section to open or close all cards at once.',
    sourceTypesTitle: 'Source Types',
    sourceTypesDesc: 'AI Insights can be generated from three types of scans:',
    sourceHeaders: ['Source Type', 'Description'],
    sourceRows: [
      ['Network Discovery', 'Insights derived from network scanning results. Focus on exposed services, open ports, and CVEs mapped to detected service versions.'],
      ['Asset Discovery', 'Insights from host and device discovery scans. Focus on unrecognized devices, MAC vendor anomalies, and unexpected hosts on the network.'],
      ['System Vulnerability Findings', 'Insights from service fingerprinting and vulnerability assessment. Focus on package versions, host level CVEs, misconfigurations, TLS issues, and detected secrets.'],
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',          label: 'Overview' },
      { id: 'executive-summary', label: 'Executive Summary' },
      { id: 'prioritized-risks', label: 'Prioritized Risks' },
      { id: 'collapsed-view',    label: 'Collapsed Card View' },
      { id: 'expanded-view',     label: 'Expanded Card View' },
      { id: 'source-types',      label: 'Source Types' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'محرك CyfroAI',
    title: 'CyfroAI Insights',
    overview1: 'تُنشأ CyfroAI Insights تلقائياً بعد اكتمال فترة الفحص. لا تحتاج إلى النقر على أي شيء لتشغيل التحليل. طالما تعمل الفحوصات وتُكتشف ثغرات/إعدادات خاطئة/أسرار، ستظهر CyfroAI Insights.',
    overview2: 'يستقبل محرك CyfroAI نتائج الفحص الخام (المنافذ المفتوحة، ثغرات CVE المكتشفة، الإعدادات الخاطئة، الأسرار المكشوفة) إلى جانب سياق طوبولوجيا الشبكة (أي المضيفين يمكن الوصول إليهم من أي مكان) وينتج:',
    overviewItems: [
      'ملخص تنفيذي: نظرة عامة سهلة الفهم على أهم نتائج الأمان من دورة الفحص تلك.',
      'قائمة مخاطر مرتبة حسب الأولوية: ثغرات أُعيد ترتيبها باستخدام ارتباط التعرض، وليس درجة CVSS وحدها.',
    ],
    executiveSummaryTitle: 'الملخص التنفيذي',
    executiveSummaryDesc: 'ملخص سهل الفهم عمّن يتأثر وما هو الأهم في لمحة سريعة. بطاقة متدرجة اللون (رأس أيقونة دماغ) تحتوي على فقرات مُنشأة بالذكاء الاصطناعي تصف:',
    executiveSummaryItems: [
      'الوضع الأمني العام من هذا الفحص.',
      'أهم النتائج بلغة بسيطة.',
      'أي أنماط أو ارتباطات عبر نتائج متعددة.',
    ],
    executiveSummaryNote: 'تُربط معرفات CVE المذكورة في الملخص تلقائياً بالإدخال المقابل في صفحة التقارير. انقر على أي معرف CVE للانتقال مباشرة إلى تفاصيله الكاملة.',
    prioritizedRisksTitle: 'المخاطر المرتبة حسب الأولوية',
    prioritizedRisksDesc: 'قائمة مرتبة بأهم الثغرات من هذا الفحص، مصنفة حسب المخاطر الفعلية المُقيَّمة بالذكاء الاصطناعي وليس درجة CVSS الخام وحدها. يمكن توسيع كل بطاقة مخاطر للحصول على التفاصيل الكاملة.',
    collapsedTitle: 'عرض البطاقة المطوية:',
    collapsedHeaders: ['العنصر', 'الوصف'],
    collapsedRows: [
      ['الترتيب', 'ترتيب الأولوية المُعيَّن بالذكاء الاصطناعي (1 = أعلى خطورة)'],
      ['الخطورة الأساسية', 'خطورة الماسح الأصلية: حرجة / عالية / متوسطة / منخفضة'],
      ['المخاطرة الفعلية', 'خطورة مُعدَّلة بالذكاء الاصطناعي بعد مراعاة التعرض وإمكانية الوصول'],
      ['معرف CVE / النتيجة', 'معرف الثغرة (أحادي المسافة)'],
      ['شارة إمكانية الوصول', 'شارة متحركة تظهر عند تأكيد إمكانية الوصول إلى النتيجة من خارج شبكتك المحلية'],
      ['حالة التعرض', 'مكشوف (أحمر)، محلي فقط (كهرماني)، أو غير مؤكد (أزرق)'],
      ['العنوان', 'وصف مختصر للثغرة'],
      ['فتح في التقارير', 'رابط عميق لصفحة التقارير مُفلتَرة مسبقاً لهذه النتيجة المحددة'],
    ],
    expandedTitle: 'عرض البطاقة الموسّعة:',
    expandedHeaders: ['القسم', 'الوصف'],
    expandedRows: [
      ['الهدف', 'المضيف أو عنوان IP المتأثر'],
      ['الحزمة', 'حزمة البرنامج أو إصدار الخدمة حيث وُجدت الثغرة'],
      ['درجة CVSS', 'درجة رقمية من قاعدة بيانات الثغرات'],
      ['ثقة إمكانية الوصول', 'شريط 0-100% يُظهر مدى ثقة الذكاء الاصطناعي في إمكانية الوصول الشبكي لهذه النتيجة'],
      ['التفسير والسياق', 'شرح الذكاء الاصطناعي لماذا أُعطيت هذه النتيجة الأولوية، بما في ذلك سياق البنية التحتية'],
      ['الإجراء الموصى به', 'الخطوة الأهم الواحدة للمعالجة بلغة سهلة الفهم'],
      ['أوامر معالجة نظام التشغيل', 'أوامر shell جاهزة للتنفيذ للتصحيح، مقسمة حسب نظام التشغيل (Linux، macOS، Windows) حيث متاح'],
      ['أدلة الارتباط', 'ملاحظات تقنية حول كيفية تقييم التعرض (بيانات مسار الشبكة، ارتباط المنافذ المفتوحة، إلخ)'],
    ],
    expandCollapseNote: 'استخدم "توسيع الكل" / "طي الكل" في أعلى القسم لفتح أو إغلاق جميع البطاقات دفعة واحدة.',
    sourceTypesTitle: 'أنواع المصادر',
    sourceTypesDesc: 'يمكن إنشاء AI Insights من ثلاثة أنواع من الفحوصات:',
    sourceHeaders: ['نوع المصدر', 'الوصف'],
    sourceRows: [
      ['اكتشاف الشبكة', 'رؤى مشتقة من نتائج فحص الشبكة. التركيز على الخدمات المكشوفة والمنافذ المفتوحة وثغرات CVE المرتبطة بإصدارات الخدمات المكتشفة.'],
      ['اكتشاف الأصول', 'رؤى من فحوصات اكتشاف المضيفين والأجهزة. التركيز على الأجهزة غير المعروفة وشذوذات بائع MAC والمضيفين غير المتوقعين على الشبكة.'],
      ['نتائج ثغرات النظام', 'رؤى من بصمة الخدمات وتقييم الثغرات. التركيز على إصدارات الحزم وثغرات CVE على مستوى المضيف والإعدادات الخاطئة ومشكلات TLS والأسرار المكتشفة.'],
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',          label: 'نظرة عامة' },
      { id: 'executive-summary', label: 'الملخص التنفيذي' },
      { id: 'prioritized-risks', label: 'المخاطر المرتبة' },
      { id: 'collapsed-view',    label: 'عرض البطاقة المطوية' },
      { id: 'expanded-view',     label: 'عرض البطاقة الموسّعة' },
      { id: 'source-types',      label: 'أنواع المصادر' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function AiInsightsPage() {
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
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview2}
        </p>
        <ol className="space-y-4 cy-text-secondary text-sm mb-10">
          {c.overviewItems.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                {i + 1}
              </span>
              <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        {/* Executive Summary */}
        <section id="executive-summary" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.executiveSummaryTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.executiveSummaryDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.executiveSummaryItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.executiveSummaryNote}
          </p>
        </section>

        {/* Prioritized Risks */}
        <section id="prioritized-risks" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.prioritizedRisksTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.prioritizedRisksDesc}
          </p>

          <h3 id="collapsed-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.collapsedTitle}
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.collapsedHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.collapsedRows.map(([el, desc]) => (
                  <tr key={el} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{el}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 id="expanded-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.expandedTitle}
          </h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.expandedHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.expandedRows.map(([section, desc]) => (
                  <tr key={section} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{section}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.expandCollapseNote}
          </p>
        </section>

        {/* Source Types */}
        <section id="source-types" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.sourceTypesTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.sourceTypesDesc}
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.sourceHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.sourceRows.map(([source, desc]) => (
                  <tr key={source} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{source}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
