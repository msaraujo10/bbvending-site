import React from "react";
import BenefitsSection from "../components/BenefitsSection.jsx";

const BenefitsPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          Benefícios da BB Vending Machine
        </h1>
        <BenefitsSection />
      </div>
    </div>
  );
};

export default BenefitsPage;
