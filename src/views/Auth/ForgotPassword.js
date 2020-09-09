import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { ArrowForwardRounded, ArrowBack } from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { changeAuthPage } from "redux/actions";

const styles = {

    RightDivStyle:{
        boxSizing: 'border-box',
        minHeight: '100%',
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:10,
        overflow: "hidden",
        zIndex:2,
        transition:"transform 0.3s ease  0.4s, opacity 0.3s ease  0.4s ",
        transform: "translateY(0px)",
        opacity:1,
    },
    RightDivStyleHidden:{
        boxSizing: 'border-box',
        minHeight: '100%',
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:10,
        overflow: "hidden",
        zIndex:2,
        transition:"transform 0.2s ease  0s, opacity 0.2s ease  0s ",
        transform: "translateY(30px)",
        opacity:0,
       
    },
    RightDivStyleUnmount:{
        boxSizing: 'border-box',
        minHeight: '100%',
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:10,
        overflow: "hidden",
        zIndex:2,
        transition:"transform 0.2s ease  0s, opacity 0.2s ease  0s ",
        transform: "translateY(-30px)",
        opacity:0,
       
    },
    hrLineStyle:{
        width: "225px",
        transition: "transform 0.4s ease 0.6s",
        height: "2px",
        transform:"scaleX(1)",
        background: '#434b65',
        marginTop: "18px",
        position: "absolute",
        top: "64px",
    },
    hrLineStyleHidden:{
        transition:"transform 0.3s ease  0s, opacity 0.3s ease  0s ",
        width: "225px",
        transform:"scaleX(0)",
        height: "2px",
        background: '#434b65',
        marginTop: "18px",
        position: "absolute",
        top: "64px",

    },
    arrowStyle:{
        transition: "transform 0.3s ease 0.1s, opacity 0.15s ease 0.1s",
        transform:"translateX(10px)",
        opacity:1,
        marginLeft:4,
        marginTop:-2
    },
    arrowStyleHidden:{
      
        transform:"translateX(-10px)",
        opacity:0,
        marginTop:-2,
        marginLeft:4,
        transition: "transform 0.15s ease 0s, opacity 0.3s ease 0s",
    },
    arrowUpStyle:{
        transition: "transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s",
        transform:"translateX(-90px)",
        opacity:1,
        marginLeft:4,
        marginTop:-2
    },
    arrowUpStyleHidden:{
      
        transform:"translateX(-70px)",
        opacity:0,
        marginTop:-2,
        marginLeft:4,
        transition: "transform 0.3s ease 0s, opacity 0.3s ease 0s",
    },



    
    
};


const useStyles = makeStyles(styles);


export default function ForgotPassword(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isLoaded, changeLoaded] = React.useState(false)
    const [showArrow, changeShowArrow] = React.useState(false)
    const [showUpArrow, changeShowUpArrow] = React.useState(false)
    const [isUnmounted,changeUnmounted] = React.useState(false)
    
    

    const rightDivClass =   classNames({
        [classes.RightDivStyle]:(isLoaded),
        [classes.RightDivStyleHidden]:(!isLoaded),
    })
    const unmountClass =   classNames({
        [classes.RightDivStyleUnmount]:(isUnmounted),
        [classes.RightDivStyle]:(!isUnmounted),
    })
    
    const hrLineClass =   classNames({
        [classes.hrLineStyle]:(isLoaded),
        [classes.hrLineStyleHidden]:(!isLoaded),
    })

    const arrowClass =   classNames({
        [classes.arrowStyle]:(showArrow),
        [classes.arrowStyleHidden]:(!showArrow),
    })
    const arrowUpClass =   classNames({
        [classes.arrowUpStyle]:(showUpArrow),
        [classes.arrowUpStyleHidden]:(!showUpArrow),
    })

    React.useEffect(() => {
    // code to run on component mount
        
            changeLoaded(true)
        
      
        
    }, [])

    function handleChange(changeValue) { 
        
        changeUnmounted(true);
        setTimeout(
            () => {dispatch(changeAuthPage({ authPage: changeValue }))},
            200
        );  
          
        

    }

    
    return (
        
        <div>

            <div className={(isUnmounted)?unmountClass:rightDivClass}>
                <div>
                    <div style={{
                        color:"#434b65",
                        fontSize: "28px",
                        fontWeight: 700,
                    }}>
                        Forgot Password?
                    </div>
                    <hr className={hrLineClass} />
                    <div  style={{
                        color:"#434b65bd",
                        fontSize: "15px",
                        fontWeight: 500,
                        marginTop:20,
                    }}>
                        Provide the information below to help us recover your account
                    </div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{width:410}}>
                                    <CustomInput
                                        labelText="Email"
                                        type="text"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{
                                    width:410,
                                    marginTop:40,
                                }}>
                                    <Button color="fox" style={{
                                        marginTop:0,
                                        width:"100%",
                                        fontSize:"14px",
                                        fontWeight:"500",
                                    }}
                                        onMouseEnter={()=>{changeShowArrow(true)}}
                                        onMouseLeave={()=>{changeShowArrow(false)}}
                                        
                                    >Submit
                                        <div className={arrowClass} >
                                            <ArrowForwardRounded size="large" />
                                        </div>
                                    </Button>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{
                                    width:410,
                                    marginTop:" 8px",
                                    textAlign: "center",
                                    marginLeft: "-11px",
                                    color: "rgba(67, 75, 101, 0.74)",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                }}>
                                    OR
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{
                                    width:410,
                                    marginTop:5,
                                }}>
                                    <Button color="foxOutlined" style={{
                                        marginTop:0,
                                        width:"100%",
                                        fontSize:"14px",
                                        fontWeight:"500",
                                    }}
                                        onMouseEnter={()=>{changeShowUpArrow(true)}}
                                        onMouseLeave={()=>{changeShowUpArrow(false)}}
                                        onClick={(e)=>{handleChange("login")}}
                                        
                                    >Go Back
                                        <div className={arrowUpClass} >
                                            <ArrowBack size="large" />
                                        </div>
                                    </Button>
                                </div>
                            </GridItem>

                        </GridContainer>
                    </div>

                </div>
                <div>

                </div>
            </div>

            

        </div>


    );
}
