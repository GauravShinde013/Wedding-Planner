import { ApprovalOutlined, Cancel, LocationCity, LocationSearching, MailOutlined, Pending, PhoneAndroid, PushPinOutlined, Verified } from '@mui/icons-material';
import React from 'react';

const ShowProfile = ({ profile }) => {
    const Approved = () => {
        const flag = 1;
        const status = (flag === 1) ?
            (
                <div>
                    <Verified style={{ color: "green" }} />
                    {"Authorized Vendor"}
                </div>
            )
            : (flag === 0) ?
                (
                    <div>
                        <Cancel style={{ color: "red" }} />
                        {"Un Authorized Vendor"}
                    </div>
                ) :
                (
                    <div>
                        <Pending style={{ color: "teal" }} />
                        {"Pending Vendor"}
                    </div>
                );
        return status;

    }

 

    return (


        <div style={{backgroundColor:"#fff",borderRadius:"12px",border:" 1px solid rgb(45, 129, 198)"}}  className="card-shadow-1 flex-1">
            <div className='d-flex align-items-center'>
                <img width="50" height="50" className="rounded-circle" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" />
                <div className='d-flex flex-column ms-3 lh-1'>
                    <span className='fw-bold'> {profile["First Name"]} {profile["Last Name"]}</span>
                    <span className='fw-light'>
                        <Approved />

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
                    <span className='ms-2'>{profile.postal}</span>
                </div>

                <div className='d-flex align-items-center my-3'>
                    <LocationSearching />
                    <span className='ms-2'>{profile.address}</span>
                </div>

            </div>
        </div>
    );
};

export default ShowProfile;
