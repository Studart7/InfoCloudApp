import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial = () => {
  return (
    <div>
      <h2>Esta é Minha Página</h2>
      <p>Bem-vindo à minha página!</p>
      <Link to="/tabela">Va para tabela</Link> <br/>
      <Link to="/formulario">Va para formulario</Link> <br/>
      <Link to="/mapa">Va para o mapa</Link> <br/>
      <Link to="/grafico">Va para o grafico</Link>
    </div>
  );
};

export default PaginaInicial;