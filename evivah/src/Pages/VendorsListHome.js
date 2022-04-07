import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar'
import VendorCard from '../Components/VendorsList/VendorCard';
import sorryImage from "../img/sorryImage.png"
import { Pagination } from '@mui/material';

const VendorsListHome = () => {
    const [vendorsList, setVendorsList] = useState([])
    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(1);
    const itemPerPage = 3;
   
   

    const handleChange = (event, value) => {
        setPage(value)
    }

    const location = useLocation()
    const masterServiceId = location.state.serviceId;

    const NoVendor = () => {
        return (
            <div>
                <Paper className="p-3" elevation={4} >
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={sorryImage} alt="" />
                        <h3>
                            We Are Sorry! Currently This Service Has No Vendors
                        </h3>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            style={
                                {
                                    padding: "11px 23px",
                                    borderRadius: "7px",
                                    background: "darkcyan",
                                    border: "none"
                                }
                            }
                        >
                            <Link className='text-white' to="/master-services">
                                Back
                            </Link>
                        </button>
                    </div>
                </Paper>
            </div>
        )
    }

    const getVendorsByMasterId = async () => {
        try {

            const url = `http://localhost:8080/masterService/${masterServiceId}/vendors`
            const data = await axios.get(url).then((response) => {
                let result = response.data.data
                setVendorsList(result)
            })
            setLoading(true);
        }
        catch (e) {
            console.log(e);
        }

    }
     useEffect(() => {
        setNoOFPages(Math.ceil((vendorsList.length / itemPerPage)))
    }, [vendorsList.length])

    useEffect(() => {
        getVendorsByMasterId()
    }, [])

    const [noOfPages,setNoOFPages] = useState(
        (vendorsList.length / itemPerPage).toFixed(0)
    )

    const Loading = () => {
        return (
            <div className="d-flex align-items-center justify-content-center" >
                <Spinner animation="border" />
                <h4 style={{ paddingLeft: "7px" }}>
                    Please Wait we are fetching Vendors For You
                </h4>
            </div>
        )
    }

    return (
        <div>
            <Navbar /> 
            <div>
                <Container className="py-4">
                    <Row className="g-4">
                        {loading ?
                            (vendorsList.length ? vendorsList.slice((page - 1) * itemPerPage, page * itemPerPage).map((vendor) => {
                                return (
                                    <Col className="d-flex justify-content-center">
                                        <VendorCard key={vendor.serviceId} vendor={vendor} />
                                    </Col>
                                )
                            }) : (
                                <div>
                                    {NoVendor()}
                                </div>
                            )) : Loading()
                        }
                    </Row>


                    <br />
                    <Pagination sx={{ margin: "8px auto" }}
                        count={noOfPages}
                        color="secondary"
                        defaultPage={page}
                        onChange={handleChange}
                        showFirstButton
                        showLastButton
                        hideNextButton
                        hidePrevButton
                        className="text-center"
                    />
                    <br />
                </Container>

            </div>
            <Footer />

        </div>
    )
}

export default VendorsListHome


