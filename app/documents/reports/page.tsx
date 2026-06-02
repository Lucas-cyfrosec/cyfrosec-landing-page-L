'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Report',
    overview1: 'The assistant uses your actual scan data, agent status, vulnerability findings, and AI insight records to answer infrastructure-specific questions, and references product documentation for how-to queries. It is designed to help teams fully understand their infrastructure and where possible risks might hide.',
    overview2: 'The scan results can be filtered using date ranges and the various other data fields available for easy viewing. A structured CSV file can also be downloaded for deeper analysis. The CSV file would contain the results of all the scans in different sheets. It improves audit readiness with exportable compliance ready report of scans.',
    filtersTitle: 'Filters and Sorting',
    filtersDesc: 'Curated report tabs support search plus tab-specific combinations of severity, state, status, category, and agent filters. Multi-select filters are preserved in the URL so filtered views can be bookmarked or shared.',
    filtersItems: [
      'Severity is available for vulnerability, misconfiguration, secret, network discovery, and raw fingerprint data.',
      'State is available for network discovery and raw port scan data.',
      'Status is available for vulnerability findings.',
      'Agent filters match agent display names so the same label can be used across curated and raw tabs.',
      'Sorting is applied on the server for every visible sortable column in the report tables.',
    ],
    rawTitle: 'Advanced Raw Telemetry',
    rawP1: 'The Advanced section exposes raw port scans, raw asset discovery results, and raw fingerprint runs. These views use the same filter bar as the curated tabs, but they show the original scan records instead of flattened report findings.',
    rawP2: 'Raw fingerprint severity is shown as the highest severity found inside a fingerprint result so severity filters stay deterministic across vulnerabilities, misconfigurations, and secrets captured in the same run.',
    exportTitle: 'Export and Audit',
    exportP1: "Excel exports keep the active row-level filters from the report page. Summary cards remain scoped only by the selected account group and date range, while the worksheet rows reflect the additional report filters.",
    exportP2: "The workbook still includes the curated report sheets. If export starts from a curated tab, that tab's current sort is applied only to its matching worksheet while the remaining worksheets keep their default ordering. Exports started from advanced raw telemetry keep the filtered curated workbook but do not forward raw-tab sorting into the workbook.",
    exportP3: 'This makes exported data easier to reconcile during investigations, support cases, and audit reviews because the row counts match what operators see in the UI.',
    scansCoveredTitle: 'Scans covered in reports:',
    networkTitle: 'Network Discovery',
    networkDesc: 'Identifies open ports and services to drive vulnerability detection and analysis.',
    sfTitle: 'Service Fingerprinting',
    sfDesc: 'Assesses security posture by identifying known CVEs in installed packages and services, detecting common misconfigurations and scanning for exposed secrets. Results of Service Fingerprinting scan is split into three sheets for easy visibility and analysis:',
    sfItems: [
      'Misconfiguration Findings',
      'Vulnerability Findings',
      'Secret Findings',
    ],
    assetTitle: 'Asset Discovery',
    assetDesc: 'Does ARP sweeps, local process enumeration and MAC vendor lookup.',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',              label: 'Overview' },
      { id: 'filters-and-sorting',   label: 'Filters and Sorting' },
      { id: 'advanced-raw-telemetry', label: 'Advanced Raw Telemetry' },
      { id: 'export-and-audit',      label: 'Export and Audit' },
      { id: 'network-discovery',     label: 'Network Discovery' },
      { id: 'service-fingerprinting', label: 'Service Fingerprinting' },
      { id: 'asset-discovery',       label: 'Asset Discovery' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function ReportsPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4">
          {c.overview2}
        </p>

        <hr className="cy-border-default mb-10" />

        <section id="filters-and-sorting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.filtersTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.filtersDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.filtersItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="advanced-raw-telemetry" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.rawTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.rawP1}
          </p>
          <p className="cy-text-secondary leading-relaxed">
            {c.rawP2}
          </p>
        </section>

        <section id="export-and-audit" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.exportTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.exportP1}
          </p>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.exportP2}
          </p>
          <p className="cy-text-secondary leading-relaxed">
            {c.exportP3}
          </p>
        </section>

        {/* Scans covered */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.scansCoveredTitle}
          </h2>

          {/* Network Discovery */}
          <section id="network-discovery" className="mb-8 scroll-mt-20">
            <h3
              className="text-base font-semibold cy-text-primary mb-3"
              style={{ fontFamily: HEADING_FONT }}
             
            >
              {c.networkTitle}
            </h3>
            <p className="cy-text-secondary leading-relaxed">
              {c.networkDesc}
            </p>
          </section>

          {/* Service Fingerprinting */}
          <section id="service-fingerprinting" className="mb-8 scroll-mt-20">
            <h3
              className="text-base font-semibold cy-text-primary mb-3"
              style={{ fontFamily: HEADING_FONT }}
             
            >
              {c.sfTitle}
            </h3>
            <p className="cy-text-secondary leading-relaxed mb-4">
              {c.sfDesc}
            </p>
            <ol className="space-y-4 cy-text-secondary text-sm">
              {c.sfItems.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                    {i + 1}
                  </span>
                  <span className="mt-0.5">{text}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Asset Discovery */}
          <section id="asset-discovery" className="mb-8 scroll-mt-20">
            <h3
              className="text-base font-semibold cy-text-primary mb-3"
              style={{ fontFamily: HEADING_FONT }}
             
            >
              {c.assetTitle}
            </h3>
            <p className="cy-text-secondary leading-relaxed">
              {c.assetDesc}
            </p>
          </section>
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
