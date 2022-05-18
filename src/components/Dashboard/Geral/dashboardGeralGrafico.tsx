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

import { Line } from 'react-chartjs-2'

/* const usuarios = ({ customers, ...rest }) => {
   customers.map((customer) => <div>{customer.name}</div>);
}; */

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      pointBackgroundColor: 'rgb(111, 168, 36)',
      hoverOffset: 1,
      borderColor: 'rgb(111, 168, 36)',
      borderWidth: 2
    }
  ]
}

const options = {
  plugins: {
    legend: { display: false }
  },
  elements: {
    line: {
      tension: 0.1
    },
    point: {
      radius: 4
    }
  },
  responsive: true,
  fill: false
}

function dashboardGeralGrafico() {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default dashboardGeralGrafico
