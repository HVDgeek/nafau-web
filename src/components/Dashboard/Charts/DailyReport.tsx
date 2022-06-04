import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
//import theme from 'styles/alt-themes'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    type: 'line',
    stacked: false
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: [
    '01/06/2022',
    '02/06/2022',
    '03/06/2022',
    '04/06/2022',
    '05/06/2022',
    '06/06/2022',
    '07/06/2022',
    '08/06/2022',
    '09/06/2022',
    '10/06/2022',
    '11/06/2022'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: ''
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' points'
        }
        return y
      }
    }
  }
}

const series = [
  {
    name: 'ADMINISTRADORES',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'PROFESSORES',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'ALUNOS',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
]

const DailyReport = () => {
  return (
    <>
      <Chart type="line" height={350} options={options} series={series} />
    </>
  )
}

export default DailyReport
