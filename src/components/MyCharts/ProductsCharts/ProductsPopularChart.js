import React from 'react'
import { Bar } from 'react-chartjs-2'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    divSettings: {

        width: '333.328px',
        height: '158px',
        color: 'white',
        '@media screen and (min-width: 0px) and (max-width: 400px)': { // eslint-disable-line no-useless-computed-key
            width: 'auto',
            height: '158px',
        }

    }

}));


export default function ProductsPopularChart() {
    const classes = useStyles();
    const data = {
        labels: ['Jan', 'Feb', 'Mar',],
        datasets: [
            {
                fill: false,
                showLine: false,
                label: 'Accessories',
                type: 'line',
                lineTension: 0.1,
                borderWidth: 5,
                backgroundColor: '#ffffff29',
                borderColor: '#ffffffb3',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#ffffffed',
                pointBackgroundColor: '#ffffffed',
                pointBorderWidth: 6,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, ],
            },
            {
                fill: false,
                showLine: false,
                label: 'Shirts',
                pointStyle: 'triangle',
                lineTension: 0.1,
                borderWidth: 5,
                type: 'line',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#ffffffed',
                pointBackgroundColor: '#ffffffed',
                pointBorderWidth: 6,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [20, 100, 56,],
            },

        ]
    };

    return (
        <div
            className={classes.divSettings}
        >

            <Bar data={data}
                height={158}
                className={classes.divSettings}
                options={{
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: "easeInOutQuint"
                    },
                    legend: {

                        labels: {
                            
                            boxWidth: 3,
                            fontColor: "#ffffffb3",
                            usePointStyle: true,

                        }
                    },

                    scales: {
                        yAxes: [{

                            gridLines: {
                                zeroLineColor: '#ffffff29',
                                borderDash: [4, 5],

                                color: "#ffffff29"

                            },
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 20,
                                fontColor: '#ffffffb3',
                                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
                            },
                            

                        },
                    
                    ],
                        xAxes: [{
                            gridLines: {
                                zeroLineColor: '#ffffff29',
                                borderDash: [4, 5],

                                color: "#ffffff29"
                            },
                            ticks: {
                                fontSize: 13,
                                fontColor: '#ffffffb3',
                                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                            },
                        }]
                    }
                }} />

        </div>
    );
}