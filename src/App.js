import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PaginaTabela from './pages/PagTabela/PagTabela';
import PaginaFormulario from './pages/PagFormulario/PagFormulario';
import PaginaInicial from './pages/PaginaInicial/PagInicial';
import PaginaMapa from './pages/PagMapa/PagMapa';
import BarraLink from './components/BarraLinks/BarraLink';
import PaginaSobreNos from './pages/PagSobreNos/PagSobreNos';
import PaginaGrafico from './pages/PagGrafico/PagGrafico';

function App() {
  return (
    <Router>
      <div>
        <BarraLink/>
        <Routes>
          <Route path="/InfoCloudApp" element={<PaginaInicial />} />
          <Route path="/tabela" element={<PaginaTabela />} />
          <Route path='/formulario' element={<PaginaFormulario />} />
          <Route path='/mapa' element={<PaginaMapa />} />
          <Route path='/sobre-nos' element={<PaginaSobreNos />} />
          <Route path='/grafico' element={<PaginaGrafico />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
