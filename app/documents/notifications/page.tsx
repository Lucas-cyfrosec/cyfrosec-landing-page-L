'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Notifications',
    overview: 'CyfroSec delivers real-time security notifications as events happen across your infrastructure - scans completing, vulnerabilities detected, assets discovered, and more. Notifications arrive instantly via a live connection to the platform without needing to refresh the page.',
    whereTitle: 'Where Notifications Appear',
    whereDesc: 'The bell icon in the top-right header toolbar is the primary notification indicator.',
    bellTableHeaders: ['State', 'Appearance'],
    bellTableRows: [
      ['No unread notifications', 'Muted grey bell, no badge'],
      ['Unread (Low/Normal priority)', 'Blue bell with count badge'],
      ['Unread (High priority)', 'Amber bell with count badge'],
      ['Unread (Critical priority)', 'Red pulsing bell with count badge'],
    ],
    bellNote: 'The badge shows the number of unread notifications, capped at 99+. Click the bell to go to the full notification history page.',
    toastTitle: 'Toast Notifications',
    toastDesc: 'New notifications appear as toast cards in the top-right corner of the screen as they arrive. Up to 3 toasts are shown at once. Each toast shows:',
    toastItems: [
      'Priority badge (Critical / High / Normal / Low)',
      'Notification title and message (up to 3 lines)',
      'Which account group the event came from',
      'A 5-second countdown progress bar before auto-dismiss',
      'An × button to dismiss immediately',
    ],
    toastNote: 'Toast Notifications are ephemeral — dismissing one does not remove the notification from the history page, and auto-dismissed notifications are not automatically marked as read.',
    notificationsPageTitle: 'The Notifications Page',
    notificationsPageDesc: 'Navigate to the full history by clicking the bell icon or going to Notifications in your user menu.',
    tableViewTitle: 'Table View',
    tableViewDesc: 'The notifications table shows all notifications received in your current session with the following columns:',
    tableHeaders: ['Column', 'Description'],
    tableRows: [
      ['Priority', 'Critical / High / Normal / Low badge'],
      ['Title', 'Notification title with a type icon'],
      ['Type', 'Event type (e.g., "Scan Completed")'],
      ['Source', 'The account group or agent that produced the event'],
      ['Time', 'Relative timestamp (e.g., "2 minutes ago")'],
      ['Status', 'New (unread) or Read badge'],
    ],
    tableNote: 'Click any notification row to open the detail drawer for that notification and mark it as read.',
    detailTitle: 'Notification Detail Drawer',
    detailDesc: 'Clicking a notification row opens a drawer with the full event detail:',
    detailItems: [
      'Full message text',
      'Status flags: Severity level, whether attention is required',
      'Event type and exact timestamp',
      'Account group and organisation context',
      'Scan context: test name, test ID, test type, agent name, agent ID',
      'Severity summary: Breakdown of finding counts by severity (Critical, High, Medium, Low)',
      'Top findings: Up to 5 vulnerability findings from the event, each showing host, port, protocol, service, severity, CVE ID, and CVSS score',
      'View Full Details button links to the full results detail page if available',
    ],
    filteringTitle: 'Filtering',
    filteringDesc: 'Priority tabs (above the table): Filter by All, Critical, High, Normal, or Low. Each tab shows a count of matching notifications.',
    emailTitle: 'Email Notifications',
    emailDesc: 'For certain high-priority events, CyfroSec also sends an email notification to the account group admins. Email notification delivery is configured server-side. There is no feature available currently to configure which events trigger emails.',
    sessionTitle: 'Important: Session-Scoped History',
    sessionDesc: 'Notification history is held in memory for the current browser session only. Notifications are not loaded from the server when you open or refresh the page — only events received after you logged in are visible in the history.',
    sessionNote: 'This means:',
    sessionItems: [
      'Refreshing the page clears the notification list.',
      'Logging out and back in starts with an empty history.',
      'The read/unread state of notifications is also session-scoped and is not persisted to the server.',
    ],
    faqTitle: 'Frequently Asked Questions on Notifications',
    faqItems: [
      {
        q: 'Why are my notifications gone after I refreshed the page?',
        a: 'Notification history is held in memory for the current login session. Refreshing or logging out clears it.',
      },
      {
        q: 'I dismissed a toast notification but the entry is still in the notification list, is that expected?',
        a: 'Yes. Dismissing a toast notification removes it from the toast overlay but does not delete or read the underlying notification. Navigate to the Notifications page to mark it as read or clear it.',
      },
      {
        q: "Why does the bell show red even after I've read some notifications?",
        a: "The bell reflects your highest unread priority. If any Critical or High priority notification remains unread, the bell stays in that state. Use Mark all read on the Notifications page to reset it.",
      },
      {
        q: "I'm in multiple account groups, will I see notifications from all of them?",
        a: 'Yes. The notification system subscribes to all account groups you belong to. Each notification is labelled with the source account group so you can identify which environment it came from.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',           label: 'Overview' },
      { id: 'where-appear',       label: 'Where Notifications Appear' },
      { id: 'state-table',        label: 'Bell State Table' },
      { id: 'toast',              label: 'Toast Notifications' },
      { id: 'notifications-page', label: 'The Notifications Page' },
      { id: 'table-view',         label: 'Table View' },
      { id: 'detail-drawer',      label: 'Notification Detail Drawer' },
      { id: 'filtering',          label: 'Filtering' },
      { id: 'email',              label: 'Email Notifications' },
      { id: 'session-scoped',     label: 'Session-Scoped History' },
      { id: 'faq',                label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'دليل المنصة',
    title: 'الإشعارات',
    overview: 'تُوصِّل CyfroSec إشعارات الأمان في الوقت الفعلي عند وقوع الأحداث عبر بنيتك التحتية - اكتمال الفحوصات، اكتشاف الثغرات، اكتشاف الأصول والمزيد. تصل الإشعارات فوراً عبر اتصال مباشر بالمنصة دون الحاجة إلى تحديث الصفحة.',
    whereTitle: 'أين تظهر الإشعارات',
    whereDesc: 'أيقونة الجرس في شريط الأدوات الأعلى اليمين هي مؤشر الإشعارات الرئيسي.',
    bellTableHeaders: ['الحالة', 'المظهر'],
    bellTableRows: [
      ['لا توجد إشعارات غير مقروءة', 'جرس رمادي، لا توجد شارة'],
      ['غير مقروء (أولوية منخفضة/عادية)', 'جرس أزرق مع شارة العداد'],
      ['غير مقروء (أولوية عالية)', 'جرس كهرماني مع شارة العداد'],
      ['غير مقروء (أولوية حرجة)', 'جرس أحمر ينبض مع شارة العداد'],
    ],
    bellNote: 'تُظهر الشارة عدد الإشعارات غير المقروءة، بحد أقصى 99+. انقر على الجرس للانتقال إلى صفحة السجل الكامل للإشعارات.',
    toastTitle: 'إشعارات Toast',
    toastDesc: 'تظهر الإشعارات الجديدة كبطاقات toast في الزاوية العلوية اليمنى من الشاشة عند وصولها. يظهر ما يصل إلى 3 إشعارات toast في وقت واحد. تُظهر كل بطاقة:',
    toastItems: [
      'شارة الأولوية (حرجة / عالية / عادية / منخفضة)',
      'عنوان الإشعار ورسالته (حتى 3 أسطر)',
      'مجموعة الحسابات التي نشأ منها الحدث',
      'شريط تقدم العد التنازلي لمدة 5 ثوانٍ قبل الإغلاق التلقائي',
      'زر × للإغلاق الفوري',
    ],
    toastNote: 'إشعارات Toast مؤقتة — إغلاقها لا يزيل الإشعار من صفحة السجل، والإشعارات المغلقة تلقائياً لا تُوسَّم تلقائياً كمقروءة.',
    notificationsPageTitle: 'صفحة الإشعارات',
    notificationsPageDesc: 'انتقل إلى السجل الكامل بالنقر على أيقونة الجرس أو الذهاب إلى الإشعارات في قائمة المستخدم.',
    tableViewTitle: 'عرض الجدول',
    tableViewDesc: 'يُظهر جدول الإشعارات جميع الإشعارات المستلمة في جلستك الحالية مع الأعمدة التالية:',
    tableHeaders: ['العمود', 'الوصف'],
    tableRows: [
      ['الأولوية', 'شارة حرجة / عالية / عادية / منخفضة'],
      ['العنوان', 'عنوان الإشعار مع أيقونة النوع'],
      ['النوع', 'نوع الحدث (مثل "اكتمل الفحص")'],
      ['المصدر', 'مجموعة الحسابات أو الوكيل الذي أنتج الحدث'],
      ['الوقت', 'طابع زمني نسبي (مثل "منذ دقيقتين")'],
      ['الحالة', 'شارة جديد (غير مقروء) أو مقروء'],
    ],
    tableNote: 'انقر على أي صف إشعار لفتح درج التفاصيل وتوسيمه كمقروء.',
    detailTitle: 'درج تفاصيل الإشعار',
    detailDesc: 'النقر على صف الإشعار يفتح درجاً يعرض تفاصيل الحدث الكاملة:',
    detailItems: [
      'النص الكامل للرسالة',
      'علامات الحالة: مستوى الخطورة، هل يتطلب انتباهاً',
      'نوع الحدث والطابع الزمني الدقيق',
      'سياق مجموعة الحسابات والمنظمة',
      'سياق الفحص: اسم الاختبار، معرف الاختبار، نوع الاختبار، اسم الوكيل، معرف الوكيل',
      'ملخص الخطورة: تفصيل أعداد النتائج حسب الخطورة (حرجة، عالية، متوسطة، منخفضة)',
      'أهم النتائج: حتى 5 نتائج ثغرات من الحدث، كل منها يُظهر المضيف والمنفذ والبروتوكول والخدمة والخطورة ومعرف CVE ودرجة CVSS',
      'زر عرض التفاصيل الكاملة يرتبط بصفحة تفاصيل النتائج الكاملة إن توفرت',
    ],
    filteringTitle: 'التصفية',
    filteringDesc: 'علامات تبويب الأولوية (فوق الجدول): تصفية حسب الكل، حرجة، عالية، عادية، أو منخفضة. تُظهر كل علامة تبويب عدد الإشعارات المطابقة.',
    emailTitle: 'إشعارات البريد الإلكتروني',
    emailDesc: 'بالنسبة لبعض الأحداث عالية الأولوية، ترسل CyfroSec أيضاً إشعار بريد إلكتروني لمسؤولي مجموعة الحسابات. يتم تكوين تسليم إشعارات البريد الإلكتروني من جانب الخادم. لا توجد ميزة حالياً لتكوين الأحداث التي تؤدي إلى إرسال رسائل بريد إلكتروني.',
    sessionTitle: 'مهم: سجل نطاق الجلسة',
    sessionDesc: 'يُحفَظ سجل الإشعارات في الذاكرة للجلسة الحالية فقط. لا تُحمَّل الإشعارات من الخادم عند فتح الصفحة أو تحديثها — الأحداث المستلمة بعد تسجيل الدخول فقط مرئية في السجل.',
    sessionNote: 'هذا يعني:',
    sessionItems: [
      'تحديث الصفحة يمسح قائمة الإشعارات.',
      'تسجيل الخروج والدخول مجدداً يبدأ بسجل فارغ.',
      'حالة مقروء/غير مقروء للإشعارات هي أيضاً نطاق جلسة ولا تُحفَظ على الخادم.',
    ],
    faqTitle: 'الأسئلة الشائعة حول الإشعارات',
    faqItems: [
      {
        q: 'لماذا اختفت إشعاراتي بعد تحديث الصفحة؟',
        a: 'يُحفَظ سجل الإشعارات في الذاكرة لجلسة تسجيل الدخول الحالية. التحديث أو تسجيل الخروج يمسحه.',
      },
      {
        q: 'أغلقت إشعار toast لكن الإدخال لا يزال في قائمة الإشعارات، هل هذا متوقع؟',
        a: 'نعم. إغلاق إشعار toast يزيله من طبقة العرض لكن لا يحذف الإشعار الأساسي ولا يوسمه كمقروء. انتقل إلى صفحة الإشعارات لتوسيمه كمقروء.',
      },
      {
        q: 'لماذا يظهر الجرس بالأحمر حتى بعد قراءة بعض الإشعارات؟',
        a: 'يعكس الجرس أعلى أولوية غير مقروءة لديك. إذا بقي أي إشعار حرج أو عالي الأولوية غير مقروء، يبقى الجرس في تلك الحالة. استخدم "وسم الكل كمقروء" في صفحة الإشعارات لإعادة الضبط.',
      },
      {
        q: 'أنا في مجموعات حسابات متعددة، هل سأرى إشعارات من جميعها؟',
        a: 'نعم. يشترك نظام الإشعارات في جميع مجموعات الحسابات التي تنتمي إليها. يُوسَّم كل إشعار بمجموعة الحسابات المصدر حتى تتمكن من تحديد البيئة التي جاء منها.',
      },
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',           label: 'نظرة عامة' },
      { id: 'where-appear',       label: 'أين تظهر الإشعارات' },
      { id: 'state-table',        label: 'جدول حالة الجرس' },
      { id: 'toast',              label: 'إشعارات Toast' },
      { id: 'notifications-page', label: 'صفحة الإشعارات' },
      { id: 'table-view',         label: 'عرض الجدول' },
      { id: 'detail-drawer',      label: 'درج تفاصيل الإشعار' },
      { id: 'filtering',          label: 'التصفية' },
      { id: 'email',              label: 'إشعارات البريد الإلكتروني' },
      { id: 'session-scoped',     label: 'سجل نطاق الجلسة' },
      { id: 'faq',                label: 'الأسئلة الشائعة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function NotificationsPage() {
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

        {/* Where Notifications Appear */}
        <section id="where-appear" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.whereTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.whereDesc}
          </p>

          <div className="overflow-x-auto mb-4" id="state-table">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.bellTableHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.bellTableRows.map(([state, appearance]) => (
                  <tr key={state} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{state}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{appearance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.bellNote}
          </p>
        </section>

        {/* Toast Notifications */}
        <section id="toast" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.toastTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.toastDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.toastItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.toastNote}
          </p>
        </section>

        {/* The Notifications Page */}
        <section id="notifications-page" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.notificationsPageTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.notificationsPageDesc}
          </p>

          <h3 id="table-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.tableViewTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.tableViewDesc}
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map(([col, desc]) => (
                  <tr key={col} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{col}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.tableNote}
          </p>

          <h3 id="detail-drawer" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.detailTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.detailDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.detailItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="filtering" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.filteringTitle}
          </h3>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.filteringDesc}
          </p>
        </section>

        {/* Email Notifications */}
        <section id="email" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.emailTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.emailDesc}
          </p>
        </section>

        {/* Session-Scoped History */}
        <section id="session-scoped" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.sessionTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.sessionDesc}
          </p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.sessionNote}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.sessionItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.faqTitle}
          </h2>
          <div className="space-y-5">
            {c.faqItems.map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{q}</p>
                <p className="text-sm cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{a}</p>
              </div>
            ))}
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
