import React from 'react';
import { Link } from 'react-router-dom';

const Pagina = () => {
  return (
    <div>
      <h2>Esta é Minha Página</h2>
      <p>Bem-vindo à minha página!</p>
      <Link to="/tabela">Va para tabela</Link>
    </div>
  );
};

export default Pagina;