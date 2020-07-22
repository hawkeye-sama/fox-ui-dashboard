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


export default function ProductsAddedChart() {
  const classes = useStyles();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Added',
        backgroundColor: '#ffffff29',
        borderColor: '#ffffffb3',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,1)',
        hoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 100, 55, 20, 75, 30]
      }
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
                            max:100,
                            stepSize:20,
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