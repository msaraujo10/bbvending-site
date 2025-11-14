import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Venda e Locação de Vending Machines
            </h3>
            <p>
              Trabalhamos com máquinas modernas e personalizáveis, ideais para
              diferentes tipos de estabelecimentos. Você pode optar por{" "}
              <strong>venda</strong>, <strong>locação</strong> ou{" "}
              <strong>comodato</strong>, sem investimento inicial.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Abastecimento e Manutenção
            </h3>
            <p></p> 

Cuidamos da manutenção preventiva e corretiva nos planos de locação. O abastecimento fazemos de acordo com o modelo de negócio escolhido.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Soluções Personalizadas
            </h3>
            <p>Personalizamos sua máquina conforme o perfil do seu público:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bebidas frias (refrigerantes, sucos, águas)</li>
              <li>
                Snacks e alimentos (salgadinhos, doces, biscoitos, barras de
                cereal e muito mais)
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Como Funciona
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Escolha sua máquina:</strong> selecione o modelo ideal
                para seu espaço e público.
              </li>
              <li>
                <strong>Defina o formato:</strong> venda, locação ou comodato.
              </li>
              <li>
                <strong>Instalação rápida:</strong> nossa equipe cuida de tudo,
                sem complicações.
              </li>
              <li>
                <strong>Abastecimento contínuo:</strong> mantemos tudo
                funcionando e reabastecido.
              </li>
              <li>
                <strong>Você lucra e seus clientes se satisfazem!</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
