import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import MissionVisionValuesSection from "../components/MissionVisionValuesSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import MachinesCarousel from "../components/MachinesCarousel.jsx";
import ContactSection from "../components/ContactSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MissionVisionValuesSection />
      <ServicesSection />
      <BenefitsSection />
      <MachinesCarousel />
      <ContactSection />
    </>
  );
};

export default HomePage;
