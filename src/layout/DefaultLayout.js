import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Slider from 'src/views/widgets/Slider'
import { CRow, CCol, CContainer } from '@coreui/react'
import './style.css'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <CContainer xxl>
          {/* <CCol>
            <Slider />
          </CCol> */}
        </CContainer>
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
