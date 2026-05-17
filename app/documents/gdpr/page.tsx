'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Security & Compliance',
    title: 'GDPR Compliance Tool',
    overview1: 'The GDPR Compliance page provides an automated, evidence based assessment of your security posture against GDPR oriented control categories.',
    overview2: 'It combines scan evidence, category scoring, finding severity, control catalog provenance and coverage metadata so teams can track risk and remediation readiness.',
    accessingTitle: 'Accessing GDPR Compliance',
    accessingItems: [
      'Use the GDPR Compliance widget for a compact summary.',
      'Open the full GDPR Compliance page for category-level findings and catalog details.',
    ],
    scopeTitle: 'Data Scope and Source',
    scopeIntro: 'The GDPR report is generated from recent account-group scan submissions, including:',
    scopeItems: [
      'Network Discovery data',
      'Fingerprint/vulnerability scan data',
      'Asset Discovery data',
    ],
    scopeNote1: 'By default, the page shows account-group aggregate compliance posture.',
    scopeNote2: 'If no account group is selected, the page prompts you to select one.',
    pageTitle: 'Page Overview',
    pageIntro: 'The full page includes:',
    pageItems: [
      'Header and Controls',
      'Overall Score',
      'Scan Data and Catalog Metadata',
      'Category Breakdown with Drill-Down Findings',
    ],
    headerTitle: 'Header and Controls',
    headerIntro: 'Top actions:',
    headerItems: [
      'Refresh: Triggers report recalculation for the selected account group and reloads the page data.',
      'Refresh Catalog: Triggers a catalog refresh and reloads report/catalog status.',
    ],
    headerNote: 'The header also shows report timestamp and account-group context.',
    scoreTitle: 'Overall Score',
    scoreIntro: 'The top panel displays:',
    scoreItems: [
      'Overall score (0-100)',
      'Score label (for example: Excellent, Good, Needs Improvement, Poor, Critical)',
      'Trend delta when historical points are available',
      'Critical, High, and Total finding counts',
      'Evidence coverage percentage',
      'Not-evaluable control count',
    ],
    windowTitle: 'Scan Data Window',
    windowIntro: 'When available, the page displays the report\'s scan data time window:',
    windowItems: ['Window start timestamp', 'Window end timestamp'],
    windowNote: 'This helps confirm the evidence period used for evaluation.',
    categoryTitle: 'Category Breakdown',
    categoryIntro: 'Each category card shows:',
    categoryItems: [
      'Category name and GDPR article reference',
      'Category score',
      'Finding count',
      'Severity breakdown chips',
      'Expand/collapse interaction',
    ],
    categoryNote: 'Categories are sorted by score (lower scores first) on the full page to surface higher-priority gaps.',
    severityTitle: 'Severity Filter',
    severityIntro: 'You can filter visible findings by severity:',
    severityItems: ['All', 'Critical', 'High', 'Medium', 'Low', 'Info'],
    severityNote: 'Selecting a severity auto-expands categories that contain matching findings.',
    detailsTitle: 'Finding Details',
    detailsIntro: 'Expanded findings include:',
    detailsItems: [
      'Title and affected asset/resource',
      'Severity',
      'GDPR article reference',
      'Description',
      'Remediation guidance',
    ],
    catalogWrapTitle: 'Catalog Provenance and Health',
    catalogWrapIntro: 'The page includes a catalog section to show how controls were evaluated.',
    provenanceTitle: 'Catalog Provenance',
    provenanceIntro: 'Displays:',
    provenanceItems: [
      'Catalog version',
      'Catalog generation timestamp',
      'Source summary cards (display name, authority/type, status)',
      'Optional fallback badge and reason when seed fallback is active',
    ],
    healthTitle: 'Catalog Health',
    healthIntro: 'Displays:',
    healthItems: [
      'Control count',
      'Source count',
      'Evaluation mode (Official only or Hybrid)',
      'Sync status',
    ],
    healthNote: 'This metadata supports auditability and trust in control mapping.',
    widgetTitle: 'Widget vs Full Page',
    widgetSubTitle: 'Dashboard Widget',
    widgetIntro: 'The dashboard GDPR card provides a compact snapshot:',
    widgetItems: [
      'Donut score',
      'Trend delta',
      'Critical/High/Total quick counters',
      'Category score mini-bars',
      'Manual refresh button',
    ],
    fullSubTitle: 'Full GDPR Compliance Page',
    fullIntro: 'Use the full page for:',
    fullItems: [
      'Severity filtering',
      'Category-by-category finding drill-down',
      'Catalog provenance and health',
      'Evidence coverage and not-evaluable controls',
      'Scan data window review',
    ],
    statesTitle: 'Empty, Pending, and Error States',
    statesNoGroup: 'No Account Group Selected',
    statesNoGroupBody: 'Prompt shown to select an account group first.',
    statesNoReport: 'No Report Yet',
    statesNoReportBody: 'If no report exists yet, the page shows an empty state and allows manual generation via Refresh.',
    statesPending: 'Pending/Timeout Cases',
    statesPendingBody: 'If processing is still underway or times out, the UI may show a wait-style message indicating report generation is in progress.',
    statesError: 'Error State',
    statesErrorBody: 'If loading fails, an error panel appears with retry capability.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What does evidence coverage mean?',
        a: 'It indicates how much of the control set had sufficient scan evidence for evaluation.',
      },
      {
        q: 'What are not-evaluable controls?',
        a: 'Controls that could not be reliably evaluated from the available evidence window.',
      },
      {
        q: 'Why does score sometimes drop after new scans?',
        a: 'New evidence can surface additional findings or change control outcomes.',
      },
      {
        q: 'Why is a fallback catalog shown?',
        a: 'If upstream catalog sync is temporarily unavailable, CyfroSec can use a seed fallback snapshot to keep reporting available.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing GDPR Compliance' },
      { id: 'data-scope', label: 'Data Scope and Source' },
      { id: 'page-overview', label: 'Page Overview' },
      { id: 'header-controls', label: 'Header and Controls' },
      { id: 'overall-score', label: 'Overall Score' },
      { id: 'scan-data-window', label: 'Scan Data Window' },
      { id: 'category-breakdown', label: 'Category Breakdown' },
      { id: 'severity-filter', label: 'Severity Filter' },
      { id: 'finding-details', label: 'Finding Details' },
      { id: 'catalog-provenance', label: 'Catalog Provenance' },
      { id: 'catalog-health', label: 'Catalog Health' },
      { id: 'widget-vs-page', label: 'Widget vs Full Page' },
      { id: 'empty-states', label: 'Empty, Pending, Error States' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'الأمان والامتثال',
    title: 'أداة الامتثال للائحة GDPR',
    overview1: 'توفر صفحة الامتثال للائحة GDPR تقييماً آلياً قائماً على الأدلة لوضعك الأمني مقابل فئات الضوابط الموجهة للائحة GDPR.',
    overview2: 'وهي تجمع بين أدلة الفحص ودرجات الفئات وخطورة النتائج ومصدر كتالوج الضوابط وبيانات التغطية حتى تتمكن الفرق من تتبع المخاطر وجاهزية المعالجة.',
    accessingTitle: 'الوصول إلى الامتثال للائحة GDPR',
    accessingItems: [
      'استخدم أداة GDPR في لوحة التحكم للحصول على ملخص سريع.',
      'افتح صفحة الامتثال الكاملة للحصول على نتائج على مستوى الفئات وتفاصيل الكتالوج.',
    ],
    scopeTitle: 'نطاق البيانات ومصدرها',
    scopeIntro: 'يتم إنشاء تقرير GDPR من عمليات إرسال الفحص الحديثة لمجموعة الحسابات، بما في ذلك:',
    scopeItems: [
      'بيانات اكتشاف الشبكة',
      'بيانات البصمة وفحص الثغرات',
      'بيانات اكتشاف الأصول',
    ],
    scopeNote1: 'تعرض الصفحة افتراضياً وضع الامتثال المجمع على مستوى مجموعة الحسابات.',
    scopeNote2: 'إذا لم يتم تحديد مجموعة حسابات، فستطلب الصفحة منك اختيار واحدة.',
    pageTitle: 'نظرة عامة على الصفحة',
    pageIntro: 'تتضمن الصفحة الكاملة:',
    pageItems: [
      'الرأس وعناصر التحكم',
      'الدرجة الإجمالية',
      'بيانات الفحص وبيانات الكتالوج الوصفية',
      'تفصيل الفئات مع النتائج القابلة للتوسيع',
    ],
    headerTitle: 'الرأس وعناصر التحكم',
    headerIntro: 'الإجراءات العلوية:',
    headerItems: [
      'تحديث: يعيد حساب التقرير لمجموعة الحسابات المحددة ويعيد تحميل بيانات الصفحة.',
      'تحديث الكتالوج: يشغّل تحديثاً للكتالوج ويعيد تحميل حالة التقرير والكتالوج.',
    ],
    headerNote: 'كما يعرض الرأس الطابع الزمني للتقرير وسياق مجموعة الحسابات.',
    scoreTitle: 'الدرجة الإجمالية',
    scoreIntro: 'تعرض اللوحة العلوية:',
    scoreItems: [
      'الدرجة الإجمالية (0-100)',
      'تصنيف الدرجة (مثل: ممتاز، جيد، يحتاج إلى تحسين، ضعيف، حرج)',
      'فرق الاتجاه عند توفر نقاط تاريخية',
      'أعداد النتائج الحرجة والعالية والإجمالية',
      'نسبة تغطية الأدلة',
      'عدد الضوابط غير القابلة للتقييم',
    ],
    windowTitle: 'نافذة بيانات الفحص',
    windowIntro: 'عند توفرها، تعرض الصفحة نافذة بيانات الفحص الخاصة بالتقرير:',
    windowItems: ['الطابع الزمني لبداية النافذة', 'الطابع الزمني لنهاية النافذة'],
    windowNote: 'يساعد ذلك على تأكيد فترة الأدلة المستخدمة في التقييم.',
    categoryTitle: 'تفصيل الفئات',
    categoryIntro: 'تعرض كل بطاقة فئة:',
    categoryItems: [
      'اسم الفئة وإشارة مادة GDPR',
      'درجة الفئة',
      'عدد النتائج',
      'شرائح توزيع الخطورة',
      'إمكانية التوسيع والطي',
    ],
    categoryNote: 'يتم ترتيب الفئات حسب الدرجة (الأقل أولاً) في الصفحة الكاملة لإبراز الفجوات الأعلى أولوية.',
    severityTitle: 'مرشح الخطورة',
    severityIntro: 'يمكنك تصفية النتائج الظاهرة حسب الخطورة:',
    severityItems: ['الكل', 'حرجة', 'عالية', 'متوسطة', 'منخفضة', 'معلوماتية'],
    severityNote: 'يؤدي اختيار مستوى خطورة إلى توسيع الفئات التي تحتوي على نتائج مطابقة تلقائياً.',
    detailsTitle: 'تفاصيل النتائج',
    detailsIntro: 'تتضمن النتائج الموسعة:',
    detailsItems: [
      'العنوان والأصل/المورد المتأثر',
      'الخطورة',
      'إشارة مادة GDPR',
      'الوصف',
      'إرشادات المعالجة',
    ],
    catalogWrapTitle: 'مصدر الكتالوج وصحته',
    catalogWrapIntro: 'تتضمن الصفحة قسماً خاصاً بالكتالوج لإظهار كيفية تقييم الضوابط.',
    provenanceTitle: 'مصدر الكتالوج',
    provenanceIntro: 'يعرض:',
    provenanceItems: [
      'إصدار الكتالوج',
      'الطابع الزمني لإنشاء الكتالوج',
      'بطاقات ملخص المصادر (اسم العرض، الجهة/النوع، الحالة)',
      'شارة بديلة اختيارية وسببها عند تفعيل النسخة الاحتياطية الأولية',
    ],
    healthTitle: 'صحة الكتالوج',
    healthIntro: 'يعرض:',
    healthItems: [
      'عدد الضوابط',
      'عدد المصادر',
      'وضع التقييم (رسمي فقط أو هجين)',
      'حالة المزامنة',
    ],
    healthNote: 'تدعم هذه البيانات الوصفية قابلية التدقيق والثقة في ربط الضوابط.',
    widgetTitle: 'الأداة مقابل الصفحة الكاملة',
    widgetSubTitle: 'أداة لوحة التحكم',
    widgetIntro: 'توفر بطاقة GDPR في لوحة التحكم لقطة سريعة مدمجة:',
    widgetItems: [
      'درجة دائرية',
      'فرق الاتجاه',
      'عدادات سريعة للحرج/العالي/الإجمالي',
      'أشرطة مصغرة لدرجات الفئات',
      'زر تحديث يدوي',
    ],
    fullSubTitle: 'صفحة الامتثال الكاملة لـ GDPR',
    fullIntro: 'استخدم الصفحة الكاملة من أجل:',
    fullItems: [
      'تصفية الخطورة',
      'تفصيل النتائج حسب كل فئة',
      'مصدر الكتالوج وصحته',
      'تغطية الأدلة والضوابط غير القابلة للتقييم',
      'مراجعة نافذة بيانات الفحص',
    ],
    statesTitle: 'الحالات الفارغة وحالات الانتظار والخطأ',
    statesNoGroup: 'عدم تحديد مجموعة حسابات',
    statesNoGroupBody: 'تُعرض مطالبة لاختيار مجموعة حسابات أولاً.',
    statesNoReport: 'لا يوجد تقرير بعد',
    statesNoReportBody: 'إذا لم يوجد تقرير بعد، تعرض الصفحة حالة فارغة وتتيح الإنشاء اليدوي عبر التحديث.',
    statesPending: 'حالات الانتظار/انتهاء المهلة',
    statesPendingBody: 'إذا كانت المعالجة ما تزال جارية أو انتهت مهلتها، فقد تعرض الواجهة رسالة انتظار تشير إلى أن إنشاء التقرير قيد التقدم.',
    statesError: 'حالة الخطأ',
    statesErrorBody: 'إذا فشل التحميل، تظهر لوحة خطأ مع إمكانية إعادة المحاولة.',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'ماذا تعني تغطية الأدلة؟',
        a: 'تشير إلى مقدار مجموعة الضوابط التي كان لها أدلة فحص كافية للتقييم.',
      },
      {
        q: 'ما هي الضوابط غير القابلة للتقييم؟',
        a: 'هي الضوابط التي لم يكن من الممكن تقييمها بشكل موثوق من نافذة الأدلة المتاحة.',
      },
      {
        q: 'لماذا تنخفض الدرجة أحياناً بعد فحوصات جديدة؟',
        a: 'قد تكشف الأدلة الجديدة عن نتائج إضافية أو تغيّر مخرجات تقييم الضوابط.',
      },
      {
        q: 'لماذا يظهر كتالوج احتياطي؟',
        a: 'إذا كانت مزامنة الكتالوج الأساسية غير متاحة مؤقتاً، يمكن لـ CyfroSec استخدام لقطة احتياطية أولية للحفاظ على توفر التقارير.',
      },
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'accessing', label: 'الوصول إلى الامتثال للائحة GDPR' },
      { id: 'data-scope', label: 'نطاق البيانات ومصدرها' },
      { id: 'page-overview', label: 'نظرة عامة على الصفحة' },
      { id: 'header-controls', label: 'الرأس وعناصر التحكم' },
      { id: 'overall-score', label: 'الدرجة الإجمالية' },
      { id: 'scan-data-window', label: 'نافذة بيانات الفحص' },
      { id: 'category-breakdown', label: 'تفصيل الفئات' },
      { id: 'severity-filter', label: 'مرشح الخطورة' },
      { id: 'finding-details', label: 'تفاصيل النتائج' },
      { id: 'catalog-provenance', label: 'مصدر الكتالوج' },
      { id: 'catalog-health', label: 'صحة الكتالوج' },
      { id: 'widget-vs-page', label: 'الأداة مقابل الصفحة' },
      { id: 'empty-states', label: 'الحالات الفارغة وحالات الانتظار والخطأ' },
      { id: 'faq', label: 'الأسئلة الشائعة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

function NumberedList({
  items,
  isAr,
}: {
  items: string[]
  isAr: boolean
}) {
  return (
    <ol className="space-y-4 cy-text-secondary text-sm">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
          <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
        </li>
      ))}
    </ol>
  )
}

export default function GdprPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.category}</p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.overview1}</p>
        <p className="cy-text-secondary leading-relaxed mb-10" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.overview2}</p>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingTitle}</h2>
          <NumberedList items={c.accessingItems} isAr={isAr} />
        </section>

        <section id="data-scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scopeTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scopeIntro}</p>
          <NumberedList items={c.scopeItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mb-2 mt-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scopeNote1}</p>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scopeNote2}</p>
        </section>

        <section id="page-overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.pageTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.pageIntro}</p>
          <NumberedList items={c.pageItems} isAr={isAr} />

          <h3 id="header-controls" className="text-base font-semibold cy-text-primary mb-2 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.headerTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.headerIntro}</p>
          <NumberedList items={c.headerItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mt-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.headerNote}</p>
        </section>

        <section id="overall-score" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scoreTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scoreIntro}</p>
          <NumberedList items={c.scoreItems} isAr={isAr} />

          <h3 id="scan-data-window" className="text-base font-semibold cy-text-primary mb-2 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.windowTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.windowIntro}</p>
          <NumberedList items={c.windowItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mt-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.windowNote}</p>
        </section>

        <section id="category-breakdown" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.categoryTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.categoryIntro}</p>
          <NumberedList items={c.categoryItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mb-6 mt-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.categoryNote}</p>

          <h3 id="severity-filter" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.severityTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.severityIntro}</p>
          <NumberedList items={c.severityItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mb-5 mt-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.severityNote}</p>

          <h3 id="finding-details" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.detailsTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.detailsIntro}</p>
          <NumberedList items={c.detailsItems} isAr={isAr} />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.catalogWrapTitle}</h2>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.catalogWrapIntro}</p>

          <h3 id="catalog-provenance" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.provenanceTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.provenanceIntro}</p>
          <NumberedList items={c.provenanceItems} isAr={isAr} />

          <h3 id="catalog-health" className="text-base font-semibold cy-text-primary mb-3 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.healthTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.healthIntro}</p>
          <NumberedList items={c.healthItems} isAr={isAr} />
          <p className="cy-text-secondary text-sm mt-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.healthNote}</p>
        </section>

        <section id="widget-vs-page" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.widgetTitle}</h2>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.widgetSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.widgetIntro}</p>
          <NumberedList items={c.widgetItems} isAr={isAr} />

          <h3 className="text-base font-semibold cy-text-primary mb-2 mt-8" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.fullSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.fullIntro}</p>
          <NumberedList items={c.fullItems} isAr={isAr} />
        </section>

        <section id="empty-states" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesTitle}</h2>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesNoGroup}</h3>
          <p className="cy-text-secondary text-sm mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesNoGroupBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesNoReport}</h3>
          <p className="cy-text-secondary text-sm mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesNoReportBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesPending}</h3>
          <p className="cy-text-secondary text-sm mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesPendingBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesError}</h3>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statesErrorBody}</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.faqTitle}</h2>
          <div className="space-y-5">
            {c.faqs.map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{q}</p>
                <p className="text-sm cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{a}</p>
              </div>
            ))}
          </div>
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
