import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { Radar, Cpu, Server, Search, Lock, Database, Network, Eye, AlertTriangle, Globe } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'Asset Discovery | CyfroSec' }


const capabilities = [
  { icon: Search, title: 'ARP Discovery', description: 'Crafted ARP probes sweep your network to identify all active hosts across subnets, catching devices that don\'t respond to ICMP or DNS queries.' },
  { icon: Cpu, title: 'Local Host Inventory', description: 'Enumerates running processes, active services, local connections, routing tables, and ARP caches directly on the host for a complete low-overhead inventory.' },
  { icon: Database, title: 'MAC Vendor Resolution', description: 'Looks up MAC address vendor prefixes to classify device and flag unrecognized hardware.' },
  { icon: Server, title: 'SMB / NetBIOS Enumeration', description: 'Discovers hostnames, and metadata across the network for full environment visibility.' },
  { icon: Globe, title: 'DHCP & AD Enrichment', description: 'Enriches discovered assets with data from DHCP logs and Active Directory / LDAP for richer host identity, ownership, and classification context.' },
  { icon: Lock, title: 'Low-Impact Design', description: 'Reads local connections, running services, routing tables, and ARP caches with minimal CPU and memory overhead so that they are safe to run continuously on production hosts.' },
]

const pipeline = [
  { step: '01', title: 'ARP Sweep', body: 'Sends crafted ARP probes across the target subnet to build an initial map of active hosts, including those invisible to standard ping sweeps.' },
  { step: '02', title: 'Host Inventory', body: 'Enumerates processes, services, routing tables, and ARP caches on the agent host for a complete local inventory picture.' },
  { step: '03', title: 'Name & Vendor Resolution', body: 'Resolves MAC address vendors and performs SMB/NetBIOS enumeration to assign device classifications and hostnames to discovered IPs.' },
  { step: '04', title: 'Enrichment', body: 'Pulls additional context from DHCP lease history and Active Directory / LDAP where configured, adding owner, department, and hostname metadata.' },
  { step: '05', title: 'AI Insights', body: 'Asset Discovery findings feed into Cyfro AI Insights, which flags unrecognized devices, MAC anomalies, and unexpected hosts with prioritized risk context.' },
]

const useCases = [
  { icon: Eye, title: 'Shadow IT Detection', body: 'Discover devices on your network that were never registered like rogue access points, personal devices, or forgotten servers that create hidden exposure.' },
  { icon: AlertTriangle, title: 'Inventory Accuracy', body: 'Reconcile your CMDB or asset register against what Asset Discovery actually finds. Gaps represent unmanaged, potentially vulnerable hosts.' },
  { icon: Network, title: 'Subnet Segmentation Validation', body: 'Verify that network segmentation is working as intended by comparing what hosts are visible from each agent\'s vantage point.' },
  { icon: Database, title: 'Device Classification', body: 'MAC vendor resolution and SMB enumeration give you device type context which are useful for scoping vulnerability assessments and patch management.' },
]


export default function AssetDiscoveryPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <Radar className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            Asset Discovery
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            Performs ARP sweeps, local process enumeration, and MAC vendor lookups to build a complete, enriched inventory of every device across your environment, with minimal overhead and continuous updates.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              Unknown assets are unmanaged risks
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Every asset register becomes stale the moment infrastructure changes. Devices join the network, containers spin up, and legacy hosts linger.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              These unknown assets may carry vulnerabilities that never get patched because nobody knows they exist.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Asset Discovery continuously sweeps your network using multiple discovery methods so your inventory reflects reality — not what was documented six months ago.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Unregistered device connects to network', impact: 'Discovered in next ARP sweep' },
              { label: 'Legacy server missed in CMDB audit', impact: 'MAC vendor + SMB enumeration surfaces it' },
              { label: 'Container workload spins up on new subnet', impact: 'Process enumeration captures it locally' },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p className="text-sm font-semibold cy-text-primary">{row.label}</p>
                <p className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Capabilities</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>Multiple methods, one complete inventory</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-2xl border cy-border-default cy-bg-muted p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold cy-text-primary">{cap.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">How it works</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>From sweep to enriched inventory</h2>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Asset Discovery combines active network probing with local host telemetry and external enrichment sources to produce the most complete asset picture possible automatically, on every scan run.
            </p>
          </div>
          <ol className="relative space-y-0 list-none">
            {pipeline.map((item, i, arr) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-400 ring-1 ring-primary-500/20">{item.step}</span>
                  {i < arr.length - 1 && <span className="mt-1 w-px flex-1 bg-primary-500/15 mb-1" style={{ minHeight: 28 }} />}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-semibold cy-text-primary">{item.title}</p>
                  <p className="mt-0.5 text-sm cy-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Use Cases</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>When teams rely on Asset Discovery</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-muted p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold cy-text-primary">{uc.title}</h3>
                    <p className="text-sm cy-text-secondary leading-relaxed">{uc.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <AIChatbot />
    </PublicPageShell>
  )
}
