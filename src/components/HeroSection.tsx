
import React from 'react';

const HeroSection = () => {
  const scrollToTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow via-festival-orange to-festival-red">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/40 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Stage Truss Top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent"></div>
        
        {/* Spotlights */}
        <div className="absolute top-4 left-1/4 w-4 h-12 bg-black/80 rounded-b-lg"></div>
        <div className="absolute top-4 left-1/2 w-4 h-12 bg-black/80 rounded-b-lg"></div>
        <div className="absolute top-4 right-1/4 w-4 h-12 bg-black/80 rounded-b-lg"></div>
        
        {/* Light Beams */}
        <div className="absolute top-16 left-1/4 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent animate-spotlight"></div>
        <div className="absolute top-16 left-1/2 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent animate-spotlight" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-16 right-1/4 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent animate-spotlight" style={{animationDelay: '2s'}}></div>

        {/* Speakers Left */}
        <div className="absolute left-8 bottom-20 md:left-16 md:bottom-32">
          <div className="w-12 h-20 md:w-20 md:h-32 bg-black/80 rounded-lg border-2 border-festival-purple">
            <div className="w-6 h-6 md:w-10 md:h-10 bg-deep-purple rounded-full mx-auto mt-2 md:mt-4"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-festival-magenta rounded-full mx-auto mt-2"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-festival-magenta rounded-full mx-auto mt-1"></div>
          </div>
          <div className="w-16 h-8 md:w-24 md:h-12 bg-black/60 rounded-b-lg -mt-1"></div>
        </div>

        {/* Speakers Right */}
        <div className="absolute right-8 bottom-20 md:right-16 md:bottom-32">
          <div className="w-12 h-20 md:w-20 md:h-32 bg-black/80 rounded-lg border-2 border-festival-purple">
            <div className="w-6 h-6 md:w-10 md:h-10 bg-deep-purple rounded-full mx-auto mt-2 md:mt-4"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-festival-magenta rounded-full mx-auto mt-2"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-festival-magenta rounded-full mx-auto mt-1"></div>
          </div>
          <div className="w-16 h-8 md:w-24 md:h-12 bg-black/60 rounded-b-lg -mt-1"></div>
        </div>

        {/* Festival Bunting */}
        <div className="absolute top-16 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-6 h-8 bg-hot-pink clip-triangle"></div>
            <div className="w-6 h-8 bg-electric-green clip-triangle"></div>
            <div className="w-6 h-8 bg-neon-yellow clip-triangle"></div>
            <div className="w-6 h-8 bg-festival-purple clip-triangle"></div>
            <div className="w-6 h-8 bg-hot-pink clip-triangle"></div>
          </div>
        </div>

        {/* Floating Confetti */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-neon-yellow rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-hot-pink rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-electric-green rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-festival-purple rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Youth Connect Presents */}
        <div className="mb-4">
          <span className="text-white/90 text-sm md:text-base font-medium tracking-widest uppercase">
            Youth Connect Presents
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-festival font-black text-neon-yellow mb-4 leading-none">
          <span className="block drop-shadow-2xl" style={{
            textShadow: '4px 4px 0px #2E1065, 8px 8px 20px rgba(0,0,0,0.5)'
          }}>
            THE
          </span>
          <span className="block drop-shadow-2xl -mt-4" style={{
            textShadow: '4px 4px 0px #2E1065, 8px 8px 20px rgba(0,0,0,0.5)'
          }}>
            CROWD
          </span>
          <span className="block drop-shadow-2xl -mt-4" style={{
            textShadow: '4px 4px 0px #2E1065, 8px 8px 20px rgba(0,0,0,0.5)'
          }}>
            CONCERT
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-white text-lg md:text-xl font-medium tracking-wide uppercase">
            (The Biggest Youth Connect Festival)
          </p>
        </div>

        {/* Host Info */}
        <div className="mb-8 p-4 bg-electric-green/90 rounded-lg inline-block">
          <p className="text-white font-semibold mb-1">Brought to you by:</p>
          <p className="text-white font-bold text-lg">HYPEVIBE MEDIA</p>
          <p className="text-white font-semibold mb-1">Hosted by:</p>
          <p className="text-white font-bold text-lg">BLAZING CREATIVES</p>
          <p className="text-white font-bold text-lg">HYPEMAN GPEE</p>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <button 
            onClick={scrollToTickets}
            className="bg-deep-purple text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-festival-purple/50 animate-glow-pulse"
          >
            Get Tickets Now
          </button>
          
          <div className="text-white/80 text-sm">
            <p>Saturday, June 21, 2025 • 4:00 PM - 11:00 PM</p>
            <p>Lagos Open Air Arena</p>
          </div>
        </div>
      </div>

      {/* Bottom Crowd Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
