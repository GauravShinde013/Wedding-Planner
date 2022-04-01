import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar'
import VendorCard from '../Components/VendorsList/VendorCard';

const VendorsListHome = () => {
    //TODO: No Vendors Message
    const [vendorsList, setVendorsList] = useState([])

    const location = useLocation()
    const masterServiceId = location.state.serviceId;

    const NoVendor=()=>{
        console.log("no vendors");
        return(
            <Paper>
                We Are Sorry! Currently This Service Has No Vendors
            </Paper>
        )
    }

    const getVendorsByMasterId = () => {

        const url = `http://localhost:8080/masterService/${masterServiceId}/vendors`
        axios.get(url).then((response) => {
            let result = response.data.data
            setVendorsList(result)
        })
    }

    useEffect(() => {
        getVendorsByMasterId()
    }, [])

    console.log(vendorsList);

    return (
        <div>
            <Navbar />
            <div>
                <Container className="py-4">
                    <Row className="g-4">
                        {
                           vendorsList.length? vendorsList.map((vendor) => {
                                return (
                                    <Col className="d-flex justify-content-center">
                                        <VendorCard key={vendor.serviceId} vendor={vendor} />
                                    </Col>
                                )
                            }):(
                                <div>
                                   {NoVendor()}
                                </div>
                            )
                        }
                    </Row>
                </Container>

            </div>
            <Footer />

        </div>
    )
}

export default VendorsListHome


