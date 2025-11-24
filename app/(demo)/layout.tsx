import type { Metadata } from 'next';
import '../globals.css';
import { inter } from '../fonts';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Building Permits Portal - Interactive Demo | Nainovate',
  description: 'Experience the GenX platform with conversational AI, analytics dashboard, and workflow automation.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black`} suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}