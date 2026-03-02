import { useState } from 'react';
import { Send } from 'lucide-react';

const currentYear = new Date().getFullYear();

const footerLinks = {
  product: [
    { label: 'Features', href: '#capabilities' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' }
  ],
  solutions: [
    { label: 'Vulnerability Management', href: '#' },
    { label: 'Attack Surface Management', href: '#' },
    { label: 'Cloud Security', href: '#' },
    { label: 'Compliance', href: '#' },
    { label: 'DevSecOps', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Webinars', href: '#' }
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: 'mailto:contact@cyfrosec.com' },
    { label: 'Partners', href: '#' },
    { label: 'Press', href: '#' }
  ]
};

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Security', href: '#' },
  { label: 'GDPR', href: '#' }
];

const socials = [
  {
    label: 'Twitter',
    href: 'https://x.com/cyfrosec',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cyfrosec',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cyfrosec',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  }
];

export default function MegaFooter() {
  const [email, setEmail] = useState('');

  return (
    <footer className="cy-bg-sidebar cy-text-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="text-2xl font-bold cy-text-sidebar-strong">CyfroSec</a>
            <p className="mt-4 text-sm cy-text-sidebar-muted max-w-sm">
              Continuous visibility and risk-based prioritization across your attack surface. Find exposures faster. Fix what matters first.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-3">Stay updated</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cy-text-sidebar-strong"
                  style={{ backgroundColor: 'var(--bg-sidebar-hover)', border: '1px solid var(--border-sidebar)' }}
                />
                <button type="submit" className="px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="flex gap-3 mt-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors"
                  style={{ backgroundColor: 'var(--bg-sidebar-hover)' }}
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold cy-text-sidebar-strong uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t cy-border-sidebar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-screen-xl 3xl:max-w-screen-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="cy-text-sidebar-muted text-xs sm:text-sm">&copy; {currentYear} CyfroSec. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors">{link.label}</a>
              ))}
            </div>
            <a href="https://status.cyfrosec.com" className="flex items-center gap-1.5 cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              System Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
