import React, { useState } from "react";

const Professor = ({ dados }) => {
  const [form, setForm] = useState({ aluno: "", assunto: "", mensagem: "" });
  const [modalAberto, setModalAberto] = useState(false);

  const enviarFeedback = (e) => {
    e.preventDefault();
    setModalAberto(true);
  };

  return (
    <div className="page-content">
      <h1>{dados.nome}</h1>
      <h3>Professor Titular</h3>

      <ul className="disciplinas-list">
        {dados.disciplinas.map((d, i) => (
          <li key={i}>
            <strong>{d.nome}</strong>
            <br />
            <span style={{ color: "#7f8c8d", fontSize: "0.9rem" }}>
              Curso: {d.curso} | {d.semestre}º Semestre
            </span>
          </li>
        ))}
      </ul>

      <section className="form-section">
        <h2>Entrar em Contato</h2>
        <form onSubmit={enviarFeedback} className="form-styled">
          <input
            type="text"
            placeholder="Seu Nome Completo"
            required
            className="input-styled"
            onChange={(e) => setForm({ ...form, aluno: e.target.value })}
          />
          <input
            type="text"
            placeholder="Assunto da Mensagem"
            required
            className="input-styled"
            onChange={(e) => setForm({ ...form, assunto: e.target.value })}
          />
          <textarea
            placeholder="Escreva sua mensagem aqui..."
            required
            className="textarea-styled"
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          />
          <button type="submit" className="btn-submit">
            Enviar Mensagem
          </button>
        </form>
      </section>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Contato Recebido!</h2>
            <p>
              <strong>De:</strong> {form.aluno}
            </p>
            <p>
              <strong>Assunto:</strong> {form.assunto}
            </p>
            <p>
              <strong>Mensagem:</strong> {form.mensagem}
            </p>
            <button onClick={() => setModalAberto(false)} className="btn-close">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Professor;
