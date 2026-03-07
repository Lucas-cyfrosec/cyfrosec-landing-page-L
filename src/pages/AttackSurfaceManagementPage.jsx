import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe,
  Radar,
  Eye,
  TrendingDown,
  Network,
  Cloud,
  Shield,
  Lock,
  AlertCircle,
  Layers
} from 'lucide-react';

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif';

const heroHighlights = [
  'External asset discovery',
  'Exposed service detection',
  'Shadow IT visibility',
  'Continuous monitoring'
];

const discoveryCapabilities = [
  {
    title: 'External Asset Discovery',
    body: 'Automatically map every IP, domain, subdomain, and internet-facing service belonging to your organization — including assets you have forgotten about.',
    icon: Globe
  },
  {
    title: 'Exposed Service Detection',
    body: 'Identify open ports, misconfigured services, and publicly reachable management interfaces before attackers find them.',
    icon: Radar
  },
  {
    title: 'Shadow IT & Unknown Assets',
    body: 'Surface cloud resources, SaaS apps, and developer-spun infrastructure that exist outside your official inventory and security controls.',
    icon: Eye
  },
  {
    title: 'Continuous Change Monitoring',
    body: 'Get alerted the moment a new asset appears, a certificate expires, or a service configuration changes — not weeks later during a quarterly scan.',
    icon: AlertCircle
  }
];

const riskDimensions = [
  {
    heading: 'Certificate & TLS Risk',
    body: 'Track expiring certificates, weak cipher suites, and misconfigured HTTPS configurations across all internet-facing services.'
  },
  {
    heading: 'Cloud Exposure',
    body: 'Discover publicly accessible S3 buckets, open storage blobs, misconfigured cloud security groups, and exposed cloud APIs across AWS, Azure, and GCP.'
  },
  {
    heading: 'Subdomain Takeover',
    body: 'Detect dangling DNS records and abandoned cloud resources that attackers could claim to host phishing or malware under your domain.'
  },
  {
    heading: 'Technology Fingerprinting',
    body: 'Identify software versions and frameworks running on exposed assets so you can correlate with vulnerability intelligence the moment a new CVE drops.'
  },
  {
    heading: 'Leaked Credentials',
    body: 'Monitor dark web and paste sites for credentials, API keys, and sensitive data associated with your domains and employee identities.'
  },
  {
    heading: 'Third-Party & Supply Chain',
    body: 'Extend visibility to your partner and vendor ecosystem — surface risks introduced by third parties with access to your environment.'
  }
];

const integrationWithVM = [
  'Discovered assets are automatically fed into the vulnerability management workflow',
  'New attack surface findings trigger immediate vulnerability scans on exposed services',
  'AI Engine correlates exposure context with CVE severity for sharper prioritization',
  'Unified dashboard showing both internal and external risk in a single view'
];

const attackVectors = [
  { label: 'Exposed RDP / SSH', risk: 'Critical', icon: Lock },
  { label: 'Misconfigured S3 Bucket', risk: 'Critical', icon: Cloud },
  { label: 'Expired TLS Certificate', risk: 'High', icon: Shield },
  { label: 'Subdomain Takeover', risk: 'High', icon: Network },
  { label: 'Open Admin Panel', risk: 'High', icon: Eye },
  { label: 'Legacy API Endpoint', risk: 'Medium', icon: Globe }
];

function SectionHeading({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-primary-300' : 'text-primary-500'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-surface-900 dark:text-surface-50'}`}
        style={{ fontFamily: HEADING_FONT }}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-surface-300' : 'text-surface-600 dark:text-surface-400'}`}>
        {body}
      </p>
    </div>
  );
}

const riskColor = {
  Critical: 'bg-red-500/20 text-red-300',
  High: 'bg-orange-500/20 text-orange-300',
  Medium: 'bg-yellow-500/20 text-yellow-300'
};

export default function AttackSurfaceManagementPage({ navigate }) {
  return (
    <main className="min-h-screen bg-surface-50 dark:bg-surface-950">

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,155,224,0.28),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(254,144,77,0.18),transparent_28%),linear-gradient(180deg,rgba(7,16,27,0.98),rgba(7,16,27,0.92))]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

        <div className="relative container mx-auto max-w-screen-xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <button
            onClick={() => navigate?.('home')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-surface-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to landing page
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">
                Attack Surface Management
              </p>
              <h1
                className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: HEADING_FONT }}
              >
                See your attack surface
                <br />
                <span className="text-gradient">before attackers do.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-300">
                CyfroSec continuously discovers and monitors every internet-facing asset, exposed service, and cloud resource — giving you complete external visibility and real-time risk alerts before exploitation occurs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-sm text-surface-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate?.('get-started')}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:-translate-y-0.5"
                >
                  Get started free
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href="mailto:sales@cyfrosec.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
                >
                  Talk to sales
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.05] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Mock ASM surface overview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-200 mb-3">Surface Overview</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Assets', count: '2,841', color: 'text-white' },
                    { label: 'Exposed', count: '134', color: 'text-orange-400' },
                    { label: 'New (24h)', count: '17', color: 'text-primary-300' }
                  ].map(({ label, count, color }) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <p className={`text-xl font-bold ${color}`}>{count}</p>
                      <p className="text-xs text-surface-400 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-surface-400 mb-2 px-1">Detected Attack Vectors</p>
              <div className="space-y-2">
                {attackVectors.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <div className="flex items-center gap-3">
                        <Icon className="size-4 text-surface-400" />
                        <p className="text-sm text-surface-200">{v.label}</p>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${riskColor[v.risk]}`}>
                        {v.risk}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery Capabilities */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Discovery"
            title="Continuous, automatic asset discovery."
            body="CyfroSec maps your attack surface the way an attacker would — starting from your domains and branching out across every reachable asset."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {discoveryCapabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-surface-900 dark:text-surface-50" style={{ fontFamily: HEADING_FONT }}>
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                    {cap.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Dimensions */}
      <section className="bg-surface-100 py-16 dark:bg-surface-900/40 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Risk Coverage"
            title="Every dimension of external exposure."
            body="Attack surface risk goes far beyond open ports. CyfroSec covers the full spectrum of how attackers gain their initial foothold."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {riskDimensions.map((dim, index) => (
              <motion.div
                key={dim.heading}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[24px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
              >
                <TrendingDown className="size-5 text-primary-500 mb-3" />
                <h3 className="text-base font-semibold text-surface-900 dark:text-surface-50" style={{ fontFamily: HEADING_FONT }}>
                  {dim.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {dim.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with VM */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionHeading
              eyebrow="Unified Platform"
              title="ASM and VM — better together."
              body="Attack Surface Management feeds directly into the vulnerability management workflow. New external assets are automatically scanned, and exposure context sharpens AI prioritization."
            />

            <div className="rounded-[28px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900">
              <ul className="space-y-4">
                {integrationWithVM.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-surface-200/80 bg-surface-50/80 p-4 dark:border-surface-700 dark:bg-surface-800/70">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-500" />
                    <span className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => navigate?.('vulnerability-management')}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-500/10 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-500/15 dark:text-primary-300"
                >
                  Explore Vulnerability Management
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t cy-border-strong">
        <div className="relative bg-[var(--bg-overlay)] py-16 dark:bg-[#020610] sm:py-20 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[80%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.23),transparent_62%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.78) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.78) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative container mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
              Get Started
            </p>
            <h2
              className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: HEADING_FONT }}
            >
              Know your attack surface completely.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Start your free evaluation and get a complete picture of your external exposure — with continuous monitoring that never stops watching.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => navigate?.('get-started')}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-[0_0_38px_rgba(3,155,224,0.3)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Get started free
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="mailto:sales@cyfrosec.com"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
