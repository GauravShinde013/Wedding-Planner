import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import {  useDispatch } from 'react-redux';
import { removeFromCart } from "../../../actions/index"

const media = {
    height: 260,
}

const cardContent = {
    display: 'flex',
    justifyContent: 'space-between',
}



const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const toIndianCurrency = (num) => {
        const curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        return curr;
    };

    const removeItem = (serviceId) => {
        dispatch(removeFromCart(serviceId))
    }


    return (
        <Card>
            <CardMedia image={product.cartImage} alt={product.vendorServiceId} sx={media} />
            <CardContent sx={cardContent} >
                <div className="d-flex flex-column" >
                    <Typography sx={{ fontSize: "24px", fontWeight: "500" }} variant='h4'>{product.serviceName}</Typography>
                    <Typography sx={{ fontSize: "15px", color: "#1565c0", fontWeight: "bolder" }} variant='h5'>{product.masterServiceName}</Typography>
                </div>
            </CardContent>
            <CardActions className='d-flex justify-content-between' >
                <Typography
                    sx={{ fontSize: "17px" }} variant='h5'>
                    {toIndianCurrency(product.price)}</Typography>
                <Button onClick={()=>removeItem(product.vendorServiceId)} variant='contained' type='button' color='secondary'>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem