import { 
  hexToRgb, 
  whiteColor,
  customBlue,
  customOrange,
  customPurple,
  customPink,
  customGreen,
  customDeepOrange,
  customRed, 
} from "assets/jss/material-dashboard-react.js";


const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  indicatorStyle: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important",
    overflowX: "visible",
    "& $tabRootButton": {
      fontSize: "0.875rem"
    }
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 0px",
    paddingRight: "10px",
    paddingLeft: "10px",
    
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#646464 ",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.2)",
   
    transition: "0.2s background-color 0.1s"
  },
  customBlue:{
    color:customBlue,
  },
  customOrange:{
    color:customOrange,
  },
  customPurple:{
    color:customPurple,
  },
  customPink:{
    color:customPink,
  },
  customGreen:{
    color:customGreen,
  },
  customDeepOrange:{
    color:customDeepOrange,
  },
  customRed:{
    color:customRed,
  },
  
  
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    fontWeight: "500",
    fontSize: "12px",
    marginTop: "1px",
    "& > svg,& > .material-icons": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0 !important"
    }
  }
};

export default customTabsStyle;
