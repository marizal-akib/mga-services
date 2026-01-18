import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center overflow-hidden">
          <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
            <img 
              src={isScrolled ? "/assests/Logo and icons/logo-with_gold.png" : "/assests/Logo and icons/white_logo.png"} 
              alt="MGA Services" 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full transition-all duration-500"
              style={{ 
                height: '140%',
                objectFit: 'cover', 
                objectPosition: 'left center'
              }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-wider font-medium hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-dark-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'white'} onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-dark-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-dark-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-dark-900 text-lg font-serif font-medium border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full" onClick={() => {
             setIsMobileMenuOpen(false);
             document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Book Service
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;