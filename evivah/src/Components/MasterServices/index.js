import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const MasterServices = ({ service}) => {
    
    const navigate=useNavigate()

    const vendorHandler=(e)=>{
            navigate("/vendors-list",{state:{serviceId:service.id}})
    }

    return (
        <div onClick={vendorHandler} className="card text-center shadow">
            <div className="overflow service-img">
                <img src={service.thumbnailLink} alt="" className='card-img-top' />
            </div>
            <div className="card-body-text-dark">
                <h4 className="service-card-title">{service.serviceName}</h4>
            </div>
        </div>

    );
}


export default MasterServices;

