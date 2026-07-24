import Link from 'next/link';

export function CTA() {
  return (
    <section className="flex items-center py-16 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-5xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4 md:mb-8">
            THE VISION
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.95] md:leading-[0.85] tracking-[-0.03em] md:tracking-[-0.05em] mb-6 md:mb-12">
            <span className="block">WHEN ONE FUNCTION</span>
            <span className="block text-gray">DETECTS A SIGNAL,</span>
            <span className="block">THE ORGANIZATION</span>
            <span className="block text-gray">RESPONDS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray max-w-3xl mb-8 md:mb-14 leading-relaxed">
            Partner with us to define the Decision Intelligence category and lead
            the next generation of enterprise operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-10 md:mb-16">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group relative overflow-hidden border border-white w-full sm:w-auto">
                <span className="relative z-10 block px-8 py-4 sm:px-12 sm:py-6 font-medium text-base sm:text-lg transition-colors duration-500 group-hover:text-black">
                  GET STARTED
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </Link>
            <a href="https://calendly.com/naveen-nainovate/30min" className="w-full sm:w-auto">
              <button className="group relative overflow-hidden border border-white/40 w-full sm:w-auto">
                <span className="relative z-10 block px-8 py-4 sm:px-12 sm:py-6 font-medium text-base sm:text-lg transition-colors duration-500 group-hover:text-black">
                  SCHEDULE DEMO
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-4 text-[10px] sm:text-xs tracking-widest uppercase text-gray">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70" />
              Enterprise Ready
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70" />
              SOC 2 Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70" />
              12 Design Partners
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70" />
              3 Active Pilots
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
