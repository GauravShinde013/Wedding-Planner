import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EditProfile } from '../../EditProfile/EditProfile';
import Navbar from '../../Navbar/Navbar';
import ShowProfile from '../ShowProfile/ShowProfile';
import SideBar from '../Sidebar/SideBar';

const ProfileInfo = () => {
    const [profile,setProfileData]=useState({})

    const showProfile=()=>{
        const id=sessionStorage.id
        const url = `http://localhost:8080/user/get/${id}`

        axios.get(url).then((response)=>{
            const result=response.data
            setProfileData(result.data)
        })
    }

    useEffect(()=>{
        showProfile()
    },[])

    return (
        <div>
           <Navbar/>
            <div
                className='d-flex'
                style={{ backgroundColor: "#E2F0FE" }}
            >
                <Grid container >
                    <Grid item md={2} sm={3} xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid item md={10} sm={9} xs={10} >
                        <Container>
                            <div className='d-flex mt-4'>
                                <Grid container>
                                    <Grid item md={6}>
                                        <ShowProfile profile={profile} />
                                    </Grid>
                                    <Grid md={6}>
                                        <EditProfile  profile={profile}/>
                                    </Grid>
                                </Grid>
                            </div>
                              
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
};

export default ProfileInfo;
