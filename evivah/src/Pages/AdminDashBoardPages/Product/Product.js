
import { Link } from "react-router-dom"
import Chart from "../../../Components/AdminDashboard/Chart/Chart"
import "./Product.css"
import { productData } from "../../../dummyData";
import { Publish } from "@mui/icons-material";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";

const Product = () => {


    return (
        <div>
            <Topbar />
            <div className="admin-container">
                <Sidebar />
                <div className='product' >
                    <div className="product-title-container">
                        <h1 className="product-title">Product</h1>

                        <Link to="/newProduct">
                            <button className="product-add-btn">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="product-top">
                        <div className="product-top-left">
                            <Chart data={productData} dataKey="Sales" title="Sales Performance" ></Chart>
                        </div>
                        <div className="product-top-rigth">
                            <div className="product-info-top">
                                <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-info-img" />
                                Apple Airpod
                                <span className="product-name">
                                </span>
                            </div>
                            <div className="product-info-bottom">
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        id:
                                    </span>
                                    <span className="product-info-value">
                                        1234
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Sales:
                                    </span>
                                    <span className="product-info-value">
                                        5234
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        Active:
                                    </span>
                                    <span className="product-info-value">
                                        yes
                                    </span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">
                                        In Stock:
                                    </span>
                                    <span className="product-info-value">
                                        no
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <form className="product-form">
                            <div className="product-form-left">
                                <label>Product Name</label>
                                <input type="text" placeholder="Apple Airpod" />
                                <label>In Stock</label>
                                <select name="inStock" id="inStock">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label>Active</label>
                                <select name="active" id="active">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="product-form-rigth">
                                <div className="product-upload">
                                    <img className="product-upload-img" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                    <label for="file">
                                        <Publish></Publish>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="product-btn">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
