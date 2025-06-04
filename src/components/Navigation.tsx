
import React, { useState, useEffect } from 'react';
import { Ticket } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-yellow to-festival-orange rounded-full flex items-center justify-center">
              <span className="text-deep-purple font-bold text-sm">CC</span>
            </div>
            <span className="text-white font-festival font-bold text-lg">
              The Crowd Concert
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-neon-yellow transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-neon-yellow transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('map')}
              className="text-white hover:text-neon-yellow transition-colors"
            >
              Map & Directions
            </button>
            <button 
              onClick={() => scrollToSection('tickets')}
              className="text-white hover:text-neon-yellow transition-colors"
            >
              Tickets
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('tickets')}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-festival-purple to-festival-magenta text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-festival-purple/30"
          >
            <Ticket className="w-4 h-4" />
            <span>Buy Tickets</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white mt-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white mt-1 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-lg p-4 border border-white/10">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-neon-yellow transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-neon-yellow transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('map')}
                className="text-white hover:text-neon-yellow transition-colors text-left"
              >
                Map & Directions
              </button>
              <button 
                onClick={() => scrollToSection('tickets')}
                className="text-white hover:text-neon-yellow transition-colors text-left"
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection('tickets')}
                className="flex items-center space-x-2 bg-gradient-to-r from-festival-purple to-festival-magenta text-white px-4 py-2 rounded-full mt-2 w-fit"
              >
                <Ticket className="w-4 h-4" />
                <span>Buy Tickets</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
