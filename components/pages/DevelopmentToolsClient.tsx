'use client';

import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { VisualBuilderMockup } from '../mockups/VisualBuilderMockup';
import { SDKsMockup } from '../mockups/SDKsMockup';
import { TestingDebuggingMockup } from '../mockups/TestingDebuggingMockup';
import { DeploymentMockup } from '../mockups/DeploymentMockup';

export default function DevelopmentToolsClient() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-sm">GenX Platform / Development Tools</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              NO-CODE +<br />
              PRO-CODE<br />
              TOOLS
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              Build AI agents your way. Visual drag-and-drop for business users. Comprehensive
              SDKs for developers. One unified platform with integrated testing and deployment.
            </p>

            <div className="flex gap-6 flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                  Start Building
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
            <h2 className="text-4xl font-bold text-center mb-16">CORE DEVELOPMENT CAPABILITIES</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Visual Workflow Builder</h3>
                <p className="text-sm text-gray-400">Drag-and-drop interface with pre-built templates</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Developer SDKs</h3>
                <p className="text-sm text-gray-400">Python, JavaScript, and REST APIs</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Debugging & Testing</h3>
                <p className="text-sm text-gray-400">Real-time tracing and integrated testing tools</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors min-h-[200px]">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Deployment Automation</h3>
                <p className="text-sm text-gray-400">One-click deployment with version control</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 1: Visual No-Code Builder */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Visual No-Code Builder</h2>
                  <p className="text-xl text-gray-300">
                    Empower business users to build sophisticated AI workflows without writing a single
                    line of code. Drag, drop, and deploy.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Drag-and-Drop Canvas</h3>
                      <p className="text-gray-400">
                        Build AI workflows visually by connecting agents, tools, and integrations with visual blocks.
                        Real-time preview of agent behavior with instant validation and error detection.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">75+ Pre-Built Templates</h3>
                      <p className="text-gray-400">
                        Industry-specific workflow templates for HR, Finance, and Operations. Use case accelerators
                        for Document Processing, Customer Service, and Analytics with customizable starting points.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Business User Empowerment</h3>
                      <p className="text-gray-400">
                        Enable non-technical teams to build AI solutions with role-based access controls for safe
                        experimentation. Approval workflows for production deployment with training programs available.
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

            {/* Right: Visual/Screenshot Placeholder */}
            <div><VisualBuilderMockup /></div>
          </div>
        </div>
      </section>

      {/* Section 2: Comprehensive SDKs (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div><SDKsMockup /></div>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Comprehensive SDKs</h2>
                  <p className="text-xl text-gray-300">
                    Full-featured SDKs for professional developers. Write custom logic, extend platform
                    capabilities, and integrate with your existing tech stack.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-Language Support</h3>
                      <p className="text-gray-400">
                        Python SDK for ML/AI developers with full-featured capabilities. JavaScript SDK for browser
                        and Node.js. REST APIs for language-agnostic integration with complete documentation.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Custom Function Development</h3>
                      <p className="text-gray-400">
                        Write custom logic in Python or JavaScript that executes within agent workflows seamlessly.
                        Access platform services and data. Package and reuse across multiple agents.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Open Standards & Extensibility</h3>
                      <p className="text-gray-400">
                        Agent Protocol for multi-agent communication. Standard interfaces for tools and memory.
                        Plugin architecture for extending capabilities with community-contributed extensions.
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

      {/* Section 3: Integrated Testing & Debugging */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Integrated Testing & Debugging</h2>
                  <p className="text-xl text-gray-300">
                    Monitor, troubleshoot, and optimize AI agents across their entire lifecycle.
                    Built-in tools for testing, debugging, and performance analysis.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">End-to-End Agent Tracing</h3>
                      <p className="text-gray-400">
                        View complete execution flow from input to output. Track agent decisions and tool usage.
                        Identify bottlenecks and failures quickly with performance metrics at every step.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Interactive Debugging</h3>
                      <p className="text-gray-400">
                        Set breakpoints in visual workflows and inspect variables with agent state visibility.
                        Step through execution logic with hot-reload for rapid iteration.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Automated Testing Framework</h3>
                      <p className="text-gray-400">
                        Create test scenarios for agent behaviors with regression testing for production changes.
                        Load testing for scale validation and CI/CD pipeline integration.
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
            <div><TestingDebuggingMockup /></div>
        
          </div>
        </div>
      </section>

      {/* Section 4: Deployment & Lifecycle Management (Reversed Layout) */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div><DeploymentMockup /></div>

            {/* Right: Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">Deployment & Lifecycle Management</h2>
                  <p className="text-xl text-gray-300">
                    Deploy instantly with confidence. Built-in version control, automated rollback,
                    and comprehensive monitoring for production AI agents.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">One-Click Deployment</h3>
                      <p className="text-gray-400">
                        Deploy from development to production instantly with environment-specific configurations.
                        Blue-green deployment for zero downtime with automatic scaling based on load.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Version Control & Rollback</h3>
                      <p className="text-gray-400">
                        Git integration for workflow versioning. Compare versions side-by-side with instant
                        rollback to previous versions. Complete audit trail of all changes.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Lifecycle Monitoring</h3>
                      <p className="text-gray-400">
                        Real-time performance dashboards with usage analytics and cost tracking. Automated
                        alerts for issues with health checks and uptime monitoring.
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
              Whether you build with no-code or pro-code, AI CoE governance is automatically
              enforced. Quality, security, and compliance from development to production.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Secure by Design</h3>
                <p className="text-sm text-gray-400">Sandboxed environments with automatic security scanning</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Quality Gates</h3>
                <p className="text-sm text-gray-400">Mandatory testing with performance benchmarks enforced</p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Best Practices Enforced</h3>
                <p className="text-sm text-gray-400">Linting, code standards, and documentation requirements</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Paths Comparison */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">CHOOSE YOUR DEVELOPMENT PATH</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">No-Code Path</h3>
                <div className="space-y-3 text-sm text-gray-400 mb-6">
                  <p>1. Choose template</p>
                  <p>2. Customize visually</p>
                  <p>3. Test</p>
                  <p>4. Deploy</p>
                </div>
                <p className="text-lg font-bold text-white">Time: 2-5 days</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro-Code Path</h3>
                <div className="space-y-3 text-sm text-gray-400 mb-6">
                  <p>1. Install SDK</p>
                  <p>2. Write code</p>
                  <p>3. Test locally</p>
                  <p>4. Deploy via API</p>
                </div>
                <p className="text-lg font-bold text-white">Time: 1-3 days</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Hybrid Path</h3>
                <div className="space-y-3 text-sm text-gray-400 mb-6">
                  <p>1. Build workflow visually</p>
                  <p>2. Add custom code nodes</p>
                  <p>3. Test</p>
                  <p>4. Deploy</p>
                </div>
                <p className="text-lg font-bold text-white">Time: 2-4 days</p>
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
              START BUILDING TODAY
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose your path: No-code simplicity or pro-code power. Or both.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/contact">
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4 text-lg">
                  Try No-Code Builder
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}