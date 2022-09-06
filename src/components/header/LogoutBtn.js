import React from 'react'
import { CAvatar } from '@coreui/react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons'
import './LogoutBtn.css'

const LogoutBtn = () => {
  return (
    <>
      <CAvatar src={avatar8} className="avatar" size="md" />
      <div className="names">
        <span className="name">John Doe</span>
        <span className="role">Administrator</span>
      </div>
      <CIcon icon={cilAccountLogout} size="xxl" className="logoutbtn" />
    </>
  )
}

export default LogoutBtn
