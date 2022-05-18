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
    '01/01/2021',
    '02/01/2021',
    '03/01/2021',
    '04/01/2021',
    '05/01/2021',
    '06/01/2021',
    '07/01/2021',
    '08/01/2021',
    '09/01/2021',
    '10/01/2021',
    '11/01/2021'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points'
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
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'TEAM C',
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
