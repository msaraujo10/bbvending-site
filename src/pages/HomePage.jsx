import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import MachinesCarousel from "../components/MachinesCarousel.jsx";
import ContactSection from "../components/ContactSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <MachinesCarousel />
      <ContactSection />
    </>
  );
};

export default HomePage;
