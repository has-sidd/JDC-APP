import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { Table } from 'react-bootstrap'
import { Button } from '@mui/material'
import './style.css'
import Slider from 'src/views/widgets/Slider'
import Headings from './Headings'
import Row from './Row'

const Ambulance = () => {
  return (
    <>
      <CRow>
        <CCol>
          <Slider />
        </CCol>
      </CRow>
      <CRow className="cont">
        <CCol className="tablecard">
          <h2 className="tabletitle">Ambulance Details</h2>
          <Table>
            <thead>
              <Headings />
            </thead>
            <tbody>
              <Row />
            </tbody>
          </Table>
        </CCol>
      </CRow>
    </>
  )
}

export default Ambulance
