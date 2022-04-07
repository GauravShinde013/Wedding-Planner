
import { Link } from "react-router-dom"
import Chart from "../../../Components/AdminDashboard/Chart/Chart"
import "./Product.css"
import { productData } from "../../../dummyData";
import { Cancel, Pending, Publish, Verified } from "@mui/icons-material";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import { useLocation } from "react-router-dom"
import Imageslider from "../../../Components/Imageslider/Imageslider";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Product = () => {
    const images = ["https://owpphotos.s3.ap-south-1.amazonaws.com/24c5100f-29a4-44ff-88c2-4aeb6ab86d3f.jpg"]
    const location = useLocation()
    const service = location.state.service
    const [flag,setFlag]=useState(service.isApproved);
    const [loading,setLoading]=useState(false)

    const Approved = () => {
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
                        {"Un Approved Vendor"}
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

    const toIndianCurrency = (num) => {
        const curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        return curr;
    };

    const statusHandler=(serviceId,statusflag)=>{

        const url = `http://localhost:8080/admin/vendor/${serviceId}?status=${statusflag}`
        axios.patch(url).then((response) => {
            let result = response.data
            setFlag(statusflag)
            
        })
    }


    return (
        <div>
            <Topbar />
            <div className="admin-container">
                <Sidebar />
                <div className='product' >
                    <div className="product-title-container">
                        <div>
                            <h1 className="product-title">{service.brandName}</h1>
                            <span className='fw-light'>
                                <Approved />
                            </span>
                        </div>
                        <Link to="/newProduct">
                            <button className="product-add-btn">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="product-top">
                        <div className="product-top-left">
                            <Imageslider images={service.imgList} size="300px" />

                            {/* <Chart data={productData} dataKey="Sales" title="Sales Performance" ></Chart> */}
                        </div>
                        <div className="product-top-rigth">
                            <div className="product-info-bottom">
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Email:
                                    </span>
                                    <span className="product-info-value">
                                        {service.email}
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Category:
                                    </span>
                                    <span className="product-info-value">
                                        {service.masterServiceName}
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Vendor name:
                                    </span>
                                    <span className="product-info-value">
                                        {service.firstName} {service.lastName}
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Price:
                                    </span>
                                    <span className="product-info-value">
                                        {toIndianCurrency(service.servicePrice)}
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        City:
                                    </span>
                                    <span className="product-info-value">
                                        {service.vendorCity}
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Mobile:
                                    </span>
                                    <span className="product-info-value">
                                        {service.mobile}
                                    </span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end">
                                {
                                    flag !== 1 &&
                                    <button
                                        style={{ marginRight: "10px", borderRadius: "22px" }}
                                        type="button"
                                        class="btn btn-outline-success"
                                        onClick={()=>statusHandler(service.serviceId,1)}
                                    >
                                        Approve
                                    </button>
                                }
                                {
                                    flag !== 0 &&
                                    <button
                                        style={{ marginRight: "10px", borderRadius: "22px" }}
                                        type="button"
                                        class="btn btn-outline-danger"
                                        onClick={()=>statusHandler(service.serviceId,0)}
                                    >
                                        Reject
                                    </button>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="product-bottom">
                        <form className="product-form">
                            <div className="product-form-left">
                                <label>Service Specification</label>
                                <p>{service.specification}</p>
                                <label>Service Details</label>
                                <p>
                                    {service.description}
                                </p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
