
function Servicos() {
  
  // Lista dos serviços (fácil de adicionar ou remover)
  const servicosList = [
    { 
      titulo: 'Aferição de Pressão Arterial', 
      descricao: 'Monitoramento preciso da sua pressão para um controle de saúde eficaz e seguro.' 
    },
    { 
      titulo: 'Aplicação de Injetáveis', 
      descricao: 'Administração segura de vacinas e medicamentos por profissionais treinados e qualificados.' 
    },
    { 
      titulo: 'Testes Rápidos', 
      descricao: 'Resultados em minutos para glicemia, COVID-19, dengue e mais, com total confiabilidade.' 
    },
    { 
      titulo: 'Acompanhamento Farmacêutico', 
      descricao: 'Orientação personalizada para o uso correto de medicamentos e adesão ao tratamento.' 
    },
    { 
      titulo: 'Perfuração de Lóbulo', 
      descricao: 'Aplicação de brincos de forma higiênica e segura para adultos e crianças.' 
    },
  ];

  return (
    // Usamos 'page-content' para manter um padding padrão
    <div className="servicos-container page-content">
      <div className="servicos-header">
        <h1>Nossos Serviços</h1>
        <p>Mais do que uma farmácia, um centro de cuidado à sua saúde.</p>
      </div>

      {/* Grid para os cartões de serviço */}
      <div className="servicos-grid">
        {/* Mapeia a lista de serviços para criar um card para cada um */}
        {servicosList.map((servico, index) => (
          <div key={index} className="servico-card">
            <h3 className="servico-card-title">{servico.titulo}</h3>
            <p className="servico-card-desc">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;