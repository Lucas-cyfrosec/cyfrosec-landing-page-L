'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { motion, Transition } from 'framer-motion';

type FREQUENCY = 'monthly' | 'yearly';
const frequencies: FREQUENCY[] = ['monthly', 'yearly'];

interface Plan {
	name: string;
	info: string;
	price: {
		monthly: number;
		yearly: number;
	};
	features: {
		text: string;
		tooltip?: string;
	}[];
	btn: {
		text: string;
		href: string;
	};
	highlighted?: boolean;
}

interface PricingSectionProps extends React.ComponentProps<'div'> {
	plans: Plan[];
	heading: string;
	description?: string;
}

export function PricingSection({
	plans,
	heading,
	description,
	...props
}: PricingSectionProps) {
	const [frequency] = React.useState<'monthly' | 'yearly'>('monthly');

	return (
		<div
			className={cn(
				'flex w-full flex-col items-center justify-center gap-10 px-4 py-12',
				props.className,
			)}
			{...props}
		>
			{/* Heading */}
			<div className="mx-auto max-w-2xl space-y-3 text-center">
				<h2
					className="cy-text-primary text-3xl font-bold tracking-tight md:text-4xl"
					style={{ fontFamily: '"Sora", "Avenir Next", "Segoe UI", sans-serif' }}
				>
					{heading}
				</h2>
				{description && (
					<p className="cy-text-secondary text-base leading-relaxed">
						{description}
					</p>
				)}
			</div>

			{/* Cards */}
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
				{plans.map((plan) => (
					<PricingCard plan={plan} key={plan.name} frequency={frequency} />
				))}
			</div>
		</div>
	);
}

type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
	frequency: FREQUENCY;
	setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
};

export function PricingFrequencyToggle({
	frequency,
	setFrequency,
	...props
}: PricingFrequencyToggleProps) {
	return (
		<div
			className={cn(
				'bg-muted/30 mx-auto flex w-fit rounded-full border p-1',
				props.className,
			)}
			{...props}
		>
			{frequencies.map((freq) => (
				<button
					key={freq}
					onClick={() => setFrequency(freq)}
					className="relative px-4 py-1 text-sm capitalize"
				>
					<span className="relative z-10">{freq}</span>
					{frequency === freq && (
						<motion.span
							layoutId="frequency"
							transition={{ type: 'spring', duration: 0.4 }}
							className="bg-foreground absolute inset-0 z-10 rounded-full mix-blend-difference"
						/>
					)}
				</button>
			))}
		</div>
	);
}

type PricingCardProps = React.ComponentProps<'div'> & {
	plan: Plan;
	frequency?: FREQUENCY;
};

export function PricingCard({
	plan,
	className,
	frequency = frequencies[0],
	...props
}: PricingCardProps) {
	return (
		<div
			key={plan.name}
			className={cn(
				'relative flex w-full flex-col rounded-2xl transition-all duration-300',
				plan.highlighted
					? 'border border-[rgba(3,155,224,0.45)] shadow-[0_0_0_1px_rgba(3,155,224,0.15),0_8px_40px_rgba(3,155,224,0.14)]'
					: 'border cy-border-default shadow-md hover:shadow-xl hover:border-[rgba(3,155,224,0.2)]',
				className,
			)}
			style={{ background: 'var(--bg-elevated)' }}
			{...props}
		>
			{/* Animated border trail for highlighted plan */}
			{plan.highlighted && (
				<BorderTrail
					style={{
						boxShadow:
							'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
					}}
					size={100}
				/>
			)}

			{/* Card Header */}
			<div
				className="relative rounded-t-2xl border-b cy-border-default p-6 min-h-[175px]"
				style={
					plan.highlighted
						? { background: 'linear-gradient(135deg, rgba(3,155,224,0.1) 0%, rgba(99,102,241,0.06) 100%)' }
						: { background: 'var(--bg-muted)' }
				}
			>
				{/* Popular badge */}
				{plan.highlighted && (
					<div className="absolute top-4 right-4 z-10">
						<span
							className="cy-text-brand inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
							style={{
								background: 'rgba(3,155,224,0.12)',
								border: '1px solid rgba(3,155,224,0.3)',
							}}
						>
							<StarIcon className="h-3 w-3 fill-current" />
							Popular
						</span>
					</div>
				)}

				{/* Yearly discount badge */}
				{frequency === 'yearly' && plan.price.monthly > 0 && (
					<div className="absolute top-4 right-4 z-10">
						<span className="bg-primary text-primary-foreground inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium">
							{Math.round(
								((plan.price.monthly * 12 - plan.price.yearly) /
									plan.price.monthly /
									12) *
									100,
							)}% off
						</span>
					</div>
				)}

				<div
					className="cy-text-primary text-xl font-bold"
					style={{ fontFamily: '"Sora", "Avenir Next", "Segoe UI", sans-serif' }}
				>
					{plan.name}
				</div>
				<p className="cy-text-secondary mt-1.5 text-sm leading-relaxed pr-16">
					{plan.info}
				</p>
			</div>

			{/* Features */}
			<div className="flex-1 space-y-3.5 px-6 py-6">
				{plan.features.map((feature, index) => (
					<div key={index} className="flex items-start gap-3">
						<CheckCircleIcon
							className="h-4 w-4 shrink-0 mt-0.5"
							style={{ color: 'var(--brand-primary)' }}
						/>
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger asChild>
									<p
										className={cn(
											'cy-text-secondary text-sm leading-snug',
											feature.tooltip && 'cursor-pointer',
										)}
									>
										{feature.text}
									</p>
								</TooltipTrigger>
								{feature.tooltip && (
									<TooltipContent>
										<p>{feature.tooltip}</p>
									</TooltipContent>
								)}
							</Tooltip>
						</TooltipProvider>
					</div>
				))}
			</div>

			{/* CTA */}
			<div className="mt-auto border-t cy-border-default p-5">
				<Button
					className={cn(
						'w-full rounded-xl py-5 text-sm font-semibold transition-all duration-200',
						plan.highlighted &&
							'shadow-[0_4px_16px_rgba(3,155,224,0.3)] hover:shadow-[0_6px_24px_rgba(3,155,224,0.5)]',
					)}
					variant={plan.highlighted ? 'default' : 'outline'}
					asChild
				>
					<Link href={plan.btn.href}>{plan.btn.text}</Link>
				</Button>
			</div>
		</div>
	);
}


type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
