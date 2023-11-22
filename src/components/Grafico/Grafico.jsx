import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Grafico = () => {
  const [selectedVariables, setSelectedVariables] = useState([
    'reajadaDeVento',
    'velocidadeDoVento',
    'temperatura',
    'precipitacao',
  ]);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
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
              hidden: !selectedVariables.includes('reajadaDeVento'),
            },
            {
              label: 'Velocidade do Vento (km/h)',
              data: [7, 11, 5, 8, 3],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hidden: !selectedVariables.includes('velocidadeDoVento'),
            },
            {
              label: 'Temperatura (oC)',
              data: [20, 22, 18, 25, 19],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              hidden: !selectedVariables.includes('temperatura'),
            },
            {
              label: 'Precipitação (mm)',
              data: [5, 8, 3, 6, 4],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hidden: !selectedVariables.includes('precipitacao'),
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
      chartRef.current.chartInstance = newChart;
    }
  }, [selectedVariables]);

  const handleVariableToggle = (variable) => {
    setSelectedVariables((prevSelected) => {
      if (prevSelected.includes(variable)) {
        return prevSelected.filter((v) => v !== variable);
      }
      return [...prevSelected, variable];
    });
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', maxHeight: '500px', overflowY: 'auto' }}>
      <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default Grafico;

