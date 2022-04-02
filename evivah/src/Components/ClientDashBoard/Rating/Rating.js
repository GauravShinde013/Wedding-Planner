import { Box, Rating } from '@mui/material';
import React from 'react';

const Ratings = ({readOnly,rating}) => {
    const [value, setValue] = React.useState(rating);


    return (
            <Box
            
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly/>
            </Box>
    );
};

export default Ratings;
