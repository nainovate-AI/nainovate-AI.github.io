'use client';

import { useState, useEffect, useRef } from 'react';
import JsonLd from '@/components/seo/JsonLd';
import { trackEvent } from '@/lib/analytics';
import { TURNSTILE_SITE_KEY } from '@/lib/turnstile';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CTA } from '@/components/ui/CTA';

const faqs = [
  {
    q: 'How quickly can I get started with GenX?',
    a: 'Most customers are up and running within days. Our onboarding team will guide you through setup and initial agent creation.',
  },
  {
    q: 'Do I need technical expertise?',
    a: 'No. GenX is designed for business users. Our visual workflow builder requires no coding knowledge.',
  },
  {
    q: 'Are you AI compliance ready?',
    a: 'Yes. Designed with compliance at its core. We are AI compliance ready and adhere to enterprise-grade security and governance standards.',
  },
  {
    q: 'Can I try before buying?',
    a: 'Yes. We offer personalized demos and proof-of-concept projects for qualified enterprises.',
  },
];

const highlights = [
  { label: '24-hour response time' },
  { label: 'Free initial consultation' },
  { label: '100% confidential' },
];

export default function ContactPageClient() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Nainovate Technologies',
      url: 'https://www.nainovate.ai',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'info@nainovate.ai',
        url: 'https://www.nainovate.ai/contact',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'Global',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'HITEC City, Cyberabad',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500081',
        addressCountry: 'IN',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Cloudflare Turnstile — bot check. Explicit render so it plays nicely with
  // React and gives us a widget id to read/reset. The token is single-use and
  // expires, so we read it at submit time and reset after each send.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    const render = () => {
      if (!turnstileRef.current || !window.turnstile || turnstileWidgetId.current !== null) return;
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        callback: (token: string) => setTurnstileToken(token),
        'error-callback': () => setTurnstileToken(''),
        'expired-callback': () => setTurnstileToken(''),
      });
    };
    if (window.turnstile) {
      render();
      return;
    }
    // Script loads async via next/script; poll briefly until the API is ready.
    const poll = setInterval(() => {
      if (window.turnstile) {
        clearInterval(poll);
        render();
      }
    }, 200);
    return () => clearInterval(poll);
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken('');
    if (window.turnstile && turnstileWidgetId.current !== null) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: a hidden field no human fills. If it has a value, it's a bot —
    // drop it silently (pretend success so the bot gets no signal to adapt).
    if (honeypotRef.current?.value) {
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    // Require a Turnstile token before sending. The Apps Script verifies it
    // server-side — the real gate — but blocking here avoids a wasted request.
    if (!turnstileToken) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

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
      form.append('formDataNameOrder', JSON.stringify(['name', 'email', 'company', 'interest', 'message']));
      // Bot-check fields — the Apps Script verifies these before saving.
      form.append('turnstileToken', turnstileToken);
      form.append('honeypot', honeypotRef.current?.value || '');
      await fetch(SCRIPT_URL, { method: 'POST', body: form });
      trackEvent('contact_submit', { interest: formData.interest || 'unspecified' });
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' });
      resetTurnstile();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      resetTurnstile();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-0 py-3 bg-transparent border-b border-border focus:border-fg-strong outline-none transition-colors duration-300 text-body-md text-fg-strong placeholder:text-fg-faint';

  return (
    <main className="pt-20 bg-bg">
      <JsonLd data={faqSchema} />
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <Section spacing="xl" className="relative overflow-hidden grain">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 w-[42vw] h-[42vw] rounded-full bg-fg-strong/[0.03] blur-[120px]" />
        </div>
        <Container size="wide" className="relative">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="muted" withDot className="mb-8">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-h2 mb-10">
                <span className="block text-fg-strong">Let&apos;s</span>
                <span className="block text-gradient-aurora">connect.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-fg-mid max-w-3xl leading-relaxed">
                Ready to transform your business with AI? Our team is here to help
                you get started.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Form + Info */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Get in touch</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2 mb-10 md:mb-14">
                  <span className="block text-fg-strong">Tell us about</span>
                  <span className="block text-gradient-aurora">your project.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <label className="block text-eyebrow text-fg-mid mb-3">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-eyebrow text-fg-mid mb-3">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-eyebrow text-fg-mid mb-3">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-eyebrow text-fg-mid mb-3">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required className={inputClass} placeholder="Company Name" />
                  </div>
                  <div>
                    <label className="block text-eyebrow text-fg-mid mb-3">Interest</label>
                    <select name="interest" value={formData.interest} onChange={handleChange} required className={`${inputClass} cursor-pointer`}>
                      <option value="" className="bg-bg">Select your interest</option>
                      <option value="demo" className="bg-bg">Product Demo</option>
                      <option value="pricing" className="bg-bg">Pricing Information</option>
                      <option value="partnership" className="bg-bg">Partnership</option>
                      <option value="support" className="bg-bg">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-eyebrow text-fg-mid mb-3">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>

                  {/* Honeypot — invisible to humans, off-screen (not display:none,
                      which some bots skip). If filled, the submit is dropped. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
                    <label>
                      Website
                      <input
                        ref={honeypotRef}
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        defaultValue=""
                      />
                    </label>
                  </div>

                  {/* Cloudflare Turnstile bot-check widget */}
                  <div ref={turnstileRef} className="min-h-[65px]" />

                  {submitStatus === 'success' && (
                    <p className="text-body-md text-success">Thank you! Your message has been sent successfully.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-body-md text-danger">
                      {turnstileToken ? 'Something went wrong. Please try again.' : 'Please complete the verification below, then try again.'}
                    </p>
                  )}

                  <CTA type="submit" disabled={isSubmitting} variant="solid" size="lg" arrow>
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </CTA>
                </form>
              </Reveal>
            </div>

            {/* Info sidebar */}
            <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">Let&apos;s connect</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-body-lg text-fg-mid mb-10 leading-relaxed">
                  Ready to explore how AI can transform your business? Let&apos;s discuss your needs.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-t border-border py-8 space-y-4">
                  {highlights.map((h) => (
                    <div key={h.label} className="flex items-center gap-4">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-fg-strong" />
                      <p className="text-body-md text-fg-mid">{h.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border-t border-border pt-8">
                  <h3 className="text-eyebrow text-fg-strong mb-5">Visit us</h3>
                  <div className="rounded-xl2 border border-border mb-5 overflow-hidden aspect-[16/10] sm:aspect-video min-h-[220px]">
                    <iframe
                      title="Nainovate Hyderabad office location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121826.27689281755!2d78.27798406762885!3d17.408372669616604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952200059677%3A0xac28e1d107bc3e57!2sAVK%20SRI%20Harsha%20Icon!5e0!3m2!1sen!2sin!4v1753865250238!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <address className="not-italic text-body-sm text-fg-mid">
                    <strong className="text-fg-strong text-body-md block mb-1">Nainovate Technologies</strong>
                    HITEC City, Cyberabad<br />
                    Hyderabad, Telangana 500081
                  </address>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="muted" withDot className="mb-5">FAQ</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-h2">
                  <span className="block text-fg-strong">Frequently</span>
                  <span className="block text-gradient-aurora">asked.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="border-t border-border-strong">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <RevealItem key={f.q}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group focus-visible:outline-none"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-h4 text-fg-strong">{f.q}</h3>
                      <span aria-hidden="true" className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-border-strong text-fg-mid group-hover:text-fg-strong group-hover:border-fg-strong transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-out-quart ${isOpen ? 'grid-rows-[1fr] pb-8 md:pb-10 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="min-h-0">
                        <p className="text-body-lg text-fg-mid leading-relaxed max-w-3xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>
    </main>
  );
}
