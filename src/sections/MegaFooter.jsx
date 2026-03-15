
const currentYear = new Date().getFullYear();
const BASE = '/cyfrosec-landing-page-L';

const footerLinks = {
  product: [
    { label: 'Features', href: '#capabilities' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' }
  ],
  solutions: [
    { label: 'Vulnerability Management', href: `${BASE}/solutions/vulnerability-management`, isNav: true },
    { label: 'Attack Surface Management', href: `${BASE}/solutions/attack-surface-management`, isNav: true },
    { label: 'Cloud Security', href: '#' },
    { label: 'Compliance', href: '#' },
    { label: 'DevSecOps', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: `${BASE}/docs`, isNav: true },
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


function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

export default function MegaFooter({ navigate }) {

  function handleLinkClick(link, event) {
    if (!link.isNav || !navigate) return;

    event.preventDefault();
    const normalizedHref = normalizePath(link.href);
    if (normalizedHref === `${BASE}/docs`) {
      navigate('docs');
    } else if (normalizedHref === `${BASE}/solutions/vulnerability-management`) {
      navigate('vulnerability-management');
    } else if (normalizedHref === `${BASE}/solutions/attack-surface-management`) {
      navigate('attack-surface-management');
    }
  }

  return (
    <footer className="cy-bg-sidebar cy-text-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="text-2xl font-bold cy-text-sidebar-strong">CyfroSec</a>
            <p className="mt-4 text-sm cy-text-sidebar-muted max-w-sm">
              Continuous visibility and risk-based prioritization across your attack surface. Find exposures faster. Fix what matters first.
            </p>

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
                  <a
                    href={link.href}
                    className="text-sm cy-text-sidebar-muted hover:cy-text-sidebar-strong transition-colors"
                    onClick={(event) => handleLinkClick(link, event)}
                  >
                    {link.label}
                  </a>
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
