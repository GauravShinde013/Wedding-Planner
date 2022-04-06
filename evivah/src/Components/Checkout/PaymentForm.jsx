import React, { useState } from 'react'
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { emptyCart } from '../../actions';

const REACT_APP_STRIPE_PUBLIC_KEY = "pk_test_51KlPRbSCEMfNp29Dy5qE6d8ejwX7ldy1x9oP8bYuEl0FrLl432uaEaDaz7phQmMOAbvroAiIY0Uw3HUDx71Lf2dA00fvfD9ACv"

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ backStep, weddingData, nextStep, timeout }) => {



  const itemsData = useSelector(state => state.cart)
  const productArray = itemsData.total !== 0 ? itemsData.items : 0;

  const priceArray = productArray ? productArray.map((order) => order.price) : 0
  const Total = priceArray ? (priceArray.length !== 0 ? (priceArray.reduce((price, b) => price + b)) : 0) : 0

  const dispatch = useDispatch()

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR'
    });
    return curr;
  };



  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();         //-> Prevents page refresh on payments page

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {

      const orders = []
      const ordersArray = productArray.map((order) => order.vendorServiceId)
      for (const key of ordersArray) {
        orders.push({ vendorServiceDetailsId: key })
      }
      console.log("🚀 ~ file: PaymentForm.jsx ~ line 47 ~ handleSubmit ~ orders", orders)
      const body = {
        bridesName: weddingData.bridesName,
        groomsName: weddingData.groomsName,
        guestCount: weddingData.guestCount,
        payAmount: Total,
        weddingCity: weddingData.weddingCity,
        weddingDate: weddingData.weddingDate,
        customerId: sessionStorage.id,
        payStatus: 1,
        orders: orders,

      };

      const url = `http://localhost:8080/bookings/add`


      axios.post(url, body).then((response) => {
        dispatch(emptyCart())
      })
      
      timeout();
      nextStep();

    }
  }

  return (
    <>
      <Review total={Total} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {toIndianCurrency(Total)}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );

}

export default PaymentForm

