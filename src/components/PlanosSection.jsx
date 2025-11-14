import React from "react";

const PlanosSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-2xl px-4 md:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Planos</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Venda</h3>
            <p>Pagamento à vista ou em até 10x no cartão.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Locação</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Locação com manutenção e abastecimento de produtos
                <br />
                <span className="text-sm">(essa condição é especial para Região Oceânica de Niterói)</span>
              </li>
              <li>Locação com manutenção e abastecimento por conta do cliente</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Entre em contato para mais informações.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
