import React from 'react';
import Formulario from '../../components/Formulario/Formulario';
import './styles.css';

function PaginaFormulario() {
  return (
    <div className="form-container">
      <h1 className="texto">Formulário de Requisição Meteorológica</h1>
      <Formulario />
    </div>
  );
}

export default PaginaFormulario;