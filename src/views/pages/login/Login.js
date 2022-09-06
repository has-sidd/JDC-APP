import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { TextField, Button } from '@mui/material'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import LoginDetails from './LoginDetails'
import LoginFooter from './LoginFooter'
import './style.css'

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer xxl>
        <CRow className="justify-content-center">
          <LoginDetails/>
          <LoginFooter/>  
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
