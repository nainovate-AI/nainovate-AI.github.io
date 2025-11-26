'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import {EnterpriseSystemMockup } from '../mockups/EnterpriseSystemMockup';
import {APIManagementMockup } from '../mockups/APIManagementMockup';
import {CustomIntegrationMockup } from '../mockups/CustomIntegrationMockup';

export default function IntegrationsClient() {
  const [activeCategory, setActiveCategory] = useState<'crm' | 'productivity' | 'data' | 'cloud'>('crm');

  const integrationCategories = {
    crm: {
      title: 'CRM & Sales',
      count: '25+',
      examples: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Oracle CX', 'SAP Sales Cloud', 'Zoho CRM']
    },
    productivity: {
      title: 'Productivity & Collaboration',
      count: '30+',
      examples: ['Microsoft 365', 'Google Workspace', 'Slack', 'Teams', 'Jira', 'Asana']
    },
    data: {
      title: 'Databases & Storage',
      count: '20+',
      examples: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle DB', 'Redis', 'Snowflake']
    },
    cloud: {
      title: 'Cloud & Infrastructure',
      count: '25+',
      examples: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean']
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-sm">GenX Platform / Integrations</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              100+ PRE-BUILT<br />
              INTEGRATIONS
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Connect AI agents to your entire tech stack instantly. Pre-built connectors for CRM,
              ERP, databases, cloud services, and more. Plus custom integration framework for anything else.
            </p>

            <div className="flex gap-6 flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                  Explore Integrations
                </Button>
              </Link>
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                View Integration Docs
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">INTEGRATION CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Pre-Built Connectors</h3>
                <p className="text-sm text-gray-400">100+ ready-to-use enterprise integrations</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Custom Connectors</h3>
                <p className="text-sm text-gray-400">Build custom integrations with SDKs</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Visual Data Mapping</h3>
                <p className="text-sm text-gray-400">Map data flows without coding</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Secure Authentication</h3>
                <p className="text-sm text-gray-400">OAuth2, API keys, SSO support</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 1: Pre-Built Connectors */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">100+ Pre-Built Enterprise Connectors</h2>
                  <p className="text-xl text-gray-300">
                    Connect to your existing systems in minutes, not months. Every major enterprise
                    platform is supported with authentication, data mapping, and error handling built-in.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">One-Click Configuration</h3>
                      <p className="text-gray-400">
                        Connect to Salesforce, HubSpot, Microsoft Dynamics, Oracle, SAP, and 95+ other systems
                        with guided setup wizards. OAuth2, API key, and bearer token authentication supported.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Real-Time Data Sync</h3>
                      <p className="text-gray-400">
                        Bi-directional data synchronization with webhook support for real-time updates. Batch
                        processing for high-volume operations with automatic retry and error handling.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Automatic Updates</h3>
                      <p className="text-gray-400">
                        Connectors automatically update when APIs change. No maintenance required. Version
                        compatibility managed by platform with backward compatibility guaranteed.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                             <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Browse All Connectors →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Integration Categories Selector */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                  {/* Category Tabs */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {Object.entries(integrationCategories).map(([key, cat]) => (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key as any)}
                        className={`p-4 rounded-lg text-left transition-all ${activeCategory === key
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-white/5 border border-white/10 hover:border-white/30'
                          }`}
                      >
                        <div className="font-bold mb-1">{cat.title}</div>
                        <div className="text-sm text-gray-400">{cat.count} connectors</div>
                      </button>
                    ))}
                  </div>

                  {/* Example Integrations */}
                  <div className="space-y-3">
                    {integrationCategories[activeCategory].examples.map((name, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-black/40 rounded-lg">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Custom Integration Framework (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div><CustomIntegrationMockup /></div>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Custom Integration Framework</h2>
                  <p className="text-xl text-gray-300">
                    Build custom connectors for proprietary systems or niche applications. Visual API
                    builder with support for any protocol, authentication method, and data format.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Universal API Support</h3>
                      <p className="text-gray-400">
                        Connect to REST, GraphQL, SOAP, and custom APIs with built-in support for all authentication
                        methods. Chain multiple API calls in a single workflow with data transformation between steps.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Visual Data Mapping</h3>
                      <p className="text-gray-400">
                        Map data fields visually between your system and GenX agents. Support for complex transformations,
                        data validation, and format conversion without writing code.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Connector SDK</h3>
                      <p className="text-gray-400">
                        Build reusable connectors with Python or JavaScript SDK. Package and share across your organization.
                        Publish to private marketplace for team reuse with version control.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                             <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: API Management & Orchestration */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">API Management & Orchestration</h2>
                  <p className="text-xl text-gray-300">
                    Manage API keys, monitor usage, handle rate limits, and orchestrate complex
                    multi-system workflows from a single control plane.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Centralized API Key Management</h3>
                      <p className="text-gray-400">
                        Store and rotate API keys securely with encrypted vault. Role-based access control for
                        managing credentials. Automatic key rotation schedules with zero-downtime updates.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Rate Limiting & Throttling</h3>
                      <p className="text-gray-400">
                        Intelligent rate limiting that respects API quotas automatically. Queue requests when
                        limits are reached with automatic retry. Cost optimization through request batching.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-System Orchestration</h3>
                      <p className="text-gray-400">
                        Chain API calls across different systems in a single workflow. Conditional logic based on
                        responses. Parallel execution for performance with transaction rollback on failures.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                             <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual */}
            <div><APIManagementMockup /></div>
          </div>
        </div>
      </section>

      {/* Section 4: Enterprise System Support (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div><EnterpriseSystemMockup /></div>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Enterprise System Support</h2>
                  <p className="text-xl text-gray-300">
                    Connect to legacy systems, on-premises infrastructure, and modern cloud services.
                    Support for any deployment model with enterprise-grade security.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Legacy System Integration</h3>
                      <p className="text-gray-400">
                        Connect to mainframes, AS/400, and legacy databases with protocol adapters. Support for
                        ODBC, JDBC, and custom protocols with data format conversion for modern systems.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-Cloud Connectivity</h3>
                      <p className="text-gray-400">
                        Native integrations with AWS, Azure, Google Cloud, Oracle Cloud, and IBM Cloud. Access
                        cloud services, storage, databases, and AI services with unified authentication.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">On-Premises & Hybrid</h3>
                      <p className="text-gray-400">
                        Secure connectivity to on-premises systems via VPN, private endpoints, or direct connect.
                        Hybrid cloud support with data residency compliance for regulated industries.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                             <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Built with AI CoE Governance */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <AnimatedSection>
            <div className="mb-12">
              <svg className="w-16 h-16 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-4xl font-bold mb-4">BUILT WITH AI CoE GOVERNANCE</h2>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Every integration respects AI CoE governance policies. Data access controls,
              audit trails, and compliance validation are enforced automatically.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Data Access Control</h3>
                <p className="text-sm text-gray-400">Role-based permissions with complete audit logging</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Compliance Validation</h3>
                <p className="text-sm text-gray-400">Automatic PII detection and data residency enforcement</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Integration Monitoring</h3>
                <p className="text-sm text-gray-400">Real-time health monitoring with automatic alerts</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Integration Categories Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">INTEGRATION CATEGORIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CRM & Sales</h3>
                <p className="text-sm text-gray-400 mb-4">25+ connectors</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Salesforce</p>
                  <p>• HubSpot</p>
                  <p>• Microsoft Dynamics</p>
                  <p>• Zoho CRM</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">ERP & Finance</h3>
                <p className="text-sm text-gray-400 mb-4">20+ connectors</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• SAP</p>
                  <p>• Oracle ERP</p>
                  <p>• NetSuite</p>
                  <p>• QuickBooks</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Communication</h3>
                <p className="text-sm text-gray-400 mb-4">15+ connectors</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Slack</p>
                  <p>• Microsoft Teams</p>
                  <p>• Zoom</p>
                  <p>• Twilio</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
                <p className="text-sm text-gray-400 mb-4">25+ connectors</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• AWS</p>
                  <p>• Azure</p>
                  <p>• Google Cloud</p>
                  <p>• IBM Cloud</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">EXPLORE MORE PLATFORM FEATURES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <Link href="/platform/ai-engineering-tools">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">AI Engineering Tools</h3>
                  <p className="text-sm text-gray-400">Build and test AI agents</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link href="/platform/search-data-ai">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Search + Data AI</h3>
                  <p className="text-sm text-gray-400">Vector search and data preparation</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link href="/platform/security-governance">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Security + Governance</h3>
                  <p className="text-sm text-gray-400">Enterprise-grade security</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href="/platform/development-tools">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Development Tools</h3>
                  <p className="text-sm text-gray-400">No-code and pro-code options</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-8">
              CONNECT YOUR ENTIRE STACK
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              100+ pre-built connectors plus custom integration framework. Connect any system, any protocol, any cloud.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                  Explore Integrations
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}