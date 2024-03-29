import React from 'react'
import { Carousel } from 'react-bootstrap'


const Imageslider = ({ images,size }) => {
  const imgStyle = {
    height: size,
    objectFit: "cover"
  }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={imgStyle}
            className="d-block w-100"
            src={images[0]}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
          style={imgStyle}
            className="d-block w-100"
            src={images[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={imgStyle}
            className="d-block w-100"
            src={images[2]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={imgStyle}
            className="d-block w-100"
            src={images[3]}
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={imgStyle}
            className="d-block w-100"
            src={images[4]}
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Imageslider; 



