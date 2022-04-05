import NavigationIcon from '@mui/icons-material/Navigation';
import { Box, Fab, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const ShortDetails = ({card}) => {
    return (
        <div>
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

                        <Fab sx={{ mt: 1.5, backgroundColor: "#fff", }} variant="extended" size="medium" color="#fff" aria-label="add">
                            <NavigationIcon sx={{ mr: 1 }} />
                           
                        </Fab>

                    </Link>
                </Paper>

            </Box>
        </div>
    )
}

export default ShortDetails