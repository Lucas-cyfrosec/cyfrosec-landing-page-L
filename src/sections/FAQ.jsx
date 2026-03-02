import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Is CyfroSec agent-based or agentless?', answer: 'CyfroSec supports both. Our lightweight agent provides deep visibility for on-prem systems, while agentless scanning covers cloud resources and network assets. You can mix and match based on your needs.' },
  { question: 'How often does CyfroSec scan for vulnerabilities?', answer: 'Scanning frequency is configurable per asset or asset group. Options range from continuous real-time monitoring to scheduled daily, weekly, or monthly scans. Most customers use continuous scanning for critical assets and scheduled scans for lower-priority systems.' },
  { question: 'What operating systems and cloud platforms are supported?', answer: 'CyfroSec supports Windows Server 2016+, Ubuntu 18.04+, Debian 10+, CentOS 7+, RHEL 7+, and most Linux distributions. For cloud, we integrate with AWS, Azure, GCP, and Kubernetes environments.' },
  { question: 'What permissions does the agent require?', answer: 'The agent runs as a standard user for most operations. Root/admin access is only needed for certain deep scans (e.g., kernel configuration checks). All permissions are documented, and we support least-privilege deployments.' },
  { question: 'How does CyfroSec handle false positives?', answer: 'Our AI-powered analysis significantly reduces false positives by correlating findings with actual exploitability data. You can also suppress or tune findings with full audit trail.' },
  { question: 'Does CyfroSec support SSO and RBAC?', answer: 'Yes. We support SAML 2.0, OIDC, and direct integration with major identity providers (Okta, Azure AD, Google Workspace). Role-based access control lets you define granular permissions per team, asset group, or organization.' },
  { question: 'Is CyfroSec compliant with SOC 2, ISO 27001, GDPR?', answer: 'Our SaaS platform is SOC 2 Type II certified and we maintain ISO 27001 compliance. For GDPR, we offer EU data residency options and full data processing agreements. On-premises deployment gives you complete control.' },
  { question: 'Can I run CyfroSec in an air-gapped environment?', answer: 'Yes. Our on-premises deployment supports fully air-gapped environments. Vulnerability databases and threat intelligence can be updated via offline bundle transfer.' },
  { question: 'How long does deployment take?', answer: 'SaaS deployment takes minutes - just sign up and connect your first source. On-premises deployment typically takes less than an hour with our Docker-based installer.' },
  { question: 'What integrations are available?', answer: 'We offer 100+ pre-built integrations including SIEM (Splunk, Elastic, Sentinel), SOAR (XSOAR, Splunk SOAR), ticketing (Jira, ServiceNow), cloud (AWS, Azure, GCP), and CI/CD (GitHub Actions, GitLab, Jenkins).' }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  function toggleItem(index) {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            Frequently asked <span className="text-primary-500">questions</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Everything you need to know about CyfroSec. Can't find what you're looking for?{' '}
            <a href="mailto:support@cyfrosec.com" className="text-primary-500 hover:underline">Contact us</a>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-surface-200 dark:divide-surface-700">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 sm:py-6">
                <button
                  className="w-full flex items-start justify-between gap-3 sm:gap-4 text-left"
                  onClick={() => toggleItem(i)}
                  aria-expanded={!!openItems[i]}
                >
                  <span className="text-base sm:text-lg font-semibold text-surface-900 dark:text-surface-50 pr-2 sm:pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-surface-500 flex-shrink-0 mt-1 transition-transform duration-200 ${openItems[i] ? 'rotate-180' : ''}`} />
                </button>
                {openItems[i] && (
                  <div className="mt-4 text-surface-600 dark:text-surface-400 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
