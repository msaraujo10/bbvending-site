import React from "react";

const ContactPage = () => {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <p className="text-center mb-6 text-lg">
            Preencha o formulário abaixo e entraremos em contato em breve!
          </p>

          {/* Formulário via Formspree (gratuito para até 50 envios/mês) */}
          <form
            action="https://formspree.io/f/mjkappjl" // ← substitua pelo seu ID!
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Qual o assunto da sua mensagem?"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="(21) 99999-9999"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Conte-nos sobre seu projeto, dúvidas ou interesse em máquinas..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="font-semibold mb-2">
              Ou entre em contato diretamente:
            </p>
            <p>📞 (21) 96483-3551</p>
            <p>✉️ bb.vmachine@gmail.com</p>
            <p>📸 @bb.vmachine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
