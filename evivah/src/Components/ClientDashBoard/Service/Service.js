import { Accordion, AccordionDetails, AccordionSummary, BottomNavigation, Container, Pagination, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from '../Rating/Rating';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const products = [
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "23,455",
        productRating: 4.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    },
    {
        productName: "Zomato",
        productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
        productPrice: "85,455",
        productRating: 3.2
    }
]

const Service = ({ product }) => {

    const [page, setPage] = useState(1);
    const itemPerPage = 3;
    const [noOfPages] = useState(
        Math.ceil(products.length / itemPerPage)
    )

    const handleChange = (event, value) => {
        setPage(value)
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
                                                src={product.productImage} alt="" className="rounded-top"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <div className="pt-3 " >
                                                <Container >
                                                    <Link className="text-decoration-none" to="/products">
                                                        <h4 className="pt-2">{product.productName}</h4>
                                                    </Link>
                                                    <div className='pt-1'>
                                                        <div className="d-flex flex-nowrap align-items-center   justify-content-between pt-1 ">
                                                            <span style={{ color: "red" }}>
                                                                <h5 className="fs-6">Price: ₹ {product.productPrice}</h5>
                                                            </span>
                                                            <Ratings rating={product.productRating} readOnly />
                                                        </div>
                                                    </div>
                                                </Container>
                                                <Accordion
                                                    sx={{
                                                        border: "none",
                                                        width: "100%",
                                                        borderRadius:"12px"
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
                                                            {product.productDescription}
                                                        </Typography>
                                                        <Paper className="mt-4 p-2 text-center text-white" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: "#5e72e8", borderRadius: 0 }} elevation={3}>
                                                            <Typography
                                                                variant="subtitle1"
                                                                component="h4"
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
                showFirstButton
                showLastButton
                hideNextButton
                hidePrevButton
                className="text-center"
            />


            <br />
        </Container>
    );
};

export default Service;
