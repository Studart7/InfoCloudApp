import React, { useEffect, useRef } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const center = [-15.7801, -47.9292]; // Brasília as center

const marcadoresIniciais = [
  { nome: "Brasília", position: [-15.7801, -47.9292], info: "Informações meteorológicas para Brasília" },
  { nome: "São Paulo", position: [-23.5505, -46.6333], info: "Informações meteorológicas para São Paulo" },
  { nome: "Rio de Janeiro", position: [-22.9068, -43.1729], info: "Informações meteorológicas para Rio de Janeiro" }
];

const Mapa = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map if it doesn't exist
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView(center, 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);

      marcadoresIniciais.forEach((marcador) => {
        L.marker(marcador.position, { icon: DefaultIcon })
          .addTo(mapInstance.current)
          .bindPopup(`
            <div style="color: #333; font-family: 'Inter', sans-serif;">
              <h3 style="margin: 0 0 5px 0; font-size: 16px;">${marcador.nome}</h3>
              <p style="margin: 0; font-size: 14px;">${marcador.info}</p>
            </div>
          `);
      });
    }

    // Cleanup function
    return () => {
      // We don't necessarily want to destroy it on every render, but on unmount
    };
  }, []);

  // Final cleanup on actual unmount
  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="map-instance-container"
      style={{
        height: '500px',
        width: '100%',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        zIndex: 1
      }}
    />
  );
};

export default Mapa;
