import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { CCol, CRow } from '@coreui/react'
import './style.css'

const Product = ({ id, name, price, quantity, img }) => {
  const [qty, setQty] = useState(0)

  const handleDec = () => {
    if (qty > 0) {
      let x = qty - 1
      setQty(x)
    }
  }

  const handleInc = () => {
    if (qty < quantity) {
      let x = qty + 1
      setQty(x)
    }
  }

  return (
    <CCol key={id} xl={11} sm={11} md={11} lg={11} xxl={11} xs={11}>
      <Card className="root">
        <CardMedia className="media" image={img} title="spices" />
        <CardContent className="cardContent">
          {/* <div className="cardContent"> */}
          <div className="textAlignStart">
            <Typography variant="subtitle1" className="productName">
              {name}
            </Typography>
          </div>
          <div>
            <Typography className="productPrice" variant="subtitle2">
              Rs. {price}
            </Typography>
          </div>
          {/* </div> */}
          <Typography className="productQuantity" variant="subtitle2">
            Quantity: {quantity}
          </Typography>
        </CardContent>

        <CardActions disableSpacing className="cardActions">
          <div className="buttons">
            <Button className="maxmin" type="button" size="large" onClick={handleDec}>
              -
            </Button>
            <Typography variant="h6">{qty}</Typography>
            <Button className="maxmin" type="button" size="large" onClick={handleInc}>
              +
            </Button>
          </div>
        </CardActions>
      </Card>
    </CCol>
  )
}

export default Product
