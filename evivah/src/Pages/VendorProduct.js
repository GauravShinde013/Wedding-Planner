import { CurrencyRupee, LocalMallOutlined, StorefrontOutlined } from '@mui/icons-material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesComparison from '../Components/ClientDashBoard/ServiceComparison/AllServicesComparison';
import Service from '../Components/ClientDashBoard/Service/Service';
import ServiceSales from '../Components/ClientDashBoard/ServiceSales/ServiceSales';

const VendorProduct = () => {
    const IconStyle = {
        color: "#ffc107",
        backgroundColor: "#fff8e1",
        width: "44px",
        borderRadius: "12px",
        height: "44px",
        fontSize: "24px",
        cursor: "pointer"
    }
    const products = [
        {
            productName: "Zomato",
            productImage: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
            productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad, sed nulla doloribus voluptas sit ab. Quae molestias pariatur, laudantium illo sapiente ullam ea maiores beatae tenetur at, consectetur quia aliquam autem totam odio sed, minima consequatur impedit nemo quisquam",
            productPrice: "23,455",
            productRating: 4.2
        }
    ]

    
    return (
        <Container className="body-back py-3" >
            <Row className="p-1">
                

                <Col>
                    <ServicesComparison />

                </Col>

            </Row>
            <hr />
            {/* {products.map(product => {
                return <Service product={product} />
            })} */}
                 <Service  />
        </Container>
    );
};

export default VendorProduct;
