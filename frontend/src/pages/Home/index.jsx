import React from 'react';
function Home() {
  return (
    // O container principal do hero-banner
    <div className="hero-container">
      <div className="hero-content">
        {/* Nome da Farmácia */}
        <h1 className="hero-title">FarmaSaúde</h1>
        
        {/* Subtítulo/Slogan */}
        <p className="hero-subtitle">
          Cuidando da sua saúde com a atenção e a agilidade que você merece.
        </p>
        
        {/* Container dos botões CTA (Call to Action) */}
        <div className="hero-cta-container">
          {/* CTA 1: Botão para "Serviços" */}
          <Link to="/servicos" className="hero-btn primary">
            Nossos Serviços
          </Link>
          
          {/* CTA 2: Botão para "Fale Conosco" */}
          <Link to="/fale-conosco" className="hero-btn secondary">
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;