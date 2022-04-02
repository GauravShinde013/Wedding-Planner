import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from "react-apexcharts";
import { userData } from '../../../dummyData';






const ServiceSales = () => {

    const names = userData.map((user) => (user.name));
    const data = userData.map((user) => (user['Active User']));

    return (

        <Container className="my-4"  >
            <h3>Sales Month Wise For Service </h3>
            <Chart
                type='line'
                width={"100%"}
                height={300}

                series={[
                    {
                        name: "serviceName-1",
                        data: data
                    }

                ]}

                options={{
                    // colors:["#333","#ff0000"],
                    theme: {
                        mode: "day"
                    },
                    xaxis: {

                        tickPlacement: "on",
                        categories: names,
                        title: {
                            text: "Months",
                            style: {
                                color: "#0f0",
                                fontSize: 20
                            }

                        }
                    },
                    chart: {
                        stacked: false
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
                        title: {
                            text: "Sales",
                            style: {
                                color: "#ff0",
                                fontSize: 20
                            }

                        }
                    },
                    legend: {
                        show: true,
                        position: 'bottom'
                    },
                    stroke: {
                        show: true,
                        curve: 'smooth',
                        lineCap: 'round',
                        colors: undefined,
                        width: 2,
                        dashArray: 0,
                    }

                }}

            >

            </Chart>
        </Container>
    )

}


export default ServiceSales;
