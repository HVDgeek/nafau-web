import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import theme from 'styles/alt-themes'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    // desabilita a barra de ferramentas
    toolbar: {
      show: false
    },
    // desabilita o zoom
    zoom: {
      enabled: false
    },
    // Cor dos textos y, x
    foreColor: theme.colors.gray
  },
  // Desabilita os grids
  grid: {
    show: false
  },
  // Textos nas linhas do gráfico
  dataLabels: {
    enabled: false
  },
  // quando o usuário para o mouse
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.darkGray
    },
    axisTicks: {
      color: theme.colors.darkGray
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 16, 109] }]

const RegisteredUsers = () => {
  return (
    <>
      <Chart type="area" height={160} options={options} series={series} />
    </>
  )
}

export default RegisteredUsers
