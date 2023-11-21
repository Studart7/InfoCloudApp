import React from 'react';
import './styles.css';

const PaginaSobreNos = () => {
  return (
    <div className="pagina-sobre-nos">
      <h1 className="texto">Sobre Nós</h1>
      <img
        src="https://cdn.discordapp.com/attachments/970394629646217258/1170834309880492132/30141693065__1_-removebg-preview.png?ex=656cf06c&is=655a7b6c&hm=8f5e8fe068c94527b38e2a6a222fc82fcddc00e2d6d91d31320ea14376c76788&"
        alt="Logo InfoCloud"
        className="logo-equipe"
      />

      <h2><i>Grupo de Front-End ajudando a Nimbus a desenvolver seu projeto Cronos.</i></h2>

      <div className="equipe">
        <div className="membro-equipe">
          <h2>Daniel Studart Hipólito da Costa</h2>
          <p>Aluno do 4o período de Engenharia de Computação</p>
        </div>

        <div className="membro-equipe">
          <h2>Davi do Espirito Santo Jacob</h2>
          <p>Aluno do 4o período de Engenharia de Computação</p>
        </div>

        <div className="membro-equipe">
          <h2>João Paulo Dopcke Vasconcelhos</h2>
          <p>Aluno do 4o período de Engenharia de Computação</p>
        </div>

        <div className="membro-equipe">
          <h2>Daniel Alves Ferreira</h2>
          <p>Aluno do 1o período de Análise e Desenvolvimento de Sistemas</p>
        </div>

        <div className="membro-equipe">
          <h2>Matheus Peçanha Cavalcante</h2>
          <p>Aluno do 4o período de Ciência de Dados e Inteligência Artificial</p>
        </div>
      </div>
    </div>
  );
};

export default PaginaSobreNos;
