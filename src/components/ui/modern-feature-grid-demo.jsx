import React from 'react';
import { FeatureGrid } from '@/components/ui/modern-feature-grid';

const ZapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const PaletteIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

const featureData = [
  {
    Icon: ZapIcon,
    title: 'Blazing Fast Performance',
    description: 'Optimized for speed, our components deliver a seamless user experience without compromising on features.'
  },
  {
    Icon: CodeIcon,
    title: 'Developer-Friendly',
    description: 'Clean, reusable code that follows best practices, making integration and customization a breeze.'
  },
  {
    Icon: PaletteIcon,
    title: 'Easily Themeable',
    description: "Built with CSS variables, allowing you to easily adapt the look and feel to match your brand's design system."
  }
];

export default function DemoOne() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  React.useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 md:p-8 font-sans antialiased overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <FeatureGrid
        sectionTitle="Everything You Need to Build Great UIs"
        sectionDescription="Our components are designed to be composable, accessible, and beautiful right out of the box."
        features={featureData}
      />
    </div>
  );
}

