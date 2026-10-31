import React, { useState, useEffect } from 'react';
import { Calendar, Menu, Sparkles } from 'lucide-react';
import EmblemLogo from './EmblemLogo';

export default function Navbar({ onOpenBooking, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-10 lg:px-12 ${
      scrolled 
        ? 'bg-[#161412]/95 backdrop-blur-md pt-4 pb-4 border-b border-[#2D2620] shadow-xl' 
        : 'bg-transparent pt-6 sm:pt-8 md:pt-10 pb-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Left matching mockup */}
        <a href="#">
          <EmblemLogo />
        </a>

        {/* Action Buttons Right matching mockup (GRAB A COFFEE & MENU) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Main Booking Pill Button */}
          <button 
            onClick={onOpenBooking}
            className="btn-pill-cream"
          >
            <div className="btn-icon-circle">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">BOOK A SESSION</span>
            <span className="sm:hidden">BOOK</span>
          </button>

          {/* Menu Drawer Pill Button */}
          <button 
            onClick={onOpenMenu}
            className="btn-pill-dark"
          >
            <div className="btn-icon-circle">
              <Menu className="w-4 h-4" />
            </div>
            <span>MENU</span>
          </button>

        </div>

      </div>
    </header>
  );
}
