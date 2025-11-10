// ...existing code...
import React, { useEffect, useState } from 'react';
import { getClientes } from '../../services/api.js'; 

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getClientes();
        setClientes(data);
      } catch (err) {
        setError(err.message || 'Erro');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Carregando clientes...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!clientes.length) return <p>Nenhum cliente cadastrado.</p>;

  return (
    <section>
      <h2>Clientes cadastrados</h2>
      <ul>
        {clientes.map(c => (
          <li key={c.id} style={{marginBottom:12, padding:8, border:'1px solid #ddd'}}>
            <strong>Nome:</strong> {c.nome} <br />
            <strong>Email:</strong> {c.email} <br />
            <strong>Telefone:</strong> {c.telefone} <br />
            <strong>Mensagem:</strong> {c.mensagem}
          </li>
        ))}
      </ul>
    </section>
  );
}
