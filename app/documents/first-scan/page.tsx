'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Scans',
    title: 'Creating Tests',
    createSteps: [
      'From the Scans Setup page, click Create New Test in the top-right corner.',
      'Fill in the form fields described below.',
      'Click Create Test to save. You will be returned to the test list once it is created.',
    ],
    formTitle: '1. Form Fields',
    formIntro: 'Choose the scan intensity:',
    formHeaders: ['Value', 'Description'],
    formRows: [
      ['Full', 'Performs a comprehensive port scan across all common ports for the target. No protocol selection required. It takes more time since it performs deep assessments. Well suited for periodic assessments.'],
      ['Quick', 'Performs a faster, targeted scan. Requires selecting a specific protocol (see below). Best for frequent monitoring with lower overhead.'],
    ] as [string, string][],
    testNameTitle: '2. Test Name',
    testNameText: 'A logical label for this test (e.g., "Production Web Server — Full Scan"). This name appears in the test list, dashboard widgets, reports, and CyfroAssistant responses.',
    hostTitle: '3. Host or Subnet',
    hostIntro: 'The IP address or CIDR range to scan. Examples:',
    hostExamples: [
      ['Single host', '192.168.1.50/32'],
      ['Full subnet', '10.0.0.0/24'],
    ] as [string, string][],
    hostNote: 'The Agent running the test will direct its scan probes to this target. Ensure the target is reachable from the machines where your Agents are installed.',
    protocolTitle: '4. Protocol (Quick scans only)',
    protocolIntro: 'Visible only when Type is set to Quick. Select the transport protocol to scan:',
    protocolHeaders: ['Protocol', 'Use case'],
    protocolRows: [
      ['TCP', 'Standard web servers, SSH, databases - most services use TCP.'],
      ['UDP', 'DNS, SNMP, syslog, and other UDP-based services.'],
    ] as [string, string][],
    agentsTitle: '5. Agents',
    agentsText1: 'Select one or more CyfroAgents to run this test. The scrollable list shows all Agents currently online in your Account Group. Use the Check all toggle to select every available Agent at once.',
    agentsText2: 'Assigning multiple Agents to a single test is useful for:',
    agentsItems: [
      'Scanning the same target from different network segments to detect firewall asymmetry.',
      'Providing redundancy if one Agent goes offline.',
    ],
    intervalTitle: '6. Interval',
    intervalIntro: 'How often the test runs automatically:',
    intervalHeaders: ['Option', 'Interval'],
    intervalRows: [
      ['1 hour', 'Every 60 minutes'],
      ['6 hours', 'Every 6 hours'],
      ['12 hours', 'Every 12 hours'],
      ['24 hours', 'Once per day'],
    ] as [string, string][],
    intervalNote1: 'Tests run on a recurring schedule starting from when they are created. There is no one-time or manual trigger option yet currently to schedule the test and let the platform run it.',
    intervalNoteLabel: 'Note:',
    intervalNoteText: 'In instances where the chosen file path/filesystem is large, the scans may take longer than the interval.',
    editingTitle: 'Editing Existing Tests',
    editingSteps: [
      'From the Scans Setup page, click the pencil (edit) icon next to the test you want to update.',
      'The edit form is pre-populated with the current values.',
      'Modify the fields as needed (all fields are editable, including the test type, target, agents, and interval).',
      'Click Update Test to save. You will be returned to the test list on success.',
    ],
    editingNote1Label: 'Note:',
    editingNote1: 'Changing the Interval on an existing test takes effect immediately — the next scheduled run will use the new interval.',
    systemDefaultLabel: 'System Default Tests:',
    systemDefaultText: 'Tests marked with the System badge were auto-provisioned when your Account Group was created (a default port-scan probe). You can edit these tests to adjust the target, agents, or schedule, but you cannot delete them.',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'create',         label: 'Creating a Test' },
      { id: 'form-fields',    label: '1. Form Fields' },
      { id: 'test-name',      label: '2. Test Name' },
      { id: 'host-subnet',    label: '3. Host or Subnet' },
      { id: 'protocol',       label: '4. Protocol' },
      { id: 'agents',         label: '5. Agents' },
      { id: 'interval',       label: '6. Interval' },
      { id: 'editing',        label: 'Editing Existing Tests' },
      { id: 'system-default', label: 'System Default Tests' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'الفحوصات',
    title: 'إنشاء الاختبارات',
    createSteps: [
      'من صفحة إعداد الفحوصات، انقر على إنشاء اختبار جديد في الزاوية العلوية اليمنى.',
      'أدخل حقول النموذج الموضحة أدناه.',
      'انقر على إنشاء اختبار للحفظ. ستعود إلى قائمة الاختبارات بعد الإنشاء.',
    ],
    formTitle: '1. حقول النموذج',
    formIntro: 'اختر كثافة الفحص:',
    formHeaders: ['القيمة', 'الوصف'],
    formRows: [
      ['كامل', 'يجري فحصاً شاملاً للمنافذ عبر جميع المنافذ الشائعة للهدف. لا يلزم تحديد بروتوكول. يستغرق وقتاً أطول لأنه يجري تقييمات معمّقة. مناسب للتقييمات الدورية.'],
      ['سريع', 'يجري فحصاً أسرع ومستهدفاً. يتطلب تحديد بروتوكول محدد (انظر أدناه). الأفضل للمراقبة المتكررة بتكلفة أقل.'],
    ] as [string, string][],
    testNameTitle: '2. اسم الاختبار',
    testNameText: 'تسمية منطقية لهذا الاختبار (مثل "خادم الويب الإنتاجي — فحص كامل"). يظهر هذا الاسم في قائمة الاختبارات وأدوات لوحة التحكم والتقارير وردود CyfroAssistant.',
    hostTitle: '3. المضيف أو الشبكة الفرعية',
    hostIntro: 'عنوان IP أو نطاق CIDR للفحص. أمثلة:',
    hostExamples: [
      ['مضيف واحد', '192.168.1.50/32'],
      ['شبكة فرعية كاملة', '10.0.0.0/24'],
    ] as [string, string][],
    hostNote: 'سيوجّه الوكيل الذي ينفذ الاختبار فحصه نحو هذا الهدف. تأكد من إمكانية الوصول إلى الهدف من الأجهزة التي تم تثبيت وكلاءك عليها.',
    protocolTitle: '4. البروتوكول (للفحوصات السريعة فقط)',
    protocolIntro: 'يظهر فقط عند تعيين النوع إلى سريع. اختر بروتوكول النقل للفحص:',
    protocolHeaders: ['البروتوكول', 'حالة الاستخدام'],
    protocolRows: [
      ['TCP', 'خوادم الويب القياسية وSSH وقواعد البيانات — معظم الخدمات تستخدم TCP.'],
      ['UDP', 'DNS وSNMP وsyslog والخدمات الأخرى القائمة على UDP.'],
    ] as [string, string][],
    agentsTitle: '5. الوكلاء',
    agentsText1: 'حدد وكيلاً واحداً أو أكثر من CyfroAgents لتشغيل هذا الاختبار. تُظهر القائمة القابلة للتمرير جميع الوكلاء المتصلين حالياً في مجموعة حسابك. استخدم مفتاح تحديد الكل لاختيار جميع الوكلاء المتاحين دفعة واحدة.',
    agentsText2: 'يفيد تعيين وكلاء متعددين لاختبار واحد في:',
    agentsItems: [
      'فحص الهدف نفسه من قطاعات شبكة مختلفة للكشف عن عدم تماثل جدار الحماية.',
      'توفير التكرار في حالة انقطاع اتصال أحد الوكلاء.',
    ],
    intervalTitle: '6. الفترة الزمنية',
    intervalIntro: 'عدد مرات تشغيل الاختبار تلقائياً:',
    intervalHeaders: ['الخيار', 'الفترة'],
    intervalRows: [
      ['ساعة واحدة', 'كل 60 دقيقة'],
      ['6 ساعات', 'كل 6 ساعات'],
      ['12 ساعة', 'كل 12 ساعة'],
      ['24 ساعة', 'مرة واحدة يومياً'],
    ] as [string, string][],
    intervalNote1: 'تعمل الاختبارات وفق جدول متكرر يبدأ من وقت إنشائها. لا يوجد حالياً خيار للتشغيل لمرة واحدة أو التشغيل اليدوي.',
    intervalNoteLabel: 'ملاحظة:',
    intervalNoteText: 'في الحالات التي يكون فيها مسار الملف/نظام الملفات المختار كبيراً، قد تستغرق الفحوصات وقتاً أطول من الفترة الزمنية المحددة.',
    editingTitle: 'تعديل الاختبارات الموجودة',
    editingSteps: [
      'من صفحة إعداد الفحوصات، انقر على أيقونة القلم (تعديل) بجانب الاختبار الذي تريد تحديثه.',
      'يُملأ نموذج التعديل مسبقاً بالقيم الحالية.',
      'عدّل الحقول حسب الحاجة (جميع الحقول قابلة للتعديل بما في ذلك نوع الاختبار والهدف والوكلاء والفترة).',
      'انقر على تحديث الاختبار للحفظ. ستعود إلى قائمة الاختبارات عند النجاح.',
    ],
    editingNote1Label: 'ملاحظة:',
    editingNote1: 'يسري تغيير الفترة الزمنية على اختبار موجود فوراً — ستستخدم عملية التشغيل التالية المجدولة الفترة الجديدة.',
    systemDefaultLabel: 'الاختبارات الافتراضية للنظام:',
    systemDefaultText: 'الاختبارات المميزة بشارة النظام تم توفيرها تلقائياً عند إنشاء مجموعة حسابك (فحص المنافذ الافتراضي). يمكنك تعديل هذه الاختبارات لضبط الهدف والوكلاء أو الجدول، لكن لا يمكنك حذفها.',
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'create',         label: 'إنشاء اختبار' },
      { id: 'form-fields',    label: '1. حقول النموذج' },
      { id: 'test-name',      label: '2. اسم الاختبار' },
      { id: 'host-subnet',    label: '3. المضيف أو الشبكة الفرعية' },
      { id: 'protocol',       label: '4. البروتوكول' },
      { id: 'agents',         label: '5. الوكلاء' },
      { id: 'interval',       label: '6. الفترة الزمنية' },
      { id: 'editing',        label: 'تعديل الاختبارات الموجودة' },
      { id: 'system-default', label: 'الاختبارات الافتراضية للنظام' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function FirstScanPage() {
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

        <ol className="space-y-4 cy-text-secondary text-sm mb-10" id="create">
          {c.createSteps.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
              <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        {/* Form Fields */}
        <section id="form-fields" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.formTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.formIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.formHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.formRows.map(([val, desc]) => (
                  <tr key={val} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{val}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Test Name */}
        <section id="test-name" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.testNameTitle}
          </h2>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.testNameText}</p>
        </section>

        {/* Host or Subnet */}
        <section id="host-subnet" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.hostTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.hostIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.hostExamples.map(([label, code], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
                  {label}: <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{code}</code>
                </span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.hostNote}</p>
        </section>

        {/* Protocol */}
        <section id="protocol" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.protocolTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.protocolIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.protocolHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.protocolRows.map(([proto, use]) => (
                  <tr key={proto} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{proto}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Agents */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.agentsTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.agentsText1}</p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.agentsText2}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.agentsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Interval */}
        <section id="interval" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.intervalTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.intervalIntro}</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.intervalHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.intervalRows.map(([opt, interval]) => (
                  <tr key={opt} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{opt}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.intervalNote1}</p>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.intervalNoteLabel}</strong>{' '}
            <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.intervalNoteText}</span>
          </div>
        </section>

        {/* Editing */}
        <section id="editing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.editingTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.editingSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-4">
            <strong className="cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.editingNote1Label}</strong>{' '}
            <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.editingNote1}</span>
          </div>
          <div id="system-default" className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary scroll-mt-20">
            <strong className="cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.systemDefaultLabel}</strong>{' '}
            <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.systemDefaultText}</span>
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
