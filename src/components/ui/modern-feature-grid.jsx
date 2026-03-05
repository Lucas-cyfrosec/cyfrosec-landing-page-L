import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FeatureCard = React.forwardRef(({ Icon, title, description, className }, ref) => {
  const titleId = React.useId();
  return (
    <div
      ref={ref}
        className={cn(
          'flex flex-col items-start gap-4 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary-300 dark:hover:border-primary-600',
          className
        )}
        aria-labelledby={titleId}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary-200 dark:border-primary-800/50 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <h3 id={titleId} className="text-lg font-bold leading-none tracking-tight text-surface-900 dark:text-surface-50">
            {title}
          </h3>
          <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">{description}</p>
        </div>
      </div>
    );
});

FeatureCard.displayName = 'FeatureCard';
FeatureCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const FeatureGrid = React.forwardRef(
  ({ sectionTitle, sectionDescription, features = [], className, ...props }, ref) => {
    const titleId = React.useId();

    return (
      <section ref={ref} className={cn('w-full py-12', className)} aria-labelledby={titleId} {...props}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id={titleId} className="text-3xl font-bold tracking-tighter text-surface-900 dark:text-surface-50 sm:text-4xl md:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-surface-600 dark:text-surface-400 md:text-xl">{sectionDescription}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

FeatureGrid.displayName = 'FeatureGrid';
FeatureGrid.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
