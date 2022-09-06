import React from 'react'
import { CCol } from '@coreui/react'
import './style.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'

const ContactFooter = () => {
  return (
    <>
      <CCol className="card-cont" lg={5}>
        <h4 className="sec-heading">Contact Information</h4>
        <p className="desc">
          Fill up the form and our team will get back to you within 24 hours or contact at given
          details.
        </p>
        <div className="first">
          <div>
            <LocalPhoneIcon /> <span>+92-2382382-23</span>
          </div>
          <div>
            <span>+92-2382382-23</span>
          </div>
        </div>
        <div className="first">
          <div>
            <EmailIcon /> <span>abc1123@gmail.com</span>
          </div>
          <div>
            <span>abc1123@gmail.com</span>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.970365416308!2d67.10902877482421!3d24.932574686079843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf22becb0f%3A0xd5e50842c5c4867b!2sNED%20University%20Of%20Engineering%20%26%20Technology%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1662496693642!5m2!1sen!2s"
            width="400"
            height="250"
            style={{ border: '0', borderRadius: '24px' }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </CCol>
    </>
  )
}

export default ContactFooter
