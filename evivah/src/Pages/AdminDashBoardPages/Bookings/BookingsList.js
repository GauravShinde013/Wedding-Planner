
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from 'react';
import "./ProductList.css";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { Favorite } from '@mui/icons-material'
import moment from "moment"


const ProductList = () => {

    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchAllBookings = useCallback(async () => {
        const url = `http://localhost:8080/bookings`
        axios.get(url).then((response) => {
            let result = response.data
            setRows(result.data)
        })
    }, [])



    useEffect(() => {
        fetchAllBookings()
        setLoading(true)
    }, [fetchAllBookings])




    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1) +" ";
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

    const getStatus = (params) => {
        const todaysData = new Date()
        const weddingDate = new Date(params.row.weddingDate)
        return (
            weddingDate > todaysData ?
                <button style={{ padding: "10px 12px", background: "red", borderRadius: "16px", border: 0 }} >Pending</button> :
                <button style={{ padding: "10px 12px", background: "green", borderRadius: "16px", border: 0 }}>Completed</button>
        )
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'couple', headerName: 'Couple',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="productlist-item" >
                        {titleCase(params.row.bridesName)}
                        <Favorite sx={{ color: "red" }} />
                        {titleCase(params.row.groomsName)}
                    </div>
                )
            }
        },
        {
            field: 'customer', headerName: 'Customer',
            width: 230,

        },
        {
            field: 'payAmount',
            headerName: 'Amount',
            width: 120,

        },
        {
            field: 'weddingDate',
            headerName: 'Wedding Date',
            width: 160,
            renderCell: (params) => {
                return (
                    <div>
                        {moment(params.row.weddingDate).format('MMM DD, YYYY')}
                    </div>
                )
            }
        },
        {
            field: 'weddingCity',
            headerName: 'Wedding City',
            width: 160,
        },
        {
            field: 'vendors',
            headerName: 'Services Availed',
            width: 160,
            renderCell: (params) => {
                return (
                    <div style={{ marginTop: "20px" }} >
                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                            {
                                params.row.vendors.map((service) => {
                                    return (
                                        <option >
                                            {titleCase(service.brandName)}
                                        </option>)
                                })
                            }
                        </select>
                    </div>
                )
            }

        },
        {
            field: 'bookingDate',
            headerName: 'Booking Date',
            width: 160,
            renderCell: (params) => {
                return (
                    <div>
                        {moment(params.row.bookingDate).format('MMM DD, YYYY')}
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: getStatus
        },

    ];

    const vendorRows = rows.map((row, index) => ({
        id: index + 1,
        bridesName: row.bridesName,
        groomsName: row.groomsName,
        customer: row.customerFirstName + " " + row.customerLastName,
        payAmount: toIndianCurrency(row.payAmount),
        weddingDate: row.weddingDate,
        weddingCity: titleCase(row.weddingCity),
        bookingDate: row.createdTimestamp,
        vendors: row.serviceDetailsList,
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
