import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";

const styles = {

    RightDivStyle:{
        boxSizing: 'border-box',
        minHeight: '100%',
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:10,
        overflow: "hidden",
        zIndex:2,
        transition:"transform 0.4s ease  0.6s, opacity 0.4s ease  0.6s ",
        transform: "translateY(0px)",
        opacity:1,
    },
    RightDivStyleHidden:{
        
        transform: "translateY(20px)",
        opacity:0,
       
    },

    
    
};

const useStyles = makeStyles(styles);

export default function RightDivComponent() {
    const classes = useStyles();
    
    const [isLoaded, changeLoaded] = React.useState(false)


    const rightDivClass =   classNames({
        [classes.RightDivStyle]:(isLoaded),
        [classes.RightDivStyleHidden]:(!isLoaded),
    })


    React.useEffect(() => {
    // code to run on component mount
        changeLoaded(true)
    }, [])

    
    return (

        <div className={rightDivClass}>
            <div>
                <div style={{
                    color:"#434b65",
                    fontSize: "45px",
                    fontWeight: 700,
                }}>
                    Welcome back
                </div>
                <div  style={{
                    color:"#434b65",
                    fontSize: "25px",
                    fontWeight: 700,
                }}>
                    Sign in to continue using Fox
                </div>
            </div>
            <div>

            </div>
        </div>


    );
}
