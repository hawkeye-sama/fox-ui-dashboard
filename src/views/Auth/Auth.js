import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import classNames from "classnames";
import LeftDivComponent from "./LeftDivComponent";
import SignUpComponent from "./SignUpComponent";
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import ForgotPassword from "./ForgotPassword";


const styles = {
    root:{
        background: "white",
        width: "78%",
        height: "570px",
        /* margin-left: auto; */
        position:" absolute",
        left: "4%",
        margin:"0px 0px",
        boxShadow:"0 0 0 0",
        zIndex:"1",
        transition:"all 0.4s cubic-bezier(0, 0, 0.2, 1) ",
        opacity:1,
        transform: "translateY(0px)",
        flexGrow: 1,
        borderRadius:40,

    },
    rootHidden:{
        transform: "translateY(40px)",
        opacity:0,
    },




    
    
};

const useStyles = makeStyles(styles);

export default function Auth() {
    const classes = useStyles();
    const authPage = useSelector(state => state.authPage);
    const [isLoaded, changeLoaded] = React.useState(false)
    const [selectAuthPage,changeSelectAuthPage] = React.useState(authPage);

    const rootClass =   classNames({
        [classes.root]:(isLoaded),
        [classes.rootHidden]:(!isLoaded),
      })
      

      

    React.useEffect(() => {
    // code to run on component mount
        changeLoaded(true)
       
        changeSelectAuthPage(authPage);
       
       
    }, [authPage])

    
    return (
        <GridContainer>

                <div className={rootClass}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <LeftDivComponent />
                        </Grid>
                       
                            <Grid item xs={6}>
                            <div >
                                {
                                    {
                                    'signup': <SignUpComponent />,
                                    'login': <LoginComponent />,
                                    'forgotpassword': <ForgotPassword />
                                    
                                    }[selectAuthPage]
                                }
                            
                            </div>
                            </Grid>
                        
                    </Grid>
                </div>
           
        </GridContainer>
    );
}
