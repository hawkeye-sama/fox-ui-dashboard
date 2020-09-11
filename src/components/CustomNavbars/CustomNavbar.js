import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import {Menu } from "@material-ui/icons";
// core components
// import AdminNavbarLinks from "./CustomNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";

// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/customNavbarStyle.js";
import { Grid} from "@material-ui/core";

import NavbarTabs from "../NavbarTabs/NavbarTabs.js";

const useStyles = makeStyles(styles);

export default function CustomNavbar(props) {
  const classes = useStyles();
  
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  //const [hambugerClicked,updateClick] = React.useState(props.hambugerClicked)
  // function makeBrand() {
  //   var name;
  //   props.routes.map(prop => {
  //     if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
  //       name = props.rtlActive ? prop.rtlName : prop.name;
  //     }
  //     return null;
  //   });
  //   return name;
  // }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  const appBarMain = classNames({
    [classes.appBarHidden]: (props.hambugerClicked),
    [classes.appBar]: ((!props.hambugerClicked) && props.isScrolling),
    [classes.appBarBeforeScroll]: ((!props.hambugerClicked) && !props.isScrolling),
    
    
  })
  // const iconButton= classNames({
  //   [classes.iconButton]: (!props.hambugerClicked),
  //   [classes.iconButtonHidden]: (props.hambugerClicked),
    
  // })

  React.useEffect(() => {
   
    
  }, [props.isScrolling]);

  

  return (
    <AppBar className={appBarMain + appBarClasses} >
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
         
          <Hidden smDown implementation="css">
            <Grid container>
              <Grid item xs={12} md={12} style={{textAlignLast:"center"}}>
                <div className={classes.tabsDiv}>
                    <NavbarTabs />

                </div>
      
                {/* <Button  color="transparent" href="#" className={classes.title}>
                  {makeBrand()}
                </Button>
         */}
              </Grid>
            </Grid>

     


          </Hidden>
          <Hidden mdUp implementation="css">
            {/* <Button color="transparent" href="#" className={classes.title}>
              {makeBrand()}
            </Button> */}
          </Hidden>

        </div>
        <Hidden smDown implementation="css">
          <div style={{
            position:" absolute",
            zIndex: 200,
            right: "11%",
            top: "0%",
          }}>
            <Button color="foxOutlined" style={{
                  marginTop:8,
                  width:"80%",
                  fontSize:"14px",
                  fontWeight:"400",
                  borderRadius:20,
                  height:30,
              }}

                  // onMouseEnter={()=>{changeShowUpArrow(true)}}
                  // onMouseLeave={()=>{changeShowUpArrow(false)}}
                  
              >Login

                  {/* <div className={arrowUpClass} >
                      <ArrowUpward size="large" />
                  </div> */}
              </Button>

          </div>

          <div style={{
            position:" absolute",
            zIndex: 200,
            right: "3%",
            top: "0%",
          }}>
            <Button color="fox" style={{
                  marginTop:8,
                  width:"80%",
                  fontSize:"14px",
                  fontWeight:"400",
                  borderRadius:20,
                  height:30,
              }}

                  // onMouseEnter={()=>{changeShowUpArrow(true)}}
                  // onMouseLeave={()=>{changeShowUpArrow(false)}}
                  
              >Sign Up

                  {/* <div className={arrowUpClass} >
                      <ArrowUpward size="large" />
                  </div> */}
              </Button>

          </div>

            



        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

CustomNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
