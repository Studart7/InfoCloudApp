import React from "react";
import Mapa from "../../components/Mapa/Mapa";
import './styles.css';

const PaginaMapa = () => {
  return (
    <div className="map-container">
      <h1 className="texto">Mapa</h1>
      <div className="map-card">
        <Mapa />
      </div>
    </div>
  );
};

export default PaginaMapa;
