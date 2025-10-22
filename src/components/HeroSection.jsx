import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-16 text-center">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Bem-vindo à BB Vending Machine
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Inovação, praticidade e sabor ao seu alcance! A BB Vending Machine é
          especializada na locação e venda de máquinas automáticas de bebidas e
          snacks, ideais para empresas, condomínios, escolas, academias e locais
          de grande circulação.
        </p>
        <p className="text-lg font-semibold text-gray-800 mb-8">
          Mais conforto, mais eficiência, mais BB!
        </p>
        <Link
          to="/quem-somos"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Saiba Mais
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
