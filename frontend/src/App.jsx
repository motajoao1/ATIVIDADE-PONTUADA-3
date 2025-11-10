// ...existing code...
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Home from './Pages/Home'
import Servicos from './pages/Servicos'
import SobreNos from './Pages/SobreNos'
import Contato from './Pages/Contato'
import ListaClientes from './pages/ListaClientes'
import './styles.css'
import './index.css'
export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/clientes" element={<ListaClientes />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Farmácia Exemplo</footer>
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  )
}
