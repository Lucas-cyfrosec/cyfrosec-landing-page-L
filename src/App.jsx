import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './layout/Navbar';
import AIChatbot from './components/AIChatbot';
import DocsPage from './pages/DocsPage';
import GetStartedPage from './pages/GetStartedPage';
import ContactSalesPage from './pages/ContactSalesPage';
import { Hero, Learning, ProblemStatement, SolutionOverview } from './sections';

// Lazy-load heavy below-fold sections so they don't block initial render
const PlatformArchitecture = lazy(() => import('./sections/PlatformArchitecture'));
const CyfroAIEngine = lazy(() => import('./sections/CyfroAIEngine'));
const Personas = lazy(() => import('./sections/Personas'));
const Outcomes = lazy(() => import('./sections/Outcomes'));
const Highlights = lazy(() => import('./sections/Highlights'));
const FeatureComparison = lazy(() => import('./sections/FeatureComparison'));
const Security = lazy(() => import('./sections/Security'));
const Pricing = lazy(() => import('./sections/Pricing'));
const FinalCTA = lazy(() => import('./sections/FinalCTA'));
const MegaFooter = lazy(() => import('./sections/MegaFooter'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const VulnerabilityManagementPage = lazy(() => import('./pages/VulnerabilityManagementPage'));
const AttackSurfaceManagementPage = lazy(() => import('./pages/AttackSurfaceManagementPage'));

const BASE = '/cyfrosec-landing-page-L';

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

function getInitialPage() {
  const pathname = normalizePath(window.location.pathname);

  if (pathname === `${BASE}/docs`) return 'docs';
  if (pathname === `${BASE}/get-started`) return 'get-started';
  if (pathname === `${BASE}/contact-sales`) return 'contact-sales';
  if (pathname === `${BASE}/platform`) return 'platform';
  if (pathname === `${BASE}/solutions/vulnerability-management`) return 'vulnerability-management';
  if (pathname === `${BASE}/solutions/attack-surface-management`) return 'attack-surface-management';
  return 'home';
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);
  const [chatbotReady, setChatbotReady] = useState(false);

  function navigate(target) {
    if (target === 'docs') {
      window.history.pushState({}, '', `${BASE}/docs`);
      window.scrollTo(0, 0);
    } else if (target === 'get-started') {
      window.history.pushState({}, '', `${BASE}/get-started`);
      window.scrollTo(0, 0);
    } else if (target === 'contact-sales') {
      window.history.pushState({}, '', `${BASE}/contact-sales`);
      window.scrollTo(0, 0);
    } else if (target === 'platform') {
      window.history.pushState({}, '', `${BASE}/platform`);
      window.scrollTo(0, 0);
    } else if (target === 'vulnerability-management') {
      window.history.pushState({}, '', `${BASE}/solutions/vulnerability-management`);
      window.scrollTo(0, 0);
    } else if (target === 'attack-surface-management') {
      window.history.pushState({}, '', `${BASE}/solutions/attack-surface-management`);
      window.scrollTo(0, 0);
    } else {
      window.history.pushState({}, '', `${BASE}/`);
      window.scrollTo(0, 0);
    }
    setPage(target);
  }

  useEffect(() => {
    function onPopState() {
      setPage(getInitialPage());
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const id = typeof requestIdleCallback !== 'undefined'
      ? requestIdleCallback(() => setChatbotReady(true), { timeout: 3000 })
      : setTimeout(() => setChatbotReady(true), 1000);
    return () => {
      if (typeof cancelIdleCallback !== 'undefined') cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  if (page === 'docs') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <DocsPage navigate={navigate} />
        {chatbotReady && <AIChatbot />}
      </>
    );
  }

  if (page === 'get-started') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <GetStartedPage navigate={navigate} />
      </>
    );
  }

  if (page === 'contact-sales') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <ContactSalesPage navigate={navigate} />
      </>
    );
  }

  if (page === 'platform') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <Suspense fallback={null}>
          <PlatformPage navigate={navigate} />
          <MegaFooter navigate={navigate} />
        </Suspense>
      </>
    );
  }

  if (page === 'vulnerability-management') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <Suspense fallback={null}>
          <VulnerabilityManagementPage navigate={navigate} />
          <MegaFooter navigate={navigate} />
        </Suspense>
      </>
    );
  }

  if (page === 'attack-surface-management') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <Suspense fallback={null}>
          <AttackSurfaceManagementPage navigate={navigate} />
          <MegaFooter navigate={navigate} />
        </Suspense>
      </>
    );
  }

  return (
    <>
      <Navbar navigate={navigate} />
      {/* Spacer matching navbar height */}
      <div
        className="cy-navbar-offset h-14 sm:h-16 lg:h-20"
        aria-hidden="true"
      ></div>
      <main>
        <Hero navigate={navigate} />
        <Learning />
        <ProblemStatement />
        <SolutionOverview />
        <Suspense fallback={null}>
          <PlatformArchitecture />
          <CyfroAIEngine />
          <Personas />
          <Outcomes />
          <Highlights />
          <FeatureComparison />
          <Security />
          <Pricing navigate={navigate} />
          <div className="min-h-screen flex flex-col">
            <FinalCTA navigate={navigate} />
            <MegaFooter navigate={navigate} />
          </div>
        </Suspense>
      </main>
      {chatbotReady && <AIChatbot />}
    </>
  );
}
