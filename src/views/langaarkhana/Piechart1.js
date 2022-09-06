import React from 'react'
import { CCol } from '@coreui/react'
import { CChartDoughnut } from '@coreui/react-chartjs'
import './style.css'

const Piechart1 = () => {
  return (
    <>
      <CCol className="chartcard" lg={5} sm={12}>
        <h2 className="inflowtitle">Inflow Invoices</h2>
        <div className="sub-main">
          <CChartDoughnut
            style={{ width: '250px', height: '250px' }}
            data={{
              labels: ['Cash', 'Material', 'Food'],
              datasets: [
                {
                  backgroundColor: ['#2C6D4A', '#9F9F9F', '#4AD669'],
                  data: [40, 20, 80],
                },
              ],
            }}
          />
          <div className="rightbox">
            <h5 className="amount">PKR 29,000</h5>
            <span className="subtxt">+12%</span>
          </div>
        </div>
      </CCol>
    </>
  )
}

export default Piechart1
