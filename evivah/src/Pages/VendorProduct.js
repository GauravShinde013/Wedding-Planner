import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Components/ClientDashBoard/Service/Service';
import ServicesComparison from '../Components/ClientDashBoard/ServiceComparison/AllServicesComparison';
import SideBar from '../Components/ClientDashBoard/Sidebar/SideBar';
import Navbar from '../Components/Navbar/Navbar';

const VendorProduct = () => {
    const [services,setServices]=useState([])
 
    

    const getAllServices=()=>{
        const id=sessionStorage.id
        const url = `http://localhost:8080/vendor/${id}/services`

        axios.get(url).then((response)=>{
            const result=response.data
            setServices(result.data)
        })
    }

    useEffect(()=>{
        getAllServices()
    },[])

    return (
        <div>
            <Navbar />
            <div
                className='d-flex'
                style={{ backgroundColor: "#E2F0FE",width:"100%" }}
            >
                <Grid container>
                    <Grid item md={2} sm={3} xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid item sm={9} md={10} xs={10}>
                        <Container style={{padding:"0 30px",width:"100%"}} className="py-3" >
                            <div className="d-flex" >
                                <ServicesComparison />
                            </div>
                            <hr />
                            
                            <Service products={services} />
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default VendorProduct;
