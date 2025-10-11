'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Icon components
const PlatformIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const CoreIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const NiaIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const FlowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Type definitions
interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  isDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation: NavItem[] = [
    {
      name: 'Products',
      href: '/products',
      isDropdown: true,
      dropdownItems: [
        {
          name: 'GenX Platform',
          href: '/products',
          icon: <PlatformIcon />,
          description: 'Complete AI automation platform'
        },
        {
          name: 'CORE - AI Engine',
          href: '/products/core',
          icon: <CoreIcon />,
          description: 'Create intelligent agents'
        },
        {
          name: 'NIA - Interface Layer',
          href: '/products/nia',
          icon: <NiaIcon />,
          description: 'Deploy conversational AI'
        },
        {
          name: 'FLOW - Automation',
          href: '/products/flow',
          icon: <FlowIcon />,
          description: 'Orchestrate workflows'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      isDropdown: false,
    },
    // {
    //   name: 'Resources',
    //   href: '#',
    //   isDropdown: true,
    //   dropdownItems: [
    //     {
    //       name: 'AI Readiness',
    //       href: '/ai-readiness-report',
    //       icon: <InfoIcon />,
    //       description: 'Industry report'
    //     }
    //   ]
    // },
    {
      name: 'Company',
      href: '#',
      isDropdown: true,
      dropdownItems: [
        {
          name: 'About',
          href: '/about',
          icon: <InfoIcon />,
          description: 'Our mission'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: <ContactIcon />,
          description: 'Get in touch'
        }
      ]
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Nainovate_GenX_Dark_Mode.svg"
              alt="Nainovate"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isDropdown ? (
                  <>
                    <button
                      className="text-sm hover:text-gray transition-colors py-2 uppercase tracking-wider"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => {
                        if (item.name === 'Products') window.location.href = item.href;
                      }}
                    >
                      {item.name}
                    </button>
                    
                    {/* Enhanced Dropdown with Icons */}
                    <div 
                      className={`absolute left-0 top-full pt-2 ${
                        activeDropdown === item.name ? 'block' : 'hidden'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="absolute -top-2 left-0 right-0 h-2" />
                      
                      <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-lg py-2 min-w-[250px]">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 px-6 py-3 hover:bg-white/5 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.icon && (
                              <span className="text-gray-400 group-hover:text-white transition-colors mt-1">
                                {dropdownItem.icon}
                              </span>
                            )}
                            <div className="flex-1">
                              <span className="block text-sm text-white group-hover:text-white transition-colors">
                                {dropdownItem.name}
                              </span>
                              {dropdownItem.description && (
                                <span className="block text-xs text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray transition-colors py-2 uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/contact">
              <button className="text-sm font-medium px-6 py-2 border border-white hover:bg-white hover:text-black transition-all">
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.isDropdown ? (
                  <div>
                    <p className="text-sm font-medium text-gray uppercase tracking-wider py-2">
                      {item.name}
                    </p>
                    <div className="pl-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-sm hover:text-gray transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm hover:text-gray transition-colors uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="text-sm font-medium px-6 py-2 border border-white hover:bg-white hover:text-black transition-all mt-4 w-full">
                GET STARTED
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}