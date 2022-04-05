import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const getStatus = (params) => {
    const todaysData = new Date()
    const weddingDate = new Date(params.row.weddingDate)
    return (
        weddingDate > todaysData ?
            <button style={{padding:"10px 12px",background:"red",borderRadius:"16px",border:0}} >Pending</button> :
            <button style={{padding:"10px 12px",background:"green",borderRadius:"16px",border:0}}>Completed</button>
    )
}

const columns = [
    { field: 'id', headerName: 'No', width: 30 },
    {
        field: 'fullName',
        headerName: 'Customer name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 130,
        
    },
    { field: 'brideName', headerName: 'Brides name', width: 110 },
    { field: 'groomName', headerName: 'Grooms name', width: 110 },
    {
        field: 'bookingDate',
        headerName: 'Booking Date',
        width: 110,
    },
    {
        field: 'weddingDate',
        headerName: 'Wedding Date',
        width: 110,
    },
    {
        field: 'weddingCity',
        headerName: 'Wedding City',
        width: 120,
    },
    {
        field: 'guestCount',
        headerName: 'Guest Count',
        width: 70,
    },
    {
        field: 'serviceName',
        headerName: 'Service Name',
        width: 130,
    },
    {
        field: 'payAmount',
        headerName: 'Service Price',
        width: 130,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        renderCell: getStatus
    },

];




export default function ClientTable({ rows }) {
    return (
        <div style={{ height: 400, width: '100%', background: "#fff", borderRadius: 3 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
                disableSelectionOnClick
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "rgba(0,0,255,0.6)",
                        color: "#fff",
                        fontSize: 16
                    }
                }}
            />
        </div>
    );
}

