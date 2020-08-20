import {
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    // whiteColor,
    grayColor,
    blackColor,
    hexToRgb,
  } from "assets/jss/material-dashboard-react.js";
  
  const sidebarStyle = (theme) => ({

    drawer: {
      width: 230,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },

    drawerClose: {
      backgroundColor: "#fff",
      border: "none",
   
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1030",
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 53px 4px 0px",
      width: 70,
      [theme.breakpoints.up("md")]: {
        transition: 'width 0.4s ease',
        width: 70,
        position: "fixed",
        height: "100%",
        overflow: "hidden",
      },
    },
    drawerPaper: {
      backgroundColor: "#fff",
      border: "none",
   
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1030",
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 53px 4px 0px",
      width: 230,
      [theme.breakpoints.up("md")]: {
        transition: 'width 0.4s ease',
        width: 230,
        position: "fixed",
        height: "100%",
        overflow: "hidden",
      },
      [theme.breakpoints.down("sm")]: {
        width: drawerWidth,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        left: "auto",
        zIndex: "1032",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        transform: `translate3d(${drawerWidth}px, 0, 0)`,
        ...transition,
      },
    },
    drawerPaperRTL: {
      [theme.breakpoints.up("md")]: {
        left: "auto !important",
        right: "0 !important",
      },
      [theme.breakpoints.down("sm")]: {
        left: "0  !important",
        right: "auto !important",
      },
    },
    logo: {
      position: "relative",
      padding: "10px 15px",
      paddingTop:"5px",
      zIndex: "4",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
  
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
      },
    },
    logoLink: {
      ...defaultFont,
      textTransform: "uppercase",
      padding: "5px 0",
      display: "block",
      fontSize: "18px",
      textAlign: "left",
      fontWeight: "400",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: "#757575",
      },
      "&:focus":{
        color: "#fb8d01",
      },
    },
    logoLinkRTL: {
      textAlign: "right",
    },
    logoImage: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px",
      transition:"all 0.3s ease",
      opacity:"1",
      visibility:"visible"
    },
    logoImageHidden: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px",
      transition:"all 0.3s ease",
      opacity:"0",
      visibility: "hidden"

    },

    logoText:{
      position:"absolute",
      fontSize: "18px",
      textAlign: "left",
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      lineHeight: "30px",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      left:70,
    },
    
    logoTextHidden:{
      position:"absolute",
      fontSize: "18px",
      textAlign: "left",
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      lineHeight: "30px",
      textTransform: "uppercase",
      left:17,
      transition: "all 0.3s ease",
    },


    

    img: {
      width: "35px",
      top: "12px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0",
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: blackColor,
        opacity: ".8",
      },
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset",
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: "#757575",
        
      },
    },
    itemLink: {
      width: "auto",
      transition: "all 200ms linear",
      margin: "10px 0px 0",
      
      position: "relative",
      display: "block",
      padding: "10px 15px",
      background: "transparent",
      
      paddingLeft:15,
      "&:hover":{
        paddingLeft:25,
        
      },
      ...defaultFont,
    },
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "#9e9e9e",
    },
    itemDivSettings:{
      marginLeft: "15px",
      transition: "all 0.4s ease",
    },
    itemDivSettingsHidden:{
      marginLeft: "5px",
      transition: "all 0.4s ease",
    },
    itemIconRTL: {
      marginRight: "3px",
      marginLeft: "15px",
      float: "right",
    },
    itemText: {
      ...defaultFont,
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: "#9e9e9e",
      visibility:"visible",
      opacity:1,
      transition: "visibility 0.4s ease, opacity 0.4s ease "
    },
    itemTextHidden: {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: "#9e9e9e",
      visibility:"hidden",
      opacity:0,
      transition: "visibility 0.4s ease, opacity 0.4s ease "
    },
    
    itemTextRTL: {
      textAlign: "right",
    },
    whiteFont: {
      color: "#fb8d01",
    },
    purple: {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow,
      "&:hover,&:focus": {
        backgroundColor: primaryColor[0],
        ...primaryBoxShadow,
      },
    },
    blue: {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: infoColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(infoColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(infoColor[0]) +
          ",.2)",
      },
    },
    green: {
      backgroundColor: successColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(successColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: successColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(successColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(successColor[0]) +
          ",.2)",
      },
    },
    orange: {
      backgroundColor: warningColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: warningColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(warningColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(warningColor[0]) +
          ",.2)",
      },
    },
    grey: {
        backgroundColor: "#eeeeee",
        
        "&:hover,&:focus": {
          backgroundColor: "#eeeeee",

      },
    },
    red: {
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: dangerColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.2)",
      },
    },
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch",
    },
    activePro: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        width: "100%",
        bottom: "13px",
      },
    },
    customBlue:{
      color:"#00bcd4"
    },
    customOrange:{
      color:"#fe9d18"
    },
    customPurple:{
      color:"#7e57c2"
    },
    customPink:{
      color:"#ec407a"
    },
    customGreen:{
      color:"#66bb6a",
    },
    customDeepOrange:{
      color:"#ff7043"
    },
    customRed:{
      color:"#ef5350"
    },
    customYellow:{
      color:"#f57f17"
    },

    customBlueSelected:{

      background: "linear-gradient(90deg, rgb(0 188 212) 1%, rgba(59,0,255,0) 2%)",

    },
    

    customOrangeSelected:{
      background: "linear-gradient(90deg, rgb(254 157 24) 1%, rgba(59,0,255,0) 2%)",
    },
    customPurpleSelected:{
      background: "linear-gradient(90deg, rgb(126 87 194) 1%, rgba(59,0,255,0) 2%)",
    },
    customPinkSelected:{
      background: "linear-gradient(90deg, rgb(236 64 122) 1%, rgba(59,0,255,0) 2%)",
    },
    customGreenSelected:{
      background: "linear-gradient(90deg, rgb(102 187 106) 1%, rgba(59,0,255,0) 2%)",
    },
    customDeepOrangeSelected:{
      background: "linear-gradient(90deg, rgb(255 112 67) 1%, rgba(59,0,255,0) 2%)",
    },
    customRedSelected:{
      background: "linear-gradient(90deg, rgb(239 83 80) 1%, rgba(59,0,255,0) 2%);"
    }
    
  });
  
  export default sidebarStyle;
  