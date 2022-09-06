import React from 'react'
import { CCol, CRow } from '@coreui/react'
import './style.css'
import Slider from '../widgets/Slider'
import Piechart1 from './Piechart1'
import Piechart2 from './Piechart2'
import Linechart from './Linechart'

const LangaarKhana = () => {
  const random = () => Math.round(Math.random() * 100)
  return (
    <div>
      <CRow>
        <CCol>
          <Slider />
        </CCol>
      </CRow>
      <CRow className="cont">
        <Piechart1 />
        <Piechart2 />
      </CRow>

      <CRow>
        <Linechart random={random} />
      </CRow>
    </div>
  )
}

export default LangaarKhana
