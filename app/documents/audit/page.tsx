'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Security & Compliance',
    title: 'Audit',
    overview: 'The Audit Logs page gives you a searchable activity trail of user and system actions in your workspace. It is designed for compliance evidence, operational traceability, and incident investigation.',
    accessingTitle: 'Accessing Audit Logs',
    accessingSteps: [
      'Open Settings in the CyfroSec portal.',
      'Select Audit Logs.',
    ],
    accessingAvail: 'Audit Logs are available to:',
    accessingRoles: ['Organization Admin', 'Account Group Admin'],
    accessingNote: 'Standard users without settings access are redirected to the dashboard.',
    whatTitle: 'What You Can See',
    whatIntro: 'The table shows one row per activity event with the following columns:',
    whatHeaders: ['Column', 'Description'],
    whatRows: [
      ['Timestamp', 'When the action occurred (local browser time format)'],
      ['User', 'Display name of the actor (or user ID / System)'],
      ['Description', 'Natural language activity description (or the action type when more detail is not available)'],
      ['Status', 'HTTP response status badge (2xx, 4xx, 5xx, or N/A)'],
      ['Duration', 'Request execution time in milliseconds'],
    ] as [string, string][],
    statusTitle: 'Status Badge Semantics',
    statusHeaders: ['Status range', 'Badge meaning'],
    statusRows: [
      ['200-299', 'Success'],
      ['400-499', 'Client-side issue / rejected request'],
      ['500+', 'Server-side failure'],
      ['Missing status', 'Not available (N/A)'],
    ] as [string, string][],
    searchTitle: 'Search and Filtering',
    searchIntro: 'The Audit Logs page supports both full-text search and structured filters.',
    searchSubTitle: 'Search',
    searchSubIntro: 'Use the search input to match:',
    searchItems: [
      'User display name (or user ID)',
      'Activity description',
    ],
    searchNote: 'Search is debounced to reduce request volume while typing.',
    filtersSubTitle: 'Available Filters',
    filtersSubIntro: 'Click Filters to open advanced filtering controls:',
    filtersHeaders: ['Filter', 'Example'],
    filtersRows: [
      ['Action Type', 'api_request'],
      ['Resource Type', 'user, scan, agent'],
      ['Endpoint', '/api/v1/users'],
      ['IP Address', '192.168.1.10'],
      ['Status Code', '200, 404, 500'],
      ['Start Date', 'Lower bound (datetime)'],
      ['End Date', 'Upper bound (datetime)'],
    ] as [string, string][],
    filtersNote1: 'The page also scopes results to the currently selected account group when applicable.',
    filtersNote2: 'Use Clear All to remove every active filter.',
    paginationTitle: 'Refresh and Pagination',
    paginationIntro: 'Use Refresh to request the newest log data.',
    paginationSubIntro: 'Results are paginated with:',
    paginationItems: [
      '20 rows per page',
      'Previous/Next controls',
      'Footer count: "Showing X of Y logs"',
    ],
    emptyTitle: 'Empty and Error States',
    emptySubTitle: 'Empty State',
    emptyIntro: 'You may see No Audit Logs Found when:',
    emptyItems: [
      'There are no events yet',
      'Current filters/search return zero matches',
    ],
    errorSubTitle: 'Error State',
    errorIntro: 'If loading fails, an error card appears with:',
    errorItems: ['Error summary', 'Retry action'],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do I see fewer rows than expected after searching?',
        a: 'Search is applied to the current page dataset after loading. Move through pages and/or refine structured filters to locate additional events.',
      },
      {
        q: 'Can non-admin users open Audit Logs?',
        a: 'No. Access is limited to Organization Admin and Account Group Admin roles.',
      },
      {
        q: 'Is the timestamp in UTC?',
        a: 'The UI renders timestamps in your browser locale/timezone for readability.',
      },
      {
        q: 'Can I filter by account group?',
        a: 'Yes. Audit queries are scoped by your current account-group context when present.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing Audit Logs' },
      { id: 'what-you-can-see', label: 'What You Can See' },
      { id: 'status-semantics', label: 'Status Badge Semantics' },
      { id: 'search-filtering', label: 'Search and Filtering' },
      { id: 'search', label: 'Search' },
      { id: 'available-filters', label: 'Available Filters' },
      { id: 'pagination', label: 'Refresh and Pagination' },
      { id: 'empty-error', label: 'Empty and Error States' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'الأمان والامتثال',
    title: 'التدقيق',
    overview: 'توفر صفحة سجلات التدقيق مسار نشاط قابلاً للبحث لإجراءات المستخدمين والنظام داخل مساحة عملك. وهي مصممة لأدلة الامتثال والتتبع التشغيلي والتحقيق في الحوادث.',
    accessingTitle: 'الوصول إلى سجلات التدقيق',
    accessingSteps: [
      'افتح الإعدادات في بوابة CyfroSec.',
      'اختر سجلات التدقيق.',
    ],
    accessingAvail: 'سجلات التدقيق متاحة لـ:',
    accessingRoles: ['مسؤول المنظمة', 'مسؤول مجموعة الحسابات'],
    accessingNote: 'يتم تحويل المستخدمين العاديين الذين لا يملكون صلاحية الإعدادات إلى لوحة التحكم.',
    whatTitle: 'ما الذي يمكنك رؤيته',
    whatIntro: 'يعرض الجدول صفاً واحداً لكل حدث نشاط مع الأعمدة التالية:',
    whatHeaders: ['العمود', 'الوصف'],
    whatRows: [
      ['الطابع الزمني', 'وقت حدوث الإجراء (وفق تنسيق الوقت المحلي للمتصفح)'],
      ['المستخدم', 'الاسم المعروض للفاعل (أو معرف المستخدم / النظام)'],
      ['الوصف', 'وصف نشاط بلغة طبيعية أو نوع الإجراء عندما لا تتوفر تفاصيل كافية'],
      ['الحالة', 'شارة حالة استجابة HTTP (2xx أو 4xx أو 5xx أو غير متاح)'],
      ['المدة', 'مدة تنفيذ الطلب بالمللي ثانية'],
    ] as [string, string][],
    statusTitle: 'دلالات شارات الحالة',
    statusHeaders: ['نطاق الحالة', 'معنى الشارة'],
    statusRows: [
      ['200-299', 'نجاح'],
      ['400-499', 'مشكلة من جهة العميل / طلب مرفوض'],
      ['500+', 'فشل من جهة الخادم'],
      ['بدون حالة', 'غير متاح'],
    ] as [string, string][],
    searchTitle: 'البحث والتصفية',
    searchIntro: 'تدعم صفحة سجلات التدقيق كلاً من البحث النصي الكامل والمرشحات المنظمة.',
    searchSubTitle: 'البحث',
    searchSubIntro: 'استخدم حقل البحث لمطابقة:',
    searchItems: [
      'الاسم المعروض للمستخدم (أو معرف المستخدم)',
      'وصف النشاط',
    ],
    searchNote: 'يتم تأخير تنفيذ البحث قليلاً لتقليل عدد الطلبات أثناء الكتابة.',
    filtersSubTitle: 'المرشحات المتاحة',
    filtersSubIntro: 'انقر على المرشحات لفتح عناصر التصفية المتقدمة:',
    filtersHeaders: ['المرشح', 'مثال'],
    filtersRows: [
      ['نوع الإجراء', 'api_request'],
      ['نوع المورد', 'user, scan, agent'],
      ['نقطة النهاية', '/api/v1/users'],
      ['عنوان IP', '192.168.1.10'],
      ['رمز الحالة', '200, 404, 500'],
      ['تاريخ البداية', 'حد أدنى (تاريخ/وقت)'],
      ['تاريخ النهاية', 'حد أعلى (تاريخ/وقت)'],
    ] as [string, string][],
    filtersNote1: 'تقوم الصفحة أيضاً بتحديد النتائج ضمن مجموعة الحسابات المحددة حالياً عندما يكون ذلك قابلاً للتطبيق.',
    filtersNote2: 'استخدم مسح الكل لإزالة جميع المرشحات النشطة.',
    paginationTitle: 'التحديث والتنقل بين الصفحات',
    paginationIntro: 'استخدم التحديث لطلب أحدث بيانات السجل.',
    paginationSubIntro: 'يتم تقسيم النتائج إلى صفحات مع:',
    paginationItems: [
      '20 صفاً في كل صفحة',
      'عناصر السابق/التالي',
      'عداد التذييل: "عرض X من أصل Y سجلات"',
    ],
    emptyTitle: 'الحالات الفارغة وحالات الخطأ',
    emptySubTitle: 'الحالة الفارغة',
    emptyIntro: 'قد تظهر لك رسالة عدم العثور على سجلات تدقيق عندما:',
    emptyItems: [
      'لا توجد أحداث بعد',
      'تعيد المرشحات أو نتائج البحث الحالية صفراً من المطابقات',
    ],
    errorSubTitle: 'حالة الخطأ',
    errorIntro: 'إذا فشل التحميل، تظهر بطاقة خطأ تحتوي على:',
    errorItems: ['ملخص الخطأ', 'إجراء إعادة المحاولة'],
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'لماذا أرى صفوفاً أقل مما توقعت بعد البحث؟',
        a: 'يتم تطبيق البحث على مجموعة بيانات الصفحة الحالية بعد التحميل. تنقل بين الصفحات أو حسّن المرشحات المنظمة للعثور على أحداث إضافية.',
      },
      {
        q: 'هل يمكن للمستخدمين غير الإداريين فتح سجلات التدقيق؟',
        a: 'لا. يقتصر الوصول على مسؤول المنظمة ومسؤول مجموعة الحسابات.',
      },
      {
        q: 'هل الطابع الزمني معروض بتوقيت UTC؟',
        a: 'تعرض الواجهة الطوابع الزمنية وفق إعدادات اللغة والمنطقة الزمنية في متصفحك لسهولة القراءة.',
      },
      {
        q: 'هل يمكنني التصفية حسب مجموعة الحسابات؟',
        a: 'نعم. يتم تحديد استعلامات التدقيق وفق سياق مجموعة الحسابات الحالية عند توفره.',
      },
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'accessing', label: 'الوصول إلى سجلات التدقيق' },
      { id: 'what-you-can-see', label: 'ما الذي يمكنك رؤيته' },
      { id: 'status-semantics', label: 'دلالات شارات الحالة' },
      { id: 'search-filtering', label: 'البحث والتصفية' },
      { id: 'search', label: 'البحث' },
      { id: 'available-filters', label: 'المرشحات المتاحة' },
      { id: 'pagination', label: 'التحديث والتنقل بين الصفحات' },
      { id: 'empty-error', label: 'الحالات الفارغة وحالات الخطأ' },
      { id: 'faq', label: 'الأسئلة الشائعة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function AuditPage() {
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

        <p className="cy-text-secondary leading-relaxed mb-10" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.overview}</p>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingTitle}</h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.accessingSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingAvail}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.accessingRoles.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessingNote}</p>
        </section>

        <section id="what-you-can-see" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.whatTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.whatIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.whatHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.whatRows.map(([col, desc]) => (
                  <tr key={col} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{col}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 id="status-semantics" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statusTitle}</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.statusHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.statusRows.map(([range, meaning]) => (
                  <tr key={range} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{range}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="search-filtering" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.searchTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.searchIntro}</p>

          <h3 id="search" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.searchSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.searchSubIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.searchItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.searchNote}</p>

          <h3 id="available-filters" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.filtersSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.filtersSubIntro}</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.filtersHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.filtersRows.map(([filter, example]) => (
                  <tr key={filter} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{filter}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.filtersNote1}</p>
          <p className="cy-text-secondary text-sm mt-2" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {isAr ? <>استخدم <strong className="cy-text-primary">مسح الكل</strong> لإزالة جميع المرشحات النشطة.</> : <>Use <strong className="cy-text-primary">Clear All</strong> to remove every active filter.</>}
          </p>
        </section>

        <section id="pagination" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.paginationTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {isAr ? <>استخدم <strong className="cy-text-primary">التحديث</strong> لطلب أحدث بيانات السجل.</> : <>Use <strong className="cy-text-primary">Refresh</strong> to request the newest log data.</>}
          </p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.paginationSubIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.paginationItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="empty-error" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.emptyTitle}</h2>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.emptySubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.emptyIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.emptyItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.errorSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.errorIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.errorItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
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
