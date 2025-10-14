import React from "react";
import ContactSection from "../components/ContactSection.jsx";

const ContactPage = () => {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
