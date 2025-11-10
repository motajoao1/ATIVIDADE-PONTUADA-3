// Em App.jsx (ou onde suas rotas estão)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import FaleConosco from "./pages/FaleConosco"
import Servicos from './pages/Servicos/index'
import SobreNos from './pages/SobreNos/index'
import Home from './pages/Home'
import Footer from './components/Footer'

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Fale-Conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}



export default App;
