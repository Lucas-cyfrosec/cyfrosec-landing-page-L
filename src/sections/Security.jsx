import { Shield, Lock, Key, FileText, Globe, Users } from 'lucide-react';

const securityFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256). Zero-knowledge architecture for sensitive scan results.' },
  { icon: Key, title: 'SSO & MFA', description: 'SAML 2.0, OIDC, and direct integration with Okta, Azure AD, and Google Workspace. Hardware key support via WebAuthn.' },
  { icon: Users, title: 'Role-Based Access Control', description: 'Granular permissions per team, asset group, or organization. Audit logs for every action with full traceability.' },
  { icon: FileText, title: 'SOC 2 Type II Certified', description: 'Independently audited security controls. Annual penetration testing by third-party firms. Continuous compliance monitoring.' },
  { icon: Globe, title: 'Data Residency Options', description: 'Choose where your data lives. EU, US, and APAC regions available. On-premises deployment for full control.' },
  { icon: Shield, title: 'Vulnerability Disclosure', description: 'Responsible disclosure program with bug bounty. Security advisories published within 24 hours of patch availability.' }
];

const certifications = [
  { label: 'SOC 2 Type II', sub: 'Certified' },
  { label: 'ISO 27001', sub: 'Compliant' },
  { label: 'GDPR', sub: 'Ready' }
];

export default function Security() {
  return (
    <section id="security" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Shield className="w-4 h-4" />
            Enterprise-Grade Security
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Security & <span className="text-primary-500">Compliance</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Built with security-first principles. Your data is protected by the same standards we help you enforce.
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

        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {certifications.map((cert) => (
            <div key={cert.label} className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700">
              <div className="w-12 h-12 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-center">
                <span className="text-sm font-bold text-surface-600 dark:text-surface-400">{cert.label.split(' ')[0]}</span>
              </div>
              <div>
                <div className="font-semibold text-surface-900 dark:text-surface-50">{cert.label}</div>
                <div className="text-xs text-surface-500">{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
