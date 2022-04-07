import './UserList.css'
import { DataGrid } from "@mui/x-data-grid";

import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import axios from 'axios';
import defaultLogo from "../../../img/blogDefault.png"
import { Spinner } from 'react-bootstrap';

const UserList = () => {
    const [rows, setRows] = useState([])
    const [loading,setLoading]=useState(false)

    const fetchAllUsers = useCallback(async () => {
        const url = `http://localhost:8080/admin/allUsers`
        axios.get(url).then((response) => {
            let result = response.data
            setRows(result.data)
        })


    }, [])



    useEffect(() => {
        fetchAllUsers()
        setLoading(true)
    }, [fetchAllUsers])

    const showUser=(params)=>{
    console.log("🚀 ~ file: UserList.js ~ line 34 ~ showUser ~ params", params.row)

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, },
        {
            field: 'User', headerName: 'User',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="userlist-user" >
                        <img className='userlist-img' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 150,},
        { field: 'phone', headerName: 'Mobile Number', width: 150 },
        {
            field: 'role',
            headerName: 'Role',
            width: 90,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="userlist-user">
                            <button onClick={showUser} className="userlist-edit">
                                Show
                            </button>
                    </div>
                )
            }
        },

    ];

    const userRows = rows.map((row, index) => ({
        id: index + 1,
        avatar: row.profilePicUrl?row.profilePicUrl:defaultLogo,
        username: row.firstName +" "+ row.lastName,
        email: row.email,
        phone: row.mobile,
        role: row.role
    }))





    return (
        <div>
            <Topbar />
            <div className="admin-container">
                <Sidebar />
                {
                    loading?<div className='userlist' >
                        <DataGrid
                            rows={userRows}
                            columns={columns}
                            pageSize={9}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>: <Spinner animation="border" variant="primary" />
                }
            </div>
        </div>

    )
}

export default UserList
