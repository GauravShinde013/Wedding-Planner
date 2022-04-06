import "./WidgetLg.css"
import moment from "moment"

const WidgetLg = ({ latestBookings }) => {

    const Button = (({ type }) => {

        return <button className={"admin-w-lg-btn " + type} >{type}</button>
    })

    const toIndianCurrency = (num) => {
        const curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        return curr;
    };

    return (
        <div className="admin-widgetlg" >
            <h3 className="admin-w-large-title">
                Latest Transactions
            </h3>
            <table className="admin-w-large-table">
                <tr className="admin-w-lg-tr">
                    <th className="admin-w-lg-th">Customer</th>
                    <th className="admin-w-lg-th">Date</th>
                    <th className="admin-w-lg-th">Amount</th>
                </tr>

                {
                    latestBookings.map((booking) => {
                        return (
                            <tr className="admin-w-lg-tr">
                                <td className="admin-w-lg-user">
                                    <span className="admin-w-lg-name">
                                        {booking.customerFirstName} {booking.customerLastName}
                                    </span>
                                </td>
                                <td className="admin-w-lg-date">
                                    {moment(booking.createdTimestamp).format('MMM DD, YYYY')}
                                </td>
                                <td className="admin-w-lg-amount">
                                    {toIndianCurrency(booking.payAmount)}
                                </td>
                            </tr>
                        )
                    })
                }
               

            </table>
        </div>
    )
}

export default WidgetLg

