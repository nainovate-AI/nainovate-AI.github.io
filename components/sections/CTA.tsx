import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-5xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            THE VISION
          </p>
          <h2 className="heading-primary mb-4 md:mb-6">
            <span className="block">WHEN ONE FUNCTION DETECTS A SIGNAL,</span>
            <span className="block">THE ORGANIZATION RESPONDS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-fg-muted max-w-3xl mb-8 md:mb-12 leading-relaxed">
            Partner with us to define the Decision Intelligence category and lead
            the next generation of enterprise operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-14">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all">
                GET STARTED
              </button>
            </Link>
            <a href="https://calendly.com/naveen-nainovate/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all">
                SCHEDULE DEMO
              </button>
            </a>
          </div>

          <div className="border-t border-border pt-6 md:pt-8 flex flex-wrap gap-6 text-xs tracking-[0.08em] uppercase text-fg-muted">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fg-strong/70" />
              Enterprise Ready
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fg-strong/70" />
              SOC 2 Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fg-strong/70" />
              12 Design Partners
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fg-strong/70" />
              3 Active Pilots
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
