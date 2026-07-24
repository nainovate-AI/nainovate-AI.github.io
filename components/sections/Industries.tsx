'use client';

import { useRouter } from 'next/navigation';

export function Industries() {
  const router = useRouter();

  const useCases = [
    {
      number: '01',
      name: 'CUSTOMER SUCCESS',
      metric: 'Churn prevention',
      description: 'Detect engagement drop, trigger retention playbooks, alert CS + Product teams. Pilot deflection 75%, retention lift 40%.',
      link: '/solutions/customer-success',
    },
    {
      number: '02',
      name: 'CUSTOMER SUPPORT',
      metric: 'Revenue protection',
      description: 'Delivery-delay signal flows to Sales, CS, Finance simultaneously. Churn reduction 85%, revenue protected $2M+.',
      link: '/solutions/customer-support',
    },
    {
      number: '03',
      name: 'SALES',
      metric: 'Capacity check',
      description: 'Deal-closure signal auto-checks Delivery + Finance capacity before closing. On-time delivery 95%, margin lift 15%.',
      link: '/solutions/sales',
    },
    {
      number: '04',
      name: 'DELIVERY',
      metric: 'Multi-team response',
      description: 'Usage decline notifies Product + Sales + CS in one hop. Response speed 60% faster, coordination cost cut 3x.',
      link: '/solutions/delivery',
    },
  ];

  return (
    <section className="py-16 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-20 max-w-4xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-gray uppercase mb-4 md:mb-8">
            USE CASES
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] md:leading-[0.9] tracking-[-0.03em] md:tracking-[-0.04em]">
            <span className="text-gray">CROSS-FUNCTIONAL</span>
            <br />
            <span>WORKFLOWS.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {useCases.map((u, i) => (
            <div
              key={i}
              className="group border-t border-white/10 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
              onClick={() => router.push(u.link)}
            >
              <div className="py-6 md:py-12 grid md:grid-cols-3 gap-3 md:gap-8 md:items-center">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-4xl md:text-6xl font-bold text-gray group-hover:text-black/30">
                    {u.number}
                  </span>
                  <h3 className="text-lg md:text-2xl font-medium">{u.name}</h3>
                </div>
                <p className="text-2xl md:text-4xl font-bold">{u.metric}</p>
                <p className="text-sm md:text-base text-gray group-hover:text-black/60">{u.description}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
