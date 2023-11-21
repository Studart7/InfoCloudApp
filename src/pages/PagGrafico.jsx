import React from 'react';
import { Link } from 'react-router-dom';
import Grafico from '../components/Grafico/Grafico';

function PaginaGrafico() {
  return (
    <div>
      <h1>Grafico</h1>
      <Grafico/>
      <Link to="/">Pagina Inicial</Link>
    </div>
  );
}

export default PaginaGrafico;