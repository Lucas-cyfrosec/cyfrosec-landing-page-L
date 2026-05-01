import { Shield, Key, FileText, Globe, Users, Database } from 'lucide-react';
import type { ComponentType } from 'react';

interface SecurityFeature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  { icon: Shield, title: 'GDPR Compliance Tool', description: 'Ensure that your infrastructure and its configurations are protected as per GDPR guidelines.' },
  { icon: Globe, title: 'Data Residency', description: 'Choose where your data lives between EU data protection compliant servers and On premise deployments.' },
  { icon: Users, title: 'Role-Based Access Control', description: 'Granular permissions and control according to user roles so that you know who has access to what.' },
  { icon: FileText, title: 'Audit', description: 'User actions can be tracked to ensure strict guidelines and compliance within the organization.' },
  { icon: Key, title: 'Flexibility for On Prem Deployment', description: 'CyfroSec can be easily setup in your On Prem environment so that you have maximum control over the secure deployment.' },
  { icon: Database, title: 'Reputable Data Sources', description: 'The results from CyfroSec solutions have been referenced from reputable databases like NIST and other security data sources.' }
];


export default function Security() {
  return (
    <section id="security" className="py-12 sm:py-16 lg:py-24 3xl:py-32 min-h-screen flex flex-col justify-center bg-white dark:bg-surface-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Security &amp; <span className="text-primary-500">Compliance</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Built with security-first principles to protect your infrastructure and keep it updated.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl 3xl:max-w-6xl mx-auto">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-4 sm:p-6 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-surface-900 dark:text-surface-50">{feature.title}</h3>
                </div>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
