import React from 'react'


export default function SobreNos() {
  return (
    <section>
      <h2>Sobre nós</h2>
      <div className="about-grid">
        <div>
          <h3>Missão</h3>
          <p>Fundada em 2005, a FarmaSaúde nasceu com o propósito de ir além da
          simples venda de medicamentos. Nosso fundador, um farmacêutico
          apaixonado pela profissão, sonhava em criar um espaço de saúde
          onde cada cliente fosse tratado de forma única e humanizada.</p>
        </div>
        <div>
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Seg-Sex: 08:00 - 20:00</li>
            <li>Sábado: 08:00 - 14:00</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>
    </section>
  )
}