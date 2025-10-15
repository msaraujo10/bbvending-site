import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import MachinesCarousel from "../components/MachinesCarousel.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <MachinesCarousel />
    </>
  );
};

export default HomePage;
