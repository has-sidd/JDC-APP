import React from 'react'
import { CCol } from '@coreui/react'
import './style.css'
import img from 'src/assets/images/girl.png'

const LoginFooter = () => {
  return (
    <>
      <CCol className="card-cont" lg={5}>
        <div className="cardf">
          <h3>Community Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </CCol>
    </>
  )
}

export default LoginFooter
