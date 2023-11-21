import React, { useEffect, useRef, useState } from "react";

const apiKey = "AIzaSyBtSUQN0mbybcJRRPdA_m71OdHNC78d3Ss"; // Substitua com sua chave API do Google Maps

const Mapa = () => {
  const [map, setMap] = useState(null);
  const [marcadores, setMarcadores] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const ref = useRef();

  const mapOptions = {
    mapId: '4a6ddd5aeeb08f6d',
    center: { lat: -18.235, lng: -51.925 },
    zoom: 5,
    disableDefaultUI: true,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
      document.head.removeChild(script);
    };
  }, []); // Remova a dependência para garantir que o useEffect seja executado apenas uma vez

  const initializeMap = () => {
    const novoMapa = new window.google.maps.Map(ref.current, mapOptions);
    setMap(novoMapa);

    // Adiciona marcadores
    const novosMarcadores = [
      { nome: "Brasília", position: { lat: -15.7801, lng: -47.9292 }, info: "Informações meteorológicas para Brasília" },
      { nome: "São Paulo", position: { lat: -23.5505, lng: -46.6333 }, info: "Informações meteorológicas para São Paulo" },
      // Adicione mais marcadores conforme necessário
    ];

    const novosMarcadoresNoMapa = novosMarcadores.map(marcador =>
      criarMarcador(novoMapa, marcador)
    );

    setMarcadores(novosMarcadoresNoMapa);
  };

  const criarMarcador = (mapa, { nome, position, info }) => {
    const marker = new window.google.maps.Marker({
      position,
      map: mapa,
      title: nome,
    });

    // Adicione qualquer lógica de evento ou personalização aqui
    marker.addListener('click', () => {
      exibirInfoWindow(marker, info);
    });

    return marker;
  };

  const exibirInfoWindow = (marker, info) => {
    if (infoWindow) {
      infoWindow.close();
    }

    const newInfoWindow = new window.google.maps.InfoWindow({
      content: info,
    });

    newInfoWindow.open(map, marker);
    setInfoWindow(newInfoWindow);
  };

  return (
    <div>
      <div ref={ref} style={{ width: "100%", height: "500px" }}></div>
      {/* Adicione qualquer outro componente ou informação aqui */}
    </div>
  );
};

export default Mapa;
