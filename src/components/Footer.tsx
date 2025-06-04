
import React from 'react';
import { ArrowUp, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-deep-purple text-white py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-festival-purple to-deep-purple opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-neon-yellow mb-4">About The Crowd Concert</h3>
            <p className="text-white/80 mb-4">
              The biggest youth festival bringing together music, culture, and community. 
              An unforgettable experience for the next generation.
            </p>
            <div className="text-sm text-white/60">
              <p>Presented by Youth Connect</p>
              <p>Produced by HypeVibe Media</p>
              <p>Hosted by Hypeman Gpee</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-neon-yellow mb-4">Quick Links</h3>
            <div className="space-y-2 text-white/80">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-neon-yellow transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-neon-yellow transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-neon-yellow transition-colors"
              >
                Map & Directions
              </button>
              <button 
                onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-neon-yellow transition-colors"
              >
                Tickets
              </button>
              <a href="#" className="block hover:text-neon-yellow transition-colors">Terms & Conditions</a>
              <a href="#" className="block hover:text-neon-yellow transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold text-neon-yellow mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-yellow hover:text-deep-purple transition-all">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-yellow hover:text-deep-purple transition-all">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-yellow hover:text-deep-purple transition-all">
                📱
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-yellow hover:text-deep-purple transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-white/80">
              <p className="mb-2">📧 info@crowdconcert.com</p>
              <p className="mb-2">📞 +234 801 844 6363</p>
              <p>📞 +234 813 486 3909</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Youth Connect | Crowd Concert. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-festival-purple rounded-full flex items-center justify-center text-white hover:bg-neon-yellow hover:text-deep-purple transition-all duration-300 hover:scale-110 z-40 shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
