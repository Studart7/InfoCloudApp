import React from 'react';
import Formulario from '../../components/Formulario/Formulario';
import './styles.css';

function PaginaFormulario() {
  return (
    <div>
      <h1 class='texto'>Formulário de Requisição Meteorológica</h1>
      <Formulario />
    </div>
  );
}

export default PaginaFormulario;