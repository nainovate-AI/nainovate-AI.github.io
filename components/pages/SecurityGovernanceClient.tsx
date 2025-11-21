'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function SecurityGovernanceClient() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-sm">GenX Platform / Security & Governance</span>
            </div>
            
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              SECURITY &<br/>
              GOVERNANCE
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Deploy AI with confidence. Built-in compliance, role-based access control, and comprehensive 
              audit trails. Meet global regulations out of the box.
            </p>
            
            <div className="flex gap-6 flex-wrap">
              <Link href="/contact">
                <Button className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-medium">
                  Schedule Security Demo
                </Button>
              </Link>
              <Link href="/products">
                <Button className="px-8 py-4 border-2 border-white/20 hover:bg-white/10 font-medium">
                  Back to Platform
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">CORE SECURITY CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Enterprise Security</h3>
                <p className="text-sm text-gray-400">Multi-layer security architecture with end-to-end encryption</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Access Control</h3>
                <p className="text-sm text-gray-400">Role-based permissions with SSO & MFA integration</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Compliance Management</h3>
                <p className="text-sm text-gray-400">GDPR, HIPAA, SOC2-ready with automated reporting</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Audit & Monitoring</h3>
                <p className="text-sm text-gray-400">Complete activity logging with real-time security alerts</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 1: Data Security & Encryption */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Data Security & Encryption</h2>
                  <p className="text-xl text-gray-300">
                    Your data never leaves your control. Every byte is encrypted, isolated, and protected 
                    with enterprise-grade security from training to deployment.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">End-to-End Encryption</h3>
                      <p className="text-gray-400">
                        Data encrypted at rest (AES-256) and in transit (TLS 1.3). Customer-managed encryption 
                        keys (CMEK) option with secure key rotation and zero-knowledge architecture for sensitive data.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Data Isolation</h3>
                      <p className="text-gray-400">
                        Tenant-specific data segregation with private cloud deployment options. Virtual private cloud 
                        (VPC) support and dedicated infrastructure for enterprise clients.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Secure Model Training</h3>
                      <p className="text-gray-400">
                        Training data never leaves your environment. Differential privacy for sensitive datasets, 
                        federated learning capabilities, and model encryption with secure storage.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual/Screenshot Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-gray-400 font-medium">Multi-Layer Encryption</p>
                    <p className="text-sm text-gray-500 mt-2">AES-256 • TLS 1.3 • Zero-Knowledge</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Access Control (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <p className="text-gray-400 font-medium">Role-Based Access Control</p>
                    <p className="text-sm text-gray-500 mt-2">RBAC • SSO • MFA</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Access Control & Identity</h2>
                  <p className="text-xl text-gray-300">
                    Granular permission management that scales with your organization. Control who can 
                    access what, when, and how with enterprise SSO integration.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Role-Based Access Control</h3>
                      <p className="text-gray-400">
                        Granular permission management with pre-built enterprise roles (Admin, Developer, Analyst, 
                        Viewer). Custom role creation and attribute-based access control (ABAC) support.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Enterprise SSO Integration</h3>
                      <p className="text-gray-400">
                        SAML 2.0 and OAuth 2.0 support with Active Directory / LDAP integration. Compatible with 
                        Okta, Azure AD, Google Workspace with multi-factor authentication (MFA) enforcement.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Agent-Level Security</h3>
                      <p className="text-gray-400">
                        Per-agent access policies with API key management and rotation. Rate limiting, throttling, 
                        and IP whitelisting for production agents ensure secure operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Compliance & Governance */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Compliance & Governance</h2>
                  <p className="text-xl text-gray-300">
                    Built to meet global regulatory requirements. Deploy AI confidently knowing you're 
                    compliant from day one with comprehensive audit trails.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-400">
                        GDPR compliance built-in with data subject rights and right to deletion. HIPAA-ready for 
                        healthcare, SOC 2-ready infrastructure, plus CCPA, PIPEDA, and LGPD support.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Data Governance</h3>
                      <p className="text-gray-400">
                        Complete data lineage tracking from source to model to output. Automated PII detection and 
                        redaction, retention policies, and data residency controls for EU, US, India, and GCC regions.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Audit Trails & Reporting</h3>
                      <p className="text-gray-400">
                        Complete activity logs tracking who accessed what and when. Automated compliance reports 
                        (quarterly, annual) with real-time monitoring dashboards and exportable logs for external audits.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Visual */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p className="text-gray-400 font-medium">Global Compliance Ready</p>
                    <p className="text-sm text-gray-500 mt-2">GDPR • HIPAA • SOC2 • CCPA</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: AI-Specific Security (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-gray-400 font-medium">AI Threat Protection</p>
                    <p className="text-sm text-gray-500 mt-2">Prompt Defense • Bias Detection • Output Monitoring</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">AI-Specific Security</h2>
                  <p className="text-xl text-gray-300">
                    Protection against AI-specific threats. From prompt injection to model extraction, 
                    comprehensive security for your AI operations.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Prompt Injection Protection</h3>
                      <p className="text-gray-400">
                        Built-in input validation with malicious prompt detection. Sanitization of user inputs and 
                        context-aware filtering to prevent prompt injection attacks.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Model Security</h3>
                      <p className="text-gray-400">
                        Protection against model extraction attacks with watermarking for proprietary models. 
                        Adversarial robustness testing and secure model versioning with rollback capabilities.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Output Monitoring</h3>
                      <p className="text-gray-400">
                        Real-time hallucination detection with bias and toxicity monitoring. Sensitive data leak 
                        prevention and content policy enforcement for safe AI outputs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="border-2 border-white/20 hover:bg-white/10 px-6 py-3">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI CoE Integration Section */}
      <section className="py-32 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                <span className="text-sm font-medium">AI CENTER OF EXCELLENCE</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">BUILT-IN GOVERNANCE FRAMEWORK</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlike platforms that bolt on security as an afterthought, GenX has enterprise governance 
                built into every layer. Security and compliance from day one.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Security by Default</h3>
                <p className="text-gray-400">
                  Every agent inherits platform-level security policies. Zero-trust architecture from 
                  day one with automatic compliance validation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Continuous Compliance</h3>
                <p className="text-gray-400">
                  Real-time policy enforcement with automated audit preparation. Regulatory updates 
                  pushed automatically to maintain compliance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Risk Management</h3>
                <p className="text-gray-400">
                  AI-specific threat detection with bias and fairness monitoring. Built-in incident 
                  response workflows for rapid remediation.
                </p>
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

            <AnimatedSection delay={0.4}>
              <Link href="/platform/integrations">
                <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Integrations</h3>
                  <p className="text-sm text-gray-400">100+ pre-built connectors</p>
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
              READY TO DEPLOY SECURELY?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              See how GenX meets your security and compliance requirements
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact">
                <Button className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-medium">
                  Schedule Security Review
                </Button>
              </Link>
              <Button className="px-8 py-4 border-2 border-white/20 hover:bg-white/10 font-medium">
                Download Security Whitepaper
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}