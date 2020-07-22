import React from 'react'
import { Line } from 'react-chartjs-2'

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


export default function ProductsViewedChart() {
  const classes = useStyles();
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: 'Products Viewed',
        fill: true,
        lineTension: 0.1,
        borderWidth:5,
        backgroundColor: '#ffffff29',
        borderColor: '#ffffffb3',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [12, 17, 7, 17, 23, 18, 38],
        
      }
    ],
  };

    return (
      <div
        className={classes.divSettings}       
      >
       
        <Line data={data}           
          height={158}
          className={classes.divSettings}
          options={{
            maintainAspectRatio: false,
            animation: {
              duration: 1500,
              easing:"easeInOutQuint"
            },
                  legend:{
                    display: false,
                    labels:{
                      display: false,
                      fontColor: "#ffffffb3"
                    }
                  },
                  
                  scales: {
                    yAxes: [{
                        gridLines:{
                          zeroLineColor: '#ffffff29',
                          borderDash: [4, 5],
                        
                          color:"#ffffff29"
                          
                        },
                        ticks: {
                            min:0,
                            max:40,
                            stepSize:10,
                            fontColor: '#ffffffb3',
                            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
                        },
                    }],
                  xAxes: [{
                        gridLines:{
                          zeroLineColor: '#ffffff29',
                          borderDash: [4, 5],
                         
                          color:"#ffffff29"
                        },
                        ticks: {
                            fontSize:13,
                            fontColor: '#ffffffb3',
                            fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                    }]
                }
        }} />
      </div>
    );
}