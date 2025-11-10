import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">Farmácia Dois Amigos</NavLink>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/clientes">Clientes</NavLink>
        </nav>
      </div>
    </header>
  );
}
