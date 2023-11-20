import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial = () => {
  return (
    <div>
      <h2>Esta é Minha Página</h2>
      <p>Bem-vindo à minha página!</p>
      <Link to="/tabela">Va para tabela</Link> <br/>
      <Link to="/formulario">Va para formulario</Link>
    </div>
  );
};

export default PaginaInicial;