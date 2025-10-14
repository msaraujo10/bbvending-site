import React from "react";
import MachinesCarousel from "../components/MachinesCarousel.jsx";

const MachinesPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          Nossas Máquinas
        </h1>
        <MachinesCarousel />
      </div>
    </div>
  );
};

export default MachinesPage;
