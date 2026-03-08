import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BarraLink = () => {
  return (
    <nav className="barra-navegacao">
      <Link to="/" className="brand">
        <span className="brand-icon">☁️</span>
        Projeto Nimbus
      </Link>
      <Link to="/" className="link">
        Início
      </Link>
      <Link to="/tabela" className="link">
        Tabela
      </Link>
      <Link to="/formulario" className="link">
        Formulário
      </Link>
      <Link to="/mapa" className="link">
        Mapa
      </Link>
      <Link to="/grafico" className="link">
        Gráfico
      </Link>
      <Link to="/sobre-nos" className="link">
        Sobre Nós
      </Link>
    </nav>
  );
};

export default BarraLink;