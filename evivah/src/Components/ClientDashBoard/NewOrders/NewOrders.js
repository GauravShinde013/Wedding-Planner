import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
}

const rows = [
      createData('20-02-2022', "Pratik", "Photography"),
      createData('22-03-2022', "Dexter", "Photography"),
      createData('02-02-2022', "Debra", "Photography"),
      createData('21-05-2022', "Harry", "Photography"),
      createData('21-02-2022', "Rita", "Photography"),

];

const NewOrders = () => {
      const tableCss = {
            borderSpacing: '12px',
            borderColor: '#545b5e',
            borderCollapse: 'separate',

      }


      return (

            <Box>
                  <Box className="d-flex align-items-center justify-content-between">
                        <Typography pb={1} variant="h6" component="h2" sx={{ color: "#23245D" }}>
                              Recent Orders
                        </Typography>
                        <Link className="text-decoration-none" to="/orders">
                              <Typography className="d-flex align-items-center justify-content-between" sx={{ color: "#23245D" }}>
                                    See All Orders
                                    <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
                              </Typography>
                        </Link>
                  </Box>


                  <TableContainer sx={{ borderRadius: 4 }} component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead >
                                    <TableRow>
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#002884", color: "#fff" }} >Wedding Date</TableCell>
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#002884", color: "#fff" }}>Customer Name</TableCell>
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#002884", color: "#fff" }}>Service Name</TableCell>

                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {rows.map((row) => (
                                          <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                                <TableCell component="th" scope="row">
                                                      {row.name}
                                                </TableCell>
                                                <TableCell>{row.calories}</TableCell>
                                                <TableCell>{row.fat}</TableCell>

                                          </TableRow>
                                    ))}
                              </TableBody>
                        </Table>
                  </TableContainer>

                  {/* <Box
                        sx={{
                              width: "100%",
                              height: 50,
                              backgroundColor: "red",
                        }}
                  >

                  </Box> */}

            </Box>

            // <div style={{borderRadius:"20px", background:"#fff"}} className='flex-2 p-3 card-shadow m-3'>
            //       <div className='d-flex mb-3 justify-content-between'>
            //             <h3 style={{ fontWeight: '600' }} >New Orders</h3>
            //             <Link to='/orders'>
            //                   <button style={{ backgroundColor: 'rgb(0,112,112)' }} className='fs-4 text-white rounded border boder-none'>Orders</button>
            //             </Link>
            //       </div>
            //       <Table style={tableCss} className='w-100'>
            //             <tr>
            //                   <th style={{ fontWeight: "600" }} className="text-start  fs-5">Customer Name</th>
            //                   <th style={{ fontWeight: "600" }} className="text-start  fs-5">Wedding Date</th>
            //                   <th style={{ fontWeight: "600" }} className="text-start  fs-5">Service Name</th>
            //                   {/* <th className="text-start">Brides and Grooms Name</th> */}
            //             </tr>
            //             {orders.map(order => {
            //                   return <tr>

            //                         <td>{order["customer name"]}</td>
            //                         <td style={{ fontWeight: "300" }}>{order["Wedding Date"]}</td>
            //                         <td style={{ fontWeight: "300" }}>{order["Service Name"]}</td>
            //                         {/* <td style={fWeight}>Vicky and Katrina</td> */}
            //                   </tr>
            //             })}



            //       </Table>

            // </div>
      );
};

export default NewOrders;
