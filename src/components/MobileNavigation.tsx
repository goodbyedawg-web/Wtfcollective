'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

interface MobileNavigationProps {
  currentPage?: string;
}

export default function MobileNavigation({ currentPage = '' }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-4">
        <ThemeSwitcher />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-4 text-yellow-400 dark:text-yellow-400 light:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-red-600 dark:border-red-600 light:border-blue-600 mt-4 pt-4">
          <nav className="flex flex-col space-y-2 text-sm uppercase tracking-wide">
            <Link href="/blog" className={`hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition py-2 ${currentPage === 'blog' ? 'text-yellow-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/louisville-ky" className={`hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition py-2 ${currentPage === 'louisville-ky' ? 'text-yellow-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Louisville KY</Link>
            <Link href="/about" className={`hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition py-2 ${currentPage === 'about' ? 'text-yellow-400' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className={`hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition py-2 ${currentPage === 'contact' ? 'text-yellow-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}