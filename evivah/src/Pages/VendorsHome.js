import { Paper } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Components/Footer/Footer';
import MasterServices from "../Components/MasterServices"
import Navbar from '../Components/Navbar/Navbar';

const VendorsHome = () => {
  const [masterServices, setMasterServices] = useState([])

  const getMasterServices = () => {
    const url = `http://localhost:8080/masterServices`
    axios.get(url).then((response) => {
      let result = response.data.data
      result = result.filter((service,index) => {
        return (service.serviceName !== "Planner")
      })

      setMasterServices(result)
    })
  }

  useEffect(() => {
    getMasterServices()
  }, [])

  return (
    <div className="m-body">
      <Navbar />
      <div style={{ background: "rgba(236,220,231,0.925)" }}>

        <Container className="py-4" >
          <h3 className='text-white mb-5 text-center py-3 bg-dark service-head'>Go Ahead And Customize Your Weddding</h3>
          <Paper elevation={12} sx={{padding:"20px"}}>
            <Row  className="g-4">
              {
                masterServices.map((service) => {
                  return (
                    <Col className="d-flex justify-content-center">
                      <MasterServices key={service.id} service={service} />
                    </Col>
                  )
                })
              }
            </Row>
          </Paper>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default VendorsHome