
import Chart from "react-apexcharts";
import { Container } from "react-bootstrap";

const ServicesComparison = () => {
    const data=[
        {
            name: "serviceName-1",
            data: [100, 200, 300, 322, 1333, 442, 4422]
        },
        {
            name: "serviceName-2",
            data: [1070, 2050, 3040, 8522, 1333, 4742, 4722]
        },
        {
            name: "serviceName-3",
            data: [1070, 2750, 3040, 8522, 1333, 4742, 4722]
        },
        {
            name: "serviceName-4",
            data: [1070, 2050, 3040, 8522, 1333, 4742, 4722]
        },
        {
            name: "serviceName-5",
            data: [1070, 2050, 3040, 8522, 1333, 4742, 422]
        }
    ]

    return (
        <Container style={{borderRadius:"12px"}} className="my-4 bg-white card-shadow-1"  >
            <Chart
                type='bar'
                width={"100%"}
                height={400}

                series={data}

               

                options={{
                    // colors:["#333","#ff0000"],
                  
                    theme: {
                        mode: "day"
                    },
                    xaxis: {
                       
                        tickPlacement:"on",
                        categories: ["jan", "feb", "mar", "apr", "may", "june", "july"],
                        title:{
                            text:"Months",
                            style:{
                                color:"#0f0",
                                fontSize:20
                            }

                        }
                    },
                    chart: {
                        stacked: true
                    },
                    dataLabels: {
                        formatter: (val) => {
                            return `$${val}`
                        },
                        style: {
                            fontSize: 18
                        }
                    },
                    yaxis: {
                        labels: {
                               formatter: (val) => {
                                return `$${val}`
                            },
                            style: {
                                fontSize: 18
                            }
                        },
                        title:{
                            text:"Sales",
                            style:{
                                color:"#ff0",
                                fontSize:20
                            }

                        }
                    },
                    legend:{
                        show:true,
                        position:'bottom'
                    }

                }}
            >

            </Chart>
        </Container>
    );
};

export default ServicesComparison;

