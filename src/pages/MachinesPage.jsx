import React from "react";
import MachinesGrid from "../components/MachinesGrid.jsx";

const MachinesPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          Nossas Máquinas
        </h1>
        <MachinesGrid />
      </div>
    </div>
  );
};

export default MachinesPage;
