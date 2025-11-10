import React, { useState } from "react";
import "./style.css";

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://seu-backend.com/api/fale-conosco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        const data = await response.json();
        throw new Error(data.message || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Erro inesperado. Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fale-container">
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="fale-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem..."
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {status.message && (
          <p className={`feedback ${status.type}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
}
