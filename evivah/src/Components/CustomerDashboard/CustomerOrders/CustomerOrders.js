import { Favorite } from '@mui/icons-material'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Navbar from '../../Navbar/Navbar'
import SideBar from "../Sidebar/SideBar"

const CustomerOrders = () => {
    const [bookings, setBookings] = useState([])

    const showProfile = () => {
        const id = sessionStorage.id
        const url = `http://localhost:8080/booking/customer/${id}`

        axios.get(url).then((response) => {
            const result = response.data
            console.log("🚀 ~ file: CustomerOrders.js ~ line 16 ~ axios.get ~ result", result)
            setBookings(result.data)
        })
    }

    
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr
}
const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
    return curr;
};
    useEffect(() => {
        showProfile()
    }, [])

    console.log("🚀 ~ file: CustomerOrders.js ~ line 25 ~ CustomerOrders ~ bookings", bookings)


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Row style={{ width: "100%" }}>
                    <Col md={2}>
                        <SideBar />
                    </Col>
                    <Col md={10} style={{ paddingTop: "30px" }}>
                        <h4 className="pb-3">Bookings</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Services Availed</th>
                                    <th scope="col">Wedding Date</th>
                                    <th scope="col">Wedding City</th>
                                    <th scope="col">Couple</th>
                                    <th scope="col">Guest Count</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map((booking, index) => {

                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>

                                                <td>
                                                    <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                                        
                                                        {
                                                            booking.serviceDetailsList.map((service) => {
                                                                return(<option >
                                                                    
                                                                    {titleCase(service.brandName)}
                                                                </option>)
                                                            })
                                                        }

                                                    </select>
                                                </td>

                                                <td>{moment(booking.weddingDate).format('MMM DD, YYYY')}</td>
                                                <td>{titleCase(booking.weddingCity)}</td>
                                                <td>
                                                    {titleCase(booking.bridesName)} <Favorite sx={{ color: "red" }} />
                                                    {titleCase(booking.groomsName)}
                                                </td>
                                                <td>{booking.guestCount}</td>
                                                <td>{toIndianCurrency(booking.payAmount)}</td>

                                            </tr>)
                                    })
                                }

                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default CustomerOrders