import React, { useState } from 'react'
import { Button, Box, Typography, Modal, TextField } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  JustifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  p: 4,
}

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Popup = ({ open, show, handleClose, handleSubmit }) => {
  const [input, setInput] = useState({
    Name: '',
    Contact: '',
    Area: '',
    Time: '',
  })

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Customer Form Details
          </Typography>
          <TextField
            className="my-1"
            label="Name"
            name="Name"
            id="standard-size-small"
            fullWidth
            size="small"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            className="my-1"
            label="Contact Number"
            name="Contact"
            id="standard-size-small"
            fullWidth
            size="small"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            className="my-1"
            label="Area"
            name="Area"
            id="standard-size-small"
            fullWidth
            size="small"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            className="my-1"
            label="Time"
            name="Time"
            id="standard-size-small"
            fullWidth
            size="small"
            variant="standard"
            onChange={handleInput}
          />
          <Button onClick={handleSubmit} color="info" className="my-3" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>

      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography className="my-3" id="modal-modal-title" variant="h6" component="h2">
            Customer Details
          </Typography>
          <Typography className="my-2" id="modal-modal-title" variant="subtitle1" component="h2">
            Name: {input.Name}
          </Typography>
          <Typography className="my-2" id="modal-modal-title" variant="subtitle1" component="h2">
            Contact No: {input.Contact}
          </Typography>
          <Typography className="my-2" id="modal-modal-title" variant="subtitle1" component="h2">
            Area: {input.Area}
          </Typography>
          <Typography className="my-2" id="modal-modal-title" variant="subtitle1" component="h2">
            Time: {input.Time}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default Popup
