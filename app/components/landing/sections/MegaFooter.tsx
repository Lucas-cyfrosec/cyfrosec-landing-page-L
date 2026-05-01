'use client';

import Link from 'next/link';
import { LANDING_FOOTER_LINKS, type FooterLink } from '../navigation';

const currentYear = new Date().getFullYear();

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.isNav) {
    return (
      <Link href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">
      {link.label}
    </a>
  );
}

export default function MegaFooter() {

  return (
    <footer className="cy-bg-sidebar cy-text-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold cy-text-sidebar-strong">CyfroSec</Link>
            <p className="mt-3 text-sm cy-text-sidebar-muted max-w-sm">
              See your network the way attackers do.
            </p>
            <p className="mt-2 text-sm cy-text-sidebar-muted max-w-sm">
              Continuous network discovery, service fingerprinting, compliance and AI driven remediation guidance which could be understood from executives to cybersecurity engineers.
            </p>
          </div>

          {/* Nav columns — 2×2 grid on mobile, 3 equal cols on desktop */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-3 lg:grid-cols-3">

            <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">Product</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.product.map((link) => (
                    <li key={link.label}><FooterLinkItem link={link} /></li>
                  ))}
                </ul>
            </div>

            <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">Solutions</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.solutions.map((link) => (
                    <li key={link.label}><FooterLinkItem link={link} /></li>
                  ))}
                </ul>
            </div>

            {/* Resources + Company share one cell on desktop; on mobile they each get their own column cell */}
            <div className="col-span-2 grid grid-cols-2 gap-6 lg:col-span-1 lg:flex lg:flex-col lg:gap-8">
              <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">Resources</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.resources.map((link) => (
                    <li key={link.label}><FooterLinkItem link={link} /></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">Company</h4>
                <ul className="space-y-2.5">
                  {LANDING_FOOTER_LINKS.company.map((link) => (
                    <li key={link.label}><FooterLinkItem link={link} /></li>
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
            <p className="cy-text-sidebar-muted text-xs text-center sm:text-left">&copy; {currentYear} CyfroSec. All rights reserved.</p>
            <span className="cy-text-sidebar-muted text-xs">Made in the EU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
