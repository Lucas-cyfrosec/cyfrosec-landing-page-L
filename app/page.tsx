import { PublicPageShell } from './components/landing/PublicPageShell';
import Hero from './components/landing/sections/Hero';
import ProblemStatement from './components/landing/sections/ProblemStatement';
import SolutionOverview from './components/landing/sections/SolutionOverview';
import PlatformArchitecture from './components/landing/sections/PlatformArchitecture';
import CyfroAIEngine from './components/landing/sections/CyfroAIEngine';
import Personas from './components/landing/sections/Personas';
import Outcomes from './components/landing/sections/Outcomes';
import Highlights from './components/landing/sections/Highlights';
import Security from './components/landing/sections/Security';
import PlatformArchitectureDetail from './components/landing/sections/PlatformArchitectureDetail';
import FinalCTA from './components/landing/sections/FinalCTA';
import LazyAIChatbot from './components/landing/LazyAIChatbot';

export default function LandingPage() {
  return (
    <PublicPageShell>
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <PlatformArchitecture />
      <CyfroAIEngine />
      <Personas />
      <Outcomes />
      <Highlights />
      <Security />
      <PlatformArchitectureDetail />
      <FinalCTA />
      <LazyAIChatbot />
    </PublicPageShell>
  );
}
