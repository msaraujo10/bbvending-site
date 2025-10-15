import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-16 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
            PRATICIDADE NA PALMA DA MÃO
          </h1>
          <p className="text-lg mb-6">
            Instale agora a BB Vending Machine e gere receita para o seu
            condomínio, clube ou empresa.
          </p>
          <Link
            to="/quem-somos"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Saiba Mais
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/maquina-vermelha.png"
            alt="BB Vending Machine"
            className="max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
