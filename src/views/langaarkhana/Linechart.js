import React from 'react'
import { CCol } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import './style.css'

const Linechart = ({ random }) => {
  return (
    <div>
      <CCol className="linechart">
        <h2 style={{ color: 'black' }}>Analysis</h2>
        <CChartLine
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Inflow',
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                borderColor: 'rgba(220, 220, 220, 1)',
                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                pointBorderColor: '#fff',
                data: [random(), random(), random(), random(), random(), random(), random()],
              },
              {
                label: 'Outflow',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [random(), random(), random(), random(), random(), random(), random()],
              },
            ],
          }}
        />
      </CCol>
    </div>
  )
}

export default Linechart
