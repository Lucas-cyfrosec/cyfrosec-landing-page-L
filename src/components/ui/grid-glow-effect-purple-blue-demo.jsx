import { Cpu, Code2, ShieldCheck, Zap } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/grid-glow-effect-purple-blue';
import { cn } from '@/lib/utils';

export default function GlowingEffectDemo() {
  return (
    <div className="p-6 bg-black min-h-screen flex items-center justify-center">
      <ul
        className={cn(
          'grid gap-0 w-full max-w-6xl h-[38rem]',
          'grid-cols-[1fr_1fr_0.1fr_1fr_1fr]',
          'grid-rows-[1fr_1fr_0.1fr_1fr_1fr]'
        )}
      >
        <GridItem
          area="col-[4/6] row-[1/3]"
          icon={<Cpu className="h-4 w-4" />}
          title="Build the Right Way"
          description="Modern and efficient tools for developers who aim for excellence."
        />
        <GridItem
          area="col-[1/3] row-[1/3]"
          icon={<Code2 className="h-4 w-4" />}
          title="The Best AI Code Editor"
          description="Boost your productivity with integrated AI and advanced features."
        />
        <GridItem
          area="col-[1/3] row-[4/6]"
          icon={<ShieldCheck className="h-4 w-4" />}
          title="Security and Performance"
          description="Enterprise-grade protection with the speed required for critical projects."
        />
        <GridItem
          area="col-[4/6] row-[4/6]"
          icon={<Zap className="h-4 w-4" />}
          title="Lightning-fast Experiences"
          description="Create interfaces that captivate users with smooth animations."
        />
        <li className="col-[3/4] row-[3/4] flex items-center justify-center">
          <div className="relative w-8 h-8 rounded-full bg-white/80 dark:bg-black border border-slate-200/70 dark:border-slate-700/40 shadow-lg shadow-blue-500/30 dark:shadow-blue-900/50">
            <GlowingEffect
              spread={45}
              glow
              disabled={false}
              proximity={70}
              inactiveZone={0.05}
              borderWidth={2}
              variant="blue-purple"
              blur={1}
              movementDuration={2}
            />
            <div className="absolute inset-1 rounded-full bg-black/80 dark:bg-black" />
          </div>
        </li>
      </ul>
    </div>
  );
}

function GridItem({ area, icon, title, description }) {
  return (
    <li className={cn('list-none min-h-[12rem]', area)}>
      <div className="relative h-full rounded-[1.25rem] border border-slate-200/60 dark:border-slate-700/40 p-3 md:rounded-[1.5rem] md:p-4 bg-white/50 dark:bg-black backdrop-blur-sm shadow-lg">
        <GlowingEffect
          spread={45}
          glow
          disabled={false}
          proximity={70}
          inactiveZone={0.05}
          borderWidth={2}
          variant="blue-purple"
          blur={1}
          movementDuration={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-slate-100/70 dark:border-slate-700/30 bg-white/80 dark:bg-black backdrop-blur-sm p-7 md:p-7 shadow-sm dark:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-slate-200/50 dark:border-slate-600/40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-2.5 shadow-sm">
              <div className="text-blue-600 dark:text-blue-400">{icon}</div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

