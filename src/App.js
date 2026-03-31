import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Professor from "./components/Professor";

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("home");

  const professores = {
    prof1: {
      nome: "Rodolfo Bolconte",
      disciplinas: [{ nome: "Desenvolvimento Web", curso: "ADS", semestre: 5 }],
    },
    prof2: {
      nome: "Hugo Feitosa de Figueirêdo",
      disciplinas: [
        { nome: "Banco de Dados I", curso: "ADS", semestre: 3 },
        { nome: "Projeto de Software I", curso: "ADS", semestre: 5 },
      ],
    },
    prof3: {
      nome: "André Atanásio Maranhão Almeida",
      disciplinas: [
        {
          nome: "Programação de Dispositivos Móveis",
          curso: "ADS",
          semestre: 5,
        },
      ],
    },
  };

  const renderConteudo = () => {
    if (paginaAtiva === "home") return <Home />;
    return <Professor dados={professores[paginaAtiva]} />;
  };

  return (
    <div className="App">
      <Navbar setPagina={setPaginaAtiva} paginaAtiva={paginaAtiva} />
      <main>{renderConteudo()}</main>
    </div>
  );
}

export default App;
