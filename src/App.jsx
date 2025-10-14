import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import BenefitsPage from "./pages/BenefitsPage.jsx";
import MachinesPage from "./pages/MachinesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MachineDetailPage from "./pages/MachineDetailPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="px-4 md:px-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beneficios" element={<BenefitsPage />} />
            <Route path="/maquinas" element={<MachinesPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/maquina/:id" element={<MachineDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
