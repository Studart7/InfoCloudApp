import React, { useEffect, useRef, useState } from "react";

const chaveAPI = process.env.REACT_APP_API_KEY; 

const Mapa = () => {
  const [mapa, setMapa] = useState(null);
  const [marcadores, setMarcadores] = useState([]);
  const [janelaInfo, setJanelaInfo] = useState(null);
  const referenciaDoMapa = useRef();

  const opcoesDoMapa = {
    mapId: '4a6ddd5aeeb08f6d',
    center: { lat: -18.235, lng: -51.925 },
    zoom: 5,
    disableDefaultUI: true,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${chaveAPI}&libraries=places`;
    script.onload = inicializarMapa;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
      document.head.removeChild(script);
    };
  }, []); 

  const inicializarMapa = () => {
    const novoMapa = new window.google.maps.Map(referenciaDoMapa.current, opcoesDoMapa);
    setMapa(novoMapa);

    const novosMarcadores = [
      { nome: "Brasília", position: { lat: -15.7801, lng: -47.9292 }, info: "Informações meteorológicas para Brasília" },
      { nome: "São Paulo", position: { lat: -23.5505, lng: -46.6333 }, info: "Informações meteorológicas para São Paulo" },
      { nome: "Rio de Janeiro", position: { lat: -22.9068, lng: -43.1729}, info: "Informações meteorológicas para Rio de Janeiro"}
    ];

    const novosMarcadoresNoMapa = novosMarcadores.map(marcador =>
      criarMarcador(novoMapa, marcador)
    );

    setMarcadores(novosMarcadoresNoMapa);
  };

  const criarMarcador = (mapa, { nome, position, info }) => {
    const marcador = new window.google.maps.Marker({
      position,
      map: mapa,
      title: nome,
    });

    marcador.addListener('click', () => {
      exibirJanelaInfo(marcador, info);
    });

    return marcador;
  };

  const exibirJanelaInfo = (marcador, info) => {
    if (janelaInfo) {
      janelaInfo.close();
    }

    const novaJanelaInfo = new window.google.maps.InfoWindow({
      content: info,
    });

    novaJanelaInfo.open(mapa, marcador);
    setJanelaInfo(novaJanelaInfo);
  };

  return (
    <div>
      <div ref={referenciaDoMapa} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Mapa;
