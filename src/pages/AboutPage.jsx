import React from "react";
import ContactSection from "../components/AboutSection.jsx";

const AboutPage = () => {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Quem Somos</h1>
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
