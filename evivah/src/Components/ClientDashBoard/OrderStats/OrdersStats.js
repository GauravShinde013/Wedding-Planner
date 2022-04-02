import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from "react-apexcharts";
import ClientTable from '../ClientTable/ClientTable';
import NewOrders from '../NewOrders/NewOrders';

const OrdersStats = ({ rows }) => {



    const lastestOrders = [
        {
            "customer name": "Pratik Suryawanshi",
            "Wedding Date": "2022-10-12",
            "Service Name": "Photography"
        },
        {
            "customer name": "Dexter Morgan",
            "Wedding Date": "2022-10-12",
            "Service Name": "Makeup Artist"
        },
        {
            "customer name": "Batista Angel",
            "Wedding Date": "2022-10-12",
            "Service Name": "Venue"
        },
        {
            "customer name": "Rita",
            "Wedding Date": "2022-10-12",
            "Service Name": "Photography"
        },
        {
            "customer name": "Masuka",
            "Wedding Date": "2022-10-12",
            "Service Name": "Photography"
        }
    ]

    return (
        <Container>
            <div className="d-flex align-items-center">

                <div className='p-3' style={{borderRadius:"20px", background:"#fff"}} >
                    <h1 className='text-center'>Orders</h1>
                    <div className="d-flex card-shadow flex-1 align-items-center me-3">
                        <div className='me-5 w-100'>
                            <h5 className='me-5 mb-4'>Total: </h5>
                            <h5 className='me-5 mb-4'>Completed: </h5>
                            <h5 className='me-5 mb-4'>Pending: </h5>
                        </div>
                        <div className='ms-3 w-100'>
                            <h5 className='mb-4'>30</h5>
                            <h5 className='mb-4'>13</h5>
                            <h5 className='mb-4'>43</h5>
                        </div>
                    </div>

                </div>
                <NewOrders orders={lastestOrders} />

            </div>
        </Container>

    );
};

export default OrdersStats;
