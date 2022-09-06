import React from 'react'
import { CRow } from '@coreui/react'
import './style.css'
import ContactDetails from './ContactDetails'
import ContactFooter from './ContactFooter'

const Contactus = () => {
  return (
    <div>
      <CRow className="parent">
        <ContactDetails />
        <ContactFooter />
      </CRow>
    </div>
  )
}

export default Contactus
