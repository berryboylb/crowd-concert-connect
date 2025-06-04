
import React from 'react';
import { MapPin, Car, Users, Navigation } from 'lucide-react';

const MapSection = () => {
  const openDirections = () => {
    const address = "Lagos Open Air Arena, 123 Festival Road, Lagos, Nigeria";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <section id="map" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-festival-orange via-festival-red to-deep-purple">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-neon-yellow mb-4 drop-shadow-lg">
            Find Your Way to the Concert
          </h2>
          <p className="text-white/80 text-lg">Lagos Open Air Arena - The heart of the festival</p>
        </div>

        {/* Map Container */}
        <div className="mb-12 animate-scale-in">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-neon-yellow/20">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* Embedded Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4995373775684!2d3.3792057!3d6.4550575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc692ba70de9ee3c!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1000000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
                className="rounded-lg"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-neon-yellow" />
                  <div>
                    <p className="font-semibold">Lagos Open Air Arena</p>
                    <p className="text-sm text-white/80">123 Festival Road, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* By Car */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-neon-yellow rounded-full flex items-center justify-center mr-4">
                <Car className="w-6 h-6 text-deep-purple" />
              </div>
              <h3 className="text-white font-semibold text-lg">By Car</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p>Parking available onsite and at adjacent lots</p>
              <p className="text-sm">Free parking for first 1000 cars</p>
              <p className="text-sm">Security available 24/7</p>
            </div>
          </div>

          {/* Public Transport */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-electric-green rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Public Transport</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p>Nearest bus stop: "Festival Bus Stop"</p>
              <p className="text-sm">5-minute walk from venue</p>
              <p className="text-sm">Special shuttle service available</p>
            </div>
          </div>

          {/* Ride-Hail */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-neon-yellow/20 hover:border-neon-yellow/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-hot-pink rounded-full flex items-center justify-center mr-4">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Ride-Hail</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <p>Drop-off point at Gate B</p>
              <p className="text-sm">Uber, Bolt, and taxis welcome</p>
              <p className="text-sm">Dedicated pickup area after event</p>
            </div>
          </div>
        </div>

        {/* Directions Button */}
        <div className="text-center">
          <button 
            onClick={openDirections}
            className="bg-gradient-to-r from-festival-purple to-festival-magenta text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-festival-purple/50 flex items-center space-x-2 mx-auto"
          >
            <Navigation className="w-5 h-5" />
            <span>Get Detailed Directions</span>
          </button>
          <p className="text-white/60 text-sm mt-4">
            Opens in Google Maps for turn-by-turn navigation
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
