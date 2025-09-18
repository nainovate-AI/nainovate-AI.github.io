
import Link from 'next/link';

export function CTA() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <h2 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.05em] mb-12">
            <span className="block">READY TO</span>
            <span className="block text-gray">START?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <Link href="/contact">
              <button className="group relative overflow-hidden border border-white">
                <span className="relative z-10 block px-12 py-6 font-medium text-lg transition-colors duration-500 group-hover:text-black">
                  GET STARTED
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </Link>
            <a href="https://calendly.com/naveen-nainovate/30min">
              <button className="group relative overflow-hidden border border-white">
                <span className="relative z-10 block px-12 py-6 font-medium text-lg transition-colors duration-500 group-hover:text-black">
                  SCHEDULE DEMO
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}