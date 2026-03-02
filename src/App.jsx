import Navbar from './layout/Navbar';
import {
  Hero,
  Learning,
  ProblemStatement,
  SolutionOverview,
  PlatformArchitecture,
  CyfroAIEngine,
  Personas,
  Outcomes,
  Highlights,
  HowItWorks,
  FeatureComparison,
  Security,
  Pricing,
  FAQ,
  FinalCTA,
  MegaFooter
} from './sections';

export default function App() {
  return (
    <>
      <Navbar />
      {/* Spacer matching navbar height */}
      <div className="h-14 sm:h-16 lg:h-20" aria-hidden="true"></div>
      <main>
        <Hero />
        <Learning />
        <ProblemStatement />
        <SolutionOverview />
        <PlatformArchitecture />
        <CyfroAIEngine />
        <Personas />
        <Outcomes />
        <Highlights />
        <HowItWorks />
        <FeatureComparison />
        <Security />
        <Pricing />
        <FAQ />
        <div className="min-h-screen flex flex-col">
          <FinalCTA />
          <MegaFooter />
        </div>
      </main>
    </>
  );
}
