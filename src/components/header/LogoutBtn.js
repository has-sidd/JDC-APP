import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/login">
        <CIcon icon={cilAccountLogout} size="xxl" className="logoutbtn" />
      </Link>
    </>
  )
}

export default LogoutBtn
