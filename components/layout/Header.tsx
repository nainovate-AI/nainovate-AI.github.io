'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Icon components (same as before)
const BuildIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DeployIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const OrchestrateIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation: NavItem[] = [
    { 
      name: 'Products', 
      href: '/products',
      isDropdown: true,
      dropdownItems: [
        { 
          name: 'Build', 
          href: '/products/build',
          icon: <BuildIcon />,
          description: 'Create AI agents with GenX'
        },
        { 
          name: 'Deploy', 
          href: '/products/deploy',
          icon: <DeployIcon />,
          description: 'Launch intelligent agents'
        },
        { 
          name: 'Orchestrate', 
          href: '/products/orchestrate',
          icon: <OrchestrateIcon />,
          description: 'Design AI workflows'
        },
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      isDropdown: false,
      dropdownItems: [
        { name: 'Overview', href: '/solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Education', href: '/solutions/education' },
        { name: 'Real Estate', href: '/solutions/real-estate' },
        { name: 'Construction', href: '/solutions/construction' },
      ]
    },
    { 
      name: 'Company', 
      href: '/about',
      isDropdown: true,
      dropdownItems: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ]
    },
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
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.isDropdown ? (
                  <>
                    <button 
                      className="text-sm hover:text-gray transition-colors py-2 uppercase tracking-wider"
                      onMouseEnter={() => setActiveDropdown(item.name)}
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
          <div className="md:hidden py-4 border-t border-white/10 mt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.isDropdown ? (
                  <>
                    <p className="py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">{item.name}</p>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block py-2 pl-4 text-sm text-gray-600 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </>
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
            <button className="mt-4 w-full text-sm font-medium px-6 py-2 border border-white hover:bg-white hover:text-black transition-all">
              GET STARTED
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}