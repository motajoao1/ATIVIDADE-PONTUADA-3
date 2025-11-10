const SobreNos = () => {
  return (
    // Container principal da página "Sobre Nós"
    <>
      {/* Injeta os estilos CSS no componente */}
      <EstilosCSS />

      <div className="sobre-container">
      
      {/* Cabeçalho da página */}
      <div className="sobre-header">
        <h1>Sobre a FarmaSaúde</h1>
        <p>Conheça quem cuida de você e da sua família.</p>
      </div>

      {/* Card da História (ocupando a largura total) */}
      <div className="sobre-card full-width">
        <h3>Nossa História</h3>
        <p>
          Fundada em 2005, a FarmaSaúde nasceu com o propósito de ir além da
          simples venda de medicamentos. Nosso fundador, um farmacêutico
          apaixonado pela profissão, sonhava em criar um espaço de saúde
          onde cada cliente fosse tratado de forma única e humanizada.
        </p>
        <p>
          Hoje, continuamos fiéis a esse propósito, investindo em tecnologia
          e na capacitação constante de nossa equipe para oferecer os
          melhores serviços farmacêuticos da região.
        </p>
      </div>

      {/* Grid para Missão, Visão, Valores e Horários */}
      <div className="sobre-grid">
        
        {/* Card: Missão */}
        <div className="sobre-card">
          <h3>Missão</h3>
          <p>
            Promover saúde e bem-estar, oferecendo atendimento
            farmacêutico de excelência e produtos de qualidade,
            com ética e respeito ao cliente.
          </p>
        </div>

        {/* Card: Visão */}
        <div className="sobre-card">
          <h3>Visão</h3>
          <p>
            Ser a farmácia de referência na comunidade, reconhecida pela
            confiança, inovação tecnológica e cuidado humanizado.
          </p>
        </div>

        {/* Card: Valores */}
        <div className="sobre-card">
          <h3>Valores</h3>
          <ul className="valores-list">
            <li>Ética e Transparência</li>
            <li>Respeito ao Cliente</li>
            <li>Qualidade no Atendimento</li>
            <li>Inovação Constante</li>
            <li>Compromisso com a Saúde</li>
          </ul>
        </div>

        {/* Card: Horário de Funcionamento */}
        <div className="sobre-card">
          <h3>Horário de Funcionamento</h3>
          <ul className="horario-list">
            <li>
              <strong>Segunda a Sexta:</strong> 07:00 - 23:00
            </li>
            <li>
              <strong>Sábado:</strong> 08:00 - 22:00
            </li>
            <li>
              <strong>Domingos e Feriados:</strong> 09:00 - 20:00
            </li>
          </ul>
          <p className="horario-delivery">
            Atendimento 24h via Delivery!
          </p>
        </div>

      </div>
    </div>
    </>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
// (Ex: no seu arquivo de rotas, como App.jsx ou main.jsx)
export default SobreNos;