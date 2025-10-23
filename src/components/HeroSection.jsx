import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texto */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
              Bem-vindo à BB Vending Machine
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Inovação, praticidade e sabor ao seu alcance! A BB Vending Machine
              é especializada na locação e venda de máquinas automáticas de
              bebidas e snacks, ideais para empresas, condomínios, escolas,
              academias e locais de grande circulação.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Mais conforto, mais eficiência, mais BB!
            </p>
            <Link
              to="/sobre"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2">
            <img
              src="/maquina2.png"
              alt="Máquina BB Vending Machine"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
