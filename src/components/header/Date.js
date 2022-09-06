import React from 'react'
import { cilCalendar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import './Date.css'

const Date = () => {
  return (
    <div className="date">
      <span className="txt">8/27/2022</span>
      <CIcon icon={cilCalendar} size="lg" style={{ color: '#002C82', fontWeight: 700 }} />
    </div>
  )
}

export default Date
