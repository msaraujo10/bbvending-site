import React from "react";

const BenefitsSection = () => {
  const benefits = [
    "Valorização do imóvel e da gestão atual",
    "Geração de receita passiva",
    "Conforto e segurança 24h por dia",
    "Produtos variados para todas as idades",
    "Instalação rápida e gratuita",
    
  ];

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          POR QUE ESCOLHER A BB VENDING MACHINE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-800 text-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
