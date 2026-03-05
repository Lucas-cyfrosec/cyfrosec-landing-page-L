import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Shield, Bot, Layers, Code2, Cloud, Lock, FileText, Newspaper, LifeBuoy, DollarSign, Info } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { DropdownNavigation } from '../components/ui/dorpdown-navigation';
import logo from '../assets/logo.png';

const navItems = [
  {
    id: 1,
    label: 'Product',
    link: '#',
    subMenus: [
      {
        title: 'Product',
        items: [
          { label: 'Features', href: '#solutions', description: 'Discover, assess, prioritize, remediate', icon: Shield },
          { label: 'AI Engine', href: '#ai-engine', description: 'AI-powered detection & remediation', icon: Bot },
          { label: 'Architecture', href: '#architecture', description: 'Platform overview', icon: Layers },
          { label: 'API', href: '#', description: 'REST API & webhooks', icon: Code2 }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Platform',
    link: '#',
    subMenus: [
      {
        title: 'Platform',
        items: [
          { label: 'SaaS', href: 'https://app.cyfrosec.com', description: 'Cloud-hosted solution', icon: Cloud },
          { label: 'On-Premises', href: '#pricing', description: 'Self-hosted deployment', icon: Layers },
          { label: 'Security', href: '#security', description: 'SOC 2, encryption, RBAC', icon: Lock },
          { label: 'Compliance', href: '#security', description: 'Meet regulatory requirements', icon: Shield }
        ]
      }
    ]
  },
  {
    id: 3,
    label: 'Solutions',
    link: '#',
    subMenus: [
      {
        title: 'Solutions',
        items: [
          { label: 'Vulnerability Management', href: '#solutions', description: 'Find and fix exposures', icon: Shield },
          { label: 'Attack Surface Management', href: '#solutions', description: 'Complete visibility', icon: Layers },
          { label: 'Cloud & AI Server Security', href: '#solutions', description: 'Secure cloud & AI infrastructure', icon: Cloud },
          { label: 'DevSecOps', href: '#solutions', description: 'Shift left security', icon: Bot }
        ]
      }
    ]
  },
  {
    id: 4,
    label: 'Resources',
    link: '#',
    subMenus: [
      {
        title: 'Resources',
        items: [
          { label: 'Documentation', href: '/cyfrosec-landing-page-L/docs', description: 'Guides and references', isNav: true, icon: FileText },
          { label: 'Blog', href: '#', description: 'Security insights', icon: Newspaper },
          { label: 'Case Studies', href: '#', description: 'Customer stories', icon: FileText },
          { label: 'Support', href: 'mailto:support@cyfrosec.com', description: 'Get help', icon: LifeBuoy }
        ]
      }
    ]
  },
  { id: 5, label: 'Pricing', link: '#pricing', icon: DollarSign },
  { id: 6, label: 'About', link: '#', icon: Info }
];

export default function Navbar({ navigate }) {
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

  function handleNavClick(href, isNav, event) {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (isNav && navigate) {
      event?.preventDefault();
      navigate('docs');
    } else if (href.startsWith('#')) {
      event?.preventDefault();
      const onDocsPage = window.location.pathname.includes('/docs');
      if (onDocsPage && navigate) {
        navigate('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 cy-bg-sidebar shadow-lg border-b cy-border-sidebar">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate?.('home'); }} className="flex items-center gap-2.5">
            <img src={logo} alt="CyfroSec" className="h-8 sm:h-9 lg:h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 rounded-full px-2 py-1 bg-[var(--bg-sidebar-hover)]/60 backdrop-blur border border-[var(--border-sidebar)]/50">
              <DropdownNavigation
                navItems={navItems}
                onNavigate={(href, isNav, event) => handleNavClick(href, isNav, event)}
              />
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="mailto:sales@cyfrosec.com" className="text-sm font-medium cy-text-sidebar hover:cy-text-sidebar-strong transition-colors">
              Contact Sales
            </a>
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium text-primary-400 hover:text-primary-300 border border-primary-500/50 hover:border-primary-400 rounded-full transition-all"
              onClick={(e) => handleNavClick('#cta', false, e)}
            >
              Sign In
            </a>
            <a
              href="/cyfrosec-landing-page-L/get-started"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
              onClick={(e) => { e.preventDefault(); navigate?.('get-started'); }}
            >
              Get Started
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
                item.subMenus ? (
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
                        {item.subMenus.flatMap((group) =>
                          group.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-surface-600 dark:text-surface-400 hover:text-primary-500 transition-colors"
                              onClick={(e) => handleNavClick(subItem.href, subItem.isNav, e)}
                            >
                              {subItem.label}
                            </a>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.link}
                    className="block px-4 py-3 text-surface-700 dark:text-surface-300 font-medium rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"
                    onClick={(e) => handleNavClick(item.link, item.isNav, e)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-700 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-sm text-surface-500 dark:text-surface-400">Theme</span>
                <ThemeToggle />
              </div>
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
                onClick={(e) => { setMobileMenuOpen(false); handleNavClick('#cta', false, e); }}
              >
                Sign In
              </a>
              <a
                href="/cyfrosec-landing-page-L/get-started"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors"
                onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate?.('get-started'); }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
