
import { DataGrid } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';


const columns = [
    { field: 'id', headerName: 'No', width: 30 },
    {
        field: 'fullName',
        headerName: 'Customer name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
    { field: 'firstName', headerName: 'Brides name', width: 130 },
    { field: 'lastName', headerName: 'Grooms name', width: 130 },
    {
        field: 'bookingDate',
        headerName: 'Booking Date',
        width: 120,
    },
    {
        field: 'weddingDate',
        headerName: 'Wedding Date',
        width: 120,
    },
    {
        field: 'serviceName',
        headerName: 'Service Name',
        width: 130,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
    },

];

const rows = [
    {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35,
        serviceName: "Photography",
        weddingDate:"2022-2-10",
        bookingDate:"2021-08-10",
        servicePrice:12344,
    },

    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, serviceName: "Makeup",weddingDate:"2022-2-10",
    bookingDate:"2021-10-10",
    servicePrice:12344,status:"Complete" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, serviceName: "Makeup" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, serviceName: "Makeup" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 78, serviceName: "Makeup" },
    { id: 6, lastName: 'Melisandre', firstName: "Noone", age: 150, serviceName: "Makeup" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, serviceName: "Makeup" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, serviceName: "Makeup" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, serviceName: "Makeup" },
];


function ClientTable() {
    return (
 
        <Container className="my-3 body-back" >
            <h2 className='float-mid text-primary' >Orders </h2>
            <div style={{ height: 500, width: "100%",background:"#fff",borderRadius:3 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[10]}
                    rowHeight={60}
                    sx={{
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "rgba(0,0,255,0.6)",
                            color: "#fff",
                            fontSize: 16
                          }
                    }}
                />
            </div>
        </Container>
    );
}

export default ClientTable;

