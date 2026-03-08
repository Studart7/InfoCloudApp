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
              label: 'Rajada de Vento (km/h)',
              data: [10, 15, 8, 12, 9],
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1,
              borderRadius: 4,
              hidden: !variaveisSelecionadas.includes('reajadaDeVento'),
            },
            {
              label: 'Velocidade do Vento (km/h)',
              data: [7, 11, 5, 8, 3],
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1,
              borderRadius: 4,
              hidden: !variaveisSelecionadas.includes('velocidadeDoVento'),
            },
            {
              label: 'Temperatura (°C)',
              data: [20, 22, 18, 25, 19],
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              borderColor: 'rgba(245, 158, 11, 1)',
              borderWidth: 1,
              borderRadius: 4,
              hidden: !variaveisSelecionadas.includes('temperatura'),
            },
            {
              label: 'Precipitação (mm)',
              data: [5, 8, 3, 6, 4],
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              borderColor: 'rgba(99, 102, 241, 1)',
              borderWidth: 1,
              borderRadius: 4,
              hidden: !variaveisSelecionadas.includes('precipitacao'),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            },
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: 'Inter',
                  size: 12,
                },
                padding: 16,
                usePointStyle: true,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
              ticks: {
                font: { family: 'Inter', size: 11 },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: { family: 'Inter', size: 11 },
              },
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
    <div>
      <div style={{ maxHeight: '420px' }}>
        <canvas ref={referenciaDoGrafico} id="meuGrafico" width="400" height="400"></canvas>
      </div>
      <div className="chart-actions">
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
    </div>
  );
};

export default Grafico;
