import {
    // primaryColor,
    dangerColor,
    successColor,
    grayColor,
    defaultFont
  } from "assets/jss/material-dashboard-react.js";
  
  const customSelectStyle = {
    disabled: {
      "&:before": {
        backgroundColor: "transparent !important"
      }
    },
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderColor: grayColor[4] + " !important",
        borderWidth: "1px !important"
      },
      "&:after": {
        borderColor: "#ff9800"
      }
    },
    underlineError: {
      "&:after": {
        borderColor: dangerColor[0]
      }
    },
    underlineSuccess: {
      "&:after": {
        borderColor: successColor[0]
      }
    },
    labelRoot: {
      ...defaultFont,
      color: grayColor[3] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      letterSpacing: "unset"
    },
    labelRootError: {
      color: dangerColor[0]
    },
    labelRootSuccess: {
      color: successColor[0]
    },
    feedback: {
      position: "absolute",
      top: "18px",
      right: "20px",
      zIndex: "2",
      display: "block",
      width: "24px",
      height: "24px",
      textAlign: "center",
      pointerEvents: "none"
    },
    marginTop: {
      marginTop: "16px",
      backgroundColor:"blue"
    },
    formControl: {
      paddingBottom: "10px",
      margin: "27px 0 0 0",
      position: "relative",
      verticalAlign: "unset"
    }
  };
  
  export default customSelectStyle;
  