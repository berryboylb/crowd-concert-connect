
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-purple font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MapSection />
      <TicketSection />
      <Footer />
    </div>
  );
};

export default Index;
