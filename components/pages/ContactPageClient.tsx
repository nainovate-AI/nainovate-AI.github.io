'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';


export default function ContactPageClient() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nainovate Technologies",
      "url": "https://www.nainovate.ai",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "info@nainovate.ai",
        "url": "https://www.nainovate.ai/contact",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Global"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "HITEC City, Cyberabad",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I get started with GenX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most customers are up and running within days. Our onboarding team will guide you through setup and initial agent creation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical expertise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. GenX is designed for business users. Our visual workflow builder requires no coding knowledge."
        }
      },
      {
        "@type": "Question",
        "name": "Are you AI compliance ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Designed with compliance at its core. We are AI compliance ready and adhere to enterprise-grade security and governance standards."
        }
      },
      {
        "@type": "Question",
        "name": "Can I try before buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer personalized demos and proof-of-concept projects for qualified enterprises."
        }
      }
    ]
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNhq4W7yQo7TinavOG9KlIkd1-j-zjf310CdErCRTsw_pinsfIQNrIy4Wuy0JXV46k/exec';

      const form = new FormData();
      form.append('formGoogleSheetName', 'Sheet1');
      form.append('formGoogleSendEmail', 'info@nainovate.ai');
      form.append('name', `${formData.firstName} ${formData.lastName}`);
      form.append('email', formData.email);
      form.append('company', formData.company);
      form.append('interest', formData.interest);
      form.append('message', formData.message);
      form.append('formDataNameOrder', JSON.stringify([
        "name", "email", "company", "interest", "message"
      ]));

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: form,
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interest: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black pt-20">
      <JsonLd data={faqSchema} />
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
              CONTACT
            </p>
            <h1 className="text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">LET&apos;S</span>
              <span className="block text-gray">CONNECT</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl">
              Ready to transform your business with AI? Our team is here to help
              you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-12">GET IN TOUCH</h2>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium mb-3">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-black">Select your interest</option>
                    <option value="demo" className="bg-black">Product Demo</option>
                    <option value="pricing" className="bg-black">Pricing Information</option>
                    <option value="partnership" className="bg-black">Partnership</option>
                    <option value="support" className="bg-black">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <p className="text-green-500">Thank you! Your message has been sent successfully.</p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-500">Something went wrong. Please try again.</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="border border-white/20 hover:bg-white/10 px-8 py-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-bold mb-6">LET&apos;S CONNECT</h3>
                <p className="text-gray mb-8">
                  Ready to explore how AI can transform your business? Let&apos;s discuss your needs.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-white/60">🗲</span>
                    <div>
                      <p className="text-sm text-gray">24-hour response time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-white/60">◉</span>
                    <div>
                      <p className="text-sm text-gray">Free initial consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-white/60">◈</span>
                    <div>
                      <p className="text-sm text-gray">100% confidential</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">VISIT US</h3>
                <div className="rounded-lg mb-4 overflow-hidden h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121826.27689281755!2d78.27798406762885!3d17.408372669616604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952200059677%3A0xac28e1d107bc3e57!2sAVK%20SRI%20Harsha%20Icon!5e0!3m2!1sen!2sin!4v1753865250238!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <address className="not-italic text-sm text-gray">
                  <strong className="text-white">Nainovate Technologies</strong><br />
                  HITEC City, Cyberabad<br />
                  Hyderabad, Telangana 500081
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold mb-20">FREQUENTLY ASKED</h2>

          <div className="space-y-8">
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-4">How quickly can I get started with GenX?</h3>
              <p className="text-gray">
                Most customers are up and running within days. Our onboarding team
                will guide you through setup and initial agent creation.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-4">Do I need technical expertise?</h3>
              <p className="text-gray">
                No. GenX is designed for business users. Our visual workflow builder
                requires no coding knowledge.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-4">Are you AI compliance ready?</h3>
              <p className="text-gray">
                Yes. Designed with compliance at its core.
                We are AI compliance ready and adhere to enterprise-grade security and governance standards.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-4">Can I try before buying?</h3>
              <p className="text-gray">
                Yes. We offer personalized demos and proof-of-concept projects
                for qualified enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}