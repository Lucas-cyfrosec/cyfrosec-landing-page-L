'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Asset Topology Diagram',
    overview1: 'The Asset Topology Diagram gives you a unified network view of discovered assets and their correlated security context.',
    overview2: 'It combines:',
    overviewItems: [
      'Discovered topology relationships',
      'Open-port evidence',
      'Fingerprint summaries',
      'CyfroAI insight highlights',
      'Ranked risk context',
    ],
    accessingTitle: 'Accessing the Topology View',
    accessingBody1: 'The page loads topology data for the currently selected account group.',
    accessingBody2: 'If no topology data exists yet, the page shows an empty state with guidance to run discovery/scanning first.',
    desktopTitle: 'Desktop Experience',
    desktopIntro: 'On desktop, topology renders as an interactive workspace with:',
    desktopItems: [
      'Toolbar and filters',
      'Interactive graph canvas',
      'Integrated asset detail drawer',
    ],
    toolbarTitle: 'Toolbar Summary Chips',
    toolbarIntro: 'The top summary row shows current snapshot counts:',
    toolbarItems: ['Assets', 'Subnets', 'Ports', 'Fingerprint', 'CyfroAI Insights', 'Critical'],
    toolbarNote: 'It also shows the snapshot generation timestamp and a Refresh action.',
    filtersTitle: 'Filters',
    filtersIntro: 'The filter toolbar supports:',
    filtersItems: [
      'Search (IP, hostname, service, CVE, vendor, AI text)',
      'Subnet selector',
      'Risk only toggle',
      'Time window selector (7d, 14d, 30d, 90d)',
    ],
    graphTitle: 'Graph Controls',
    graphIntro: 'The canvas includes:',
    graphItems: [
      'Fit (fit graph to viewport)',
      'Reflow (re-run layout)',
      'Zoom controls',
      'Fullscreen toggle',
    ],
    assetTitle: 'Asset Detail Panel',
    assetIntro: 'Selecting an asset opens a detail panel with structured sections:',
    assetItems: [
      'Asset metadata',
      'Port Evidence',
      'Fingerprint Summary',
      'AI Insights',
      'Top Risks',
      'Correlation Notes',
    ],
    portTitle: 'Port Evidence',
    portIntro: 'Shows correlated service observations such as:',
    portItems: [
      'Port/protocol',
      'Service or product hints',
      'State and severity context',
    ],
    fingerprintTitle: 'Fingerprint Summary',
    fingerprintIntro: 'Shows fingerprint correlation details including:',
    fingerprintItems: [
      'Target identity',
      'Highest severity',
      'Vulnerability count',
      'Misconfiguration/secret counts',
    ],
    aiTitle: 'AI Insights',
    aiIntro: 'Shows asset-linked AI summaries with:',
    aiItems: [
      'Source type',
      'Timestamp',
      'Highest risk badge',
      'Short summary lines',
    ],
    aiNote: 'The panel includes a direct link to the full AI page for deeper review.',
    risksTitle: 'Top Risks',
    risksIntro: 'Lists prioritized risks with:',
    risksItems: [
      'Title',
      'Vulnerability/package/target context',
      'Effective risk level',
      'AI-provided reasoning',
    ],
    correlationTitle: 'Correlation Behavior',
    correlationBody1: 'CyfroSec uses conservative correlation rules. Evidence is attached to an asset only when identity mapping is reliable.',
    correlationBody2: 'If a finding cannot be safely matched, it is kept separate from direct asset attribution to avoid false linkage.',
    correlationIntro: 'Examples that commonly require additional context:',
    correlationItems: [
      'Generic or filesystem fingerprint targets',
      'Scan artifacts without host identity metadata',
      'Ambiguous multi-host correlation paths',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing the Topology View' },
      { id: 'desktop', label: 'Desktop Experience' },
      { id: 'toolbar', label: 'Toolbar Summary Chips' },
      { id: 'filters', label: 'Filters' },
      { id: 'graph-controls', label: 'Graph Controls' },
      { id: 'asset-detail', label: 'Asset Detail Panel' },
      { id: 'port-evidence', label: 'Port Evidence' },
      { id: 'fingerprint-summary', label: 'Fingerprint Summary' },
      { id: 'ai-insights-panel', label: 'AI Insights' },
      { id: 'top-risks', label: 'Top Risks' },
      { id: 'correlation', label: 'Correlation Behavior' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'دليل المنصة',
    title: 'مخطط طوبولوجيا الأصول',
    overview1: 'يوفر مخطط طوبولوجيا الأصول عرضاً موحداً للشبكة يوضح الأصول المكتشفة وسياقها الأمني المرتبط.',
    overview2: 'وهو يجمع بين:',
    overviewItems: [
      'علاقات الطوبولوجيا المكتشفة',
      'أدلة المنافذ المفتوحة',
      'ملخصات البصمات',
      'أبرز رؤى CyfroAI',
      'سياق المخاطر المرتبة',
    ],
    accessingTitle: 'الوصول إلى عرض الطوبولوجيا',
    accessingBody1: 'تقوم الصفحة بتحميل بيانات الطوبولوجيا لمجموعة الحسابات المحددة حالياً.',
    accessingBody2: 'إذا لم توجد بيانات طوبولوجيا بعد، فستعرض الصفحة حالة فارغة مع إرشادات لتشغيل الاكتشاف أو الفحص أولاً.',
    desktopTitle: 'تجربة سطح المكتب',
    desktopIntro: 'على سطح المكتب، تُعرض الطوبولوجيا كمساحة عمل تفاعلية تتضمن:',
    desktopItems: [
      'شريط الأدوات والمرشحات',
      'لوحة الرسم البياني التفاعلية',
      'درج تفاصيل الأصول المدمج',
    ],
    toolbarTitle: 'شرائح ملخص شريط الأدوات',
    toolbarIntro: 'يعرض صف الملخص العلوي أعداد اللقطة الحالية:',
    toolbarItems: ['الأصول', 'الشبكات الفرعية', 'المنافذ', 'البصمة', 'رؤى CyfroAI', 'حرجة'],
    toolbarNote: 'كما يعرض وقت إنشاء اللقطة وإجراء التحديث.',
    filtersTitle: 'المرشحات',
    filtersIntro: 'يدعم شريط المرشحات:',
    filtersItems: [
      'البحث (IP، اسم المضيف، الخدمة، CVE، المورّد، نص الذكاء الاصطناعي)',
      'محدد الشبكة الفرعية',
      'مفتاح المخاطر فقط',
      'محدد النافذة الزمنية (7 أيام، 14 يوماً، 30 يوماً، 90 يوماً)',
    ],
    graphTitle: 'عناصر التحكم بالرسم البياني',
    graphIntro: 'تتضمن اللوحة:',
    graphItems: [
      'ملاءمة الرسم مع الإطار',
      'إعادة ترتيب التخطيط',
      'عناصر التحكم بالتكبير',
      'التبديل إلى وضع ملء الشاشة',
    ],
    assetTitle: 'لوحة تفاصيل الأصل',
    assetIntro: 'يؤدي تحديد أصل إلى فتح لوحة تفاصيل بأقسام منظمة:',
    assetItems: [
      'بيانات الأصل الوصفية',
      'أدلة المنافذ',
      'ملخص البصمة',
      'رؤى الذكاء الاصطناعي',
      'أعلى المخاطر',
      'ملاحظات الارتباط',
    ],
    portTitle: 'أدلة المنافذ',
    portIntro: 'تعرض ملاحظات الخدمة المرتبطة مثل:',
    portItems: [
      'المنفذ/البروتوكول',
      'تلميحات الخدمة أو المنتج',
      'سياق الحالة والخطورة',
    ],
    fingerprintTitle: 'ملخص البصمة',
    fingerprintIntro: 'يعرض تفاصيل ارتباط البصمة بما في ذلك:',
    fingerprintItems: [
      'هوية الهدف',
      'أعلى خطورة',
      'عدد الثغرات',
      'أعداد أخطاء الإعداد والأسرار',
    ],
    aiTitle: 'رؤى الذكاء الاصطناعي',
    aiIntro: 'يعرض ملخصات الذكاء الاصطناعي المرتبطة بالأصل مع:',
    aiItems: [
      'نوع المصدر',
      'الطابع الزمني',
      'شارة أعلى مخاطرة',
      'أسطر ملخص قصيرة',
    ],
    aiNote: 'تتضمن اللوحة رابطاً مباشراً إلى صفحة الذكاء الاصطناعي الكاملة للمراجعة المتعمقة.',
    risksTitle: 'أعلى المخاطر',
    risksIntro: 'تسرد المخاطر ذات الأولوية مع:',
    risksItems: [
      'العنوان',
      'سياق الثغرة أو الحزمة أو الهدف',
      'مستوى المخاطر الفعلي',
      'التفسير المقدم من الذكاء الاصطناعي',
    ],
    correlationTitle: 'سلوك الارتباط',
    correlationBody1: 'تستخدم CyfroSec قواعد ارتباط محافظة. لا تُربط الأدلة بالأصل إلا عندما تكون مطابقة الهوية موثوقة.',
    correlationBody2: 'إذا تعذر مطابقة نتيجة ما بأمان، فستظل منفصلة عن الإسناد المباشر للأصل لتجنب الربط الخاطئ.',
    correlationIntro: 'أمثلة تحتاج غالباً إلى سياق إضافي:',
    correlationItems: [
      'أهداف بصمة عامة أو على مستوى نظام الملفات',
      'مخرجات فحص بلا بيانات تعريف للمضيف',
      'مسارات ارتباط غامضة عبر عدة مضيفين',
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'accessing', label: 'الوصول إلى عرض الطوبولوجيا' },
      { id: 'desktop', label: 'تجربة سطح المكتب' },
      { id: 'toolbar', label: 'شرائح ملخص شريط الأدوات' },
      { id: 'filters', label: 'المرشحات' },
      { id: 'graph-controls', label: 'عناصر التحكم بالرسم البياني' },
      { id: 'asset-detail', label: 'لوحة تفاصيل الأصل' },
      { id: 'port-evidence', label: 'أدلة المنافذ' },
      { id: 'fingerprint-summary', label: 'ملخص البصمة' },
      { id: 'ai-insights-panel', label: 'رؤى الذكاء الاصطناعي' },
      { id: 'top-risks', label: 'أعلى المخاطر' },
      { id: 'correlation', label: 'سلوك الارتباط' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function TopologyPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
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
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview2}
        </p>
        <ol className="space-y-4 cy-text-secondary text-sm mb-10">
          {c.overviewItems.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
              <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-2" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingBody1}</p>
          <p className="cy-text-secondary leading-relaxed" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingBody2}</p>
        </section>

        <section id="desktop" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.desktopTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.desktopIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.desktopItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="toolbar" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.toolbarTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.toolbarIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.toolbarItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.toolbarNote}</p>
        </section>

        <section id="filters" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.filtersTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.filtersIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.filtersItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="graph-controls" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.graphTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.graphIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.graphItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="asset-detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.assetTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.assetIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.assetItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="port-evidence" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.portTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.portIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.portItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="fingerprint-summary" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.fingerprintTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.fingerprintIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.fingerprintItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="ai-insights-panel" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.aiTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.aiIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.aiItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.aiNote}</p>

          <h3 id="top-risks" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.risksTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.risksIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.risksItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="correlation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.correlationTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.correlationBody1}</p>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.correlationBody2}</p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.correlationIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.correlationItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.tocTitle}</p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link href="/contact" className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
              <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
