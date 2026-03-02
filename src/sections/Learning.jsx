import { Play, Shield, Users, Globe } from 'lucide-react';
import ShaderBackground from '../components/ShaderBackground';

export default function Learning() {
  return (
    <section id="learning" className="py-12 sm:py-16 lg:py-24 3xl:py-32 relative overflow-hidden cy-bg-overlay min-h-screen flex flex-col justify-center">
      <ShaderBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-white mb-3 sm:mb-4">
            Learn about <span className="text-primary-400">CyfroSec</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-300 max-w-2xl mx-auto">
            Hear directly from our CEO about what we do, who we are, and why we're building a better approach to vulnerability management.
          </p>
        </div>

        <div className="max-w-4xl 3xl:max-w-5xl mx-auto">
          {/* Video Embed Container */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-500/10 aspect-video backdrop-blur-sm bg-surface-900/40">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary-500/20 flex items-center justify-center mb-3 sm:mb-4 border border-primary-500/30 backdrop-blur-sm hover:bg-primary-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <Play className="w-7 h-7 sm:w-10 sm:h-10 text-primary-400 ml-0.5 sm:ml-1" />
              </div>
              <p className="text-base sm:text-lg font-medium text-surface-200">Video coming soon</p>
              <p className="text-xs sm:text-sm text-surface-400 mt-1">CEO Mustafa Sakhai on the CyfroSec mission</p>
            </div>
          </div>

          {/* Key Points Below Video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400 mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-1">Our Mission</h3>
              <p className="text-sm text-surface-400">Making enterprise-grade vulnerability management accessible to every team.</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400 mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-1">Who We Are</h3>
              <p className="text-sm text-surface-400">A team of security engineers and AI researchers building tools that actually help.</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/20 text-primary-400 mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-1">Our Approach</h3>
              <p className="text-sm text-surface-400">AI-first vulnerability assessment designed for network engineers, not just security experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
