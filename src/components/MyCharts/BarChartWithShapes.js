import React from 'react'
import { Bar } from 'react-chartjs-2'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    divSettings: {


        height: '158px',
        color: 'white',
        '@media screen and (min-width: 0px) and (max-width: 400px)': { // eslint-disable-line no-useless-computed-key
            width: 'auto',
            height: '158px',
        }

    }

}));


export default function BarChartWithShapes(props) {
    const classes = useStyles();
    const { labels , titles , chartData} = props;
    const data = {
        labels: labels,
        datasets: [
            {
                fill: false,
                showLine: false,
                label: titles[0],
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
                data: chartData[1],
            },
            {
                fill: false,
                showLine: false,
                label: titles[1],
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
                data: chartData[0],
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



BarChartWithShapes.propTypes = {
    labels:PropTypes.array,
    title:PropTypes.array,
    chartData:PropTypes.array,
    
  };
  