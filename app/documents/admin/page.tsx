'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import DocsCodeBlock from '../_components/DocsCodeBlock'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Admin Panel',
    title: 'Admin Panel',
    overview1: 'The Settings area is the administrative control center for customer workspaces. For Admins only.',
    overview2: 'It groups governance, access, compliance, and billing-related controls behind role-aware navigation.',
    accessingTitle: 'Accessing Settings',
    routeLabel: 'Route (on-premise):',
    shellIntro: 'The settings shell includes:',
    shellItems: [
      'a settings header',
      'searchable tab navigation',
      'section pages for each administration domain',
    ],
    accessTitle: 'Access Control',
    accessIntro: 'Settings access is restricted to:',
    accessItems: ['Organization Admin', 'Account Group Admin'],
    accessNote: 'Users without access are redirected to the dashboard.',
    navTitle: 'Settings Navigation Areas',
    navIntro: 'Current settings tabs are grouped into these categories:',
    governanceLabel: 'Governance:',
    governanceItems: [['Organization', '/settings/organization']] as [string, string][],
    accessLabel: 'Access:',
    accessNavItems: [
      ['Account Groups', '/settings/account-groups'],
      ['Users', '/settings/users'],
    ] as [string, string][],
    complianceLabel: 'Compliance:',
    complianceItems: [['Audit Logs', '/settings/audit']] as [string, string][],
    billingLabel: 'Billing:',
    billingItems: [
      ['Subscription', '/settings/subscription'],
      ['Statistics', '/settings/statistics'],
    ] as [string, string][],
    navNote: 'You can search settings tabs directly from the settings header.',
    settingsTitle: 'Settings Overview Page',
    settingsIntro: 'The root settings page (/settings) includes:',
    settingsItems: [
      'High-level governance and control highlights',
      'Administration area cards',
      'Direct links to each settings section',
    ],
    orgTitle: 'Organization',
    orgIntro: 'The Organization page provides organization-level records and actions with:',
    orgItems: [
      'Search',
      'Pagination',
      'Create/edit/delete modals',
      'Table fields such as country, plan, users, account groups, agents, and created date',
    ],
    orgNote: 'Use this page to maintain organization metadata and inspect organizational scope metrics.',
    groupsTitle: 'Account Groups',
    groupsIntro: 'The Account Groups page provides scoped group administration with:',
    groupsItems: [
      'Search',
      'Organization filter',
      'Pagination',
      'Create/edit/delete actions',
      'Group-level user/agent counts',
    ],
    groupsNote: 'Use this page to manage group boundaries and operational ownership.',
    usersTitle: 'Users',
    usersIntro: 'The Users page is account-group scoped and provides:',
    usersItems: [
      'Search by name/email',
      'Pagination',
      'Create/edit/delete user workflows',
      'Role-in-group visibility',
      'Create flow includes organization and account-group assignment fields.',
    ],
    auditTitle: 'Audit Logs',
    auditIntro: 'The Audit Logs page (/settings/audit) provides activity traceability with:',
    auditItems: [
      'Search',
      'Structured filters (action type, resource type, endpoint, IP, status, dates)',
      'Status badges and duration',
      'Pagination',
    ],
    billingTitle: 'Subscription and Statistics',
    billingIntro: 'Billing-related settings include:',
    billingDetails: [
      'Subscription (/settings/subscription): Plan status, billing lifecycle actions, plan selection',
      'Statistics (/settings/statistics): Usage limits, utilization, period metrics',
    ],
    uxTitle: 'Common UX Patterns Across Settings',
    uxIntro: 'Most settings tables share:',
    uxItems: [
      'Debounced search inputs',
      'Active filter state chips',
      'Standard loading/empty/error states',
      'Page-based navigation controls',
      'Modal-based CRUD actions where applicable',
    ],
    uxNote: 'This keeps behavior predictable across administration pages.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Who can access the settings area?',
        a: 'Only Organization Admin and Account Group Admin roles.',
      },
      {
        q: 'Can I search the available settings tabs?',
        a: 'Yes, the settings header includes tab search.',
      },
      {
        q: 'Why is data different between account groups?',
        a: 'Several settings views are scoped by the current account-group context.',
      },
      {
        q: 'Where do I manage billing versus operational access?',
        a: 'Use Subscription/Statistics for billing and quotas. Use Organization/Account Groups/Users for governance and access.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing Settings' },
      { id: 'access-control', label: 'Access Control' },
      { id: 'navigation-areas', label: 'Settings Navigation Areas' },
      { id: 'settings-overview', label: 'Settings Overview Page' },
      { id: 'organization', label: 'Organization' },
      { id: 'account-groups', label: 'Account Groups' },
      { id: 'users', label: 'Users' },
      { id: 'audit-logs', label: 'Audit Logs' },
      { id: 'subscription-statistics', label: 'Subscription and Statistics' },
      { id: 'ux-patterns', label: 'Common UX Patterns' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'لوحة الإدارة',
    title: 'لوحة الإدارة',
    overview1: 'تُعد منطقة الإعدادات مركز التحكم الإداري لمساحات عمل العملاء. وهي مخصصة للمسؤولين فقط.',
    overview2: 'وهي تجمع ضوابط الحوكمة والوصول والامتثال والفوترة خلف تنقل يعتمد على الدور.',
    accessingTitle: 'الوصول إلى الإعدادات',
    routeLabel: 'المسار (محلياً):',
    shellIntro: 'يتضمن غلاف الإعدادات:',
    shellItems: [
      'رأساً للإعدادات',
      'تنقلاً قابلاً للبحث بين علامات التبويب',
      'صفحات أقسام لكل مجال إداري',
    ],
    accessTitle: 'التحكم في الوصول',
    accessIntro: 'يقتصر الوصول إلى الإعدادات على:',
    accessItems: ['مسؤول المنظمة', 'مسؤول مجموعة الحسابات'],
    accessNote: 'يتم تحويل المستخدمين الذين لا يملكون صلاحية الوصول إلى لوحة التحكم.',
    navTitle: 'مناطق تنقل الإعدادات',
    navIntro: 'تُجمّع علامات تبويب الإعدادات الحالية ضمن الفئات التالية:',
    governanceLabel: 'الحوكمة:',
    governanceItems: [['المنظمة', '/settings/organization']] as [string, string][],
    accessLabel: 'الوصول:',
    accessNavItems: [
      ['مجموعات الحسابات', '/settings/account-groups'],
      ['المستخدمون', '/settings/users'],
    ] as [string, string][],
    complianceLabel: 'الامتثال:',
    complianceItems: [['سجلات التدقيق', '/settings/audit']] as [string, string][],
    billingLabel: 'الفوترة:',
    billingItems: [
      ['الاشتراك', '/settings/subscription'],
      ['الإحصاءات', '/settings/statistics'],
    ] as [string, string][],
    navNote: 'يمكنك البحث في علامات تبويب الإعدادات مباشرة من رأس الإعدادات.',
    settingsTitle: 'صفحة نظرة عامة على الإعدادات',
    settingsIntro: 'تتضمن صفحة الإعدادات الجذرية (/settings):',
    settingsItems: [
      'أبرز عناصر الحوكمة والتحكم عالية المستوى',
      'بطاقات لمناطق الإدارة',
      'روابط مباشرة لكل قسم من أقسام الإعدادات',
    ],
    orgTitle: 'المنظمة',
    orgIntro: 'توفر صفحة المنظمة سجلات وإجراءات على مستوى المنظمة مع:',
    orgItems: [
      'البحث',
      'التنقل بين الصفحات',
      'نوافذ الإنشاء/التعديل/الحذف',
      'حقول جدول مثل البلد والخطة والمستخدمين ومجموعات الحسابات والوكلاء وتاريخ الإنشاء',
    ],
    orgNote: 'استخدم هذه الصفحة لصيانة بيانات المنظمة الوصفية وفحص مقاييس نطاق المنظمة.',
    groupsTitle: 'مجموعات الحسابات',
    groupsIntro: 'توفر صفحة مجموعات الحسابات إدارة مقيّدة النطاق للمجموعات مع:',
    groupsItems: [
      'البحث',
      'مرشح المنظمة',
      'التنقل بين الصفحات',
      'إجراءات الإنشاء/التعديل/الحذف',
      'أعداد المستخدمين والوكلاء على مستوى المجموعة',
    ],
    groupsNote: 'استخدم هذه الصفحة لإدارة حدود المجموعات وملكية التشغيل.',
    usersTitle: 'المستخدمون',
    usersIntro: 'تكون صفحة المستخدمين مقيّدة بنطاق مجموعة الحسابات وتوفر:',
    usersItems: [
      'البحث بالاسم أو البريد الإلكتروني',
      'التنقل بين الصفحات',
      'سير عمل إنشاء/تعديل/حذف المستخدم',
      'إظهار الدور داخل المجموعة',
      'يتضمن مسار الإنشاء حقول تعيين المنظمة ومجموعة الحسابات',
    ],
    auditTitle: 'سجلات التدقيق',
    auditIntro: 'توفر صفحة سجلات التدقيق (/settings/audit) إمكانية تتبع النشاط عبر:',
    auditItems: [
      'البحث',
      'مرشحات منظمة (نوع الإجراء، نوع المورد، نقطة النهاية، IP، الحالة، التواريخ)',
      'شارات الحالة والمدة',
      'التنقل بين الصفحات',
    ],
    billingTitle: 'الاشتراك والإحصاءات',
    billingIntro: 'تتضمن إعدادات الفوترة ما يلي:',
    billingDetails: [
      'الاشتراك (/settings/subscription): حالة الخطة وإجراءات دورة الفوترة واختيار الخطة',
      'الإحصاءات (/settings/statistics): حدود الاستخدام والاستفادة ومقاييس الفترة',
    ],
    uxTitle: 'أنماط تجربة الاستخدام المشتركة عبر الإعدادات',
    uxIntro: 'تشترك معظم جداول الإعدادات في:',
    uxItems: [
      'حقول بحث مؤجلة التنفيذ',
      'شرائح حالة المرشحات النشطة',
      'حالات تحميل/فراغ/خطأ قياسية',
      'عناصر تنقل مبنية على الصفحات',
      'إجراءات CRUD داخل نوافذ منبثقة عند الاقتضاء',
    ],
    uxNote: 'يساعد ذلك في جعل السلوك متوقعاً عبر صفحات الإدارة المختلفة.',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'من يمكنه الوصول إلى منطقة الإعدادات؟',
        a: 'مسؤول المنظمة ومسؤول مجموعة الحسابات فقط.',
      },
      {
        q: 'هل يمكنني البحث في علامات تبويب الإعدادات المتاحة؟',
        a: 'نعم، يتضمن رأس الإعدادات بحثاً في علامات التبويب.',
      },
      {
        q: 'لماذا تختلف البيانات بين مجموعات الحسابات؟',
        a: 'عدة طرق عرض في الإعدادات تكون مقيّدة وفق سياق مجموعة الحسابات الحالية.',
      },
      {
        q: 'أين أدير الفوترة مقابل الوصول التشغيلي؟',
        a: 'استخدم الاشتراك/الإحصاءات للفوترة والحصص، واستخدم المنظمة/مجموعات الحسابات/المستخدمين للحوكمة والوصول.',
      },
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'accessing', label: 'الوصول إلى الإعدادات' },
      { id: 'access-control', label: 'التحكم في الوصول' },
      { id: 'navigation-areas', label: 'مناطق تنقل الإعدادات' },
      { id: 'settings-overview', label: 'صفحة نظرة عامة على الإعدادات' },
      { id: 'organization', label: 'المنظمة' },
      { id: 'account-groups', label: 'مجموعات الحسابات' },
      { id: 'users', label: 'المستخدمون' },
      { id: 'audit-logs', label: 'سجلات التدقيق' },
      { id: 'subscription-statistics', label: 'الاشتراك والإحصاءات' },
      { id: 'ux-patterns', label: 'أنماط تجربة الاستخدام' },
      { id: 'faq', label: 'الأسئلة الشائعة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function AdminPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  const renderPathList = (items: [string, string][]) => (
    <ol className="space-y-4 cy-text-secondary text-sm mb-5">
      {items.map(([label, path], i) => (
        <li key={path} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
          <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {label} (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{path}</code>)
          </span>
        </li>
      ))}
    </ol>
  )

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
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.routeLabel}</p>
          <DocsCodeBlock className="mb-5" code="app.localhost:8080/settings" />
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.shellIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.shellItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="access-control" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.accessItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessNote}</p>
        </section>

        <section id="navigation-areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.navTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.navIntro}</p>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.governanceLabel}</p>
          {renderPathList(c.governanceItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.accessLabel}</p>
          {renderPathList(c.accessNavItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.complianceLabel}</p>
          {renderPathList(c.complianceItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.billingLabel}</p>
          {renderPathList(c.billingItems)}

          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.navNote}</p>
        </section>

        <section id="settings-overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.settingsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {isAr ? <>تتضمن صفحة الإعدادات الجذرية (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings</code>):</> : <>The root settings page (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings</code>) includes:</>}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.settingsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="organization" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.orgTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.orgIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.orgItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.orgNote}</p>
        </section>

        <section id="account-groups" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.groupsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.groupsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.groupsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.groupsNote}</p>
        </section>

        <section id="users" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.usersTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.usersIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.usersItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="audit-logs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.auditTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.auditIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.auditItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="subscription-statistics" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.billingTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.billingIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.billingDetails.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="ux-patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.uxTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.uxIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.uxItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.uxNote}</p>
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
