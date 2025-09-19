import { Button } from '@/components/ui/Button';

export default function ConstructionSolutionPage() {
  return (
    <main className="bg-black pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              CONSTRUCTION SOLUTIONS
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">BOQ</span>
              <span className="block text-gray">INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-12">
              AI agents that automate bill of quantities, ensure compliance, and 
              optimize project planning. Build smarter, faster, safer.
            </p>
            <div className="flex gap-8">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Request Demo
              </Button>
              <Button className="border border-white/20 hover:bg-white/10 px-8 py-4">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">USE CASES</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">BOQ Automation</h3>
              <p className="text-gray mb-6">
                Generate accurate bill of quantities from plans in minutes. 
                Reduce errors and ensure nothing is missed.
              </p>
              <p className="text-sm text-gray">→ 90% accuracy improvement</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Compliance Checking</h3>
              <p className="text-gray mb-6">
                Automated verification against building codes, safety standards, 
                and environmental regulations.
              </p>
              <p className="text-sm text-gray">→ 100% compliance rate</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Project Planning</h3>
              <p className="text-gray mb-6">
                AI-optimized scheduling, resource allocation, and risk assessment 
                for complex construction projects.
              </p>
              <p className="text-sm text-gray">→ 30% faster completion</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Cost Estimation</h3>
              <p className="text-gray mb-6">
                Accurate cost predictions based on historical data, market rates, 
                and project specifications.
              </p>
              <p className="text-sm text-gray">→ 95% estimate accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">KEY FEATURES</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">BIM Integration</h3>
              <p className="text-gray">Works with Revit, AutoCAD, and other Building Information Modeling tools.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Plan Analysis</h3>
              <p className="text-gray">Computer vision to analyze architectural and engineering drawings.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Material Database</h3>
              <p className="text-gray">Updated pricing and specifications for thousands of materials.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Safety Monitoring</h3>
              <p className="text-gray">Real-time safety compliance and risk assessment.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Progress Tracking</h3>
              <p className="text-gray">AI-powered progress monitoring using site images and IoT data.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Vendor Management</h3>
              <p className="text-gray">Automated RFQs, bid analysis, and vendor performance tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">PROVEN IMPACT</h2>
              <p className="text-xl text-gray mb-12">
                Construction companies using our AI complete projects faster, 
                reduce errors, and improve safety records significantly.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Calculate Your ROI →
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">90%</p>
                <p className="text-gray">Error reduction</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">30%</p>
                <p className="text-gray">Faster delivery</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">$5M</p>
                <p className="text-gray">Average savings</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">0</p>
                <p className="text-gray">Safety incidents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-6xl font-bold mb-8">
            BUILD SMARTER WITH AI
          </h2>
          <p className="text-xl text-gray mb-12 max-w-2xl mx-auto">
            Join leading construction firms already using GenX to transform project delivery.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg">
            Schedule Construction Demo →
          </Button>
        </div>
      </section>
    </main>
  );
}