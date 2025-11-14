import React from "react";
import MissionVisionValuesSection from "../components/MissionVisionValuesSection.jsx";

const AboutPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Quem Somos</h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/maquina2.png"
              alt="Máquina BB Vending Machine"
              className="rounded-lg shadow-lg w-full max-w-sm object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="mb-4">
              A BB Vending Machine nasceu com o propósito de transformar a forma
              como as pessoas consomem bebidas e lanches em ambientes de
              trabalho e convivência.
            </p>
            <p className="mb-4">
              Combinamos{" "}
              <strong>tecnologia, qualidade e design inteligente</strong> para
              oferecer soluções automáticas que atendem a todos os perfis de
              público.
            </p>
            <p className="mb-4">
              Nosso compromisso é proporcionar experiências práticas e
              agradáveis, aliando modernidade e atendimento personalizado. Cada
              cliente é único — por isso oferecemos planos sob medida, seja para{" "}
              <strong>venda</strong>, <strong>locação</strong> ou{" "}
              <strong>comodato</strong> de máquinas automáticas.
            </p>            
          </div>
        </div>
        {/* Aqui vai a seção de Missão, Visão e Valores, abaixo do "Quem Somos" */}
        <div className="mt-12">
          <MissionVisionValuesSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
