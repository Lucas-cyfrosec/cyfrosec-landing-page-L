'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Getting Started',
    title: 'Role Based Access Control (RBAC)',
    overview: 'Granular permissions and control according to user roles so that you know who has access to what.',
    structureTitle: 'Structure',
    structureItems: [
      'Organization: The top-level customer entity (e.g., "FinWiz Corp"). Contains Billing and Settings.',
      'Account Group: A subdivision of organization (e.g., "AI Datacenter", "EU Branch"). Contains Assets and Scans.',
    ],
    rolesTitle: 'Roles',
    rolesItems: [
      'Organization Admin: Customer admin who manages their entire organization.',
      'Account Group Admin: Customer admin who manages a specific subdivision.',
      'User: Standard customer user with read-only/execute permissions.',
    ],
    roleTableHeaders: ['Scoped Role', 'Permissions'],
    roleTableRows: [
      ['Organization Admin', 'Full control over their organization: users, account groups, agents, tests, results, billing view'],
      ['Account Group Admin', 'Manage a specific account group: agents, tests, results, user assignment'],
      ['User', 'Read-only: view dashboard, generate reports, read results'],
    ],
    permissionMatrixTitle: 'Permission Matrix',
    permissionMatrixHeaders: ['Permission Category', 'Org Admin', 'Group Admin', 'User'],
    permissionMatrixRows: [
      ['Create Agent',     'Y',        'Y',  '-'],
      ['Create Test',      'Y',        'Y',  '-'],
      ['View Dashboard',   'Y',        'Y',  'Y'],
      ['Manage Dashboard', 'Y',        'Y',  '-'],
      ['Generate Report',  'Y',        'Y',  'Y'],
      ['View Audit Logs',  'Y',        'Y',  '-'],
      ['Manage ORT',       'Y',        'Y',  '-'],
      ['Manage Users',     'Y',        '-',  '-'],
      ['Manage Org',       'Y',        '-',  '-'],
      ['Manage Groups',    'Y',        'Y',  '-'],
      ['Manage Agents',    'Y',        'Y',  '-'],
      ['Manage Tests',     'Y',        'Y',  '-'],
      ['Read Results',     'Y',        'Y',  'Y'],
      ['Billing',          'Y (view)', '-',  '-'],
      ['Impersonate User', '-',        '-',  '-'],
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',    label: 'Overview' },
      { id: 'structure',   label: 'Structure' },
      { id: 'roles',       label: 'Roles' },
      { id: 'permissions', label: 'Permission Matrix' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'البدء',
    title: 'التحكم في الوصول حسب الدور (RBAC)',
    overview: 'صلاحيات دقيقة وتحكم وفقاً لأدوار المستخدمين حتى تعرف من لديه صلاحية الوصول إلى ماذا.',
    structureTitle: 'الهيكل',
    structureItems: [
      'المنظمة: الكيان الأعلى للعميل (مثل "FinWiz Corp"). يحتوي على الفوترة والإعدادات.',
      'مجموعة الحسابات: قسم فرعي من المنظمة (مثل "AI Datacenter"، "EU Branch"). يحتوي على الأصول والفحوصات.',
    ],
    rolesTitle: 'الأدوار',
    rolesItems: [
      'مسؤول المنظمة: مسؤول العميل الذي يدير منظمته بأكملها.',
      'مسؤول مجموعة الحسابات: مسؤول العميل الذي يدير قسماً فرعياً محدداً.',
      'المستخدم: مستخدم عميل قياسي بصلاحيات القراءة فقط/التنفيذ.',
    ],
    roleTableHeaders: ['الدور المحدد', 'الصلاحيات'],
    roleTableRows: [
      ['مسؤول المنظمة', 'تحكم كامل في المنظمة: المستخدمون، مجموعات الحسابات، الوكلاء، الاختبارات، النتائج، عرض الفوترة'],
      ['مسؤول مجموعة الحسابات', 'إدارة مجموعة حسابات محددة: الوكلاء، الاختبارات، النتائج، تعيين المستخدمين'],
      ['المستخدم', 'قراءة فقط: عرض لوحة التحكم، إنشاء التقارير، قراءة النتائج'],
    ],
    permissionMatrixTitle: 'مصفوفة الصلاحيات',
    permissionMatrixHeaders: ['فئة الصلاحية', 'مسؤول المنظمة', 'مسؤول المجموعة', 'المستخدم'],
    permissionMatrixRows: [
      ['إنشاء وكيل',      'Y',        'Y',  '-'],
      ['إنشاء اختبار',    'Y',        'Y',  '-'],
      ['عرض لوحة التحكم', 'Y',        'Y',  'Y'],
      ['إدارة لوحة التحكم','Y',       'Y',  '-'],
      ['إنشاء تقرير',     'Y',        'Y',  'Y'],
      ['عرض سجلات التدقيق','Y',       'Y',  '-'],
      ['إدارة ORT',       'Y',        'Y',  '-'],
      ['إدارة المستخدمين','Y',        '-',  '-'],
      ['إدارة المنظمة',   'Y',        '-',  '-'],
      ['إدارة المجموعات', 'Y',        'Y',  '-'],
      ['إدارة الوكلاء',   'Y',        'Y',  '-'],
      ['إدارة الاختبارات','Y',        'Y',  '-'],
      ['قراءة النتائج',   'Y',        'Y',  'Y'],
      ['الفوترة',         'Y (عرض)',  '-',  '-'],
      ['انتحال هوية المستخدم','-',   '-',  '-'],
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',    label: 'نظرة عامة' },
      { id: 'structure',   label: 'الهيكل' },
      { id: 'roles',       label: 'الأدوار' },
      { id: 'permissions', label: 'مصفوفة الصلاحيات' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function RbacPage() {
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

        {/* Structure */}
        <section id="structure" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.structureTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.structureItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Roles */}
        <section id="roles" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.rolesTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.rolesItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.roleTableHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.roleTableRows.map(([role, perms]) => (
                  <tr key={role} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{role}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{perms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Permission Matrix */}
        <section id="permissions" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.permissionMatrixTitle}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.permissionMatrixHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.permissionMatrixRows.map(([perm, org, group, user]) => (
                  <tr key={perm} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{perm}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary text-center">{org}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary text-center">{group}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary text-center">{user}</td>
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
