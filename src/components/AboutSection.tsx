
import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Calendar, Clock, MapPin, Mic, Users, Headphones } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-festival-purple to-deep-purple">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-neon-yellow/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-hot-pink/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-electric-green/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-neon-yellow mb-4">
            Event Countdown
          </h2>
          <p className="text-white/80 text-lg">Get ready for the biggest youth festival of the year!</p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-20 animate-scale-in">
          <CountdownTimer />
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Date & Time */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Date & Time</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Date:</strong>Saturday, November 29, 2025 </p>
              <p><strong>Time:</strong> 7 PM</p>
              <p><strong>Duration:</strong> Till Dawn</p>
            </div>
          </div>

          {/* Venue */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Venue</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Location:</strong> Rowe Park</p>
              <p><strong>Address:</strong> Yaba, Lagos.</p>
              <p><strong>Capacity:</strong> 500+ Concert-goers</p>
            </div>
          </div>

          {/* Host & Organizers */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Mic className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Host & Team</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Hosted by:</strong> Hypeman Gpee</p>
              <p><strong>Presented by:</strong> Youth Connect</p>
              <p><strong>Produced by:</strong> HypeVibe Media</p>
            </div>
          </div>

          {/* Expected Crowd */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Expected Crowd</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Audience:</strong> Youth & Young Adults</p>
              <p><strong>Age Group:</strong> 16-35 Years</p>
              <p><strong>Expected:</strong> 500+ Attendees</p>
            </div>
          </div>

          {/* Music & Entertainment */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Headphones className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Entertainment</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Music:</strong> Afrobeats, Hip-Hop, Amapiano</p>
              <p><strong>Artists:</strong> Top Nigerian Performers</p>
              <p><strong>Activities:</strong> Games, Food, Dance</p>
            </div>
          </div>

          {/* Special Features */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-neon-yellow mr-3" />
              <h3 className="text-white font-semibold text-lg">Special Features</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p><strong>Food Courts:</strong> Local & International</p>
              <p><strong>Photo Booths:</strong> Instagram-worthy Spots</p>
              <p><strong>Merchandise:</strong> Exclusive Event Merch</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg mb-6">
            Don't miss out on the most anticipated youth festival of 2025!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('tickets');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-neon-yellow to-festival-orange text-deep-purple px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Secure Your Spot Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
