
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from 'react';
import "./ProductList.css";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

const ProductList = () => {

    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const fetchAllVendors = useCallback(async () => {
        const url = `http://localhost:8080/admin/allVendors`
        axios.get(url).then((response) => {
            let result = response.data
            setRows(result.data)
        })


    }, [])



    useEffect(() => {
        fetchAllVendors()
        setLoading(true)
    }, [fetchAllVendors])

    const isApproved = (params) => {
        if (params.row.status === 0) {
            return (
                <button
                    style={{
                        border: "none",
                        borderRadius: "10px",
                        padding: "5px 10px",
                        backgroundColor: "red",
                        color: "white"
                    }}
                >
                    Not Approved
                </button>
            )
        }
        else if (params.row.status === 1) {
            return (
                <button
                    style={{
                        border: "none",
                        borderRadius: "10px",
                        padding: "5px 10px",
                        backgroundColor: "green",
                        color: "white"
                    }}
                >
                    Approved
                </button>
            )
        }
        else {
            return (
                <button
                    style={{
                        border: "none",
                        borderRadius: "10px",
                        padding: "5px 10px",
                        backgroundColor: "pink",
                        color: "white"
                    }}
                >
                    Pending
                </button>
            )
        }
    }

    const productHandler = (serviceId) => {

        const service = rows.filter((row) => row.serviceId === serviceId);
        navigate("/admin-dashboard/vendor", { state: { service: service[0] } });

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'vendor', headerName: 'Vendor',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="productlist-item" >
                        <img className='productlist-img' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            renderCell: isApproved
        },
        {
            field: 'Price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="productlist-action">
                        <button onClick={() => productHandler(params.row.serviceId)} className="productlist-edit">
                            Show
                        </button>
                    </div>
                )
            }
        },

    ];

    const vendorRows = rows.map((row, index) => ({
        id: index + 1,
        img: row.imgList[0],
        name: row.brandName,
        status: row.isApproved,
        Price: row.servicePrice,
        category: row.masterServiceName,
        serviceId: row.serviceId
    }))


    return (
        <div>
            <Topbar />
            {
                loading ? <div className="admin-container">
                    <Sidebar />
                    <div className='product-list' >
                        <DataGrid
                            rows={vendorRows}
                            columns={columns}
                            pageSize={9}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </div> : <Spinner animation="border" variant="primary" />
            }
        </div>

    )
}

export default ProductList
