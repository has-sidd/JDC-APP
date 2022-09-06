import React from 'react'
import { Link } from 'react-router-dom'
import { CCol } from '@coreui/react'
import { TextField, Button } from '@mui/material'
import './style.css'
import logo from 'src/assets/images/jdc-png.png'

const LoginDetails = () => {
  return (
    <>
      <CCol md={5}>
        <img src={logo} alt="Logo" height={100} className="d-inline-block align-top" />
        <div className="parentdiv">
          <h1 className="heading">Login Portal</h1>
          <span className="sub-heading">Welcome back! Please enter your details.</span>
          <div>
            <TextField
              className="my-3"
              id="standard-basic"
              label="Email"
              fullWidth
              variant="filled"
            />
            <TextField
              className="my-3"
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              variant="filled"
            />
            <div style={{ textAlign: 'end', color: '#002C82' }}>
              <a style={{ color: '#002C82' }} href="#">
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        <div className="footerBtn">
          <Link to="/dashboard">
            <Button variant="contained">Login</Button>
          </Link>
        </div>
        <div className="loginfooter">
          <span>Don't have an account?</span>
          <a style={{ color: '#002C82' }} href="#">
            Signup
          </a>
        </div>
      </CCol>
    </>
  )
}

export default LoginDetails
