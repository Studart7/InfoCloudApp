import React from 'react';
import Formulario from '../components/Formulario/Formulario';
import { Link } from 'react-router-dom';

function PaginaFormulario() {
  return (
    <div>
      <h1>Formulario</h1>
      <Formulario />
      <Link to="/">Pagina Inicial</Link>
    </div>
  );
}

export default PaginaFormulario;