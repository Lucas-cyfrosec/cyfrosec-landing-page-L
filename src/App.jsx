import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './layout/Navbar';
import AIChatbot from './components/AIChatbot';
import DocsPage from './pages/DocsPage';
import GetStartedPage from './pages/GetStartedPage';
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
const FAQ = lazy(() => import('./sections/FAQ'));
const FinalCTA = lazy(() => import('./sections/FinalCTA'));
const MegaFooter = lazy(() => import('./sections/MegaFooter'));

const BASE = '/cyfrosec-landing-page-L';

function getInitialPage() {
  if (window.location.pathname === `${BASE}/docs`) return 'docs';
  if (window.location.pathname === `${BASE}/get-started`) return 'get-started';
  return 'home';
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);

  function navigate(target) {
    if (target === 'docs') {
      window.history.pushState({}, '', `${BASE}/docs`);
      window.scrollTo(0, 0);
    } else if (target === 'get-started') {
      window.history.pushState({}, '', `${BASE}/get-started`);
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

  if (page === 'docs') {
    return (
      <>
        <Navbar navigate={navigate} />
        <div className="cy-navbar-offset h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
        <DocsPage navigate={navigate} />
        <AIChatbot />
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

  return (
    <>
      <Navbar navigate={navigate} />
      {/* Spacer matching navbar height */}
      <div
        className="cy-navbar-offset h-14 sm:h-16 lg:h-20"
        aria-hidden="true"
      ></div>
      <main>
        <Hero />
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
          <Pricing />
          <FAQ />
          <div className="min-h-screen flex flex-col">
            <FinalCTA />
            <MegaFooter />
          </div>
        </Suspense>
      </main>
      <AIChatbot />
    </>
  );
}
