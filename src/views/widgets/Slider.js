import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slider.css'
import logo from 'src/assets/images/jdc-png.png'

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG92ZXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="captions">
            <img src={logo} alt="Logo" height={80} className="d-inline-block align-top mx-2" />
            <h3>Second slide label</h3>
          </div>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="overlay"></div>
        </div>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG92ZXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="captions">
            <img src={logo} alt="Logo" height={80} className="d-inline-block align-top mx-2" />
            <h3>Second slide label</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG92ZXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="captions">
            <img src={logo} alt="Logo" height={80} className="d-inline-block align-top mx-2" />
            <h3>Second slide label</h3>
          </div>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
