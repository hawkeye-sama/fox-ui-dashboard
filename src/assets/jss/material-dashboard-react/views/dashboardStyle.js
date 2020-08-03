import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  avartarIconButton: {
    padding: "0",
    borderColor: "#82818194",
    transition: "box-shadow 0.2s, top 0.2s",
    boxShadow: " 0 0 3px #515151",
    top: 0,
    '&:hover': {
      boxShadow: "rgba(0, 0, 0, 0.52) 3px 4px 12px 0px, rgba(55, 71, 79, 0.62) 0px 7px 10px -5px",
      top: -5,
    },

  },
  FABStyle:{
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
    transition: "all 0.2s",
    width:24,
    height:48,
    zIndex:5000,
    background: "linear-gradient(60deg, rgb(255, 112, 67), rgb(255, 112, 66))",
    boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px  rgb(255, 112, 66,0.4)",
    '&:hover': {
      boxShadow: "0 4px 20px 0 rgb(255 112 66 / 73%), 0 7px 10px -5px rgb(255 112 66 / 40%)",
      width: 200,
    },
    "&:active": {
      boxShadow: "0 4px 20px 0 rgba(0, 0, 0,0), 0 7px 10px -5px  rgb(255, 112, 66,0)",
    },
    
  }
};

export default dashboardStyle;
