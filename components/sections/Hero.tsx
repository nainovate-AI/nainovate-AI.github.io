import Link from 'next/link';
import { HeroSlideshow } from '@/components/ui/HeroSlideshow';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 md:space-y-10 min-w-0">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.9] lg:leading-[0.85] tracking-[-0.04em] lg:tracking-[-0.05em]">
                <span className="block">DECISION</span>
                <span className="block text-gray">INTELLIGENCE.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray max-w-lg leading-relaxed">
              Detect signals across business functions. Propagate insights
              cross-functionally. Orchestrate intelligent responses in real-time.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
              <Link href="/demo" className="w-full sm:w-auto">
                <button className="group relative overflow-hidden border border-white w-full sm:w-auto">
                  <span className="relative z-10 block px-6 py-3 sm:px-8 sm:py-4 font-medium transition-colors duration-500 group-hover:text-black">
                    WATCH DEMO
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </Link>

              <a href="https://calendly.com/naveen-nainovate/30min" className="w-full sm:w-auto">
                <button className="group relative overflow-hidden border border-white/40 w-full sm:w-auto">
                  <span className="relative z-10 block px-6 py-3 sm:px-8 sm:py-4 font-medium transition-colors duration-500 group-hover:text-black">
                    SCHEDULE DEMO
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </a>
            </div>
          </div>

          <div className="relative w-full min-w-0 aspect-[2556/1264] max-w-[900px] mx-auto lg:mx-0 lg:ml-auto">
            <HeroSlideshow />
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-10">
          {[
            { n: '99.9%', l: 'Accuracy' },
            { n: '50ms', l: 'Response Time' },
            { n: '500+', l: 'Integrations' },
            { n: '24/7', l: 'Availability' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{s.n}</div>
              <div className="text-[10px] sm:text-xs tracking-widest uppercase text-gray mt-1 sm:mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
