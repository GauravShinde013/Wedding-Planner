import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Paper } from '@mui/material';
import {emptyCart} from "../../actions/index"
import { useNavigate } from 'react-router-dom';

const emptyButton = (theme) => ({
    marginTop: "20px",
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
    },
})
const checkoutButton = (theme) => ({
    minWidth: '150px',
})



const Cart = () => {

    const itemsData = useSelector(state => state.cart)
    const productArray = itemsData.total !== 0 ? itemsData.items : 0;

    const navigate=useNavigate()
    const dispatch = useDispatch()

    const priceArray = productArray ? productArray.map((order) => order.price) : 0
    const Total = priceArray ? (priceArray.length !== 0 ? (priceArray.reduce((price, b) => price + b)) : 0) : 0


    const toIndianCurrency = (num) => {
        const curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        return curr;
    };

    

    const CartEmpty = () => {
        return (
            <Container sx={{paddingTop:"50px"}}>
                <Paper className="p-3" elevation={4} >
                    <div className="d-flex align-items-center justify-content-center">
                        <h3>
                            Looks like your cart is lonely, start adding some vendors :)
                        </h3>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            style={
                                {
                                    padding: "11px 23px",
                                    borderRadius: "7px",
                                    background: "darkcyan",
                                    border: "none"
                                }
                            }
                        >
                            <Link className='text-white' to="/master-services">
                                Back
                            </Link>
                        </button>
                    </div>
                </Paper>
            </Container>
        )
    }
    const checkoutHandler=()=>{
        navigate("/checkout",)
    }


    const FilledCart = () => (

        <div
            style={{ padding: "28px", background: "#ffe6ee" }
            }
        >
            <div className="d-flex justify-content-between align-items-center">
                <Typography variant='h3' gutterBottom>Your Shopping Cart</Typography>

            </div>
            <Grid container spacing={3} className="justify-content-between">
                <Grid item md={10} xs={12} sm={4}>
                    <Grid spacing={3} container>
                        {
                            productArray.map((product) => {
                                return (
                                    <Grid item md={4} xs={12} sm={4} >
                                        <CartItem product={product} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Grid>

                <Grid item md={2} xs={12} sm={4} >
                    <div style={{ backgroundColor: "" }} >
                        <Typography sx={{ fontSize: "22px", paddingBottom: "10px" }} variant='h4'>
                            Subtotal: {toIndianCurrency(Total)}
                        </Typography>
                        <div>

                            <Button onClick={()=>checkoutHandler} sx={checkoutButton} component={Link} to='/checkout' size='small' type='button'
                                variant='contained' color='primary'>Checkout</Button>
                            <Button
                             onClick={()=>dispatch(emptyCart())}
                             sx={emptyButton} size='small' type='button' variant='contained' color='secondary' >Empty cart</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    )

    // if(!cart.line_items) return 'Loading...'

    return (
        <div>
            <Navbar />
            {
                itemsData.total !== 0 ?
                    <FilledCart /> : CartEmpty()
            }

        </div>
    )
}

export default Cart;
