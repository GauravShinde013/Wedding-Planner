import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { Link } from 'react-router-dom';



const NewOrders = ({ recent }) => {
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
                        <Link className="text-decoration-none" to="/vendor-dashboard/orders">
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
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#212121", color: "#fff" }} >Wedding Date</TableCell>
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#212121", color: "#fff" }}>Customer Name</TableCell>
                                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#212121", color: "#fff" }}>Service Name</TableCell>

                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {recent.map((row) => (
                                          <TableRow
                                                key={row.orderId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                                <TableCell component="th" scope="row">
                                                      {moment(row.bookingList.createdTimestamp).format('MMM DD, YYYY')}
                                                </TableCell>
                                                <TableCell>{row.bookingList.customerFirstName} {row.bookingList.customerLastName}</TableCell>
                                                <TableCell>{row.serviceName}</TableCell>

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
