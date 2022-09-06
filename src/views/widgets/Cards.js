import React from 'react'
import { CCol } from '@coreui/react'
import { Card, Button } from 'react-bootstrap'
import pic1 from '../../../src/assets/images/langaar.png'
import './Cards.css'

const Cards = ({ key, title, image }) => {
  return (
    <CCol className="container" key={key} sm={12} lg={6}>
      <Card className="card">
        <Card.Img variant="top" src={image} style={{ width: '120px', height: '72px' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </CCol>
  )
}

export default Cards
