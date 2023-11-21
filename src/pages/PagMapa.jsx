import React from "react";
import Mapa from "../components/Mapa/Mapa";
import { Link } from 'react-router-dom';

const PaginaMapa = () => {
  //const apiKey = "AIzaSyBtSUQN0mbybcJRRPdA_m71OdHNC78d3Ss"; // Substitua pelo valor real da sua chave

  return (
    <div>
      <h1>Sua Página com Mapa</h1>
      <Mapa/>
      <Link to="/">Pagina Inicial</Link>
    </div>
  );
};

export default PaginaMapa;
