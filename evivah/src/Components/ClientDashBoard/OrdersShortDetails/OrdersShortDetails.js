import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const OrdersShortDetails = ({ ordersCompleted, ordersPending, ordersCount }) => {
    return (
        <div>
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
                                    {ordersCount}
                                </Typography>
                                <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                    Total
                                </Typography>
                            </Box>
                            <Box px={2} sx={{ borderRight: 1, borderColor: "#b5b6bb" }}>
                                <Typography sx={{ color: "#130d57" }} variant="h5">
                                    {ordersCompleted}
                                </Typography>
                                <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                    Completed
                                </Typography>
                            </Box>
                            <Box pl={2}>
                                <Typography sx={{ color: "#130d57" }} variant="h5">
                                    {ordersPending}
                                </Typography>
                                <Typography variant="button" sx={{ color: "#aaaebd", fontSize: "14px" }}>
                                    Pending
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default OrdersShortDetails