import { useState, useCallback } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Shield, Bot, Layers, ShieldCheck, Cloud, Lock, FileText, Newspaper, LifeBuoy, DollarSign, Info } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
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
          { label: 'Compliance & Security', href: '#security', description: 'SOC 2, GDPR, ISO 27001 ready', icon: ShieldCheck }
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
          { label: 'Overview', href: '/cyfrosec-landing-page-L/platform', description: 'Platform overview and architecture', isNav: true, icon: Info },
          { label: 'SaaS', href: 'https://app.cyfrosec.com', description: 'Cloud-hosted solution', icon: Cloud },
          { label: 'On-Premises', href: '#pricing', description: 'Self-hosted deployment', icon: Layers },
          { label: 'Security', href: '#security', description: 'SOC 2, encryption, RBAC', icon: Lock }
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
          { label: 'Vulnerability Management', href: '/cyfrosec-landing-page-L/solutions/vulnerability-management', description: 'Find and fix exposures', isNav: true, icon: Shield },
          { label: 'Attack Surface Management', href: '/cyfrosec-landing-page-L/solutions/attack-surface-management', description: 'Complete visibility', isNav: true, icon: Layers },
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

const BASE = '/cyfrosec-landing-page-L';

// Prefetch map: hover over a nav link triggers the lazy chunk load before the click
const PREFETCH_MAP = {
  [`${BASE}/platform`]: () => import('../pages/PlatformPage'),
  [`${BASE}/solutions/vulnerability-management`]: () => import('../pages/VulnerabilityManagementPage'),
  [`${BASE}/solutions/attack-surface-management`]: () => import('../pages/AttackSurfaceManagementPage'),
};

function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

function scrollToHash(selector, attempts = 20) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (attempts > 0) {
    setTimeout(() => scrollToHash(selector, attempts - 1), 120);
  }
}

export default function Navbar({ navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  function handleDropdownToggle(label) {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }

  const handlePrefetch = useCallback(function handlePrefetch(href) {
    const prefetch = PREFETCH_MAP[normalizePath(href)];
    if (prefetch) prefetch();
  }, []);

  const handleNavClick = useCallback(function handleNavClick(href, isNav, event) {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (isNav && navigate) {
      event?.preventDefault();
      const normalizedHref = normalizePath(href);

      if (normalizedHref === `${BASE}/docs`) {
        navigate('docs');
      } else if (normalizedHref === `${BASE}/get-started`) {
        navigate('get-started');
      } else if (normalizedHref === `${BASE}/platform`) {
        navigate('platform');
      } else if (normalizedHref === `${BASE}/solutions/vulnerability-management`) {
        navigate('vulnerability-management');
      } else if (normalizedHref === `${BASE}/solutions/attack-surface-management`) {
        navigate('attack-surface-management');
      } else {
        navigate('home');
      }
    } else if (href.startsWith('#')) {
      event?.preventDefault();
      const currentPath = normalizePath(window.location.pathname);
      const onHomePage = currentPath === BASE || currentPath === '/';

      if (!onHomePage && navigate) {
        navigate('home');
        setTimeout(() => scrollToHash(href), 120);
      } else {
        scrollToHash(href);
      }
    }
  }, [navigate]);

  return (
    <motion.header
      className="cy-navbar-root fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={shouldReduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`transition-all duration-300 ${isScrolled ? 'px-4 pt-3' : ''}`}>
        <motion.div
          className={`cy-navbar-shell relative flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'cy-navbar-shell-scrolled h-14 max-w-7xl mx-auto px-4 lg:px-6 rounded-2xl bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] backdrop-blur-xl border cy-border shadow-lg shadow-black/10'
              : 'h-16 w-full px-6 lg:px-12 bg-[var(--bg-canvas)] border-b border-[color-mix(in_srgb,var(--border-default)_25%,transparent)]'
          }`}
        >
          {/* Glow effect when scrolled */}
          {isScrolled && (
            <div className="absolute inset-x-0 -bottom-px mx-auto h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent pointer-events-none" />
          )}

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate?.('home'); }}
          className="flex items-center gap-2.5 shrink-0 z-10"
        >
          <img src={logo} alt="CyfroSec" className="h-8 sm:h-9 lg:h-10 w-auto" />
        </a>

        {/* Desktop nav - centered */}
        <div className="cy-navbar-nav hidden lg:flex flex-1 justify-center">
          <DropdownNavigation
            navItems={navItems}
            onNavigate={handleNavClick}
            onPrefetch={handlePrefetch}
          />
        </div>

        {/* Desktop CTAs */}
        <div className="cy-navbar-actions hidden lg:flex items-center gap-3 z-10">
          <ThemeToggle />
          <button onClick={() => navigate?.('contact-sales')} className="cy-navbar-muted cy-navbar-ghost text-[13px] font-semibold cy-text-secondary hover:cy-text-primary transition-colors px-2">
            Contact Sales
          </button>
          <div className="cy-navbar-divider h-4 w-px bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] mx-1" />
          <a
            href="#cta"
            className="cy-navbar-strong cy-navbar-ghost text-[13px] font-semibold cy-text-primary hover:text-primary-500 transition-colors px-2"
            onClick={(e) => handleNavClick('#cta', false, e)}
          >
            Sign In
          </a>
          <a
            href="/cyfrosec-landing-page-L/get-started"
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-[13px] font-semibold rounded-full transition-all shadow-[0_4px_14px_rgba(3,155,224,0.3)] hover:shadow-[0_6px_20px_rgba(3,155,224,0.4)] flex items-center gap-1.5"
            onClick={(e) => { e.preventDefault(); navigate?.('get-started'); }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="cy-navbar-mobile-toggle flex items-center gap-3 lg:hidden z-10">
          <ThemeToggle />
          <button
            className="cy-navbar-ghost rounded-full p-2 cy-text-secondary transition-all hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border cy-border cy-bg-elevated shadow-2xl lg:hidden backdrop-blur-xl z-50"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-1 px-4 py-5 max-h-[85vh] overflow-y-auto">
              {navItems.map((item) => (
                item.subMenus ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium cy-text-primary transition-colors hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 cy-border pl-4">
                        {item.subMenus.flatMap((group) =>
                          group.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-sm cy-text-secondary hover:cy-text-primary transition-colors"
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
                    className="rounded-xl px-3 py-3 text-sm font-medium cy-text-primary transition-colors hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
                    onClick={(e) => handleNavClick(item.link, item.isNav, e)}
                  >
                    {item.label}
                  </a>
                )
              ))}

              <div className="my-3 border-t cy-border mx-2" />

              <div className="flex flex-col gap-3 px-2">
                <a
                  href="/cyfrosec-landing-page-L/get-started"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate?.('get-started'); }}
                >
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 cy-text-primary font-medium rounded-xl hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] transition-colors"
                  onClick={() => { setMobileMenuOpen(false); navigate?.('contact-sales'); }}
                >
                  Contact Sales
                </button>
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t cy-border" />
                  <span className="shrink-0 px-3 text-[10px] uppercase tracking-wider cy-text-muted">or</span>
                  <div className="flex-grow border-t cy-border" />
                </div>
                <a
                  href="#cta"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 cy-text-secondary font-medium rounded-xl hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] transition-colors"
                  onClick={(e) => { setMobileMenuOpen(false); handleNavClick('#cta', false, e); }}
                >
                  Sign In
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  );
}
