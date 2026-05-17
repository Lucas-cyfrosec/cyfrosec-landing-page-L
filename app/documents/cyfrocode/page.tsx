'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Code Security',
    title: 'CyfroCode',
    overview1: 'CyfroCode provides a comprehensive code security workspace embedded directly within CyfroSec. Designed for developers and security teams alike, it allows you to connect your code repositories, automatically run security scans, and generate actionable remediation patches, all without leaving the platform.',
    overview2: 'CyfroCode supports 6 programming languages for code security scanning, plus 5 infrastructure/configuration surfaces.',
    languagesTitle: 'Programming Languages',
    languagesHeaders: ['Language', 'Extensions'],
    languages: [
      ['Python', '.py'],
      ['JavaScript', '.js'],
      ['TypeScript', '.ts'],
      ['Java', '.java'],
      ['Go', '.go'],
      ['C#', '.cs'],
    ] as [string, string][],
    infraTitle: 'Infrastructure / Configuration Surfaces',
    infraItems: [
      'Container (Dockerfile)',
      'Terraform (IaC)',
      'Kubernetes (manifests)',
      'YAML (generic config)',
      'CI (GitHub Actions workflows)',
    ],
    githubTitle: 'Connecting GitHub',
    githubIntro: 'To get started with CyfroCode, you need to connect your organization\'s GitHub account:',
    githubSteps: [
      'Navigate to CyfroCode via the main navigation menu.',
      'Click the Connect GitHub App button.',
      'You will be redirected to GitHub to authorize and install the CyfroSec GitHub App.',
      'Once installed, CyfroSec will automatically sync your repositories and display them on the CyfroCode dashboard.',
    ],
    githubNoteLabel: 'Note:',
    githubNote: 'You must be an administrator in both GitHub and CyfroSec to complete this setup.',
    reposTitle: 'Managing Synced Repositories',
    reposIntro: 'On the CyfroCode dashboard, your synced repositories are listed with helpful metadata:',
    reposHeaders: ['Field', 'Description'],
    reposRows: [
      ['Default Branch', 'The primary branch monitored for changes.'],
      ['Languages & Frameworks', 'Auto-detected technologies in your codebase.'],
      ['Tech Indicators', 'Badges indicate if the repository uses Docker, Terraform, or GitHub Actions.'],
      ['Sync Status', 'Real-time status of the connection with GitHub.'],
    ] as [string, string][],
    scansTitle: 'Running Scans',
    scansIntro: 'To analyze a repository for security vulnerabilities:',
    scansSteps: [
      'Locate the repository in the Synced Repositories list.',
      'Click the Queue Scan button.',
      'The scan will be queued for the default branch and transition through various states (queued, running, completed, or failed).',
    ],
    scansNote: 'You can monitor actively queued and historical scans in the Recent Scans section on the main CyfroCode dashboard.',
    scansNoteStrong: 'Recent Scans',
    findingsTitle: 'Reviewing Findings & AI Explanations',
    findingsIntro: 'Once a scan concludes, you can click on it to view a detailed breakdown of the findings. The scan detail page offers:',
    findingsItems: [
      'Metrics Overview: A snapshot of total findings, risk scores, and duration of the scan.',
      'Grouped Issues vs. Raw Matches: Toggle between grouped issues (deduplicated by vulnerability type) or raw matches (every specific line of code affected).',
      'Severity Filters: Quickly filter findings from Critical to Low severity.',
    ],
    findingsCardIntro: 'Each finding card provides deep context:',
    findingsHeaders: ['Section', 'Details'],
    findingsRows: [
      ['Source Information', 'Includes the primary file path and the specific lines of code.'],
      ['AI Explanation', 'CyfroAssistant automatically summarizes the vulnerability, explaining why it is an issue in plain, contextual language.'],
      ['Remediation Guidance', 'Expand the guidance section to learn how to mitigate the risk manually.'],
    ] as [string, string][],
    patchTitle: 'Automated Patch Proposals',
    patchIntro: 'For supported vulnerabilities, CyfroCode goes beyond reporting by offering automated, AI-driven patches:',
    patchSteps: [
      'Click Generate Patch on a specific finding.',
      'CyfroSec\'s AI models will analyze the vulnerability context and generate a safe, functional code change.',
      'Review the proposed diff directly within the UI.',
      'If correct, click Approve to export the remediation patch directly to a new branch in your GitHub repository, ready for an easy Pull Request review.',
      'If a finding turns out to be a false positive or an accepted risk, you can use the Suppress option to hide it from future scans.',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',           label: 'Overview' },
      { id: 'languages',          label: 'Supported Languages' },
      { id: 'infra-surfaces',     label: 'Infrastructure Surfaces' },
      { id: 'connecting-github',  label: 'Connecting GitHub' },
      { id: 'managing-repos',     label: 'Managing Synced Repositories' },
      { id: 'running-scans',      label: 'Running Scans' },
      { id: 'reviewing-findings', label: 'Reviewing Findings & AI Explanations' },
      { id: 'patch-proposals',    label: 'Automated Patch Proposals' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'أمان الكود',
    title: 'CyfroCode',
    overview1: 'يوفر CyfroCode مساحة عمل شاملة لأمان الكود مدمجة مباشرة في CyfroSec. صُمِّم للمطورين وفرق الأمان على حد سواء، ويتيح لك توصيل مستودعات الكود وتشغيل فحوصات أمنية تلقائية وإنشاء تصحيحات قابلة للتنفيذ، كل ذلك دون مغادرة المنصة.',
    overview2: 'يدعم CyfroCode 6 لغات برمجة لفحص أمان الكود، بالإضافة إلى 5 سطوح للبنية التحتية والإعدادات.',
    languagesTitle: 'لغات البرمجة',
    languagesHeaders: ['اللغة', 'الامتدادات'],
    languages: [
      ['Python', '.py'],
      ['JavaScript', '.js'],
      ['TypeScript', '.ts'],
      ['Java', '.java'],
      ['Go', '.go'],
      ['C#', '.cs'],
    ] as [string, string][],
    infraTitle: 'سطوح البنية التحتية / الإعدادات',
    infraItems: [
      'حاوية (Dockerfile)',
      'Terraform (IaC)',
      'Kubernetes (البيانات المعمارية)',
      'YAML (إعداد عام)',
      'CI (سير عمل GitHub Actions)',
    ],
    githubTitle: 'توصيل GitHub',
    githubIntro: 'للبدء مع CyfroCode، تحتاج إلى توصيل حساب GitHub الخاص بمؤسستك:',
    githubSteps: [
      'انتقل إلى CyfroCode عبر قائمة التنقل الرئيسية.',
      'انقر على زر توصيل تطبيق GitHub.',
      'ستتم إعادة توجيهك إلى GitHub للتصريح وتثبيت تطبيق CyfroSec على GitHub.',
      'بعد التثبيت، ستزامن CyfroSec مستودعاتك تلقائياً وتعرضها في لوحة تحكم CyfroCode.',
    ],
    githubNoteLabel: 'ملاحظة:',
    githubNote: 'يجب أن تكون مسؤولاً في كل من GitHub وCyfroSec لإتمام هذا الإعداد.',
    reposTitle: 'إدارة المستودعات المتزامنة',
    reposIntro: 'في لوحة تحكم CyfroCode، تُدرج مستودعاتك المتزامنة مع بيانات وصفية مفيدة:',
    reposHeaders: ['الحقل', 'الوصف'],
    reposRows: [
      ['الفرع الافتراضي', 'الفرع الأساسي الذي تتم مراقبته للتغييرات.'],
      ['اللغات والأطر', 'التقنيات المكتشفة تلقائياً في قاعدة الكود.'],
      ['مؤشرات التقنية', 'شارات تشير إلى استخدام المستودع لـ Docker أو Terraform أو GitHub Actions.'],
      ['حالة المزامنة', 'حالة الاتصال مع GitHub في الوقت الفعلي.'],
    ] as [string, string][],
    scansTitle: 'تشغيل الفحوصات',
    scansIntro: 'لتحليل مستودع بحثاً عن ثغرات أمنية:',
    scansSteps: [
      'حدد المستودع في قائمة المستودعات المتزامنة.',
      'انقر على زر وضع الفحص في الطابور.',
      'سيتم وضع الفحص في طابور للفرع الافتراضي وسيمر بحالات مختلفة (في الطابور، قيد التشغيل، مكتمل، أو فشل).',
    ],
    scansNote: 'يمكنك مراقبة الفحوصات النشطة والتاريخية في قسم الفحوصات الأخيرة في لوحة تحكم CyfroCode الرئيسية.',
    scansNoteStrong: 'الفحوصات الأخيرة',
    findingsTitle: 'مراجعة النتائج وتفسيرات الذكاء الاصطناعي',
    findingsIntro: 'بعد اكتمال الفحص، يمكنك النقر عليه لعرض تفصيل مفصّل للنتائج. تقدم صفحة تفاصيل الفحص:',
    findingsItems: [
      'نظرة عامة على المقاييس: لقطة من إجمالي النتائج ودرجات المخاطر ومدة الفحص.',
      'المشكلات المجمّعة مقابل المطابقات الخام: تبديل بين المشكلات المجمّعة (مزالة التكرار حسب نوع الثغرة) أو المطابقات الخام (كل سطر كود محدد متأثر).',
      'مرشحات الخطورة: تصفية النتائج بسرعة من الحرجة إلى المنخفضة.',
    ],
    findingsCardIntro: 'توفر كل بطاقة نتيجة سياقاً عميقاً:',
    findingsHeaders: ['القسم', 'التفاصيل'],
    findingsRows: [
      ['معلومات المصدر', 'تتضمن مسار الملف الرئيسي وأسطر الكود المحددة.'],
      ['تفسير الذكاء الاصطناعي', 'يلخص CyfroAssistant تلقائياً الثغرة موضحاً سبب كونها مشكلة بلغة سياقية واضحة.'],
      ['إرشادات العلاج', 'وسّع قسم الإرشادات لتعلم كيفية التخفيف من المخاطر يدوياً.'],
    ] as [string, string][],
    patchTitle: 'مقترحات التصحيح التلقائي',
    patchIntro: 'للثغرات المدعومة، يتجاوز CyfroCode مجرد الإبلاغ بتقديم تصحيحات آلية مدفوعة بالذكاء الاصطناعي:',
    patchSteps: [
      'انقر على توليد تصحيح لنتيجة محددة.',
      'ستحلل نماذج الذكاء الاصطناعي في CyfroSec سياق الثغرة وتولّد تغييراً آمناً وفعّالاً في الكود.',
      'راجع الفرق المقترح مباشرة داخل واجهة المستخدم.',
      'إذا كان صحيحاً، انقر على موافقة لتصدير تصحيح العلاج مباشرة إلى فرع جديد في مستودع GitHub، جاهزاً لمراجعة طلب السحب.',
      'إذا اتضح أن النتيجة إيجابية كاذبة أو مخاطرة مقبولة، يمكنك استخدام خيار إخفاء لإخفائها من الفحوصات المستقبلية.',
    ],
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',           label: 'نظرة عامة' },
      { id: 'languages',          label: 'اللغات المدعومة' },
      { id: 'infra-surfaces',     label: 'سطوح البنية التحتية' },
      { id: 'connecting-github',  label: 'توصيل GitHub' },
      { id: 'managing-repos',     label: 'إدارة المستودعات المتزامنة' },
      { id: 'running-scans',      label: 'تشغيل الفحوصات' },
      { id: 'reviewing-findings', label: 'مراجعة النتائج وتفسيرات الذكاء الاصطناعي' },
      { id: 'patch-proposals',    label: 'مقترحات التصحيح التلقائي' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function CyfroCodePage() {
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
          id="overview"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight scroll-mt-20"
          style={{ fontFamily: HEADING_FONT }}
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview2}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Supported Languages */}
        <section id="languages" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.languagesTitle}
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.languagesHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.languages.map(([lang, ext]) => (
                  <tr key={lang} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" lang="en">{lang}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs" lang="en">{ext}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Infrastructure Surfaces */}
        <section id="infra-surfaces" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.infraTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.infraItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <hr className="cy-border-default mb-10" />

        {/* Connecting GitHub */}
        <section id="connecting-github" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.githubTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.githubIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.githubSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.githubNoteLabel}</strong>{' '}
            <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.githubNote}</span>
          </div>
        </section>

        {/* Managing Synced Repositories */}
        <section id="managing-repos" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.reposTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.reposIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.reposHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.reposRows.map(([field, desc]) => (
                  <tr key={field} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{field}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Running Scans */}
        <section id="running-scans" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.scansTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scansIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.scansSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {isAr
              ? <>يمكنك مراقبة الفحوصات النشطة والتاريخية في قسم <strong className="cy-text-primary">الفحوصات الأخيرة</strong> في لوحة تحكم CyfroCode الرئيسية.</>
              : <>You can monitor actively queued and historical scans in the <strong className="cy-text-primary">Recent Scans</strong> section on the main CyfroCode dashboard.</>
            }
          </p>
        </section>

        {/* Reviewing Findings */}
        <section id="reviewing-findings" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.findingsTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.findingsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.findingsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.findingsCardIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.findingsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.findingsRows.map(([section, details]) => (
                  <tr key={section} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{section}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Automated Patch Proposals */}
        <section id="patch-proposals" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.patchTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.patchIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.patchSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
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
