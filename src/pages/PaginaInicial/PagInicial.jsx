import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const PaginaInicial = () => {
  return (
    <div>
      <div className="topo">
        <h1>Bem Vindo ao Projeto Nimbus</h1>
        <img
          src="https://cdn.discordapp.com/attachments/970394629646217258/1170834309880492132/30141693065__1_-removebg-preview.png?ex=656cf06c&is=655a7b6c&hm=8f5e8fe068c94527b38e2a6a222fc82fcddc00e2d6d91d31320ea14376c76788&" // Substitua pela URL da sua imagem
          alt="Projeto Nimbus Logo"
          className="logo"
        />
      </div>

      <div className="container">
        <div className="imagem-container">
          <Link to="/tabela">
            <img
              src="https://media.istockphoto.com/id/1388741354/pt/vetorial/spreadsheet-editing-app-illustration-flat-design-editable-vector.jpg?s=612x612&w=0&k=20&c=7Vp05AxPVrSRcT-92Ej3kPnyR-aABtKZKuRLCOkQwEU="
              alt="Ir para Tabela"
              className="imagem"
            />
            <p className="legenda">Ir para Tabela</p>
          </Link>
        </div>

        <div className="imagem-container">
          <Link to="/formulario">
            <img
              src="https://www.vargemgrandepaulista.sp.gov.br/tarifazero/imagens/telas%20cadastro-cadastro.png"
              alt="Ir para Formulário"
              className="imagem"
            />
            <p className="legenda">Ir para Formulário</p>
          </Link>
        </div>

        <div className="imagem-container">
          <Link to="/mapa">
            <img
              src="https://images.vexels.com/media/users/3/207228/isolated/lists/affec54749806d2752556ed7e77378c6-traco-colorido-do-icone-da-localizacao-do-mapa.png"
              alt="Ir para o Mapa"
              className="imagem"
            />
            <p className="legenda">Ir para o Mapa</p>
          </Link>
        </div>

        <div className="imagem-container">
          <Link to="/sobre-nos">
            <img
              src="https://perception.net.br/en/img/B/icons/quemsomos.png"
              alt="Ir para o Mapa"
              className="imagem"
            />
            <p className="legenda">Sobre Nós</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;