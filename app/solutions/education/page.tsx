import { Button } from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Education AI Solutions - Automated Grading & Personalized Learning | Nainovate',
  description: 'Transform education with AI: 70% time savings on grading, 40% better retention. Automated grading, personalized learning paths, student analytics. FERPA compliant.',
  keywords: 'education AI, automated grading, personalized learning AI, student analytics, FERPA compliant AI, edutech AI solutions',
  openGraph: {
    title: 'Education AI Solutions - Transform Learning Outcomes',
    description: 'Save 70% time on grading. Create personalized learning experiences with AI.'
  },
};
export default function EducationSolutionPage() {
  const educationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Education Technology",
    "name": "Education AI Solutions",
    "description": "Transform education with AI that personalizes learning and automates grading",
    "provider": {
      "@type": "Organization",
      "name": "Nainovate Technologies"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education AI Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Automated Grading",
          "description": "Grade essays, assignments, and exams in seconds",
          "serviceOutput": "70% time reduction"
        },
        {
          "@type": "Service",
          "name": "Personalized Learning",
          "description": "AI agents adapt to each student's learning style and pace",
          "serviceOutput": "40% better retention"
        },
        {
          "@type": "Service",
          "name": "Student Analytics",
          "description": "Track performance and predict outcomes",
          "serviceOutput": "85% prediction accuracy"
        },
        {
          "@type": "Service",
          "name": "Content Generation",
          "description": "Create quizzes and study materials automatically",
          "serviceOutput": "10x faster creation"
        }
      ]
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI-Powered Learning with Nainovate",
    "description": "Educational institutions using Nainovate AI for better outcomes",
    "provider": {
      "@type": "Organization",
      "name": "Nainovate Technologies"
    }
  };
  return (
    <main className="bg-black pt-20">
      <JsonLd data={educationSchema} />
      <JsonLd data={courseSchema} />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              EDUCATION SOLUTIONS
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">EDUTECH</span>
              <span className="block text-gray">INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-12">
              Transform education with AI that personalizes learning, automates grading,
              and provides actionable insights. Save 70% of administrative time.
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
              <h3 className="text-2xl font-bold mb-4">Automated Grading</h3>
              <p className="text-gray mb-6">
                Grade essays, assignments, and exams in seconds. Provide detailed
                feedback and maintain consistency across thousands of submissions.
              </p>
              <p className="text-sm text-gray">→ 70% time reduction</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Personalized Learning</h3>
              <p className="text-gray mb-6">
                AI agents adapt to each student&apos;s learning style, pace, and needs.
                Create custom learning paths that maximize outcomes.
              </p>
              <p className="text-sm text-gray">→ 40% better retention</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Student Analytics</h3>
              <p className="text-gray mb-6">
                Track performance, predict outcomes, and identify at-risk students
                early. Real-time dashboards for educators and administrators.
              </p>
              <p className="text-sm text-gray">→ 85% prediction accuracy</p>
            </div>

            <div className="border-l border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-4">Content Generation</h3>
              <p className="text-gray mb-6">
                Create quizzes, study materials, and lesson plans automatically.
                Align content with curriculum standards and learning objectives.
              </p>
              <p className="text-sm text-gray">→ 10x faster creation</p>
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
              <h3 className="text-xl font-bold">LMS Integration</h3>
              <p className="text-gray">Works with Canvas, Blackboard, Moodle, and other major platforms.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Multi-language</h3>
              <p className="text-gray">Support for 100+ languages for global education.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Plagiarism Detection</h3>
              <p className="text-gray">Advanced AI to detect copied content and maintain academic integrity.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-gray">WCAG compliant with support for diverse learning needs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Real-time Feedback</h3>
              <p className="text-gray">Instant, constructive feedback to accelerate learning.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Data Privacy</h3>
              <p className="text-gray">FERPA compliant with end-to-end encryption.</p>
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
                Educational institutions using our AI see improved student outcomes
                and dramatic efficiency gains across all operations.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Calculate Your ROI →
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">70%</p>
                <p className="text-gray">Time saved</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">40%</p>
                <p className="text-gray">Better retention</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">2.5x</p>
                <p className="text-gray">Faster grading</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">90%</p>
                <p className="text-gray">Student satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h2 className="text-6xl font-bold mb-8">
            REVOLUTIONIZE EDUCATION WITH AI
          </h2>
          <p className="text-xl text-gray mb-12 max-w-2xl mx-auto">
            Join leading institutions already transforming education with GenX.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg">
            Schedule Education Demo →
          </Button>
        </div>
      </section>
    </main>
  );
}