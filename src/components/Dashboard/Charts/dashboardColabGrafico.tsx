import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js'

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
)

import { PolarArea } from 'react-chartjs-2'

/* const data = {
  labels: ["January", "February"],
  datasets: [
    {
      data: [0.1, 0.4],
    },
  ],
}; */

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(111, 168, 36)',
        'rgb(255, 46, 128)',
        'rgb(255, 86, 57)'
      ],
      hoverOffset: 1
    }
  ]
}

const options = {
  plugins: {
    legend: { display: false }
  },
  elements: {
    line: {
      tension: 0
    },
    point: {
      radius: 0
    }
  },
  scale: {
    xAxis: {
      display: false
    },
    yAxis: {
      display: false
    }
  },
  aspectRatio: 2,
  borderWidth: 1
}

function dashboardColabGrafico() {
  return (
    <div>
      <PolarArea data={data} options={options} style={{ height: '50px' }} />
    </div>
  )
}

export default dashboardColabGrafico
