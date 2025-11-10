export const API_BASE = 'http://localhost:3000';

export async function getClientes() {
  const res = await fetch(`${API_BASE}/Clientes`);
  if (!res.ok) throw new Error('Erro ao buscar clientes');
  return res.json();
}
