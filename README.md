# CyfroSec Landing Page

Marketing site and product overview for CyfroSec, built with React and Vite.

This repository currently ships a multi-page landing experience under the `'/cyfrosec-landing-page-L'` base path with:

- a homepage for product messaging and conversion
- a platform overview page
- a documentation landing page
- a guided get-started / onboarding flow

## Current Experience

### Homepage

The homepage is composed in [src/App.jsx](./src/App.jsx) and currently renders these sections in order:

1. `Hero`
2. `Learning`
3. `ProblemStatement`
4. `SolutionOverview`
5. `PlatformArchitecture`
6. `CyfroAIEngine`
7. `Personas`
8. `Outcomes`
9. `Highlights`
10. `FeatureComparison`
11. `Security`
12. `Pricing`
13. `FAQ`
14. `FinalCTA`
15. `MegaFooter`

An `AIChatbot` widget is available on the homepage.

### Additional Pages

- `'/cyfrosec-landing-page-L/platform'`
  Platform overview page with product positioning, architecture flow, capabilities, deployment options, trust/compliance content, and CTA.
- `'/cyfrosec-landing-page-L/docs'`
  Documentation landing page with quick-start paths, category cards, and popular article previews.
- `'/cyfrosec-landing-page-L/get-started'`
  Multi-step onboarding form for creating a CyfroSec organization.

## Tech Stack

- React 18
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing Notes

This app does not use React Router. Page navigation is handled manually in [src/App.jsx](./src/App.jsx) with:

- `window.history.pushState`
- `popstate` listeners
- a shared `navigate()` helper passed into `Navbar`, `PlatformPage`, `GetStartedPage`, and `MegaFooter`

Hash links in the navbar are also handled manually so section links still work when the user is on `/docs`, `/platform`, or `/get-started`.

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  theme-cyfrosec.css
  assets/
  components/
  hooks/
  layout/
    Navbar.jsx
  pages/
    DocsPage.jsx
    GetStartedPage.jsx
    PlatformPage.jsx
  sections/
    Hero.jsx
    Learning.jsx
    ProblemStatement.jsx
    SolutionOverview.jsx
    PlatformArchitecture.jsx
    CyfroAIEngine.jsx
    Personas.jsx
    Outcomes.jsx
    Highlights.jsx
    FeatureComparison.jsx
    Security.jsx
    Pricing.jsx
    FAQ.jsx
    FinalCTA.jsx
    MegaFooter.jsx
```

## Important Files

- `src/App.jsx`
  Top-level page selection, lazy loading, and route handling.
- `src/layout/Navbar.jsx`
  Desktop/mobile navigation, dropdown menus, theme toggle, CTA links, and cross-page hash scrolling.
- `src/pages/PlatformPage.jsx`
  Platform overview page content and layout.
- `src/pages/DocsPage.jsx`
  Documentation landing page.
- `src/pages/GetStartedPage.jsx`
  Guided onboarding flow.
- `src/sections/MegaFooter.jsx`
  Footer links, newsletter UI, social links, legal links, and documentation navigation wiring.
- `src/components/AIChatbot.jsx`
  Floating chatbot used on the homepage and docs page.
- `src/theme-cyfrosec.css`
  Brand tokens and theme-level styling.
- `src/index.css`
  Global CSS entry point.

## Notes For Future Edits

- The app assumes the base path is `'/cyfrosec-landing-page-L'`. If deployment changes, update the base-path logic in navigation and route checks.
- Below-the-fold homepage sections are lazy-loaded to reduce initial render cost.
- `MegaFooter` is used on the homepage and platform page. The documentation link is currently wired into the app navigation flow.
- Many navigation items are still placeholder links (`'#'`) and can be replaced as the remaining pages are implemented.
