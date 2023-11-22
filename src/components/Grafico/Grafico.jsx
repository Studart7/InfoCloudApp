import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import html2canvas from 'html2canvas';
import { CSVLink } from 'react-csv';

const Grafico = () => {
  const [variaveisSelecionadas, setVariaveisSelecionadas] = useState([
    'reajadaDeVento',
    'velocidadeDoVento',
    'temperatura',
    'precipitacao',
  ]);
  const referenciaDoGrafico = useRef(null);

  useEffect(() => {
    if (referenciaDoGrafico.current) {
      if (referenciaDoGrafico.current.chartInstance) {
        referenciaDoGrafico.current.chartInstance.destroy();
      }
      const contexto = referenciaDoGrafico.current.getContext('2d');
      const novoGrafico = new Chart(contexto, {
        type: 'bar',
        data: {
          labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          datasets: [
            {
              label: 'Reajada de Vento (km/h)',
              data: [10, 15, 8, 12, 9],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              hidden: !variaveisSelecionadas.includes('reajadaDeVento'),
            },
            {
              label: 'Velocidade do Vento (km/h)',
              data: [7, 11, 5, 8, 3],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hidden: !variaveisSelecionadas.includes('velocidadeDoVento'),
            },
            {
              label: 'Temperatura (oC)',
              data: [20, 22, 18, 25, 19],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              hidden: !variaveisSelecionadas.includes('temperatura'),
            },
            {
              label: 'Precipitação (mm)',
              data: [5, 8, 3, 6, 4],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hidden: !variaveisSelecionadas.includes('precipitacao'),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 50,
              top: 50,
              bottom: 50,
            },
          },
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      referenciaDoGrafico.current.chartInstance = novoGrafico;
    }
  }, [variaveisSelecionadas]);

  const exportarParaJPG = () => {
    if (referenciaDoGrafico.current) {
      html2canvas(referenciaDoGrafico.current).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'grafico_export.jpg';
        link.click();
      });
    }
  };

  const dadosCSV = [
    { label: 'Data 1', value: 10 },
    { label: 'Data 2', value: 15 },
    { label: 'Data 3', value: 8 },
    { label: 'Data 4', value: 12 },
    { label: 'Data 5', value: 9 },
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto', maxHeight: '500px', overflowY: 'auto' }}>
      <div>
      <canvas ref={referenciaDoGrafico} id="meuGrafico" width="400" height="400"></canvas>
      </div>
      <CSVLink
        data={dadosCSV}
        filename={'grafico_export.csv'}
        className="button"
      >
        Exportar CSV
      </CSVLink>
      <button
        onClick={exportarParaJPG}
        className="button"
      >
        Exportar JPG
      </button>
    </div>
  );
};

export default Grafico;
