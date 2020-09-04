import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const styles = {

    RightDivStyle:{
        boxSizing: 'border-box',
        minHeight: '100%',
        paddingLeft:20,
        paddingTop:50,
        paddingBottom:10,
        overflow: "hidden",
        zIndex:2,
        transition:"transform 0.4s ease  1.3s, opacity 0.4s ease  1.3s ",
        transform: "translateY(0px)",
        opacity:1,
    },
    RightDivStyleHidden:{
        
        transform: "translateY(30px)",
        opacity:0,
       
    },
    hrLineStyle:{
        width: "300px",
        transition: "transform 0.6s ease 1.5s",
        height: "2px",
        transform:"scaleX(1)",
        background: '#434b65',
        marginTop: "15px",
        position: "absolute",
        top: "73px",
    },
    hrLineStyleHidden:{
        width: "300px",
        transform:"scaleX(0)"

    }

    
    
};

const useStyles = makeStyles(styles);

export default function RightDivComponent() {
    const classes = useStyles();
    
    const [isLoaded, changeLoaded] = React.useState(false)


    const rightDivClass =   classNames({
        [classes.RightDivStyle]:(isLoaded),
        [classes.RightDivStyleHidden]:(!isLoaded),
    })
    const hrLineClass =   classNames({
        [classes.hrLineStyle]:(isLoaded),
        [classes.hrLineStyleHidden]:(!isLoaded),
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
                <hr className={hrLineClass} />
                <div  style={{
                    color:"#434b65bd",
                    fontSize: "16px",
                    fontWeight: 500,
                    marginTop:30,
                }}>
                    Sign in to continue using Fox
                </div>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={10}>
                            <CustomInput
                                labelText="Email"
                                type="text"
                                id="email"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                            <CustomInput
                                labelText="Password"
                                type="password"
                                id="password"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                            asdasd
                        </GridItem>
                        
                    </GridContainer>
                </div>
            </div>
            <div>

            </div>
        </div>


    );
}
