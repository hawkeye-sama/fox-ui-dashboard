import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import classNames from "classnames";
import LeftDivComponent from "./LeftDivComponent";
import RightDivComponent from "./RightDivComponent";
import Grid from '@material-ui/core/Grid';

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
        flexGrow: 1,

    },
    rootHidden:{
        transform: "translateY(60px)",
        opacity:0,
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

    React.useEffect(() => {
    // code to run on component mount
        changeLoaded(true)
    }, [])

    
    return (
        <GridContainer>

                <div className={rootClass}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <LeftDivComponent />
                        </Grid>
                        <Grid item xs={6}>
                            <RightDivComponent />
                        </Grid>
                    </Grid>
                </div>
           
        </GridContainer>
    );
}
