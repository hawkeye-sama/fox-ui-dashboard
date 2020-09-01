import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";

const styles = {
    root:{
        background: "white",
        width: "78%",
        height: "550px",
        /* margin-left: auto; */
        position:" absolute",
        left: "4%",
        margin:"10px 0px",
        boxShadow:"0 3px 20px 0px rgba(60,64,67,.25)",
        zIndex:"1",
        transition:"all 0.4s cubic-bezier(0, 0, 0.2, 1) ",
        opacity:1,
        transform: "translateX(0px)",

    },
    rootHidden:{
        transform: "translateY(40px)",
        opacity:0,
    },
    leftDivStyle:{
        boxShadow:' rgba(0, 0, 0, 0.02) 4px 2px 24px 0px',
        boxSizing: 'border-box',
        padding: '0px 60px',
        minWidth:' 500px',
        maxWidth: '500px',
        minHeight: '100%',
        position: 'fixed',
        backgroundColor:"#ff7043",
        overflow: "hidden",
        zIndex:2,
        transition:"all 0.8s ease  0.3s ",
        opacity:1,
    },
    leftDivHiddenStyle:{
        zIndex:0,
        minWidth:' 0px',
        maxWidth: '0px',
       
    },
};

const useStyles = makeStyles(styles);

export default function SignUp() {
    const classes = useStyles();
    
    const [isLoaded, changeLoaded] = React.useState(false)

    const rootClass =   classNames({
        [classes.root]:(isLoaded),
        [classes.rootHidden]:(!isLoaded),
      })
    const leftDivClass =   classNames({
        [classes.leftDivStyle]:(isLoaded),
        [classes.leftDivHiddenStyle]:(!isLoaded),
    })


    React.useEffect(() => {
    // code to run on component mount
        changeLoaded(true)
    }, [])

    
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <div className={rootClass}>
                    <div className={leftDivClass}></div>
                    <div></div>
                </div>
            </GridItem>
        </GridContainer>
    );
}
