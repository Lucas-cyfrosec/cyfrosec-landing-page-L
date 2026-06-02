'use client';

import Link from 'next/link';
import { LANDING_FOOTER_LINKS, type FooterLink } from '../navigation';
import { useTranslation } from '@/src/i18n';

const currentYear = new Date().getFullYear();

function FooterLinkItem({ link, label }: { link: FooterLink; label: string }) {
  const cls = "text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors block";
  if (link.isNav) {
    return <Link href={link.href} className={cls}>{label}</Link>;
  }
  return <a href={link.href} className={cls}>{label}</a>;
}

export default function MegaFooter() {
  const { t } = useTranslation();
  const { categories, links } = t.footer;

  return (
    <footer className="cy-bg-sidebar cy-text-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold cy-text-sidebar-strong">CyfroSec</Link>
            <p className="mt-3 text-sm cy-text-sidebar-muted max-w-sm">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-sm cy-text-sidebar-muted max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Nav columns — 2×2 grid on mobile, 3 equal cols on desktop */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-3 lg:grid-cols-3">

            <div>
              <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">{categories.product}</h4>
              <ul className="space-y-2.5">
                {LANDING_FOOTER_LINKS.product.map((link, i) => (
                  <li key={link.href}>
                    <FooterLinkItem link={link} label={links.product[i] ?? link.label} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">{categories.solutions}</h4>
              <ul className="space-y-2.5">
                {LANDING_FOOTER_LINKS.solutions.map((link, i) => (
                  <li key={link.href}>
                    <FooterLinkItem link={link} label={links.solutions[i] ?? link.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources + Company share one cell on desktop */}
            <div className="col-span-2 grid grid-cols-2 gap-6 lg:col-span-1 lg:flex lg:flex-col lg:gap-8">
              <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">{categories.resources}</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.resources.map((link, i) => (
                    <li key={link.href}>
                      <FooterLinkItem link={link} label={links.resources[i] ?? link.label} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">{categories.company}</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.company.map((link, i) => (
                    <li key={link.href}>
                      <FooterLinkItem link={link} label={links.company[i] ?? link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="border-t cy-border-sidebar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-screen-xl 3xl:max-w-screen-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="cy-text-sidebar-muted text-xs text-center sm:text-start">
              &copy; {currentYear} CyfroSec. {t.footer.allRightsReserved}
            </p>
            <span className="cy-text-sidebar-muted text-xs">{t.footer.madeIn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
