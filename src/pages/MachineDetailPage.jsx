import React from "react";
import { useParams } from "react-router-dom";
import { machines } from "../data/machines";

const MachineDetailPage = () => {
  const { id } = useParams(); // ← pega o ID da URL (ex: /maquina/flex-combo-6g)

  // Encontra a máquina pelo ID
  const machine = machines.find((m) => m.id === id);

  if (!machine) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Máquina não encontrada
        </h1>
        <p>Verifique o link ou volte para a página inicial.</p>
        <a href="/" className="text-blue-600 hover:underline">
          Voltar para Home
        </a>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              {machine.name}
            </h1>
            <h2 className="text-3xl font-extrabold text-red-600 mb-4">
              {machine.price}
            </h2>
            <p className="mb-6 text-lg">{machine.description}</p>

            <h3 className="text-2xl font-bold mb-4">
              PRINCIPAIS CARACTERÍSTICAS
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {machine.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://wa.me/5521964833551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Fale conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDetailPage;
