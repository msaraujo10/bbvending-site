import React from "react";

const AboutSection = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/maquina2.png"
              alt="Máquina BB Vending Machine"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Quem Somos
            </h2>
            <p className="mb-4">
              Bem-vindo à BB Vending Machine – especialista em máquinas
              automáticas no Rio de Janeiro!
            </p>
            <p className="mb-4">
              Chegou a hora de você ter sua própria máquina e começar a gerar
              receita com praticidade e segurança.
            </p>
            <p className="mb-4">
              Somos uma empresa carioca focada não só na venda de máquinas, mas
              no <strong>sucesso do seu projeto</strong>. Acompanhamos você
              desde a escolha do modelo ideal até a operação contínua, com
              orientações sobre:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Estruturação do seu ponto de venda</li>
              <li>Seleção dos produtos mais rentáveis</li>
              <li>
                Dicas para captação de locais estratégicos (condomínios, clubes,
                empresas)
              </li>
              <li>Gestão de estoque e manutenção preventiva</li>
            </ul>
            <p>
              Tudo isso com{" "}
              <strong>atendimento personalizado e suporte técnico local</strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
