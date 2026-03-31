import React from "react";

const Navbar = ({ setPagina, paginaAtiva }) => {
  const NavLink = ({ id, label }) => (
    <button
      onClick={() => setPagina(id)}
      className={`nav-link ${paginaAtiva === id ? "active" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <nav className="navbar">
      <NavLink id="home" label="Início" />
      <NavLink id="prof1" label="Prof. Rodolfo" />
      <NavLink id="prof2" label="Prof. Maria" />
      <NavLink id="prof3" label="Prof. João" />
    </nav>
  );
};

export default Navbar;
