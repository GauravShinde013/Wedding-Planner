import { AttachMoney, ProductionQuantityLimitsOutlined } from '@mui/icons-material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, Paper, Typography } from '@mui/material';
import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewOrders from '../NewOrders/NewOrders';
import OrdersShortDetails from '../OrdersShortDetails/OrdersShortDetails';
import ShortDetails from '../ShortDetailsCard/ShortDetails';



const DashBoardHome = ({ homeData }) => {


    const userName = homeData.length!==0?homeData[0].vendorFirstName:"User"
    const Welcome = () => {
        const hr = new Date().getHours();

        if (hr >= 5 && hr < 12) {

            return (<div>
                <span
                    style={{ lineHeight: "1.7" }} className='fw-bold'
                >
                    Good Morning, {userName}
                </span>
            </div>)
        }
        else if (hr => 12 && hr < 18) {
            return (<div>
                <span style={{ lineHeight: "1.7" }} className='fw-bold'>Good Afternoon, {userName}</span>
            </div>)
        }
        else {
            return (<div>
                <span style={{ lineHeight: "1.7" }} className='fw-bold'>Good Evening, {userName}</span>
            </div>)
        }

    }

    const priceArray = homeData.map((order) => order.servicePrice)
    const sales = priceArray.length !== 0 ? (priceArray.reduce((price, b) => price + b)) : 0
    const services = new Set(homeData.map(order => order.serviceName)).size

    const ordersCount = homeData.length

    const sortedArr = homeData.sort(function (a, b) {
        var c = new Date(a.bookingList.createdTimestamp);
        var d = new Date(b.bookingList.createdTimestamp);
        return d - c;
    }).slice(0, 5);

    
    const completed=[]
    const pending=[]
    const todaysData = new Date()
    homeData.forEach((order)=>{
        const weddingDate = new Date(order.bookingList.weddingDate)
        weddingDate > todaysData ?pending.push(order):completed.push(order)

    })
    const ordersCompleted=completed.length
    const ordersPending=pending.length
    
    


    const cardInfo = [
        {
            title: "Services",
            count: services,
            logo: <RocketLaunchIcon sx={{ fontSize: 45, color: "#350fef" }} />,
            boxColor: "#FB9251",
            backgroundColor: "#FDF2EC"

        },
        {
            title: "Orders",
            count: ordersCount,
            logo: <ProductionQuantityLimitsOutlined sx={{ fontSize: 45, color: "#fff" }} />,
            boxColor: "#2979f4",
            backgroundColor: "#EEF2FE"
        },
        {
            title: "Sales",
            count: <div><CurrencyRupeeIcon />{(sales / 1000).toFixed(0)}K</div>,
            logo: <AttachMoney sx={{ fontSize: 45, color: "#fff" }} />,
            boxColor: "#00a2f1",
            backgroundColor: "#EFF8FF"
        }

    ]


    return (
        <Container className="body-back" >
            <div>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <Box mt={8}>
                                <Paper
                                    className="d-flex flex-column justify-content-center align-items-start"
                                    sx={{
                                        width: "100%",
                                        height: 120,
                                        backgroundColor: "#212121",
                                        borderRadius: 3,
                                        pl: 2,
                                        color: "#fff"

                                    }}>
                                    <Typography variant="h5">
                                        <Welcome />
                                    </Typography>
                                    <Typography>
                                        Welcome Back to eVivah
                                    </Typography>

                                </Paper>
                            </Box>
                        </Col>
                        <Col>
                            <Row>
                                {cardInfo.map((card, index) => {
                                    return (
                                        <Col md={4}>
                                            <ShortDetails card={card} key={index} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="mt-4" md={4}>
                            <OrdersShortDetails ordersCompleted={ordersCompleted} ordersPending={ordersPending} ordersCount={ordersCount}  />
                        </Col>
                        <Col md={8}>
                            <NewOrders recent={sortedArr} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default DashBoardHome;