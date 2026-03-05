import { ArrowRight } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const BentoGrid = ({ children, className }) => (
  <div className={cn('grid w-full auto-rows-[20rem] grid-cols-3 gap-4', className)}>
    {children}
  </div>
);

export const BentoCard = ({ name, className, background, Icon, description, href, cta }) => (
  <div
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl',
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.06),0_12px_24px_rgba(0,0,0,.06)]',
      'dark:bg-[#0c1724] dark:[border:1px_solid_#24374a] dark:[box-shadow:0_-20px_80px_-20px_rgba(3,155,224,0.07)_inset]',
      className,
    )}
  >
    <div className="absolute inset-0">{background}</div>
    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-10 w-10 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="mt-2 text-xl font-semibold text-surface-900 dark:text-surface-50">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-surface-900 dark:text-surface-50 hover:text-primary-500 transition-colors"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02] group-hover:dark:bg-primary-500/[.03]" />
  </div>
);
