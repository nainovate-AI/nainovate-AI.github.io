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
    <section className="py-8 md:py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-fg-muted uppercase mb-3">
            USE CASES
          </p>
          <h2 className="heading-primary">
            <span>CROSS-FUNCTIONAL</span>
            <br />
            <span>WORKFLOWS.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {useCases.map((u, i) => (
            <div
              key={i}
              className="group border-t border-border hover:bg-fg-strong hover:text-fg-invert transition-all duration-500 cursor-pointer"
              onClick={() => router.push(u.link)}
            >
              <div className="py-4 md:py-6 grid md:grid-cols-3 gap-3 md:gap-6 md:items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-fg-muted group-hover:text-[color-mix(in_oklab,var(--fg-invert)_55%,transparent)] tabular-nums">
                    {u.number}
                  </span>
                  <h3 className="text-sm md:text-base font-medium tracking-wide">{u.name}</h3>
                </div>
                <p className="text-lg md:text-xl font-bold leading-snug">{u.metric}</p>
                <p className="text-sm md:text-base text-fg-muted group-hover:text-[color-mix(in_oklab,var(--fg-invert)_75%,transparent)] leading-relaxed">{u.description}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
