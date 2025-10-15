import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import MachinesCarousel from "../components/MachinesCarousel.jsx";
import AboutSection from "../components/AboutSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <MachinesCarousel />
    </>
  );
};

export default HomePage;
