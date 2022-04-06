import React from 'react'
import Navbar from "../Navbar/Navbar"
import DetailsForm from "./weddingForm"
import ChekoutHome from "./CheckoutHome"
import { Col, Row } from 'react-bootstrap'
const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Row style={{width:"100%",backgroundColor:"#ffdbe9"}}>
        <Col></Col>
        <Col>
          <ChekoutHome />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Checkout