import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    transition: "all 0.4s ease"
  },
  mainPanelDrawerHidden: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth-160}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    transition: "all 0.4s ease"
  },
  content: {
    marginTop: "40px",
    padding: "30px 0px",
    paddingRight: "70px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
