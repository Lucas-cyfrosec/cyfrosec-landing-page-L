'use client'

import DocsCodeBlock from '../_components/DocsCodeBlock'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAgent',
    title: 'Deleting CyfroAgent',
    intro: 'The below steps will help you in deleting the CyfroAgent:',
    step1Title: 'Step 1: Stop the Container',
    step1Note: 'Replace cyfro-agent with the name you provided to the CyfroAgent Docker container in case it was changed.',
    noteLabel: 'Note:',
    step2Title: 'Step 2: Remove the Container',
    step2Note: 'Run this only after the container has been stopped successfully.',
    step3Title: 'Step 3: Delete the Volume',
    step3Note: 'Required for a true uninstall. The volume is stored under /data/agent.',
    step4Title: 'Step 4: Delete the Image',
    step4NotePre: 'To be executed only if ',
    step4NoteBold: 'docker images',
    step4NotePost: ' command lists cyfro-agent:latest.',
    step5Title: 'Step 5: Remove from Registered Agents',
    step5Desc: 'Delete the respective agent name from the Registered Agents list in the CyfroAgent tab in the CyfroSec portal.',
  },
}

export default function DeleteAgentPage() {
  const c = CONTENT.en

  return (
    <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

      <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
        <span lang="en">{c.category}</span>
      </p>

      <h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
        style={{ fontFamily: HEADING_FONT }}
       
      >
        {c.title}
      </h1>

      <p className="cy-text-secondary leading-relaxed mb-8">
        {c.intro}
      </p>

      {/* Step 1 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.step1Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker stop cyfro-agent`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step1Note}
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.step2Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rm cyfro-agent`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step2Note}
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.step3Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker volume rm cyfro-agent-data`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step3Note}
        </div>
      </section>

      {/* Step 4 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.step4Title}
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rmi cyfrosec/cyfro-agent:latest`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">{c.noteLabel}</strong>{' '}
          {c.step4NotePre}<strong className="cy-text-primary" lang="en">{c.step4NoteBold}</strong>{c.step4NotePost}
        </div>
      </section>

      {/* Step 5 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.step5Title}
        </h2>
        <p className="cy-text-secondary text-sm mb-4">
          {c.step5Desc}
        </p>
        <img
          src="/screenshots/reegistered_Agents.png"
          alt="Registered Agents list in CyfroAgent tab"
          className="rounded-xl border cy-border-default w-full"
        />
      </section>

    </article>
  )
}
