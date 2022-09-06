import React from 'react'

import { CCol, CRow } from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Slider from '../widgets/Slider'

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol>
          <Slider />
        </CCol>
      </CRow>

      <WidgetsDropdown />
    </>
  )
}

export default Dashboard
