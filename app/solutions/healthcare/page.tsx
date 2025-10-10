import { Button } from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Healthcare AI Solutions - Medical Intelligence Platform | Nainovate',
  description: 'AI agents for healthcare: 60% faster diagnosis, 95% accuracy. Automate medical records, diagnosis assistance, patient monitoring. HIPAA compliant. ROI in 6 months.',
  keywords: 'healthcare AI, medical AI agents, diagnosis AI, HIPAA compliant AI, medical record automation, clinical decision support',
  openGraph: {
    title: 'Healthcare AI Solutions - Transform Patient Care',
    description: 'Reduce diagnosis time by 60% with AI agents that understand medical context. HIPAA compliant.',
  },
};
export default function HealthcareSolutionPage() {
  const healthcareSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare AI Solutions",
    "name": "Healthcare AI Intelligence Platform",
    "description": "AI agents that reduce diagnosis time by 60% and improve accuracy to 95%",
    "provider": {
      "@type": "Organization",
      "name": "Nainovate Technologies"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare AI Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Medical Record Analysis",
          "description": "Extract insights from thousands of patient records in seconds",
          "serviceOutput": "80% faster than manual review"
        },
        {
          "@type": "Service",
          "name": "Diagnosis Assistance",
          "description": "AI agents trained on millions of cases provide diagnostic suggestions",
          "serviceOutput": "95% accuracy rate"
        },
        {
          "@type": "Service",
          "name": "Administrative Automation",
          "description": "Automate insurance claims, appointment scheduling, and documentation",
          "serviceOutput": "Save 20 hours per week"
        },
        {
          "@type": "Service",
          "name": "Patient Monitoring",
          "description": "Real-time analysis of patient vitals and alerts for critical changes",
          "serviceOutput": "40% reduction in emergencies"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Nainovate Healthcare Division",
    "description": "Healthcare AI solutions provider",
    "medicalSpecialty": [
      "Diagnostic Radiology",
      "Health Informatics",
      "Clinical Decision Support"
    ]
  };

  return (
    <main className="bg-black pt-20">
      <JsonLd data={healthcareSchema} />
      <JsonLd data={medicalOrganizationSchema} />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              HEALTHCARE SOLUTIONS
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">MEDICAL</span>
              <span className="block text-gray">INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-12">
              AI agents that understand medical context. Reduce diagnosis time by 60%,
              improve accuracy, and let doctors focus on patient care.
            </p>
            <div className="flex gap-8">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Request Demo
              </Button>
              <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
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
              <h3 className="text-2xl font-bold mb-4">Medical Record Analysis</h3>
              <p className="text-gray mb-6">
                Extract insights from thousands of patient records in seconds.
                Identify patterns, flag anomalies, and support clinical decisions.
              </p>
              <p className="text-sm text-gray">→ 80% faster than manual review</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Diagnosis Assistance</h3>
              <p className="text-gray mb-6">
                AI agents trained on millions of cases provide diagnostic suggestions
                and treatment recommendations based on symptoms and history.
              </p>
              <p className="text-sm text-gray">→ 95% accuracy rate</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Administrative Automation</h3>
              <p className="text-gray mb-6">
                Automate insurance claims, appointment scheduling, and documentation.
                Reduce administrative burden by 70%.
              </p>
              <p className="text-sm text-gray">→ Save 20 hours per week</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Patient Monitoring</h3>
              <p className="text-gray mb-6">
                Real-time analysis of patient vitals and alerts for critical changes.
                Predictive models for early intervention.
              </p>
              <p className="text-sm text-gray">→ 40% reduction in emergencies</p>
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
              <h3 className="text-xl font-bold">HIPAA Compliant</h3>
              <p className="text-gray">Full compliance with healthcare regulations and data privacy standards.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Medical LLMs</h3>
              <p className="text-gray">Pre-trained on medical literature and clinical guidelines.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">EHR Integration</h3>
              <p className="text-gray">Seamless integration with Epic, Cerner, and other EHR systems.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Real-time Processing</h3>
              <p className="text-gray">Instant analysis and recommendations at the point of care.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Multi-language</h3>
              <p className="text-gray">Support for 50+ languages for global healthcare.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Audit Trail</h3>
              <p className="text-gray">Complete logging of all AI decisions and recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">PROVEN ROI</h2>
              <p className="text-xl text-gray mb-12">
                Healthcare organizations using our AI agents see immediate returns
                through improved efficiency and better patient outcomes.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Calculate Your ROI →
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">60%</p>
                <p className="text-gray">Faster diagnosis</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">$2M</p>
                <p className="text-gray">Annual savings</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">95%</p>
                <p className="text-gray">Accuracy rate</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">24/7</p>
                <p className="text-gray">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-6xl font-bold mb-8">
            TRANSFORM HEALTHCARE WITH AI
          </h2>
          <p className="text-xl text-gray mb-12 max-w-2xl mx-auto">
            Join leading healthcare providers already using GenX to improve patient care.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg">
            Schedule Healthcare Demo →
          </Button>
        </div>
      </section>
    </main>
  );
}