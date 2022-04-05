import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Pagination, Paper, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';


const Service = ({ products }) => {

    const navigate=useNavigate()

    const [page, setPage] = useState(1);
    const itemPerPage = 3;
    const [noOfPages] = useState(
        Math.ceil(products.length / itemPerPage)
    )

    const handleChange = (event, value) => {
        setPage(value)
    }
    const getAvgRating = (product) => {
        const ratingArray = product.feedbackList.map((feedback) => feedback.rating)
        const rating = ratingArray.length !== 0 ? (ratingArray.reduce((rating, b) => rating + b) / ratingArray.length) : 0
        return rating;
    }

    const toVendorInfo=(vendor)=>{
        const avgRating=getAvgRating(vendor)
        navigate("/vendor-info",{state:{vendor:{vendor},avgRating:avgRating}})
    }


    return (
        <Container >
            <Typography mb={2} variant="h4" className="text-center">
                Your Services
            </Typography>
            <Row md={3} sm={1} className="gy-5">
                {
                    products.slice((page - 1) * itemPerPage, page * itemPerPage)
                        .map(product => {

                            return (
                                <div>
                                    <Col className="card-shadow-1 p-0" style={{ maxWidth: "270px", background: "white", borderRadius: "15px" }}>
                                        <div>
                                            <img
                                                width="100%"
                                                height="180px"
                                                src={product.imgList[0]} alt="" className="rounded-top"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <div className="pt-3 " >
                                                <Container >
                                                    <Link className="text-decoration-none" to="/products">
                                                        <h4 className="pt-2">{product.brandName}</h4>
                                                    </Link>
                                                    <div className='pt-1'>
                                                        <div className="d-flex flex-nowrap align-items-center   justify-content-between pt-1 ">
                                                            <span style={{ color: "red" }}>
                                                                <h5 className="fs-6">₹ {product.servicePrice}</h5>
                                                            </span>
                                                            <Box

                                                                sx={{
                                                                    '& > legend': { mt: 2 },
                                                                }}
                                                            >
                                                                {


                                                                    <Rating name="half-rating-read" defaultValue={() => getAvgRating(product)} precision={0.5} readOnly />
                                                                }

                                                            </Box>
                                                        </div>
                                                    </div>
                                                </Container>
                                                <Accordion
                                                    sx={{
                                                        border: "none",
                                                        width: "100%",
                                                        borderRadius: "12px"
                                                    }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"

                                                    >
                                                        <Typography
                                                            variant="h6" component="h4"
                                                            style={{ color: "blue" }}
                                                        >
                                                            See More
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails
                                                    >
                                                        <Typography
                                                            className="m-0 pb-5 ">
                                                            {product.specification}
                                                        </Typography>
                                                        <Paper className="mt-4 p-2 text-center text-white" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: "#5e72e8", borderRadius: 0 }} elevation={3}>
                                                            <Typography
                                                                variant="subtitle1"
                                                                component="h4"
                                                                onClick={()=>toVendorInfo(product)}
                                                                style={{cursor:"pointer"}}
                                                            >
                                                               
                                                                    See Details
                                                                
                                                            </Typography>
                                                        </Paper>
                                                    </AccordionDetails>

                                                </Accordion>
                                            </div>
                                        </div>
                                    </Col>
                                </div>)
                        })}
            </Row>

            <br />
            <Pagination sx={{ margin: "8px auto" }}
                count={noOfPages}
                color="primary"
                defaultPage={page}
                onChange={handleChange}
                // showFirstButton
                // showLastButton
                hideNextButton
                hidePrevButton
                className="text-center"
            />


            <br />
        </Container>
    );
};

export default Service;
