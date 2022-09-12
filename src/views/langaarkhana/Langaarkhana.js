import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { CCol, CRow } from '@coreui/react'
import './style.css'
import Slider from '../widgets/Slider'
import Product from './Product'
import productsapi from 'src/Api/products'
import categoriesapi from 'src/Api/categories'
import HorizontalScroll from 'react-horizontal-scrolling'

const LangaarKhana = () => {
  const [products, setProducts] = useState(productsapi)
  const [category, setcategory] = useState(categoriesapi)
  const random = () => Math.round(Math.random() * 100)
  return (
    <div>
      <CRow>
        <CCol>
          <Slider />
        </CCol>
      </CRow>
      {Object.entries(category).map((cat) => {
        return (
          <CRow key={cat[1].id} className="cont">
            <div className="catheader">
              <Typography variant="h4">{cat[1].name}</Typography>
              <div style={{ textAlign: 'end', color: '#002C82' }}>
                <a style={{ color: '#002C82', textDecoration: 'none' }} href="#">
                  View All
                </a>
              </div>
            </div>
            <HorizontalScroll>
              {Object.entries(products).map((elem) => {
                return (
                  <>
                    <Product
                      id={elem[1].id}
                      name={elem[1].name}
                      price={elem[1].price}
                      quantity={elem[1].quantity}
                      img={elem[1].img}
                    />
                  </>
                )
              })}
            </HorizontalScroll>
          </CRow>
        )
      })}

      {/* <CRow className="cont">
        <div className="heading">
          <Typography variant="h4">Spices</Typography>
        </div>
        <HorizontalScroll>
          {Object.entries(products).map((elem) => {
            return (
              <>
                <Product
                  id={elem[1].id}
                  name={elem[1].name}
                  price={elem[1].price}
                  quantity={elem[1].quantity}
                  img={elem[1].img}
                />
              </>
            )
          })}
        </HorizontalScroll>
      </CRow> */}
    </div>
  )
}

export default LangaarKhana
