import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

const Review = ({ total }) => {
    const itemsData = useSelector(state => state.cart)
    const productArray = itemsData.total !== 0 ? itemsData.items : 0;



    const toIndianCurrency = (num) => {
        const curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        return curr;
    };


    return (
        <>
            <Typography variant='h6' gutterBottom>Order summary</Typography>
            <List disablePadding>
                {productArray.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.serviceName} secondary={product.masterServiceName} />
                        <Typography variant='body2'>{toIndianCurrency(product.price)}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
                        {toIndianCurrency(total)}
                    </Typography>
                </ListItem>
            </List>
        </>
    )

}

export default Review
