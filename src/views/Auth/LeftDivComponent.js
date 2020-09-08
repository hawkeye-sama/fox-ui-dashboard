import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import AuthIcon from "./Icon"

const styles = {

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
        transition:"all 0.6s ease  0.3s ",
        opacity:1,
        borderRadius:"40px 0 0 40px",
    },
    leftDivHiddenStyle:{
        zIndex:0,
        minWidth:' 0px',
        maxWidth: '0px',
        borderRadius:"40px 0 0 40px",
       
    },
    brand:{
        opacity:1,
        transition:"opacity 0.4s ease 0.8s,transform 0.4s ease 0.8s ",
        transform: "translateX(0px)",
        color: "white",
        fontWeight: "bolder",
        marginTop:"45px",
    },
    brandHidden:{
        opacity:0,
        transform: "translateX(-40px)",
        color: "white",
        
    },
    leftDivContent:{
        marginTop: 45,
        opacity:1,
        transition:"opacity 0.4s ease 0.9s,transform 0.4s ease 0.9s ",
        transform: "translateX(0px)",
        color: "white",
        fontWeight: "bolder",
       
    },
    leftDivContentHidden:{
        opacity:0,
        transform: "translateX(-40px)",
        color: "white",
    },
    iconDivStyle:{
        opacity:1,
        transition:"opacity 0.4s ease 1.0s,transform 0.4s ease 1.0s ",
        transform: "translateX(0px)",
    },
    iconDivStyleHidden:{
        opacity:0,
        transform: "translateX(-40px)",
    },
    spanStyle:{
        background:" white",
        color: "#ff7043",
        borderRadius: "10px",
        padding: "5px 10px",
        marginLeft: "7px",
        opacity:1,
        transition:"opacity 0.4s ease 1.1s,margin-left 0.4s ease 1.1s ",
       
        
    },
    spanStyleHidden:{

        opacity:0,
        marginLeft: "-20px",
        
    },
    
    
    
    
};

const useStyles = makeStyles(styles);

export default function LeftDivComponent() {
    const classes = useStyles();
    
    const [isLoaded, changeLoaded] = React.useState(false)


    const leftDivClass =   classNames({
        [classes.leftDivStyle]:(isLoaded),
        [classes.leftDivHiddenStyle]:(!isLoaded),
    })
    const brandClass =   classNames({
        [classes.brand]:(isLoaded),
        [classes.brandHidden]:(!isLoaded),
    })
    const contentClass =   classNames({
        [classes.leftDivContent]:(isLoaded),
        [classes.leftDivContentHidden]:(!isLoaded),
    })
    const iconDivClass =   classNames({
        [classes.iconDivStyle]:(isLoaded),
        [classes.iconDivStyleHidden]:(!isLoaded),
    })
    const spanClass =   classNames({
        [classes.spanStyle]:(isLoaded),
        [classes.spanStyleHidden]:(!isLoaded),
    })

    React.useEffect(() => {
    // code to run on component mount
        changeLoaded(true)
    }, [])

    
    return (

        <div className={leftDivClass}>
            <div className={brandClass}>
                <h2 style={{fontWeight:500}}>
                    Fox
                    <span 
                        className={spanClass}>UI</span>
                </h2>
            </div>
            <div>
                <div className={contentClass}>
                    <h4 style={{fontWeight:400}}>
                        Just a few clicks away from joining such an amazing UI.
                    </h4>
                </div>
                <div className={iconDivClass}>
                    <AuthIcon isLoaded={isLoaded} />
                    
                </div>
            </div>
        </div>


    );
}
