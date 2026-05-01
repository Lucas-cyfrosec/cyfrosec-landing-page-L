import { BookDemoForm } from '@/app/components/landing/BookDemoForm'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { MorphingCardStack } from '@/app/components/ui/morphing-card-stack'
import { ScreenshotShowcase } from '@/app/components/ui/screenshot-showcase'
import { Eye, Shield, Zap } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'Book Demo | CyfroSec',
  description:
    'Discover your attack surface in minutes. Book a live CyfroSec demo tailored to your environment.',
}

const VALUE_CARDS = [
  {
    icon: Eye,
    title: 'Visibility',
    points: [
      'Continuous discovery of assets, vulnerabilities, secrets, and misconfigurations.',
      'AI-powered asset topology and deep infrastructure insights.',
    ],
  },
  {
    icon: Shield,
    title: 'Risk & Compliance',
    points: [
      'AI-powered risk prioritization based on exposure and exploitability.',
      'Compliance-ready reports including GDPR and security frameworks.',
    ],
  },
  {
    icon: Zap,
    title: 'AI driven Remediation',
    points: [
      'AI-driven remediation prioritization based on exposure and exploitability.',
      'Plain-language remediation guidance that any engineer can understand.',
    ],
  },
]

export default function BookDemo() {
  return (
    <PublicPageShell>
      {/* Page header */}
      <section className="relative bg-[#050d1a] pt-28 pb-14 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(3,155,224,0.18),transparent)]"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
          Security insights for engineers. Strategic visibility for executives.
        </p>
        <h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ fontFamily: HEADING_FONT }}
        >
          Discover Your Attack Surface
          <br className="hidden sm:block" />
          <span className="text-primary-400"> in Minutes</span>
        </h1>
      </section>

      {/* Two-column body */}
      <section className="bg-[#050d1a] pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Header text — above both columns */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: HEADING_FONT }}
            >
              Discover and Secure Your Infrastructure with Advanced AI
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary-400">
              Advanced AI. Simple Cybersecurity.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-2xl">
              See your infrastructure the way attackers do.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-2xl">
              CyfroSec continuously discovers assets, analyzes vulnerabilities, and provides AI-driven remediation guidance
              across your infrastructure.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

            {/* ── Left: Form + What happens next ── */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <h2
                  className="mb-6 text-2xl font-bold text-white"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  Ready to see your attack surface?
                </h2>
                <BookDemoForm />
              </div>

            </div>

            {/* ── Right: Marketing ── */}
            <div className="space-y-10 order-1 lg:order-2 lg:sticky lg:top-8 lg:self-start">

              {/* Value cards — MorphingCardStack */}
              <MorphingCardStack
                defaultLayout="stack"
                cards={[
                  {
                    id: 'visibility',
                    icon: <Eye className="size-4 text-primary-400" />,
                    title: 'Visibility',
                    points: VALUE_CARDS[0].points,
                  },
                  {
                    id: 'risk',
                    icon: <Shield className="size-4 text-primary-400" />,
                    title: 'Risk & Compliance',
                    points: VALUE_CARDS[1].points,
                  },
                  {
                    id: 'remediation',
                    icon: <Zap className="size-4 text-primary-400" />,
                    title: 'AI-Driven Remediation',
                    points: VALUE_CARDS[2].points,
                  },
                ]}
              />

              {/* Screenshot showcase */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-400">
                  See CyfroSec in Action
                </p>
                <ScreenshotShowcase />
              </div>

            </div>

          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
