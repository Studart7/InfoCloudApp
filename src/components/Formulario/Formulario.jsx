import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Formulario = () => {
  const [variaveisMenuOpen, setVariaveisMenuOpen] = useState(false);

  const handleVariaveisBtnClick = (event) => {
    event.stopPropagation();
    setVariaveisMenuOpen(!variaveisMenuOpen);
  };

  const handleDocumentClick = (event) => {
    if (!document.getElementById("variaveisMenu").contains(event.target) && variaveisMenuOpen) {
      setVariaveisMenuOpen(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;
    const variaveis = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(v => v.value);
    const frequencia = document.getElementById("frequencia").value;
    const estacao = document.getElementById("estacao").value;
    const ponto = document.getElementById("ponto").value;
    const operacao = document.getElementById("operacao").value;

    const dadosRequisicao = {
      inicio,
      fim,
      variaveis,
      frequencia,
      estacao,
      ponto,
      operacao
    };

    console.log(dadosRequisicao); // You can send the data to the server here
  };

  return (
    <div>
      <h2>Formulário de Requisição Meteorológica</h2>
      <div id="formulario">
        <form id="formRequisicao" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="inicio">Início:</label>
            <input type="datetime-local" id="inicio" name="inicio" required />

            <label htmlFor="fim">Fim:</label>
            <input type="datetime-local" id="fim" name="fim" required />
          </div>

          <div className="row">
            <label htmlFor="variaveis">Variáveis:</label>
            <div className="variaveis-container">
              <div className={`variaveis-menu ${variaveisMenuOpen ? 'open' : ''}`} id="variaveisMenu">
                <label><input type="checkbox" value="precipitacao" /> Precipitação 10min</label><br />
                <label><input type="checkbox" value="DVento" /> Direção do vento</label><br />
                <label><input type="checkbox" value="RVento" /> Rajada de vento</label><br />
                <label><input type="checkbox" value="VVento" /> Velocidade do vento</label><br />
                <label><input type="checkbox" value="temperatura" /> Temperatuda</label>
                {/* Add more options for meteorological variables as needed */}
              </div>
              <button type="button" id="variaveisBtn" onClick={handleVariaveisBtnClick}>Selecionar Variáveis</button>
            </div>
          </div>

          <div className="row">
            <label htmlFor="frequencia">Frequência:</label>
            <select id="frequencia" name="frequencia" required>
              <option value="diaria">Diária</option>
              <option value="horaria">Horária</option>
              {/* Add more frequency options as needed */}
            </select>
          </div>

          <div className="row">
            <label htmlFor="estacao">Estação:</label>
            <input type="text" id="estacao" name="estacao" required />
          </div>

          <div className="row">
            <label htmlFor="ponto">Ponto de Monitoramento:</label>
            <input type="text" id="ponto" name="ponto" required />
          </div>

          <div className="row">
            <label htmlFor="operacao">Operação:</label>
            <select id="operacao" name="operacao" required>
              <option value="medicao">Medição</option>
              <option value="calibracao">Calibração</option>
              {/* Add more operation options as needed */}
            </select>
          </div>

          <div id="botoes">
            <button type="button" id="relatorioBtn" onClick={() => console.log("Relatório Gerado")}>Gerar Relatório</button>
            <button type="submit">Pesquisar</button>
          </div>
        </form>
      </div>
      <Link to="/">Tela Inicial</Link>
    </div>
  );
};

export default Formulario;
