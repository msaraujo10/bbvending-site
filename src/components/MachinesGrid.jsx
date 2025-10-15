import React from "react";
import { Link } from "react-router-dom";

const MachinesGrid = () => {
  const machines = [
    {
      id: "flex-combo-6g",
      name: "FLEX COMBO 6G",
      price: "R$ 17.990,00",
      image: "/FLEX-COMBO-6G-m.png",
      description: "Ideal para pequenos espaços e alta rotatividade.",
    },
    {
      id: "super-combo-max-10g-new",
      name: "SUPER COMBO MAX 10G NEW",
      price: "R$ 24.990,00",
      image: "/SUPER-COMBO-MAX-10G-NEW.png",
      description: "Capacidade ampliada para maior variedade de produtos.",
    },
    {
      id: "super-combo-elevador-9g",
      name: "SUPER COMBO ELEVADOR 9G",
      price: "R$ 27.990,00",
      image: "/SUPER-COMBO-ELEVADOR-9G-m.png",
      description: "Sistema de elevador para produtos mais volumosos.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {machines.map((machine) => (
        <Link
          key={machine.id}
          to={`/maquina/${machine.id}`}
          className="block group"
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {machine.name}
            </h3>
            <p className="text-lg font-semibold text-red-600 mb-2">
              {machine.price}
            </p>
            <p className="text-gray-700">{machine.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MachinesGrid;
