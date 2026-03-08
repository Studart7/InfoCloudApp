import React from 'react';
import Tabela from '../../components/Tabela/Tabela';
import './styles.css';

function PaginaTabela() {
  return (
    <div className="table-container">
      <h1 className="texto">Tabela</h1>
      <Tabela />
    </div>
  );
}

export default PaginaTabela;