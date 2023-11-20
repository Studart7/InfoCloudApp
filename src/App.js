import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice the change from Switch to Routes
//import Tabela from './components/Tabela/Tabela';
import Pagina from './pages/Pagina';
import PaginaTabela from './pages/PagTabela';

function App() {
  return (
    <Router>
      <div>
        <h1>Projeto Nimbus</h1>
        <Routes>
          <Route path="/" element={<Pagina />} />
          <Route path="/tabela" element={<PaginaTabela />} />
          {/* Add more Route components for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
