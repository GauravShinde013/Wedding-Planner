import "./Chart.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";


const Chart = ({ title, data, dataKey, grid }) => {




    return (
        <div className="admin-chart" >
            <h3 className="admin-chart-title">
                {title}
            </h3>
            <ResponsiveContainer width="100%"
                aspect={4 / 1}>
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="#5550bd"></XAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
                    <Tooltip></Tooltip>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" ></CartesianGrid>}
                    <Legend></Legend>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
