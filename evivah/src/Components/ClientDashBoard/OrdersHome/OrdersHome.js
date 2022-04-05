
import { Grid } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import ClientTables from "../ClientTable/ClientTable";
import SideBar from "../Sidebar/SideBar";



function OrdersHome() {
    const [ordersData, setOrdersData] = useState([])

    const getMasterServices = () => {
        const userId = sessionStorage.id
        const url = `http://localhost:8080/orders/vendor/user/${userId}`
        axios.get(url).then((response) => {
            let result = response.data
            setOrdersData(result.data)
        })
    }

    useEffect(() => {
        getMasterServices()
    }, [])




    var result = ordersData.map((order,index) => ({
        id: index+1,
        fullName:order.bookingList.customerFirstName + " "+order.bookingList.customerLastName,
        brideName: order.bookingList.bridesName,
        groomName: order.bookingList.groomsName,
        weddingDate:moment(order.bookingList.weddingDate).format('MMM DD, YYYY'),
        serviceName: order.serviceName,
        servicePrice: order.bookingList.payAmount,
        weddingCity:order.bookingList.weddingCity,
        payAmount:"₹ "+order.servicePrice,
        guestCount:order.bookingList.guestCount,
        bookingDate:moment(order.bookingList.createdTimestamp).format('MMM DD, YYYY'),
      
    }));


   


    return (
        <div>
            <Navbar />
            <div
                className='d-flex'
                style={{ backgroundColor: "#E2F0FE" }}
            >
                <Grid container>
                    <Grid item md={2} sm={3} xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid item sm={9} md={10} xs={10}>
                        <Container className="my-3 body-back" >
                            <h2 className='float-mid text-primary' >Orders </h2>
                            <ClientTables rows={result} />
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default OrdersHome;

