'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import DocsCodeBlock from '../_components/DocsCodeBlock'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAgent',
    title: 'Multi Container Scanning (Apps, Services)',
    overview: 'CyfroAgent can perform scans on containerized webapps and services if they are in the same Docker network and have a shared volume to scan files for fingerprinting.',
    prereqTitle: 'Prerequisites',
    prereqItems: [
      'One or more application containers are already running',
      'Docker is installed and accessible',
      'You have a valid CyfroAgent token',
    ],
    archTitle: 'Architecture',
    networkTitle: 'Network Configuration',
    networkIntro: 'CyfroAgent must run on the same Docker network as the application containers.',
    networkIdentifyLabel: 'Identify Existing Network',
    networkExampleLabel: 'Example output:',
    networkCreateLabel: 'Create Network (if required)',
    networkCreateIntro: 'If your containers are not already on a shared network:',
    networkAttachLabel: 'Attach containers:',
    networkNoteLabel: 'Note:',
    networkNote: 'The CyfroAgent has to be part of the network that you wish to scan. Please connect it to the network(s) where your desired containers are already present.',
    volumeTitle: 'Shared Volume Configuration',
    volumeIntro: 'Filesystem scanning requires a shared volume accessible by both the application container with write access and CyfroAgent with read-only access.',
    volumeCreateLabel: 'Create Volume',
    volumePlaceLabel: 'Place the necessary files in the shared volume.',
    volumeMountLabel: 'Mount Volume in Application Container',
    volumeRunLabel: 'If using docker run:',
    volumeComposeLabel: 'If using docker-compose:',
    deployTitle: 'Deploying CyfroAgent',
    deployIntro: 'Run CyfroAgent with network access to application containers and read-only access to the shared volume.',
    deployNoteLabel: 'Note:',
    deployNote: 'Please specify the file path to the shared volume in the Scan Setups page to perform scans.',
    verifyTitle: 'Verification',
    verifyVolumeLabel: 'Verify Volume Mount',
    verifyCompareLabel: 'Compare with:',
    verifyNetworkLabel: 'Verify Network Connectivity',
    verifyThenLabel: 'Then:',
    targetsTitle: 'Determining Scan Targets',
    targetsIntro: 'Identify the subnet that can be provided when scans are set up in the Scans Setup page.',
    targetsExampleLabel: 'Example:',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',       label: 'Overview' },
      { id: 'prerequisites',  label: 'Prerequisites' },
      { id: 'architecture',   label: 'Architecture' },
      { id: 'network-config', label: 'Network Configuration' },
      { id: 'shared-volume',  label: 'Shared Volume Configuration' },
      { id: 'deploying',      label: 'Deploying CyfroAgent' },
      { id: 'verification',   label: 'Verification' },
      { id: 'scan-targets',   label: 'Determining Scan Targets' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function DockerScanningPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" lang="en">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.prereqTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.prereqItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.archTitle}
          </h2>
          <DocsCodeBlock
            code={`Docker Network

[ Application Containers ]
   |-- expose services (e.g., 80, 8080)
   |-- optionally write scanable files

[ Shared Volume ]
   |-- stores code/dependency/configuration files

[ CyfroAgent Container ]
   |-- performs network scans
   |-- performs filesystem scans via mounted volume`}
          />
        </section>

        {/* Network Configuration */}
        <section id="network-config" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.networkTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.networkIntro}</p>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.networkIdentifyLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker inspect <container_name> --format '{{json .NetworkSettings.Networks}}'`} />
          <p className="cy-text-secondary text-sm mb-2">{c.networkExampleLabel}</p>
          <DocsCodeBlock className="mb-6" code={`{
  "sample-webapp_default": {}
}`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.networkCreateLabel}</p>
          <p className="cy-text-secondary text-sm mb-2">{c.networkCreateIntro}</p>
          <DocsCodeBlock className="mb-4" code={`docker network create cyfro-network`} />
          <p className="cy-text-secondary text-sm mb-2">{c.networkAttachLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker network connect cyfro-network <container_name>`} />
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">{c.networkNoteLabel}</strong>{' '}
            <span>{c.networkNote}</span>
          </div>
        </section>

        {/* Shared Volume Configuration */}
        <section id="shared-volume" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.volumeTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.volumeIntro}</p>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.volumeCreateLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker volume create webapp_scan_export`} />
          <p className="cy-text-secondary text-sm mb-5">{c.volumePlaceLabel}</p>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.volumeMountLabel}</p>
          <p className="cy-text-secondary text-sm mb-2">{c.volumeRunLabel}</p>
          <DocsCodeBlock
            className="mb-4"
            code={`docker run -d \\
  --name <app_container> \\
  --network <network_name> \\
  -v webapp_scan_export:/opt/demo-data \\
  <image>`}
          />
          <p className="cy-text-secondary text-sm mb-2">{c.volumeComposeLabel}</p>
          <DocsCodeBlock
            code={`services:
  app:
    image: <image>
    volumes:
      - webapp_scan_export:/opt/demo-data

volumes:
  webapp_scan_export:`}
          />
        </section>

        {/* Deploying CyfroAgent */}
        <section id="deploying" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.deployTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.deployIntro}</p>
          <DocsCodeBlock
            code={`docker run -d \\
  --name cyfro-agent \\
  --network <network_name> \\
  --cap-add NET_RAW \\
  --cap-add=NET_ADMIN \\
  -v cyfro-agent-data:/data/agent \\
  -v /:/host:ro \\
  -v webapp_scan_export:/scan-target:ro \\
  cyfrosec/cyfro-agent:latest \\
  --agentName "Agent1" \\
  --token "<TOKEN>" \\
  --fernet-key "your-fernet-key" \\
  --location "MyLocation"`}
          />
          <div className="mt-4 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">{c.deployNoteLabel}</strong>{' '}
            <span>{c.deployNote}</span>
          </div>
        </section>

        {/* Verification */}
        <section id="verification" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.verifyTitle}
          </h2>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.verifyVolumeLabel}</p>
          <DocsCodeBlock className="mb-3" code={`docker exec -it cyfro-agent ls /scan-target`} />
          <p className="cy-text-secondary text-sm mb-2">{c.verifyCompareLabel}</p>
          <DocsCodeBlock className="mb-6" code={`docker exec -it <app_container> ls /opt/demo-data`} />

        </section>

        {/* Determining Scan Targets */}
        <section id="scan-targets" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.targetsTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-3">{c.targetsIntro}</p>
          <DocsCodeBlock className="mb-4" code={`docker network inspect <network_name>`} />
          <p className="cy-text-secondary text-sm mb-2">{c.targetsExampleLabel}</p>
          <DocsCodeBlock code={`"Subnet": "172.22.0.0/16"`} />
        </section>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">
            {c.tocTitle}
          </p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block"
                 
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
              <span>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
