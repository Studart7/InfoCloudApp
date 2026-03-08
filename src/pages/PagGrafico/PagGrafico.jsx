import React from 'react';
import Grafico from '../../components/Grafico/Grafico';
import './styles.css';

function PaginaGrafico() {
  return (
    <div className="chart-container">
      <h1 className="texto">Gráfico</h1>
      <div className="chart-card">
        <Grafico />
      </div>
    </div>
  );
}

export default PaginaGrafico;