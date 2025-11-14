import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="BB Vending Machine" className="h-10 mr-2" />
          <span className="text-lg md:text-xl font-bold text-blue-800">
            BB VENDING
          </span>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link
                to="/quem-somos"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                to="/beneficios"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Benefícios
              </Link>
            </li>
            <li>
              <Link
                to="/maquinas"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Máquinas
              </Link>
            </li>
            <li>
              <Link
                to="/planos"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Planos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div className="flex mt-4 md:mt-0 space-x-6 md:ml-6">
            <a
              href="https://wa.me/5521964833551"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/bb.vmachine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
