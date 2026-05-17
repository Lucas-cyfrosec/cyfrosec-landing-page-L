'use client'

import DocsCodeBlock from '../_components/DocsCodeBlock'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAgent',
    title: 'Deleting CyfroAgent',
    intro: 'The below steps will help you in deleting the CyfroAgent:',
    step1Title: 'Step 1: Remove the Container',
    step1Note: 'Replace cyfro-agent with the name you provided to the CyfroAgent Docker container in case it was changed.',
    noteLabel: 'Note:',
    step2Title: 'Step 2: Delete the Volume',
    step2Note: 'Required for a true uninstall. The volume is stored under /data/agent.',
    step3Title: 'Step 3: Delete the Image',
    step3Note: 'To be executed only if docker images lists cyfro-agent:latest.',
  },
  ar: {
    category: 'CyfroAgent',
    title: 'حذف CyfroAgent',
    intro: 'الخطوات التالية ستساعدك في حذف CyfroAgent:',
    step1Title: 'الخطوة 1: إزالة الحاوية',
    step1Note: 'استبدل cyfro-agent بالاسم الذي أعطيته لحاوية Docker الخاصة بـ CyfroAgent في حال تغيير الاسم.',
    noteLabel: 'ملاحظة:',
    step2Title: 'الخطوة 2: حذف وحدة التخزين',
    step2Note: 'مطلوب لإلغاء التثبيت الكامل. يتم تخزين وحدة التخزين ضمن /data/agent.',
    step3Title: 'الخطوة 3: حذف الصورة',
    step3Note: 'يُنفَّذ فقط إذا أدرج docker images الصورة cyfro-agent:latest.',
  },
}

export default function DeleteAgentPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

      <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
        <span lang="en">{c.category}</span>
      </p>

      <h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
        style={{ fontFamily: HEADING_FONT }}
        dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
      >
        {c.title}
      </h1>

      <p className="cy-text-secondary leading-relaxed mb-8" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
        {c.intro}
      </p>

      {/* Step 1 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
          dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
        >
          {c.step1Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rm cyfro-agent`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step1Note}
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
          dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
        >
          {c.step2Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker volume rm cyfro-agent-data`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step2Note}
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
          dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
        >
          {c.step3Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rmi cyfrosec/cyfro-agent:latest`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step3Note}
        </div>
      </section>

    </article>
  )
}
