import DocsCodeBlock from '../_components/DocsCodeBlock'

export const metadata = {
  title: 'Deleting CyfroAgent | CyfroSec Documentation',
  description: 'Step-by-step guide to fully remove CyfroAgent — container, volume, and image.',
  alternates: { canonical: '/documents/delete-agent' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export default function DeleteAgentPage() {
  return (
    <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

      <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
        CyfroAgent
      </p>

      <h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
        style={{ fontFamily: HEADING_FONT }}
      >
        Deleting CyfroAgent
      </h1>

      <p className="cy-text-secondary leading-relaxed mb-8">
        The below steps will help you in deleting the CyfroAgent:
      </p>

      {/* Step 1 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
        >
          Step 1: Remove the Container
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rm cyfro-agent`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">Note:</strong> Replace <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">cyfro-agent</code> with the name you provided to the CyfroAgent Docker container in case it was changed.
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
        >
          Step 2: Delete the Volume
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker volume rm cyfro-agent-data`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">Note:</strong> Required for a true uninstall. The volume is stored under <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/data/agent</code>.
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-8">
        <h2
          className="text-xl font-bold cy-text-primary mb-3"
          style={{ fontFamily: HEADING_FONT }}
        >
          Step 3: Delete the Image
        </h2>
        <DocsCodeBlock label="Shell" className="mb-3" code={`docker rmi cyfrosec/cyfro-agent:latest`} />
        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
          <strong className="cy-text-primary">Note:</strong> To be executed only if <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">docker images</code> lists <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">cyfro-agent:latest</code>.
        </div>
      </section>

    </article>
  )
}
