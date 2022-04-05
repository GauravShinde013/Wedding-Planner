import { ApprovalOutlined, Cancel, LocationCity, LocationSearching, MailOutlined, Pending, PhoneAndroid, PushPinOutlined, Verified } from '@mui/icons-material';
import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import ChangePassword from '../ChangePassword/ChangePassowrd';
import profilePic from "../../../img/blogDefault.png"

const ShowProfile = ({profile}) => {

  

    const profileContainer = {
        backgroundColor: "#fff",
        borderRadius: "12px",
        border: " 1px solid rgb(45, 129, 198),",
        flex: "1",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
        minWidth:"400px",
        width:"90%",
        minHeight:"500px"
    }

    return (


        <div style={profileContainer} >
            <div className='d-flex align-items-center'>
                <img style={{objectFit:"cover"}} width="50" height="50" className="rounded-circle" src={profile.profilePicUrl?profile.profilePicUrl:profilePic} alt="" />
                <div className='d-flex flex-column ms-3 lh-1'>
                    <span className='fw-bold'>{profile.firstName} {profile.lastName}  </span>
                    <span className='fw-light'>

                    </span>
                </div>
            </div>
            <div className="mt-3">
                {/* <span className="fw-bold"> Account Details</span>
        <div className='d-flex align-items-center my-3'>
            <PermIdentity />
            <span className='ms-2'>{profile["First Name"]}</span>
            <span className='ms-2'>{profile["Last Name"]}</span>
        </div>

        <div className='d-flex align-items-center my-3'>
            <PermIdentity />
        </div> */}
                <span className="fw-bold">Contact Details</span>
                <div className='d-flex align-items-center my-3'>
                    <PhoneAndroid />
                    <span className='ms-2'>{profile.mobile}</span>
                </div>

                <div className='d-flex align-items-center my-3'>
                    <MailOutlined />
                    <span className='ms-2'>{profile.email}</span>
                </div>

                <div className='d-flex align-items-center my-3'>
                    <LocationCity />
                    <span className='ms-2'>{profile.city}</span>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <ApprovalOutlined />
                    <span className='ms-2'>{profile.state}</span>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <PushPinOutlined />
                    <span className='ms-2'>{profile.pincode}</span>
                </div>

                <div className='d-flex align-items-center my-3'>
                    <LocationSearching />
                    <span className='ms-2'>{profile.addressLine}</span>
                </div>

                <div style={{ padding: "16px 0" }}>
                    <ChangePassword/>
                </div>

            </div>
        </div>
    );
};

export default ShowProfile;
