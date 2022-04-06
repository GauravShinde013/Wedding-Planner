import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ShowProfile from '../Components/ClientDashBoard/ShowProfile/ShowProfile'
import Sidebar from "../Components/CustomerDashboard/Sidebar/SideBar"
import { EditProfile } from '../Components/EditProfile/EditProfile'
import Navbar from '../Components/Navbar/Navbar'
const CustomerDashboardHome = () => {
    const [profile, setProfileData] = useState({})

    const showProfile = () => {
        const id = sessionStorage.id
        const url = `http://localhost:8080/user/get/${id}`

        axios.get(url).then((response) => {
            const result = response.data
            setProfileData(result.data)
        })
    }

    useEffect(() => {
        showProfile()
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Row style={{width:"100%"}}>
                        <Col md={2}>
                            <Sidebar />
                        </Col>
                        <Col md={10} style={{paddingTop:"30px"}}>
                            <Row>
                                <Col>
                                    <ShowProfile profile={profile} />
                                </Col>
                                <Col>
                                    <EditProfile profile={profile} />
                                </Col>
                            </Row>
                        </Col>
                </Row>
            </div>
        </div>
    )
}

export default CustomerDashboardHome