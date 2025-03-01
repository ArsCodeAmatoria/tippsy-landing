"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/language-context';

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-provider"
import { Logo } from "@/components/logo"
import { LanguageSelector } from "@/components/language-selector"

const Header: React.FC = () => {
  const { language, t, toggleLanguage, isSpanish } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add a state to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ref for the mobile menu container
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Helper function to check if the link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    
    if (isSpanish() && href !== '/') {
      const esPrefix = '/es';
      // Special case for Spanish home
      if (href === '/es') {
        return pathname === '/es';
      }
      // Remove /es from pathname for comparison
      const pathWithoutEs = pathname.startsWith(esPrefix) 
        ? pathname.slice(esPrefix.length) 
        : pathname;
      
      if (href.startsWith(esPrefix)) {
        return pathWithoutEs === href.slice(esPrefix.length);
      }
      
      return pathWithoutEs === href;
    }
    
    if (!isSpanish() && pathname.startsWith('/es')) {
      // If we're on a Spanish page but language is English, we should highlight the English equivalent
      const pathWithoutEs = pathname.slice(3); // Remove /es
      return pathWithoutEs === href || pathname === href;
    }
    
    return pathname.includes(href) && href !== '/';
  };
  
  const getCorrectPath = (href: string) => {
    if (href === '/') {
      return isSpanish() ? '/es' : '/';
    }
    
    // If the link is to a specific page
    if (href !== '/' && href !== '/es') {
      // If the current language is Spanish and the href doesn't already have /es
      if (isSpanish() && !href.startsWith('/es')) {
        // Make sure we don't double-add /es for paths that already have an /es/ subfolder
        if (href.includes('/es/')) {
          return href;
        }
        return `/es${href}`;
      }
      
      // If the current language is English and the href has /es
      if (!isSpanish() && href.startsWith('/es')) {
        return href.slice(3); // Remove /es prefix
      }
    }
    
    return href;
  };

  // Helper to get section links based on language
  const getFeaturesSectionPath = () => {
    return isSpanish() ? "/es#features" : "/#features";
  };

  const getContactSectionPath = () => {
    return isSpanish() ? "/es#contact" : "/#contact";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={isSpanish() ? "/es" : "/"} className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Menu - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              href={getFeaturesSectionPath()}
              className={`font-medium text-lg transition-colors ${isLinkActive("/#features") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200 hover:text-[#ff007F]'}`}
            >
              {t("nav.features")}
            </Link>
            <Link 
              href={isSpanish() ? "/es/about" : "/about"}
              className={`font-medium text-lg transition-colors ${isLinkActive("/about") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200 hover:text-[#ff007F]'}`}
            >
              {t("nav.about")}
            </Link>
            <Link 
              href={isSpanish() ? "/es/partner" : "/partner"}
              className={`font-medium text-lg transition-colors ${isLinkActive("/partner") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200 hover:text-[#ff007F]'}`}
            >
              {t("nav.partner")}
            </Link>
            <Link 
              href={getContactSectionPath()}
              className={`font-medium text-lg transition-colors ${isLinkActive("/#contact") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200 hover:text-[#ff007F]'}`}
            >
              {t("nav.contact")}
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <LanguageSelector />
              <ModeToggle />
            </div>
          </nav>
          
          {/* Mobile Menu Button and Language Toggle - Visible only on mobile */}
          <div className="md:hidden flex items-center">
            <LanguageSelector />
            <ModeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Slides in from the right */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="p-5 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link 
              href={getFeaturesSectionPath()}
              className={`font-medium text-xl transition-colors ${isLinkActive("/#features") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              {t("nav.features")}
            </Link>
            <Link 
              href={isSpanish() ? "/es/about" : "/about"}
              className={`font-medium text-xl transition-colors ${isLinkActive("/about") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              {t("nav.about")}
            </Link>
            <Link 
              href={isSpanish() ? "/es/partner" : "/partner"}
              className={`font-medium text-xl transition-colors ${isLinkActive("/partner") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              {t("nav.partner")}
            </Link>
            <Link 
              href={getContactSectionPath()}
              className={`font-medium text-xl transition-colors ${isLinkActive("/#contact") ? 'text-[#ff007F]' : 'text-gray-800 dark:text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              {t("nav.contact")}
            </Link>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header; 