import React from "react";

const MissionVisionValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Missão, Visão e Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Missão</h3>
            <p>
              Oferecer soluções automatizadas de alimentação e bebidas com
              qualidade, praticidade e inovação, promovendo conforto e
              conveniência a qualquer hora e lugar.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Visão</h3>
            <p>
              Ser referência nacional em vending machines, reconhecida pela
              excelência no atendimento, tecnologia de ponta e compromisso com a
              satisfação dos clientes.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Valores</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Inovação: buscamos constantemente novas tecnologias para
                aprimorar nossos serviços.
              </li>
              <li>
                Qualidade: garantimos produtos frescos, máquinas modernas e
                manutenção eficiente.
              </li>
              <li>
                Confiabilidade: transparência e compromisso em cada parceria.
              </li>
              <li>
                Sustentabilidade: adotamos práticas que reduzem desperdícios e
                impacto ambiental.
              </li>
              <li>
                Atendimento humanizado: mesmo sendo automáticos, nossos serviços
                têm o toque humano da atenção e do cuidado.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;
