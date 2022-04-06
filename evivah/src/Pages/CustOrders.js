import axios from 'axios'
//import { URL } from '../config'
import { Link} from 'react-router-dom'
import { useState, useEffect} from 'react'


function CustOrders() 
{
    const [orders, setProduct]= useState([]);

    useEffect(() => {
        let isMounted =true;
        document.title="Orders";

        axios.get(``).then(res=>{
            if(isMounted){
                if(res.data.status ==200){
                    setProduct(res.data.orders);
                    // setLoaing(false);
                }

            }
        });
        return () => {
            isMounted= false
        };
    }, []);

    var display_orders="";
    display_orders= orders.map((items)=>{
        return(
            <tr key ={items.id}>
                <td>{items.id}</td>
                <td>{items.brides_name}</td>
                <td>{items.grooms_name}</td>
                <td>{items.pay_amount}</td>
                <td>{items.pay_status}</td>
                <td>{items.createdtimestamp}</td>
                {/* use moment */}
                <td>
                    <Link to={`edit-product/${items.id}`} className="btn btn-success btn-sm">View Details</Link>
                </td>
                </tr>
        )
    });
    return (
        
        <div className="container px-4 mt-3">
            <div className="mycard">
                <div className="mycard-header">
                    <h4>Orders</h4>
                </div >
                <div className ="mycard-body">
                <div className ="table-responsive">
                    <table className ="table table-bordered table-stripped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Bride</th>
                                <th>Groom </th>
                                <th>Order Amount</th>
                                <th>Payment Status</th>
                                <th>Timestamp</th>
                            </tr>     
                        </thead>
                        <tbody>
                            {display_orders}
                        </tbody>
                    </table>

                </div>
                </div>
            </div>
        </div>
        
    ) 
}


export default CustOrders;