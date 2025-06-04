
import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MapSection from "../components/MapSection";
import BankTransferTicket from "../components/BankTransferTicket";
import Footer from "../components/Footer";
import { PoweredBy } from "@/components/PoweeredBy";

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-purple font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MapSection />
      <BankTransferTicket />
      <Footer />
      <PoweredBy />
    </div>
  );
};

export default Index;
