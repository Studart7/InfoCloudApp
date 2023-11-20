import React from 'react';
import Tabela from '../components/Tabela/Tabela';
import { Link } from 'react-router-dom';

function PaginaTabela() {
  return (
    <div>
      <h1>Tabela</h1>
      <Tabela />
      <Link to="/">Pagina Inicial</Link>
    </div>
  );
}

export default PaginaTabela;