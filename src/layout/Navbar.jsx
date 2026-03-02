import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  {
    label: 'Product',
    href: '#',
    dropdown: [
      { label: 'Features', href: '#solutions', description: 'Discover, assess, prioritize, remediate' },
      { label: 'AI Engine', href: '#ai-engine', description: 'AI-powered detection & remediation' },
      { label: 'Architecture', href: '#architecture', description: 'Platform overview' },
      { label: 'API', href: '#', description: 'REST API & webhooks' }
    ]
  },
  {
    label: 'Platform',
    href: '#',
    dropdown: [
      { label: 'SaaS', href: 'https://app.cyfrosec.com', description: 'Cloud-hosted solution' },
      { label: 'On-Premises', href: '#pricing', description: 'Self-hosted deployment' },
      { label: 'Security', href: '#security', description: 'SOC 2, encryption, RBAC' },
      { label: 'Compliance', href: '#security', description: 'Meet regulatory requirements' }
    ]
  },
  {
    label: 'Solutions',
    href: '#',
    dropdown: [
      { label: 'Vulnerability Management', href: '#solutions', description: 'Find and fix exposures' },
      { label: 'Attack Surface Management', href: '#solutions', description: 'Complete visibility' },
      { label: 'Cloud & AI Server Security', href: '#solutions', description: 'Secure cloud & AI infrastructure' },
      { label: 'DevSecOps', href: '#solutions', description: 'Shift left security' }
    ]
  },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      { label: 'Documentation', href: '#', description: 'Guides and references' },
      { label: 'Blog', href: '#', description: 'Security insights' },
      { label: 'Case Studies', href: '#', description: 'Customer stories' },
      { label: 'Support', href: 'mailto:support@cyfrosec.com', description: 'Get help' }
    ]
  },
  { label: 'Pricing', href: '#pricing', dropdown: null },
  { label: 'About', href: '#', dropdown: null }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleDropdownToggle(label) {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }

  function closeDropdowns() {
    setActiveDropdown(null);
  }

  function handleNavClick(href) {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 cy-bg-sidebar shadow-lg border-b cy-border-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logo} alt="CyfroSec" className="h-8 sm:h-9 lg:h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 rounded-full px-2 py-1 bg-[var(--bg-sidebar-hover)]/60 backdrop-blur border border-[var(--border-sidebar)]/50">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium cy-text-sidebar hover:cy-text-sidebar-strong hover:bg-[var(--bg-sidebar-hover)] transition-all"
                      onClick={() => handleDropdownToggle(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl shadow-xl overflow-hidden animate-dropdown cy-bg-sidebar border cy-border-sidebar"
                        onMouseLeave={closeDropdowns}
                        role="menu"
                        tabIndex="-1"
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block p-3 rounded-lg hover:bg-[var(--bg-sidebar-hover)] transition-colors group"
                              onClick={() => handleNavClick(subItem.href)}
                              role="menuitem"
                            >
                              <div className="font-medium text-sm cy-text-sidebar-strong group-hover:text-primary-400 transition-colors">{subItem.label}</div>
                              <div className="text-xs cy-text-sidebar-muted mt-0.5">{subItem.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 rounded-full text-sm font-medium cy-text-sidebar hover:cy-text-sidebar-strong hover:bg-[var(--bg-sidebar-hover)] transition-all"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:sales@cyfrosec.com" className="text-sm font-medium cy-text-sidebar hover:cy-text-sidebar-strong transition-colors">
              Contact Sales
            </a>
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium text-primary-400 hover:text-primary-300 border border-primary-500/50 hover:border-primary-400 rounded-full transition-all"
              onClick={() => handleNavClick('#cta')}
            >
              Book a Demo
            </a>
            <a
              href="https://app.cyfrosec.com"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              Go to Portal
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg cy-text-sidebar hover:bg-[var(--bg-sidebar-hover)] transition-colors"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-700 animate-slideDown">
          <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-surface-700 dark:text-surface-300 font-medium rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-surface-200 dark:border-surface-700 pl-4">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-surface-600 dark:text-surface-400 hover:text-primary-500 transition-colors"
                            onClick={() => handleNavClick(subItem.href)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-surface-700 dark:text-surface-300 font-medium rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-700 space-y-3">
              <a
                href="mailto:sales@cyfrosec.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-surface-700 dark:text-surface-300 font-medium rounded-full hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </a>
              <a
                href="#cta"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-primary-600 dark:text-primary-400 font-medium border border-primary-500/50 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                onClick={() => { setMobileMenuOpen(false); handleNavClick('#cta'); }}
              >
                Book a Demo
              </a>
              <a
                href="https://app.cyfrosec.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Go to Portal <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
