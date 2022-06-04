import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const series = [70] //70 percent
const options = {
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 0,
          color: '#fff'
        }
      }
    }
  },
  //colors: ['#E91E63'],
  theme: {
    monochrome: {
      enabled: false
    }
  },
  legend: {
    show: false
  }
}

function DashboardRadialProgress() {
  return <Chart type="radialBar" options={options} series={series} />
}

export default DashboardRadialProgress
