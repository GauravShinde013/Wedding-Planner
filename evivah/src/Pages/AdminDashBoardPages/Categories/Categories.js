
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from 'react';
import "./ProductList.css";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import MasterService from "../../../Components/AdminDashboard/AddMasterService/AddNewService"



const ProductList = () => {

    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchAllCategories = useCallback(async () => {
        const url = `http://localhost:8080/masterServices`
        axios.get(url).then((response) => {
            let result = response.data
            setRows(result.data)
        })
    }, [])



    useEffect(() => {
        fetchAllCategories()
        setLoading(true)
    }, [fetchAllCategories])


    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1) + " ";
        }
        return splitStr
    }


    const handleDelete = (masterServiceId) => {
        rows.forEach(item => console.log(item.id))
        setRows(rows.filter(item => item.id !== masterServiceId))

        const url = `http://localhost:8080/masterService/delete/${masterServiceId}`
        axios.get(url).then((response) => {
            let result = response.data
            if (result.status === "success") {
                toast.success("")
            }
        })
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'service', headerName: 'Category',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="productlist-item" >
                        <img className='productlist-img' src={params.row.img} alt="" />
                        {params.row.service}
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="userlist-user">
                        <DeleteOutline onClick={() => handleDelete(params.row.masterServiceId)} className="userlist-delete" ></DeleteOutline>
                    </div>
                )
            }
        },


    ];

    const vendorRows = rows.map((row, index) => ({
        id: index + 1,
        service: row.serviceName,
        img: row.thumbnailLink,
        masterServiceId: row.id
    }))


    return (
        <div>
            <Topbar />
            {
                loading ? <div className="admin-container">
                    <Sidebar />



                    <div className='product-list' >
                        <div className="mb-3">
                            <MasterService/>
                            {/* <Link to="/newProduct">
                                <button className="product-add-btn">
                                    Create New Service
                                </button>
                            </Link> */}
                        </div>
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
