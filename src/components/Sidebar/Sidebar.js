/*eslint-disable*/
import React,{useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";
import { useDispatch } from "react-redux";
import styles from "assets/jss/material-dashboard-react/components/customSideBarStyle.js";
import { changePageAnimation } from "../../redux/actions";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [prevTab,updatePrevTab] = useState(0);
  
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  function handlePageClick(tab){
    var animationType="up"
    if(prevTab > tab ){
      animationType = "down"
      
    }else if(prevTab<tab){
      animationType = "up"
    }

    updatePrevTab(tab);
    dispatch(changePageAnimation({ pageAnimation: {animationType:animationType} }))
  }

  const { color, logo, logoText,logoTextIntials, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[[color]]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[prop.myColor+"Selected"]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes[prop.myColor]]: activeRoute(prop.layout + prop.path)
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
            onClick={(e)=>{handlePageClick(prop.tab)}}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {/* <div style={{marginLeft:15}}> */}
              <div className={classNames({
                  [classes.itemDivSettings]:(!props.hambugerClicked),
                  [classes.itemDivSettingsHidden]:(props.hambugerClicked),
              })}
              >

              
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                  <div>
                    {(activeRoute(prop.layout + prop.path) === true) ?

                      <prop.icon
                        className={classNames(classes.itemIcon, whiteFontClasses,  {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                        style={{color: classes[prop.myColor]}}
                      />
                      :
                      <prop.secondaryIcon
                        className={classNames(classes.itemIcon,classes[prop.myColor], whiteFontClasses, {
                          [classes.itemIconRTL]: props.rtlActive
                        })}
                      />
                    }
                  </div>


                )}
              <Hidden smDown implementation="css">
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames({
                    [classes.itemText]:(!props.hambugerClicked),
                    [classes.itemTextHidden]:(props.hambugerClicked),
                    [whiteFontClasses]:(!props.hambugerClicked),
                    [classes.itemTextRTL]: props.rtlActive
                  })}
                  disableTypography={true}
                />
              </Hidden>
              <Hidden mdUp implementation="css">
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames({
                    [classes.itemText]:true,
                    [whiteFontClasses]:true,
                    [classes.itemTextRTL]: props.rtlActive
                  })}
                  disableTypography={true}
                />
              </Hidden>

              </div>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href=""
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
        target="_blank"
      >
        <div className={classNames ({
            [classes.logoImage]:(!props.hambugerClicked),

            [classes.logoImageHidden] : (props.hambugerClicked),
          
          })}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        <span className={classNames({
          [classes.logoText]:(!props.hambugerClicked),
          [classes.logoTextHidden]:(props.hambugerClicked),
        })}> 
          {(!props.hambugerClicked)?(logoText):(logoTextIntials)}
        </span>
       
      </a>
    </div>
  );



  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "left" : "right"}
          variant="permanent"
          open
          classes={{
            paper: classNames( {
              [classes.drawerPaperRTL]: props.rtlActive,
              [classes.drawerPaper] : (!props.hambugerClicked),
              [classes.drawerClose] : (props.hambugerClicked),
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red",'grey']),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
