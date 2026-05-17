'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Dashboard',
    overview: 'The Dashboard is your central view of the security health of your infrastructure. It brings together scan status, vulnerability findings, agent health, asset discovery, GDPR compliance, and AI-generated insights into a single customisable page that updates when you switch between account groups.',
    statsTitle: 'The Stats Row',
    statsIntro: 'A pinned row at the top of the Dashboard always shows three high-level metrics for the current account group:',
    statsHeaders: ['Metric', 'Description'],
    statsRows: [
      ['Completed Scans', 'Number of tests currently in a completed state'],
      ['Active Tests', 'Number of tests currently running or pending execution'],
      ['Failed Tests', 'Number of tests currently in a failed state'],
    ] as [string, string][],
    statsNote: 'These are point-in-time counts, not cumulative historical totals.',
    widgetsTitle: 'Dashboard Widgets',
    widgetsIntro: 'Below the stats row, seven widgets are arranged in a grid. Each widget independently fetches its own data for the current account group.',
    layoutTitle: 'Default Widget Layout',
    layoutIntro: 'The default layout is a 12-column grid with one pinned full-width row, followed by resizable cards:',
    layoutHeaders: ['Row', 'Default cards (left to right)'],
    layoutRows: [
      ['Pinned top row', 'Dashboard Stats (full width)'],
      ['Row 1', 'CyfroAI Insights (large), Vulnerability Summary (small)'],
      ['Row 2', 'GDPR Compliance (small), Top Vulnerabilities (large)'],
      ['Row 3', 'Scan Status (small), Agent Status (small), Asset Discovery (small)'],
    ] as [string, string][],
    layoutNote: 'Small cards use one-third width, large cards use two-thirds width, and the pinned stats row is always full width.',
    aiTitle: 'CyfroAI Insights',
    aiItems: [
      'Shows up to 4 recent AI-generated insight summaries.',
      'Each card includes source type, relative timestamp, and a plain-text preview.',
      'A +N more indicator appears when more findings exist than fit in the preview.',
      'View All opens the full CyfroAI Insights page.',
      'Empty state: "No AI insights yet — Run scans to generate AI analysis."',
    ],
    vulnTitle: 'Vulnerability Summary',
    vulnItems: [
      'Quick stats for targets scanned, total vulnerabilities, misconfigurations, and secrets.',
      'Severity distribution across Critical, High, Medium, Low, and Info.',
      'Up to 6 top findings with severity badge, identifier, and occurrence count.',
      'Header timestamp shows the scan the data came from.',
      'Empty state: "No vulnerabilities found."',
    ],
    topVulnTitle: 'Top Vulnerabilities',
    topVulnItems: [
      'Shows up to 8 prioritised findings ordered by severity.',
      'Each row includes vulnerability ID, package, target, severity, description, and first-detected date.',
      'Clicking a row opens the matching report entry.',
      'View All opens the vulnerability report view.',
      'Empty state: "No high or medium vulnerabilities found."',
    ],
    gdprTitle: 'GDPR Compliance',
    gdprItems: [
      'Shows an overall score with colour-coded thresholding.',
      'Includes trend direction since the previous report when available.',
      'Displays critical, high, and total findings counts.',
      'Shows category breakdown with counts, proportional fill, and score.',
      'Refresh triggers a new compliance report without leaving the dashboard.',
      'Pending state appears if no report exists yet.',
    ],
    scanTitle: 'Scan Status',
    scanItems: [
      'Summary counts for Running, Done, Failed, and Pending tests.',
      'Normalised status labels such as Completed, Running, Pending, and Failed.',
      'Each listed test shows status, category, assigned agents, and last run time.',
      'View All Scans opens the Scans Setup page.',
      'Empty state: "No active scans — Start a new scan to see status."',
    ],
    agentTitle: 'Agent Status',
    agentItems: [
      'Health summary for Healthy, Warning, and Offline agents.',
      'Each row shows agent name, location, status, last heartbeat, and scan counts.',
      'View All Agents opens the CyfroAgent management page.',
      'Empty state: "No agents found — No agents registered for this group."',
    ],
    assetTitle: 'Asset Discovery',
    assetItems: [
      'Quick stats for total assets, subnets, open ports, and IPv6 hosts.',
      'Recently discovered hosts with hostname, IP, and discovery time.',
      'Most common open ports with host counts and common service labels.',
      'Management protocols and storage services are shown as badges.',
      'View Asset Discovery opens the related report view.',
    ],
    customTitle: 'Customising the Layout',
    customIntro: 'The dashboard layout is fully customisable. Your arrangement is saved per browser and persists across sessions.',
    enteringTitle: 'Entering Customise Mode',
    enteringBody: 'Click Customize Layout in the top-right toolbar. A blue banner confirms you are in customise mode.',
    movingTitle: 'Moving Widgets',
    movingBody: 'Drag any widget by its grip handle to reposition it. Widgets automatically pack upward to fill gaps.',
    resizingTitle: 'Resizing Widgets',
    resizingItems: [
      'The minus button shrinks a widget to a small size.',
      'The plus button expands a widget to a large size.',
      'The top stats row is always full width and cannot be moved or resized.',
    ],
    savingTitle: 'Saving, Resetting, and Cancelling',
    savingHeaders: ['Button', 'Behaviour'],
    savingRows: [
      ['Save Layout', 'Saves the current arrangement to the browser and restores it next time.'],
      ['Reset', 'Restores the factory default arrangement in the draft view without saving.'],
      ['Cancel', 'Discards unsaved changes and exits customise mode.'],
    ] as [string, string][],
    savingNote: 'Layout is stored in local browser storage, so clearing browser data or switching browsers restores the factory default.',
    switchingTitle: 'Switching Account Groups',
    switchingBody: 'Use the account group selector in the sidebar to switch groups. Widgets reload their data for the new group while the saved layout stays the same.',
    refreshingTitle: 'Refreshing Data',
    refreshingItems: [
      'Reload the page to refresh all widgets.',
      'Use the GDPR widget refresh action to regenerate compliance data without a full reload.',
    ],
    shortcutsTitle: 'Widget Navigation Shortcuts',
    shortcutsIntro: 'Each dashboard card provides direct navigation into deeper workflows:',
    shortcutsHeaders: ['Widget', 'Action', 'Destination'],
    shortcutsRows: [
      ['CyfroAI Insights', 'View All', 'CyfroAI Insights page'],
      ['Top Vulnerabilities', 'View All', 'Report page (vulnerabilities tab)'],
      ['Scan Status', 'View All Scans', 'Scans Setup page'],
      ['Agent Status', 'View All Agents', 'CyfroAgent page'],
      ['Asset Discovery', 'View Asset Discovery', 'Report page (asset discovery tab)'],
    ] as [string, string, string][],
    shortcutsNote: 'This lets teams start triage from the dashboard and continue directly into task-specific pages.',
    faqTitle: 'Frequently Asked Questions on Dashboards',
    faqs: [
      {
        q: 'Why are some widgets showing no data or empty states?',
        a: 'Each widget needs the relevant scans or agents to have run at least once.',
      },
      {
        q: 'Can different users have different dashboard layouts?',
        a: 'Yes. Each user’s layout is stored independently in their own browser.',
      },
      {
        q: 'Why do the stats numbers differ from what I expected?',
        a: 'Dashboard stats reflect current states, not historical cumulative totals.',
      },
      {
        q: 'Can I add or remove widgets entirely?',
        a: 'The current experience supports repositioning and resizing, but not hiding widgets completely.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'stats-row', label: 'The Stats Row' },
      { id: 'widgets', label: 'Dashboard Widgets' },
      { id: 'default-layout', label: 'Default Widget Layout' },
      { id: 'ai-insights-widget', label: 'CyfroAI Insights' },
      { id: 'vulnerability-summary', label: 'Vulnerability Summary' },
      { id: 'top-vulnerabilities', label: 'Top Vulnerabilities' },
      { id: 'gdpr-widget', label: 'GDPR Compliance' },
      { id: 'scan-status', label: 'Scan Status' },
      { id: 'agent-status', label: 'Agent Status' },
      { id: 'asset-discovery-widget', label: 'Asset Discovery' },
      { id: 'customising', label: 'Customising the Layout' },
      { id: 'entering', label: 'Entering Customise Mode' },
      { id: 'moving', label: 'Moving Widgets' },
      { id: 'resizing', label: 'Resizing Widgets' },
      { id: 'saving', label: 'Saving, Resetting, Cancelling' },
      { id: 'switching', label: 'Switching Account Groups' },
      { id: 'refreshing', label: 'Refreshing Data' },
      { id: 'navigation-shortcuts', label: 'Widget Navigation Shortcuts' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'دليل المنصة',
    title: 'لوحة التحكم',
    overview: 'تُعد لوحة التحكم العرض المركزي لصحة البنية التحتية الأمنية لديك. فهي تجمع حالة الفحوصات ونتائج الثغرات وصحة الوكلاء واكتشاف الأصول وامتثال GDPR ورؤى الذكاء الاصطناعي في صفحة واحدة قابلة للتخصيص وتتحدث عند التبديل بين مجموعات الحسابات.',
    statsTitle: 'صف الإحصاءات',
    statsIntro: 'يعرض الصف المثبت أعلى لوحة التحكم دائماً ثلاث مقاييس عالية المستوى لمجموعة الحسابات الحالية:',
    statsHeaders: ['المقياس', 'الوصف'],
    statsRows: [
      ['الفحوصات المكتملة', 'عدد الاختبارات الموجودة حالياً في حالة مكتملة'],
      ['الاختبارات النشطة', 'عدد الاختبارات الجاري تشغيلها حالياً أو بانتظار التنفيذ'],
      ['الاختبارات الفاشلة', 'عدد الاختبارات الموجودة حالياً في حالة فشل'],
    ] as [string, string][],
    statsNote: 'هذه أعداد لحظية وليست إجماليات تاريخية تراكمية.',
    widgetsTitle: 'أدوات لوحة التحكم',
    widgetsIntro: 'أسفل صف الإحصاءات، يتم ترتيب سبع أدوات ضمن شبكة. تقوم كل أداة بجلب بياناتها الخاصة بشكل مستقل لمجموعة الحسابات الحالية.',
    layoutTitle: 'التخطيط الافتراضي للأدوات',
    layoutIntro: 'التخطيط الافتراضي عبارة عن شبكة من 12 عموداً مع صف علوي مثبت بعرض كامل، يليه بطاقات قابلة لتغيير الحجم:',
    layoutHeaders: ['الصف', 'البطاقات الافتراضية من اليسار إلى اليمين'],
    layoutRows: [
      ['الصف العلوي المثبت', 'إحصاءات لوحة التحكم (بعرض كامل)'],
      ['الصف 1', 'رؤى CyfroAI (كبيرة)، ملخص الثغرات (صغيرة)'],
      ['الصف 2', 'امتثال GDPR (صغيرة)، أعلى الثغرات (كبيرة)'],
      ['الصف 3', 'حالة الفحص (صغيرة)، حالة الوكيل (صغيرة)، اكتشاف الأصول (صغيرة)'],
    ] as [string, string][],
    layoutNote: 'تستخدم البطاقات الصغيرة ثلث العرض، والكبيرة ثلثي العرض، بينما يبقى صف الإحصاءات العلوي بعرض كامل دائماً.',
    aiTitle: 'رؤى CyfroAI',
    aiItems: [
      'تعرض ما يصل إلى 4 ملخصات حديثة للرؤى المولدة بالذكاء الاصطناعي.',
      'تتضمن كل بطاقة نوع المصدر والطابع الزمني النسبي ومعاينة نصية قصيرة.',
      'تظهر إشارة +N المزيد عند وجود نتائج إضافية لا تتسع للمعاينة.',
      'يفتح "عرض الكل" صفحة CyfroAI Insights الكاملة.',
      'الحالة الفارغة: "لا توجد رؤى ذكاء اصطناعي بعد — شغّل الفحوصات لتوليد التحليل."',
    ],
    vulnTitle: 'ملخص الثغرات',
    vulnItems: [
      'إحصاءات سريعة للأهداف المفحوصة وإجمالي الثغرات وأخطاء الإعداد والأسرار.',
      'توزيع الخطورة عبر حرجة وعالية ومتوسطة ومنخفضة ومعلوماتية.',
      'حتى 6 من أعلى النتائج مع شارة الخطورة والمعرف وعدد مرات الظهور.',
      'يعرض رأس الأداة الطابع الزمني للفحص الذي استُمدت منه البيانات.',
      'الحالة الفارغة: "لم يتم العثور على ثغرات."',
    ],
    topVulnTitle: 'أعلى الثغرات',
    topVulnItems: [
      'تعرض حتى 8 نتائج مرتبة حسب الأولوية والخطورة.',
      'يتضمن كل صف معرف الثغرة والحزمة والهدف والخطورة والوصف وتاريخ الاكتشاف الأول.',
      'يؤدي النقر على صف إلى فتح الإدخال المطابق في صفحة التقارير.',
      'يفتح "عرض الكل" طريقة عرض تقرير الثغرات.',
      'الحالة الفارغة: "لم يتم العثور على ثغرات عالية أو متوسطة."',
    ],
    gdprTitle: 'امتثال GDPR',
    gdprItems: [
      'تعرض درجة إجمالية مع ألوان تعكس حدود التقييم.',
      'تتضمن اتجاه التغير منذ التقرير السابق عند توفره.',
      'تعرض أعداد النتائج الحرجة والعالية والإجمالية.',
      'تُظهر تفصيلاً للفئات مع الأعداد والتعبئة النسبية والدرجة.',
      'يشغّل التحديث تقرير امتثال جديد دون مغادرة لوحة التحكم.',
      'تظهر حالة انتظار إذا لم يوجد تقرير بعد.',
    ],
    scanTitle: 'حالة الفحص',
    scanItems: [
      'ملخص لأعداد الاختبارات الجارية والمكتملة والفاشلة والمعلقة.',
      'تسميات حالة موحدة مثل مكتمل وجارٍ ومعلق وفشل.',
      'يعرض كل اختبار حالته وفئته والوكلاء المعينين ووقت آخر تشغيل.',
      'يفتح "عرض كل الفحوصات" صفحة إعداد الفحوصات.',
      'الحالة الفارغة: "لا توجد فحوصات نشطة — ابدأ فحصاً جديداً لرؤية الحالة."',
    ],
    agentTitle: 'حالة الوكيل',
    agentItems: [
      'ملخص صحي للوكلاء الأصحاء والتحذيريين وغير المتصلين.',
      'يعرض كل صف اسم الوكيل وموقعه وحالته وآخر نبضة وعدد الفحوصات.',
      'يفتح "عرض كل الوكلاء" صفحة إدارة CyfroAgent.',
      'الحالة الفارغة: "لم يتم العثور على وكلاء — لا يوجد وكلاء مسجلون لهذه المجموعة."',
    ],
    assetTitle: 'اكتشاف الأصول',
    assetItems: [
      'إحصاءات سريعة لإجمالي الأصول والشبكات الفرعية والمنافذ المفتوحة ومضيفي IPv6.',
      'المضيفون المكتشفون حديثاً مع اسم المضيف وIP ووقت الاكتشاف.',
      'أكثر المنافذ المفتوحة شيوعاً مع عدد المضيفين وأسماء الخدمات الشائعة.',
      'تُعرض بروتوكولات الإدارة وخدمات التخزين كشقائق مميزة.',
      'يفتح "عرض اكتشاف الأصول" طريقة عرض التقرير ذات الصلة.',
    ],
    customTitle: 'تخصيص التخطيط',
    customIntro: 'تخطيط لوحة التحكم قابل للتخصيص بالكامل. يتم حفظ ترتيبك لكل متصفح ويستمر عبر الجلسات.',
    enteringTitle: 'الدخول إلى وضع التخصيص',
    enteringBody: 'انقر على "تخصيص التخطيط" في شريط الأدوات العلوي الأيمن. تؤكد لك لافتة زرقاء أنك في وضع التخصيص.',
    movingTitle: 'نقل الأدوات',
    movingBody: 'اسحب أي أداة بواسطة مقبض السحب لإعادة تموضعها. تقوم الأدوات بملء الفراغات تلقائياً إلى الأعلى.',
    resizingTitle: 'تغيير حجم الأدوات',
    resizingItems: [
      'زر الطرح يصغر الأداة إلى حجم صغير.',
      'زر الإضافة يكبر الأداة إلى حجم كبير.',
      'يبقى صف الإحصاءات العلوي بعرض كامل دائماً ولا يمكن نقله أو تغيير حجمه.',
    ],
    savingTitle: 'الحفظ وإعادة الضبط والإلغاء',
    savingHeaders: ['الزر', 'السلوك'],
    savingRows: [
      ['حفظ التخطيط', 'يحفظ الترتيب الحالي في المتصفح ويستعيده في الزيارة التالية.'],
      ['إعادة الضبط', 'يعيد الترتيب الافتراضي في المسودة دون حفظ.'],
      ['إلغاء', 'يتجاهل التغييرات غير المحفوظة ويخرج من وضع التخصيص.'],
    ] as [string, string][],
    savingNote: 'يتم تخزين التخطيط في التخزين المحلي للمتصفح، لذلك فإن مسح بيانات المتصفح أو تغيير المتصفح يعيد التخطيط الافتراضي.',
    switchingTitle: 'التبديل بين مجموعات الحسابات',
    switchingBody: 'استخدم محدد مجموعة الحسابات في الشريط الجانبي للتبديل بين المجموعات. تعيد الأدوات تحميل بياناتها للمجموعة الجديدة بينما يبقى التخطيط المحفوظ كما هو.',
    refreshingTitle: 'تحديث البيانات',
    refreshingItems: [
      'أعد تحميل الصفحة لتحديث جميع الأدوات.',
      'استخدم إجراء التحديث داخل أداة GDPR لإعادة توليد بيانات الامتثال دون إعادة تحميل كاملة.',
    ],
    shortcutsTitle: 'اختصارات التنقل من الأدوات',
    shortcutsIntro: 'توفر كل بطاقة في لوحة التحكم انتقالاً مباشراً إلى مهام أعمق:',
    shortcutsHeaders: ['الأداة', 'الإجراء', 'الوجهة'],
    shortcutsRows: [
      ['رؤى CyfroAI', 'عرض الكل', 'صفحة CyfroAI Insights'],
      ['أعلى الثغرات', 'عرض الكل', 'صفحة التقارير (تبويب الثغرات)'],
      ['حالة الفحص', 'عرض كل الفحوصات', 'صفحة إعداد الفحوصات'],
      ['حالة الوكيل', 'عرض كل الوكلاء', 'صفحة CyfroAgent'],
      ['اكتشاف الأصول', 'عرض اكتشاف الأصول', 'صفحة التقارير (تبويب اكتشاف الأصول)'],
    ] as [string, string, string][],
    shortcutsNote: 'يسمح ذلك للفرق ببدء الفرز من لوحة التحكم ثم الانتقال مباشرة إلى الصفحات المتخصصة.',
    faqTitle: 'الأسئلة الشائعة حول لوحات التحكم',
    faqs: [
      {
        q: 'لماذا تعرض بعض الأدوات حالات فارغة أو بدون بيانات؟',
        a: 'تحتاج كل أداة إلى تشغيل الفحوصات أو الوكلاء المرتبطين بها مرة واحدة على الأقل.',
      },
      {
        q: 'هل يمكن لمستخدمين مختلفين امتلاك تخطيطات مختلفة؟',
        a: 'نعم. يتم حفظ تخطيط كل مستخدم بشكل مستقل داخل متصفحه.',
      },
      {
        q: 'لماذا تختلف أرقام الإحصاءات عما توقعته؟',
        a: 'تعكس إحصاءات لوحة التحكم الحالات الحالية وليس الإجماليات التاريخية.',
      },
      {
        q: 'هل يمكنني إضافة أدوات أو إزالتها بالكامل؟',
        a: 'يدعم الوضع الحالي إعادة التموضع وتغيير الحجم فقط، وليس إخفاء الأدوات بالكامل.',
      },
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'stats-row', label: 'صف الإحصاءات' },
      { id: 'widgets', label: 'أدوات لوحة التحكم' },
      { id: 'default-layout', label: 'التخطيط الافتراضي' },
      { id: 'ai-insights-widget', label: 'رؤى CyfroAI' },
      { id: 'vulnerability-summary', label: 'ملخص الثغرات' },
      { id: 'top-vulnerabilities', label: 'أعلى الثغرات' },
      { id: 'gdpr-widget', label: 'امتثال GDPR' },
      { id: 'scan-status', label: 'حالة الفحص' },
      { id: 'agent-status', label: 'حالة الوكيل' },
      { id: 'asset-discovery-widget', label: 'اكتشاف الأصول' },
      { id: 'customising', label: 'تخصيص التخطيط' },
      { id: 'entering', label: 'الدخول إلى وضع التخصيص' },
      { id: 'moving', label: 'نقل الأدوات' },
      { id: 'resizing', label: 'تغيير حجم الأدوات' },
      { id: 'saving', label: 'الحفظ وإعادة الضبط والإلغاء' },
      { id: 'switching', label: 'التبديل بين المجموعات' },
      { id: 'refreshing', label: 'تحديث البيانات' },
      { id: 'navigation-shortcuts', label: 'اختصارات التنقل' },
      { id: 'faq', label: 'الأسئلة الشائعة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

function List({ items, isAr }: { items: string[]; isAr: boolean }) {
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

export default function DashboardPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.category}</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.title}</h1>
        <p className="cy-text-secondary leading-relaxed mb-10" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.overview}</p>

        <hr className="cy-border-default mb-10" />

        <section id="stats-row" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statsIntro}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.statsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.statsRows.map(([metric, desc]) => (
                  <tr key={metric} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{metric}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.statsNote}</p>
        </section>

        <section id="widgets" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.widgetsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.widgetsIntro}</p>

          <h3 id="default-layout" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.layoutTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.layoutIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.layoutHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.layoutRows.map(([row, cards]) => (
                  <tr key={row} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{row}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{cards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.layoutNote}</p>
        </section>

        <section id="ai-insights-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.aiTitle}</h2>
          <List items={c.aiItems} isAr={isAr} />
        </section>

        <section id="vulnerability-summary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.vulnTitle}</h2>
          <List items={c.vulnItems} isAr={isAr} />
        </section>

        <section id="top-vulnerabilities" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.topVulnTitle}</h2>
          <List items={c.topVulnItems} isAr={isAr} />
        </section>

        <section id="gdpr-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.gdprTitle}</h2>
          <List items={c.gdprItems} isAr={isAr} />
        </section>

        <section id="scan-status" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scanTitle}</h2>
          <List items={c.scanItems} isAr={isAr} />
        </section>

        <section id="agent-status" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.agentTitle}</h2>
          <List items={c.agentItems} isAr={isAr} />
        </section>

        <section id="asset-discovery-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.assetTitle}</h2>
          <List items={c.assetItems} isAr={isAr} />
        </section>

        <section id="customising" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.customTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.customIntro}</p>
          <h3 id="entering" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.enteringTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.enteringBody}</p>
          <h3 id="moving" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.movingTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.movingBody}</p>
          <h3 id="resizing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.resizingTitle}</h3>
          <List items={c.resizingItems} isAr={isAr} />

          <h3 id="saving" className="text-base font-semibold cy-text-primary mb-3 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.savingTitle}</h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.savingHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.savingRows.map(([btn, behaviour]) => (
                  <tr key={btn} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{btn}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{behaviour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.savingNote}</p>

          <h3 id="switching" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.switchingTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.switchingBody}</p>
          <h3 id="refreshing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.refreshingTitle}</h3>
          <List items={c.refreshingItems} isAr={isAr} />
        </section>

        <section id="navigation-shortcuts" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.shortcutsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.shortcutsIntro}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.shortcutsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.shortcutsRows.map(([widget, action, dest]) => (
                  <tr key={widget} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{widget}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{action}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{dest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.shortcutsNote}</p>
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
