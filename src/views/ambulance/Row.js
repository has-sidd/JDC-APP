import React, { useState } from 'react'
import { Button, Box, Typography, Modal, TextField } from '@mui/material'
import './style.css'
import logo from '../../../src/assets/images/Avatar.png'
import Popup from './Popup'

const Row = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [occupied, setOccupied] = useState(false)

  const handleOpen = () => (!occupied ? setOpen(true) : setShow(true))
  const handleClose = () => {
    setOpen(false)
    setShow(false)
  }
  const handleSubmit = () => {
    setOccupied(true)
    handleClose()
  }
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
          <Button onClick={handleOpen} style={{ BackgroundColor: '#DFE4EC' }} variant="contained">
            {occupied ? 'Occupied' : 'Unoccupied'}
          </Button>
          <Popup open={open} show={show} handleClose={handleClose} handleSubmit={handleSubmit} />
        </td>
      </tr>
    </>
  )
}

export default Row
