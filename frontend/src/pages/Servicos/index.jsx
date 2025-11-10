import React from 'react'

const services = [
  { id: 1, title: 'Aferição de pressão arterial', desc: 'Medição rápida e precisa realizada por profissionais.' },
  { id: 2, title: 'Aplicação de injetáveis', desc: 'Serviço seguro com profissionais treinados.' },
  { id: 3, title: 'Testes rápidos', desc: 'Glicemia, colesterol, e outros exames rápidos.' },
  { id: 4, title: 'Orientação farmacêutica', desc: 'Conciliação de medicamentos e esclarecimento de dúvidas.' },
  { id: 5, title: 'Vacinação', desc: 'Campanhas e vacinas rotineiras conforme calendário.' },
  { id: 6, title: 'Acompanhamento de crônicos', desc: 'Apoio e orientações para pacientes com doenças crônicas.' }
]

export default function Servicos() {
  return (
    <section>
      <h2>Serviços</h2>
      <p className="small-muted">Conheça os serviços que oferecemos para cuidar da sua saúde.</p>

      <div className="services-grid" aria-live="polite">
        {services.map(s => (
          <article key={s.id} className="service-card" aria-label={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
