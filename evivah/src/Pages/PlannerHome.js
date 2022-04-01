import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import VendorCard from '../Components/VendorsList/VendorCard'
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const PlannerHome = () => {
    const [plannersList, setPlannersList] = useState([])
    const [loading, setLoading] = useState(false)

    const getPlanners = async () => {

        const url = `http://localhost:8080/masterService/1/vendors`
        const data = await axios.get(url).then((response) => {
            let result = response.data.data
            setPlannersList(result)
        })
        setLoading(true)
    }

    useEffect(() => {
        getPlanners()
    }, [])

    console.log(plannersList);

  return (
    <div>
        <Navbar/>

        <div>
                <Container className="py-4">
                    <Row className="g-4">
                        {loading ?
                             plannersList.map((vendor) => {
                                return (
                                    <Col className="d-flex justify-content-center">
                                        <VendorCard key={vendor.serviceId} vendor={vendor} />
                                    </Col>
                                )
                            }) : <Spinner  animation="border" />
                        }
                    </Row>
                </Container>

            </div>
        
        <Footer/>
    </div>
  )
}

export default PlannerHome