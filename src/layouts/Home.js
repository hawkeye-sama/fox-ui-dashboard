import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Footer from "components/Footer/Footer.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

// import bgImage from "assets/img/sidebar-2.jpg";
// import logo from "assets/img/reactlogo.png";
import CustomNavbar from "../components/CustomNavbars/CustomNavbar.js";


let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route
            path={prop.layout + prop.path}
            key={key}
            component={() => <prop.component myTab={prop.tab} />}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Home({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  // const [image, setImage] = React.useState(bgImage);
  // const [color, setColor] = React.useState("blue");
  // const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hambugerClicked,setHambugerClicked] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  // const handleImageClick = (image) => {
  //   setImage(image);
  // };
  // const handleColorClick = (color) => {
  //   setColor(color);
  // };
  // const handleFixedClick = () => {
  //   if (fixedClasses === "dropdown") {
  //     setFixedClasses("dropdown show");
  //   } else {
  //     setFixedClasses("dropdown");
  //   }
  // };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/home/auth";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  function handleScrollEvent(e){
    if(e.target.scrollTop > 20){
      setIsScrolling(true)
      
    }
    else{
      setIsScrolling(false)
    }
   
  }

  return (
    <div className={classes.wrapper} onScroll={(e)=>{handleScrollEvent(e)}} >
      <div 
        className={classNames({
          [classes.mainPanel]:(!hambugerClicked),
          [classes.mainPanelDrawerHidden]:(hambugerClicked),
        })}
        ref={mainPanel}>
        
        <CustomNavbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          setHamburderHandler={setHambugerClicked}
          hambugerClicked={hambugerClicked}
          {...rest}
          isScrolling = {isScrolling}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          
          <div className={classes.content}>
        
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.content}>
        
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        )}
        <Footer /> 
      </div>
    </div>
  );
}
