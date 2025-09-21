import { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Nainovate - Get Started with Enterprise AI Solutions',
  description: 'Contact Nainovate for AI platform demos, pricing, and partnerships. Located in Hyderabad, serving global enterprises. 24-hour response time. Schedule your free consultation today.',
  keywords: 'contact Nainovate, AI platform demo, enterprise AI pricing, AI consultation, Hyderabad AI company',
  openGraph: {
    title: 'Contact Nainovate - Start Your AI Transformation',
    description: 'Get in touch for demos, pricing, and partnership opportunities. Transform your business with AI.'
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}