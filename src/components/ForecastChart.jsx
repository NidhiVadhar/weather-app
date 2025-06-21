import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ForecastChart = () => {
  const { forecast } = useSelector(state => state.weather);

  if (!forecast || !forecast.list) return null;

  const labels = forecast.list.map(item =>
    new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  ).slice(0, 8); // Next 8 slots (3-hour intervals)

  const data = {
    labels,
    datasets: [{
      label: 'Temp (°C)',
      data: forecast.list.map(item => item.main.temp).slice(0, 8),
      borderColor: '#1e90ff',
      backgroundColor: 'rgba(30,144,255,0.2)',
    }],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#fff'
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ccc',
        }
      },
      y: {
        ticks: {
          color: '#ccc',
        }
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ForecastChart;
