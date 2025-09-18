// import { GlassCube } from '@/components/ui/GlassCube';
import Link from 'next/link';
import { NeuralNetwork } from '@/components/ui/NeuralNetwork';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.05em]">
                <span className="block">AI THAT</span>
                <span className="block">WORKS</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray max-w-md">
              GenX delivers enterprise AI agents in days, not months. 
              Built for scale. Designed for reality.
            </p>
            
            <div className="flex gap-8">
              <Link href="/contact">
                <button className="group relative overflow-hidden ">
                  <span className="relative z-10 block px-8 py-4 font-medium transition-colors duration-500 group-hover:text-black">
                    START BUILDING
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </Link>
              
              {/* <button className="px-8 py-4 font-medium text-gray hover:text-white transition-colors">
                WATCH DEMO
              </button> */}
            </div>
          </div>
          <div className="relative h-[500px]">
            <NeuralNetwork />
          </div>

          {/* <div className="relative h-[500px]">
            <GlassCube />
          </div> */}
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}