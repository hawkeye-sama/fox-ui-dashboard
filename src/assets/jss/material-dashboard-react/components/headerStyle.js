import {
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-react.js";

const headerStyle = () => ({
  appBarHidden: {
    backgroundColor: "white",
 
    borderBottom: "0",
    marginBottom: "0",
    position: "fixed",
    width: "100%",
    zIndex: "1029",
    color: grayColor[7],
    border: "0",
    borderRadius: "3px",
    // padding: "10px 0",
   
    minHeight: "48px",
    display: "block",
    boxShadow:" 5px 1px 2px 0 rgba(60,64,67,.3), 10px 2px 6px 2px rgba(60,64,67,.15)",
    transition: "all 0.4s ease",
    '@media screen and (min-width: 0px) and (max-width: 400px)': { // eslint-disable-line no-useless-computed-key
      width: "100%",
      backgroundColor: "white",
      borderBottom: "0",
      marginBottom: "0",
      position: "fixed",
      zIndex: "1029",
      color: grayColor[7],
      border: "0",
      borderRadius: "3px",
      // padding: "10px 0",
      minHeight: "48px",
      display: "block",
      transition: "all 0.4s ease",
      boxShadow:"3px 1px 2px 0 rgba(60,64,67,.3), 8px 2px 6px 2px rgba(60,64,67,.15)",
    }
  },
  appBar:{
    backgroundColor: "white",
    borderBottom: "0",
    marginBottom: "0",
    position: "fixed",
    width: "100%",
    zIndex: "1029",
    color: grayColor[7],
    border: "0",
    borderRadius: "3px",
    // padding: "10px 0",
    
    minHeight: "48px",
    display: "block",
    boxShadow:"8px 1px 2px 0 rgba(60,64,67,.3), 13px 2px 6px 2px rgba(60,64,67,.15)",
    transition: "all 0.4s ease",
    '@media screen and (min-width: 0px) and (max-width: 400px)': { // eslint-disable-line no-useless-computed-key
      width: "100%",
      backgroundColor: "white",
      borderBottom: "0",
      marginBottom: "0",
      position: "fixed",
      zIndex: "1029",
      color: grayColor[7],
      border: "0",
      borderRadius: "3px",
      // padding: "10px 0",
     
      minHeight: "48px",
      display: "block",
      transition: "all 0.4s ease",
      boxShadow:"3px 1px 2px 0 rgba(60,64,67,.3), 8px 2px 6px 2px rgba(60,64,67,.15)",
    }
  },
  iconButton:{
    marginLeft:240,
    transition: "all 0.4s ease"
  },
  iconButtonHidden:{
    marginLeft:80,
    transition: "all 0.4s ease"
  },

  container: {
    paddingRight: "0",
    paddingLeft: "0",
    marginRight: "0",
    marginLeft: "0",
    minHeight: "50px"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  }
});

export default headerStyle;
