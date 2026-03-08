import React from 'react';
import './styles.css';

const membros = [
  { nome: 'Daniel Studart Hipólito da Costa', curso: 'Engenharia de Computação', periodo: '4º' },
  { nome: 'Davi do Espirito Santo Jacob', curso: 'Engenharia de Computação', periodo: '4º' },
  { nome: 'João Paulo Dopcke Vasconcellos', curso: 'Engenharia de Computação', periodo: '4º' },
  { nome: 'Daniel Alves Ferreira', curso: 'Análise e Desenvolvimento de Sistemas', periodo: '1º' },
  { nome: 'Matheus Peçanha Cavalcante', curso: 'Ciência de Dados e Inteligência Artificial', periodo: '4º' },
];

const getInitials = (name) => {
  const parts = name.split(' ');
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const PaginaSobreNos = () => {
  return (
    <div className="pagina-sobre-nos">
      <h1 className="texto">Sobre Nós</h1>

      <h2>Grupo de Front-End ajudando a Nimbus a desenvolver seu projeto Cronos.</h2>

      <div className="equipe">
        {membros.map((membro, idx) => (
          <div className="membro-equipe" key={idx}>
            <div className="membro-avatar">{getInitials(membro.nome)}</div>
            <h2>{membro.nome}</h2>
            <p>Aluno do {membro.periodo} período de {membro.curso}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaSobreNos;
