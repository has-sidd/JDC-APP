import React from 'react'
import { Button } from '@mui/material'
import './style.css'
import logo from '../../../src/assets/images/Avatar.png'

const Row = () => {
  return (
    <>
      <tr>
        <td>
          <div className="name">
            <img src={logo} alt="Logo" height={54} className="d-inline-block align-top" />
            <span className="drivertxt">Driver Name</span>
          </div>
        </td>
        <td style={{ color: '#B5B5C3' }}>JIF-123</td>
        <td style={{ color: '#B5B5C3' }}>+922332388388</td>
        <td style={{ color: '#B5B5C3' }}>+922332388388</td>
        <td style={{ color: '#002C82' }}>
          <a href="#">View on map</a>
        </td>
        <td>
          <Button style={{ BackgroundColor: '#DFE4EC' }} variant="contained">
            Occupied
          </Button>
        </td>
      </tr>
    </>
  )
}

export default Row
