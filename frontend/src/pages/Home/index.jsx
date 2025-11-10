import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>FarmaSaúde</h1>
        <p>Cuidando da sua saúde com a atenção e a agilidade que você merece.</p>
        <div className="hero-ctas">
          <Link className="btn" to="/servicos">Serviços</Link>
          <Link className="btn outline" to="/contato">Fale Conosco</Link>
        </div>
      </div>
      <img src="/assets/logo.png" alt="farmácia" />
    </section>
  )
}