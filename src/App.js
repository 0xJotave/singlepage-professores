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
      disciplinas: [
        { nome: "Desenvolvimento Web", curso: "ADS", semestre: 5 },
        { nome: "Sistemas Operacionais", curso: "ADS", semestre: 3 },
      ],
    },
    prof2: {
      nome: "Dra. Maria Souza",
      disciplinas: [
        { nome: "Engenharia de Software", curso: "ADS", semestre: 4 },
      ],
    },
    prof3: {
      nome: "Me. João Silva",
      disciplinas: [{ nome: "Banco de Dados II", curso: "GTI", semestre: 2 }],
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
