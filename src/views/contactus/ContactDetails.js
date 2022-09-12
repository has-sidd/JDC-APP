import React from 'react'
import { CCol } from '@coreui/react'
import { TextField, Button } from '@mui/material'
import './style.css'

const ContactDetails = () => {
  return (
    <>
      <CCol className="" lg={5}>
        <h1 className="contactheading">Contact Form</h1>
        <span className="sub-heading">Please fill this form for the message.</span>
        <div>
          <TextField
            className="my-3"
            id="standard-basic"
            label="Full Name"
            fullWidth
            variant="filled"
          />
          <TextField
            className="my-3"
            id="standard-basic"
            label="Email"
            fullWidth
            variant="filled"
          />
          <TextField
            className="my-3"
            id="filled-multiline-static"
            label="Message"
            fullWidth
            multiline
            rows={4}
            variant="filled"
          />
        </div>
        <div className="footerBtn">
          <Button variant="contained">Submit</Button>
        </div>
      </CCol>
    </>
  )
}

export default ContactDetails
