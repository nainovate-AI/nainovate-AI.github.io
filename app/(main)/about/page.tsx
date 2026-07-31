import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Target } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';


export const metadata: Metadata = {
  title: 'About Nainovate - Leading Enterprise AI Platform Company',
  description: 'Learn about Nainovate\'s mission to democratize AI. Founded in 2023, we help enterprises build intelligent agents. NVIDIA Inception partner. Operating in India, GCC, and North America.',
  keywords: 'about Nainovate, AI company, enterprise AI platform, NVIDIA partner, AI solutions provider, Hyderabad AI company',
  openGraph: {
    title: 'About Nainovate - Building the Future of AI',
    description: 'Discover how Nainovate is transforming businesses with accessible, powerful AI solutions.',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nainovate Technologies",
      "foundingDate": "2023",
      "description": "Nainovate transforms businesses with intelligent AI agents",
      "mission": "To democratize AI by making it accessible to every business, regardless of technical expertise or resources",
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Enterprise Software",
        "No-code Development",
        "AI Agents"
      ],
      "memberOf": [
        {
          "@type": "ProgramMembership",
          "programName": "NVIDIA Inception Program",
          "membershipNumber": "NVIDIA Partner"
        }
      ],
      "partner": [
        {
          "@type": "Organization",
          "name": "Walnut"
        },
        {
          "@type": "Organization",
          "name": "Brillius"
        }
      ]
    }
  };

  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Event",
          "name": "Building in Stealth",
          "startDate": "2023",
          "description": "Began operations in stealth mode, conducting extensive research and development"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Event",
          "name": "Proving the Concept",
          "startDate": "2024",
          "description": "Completed GenX platform development and delivered 20+ proof-of-concepts"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Event",
          "name": "Scaling Globally",
          "startDate": "2025",
          "description": "Signed MoU with Oman partner, expanding to GCC, North America, and Australia"
        }
      }
    ]
  };

  return (
    <main className="bg-bg pt-16 md:pt-20">
      <JsonLd data={aboutSchema} />
      <JsonLd data={timelineSchema} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-fg-muted uppercase mb-8">
              ABOUT
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight mb-8">
              <span className="block">BUILDING THE</span>
              <span className="block">FUTURE OF AI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl">
              Nainovate transforms businesses with intelligent AI agents.
              We believe AI should be accessible, powerful, and tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">OUR MISSION</h2>
              <p className="text-base sm:text-lg md:text-xl text-fg-muted mb-8">
                To democratize AI by making it accessible to every business,
                regardless of technical expertise or resources.
              </p>
              <p className="text-fg-muted mb-8">
                We believe that AI should augment human capabilities, not replace them.
                Our GenX platform empowers organizations to build intelligent agents
                that understand their unique challenges and deliver real results.
              </p>
              <p className="text-fg-muted">
                Currently focused on governance, healthcare, and manufacturing sectors,
                we&apos;re developing AI solutions that address complex operational challenges with measurable outcomes.
              </p>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="w-40 h-40 text-fg-faint" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">OUR STORY</h2>

          <div className="space-y-8 md:space-y-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted">2023</div>
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4">BUILDING IN STEALTH</h3>
                <p className="text-fg-muted">
                  Began operations in stealth mode, conducting extensive research and development.
                  Laid the technical foundation for the GenX platform through rigorous market analysis and prototype development.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted">2024</div>
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4">PROVING THE CONCEPT</h3>
                <p className="text-fg-muted">
                  Completed GenX platform development and validation.
                  Delivered over 20 proof-of-concept implementations across various industries, refining our approach based on real-world feedback.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-muted">2025</div>
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4">SCALING GLOBALLY</h3>
                <ul className="text-fg-muted text-base md:text-lg space-y-2">
                  <li>• Signed MoU with strategic partner in Oman</li>
                  <li>• Established partnership with Indian medical device manufacturer</li>
                  <li>• Expanding proof-of-concepts to GCC, North America, and Australia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">OUR VALUES</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">01</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">ENTERPRISE SECURITY</h3>
              <p className="text-fg-muted text-sm">
                On-premise deployment ensures complete data sovereignty and regulatory compliance
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">02</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">RAPID IMPLEMENTATION</h3>
              <p className="text-fg-muted text-sm">
                Visual workflow builders enable production deployment within days
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">03</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">ROI - DRIVEN SOLUTIONS</h3>
              <p className="text-fg-muted text-sm">
                Guaranteed performance metrics with average 300% ROI in year one
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">04</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">COLLABURATIVE GROWTH</h3>
              <p className="text-fg-muted text-sm">
                Success-based partnerships aligned with your business outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">LEADERSHIP</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-surface-hover to-surface-2 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">FOUNDER NAME</h3>
              <p className="text-fg-muted mb-2">Chief Executive Officer</p>
              <p className="text-sm text-fg-muted">Former AI lead at Tech Giant</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-surface-hover to-surface-2 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">CTO NAME</h3>
              <p className="text-fg-muted mb-2">Chief Technology Officer</p>
              <p className="text-sm text-fg-muted">PhD in Machine Learning</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-surface-hover to-surface-2 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">CPO NAME</h3>
              <p className="text-fg-muted mb-2">Chief Product Officer</p>
              <p className="text-sm text-fg-muted">Built AI products at scale</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partners */}
      <section className="py-8 md:py-12 border-t border-border" id="partners">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">PARTNERS & INVESTORS</h2>

          <div className="grid md:grid-cols-4 gap-8 md:gap-16 items-center opacity-60">
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl font-bold">NVIDIA</p>
              <p className="text-sm text-fg-muted">Inception Partner</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl font-bold">Walnut</p>
              <p className="text-sm text-fg-muted">Strategic Partner</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl font-bold">Brillius</p>
              <p className="text-sm text-fg-muted">Strategic Partner</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl font-bold">Al Tomouh IT</p>
              <p className="text-sm text-fg-muted">Strategic Partner | Suhail Bahwan Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            JOIN OUR MISSION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-fg-muted mb-6 md:mb-12 max-w-2xl mx-auto">
            Be part of the team that&apos;s making AI accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center">
            {/* <Button className="px-12 py-6 text-lg">
              View Careers →
            </Button> */}
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 text-base md:text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}