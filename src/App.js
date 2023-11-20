import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change from Switch to Routes
//import Tabela from './components/Tabela/Tabela';
import PaginaTabela from './pages/PagTabela';
import PaginaFormulario from './pages/PagFormulario';
import PaginaInicial from './pages/PagInicial';

function App() {
  return (
    <Router>
      <div>
        <h1>Projeto Nimbus</h1>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/tabela" element={<PaginaTabela />} />
          <Route path='/formulario' element={<PaginaFormulario />} />
          {/* Add more Route components for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
