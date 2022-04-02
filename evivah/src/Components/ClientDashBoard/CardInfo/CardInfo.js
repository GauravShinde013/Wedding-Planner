import { Box, Button, Fab, Paper, Typography } from '@mui/material';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NavigationIcon from '@mui/icons-material/Navigation';
import NewOrders from '../NewOrders/NewOrders';

// background-image: linear-gradient(#8C4AF2, #6A57F6);
const CardInfo = ({ cardInfo }) => {

    const IconStyle = {
        color: "#ffc107",
        backgroundColor: "#fff8e1",
        width: "44px",
        borderRadius: "12px",
        height: "44px",
        fontSize: "24px",
        cursor: "pointer"
    }


    return (

        <Container>

            <Row md={2} sm={1}>
                <Col sm={12}>
                    <Box mt={8}>
                        <Paper
                            className="d-flex flex-column justify-content-center align-items-start"
                            sx={{
                                width: "100%",
                                height: 120,
                                backgroundColor: "#f804d4",
                                borderRadius: 3,
                                pl: 2,
                                color: "#fff"

                            }}>
                            <Typography variant="h5">
                                Good Afternoon, Pratik!
                            </Typography>
                            <Typography>
                                Welcome Back to eVivah
                            </Typography>

                        </Paper>
                    </Box>
                </Col>

                <Col>
                    <Row>
                        {cardInfo.map(card => {

                            return (
                                <Col md={4}>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 178,
                                                height: 218,
                                                borderRadius: 5,
                                                backgroundColor: card.backgroundColor,
                                            },
                                        }}
                                        className="align-items-center justify-content-center"
                                    >

                                        <Paper>
                                            <Box className="d-flex align-items-center justify-content-center mt-2"
                                                sx={{
                                                    width: 70, height: 70,
                                                    backgroundColor: card.boxColor,
                                                    margin: "auto", borderRadius: "50%",
                                                    position: "relative"
                                                }}
                                            >

                                                {card.logo}
                                                {/* <
                                                    sx={{
                                                        fontSize: 45,
                                                        position: "absolute",
                                                    }}
                                                /> */}
                                            </Box>
                                            <Box>
                                                <Typography variant="h5" className="text-center mt-2 fw-bold">
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    variant="h5" className="text-center fw-bold"
                                                    sx={{
                                                        color: "#898BA0"
                                                    }}
                                                >
                                                    {card.count}
                                                </Typography>
                                            </Box>



                                            <Link
                                                className="d-flex align-items-center justify-content-center text-decoration-none"
                                                sx={{ position: "relative", width: "100%" }}
                                                to="/products"
                                            >

                                                <Fab sx={{mt:1.5,backgroundColor: "#fff",}} variant="extended" size="medium" color="#fff" aria-label="add">
                                                    <NavigationIcon sx={{ mr: 1 }} />
                                                    View All
                                                </Fab>
                                               
                                            </Link>
                                        </Paper>

                                    </Box>
                                </Col>
                            )

                        })}
                    </Row>
                </Col>

            </Row>
            <Row >
                <Col className="mt-4" md={4}>
                    <Box
                        sx={{

                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 300,
                                borderRadius: 5,
                                backgroundColor: "#f4fffdff",
                                // backgroundColor:"#F4F5FA",

                            },
                        }}
                    >
                        <Paper elevation={3} className='text-center p-3' >

                            <Box>
                                <EmojiEventsIcon sx={{ fontSize: 100, color: "#00539CFF" }} />
                                <Typography variant="h4" sx={{ color: "#130d57" }}>
                                    Orders
                                </Typography>
                                <Box
                                    className="d-flex align-items-center justify-content-center mt-2 pt-4"
                                >
                                    <Box
                                        pr={2}
                                        sx={{ borderRight: 1, borderColor: "#b5b6bb" }}
                                    >

                                        <Typography sx={{ color: "#130d57" }} variant="h5">
                                            45
                                        </Typography>
                                        <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                            Total
                                        </Typography>
                                    </Box>
                                    <Box px={2} sx={{ borderRight: 1, borderColor: "#b5b6bb" }}>
                                        <Typography sx={{ color: "#130d57" }} variant="h5">
                                            30
                                        </Typography>
                                        <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                            Completed
                                        </Typography>
                                    </Box>
                                    <Box pl={2}>
                                        <Typography sx={{ color: "#130d57" }} variant="h5">
                                            15
                                        </Typography>
                                        <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                            Pending
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Col>
                <Col md={8}>
                    <NewOrders></NewOrders>
                </Col>
            </Row>

        </Container >






    )
};

export default CardInfo;


