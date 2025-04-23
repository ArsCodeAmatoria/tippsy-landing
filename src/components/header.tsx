"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Add a state to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ref for the mobile menu container
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Prevent hydration errors by only rendering full content after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
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
    
    return pathname.includes(href) && href !== '/';
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Menu - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/#features"
              className={`font-medium text-lg transition-colors ${isLinkActive("/#features") ? 'text-[#ff007F]' : 'text-gray-200 hover:text-[#ff007F]'}`}
            >
              Features
            </Link>
            <Link 
              href="/about"
              className={`font-medium text-lg transition-colors ${isLinkActive("/about") ? 'text-[#ff007F]' : 'text-gray-200 hover:text-[#ff007F]'}`}
            >
              About Us
            </Link>
            <Link 
              href="/partner"
              className={`font-medium text-lg transition-colors ${isLinkActive("/partner") ? 'text-[#ff007F]' : 'text-gray-200 hover:text-[#ff007F]'}`}
            >
              Partner With Us
            </Link>
            <Link 
              href="/#contact"
              className={`font-medium text-lg transition-colors ${isLinkActive("/#contact") ? 'text-[#ff007F]' : 'text-gray-200 hover:text-[#ff007F]'}`}
            >
              Contact
            </Link>
            <Button 
              className="ml-4 bg-[#ff007F] hover:bg-[#d00068] text-white"
              asChild
            >
              <Link href="/#download">Get App</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-200 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
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
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="p-5 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-200 focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/#features"
              className={`font-medium text-xl transition-colors ${isLinkActive("/#features") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              Features
            </Link>
            <Link 
              href="/about"
              className={`font-medium text-xl transition-colors ${isLinkActive("/about") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              href="/partner"
              className={`font-medium text-xl transition-colors ${isLinkActive("/partner") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              Partner With Us
            </Link>
            <Link 
              href="/#contact"
              className={`font-medium text-xl transition-colors ${isLinkActive("/#contact") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            
            {/* Privacy Policy */}
            <Link 
              href="/privacy"
              className={`font-medium text-xl transition-colors ${isLinkActive("/privacy") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              Privacy Policy
            </Link>
            
            {/* Terms of Service */}
            <Link 
              href="/terms"
              className={`font-medium text-xl transition-colors ${isLinkActive("/terms") ? 'text-[#ff007F]' : 'text-gray-200'}`}
              onClick={toggleMobileMenu}
            >
              Terms of Service
            </Link>

            <Button 
              className="mt-2 w-full bg-[#ff007F] hover:bg-[#d00068] text-white"
              asChild
            >
              <Link href="/#download" onClick={toggleMobileMenu}>Get App</Link>
            </Button>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-gray-700 mt-8">
            <p className="text-gray-400 text-sm mb-4">© 2024 Tippsy. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header; 