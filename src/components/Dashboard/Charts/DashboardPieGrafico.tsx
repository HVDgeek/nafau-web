import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

function DashboardPieGrafico() {
  const options = {
    labels: ['Disciplinas', 'Materiais', 'Tarefas', 'Notas', 'Avisos', 'Forum']
  }
  const series = [4, 5, 6, 1, 2, 3]

  return (
    <>
      <Chart type="pie" height="350" options={options} series={series} />
    </>
  )
}

export default DashboardPieGrafico
