import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MachinesCarousel = () => {
  const machines = [
    {
      id: "flex-combo-6g",
      name: "FLEX COMBO 6G",
      price: "A partir de R$ 17.990,00",
      image: "/FLEX-COMBO-6G-m.png",
      description: "Ideal para pequenos espaços e alta rotatividade.",
    },
    {
      id: "flex-combo-8g",
      name: "FLEX COMBO 8G",
      price: "A partir de R$ 21.990,00",
      image: "/FLEX-COMBO-8G-m.png",
      description: "Capacidade ampliada para maior variedade de produtos.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMachine = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % machines.length);
  };

  const prevMachine = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + machines.length) % machines.length
    );
  };

  return (
    <section id="maquinas" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          NOSSAS MÁQUINAS
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <button
              onClick={prevMachine}
              className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <Link
                to={`/maquina/${machines[currentIndex].id}`}
                className="block"
              >
                <img
                  src={machines[currentIndex].image}
                  alt={machines[currentIndex].name}
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {machines[currentIndex].name}
                </h3>
                <p className="text-lg font-semibold text-red-600 mb-2">
                  {machines[currentIndex].price}
                </p>
                <p className="text-gray-700">
                  {machines[currentIndex].description}
                </p>
              </Link>
            </div>
            <button
              onClick={nextMachine}
              className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {machines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="mt-8 text-lg">
          Perfeitas para condomínios, clubes, empresas e pontos comerciais.
        </p>
      </div>
    </section>
  );
};

export default MachinesCarousel;
